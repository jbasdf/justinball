webpackJsonp([83715115209300],{1006:function(e,a){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2009-09-02-amazon-ruby-and-signing_authenticating-your-requests/index.md absPath of file >>> MarkdownRemark",html:"<p>UPDATE: If you don't want to bother with the code and instead would just like to get your <a href=\"http://www.my-amazon-feeds.com/\">Amazon.com Wishlist rss you can go here</a>.</p>\n<p>I've been playing with the <a href=\"http://docs.amazonwebservices.com/AWSECommerceService/latest/DG/index.html?AnatomyOfaRESTRequest.html\">Amazon API</a> lately.  At first I just wanted to get the RSS feed to my wish list and I followed the direction in <a href=\"http://developer.amazonwebservices.com/connect/entry.jspa?externalID=379\">this article on the Amazon developer site</a>.  Don't bother with that article.  <a href=\"http://www.xml.com/pub/a/2006/08/30/generating-rss-with-xslt-and-amazon-ecs.html\">This one on xml.com is a bit out of date, but still useful</a>.  Getting the RSS feed for your profile on most sites is a pretty simple process.  On Amazon it's not.  It's a total pain in the butt.  Shame on them for not making this process easier.  I shouldn't have to interact with a full API just to gain access to an RSS feed.  Also, for any Amazon people out there would you mind keeping your documentation up to date or at least marking old articles as invalid so that I don't waste my time with stuff that doesn't work anymore?</rant>.</p>\n<p>OK so you don't actually care about all the crap you just want the guts.  I took the basic structure from <a href=\"http://www.caliban.org/ruby/ruby-aws/\">ruby-aaws</a>.  Look there if you want a complete library.  Here's how to sign your Amazon requests using ruby code.</p>\n<pre><code class=\"ruby\">\n\nrequire 'rubygems'\nrequire 'openssl'\n\nclass Amazon\n\n  # Do we have support for the SHA-256 Secure Hash Algorithm?\n  # Note that Module#constants returns Strings in Ruby 1.8 and Symbols in 1.9.\n  DIGEST_SUPPORT = OpenSSL::Digest.constants.include?('SHA256') || OpenSSL::Digest.constants.include?(:SHA256)\n\n  # Requests are authenticated using the SHA-256 Secure Hash Algorithm.\n  DIGEST = OpenSSL::Digest::Digest.new('sha256') if DIGEST_SUPPORT\n\n  AMAZON_SITES = {\n    :ca => 'http://ecs.amazonaws.ca/onca/xml',\n    :de => 'http://ecs.amazonaws.de/onca/xml',\n    :fr => 'http://ecs.amazonaws.fr/onca/xml',\n    :jp => 'http://ecs.amazonaws.jp/onca/xml',\n    :uk => 'http://ecs.amazonaws.co.uk/onca/xml',\n    :us => 'http://ecs.amazonaws.com/onca/xml'\n  }\n\n  # Sign an amazon query\n  # Requires openssl and that GlobalConfig.amazon_secret_access_key be defined.\n  # Based on ruby-aaws and documentation here\n  # http://www.caliban.org/ruby/ruby-aws/\n  # http://docs.amazonwebservices.com/AWSECommerceService/latest/DG/index.html?RequestAuthenticationArticle.html\n  # Parameters\n  # query:    The query to be signed\n  # locale:   Locale for the specific amazon site to use valid values are ca, de, fr, jp, uk, us\n  def self.sign_query(uri, query, amazon_secret_access_key, locale = :us)\n    raise 'SHA-256 not available in this version of openssl.  Cannot sign Amazon requests.' unless DIGEST_SUPPORT\n    query << \"&Timestamp=#{Time.now.utc.strftime('%Y-%m-%dT%H:%M:%SZ')}\"\n    new_query = query.split('&').collect{|param| \"#{param.split('=')[0]}=#{url_encode(param.split('=')[1])}\"}.sort.join('&')\n    to_sign = \"GET\\n%s\\n%s\\n%s\" % [uri.host, uri.path, new_query]\n    hmac = OpenSSL::HMAC.digest(DIGEST, amazon_secret_access_key, to_sign)\n    base64_hmac = [hmac].pack('m').chomp\n    signature = url_encode(base64_hmac)\n    new_query << \"&Signature=#{signature}\"\n  end\n\n  # Encode a string, such that it is suitable for HTTP transmission.\n  def self.url_encode(string)\n    # Shamelessly plagiarised from Wakou Aoyama's cgi.rb, but then altered slightly to please AWS.\n    string.gsub( /([^a-zA-Z0-9_.~-]+)/ ) do\n      '%' + $1.unpack( 'H2' * $1.bytesize ).join( '%' ).upcase\n    end\n  end\n\nend\n\n</pre></code>\n<p>I put together another class to make the requests:</p>\n<pre><code class=\"ruby\">\nrequire 'rubygems'\nrequire 'httparty'\nclass AmazonRequest\n  include HTTParty\n  format :xml\n\n  # Initialize Amazon Request.  Obtain valid Amazon credentials from your developer account\n  # Parameters:\n  # amazon_access_key_id:     Valid Amazon access key\n  # amazon_secret_access_key: Valid Amazon secret access key\n  # amazon_associate_tag:     Valid Amazon associates tag (optional)\n  # locale:                   Locale for the specific amazon site to use valid values are :ca, :de, :fr, :jp, :uk, :us (optional, default is us)\n  def initialize(amazon_access_key_id, amazon_secret_access_key, amazon_associate_tag = nil, locale = :us)\n    @amazon_access_key_id = amazon_access_key_id\n    @amazon_secret_access_key = amazon_secret_access_key\n    @amazon_associate_tag = amazon_associate_tag\n    @locale = locale\n  end\n\n  # Generate rss feeds for the give email\n  # Parameters:\n  # email:    email for which to find feeds.\n  def get_amazon_feeds(email)\n    wishlists = get_customer_wishlists(email)\n    if !wishlists.blank?\n      wishlist_ids = wishlists.collect{|list| list['ListId']}\n      generate_wishlist_rss(wishlist_ids)\n    end\n  end\n\n  # Get matching id for the given email\n  # Parameters:\n  # email:  customer's email.\n  def get_customer_id(email)\n    query = \"Operation=CustomerContentSearch&Email=#{email}\"\n    result = make_request(query)\n    if result['CustomerContentSearchResponse']['Customers']['TotalResults'].to_i > 0\n      result['CustomerContentSearchResponse']['Customers']['Customer'][0]\n    end\n  end\n\n  # Get information for the given customer id\n  def get_customer_information(customer_id)\n    query = \"Operation=CustomerContentLookup&ResponseGroup=CustomerLists&CustomerId=#{customer_id}\"\n    make_request(query)\n  end\n\n  # Get customer's wishlist ids\n  def get_customer_wishlists(email)\n    query = \"Operation=ListSearch&ListType=WishList&Email=#{email}\"\n    result = make_request(query)\n    result['ListSearchResponse']['Lists']['List']\n  end\n\n  def generate_wishlist_rss(wishlist_ids)\n    feeds = []\n    wishlist_ids.each do |wishlist_id|\n      query = \"Operation=ListLookup&ListType=WishList&ListId=#{wishlist_id}&ResponseGroup=ItemAttributes,ListItems,ListInfo,Offers&Sort=DateAdded&Style=#{Amazon::ECS_TO_RSS_WISHLIST}\"\n      feeds << make_xslt_request(query)\n    end\n    feeds\n  end\n\n  protected\n    def make_request(query)\n      add_required_params(query)\n      uri = Amazon::AMAZON_SITES[@locale]\n      signed_query = Amazon.sign_query(URI.parse(uri), query, @amazon_secret_access_key)\n      AmazonRequest.get(uri, :query => signed_query)\n    end\n\n    def make_xslt_request(query)\n      add_required_params(query)\n      uri = Amazon::AMAZON_XSLT_SITES[@locale]\n      signed_query = Amazon.sign_query(URI.parse(uri), query, @amazon_secret_access_key)\n      \"#{uri}?#{signed_query}\"\n    end\n\n    def add_required_params(query)\n      query << \"&Service=AWSECommerceService\"\n      query << \"&AWSAccessKeyId=#{@amazon_access_key_id}\"\n      query << \"&AssociateTag=#{@amazon_associate_tag}\" if @amazon_associate_tag\n      query << \"&Version=2009-07-01\"\n    end\nend\n</pre></code>\n<p>And finally make the calls:</p>\n<pre><code class=\"ruby\">\namazon_associate_tag = 'jbasdf-20' # feel free to use my associate tag :-)\namazon_secret_access_key = 'your secret key'\namazon_access_key_id = 'your access key'\nemail = 'testguy@example.com' # put a valid Amazon email here\n\nam = AmazonRequest.new(amazon_access_key_id, amazon_secret_access_key, amazon_associate_tag)\nputs am.get_amazon_feeds(email)\n</pre></code>\n<p>This will give you a list of wishlist RSS feeds.</p>\n<p>That was way to freakin' hard for something so simple.  Amazon gets an 'F'.</p>",frontmatter:{title:"Amazon Wishlist RSS, Ruby and Signing/Authenticating your Requests",date:"September 02, 2009",imageUrl:null,image:null}}},pathContext:{path:"/amazon-ruby-and-signing_authenticating-your-requests"}}}});
//# sourceMappingURL=path---amazon-ruby-and-signing-authenticating-your-requests-ec85ac4cfbc2b389445b.js.map