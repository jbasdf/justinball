webpackJsonp([0xd95148ef26c0],{1472:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2007-05-18-rails-conf-dhh-keynote/index.md absPath of file >>> MarkdownRemark",html:'<p>Listening to DHH right now.  Play DHH buzzword bingo here. <a href="http://bingdoh.com/games/dhh-keynote">http://bingdoh.com/games/dhh-keynote</a> He started out talking about the growth of the community and making fun of a job post requesting a Rails programmer with at least 3 years of Rails experience.  (That is longer than he has been on Rails and he invented it.)</p>\n<p>Now we are going into <strong>Rails 2.0</strong> information.  DHH is talking about namespaces in routes.  DHH is now building a project.  Pretty cool for a keynote.  DHH showed of some of the new <strong>routing</strong> features.  Some example code looks like this:</p>\n<pre><code class="ruby">\nmap.namespace(:admin) do |admin|\n   admin.resources :products,\n \t:has_many => [ :tags, :images, :variants ]\nend\n</pre></code>\n<p>Yesterday I couldnâ€™t figure out why <strong>scaffold<em>resource</strong> wouldnâ€™t work on edge rails anymore.  Today I see why.  The â€˜generate resource</em>scaffoldâ€™ has been promoted to just â€˜generate <strong>scaffoldâ€™</strong>.  They are also getting rid of the .rhtml and .rxml formats in favor of html.erb and xml.erb.</p>\n<p> DHH is showing off a very cool feature of Rails which is the responds_to functionality.  This is one of my favorite features of the latest Rails.  It letâ€™s you do things like myobject, myobject.rss, myobject.xml and get back a representation of the object in those various formats.   We were doing multiple formats with scrumdidilymptio.us last year and had to write all the logic and views for each rss, rdf and html format.  This feature makes implementing stuff like that trivial.</p>\n<p>The introduction of REST into the heart of Rails means that implementing API services is very easy and almost free.  As you develop your app you also develop your API.  This is very slick.</p>\n<p>Active Web Service is no longer bundled with Rails (the REST stuff replaces it) Active Resource is now going to be embedded.  This means that SOAP is dropped from the core.  You can still use it by bringing in Active Web Service, but the Rails is pushing REST over SOAP and is sending that message.</p>\n<p>Having feeds is critical.  They want to make Atom native to Rails.  He thinks OpenID will be key.  Maybe not all applications need OpenID, but thinks that it will be a core component going forward.</p>\n<p>I like this.  We are moving all of our apps to OpenID.  I have a plugin that does OpenID.  I hope they show some action in this space.  I would love to see really good OpenID support.</p>\n<p>Breakpoints are bad.  1.8.5 broke them by fixing the bug that breakpoints depended on.  ruby-debug replaces it.  This is not new, but is good to see.  Ken</p>\n<p>DHH is addressing the fact that HTTP <strong>performance</strong> matters.  This is good.  You can factor out css and javascript into separate files is good for understanding.  However, in deployment it is better to have one javascript include and one css include.  Then zip it up.  Use the same include </p>\n<pre><code class="ruby">\n&lt;%= javascript_include_tag :all, :cache =&gt; true %&gt;.\n&lt;%= stylesheet_link_tag :all, :cache =&gt; true %&gt;\n</pre></code>\n<p>They found that http performance made the biggest difference.  This reduces the number of connections made to the server by the browser.</p>\n<p>He is showing that you can serve assets from other locations with a simple configuration.</p>\n<p>Hopefully he loads this code up so we can pull it down.  I canâ€™t type fast enough.</p>\n<p>They are adding query caching.  More performance goodness.</p>\n<p>Config/Initializers.  You can move code out of environment.rb and into a series of file that let you configure each item that needs to be configured into separate files.</p>\n<p>New migrations look like this:</p>\n<pre><code class="ruby">\nCreate_table :people do |t|\n  t.integer :account_id, other_int_column\n  t.string :stuff\nend\n</pre></code>\n<p>They switched the types and names so that you</p>\n<p>Added HTTP Authentication in.  This is very nice for machine authentication. Looks Like this:</p>\n<pre><code class="ruby">\nauthenticate_or_request_with_http_basic\n\nor\n\nauthenticate_with_http_basic\n</pre></code>\n<p>Rails guys prefer the MIT license.  Plugin generator assumes that you want to use the MIT license now so if you want something else you\'ll have to change it.</p>\n<p><strong>Spring Cleaning</strong>\nThey deprecated stuff so if you are getting warnings in your app expect those things to be removed in Rails 2.0.</p>',frontmatter:{title:"Rails Conf DHH keynote",date:"May 18, 2007",imageUrl:null,structuredHtml:null,image:null}}},pathContext:{path:"/rails-conf-dhh-keynote"}}}});
//# sourceMappingURL=path---rails-conf-dhh-keynote-3aaf56e3cf2a1507d558.js.map