webpackJsonp([8807157729518],{1124:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2014-09-11-heroku-database-limits/index.md absPath of file >>> MarkdownRemark",html:'<p>I\'ve been using Heroku for years and it is a great service with great support. Our company, <a href="http://www.atomicjolt">AtomicJolt</a> uses it\nfor all new projects since we an quickly bring up a new site on a free account and show it to our customers.</p>\n<p>One problem we frequently run into is the database row limit when using the development plan. Once you hit 10,000 rows your database\nwrite permissions are turned off and you will start to see this error:</p>\n<blockquote>\nPG::Error: ERROR: permission denied for relation [table name here]\n</blockquote>\n<p>At that point you have a couple of options:</p>\n<ol>\n  <li><a href="https://devcenter.heroku.com/articles/upgrading-heroku-postgres-databases">Upgrade your database</a> to a <a href="https://www.heroku.com/pricing">paid plan</a> (which can get expensive fast).\n  <li>Reduce your rows to under 10k by deleting records. Then email <a href="mailto:support@heroku.com">support@heroku.com</a> and as them to give you back permissions. They are really nice about it and fast to respond.</li>\n  <li>Try out a different host. It\'s a bit more work but we\'re also loving <a href="https://www.digitalocean.com/?refcode=735771c93fa7">Digital Ocean</a>. They support <a href="https://www.docker.com/">Docker</a> which makes deployment really simple.</li>\n</ol>',frontmatter:{title:"Heroku Database Limits",date:"September 11, 2014",image:null}}},pathContext:{path:"/heroku-database-limits"}}}});
//# sourceMappingURL=path---heroku-database-limits-86c8536999a74f66e025.js.map