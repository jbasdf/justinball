webpackJsonp([0xb5176e92231],{1292:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2011-07-19-loving-goliath-watch-out-for-stones/index.md absPath of file >>> MarkdownRemark",html:"<p>We've been looking at proxy solutions to help us deliver <a href=\"http://www.oerglue.com/courses\">OER Glue courses</a> to learners without the requirement of installing an extension. There are an insane number of proxy solutions out there that do all kinds of really incredible things.</p>\n<p>For the delivery of courses and modification of pages we really only need something that will grab a page on a user's behalf, add some scripts and then pass it along.</p>\n<p>I can across <a href=\"https://github.com/igrigorik/em-proxy\">em-proxy</a> which I really liked since it was written in Ruby and I really love Ruby. <a href=\"http://www.igvita.com/\">IIya Grigorik</a> was kind enough to answer a bunch of my noob questions and finally suggested that I look at <a href=\"http://postrank-labs.github.com/goliath/\">Goliath</a>.</p>\n<p>I keep seeing that Goliath is the <a href=\"http://nodejs.org/\">node.js</a> of Ruby. Given the popularity of node.js that's an easy way to grasp the architecture. Both use an <a href=\"http://en.wikipedia.org/wiki/Event_loop\">\"event loop\" architecture</a>. I think that the primary difference is the philosophy. node.js is close to the metal while <a href=\"http://www.igvita.com/2011/03/08/goliath-non-blocking-ruby-19-web-server/\">Golaith abstracts away the callbacks to make writing code as simple as possible an feature that IIya and the team at Post Rank felt was important for maintainability</a>.</p>\n<p>That's not to say node.js is not as good. I really love node.js and we had started investigating <a href=\"node-http-proxy\">node-http-proxy</a> from the <a href=\"http://www.nodejitsu.com/\">nodejitsu</a> guys. I like the code base but it wasn't quite the right fit. For performance (low memory usage) <a href=\"https://github.com/nodejitsu/node-http-proxy/issues/58\">node-http-proxy doesn't buffer what's it's proxying and so you don't have a chance to modify the DOM</a>. It looks like there is some effort going into making that possible but after reading through the issues I've come to the conclusion that what we need is something a little more than just a proxy.</p>\n<p>Enter Goliath.</p>\n<p>Here's a really simple example of what we will end up doing:</p>\n<pre><code class=\"ruby\">\nrequire 'rubygems'\nrequire 'goliath'\nrequire 'em-synchrony'\nrequire 'em-synchrony/em-http'\n\nclass OerglueProxy < Goliath::API\n  use Goliath::Rack::Params\n\n  def response(env)\n    req = EM::HttpRequest.new(\"http://www.google.com/\").get\n    resp = req.response\n\n    [200, {'X-Goliath' => 'Proxy'}, resp]\n  end\nend\n</pre></code>\n<p>In just a few lines of code we're able to retrieve a page and return the results. All the async code that EventMachine provides and that gives us great performance is hidden away. We can focus on our logic. We can also utilize our team's Ruby development strength. I like that.</p>\n<p>I did run into issues getting the right version of the gems I needed. Specifically, I kept getting this error:</p>\n<pre><code class=\"ruby\">\n`class_eval': undefined method `get' for module `EventMachine::HTTPMethods' (NameError)\n</pre></code>\n<p>I found <a href=\"https://github.com/igrigorik/em-synchrony/issues/29\">a solution in this thread</a>, but it didn't quite work for me.</p>\n<p>Luckily bundler makes it easy to get the exact version of the gem you need and with a little playing around here's what I came up with:</p>\n<pre><code class=\"ruby\">\nsource \"http://rubygems.org\"\n\ngem 'goliath', '0.9.1'\ngem 'eventmachine', '1.0.0.beta.3'\ngem 'em-http-request', '1.0.0.beta.4'\ngem \"em-synchrony\", '0.3.0.beta.1'\n\ngroup :test, :development do\n  gem \"rspec\"\nend\n</pre></code>\n<p>Goliath has been in use by Post Rank for over a year and serves ~500 requests per second. I'm looking forward to seeing how it works to serve up courses on <a href=\"http://www.oerglue.com\">OER Glue</a>.</p>",frontmatter:{title:"Loving Goliath. Watch Out for Stones",date:"July 19, 2011",imageUrl:null,image:null}}},pathContext:{path:"/loving-goliath-watch-out-for-stones"}}}});
//# sourceMappingURL=path---loving-goliath-watch-out-for-stones-5400b901901df369e534.js.map