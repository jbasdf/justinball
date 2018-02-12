webpackJsonp([0xf318b21e395c],{1520:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2011-07-05-upgrade-to-mysql-5-5-12-and-now-mysql-wont-start/index.md absPath of file >>> MarkdownRemark",html:'<p>I messed up my local install of MySQL (it\'s a long story that involves me almost throwing a punch to my 30" monitor). I finally gave up, deleted everything MySQL related according to <a href="http://akrabat.com/computing/uninstalling-mysql-on-mac-os-x-leopard/">these notes</a> and then I used homebrew to do a clean install.</p>\n<p>After the install I started getting this error:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>ERROR 2002 (HY000): Can\'t connect to local MySQL server through socket \'/tmp/mysql.sock\' (2)</code></pre>\n      </div>\n<p>I couldn\'t figure out what was going on so I checked my logs in /usr/local/var/mysql (in that directory find a file that ends in .err). Here\'s what I kept seeing over and over again:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>110705 14:33:20 [ERROR] /usr/local/Cellar/mysql/5.5.12/bin/mysqld: unknown variable \'default-character-set=utf8\'\n110705 14:33:20 [ERROR] Aborting</code></pre>\n      </div>\n<p>Turns out if you upgrade MySQL you\'ll want to modify /etc/my.cnf. This line causes problems:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>default-character-set = utf8</code></pre>\n      </div>\n<p>Remove that and you should be good. For reference here\'s what my \'/etc/my.cnf\' file looks like:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>[mysqld]\nmax_allowed_packet=64M\ncollation-server = utf8_unicode_ci\ninit-connect=\'SET NAMES utf8\'\ncharacter-set-server = utf8</code></pre>\n      </div>\n<p>As a side note be sure to change max_allowed_packet to something like 64M. I was trying to restore a large database and MySQL kept barfing with this error:\nERROR 2006 (HY000) at line 682: MySQL server has gone away</p>\n<p>Turns out the default packet size is to small to restore all but the smallest databases.</p>',frontmatter:{title:"Upgrade to MySQL 5.5.12 and now MySQL won&#8217;t start",date:"July 05, 2011",imageUrl:null,image:null}}},pathContext:{path:"/upgrade-to-mysql-5-5-12-and-now-mysql-wont-start"}}}});
//# sourceMappingURL=path---upgrade-to-mysql-5-5-12-and-now-mysql-wont-start-b9b7f239074a3960158c.js.map