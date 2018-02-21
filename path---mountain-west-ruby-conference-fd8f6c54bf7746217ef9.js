webpackJsonp([42389381594872],{1398:function(e,n){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2008-03-28-mountain-west-ruby-conference/index.md absPath of file >>> MarkdownRemark",html:'<p>I\'m at the Mountain West Ruby Conference for the next few days so I will be doing a bunch of blog posts that look like notes.</p>\n<p>Up right now:\nStrengthening the Ruby Ecosystem &#x26; Ezra Zygmuntowicz Evan Phoenix</p>\n<p>Evan is talking about Rubinius.  Engine Yard pays him to work on the project full time.  Even doesn\'t like the notion of a \'core\' team because it implies there is one group that is above all others.  The project is open source and they like to keep everyone involved.  I like that.  They try to be highly transparent.  They are trying to build community.</p>\n<p>Ezra is up now.  I am hoping to hear something in depth about <a href="http://merbivore.com/">merb</a>.</p>\n<p>merb principles:\ngreat for mashups\ngreat for building web services\ngrew out of frustration with Rails</p>\n<ul>\n  <li>Prefers simplicity over magic\n     <ul>\n        <li>simple is better and scales better</li>\n        <li>just because its there doesn\'t mean you have to use it</li>\n        <li>be responsible about what you put in the libraries</li>\n     </ul></li>\n  <li>This is framework code, no &:foo or returning allowed</li>\n  <li>When in doubt benchmark and profile\n     <ul><li>Guessing is not good enough</li></ul></li>\n  <li>Know your runtime and how it acts</li>\n</ul>\n<p>Why build merb?  Why not.</p>\n<p>Hosting does cost money.  Rails scales, but requires servers.</p>\n<p>merb is stripped down to the bare minimum.</p>\n<h3>merb-core</h3>\nUsed to use mongrel only but they added \'Rack Webserver Abstraction Layer\' which makes the framework compatible with Ebb, Evented Mongrel, FastCGI, Mongrel, Thin, Webrick.\n<p>merb app by default looks like this in config/rack.rb</p>\n<pre><code class="ruby">\nrun Merb::Rack::Application.new\n</pre></code>\n<p>but because merb uses rack you can add code to intercept the request:</p>\n<pre><code class="ruby">\nclass ApiHandler\n  def inialize(app)\n     @app = app\n  end\n\n  def call(env)\n    request = Merb::Request.new(env)\n    if request.path =~ %r{/api/(.*)}\n       [200, {"Content-Type" => "text/json"}, Api.get_json($1)]\n    else\n       @app.call(env)\n    end\n  end\nend\n\nuse ApiHandler\nrun Merb::Rack::Application.new\n\n</pre></code>\n<p>This code prevents a call into the framework making it very fast.</p>\n<p>merb does routing like Rails, but also implements a powerful routing system that let\'s you use regular expressions.</p>\n<p>Provides API</p>\n<pre><code class="ruby">\nMerb.add_mime_type(:yaml, :to_yml, %w[application/x-yaml text/yaml])\nMerb.add_mime_type(:html, :to_html, %w[text/html application/xhtml+xml application/html])\n\nclass Posts < Application\n  provides :json, :yaml, :xml\n\n  def show(id)\n    @post = Post.find id\n    display @post # depending on which content type was requested post will be rendered as html, yml, etc\n  end\nend\n</pre></code>\n<h3>Merb More</h3>\nCan be added in one piece at a time.\nCode Generators\nAsset Bundling\nMailers and Parts - mailers act like controllers so you can use filters and layouts\nHaml and other templating support - when the merb server starts up it parses all the templates and turns them into ruby calls which make rendering much faster.\nAction Args\nCaching\nOther essentials\n<h3>merb Plugins</h3>\nmerb_datamapper - his preference\nmerb_activerecord - you can configure your merb app to use your rails app\'s model directory so that you can reuse a Rails app\nmerb_sequel\n<h3>Resources:</h3>\nhttp://merbivore.com/\nhttp://groups.google.com/group/merb?lnk=srg\nhttp://merb.lighthouseapp.com/dashboard\nhttp://github.com/wycats/merb-core/tree/master\nhttp://git.or.cz/\nhttp://ruby-prof.rubyforge.org/ - for profiling\n<p>Ezra Zygmuntowicz\'s blog\n<a href="http://brainspl.at/">http://brainspl.at/</a></p>\n<p>They are working on documentation and a book.  The IRC channel is very active (#merb ).</p>\n<p>1.0 will be feature complete so they are going to let the .9 release gel for a while.  Merb is awesome and Ezra is a dynamic community leader.  I will be playing with this.</p>',frontmatter:{title:"Mountain West Ruby Conference",date:"March 28, 2008",imageUrl:null,structuredHtml:null,image:null}}},pathContext:{path:"/mountain-west-ruby-conference"}}}});
//# sourceMappingURL=path---mountain-west-ruby-conference-fd8f6c54bf7746217ef9.js.map