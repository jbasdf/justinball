webpackJsonp([50236828116543],{1399:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2008-02-22-mozycom-and-their-backup-software-is-shit/index.md absPath of file >>> MarkdownRemark",html:"<p>Yes you read that right. I used to love this company. The concept is great - backup your data online for dirt cheap. Install the software and away you go. They backup everything and even encrypt your data for security. You get cheap backups and they get a little bit of money. I thought this was the total bomb so I installed in on my server. My live server. My live Windows server. I am such a moron.</p>\n<p>The first problem I ran into was a full temp directory on my main drive. Windows servers don't like that at all so I get in touch with their tech support and they tell me to change my environment variables and point the temp drive somewhere else. I figure that is an OK solution so I point the temp folder to a dedicated drive with 20 Gigs of free space. A few days later I start getting warnings that the disk is low on space. \"That is odd,\" I think, but I am busy and kind of lazy and I will get to it later. Why worry? My data is backed up.</p>\n<p>I deploy a new copy of my website (<a href=\"http://www.theplancollection.com/\" title=\"Website that sells house plans\">ThePlanCollection.com</a>) with all kinds of new features. Luckily it is 1 am so the only one surfing the site are hackers in Czechoslovakia. The site dies and gives all kinds of strange errors. I stare at the errors for a minute and then realize that the .Net framework can't do its just in time compiling thing.</p>\n<p>What could possibly cause that?</p>\n<p>I look at my dedicated 20Gig temp directory. Mozy HAS FILLED THE ENTIRE THING WITH TEMP CRAP. All I can figure is that they make backups cheap by using your drive to backup somebody else's stuff. For a few moments I imagine my server's hard drive filling up with some kid's porn. Why on earth do I need 20Gig of space on my drive to backup 20 Gig worth of stuff? If I wanted to use 20Gig of my own space I could just save the money and backup my stuff to my own damn drive.</p>\n<p>Who the hell wrote this code?</p>\n<p>What's worse is that you can't just delete some of the junk in your temp directory. You have to uninstall their software then reboot - yes reboot your live server.</p>\n<p>Once the scourge know as Mozy was off my box everything worked fine. My website came right up.</p>\n<p>Thank you Mozy for taking down my server.</p>",frontmatter:{title:"Mozy.com&#8217;s Backup Software is Shit",date:"February 22, 2008",imageUrl:null,structuredHtml:null,image:null}}},pathContext:{path:"/mozycom-and-their-backup-software-is-shit"}}}});
//# sourceMappingURL=path---mozycom-and-their-backup-software-is-shit-93b8826fcb5cdfdb7e47.js.map