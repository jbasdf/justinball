webpackJsonp([63560151462515],{941:function(t,e){t.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2010-08-09-activerecordstatementinvalid-mysqlerror-got-error-139-from-storage-engine/index.md absPath of file >>> MarkdownRemark",html:"<p>I ran into a 'fun' error with an application I've been working on. Everything was running fine and then one day <a href=\"http://hoptoadapp.com/pages/home\">hoptoad</a> started filling up with exceptions like this:</p>\n<pre>\nActiveRecord::StatementInvalid: Mysql::Error: Got error 139 from storage engine\n</pre>\n<p>I hate errors like that. Lucky for me there's Google:\n<a href=\"http://forums.mysql.com/read.php?22,63584,166521#msg-166521\">http://forums.mysql.com/read.php?22,63584,166521#msg-166521</a>\n<a href=\"http://bugs.mysql.com/bug.php?id=10035\">http://bugs.mysql.com/bug.php?id=10035</a></p>\n<p>Turns out that each row in mysql has a limit of 8000 bytes. A 'text' column takes up 768 bytes in the row after that it moves the data to an db external page. When you have Rails migrations you forget how many 'text' columns you have. Turns out I had 14:</p>\n<p>14 x 768 = 10752 bytes</p>\n<p>What's interesting is that you can get away with this setup until one day one of your users enters a lot of data. At that moment you will get the dreaded:</p>\n<pre>\nActiveRecord::StatementInvalid: Mysql::Error: Got error 139 from storage engine\n</pre>\n<p>Time to refactor and break the table apart. I did that and broke the one model into smaller models and now everything is wonderful again.</p>",frontmatter:{title:"ActiveRecord::StatementInvalid: Mysql::Error: Got error 139 from storage engine",date:"August 09, 2010",image:null}}},pathContext:{path:"/activerecordstatementinvalid-mysqlerror-got-error-139-from-storage-engine"}}}});
//# sourceMappingURL=path---activerecordstatementinvalid-mysqlerror-got-error-139-from-storage-engine-a8f53194c91df938c022.js.map