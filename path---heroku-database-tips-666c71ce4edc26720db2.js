webpackJsonp([0xe3103cfb5607],{1125:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Nobody Listens Anyway",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2013-12-13-heroku-database-tips/index.md absPath of file >>> MarkdownRemark",html:"<p>Even on Heroku where most of the problems of sys ops is taken care of for you, you will occasionally run into\nstrange database issues that are hard to explain. For me it the database issues showed up as some ugly entries\nwhen I tried to run a rake db:migrate on a deployed database:</p>\n<pre>\n2013-12-13T16:57:28.079781+00:00 app[web.1]: PG::IndexCorrupted: ERROR:  index \"pg_constraint_conname_nsp_index\" contains unexpected zero page at block 0\n2013-12-13T16:57:28.079781+00:00 app[web.1]: HINT:  Please REINDEX it.\n2013-12-13T16:57:28.079781+00:00 app[web.1]:             FROM pg_attribute attr\n2013-12-13T16:57:28.079781+00:00 app[web.1]:             WHERE cons.contype = 'p'\n2013-12-13T16:57:28.079781+00:00 app[web.1]:               AND cons.conrelid = '\"users\"'::regclass\n2013-12-13T16:57:28.079781+00:00 app[web.1]:\n2013-12-13T16:57:28.079781+00:00 app[web.1]: :             SELECT attr.attname\n2013-12-13T16:57:28.079781+00:00 app[web.1]:             INNER JOIN pg_constraint cons ON attr.attrelid = cons.conrelid AND attr.attnum = cons.conkey[1]\n2013-12-13T16:57:28.079781+00:00 app[web.1]: PG::IndexCorrupted: ERROR:  index \"pg_constraint_conname_nsp_index\" contains unexpected zero page at block 0\n2013-12-13T16:57:28.079965+00:00 app[web.1]:             WHERE cons.contype = 'p'\n2013-12-13T16:57:28.079781+00:00 app[web.1]: HINT:  Please REINDEX it.\n2013-12-13T16:57:28.079965+00:00 app[web.1]:               AND cons.conrelid = '\"users\"'::regclass\n2013-12-13T16:57:28.079965+00:00 app[web.1]: Completed 500 Internal Server Error in 10ms\n2013-12-13T16:57:28.079965+00:00 app[web.1]: :             SELECT attr.attname\n2013-12-13T16:57:28.079965+00:00 app[web.1]:             FROM pg_attribute attr\n2013-12-13T16:57:28.079965+00:00 app[web.1]:             INNER JOIN pg_constraint cons ON attr.attrelid = cons.conrelid AND attr.attnum = cons.conkey[1]\n</pre>\n<p>I was left a bit confused but I got the point that I needed to reindex my database but the question was how? turns out on heroku you can get into\nyour database with this command:</p>\n<pre>\nheroku pg:psql\n</pre>\n<p>That was easy. Now to clean up my indexes:</p>\n<pre>\nREINDEX DATABASE __Your_DB_Name__\n</pre>\n<p>While you're in there you can also clean up:</p>\n<pre>\nVACUUM;\n</pre>\n<p>You'll need to get your database name from your heroku dashboard. This url will get you there\n<a href=\"https://postgres.heroku.com/databases\">https://postgres.heroku.com/databases</a>. You'll need to know\nwhat the specific database is and click through to get the name. It's ugly and will look something like 'dusyahwettad'</p>\n<p>That should be it, but in case you want to dig around a bit more and see what's going on in your database you can install the pg-extras from:</p>\n<p><a href=\"https://github.com/heroku/heroku-pg-extras\">https://github.com/heroku/heroku-pg-extras</a></p>\n<p>Once those are installed you can do things like..</p>\n<p>See the your db bloat:\nheroku pg:bloat DATABASE_URL</p>\n<p>Check out your vacuum stats:\nheroku pg:vacuum<em>stats DATABASE</em>URL</p>\n<p>And so much more. Check here for more details:\n<a href=\"https://devcenter.heroku.com/articles/heroku-postgres-database-tuning\">https://devcenter.heroku.com/articles/heroku-postgres-database-tuning</a></p>",frontmatter:{title:"Heroku Database Tips",date:"December 13, 2013",image:null}}},pathContext:{path:"/heroku-database-tips"}}}});
//# sourceMappingURL=path---heroku-database-tips-666c71ce4edc26720db2.js.map