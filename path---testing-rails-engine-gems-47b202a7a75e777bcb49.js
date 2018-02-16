webpackJsonp([44222125693842],{1491:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2009-06-16-testing-rails-engine-gems/index.md absPath of file >>> MarkdownRemark",html:"<p>I've been working on a number of gems that are basically packaged Ruby on Rails engine plugins.  It turns out that turning gems into plugins is pretty easy to do.  However, testing them can be a pain.  Here are a few things I came up with.</p>\n<p>After looking at how <a href=\"http://giantrobots.thoughtbot.com/2009/2/9/clearance-rails-authentication-for-developers-who-write-tests\">Clearance</a> handles tests I've decided that it's ok to embed a basic Rails application in your test directory.</p>\n<p>The next trick is getting the gem you are working on to load in your embedded Rails application.  The Clearance guys added a file in config/initializers that looks like this:</p>\n<pre><code class=\"ruby\">\n# This simulates loading the clearance gem, but without relying on\n# vendor/gems\n\nclearance_path = File.join(File.dirname(__FILE__), *%w(.. .. .. ..))\nclearance_lib_path = File.join(clearance_path, \"lib\")\n\n$LOAD_PATH.unshift(clearance_lib_path)\nload File.join(clearance_path, 'rails', 'init.rb')\n</pre></code>\n<p>I thought that was brilliant but it didn't work for me.  After messing around in the Rails code for a bit I found a bit of helpful documentation on 'plugin_locators':</p>\n<i>\nThe classes that handle finding the desired plugins that youâ€˜d like to load for your application. By default it is the Rails::Plugin::FileSystemLocator which finds plugins to load in vendor/plugins. You can hook into gem location by subclassing Rails::Plugin::Locator and adding it onto the list of plugin_locators.\n</i>\n<p>That sounded like the perfect solution to my problem.  I figured I would simply add a plugin locator that pointed to the root of the gem I was building.  Turns out that works great.  In the embedded rails application inside of config/environment.rb I added this code:</p>\n<pre><code class=\"ruby\">\nclass TestGemLocator < Rails::Plugin::Locator\n  def plugins\n    Rails::Plugin.new(File.join(File.dirname(__FILE__), *%w(.. .. ..)))\n  end\nend\n\nRails::Initializer.run do |config|\n  config.time_zone = 'UTC'\n  config.plugin_locators << TestGemLocator\nend\n</pre></code>\n<p>Now my tests load correctly and all is well.  Context is important.  If you want to have a look at the full project I put it into a gem called <a href=\"http://github.com/jbasdf/disguise/tree/master\">disguise which you can get from github</a>.</p>",frontmatter:{title:"Testing Rails Engine Gems",date:"June 16, 2009",imageUrl:null,image:null}}},pathContext:{path:"/testing-rails-engine-gems"}}}});
//# sourceMappingURL=path---testing-rails-engine-gems-47b202a7a75e777bcb49.js.map