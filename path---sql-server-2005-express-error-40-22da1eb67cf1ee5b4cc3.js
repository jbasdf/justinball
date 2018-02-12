webpackJsonp([0xbd903cda5f27],{1449:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2007-06-18-sql-server-2005-express-error-40/index.md absPath of file >>> MarkdownRemark",html:"<p>I ran into this error while trying to run some scripts on my SQL Server 2005 Express Database:</p>\n<p>An error has occurred while establishing a connection to the server. When connecting to SQL Server 2005, this failure may be caused by the fact that under the default settings SQL Server does not allow remote connections. (provider: Named Pipes Provider, error: 40 - Could not open a connection to SQL Server)</p>\n<p>Had to bang my head a bit on this one, but I finally figured out that all the scripts I was running referred to 'localhost'. By default Sql Server 2005 Express installs a named instance. I was too stupid/lazy to figure out how to rename it to default so I did a quick reinstall, chose the advanced setup options and set the database as default. Works great. Now if I could just get my stupid Dell 2850 server to stop locking up. In the future I will be buying Sun Servers.</p>",frontmatter:{title:"SQL Server 2005 Express error: 40",date:"June 18, 2007",imageUrl:null,image:null}}},pathContext:{path:"/sql-server-2005-express-error-40"}}}});
//# sourceMappingURL=path---sql-server-2005-express-error-40-22da1eb67cf1ee5b4cc3.js.map