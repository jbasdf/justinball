webpackJsonp([0xd52c4b2b792d],{1071:function(e,o){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2007-12-07-configure-your-free-facebook-joyent-accelerator-for-capistrano/index.md absPath of file >>> MarkdownRemark",html:'<p><a href="http://www.joyent.com/developers/facebook/">Right now Joyent is giving away free Accelerator accounts to Facebook developers.</a>  I love free stuff so this is so cool I could just cry.  Free hosting with one of the premier Ruby on Rails hosts.  I normally have to eat bags of M&#x26;Ms to be this happy.</p>\n<p>Not all is roses.  There is a dark side to this free hosting.  Setting it up will make you want to cry.  I am a developer, not a Solaris system administrator and so getting my application deployed was like having a vasectomy and being totally conscious the entire time.  In hopes of saving time in the future for myself and others here is how to configure your Facebook Rails application for deployment via Capistrano on a Joyent Accelerator.  The ideas aren\'t mine.  I stole everything from all over the place.  I added links at the bottom where I found some of the information.  The rest of it I will just feel guilty about.</p>\n<ol>\n<li> <a href="http://discuss.joyent.com/viewtopic.php?id=12629">Setup your shell for capistrano</a>.  Follow the link for the how and why.\n   Note my $HOME/.ssh/environment file contains this:\n    <pre><code class="ruby">\nPATH=/usr/bin:/usr/sbin:/opt/local/bin:/usr/ucb:\n/usr/sfw/bin:/usr/ccs/bin:/opt/csw/bin:/opt/csw/sbin:\n/opt/csw/gnu:/opt/csw/gcc3/bin:/opt/csw/mysql5/bin:\n/opt/csw/postgresql/bin:/opt/csw/apache2/bin:\n/opt/csw/apache2/sbin\n</pre></code>\n  Also be careful so that you don\'t edit ssh_config instead of sshd_config not that anyone would ever be so stupid and do that.  :-)\n</li>\n<li>\n  Make sure you have the Capistrano gem installed on your local machine:\n  <pre><code class="ruby">sudo gem install capistrano</pre></code>\n</li>\n<li>\n  capify your application:\n   In the root of your rails application run this:\n   <pre><code class="ruby">capify .</pre></code>\n</li>\n<li>\n  You will now have a deploy.rb in your config directory.  Replace it with this <a href=\'http://www.justinball.comdeploy.rb\' title=\'deploy.rb\'>deploy.rb</a>.\nThen be sure to replace the XXXXXXXX with the username provided to you in your welcome email from Joyent.  Then look for the sections of deploy.rb that contain capital letters and enter in the relevant values.  These will include your application name, your domain name, and the path to your repository.\n</li>\n<li>\nNow create a directory inside your config directory and name accelerator.  Then add the following three files into it:\n<a href=\'http://www.justinball.comaccelerator_tasks.rb\' title=\'accelerator_tasks.rb\'>accelerator_tasks.rb - contains Capistrano recipes specific to the Joyent Accelerator.</a>\n<a href=\'http://www.justinball.comapache_vhost.erb\' title=\'apache_vhost.erb\'>apache_vhost.erb - configures apache to point to your rails application</a>\n<a href=\'http://www.justinball.comsmf_template.erb\' title=\'smf_template.erb\'>smf_template.erb - starts up mongrel automatically for you when you system starts</a>\n</li>\n<li>\nNow we need a mongrel_cluster.yml file.  Create a file called mongrel_cluster.yml inside of your config directory and put this in it:\nport: "8000"\nenvironment: production\naddress: 127.0.0.1\npid_file: /home/XXXXXXX/web/APP-NAME/shared/pids/mongrel.pid\nlog_file: /home/XXXXXXX/web/APP-NAME/shared/log/mongrel.log\nservers: 3\ndocroot: /home/XXXXXXX/web/APP-NAME/current/public\ncwd: /home/XXXXXXX/web/APP-NAME/current\n<p>You will need to edit the paths to match the paths you setup in deploy.rb.  This likely means that you will need to replace XXXXXXX with your joyent username and APP-NAME with the name of your application.</p>\n</li>\n<li>\nSubversion needs to know how to talk to your repository if it is password protected.  ssh into the server and do this inside your home directory:\nsvn co PATH TO YOUR PROJECT\nYou can delete the directory when it is done.  You do this so that your svn username and password are cached on the server which means that Capistrano will be able to checkout files.\n</li>\n<li>\nWhile you are logged into the server be sure to create an empty database.  The name should match the name in your database.yml file.\n</li>\n<li>\nBe sure to enter the proper username for root into your database.yml file.\n</li>\n<li>\nNow for the exciting part:\nRun <pre><code class="ruby">cap deploy:setup</pre></code> inside of the root of your Rails project.  It should run successfully.  If not I am very sorry.\n</li>\n<li>\nThen do this:\ncap deploy:cold\n</li>\n</ol>\nYou should be up and running at that point.\n<p>More helps and information:\n<a href="http://wiki.joyent.com/facebook:kb:faststart">Joyent\'s quickstart</a>.  Although I would bypass that and look at the main how to <a href="http://wiki.joyent.com/facebook:kb:rails?s=facebook">found here</a>.  <a href="http://wiki.joyent.com/accelerators:deploying_rails_apps?s=capistrano">How to use Capistrano on a new Joyent Accelerator</a>.</p>',frontmatter:{title:"Configure your Free Facebook Joyent Accelerator for Capistrano",date:"December 07, 2007",imageUrl:null,image:null}}},pathContext:{path:"/configure-your-free-facebook-joyent-accelerator-for-capistrano"}}}});
//# sourceMappingURL=path---configure-your-free-facebook-joyent-accelerator-for-capistrano-792df9ae55f6ce42d8f8.js.map