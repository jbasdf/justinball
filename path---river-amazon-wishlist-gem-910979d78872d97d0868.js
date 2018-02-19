webpackJsonp([0x76421fd781f4],{1420:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2009-10-30-river-amazon-wishlist-gem/index.md absPath of file >>> MarkdownRemark",html:'<p>One more post on Amazon Wishlist code.  As another follow up to my post on <a href="http://www.justinball.comamazon-ruby-and-signing_authenticating-your-requests">Amazon Wishlist RSS, Ruby and Signing/Authenticating your Requests</a> and the site I built to run the code <a href="http://www.my-amazon-feeds.com">My Amazon Feeds</a> (<a href="http://www.justinball.comamazon-wishlist-rss">post here</a>) I\'ve created a gem to contain all the code.  Get it by running</p>\n<pre><code class="ruby">\n  sudo gem install river\n</pre></code>\n<p>It\'s a pretty simple gem so working with the code is also pretty easy to do:</p>\n<pre><code class="ruby">\nam = AmazonRequest.new(amazon_access_key_id, amazon_secret_access_key, ecs_to_rss_wishlist, amazon_associate_tag)\nresults = am.get_amazon_feeds(username) # username needs to be the user\'s Amazon email\nfeeds = results.collect { |result| OpenStruct.new(:url => result, :title => \'Amazon Wishlist\', :name => \'wishlist\') }\n</pre></code>\n<p>Get amazon<em>access</em>key<em>id and amazon</em>secret<em>access</em>key from your AWS console. The amazon<em>associate</em>tag parameter is optional.  Throw it in there if you want your Amazon associate information in the feed.  May as well :-).</p>\n<p>The one parameter that might be confusing is \'ecs<em>to</em>rss_wishlist\'.  This value is a url where the xslt transform lives.  This has to be a public url.  I\'ve included a version in the gem.  To get it into your Rails application you\'ll need to add this to the Rakefile in the root of your app:</p>\n<pre><code class="ruby">\nrequire \'river/tasks\'\n</pre></code>\n<p>Then sync the file into your app:</p>\n<pre><code class="ruby">\nrake river:sync\n</pre></code>\n<p>After that you\'ll find the file in the public directory and you\'ll be able to access it with something like <a href="http://www.example.com/ecs_to_rss_wishlist.xslt">http://www.example.com/ecs<em>to</em>rss_wishlist.xslt</a></p>',frontmatter:{title:"River &#8211; Amazon Wishlist Gem",date:"October 30, 2009",imageUrl:null,structuredHtml:null,image:null}}},pathContext:{path:"/river-amazon-wishlist-gem"}}}});
//# sourceMappingURL=path---river-amazon-wishlist-gem-910979d78872d97d0868.js.map