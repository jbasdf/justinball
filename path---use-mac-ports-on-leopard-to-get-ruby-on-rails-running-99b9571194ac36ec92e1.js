webpackJsonp([75682725644196],{1454:function(t,s){t.exports={data:{site:{siteMetadata:{title:"Nobody Listens Anyway",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2008-01-17-use-mac-ports-on-leopard-to-get-ruby-on-rails-running/index.md absPath of file >>> MarkdownRemark",html:'<p>I am stealing this from <a href="http://www.appeddesign.com/apropos">Dave South</a>, <a href="http://groups.google.com/group/loganrb">Logan Ruby User Group</a> Illuminati. If I don\'t extract it from my email I\'ll never find it again. So I\'ll ask for Dave\'s forgiveness for the blatant plagiarism.</p>\n<p>Install MacPorts, first:</p>\n<p><a href="http://www.macports.org">http://www.macports.org</a></p>\n<p>Be sure to put /opt/local/bin and /opt/local/sbin in your path.</p>\n<p>PORT programs to install:\nsudo port install mysql5 server\nsudo port install ImageMagick\nsudo port install ruby\nsudo port install rb-rubygems\nsudo port install rb-termios\nsudo port install rb-mysql</p>\n<p>Update GEM:\nsudo gem list -r\nsudo gem update --system</p>\n<p>GEMs to install:\nsudo gem install rake\nsudo gem install rails\nsudo gem install capistrano\nsudo gem install mongrel\nsudo gem install redgreen\nsudo gem install test-spec\nsudo gem install RedCloth\nsudo gem install pdf-writer\nsudo gem install ZenTest\nsudo gem install mini_magick\nsudo gem install ruby-debug</p>\n<p>Remember to install the mysql startup. Also, I add a mysql link in /\nopt/local/bin similar to the mysql5 link.</p>\n<p>To initialize the mysql database:\nsudo mysql_install_db5 --user=mysql</p>\n<p>To install the mysql5 startup:\nsudo launchctl load -w /Library/LaunchDaemons/org.macports.mysql5.plist</p>\n<p>To link mysql to the correct binary:\ncd /opt/local/bin\nln -s ../lib/mysql5/bin/mysql mysql</p>',frontmatter:{title:"Use Mac Ports on Leopard to get Ruby on Rails Running",date:"January 17, 2008",image:null}}},pathContext:{path:"/use-mac-ports-on-leopard-to-get-ruby-on-rails-running"}}}});
//# sourceMappingURL=path---use-mac-ports-on-leopard-to-get-ruby-on-rails-running-99b9571194ac36ec92e1.js.map