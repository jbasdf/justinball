webpackJsonp([0x7203500c34c6],{1128:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2010-06-02-fireeagle-and-portablecontacts-dont-get-along-that-makes-daddy-mad/index.md absPath of file >>> MarkdownRemark",html:"<p>I have some code that looks like this:</p>\n<pre><code class=\"ruby\">\n  user.google.portable_contacts.all\n</pre></code>\n<p>As long as user.google is a valid token provided by oauth you will get back a list of the user's contacts from gmail.</p>\n<p>That is unless you have the Fireeagle gem included in your application. In that case you will spend the night swearing like a sailor and then weeping openly like a little girl. If you include fireeagle 0.8.0.1 in your project and make that call you will get an error like this:</p>\n<pre><code class=\"ruby\">\nActionView::TemplateError (wrong number of arguments (1 for 0)) on line #7 of /Library/Ruby/Gems/1.8/gems/muck-invites-0.1.12/app/views/invites/_gmail_oauth.erb:\n    /Library/Ruby/Gems/1.8/gems/oauth-0.4.0/lib/oauth/consumer.rb:154:in `create_http'\n    /Library/Ruby/Gems/1.8/gems/oauth-0.4.0/lib/oauth/consumer.rb:154:in `request'\n    /Library/Ruby/Gems/1.8/gems/oauth-0.4.0/lib/oauth/tokens/consumer_token.rb:25:in `request'\n    /Library/Ruby/Gems/1.8/gems/oauth-0.4.0/lib/oauth/tokens/access_token.rb:11:in `request'\n    /Library/Ruby/Gems/1.8/gems/oauth-0.4.0/lib/oauth/tokens/access_token.rb:24:in `get'\n    /Library/Ruby/Gems/1.8/gems/portablecontacts-0.1.0/lib/portable_contacts.rb:55:in `get'\n    /Library/Ruby/Gems/1.8/gems/portablecontacts-0.1.0/lib/portable_contacts.rb:43:in `all'\n    /Users/jbasdf/projects/muck-oauth/app/helpers/muck_oauth_helper.rb:32:in `gmail_contacts'\n    /Users/jbasdf/projects/muck-oauth/app/helpers/muck_oauth_helper.rb:16:in `gmail_contacts_as_array'\n</pre></code>\n<p>Naturally you will follow the stack trace down to the call in the oauth gem to create_http. Then you will look at the call to it and everything will look fine. The oauth gem works for everyone else. Why does it not work? WTF? Stupid code. I should have dropped out of engineering and become a business major. Seriously WTF? This code is never even called. What the hell!!!!!</p>\n<p>Then you will remember that ruby is the best, most awesome language ever and you can replace methods dynamically on the fly, and  you will figure out that the create_http method being called is not the one in the file you are looking at.</p>\n<p>Next you get to figure out what method is being called. It took a lot of colorful language, some lost hair, my wife almost left me, but by luck I found it:</p>\n<pre><code class=\"ruby\">\n# FireEagle addition to the <code>OAuth::Consumer</code> class\nclass OAuth::Consumer\n  alias_method :create_http_with_verify, :create_http\n  # Monkey patch to silence the SSL warnings\n  def create_http_without_verify #:nodoc:\n    http_object             = create_http_with_verify\n    http_object.verify_mode = OpenSSL::SSL::VERIFY_NONE if uri.scheme==\"https\"\n    http_object\n  end\n  alias_method :create_http, :create_http_without_verify\nend\n</pre></code>\n<p>Death to the bastard that wrote that code.</p>\n<p>Here's what the code inside oauth looks like:</p>\n<pre><code class=\"ruby\">\n    # Instantiates the http object\n    def create_http(_url = nil)\n      if _url.nil? || _url[0] =~ /^\\//\n        our_uri = URI.parse(site)\n      else\n        our_uri = URI.parse(_url)\n      end\n\n      if proxy.nil?\n        http_object = Net::HTTP.new(our_uri.host, our_uri.port)\n      else\n        proxy_uri = proxy.is_a?(URI) ? proxy : URI.parse(proxy)\n        http_object = Net::HTTP.new(our_uri.host, our_uri.port, proxy_uri.host, proxy_uri.port, proxy_uri.user, proxy_uri.password)\n      end\n\n      http_object.use_ssl = (our_uri.scheme == 'https')\n\n      if @options[:ca_file] || CA_FILE\n        http_object.ca_file = @options[:ca_file] || CA_FILE\n        http_object.verify_mode = OpenSSL::SSL::VERIFY_PEER\n        http_object.verify_depth = 5\n      else\n        http_object.verify_mode = OpenSSL::SSL::VERIFY_NONE\n      end\n\n      http_object\n    end\n</pre></code>\n<p>Notice that the new method in the oauth gem takes optional parameters while the monkey patched version doesn't? MonkeyPatching causes me to use words that destroy my eternal salvation. Stop it.</p>\n<p>I couldn't figure out why no one else has had this problem. Maybe someone has but it was the combination of gems I was playing with that caused the problem. I dropped fireeagle from the project and everything magically started working.</p>",frontmatter:{title:"Fireeagle and PortableContacts Don&#8217;t Get Along. That Makes Daddy Mad.",date:"June 02, 2010",imageUrl:null,image:null}}},pathContext:{path:"/fireeagle-and-portablecontacts-dont-get-along-that-makes-daddy-mad"}}}});
//# sourceMappingURL=path---fireeagle-and-portablecontacts-dont-get-along-that-makes-daddy-mad-ba2fd8b62ab7e03352b1.js.map