webpackJsonp([39961239119330],{1055:function(e,l){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2016-08-30-Canvas-install-error/index.md absPath of file >>> MarkdownRemark",html:"<h3>If you get an error that looks like this when you try to setup Instructure Canvas:</h3>\n<pre><code class=\"ruby\">\n  API Documentation successfully generated in public/doc/api\n  See public/doc/api/index.html\n  --> Finished: 'Generate documentation [yardoc]' in 57.496207991000006\n  --> Compiling React JSX finished in 46.748775163999994\n  rake aborted!\n  Undumpable Exception -- #<EOFError: end of file reached>\n  /Users/jbasdf/.rvm/gems/ruby-2.3.1/gems/parallel-1.4.1/lib/parallel.rb:63:in `work'\n  /Users/jbasdf/.rvm/gems/ruby-2.3.1/gems/parallel-1.4.1/lib/parallel.rb:280:in `block (4 levels) in work_in_processes'\n  /Users/jbasdf/.rvm/gems/ruby-2.3.1/gems/parallel-1.4.1/lib/parallel.rb:447:in `with_instrumentation'\n  /Users/jbasdf/.rvm/gems/ruby-2.3.1/gems/parallel-1.4.1/lib/parallel.rb:279:in `block (3 levels) in work_in_processes'\n  /Users/jbasdf/.rvm/gems/ruby-2.3.1/gems/parallel-1.4.1/lib/parallel.rb:273:in `loop'\n  /Users/jbasdf/.rvm/gems/ruby-2.3.1/gems/parallel-1.4.1/lib/parallel.rb:273:in `block (2 levels) in work_in_processes'\n  /Users/jbasdf/.rvm/gems/ruby-2.3.1/gems/parallel-1.4.1/lib/parallel.rb:138:in `block (2 levels) in in_threads'\n</pre></code>\n<h3>You might also see:</h3>\n<pre><code class=\"ruby\">\n  --> Generating plugin extensions finished in 0.009236606999991182\n  --> Pre-compiling ember handlebars templates\n  --> Creating ember app bundles finished in 0.025332288000001313ll_resources.html......\n  module.js:338\n      throw err;\n</pre></code>\n<h3>Fix it:</h3>\n<p>cd into</p>\n<p>  <code>canvas-lms/gems/canvas_i18nliner</code></p>\n<p>  <code>rm -rf node_modules</code></p>\n<p>  <code>npm install</code></p>",frontmatter:{title:"Canvas install error",date:"August 30, 2016",imageUrl:null,image:null}}},pathContext:{path:"/Canvas-install-error"}}}});
//# sourceMappingURL=path---canvas-install-error-a146ba8588476ae2ebc3.js.map