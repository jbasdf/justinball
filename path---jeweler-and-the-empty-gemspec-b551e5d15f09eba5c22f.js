webpackJsonp([0xb0d648900823],{1261:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2009-06-24-jeweler-and-the-empty-gemspec/index.md absPath of file >>> MarkdownRemark",html:"<p>I've been racking my brain trying to figure out why my gemspec for a new gem had no files in it.  I'm using jeweler to build the gem and it's worked great in the past.  Then I read in the docs that jeweler will include any files in the gemspec that are not in .gitignore and it occurs to me that jeweler is getting the list of files from git.  That means you have to do 'git init' and 'git add .' in order to have any files in your project.</p>\n<p>So the next time you are building a gem and you do this:</p>\n<pre><code class=\"ruby\">\n    gemspec.files.include %w(\n                            tasks/*\n                            db/migrate/*.rb\n                            app/**/**/**/*\n                            config/*\n                            locales/*\n                            rails/*\n                            test/*\n                            lib/**/*\n                            public/**/* )\n</pre></code>\n<p>and you get this:</p>\n<pre><code class=\"ruby\">\nundefined method `include' for []:Array\n</pre></code>\n<p>Just know that your gemspec doesn't contain any files and you don't actually need the include listed above in your Rakefile.  Instead you just need to add all your files to git.</p>",frontmatter:{title:"jeweler and the empty gemspec",date:"June 24, 2009",imageUrl:null,image:null}}},pathContext:{path:"/jeweler-and-the-empty-gemspec"}}}});
//# sourceMappingURL=path---jeweler-and-the-empty-gemspec-b551e5d15f09eba5c22f.js.map