webpackJsonp([0x71d32e803b8a],{1009:function(a,t){a.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2010-11-23-apachectl-stopped-working-after-mac-osx-10-6-5/index.md absPath of file >>> MarkdownRemark",html:'<p>I noticed today when I tried to restart apache on my Mac that it had stopped working and gave me this error:</p>\n<p>  /usr/sbin/apachectl: line 82: ulimit: open files: cannot modify limit: Invalid argument</p>\n<p>Luckily the world is a big place and <a href="http://blog.deversus.com/2010/11/mac-os-1065-apachectl-usrsbinapachectl-line-82-ulimit-open-files-cannot-modify-limit-invalid-argument/">someone had already fixed the problem</a>.</p>\n<p>Just open up /usr/sbin/apachectl and change (around line 64):</p>\n<p>  ULIMIT_MAX_FILES="ulimit -S -n `ulimit -H -n`"</p>\n<p>to</p>\n<p>  ULIMIT_MAX_FILES=""</p>',frontmatter:{title:"apachectl stopped working after Mac OSX 10.6.5",date:"November 23, 2010",imageUrl:null,image:null}}},pathContext:{path:"/apachectl-stopped-working-after-mac-osx-10-6-5"}}}});
//# sourceMappingURL=path---apachectl-stopped-working-after-mac-osx-10-6-5-a333d4886425aa148a6b.js.map