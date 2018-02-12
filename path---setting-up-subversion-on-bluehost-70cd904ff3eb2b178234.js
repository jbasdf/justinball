webpackJsonp([0xc04dc7f5f11c],{1440:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2008-02-11-setting-up-subversion-on-bluehost/index.md absPath of file >>> MarkdownRemark",html:'<p>I love subversion.  It is handy for all kinds of development.  I needed an easier way to update Wordpress on my Bluehost account.  I tried the standard compile methods but kept running into errors.  The problem I ran into was that the server my account runs on is a 64bit machine.</p>\n<p>I gave up until <a href="http://joemaller.com/2008/01/29/how-to-install-subversion-on-a-shared-host/">I found this article on how to fix the 64 bit compile problem</a>.</p>\n<p>The key is compiling each library that is part of the subversion-deps download and then telling the compiler where to find them:</p>\n<pre><code class="ruby">\ncd apr\n./configure --enable-shared --prefix=$HOME\nmake && make install\n\ncd ../apr-util\n./configure --enable-shared --prefix=$HOME \\\n     --with-expat=builtin --with-apr=$HOME \\\n     --without-berlekey-db\nmake && make install\n\ncd ../neon\n./configure --enable-shared --prefix=$HOME \\\n     --with-libs=$HOME --with-ssl\nmake && make install\n</pre></code>\n<p>then do this:</p>\n<pre><code class="ruby">\n./configure --prefix=$HOME --without-berlekey-db \\\n     --with-editor=/usr/bin/vim --with-apr=$HOME \\\n     --with-apr-util=$HOME --with-neon=$HOME \\\n     --without-apxs --without-apache\nmake && make install\n</pre></code>',frontmatter:{title:"Setting up Subversion on Bluehost",date:"February 11, 2008",imageUrl:null,image:null}}},pathContext:{path:"/setting-up-subversion-on-bluehost"}}}});
//# sourceMappingURL=path---setting-up-subversion-on-bluehost-70cd904ff3eb2b178234.js.map