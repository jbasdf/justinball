webpackJsonp([0xf5bbb8a8d654],{1075:function(e,t){e.exports={pathContext:{group:[{node:{excerpt:'Scott Guthrie is the man when it comes to ASP.Net - he is in charge of it and it is basically his brain child. Those around the world that write code for the web using a Microsoft platform owe him big kudos. Anyway, when he speaks it is wise to listen. He has a list of  "Tricks, Tips and Gotchas" for ASP.Net . Worth a read.',html:'<p>Scott Guthrie is the man when it comes to ASP.Net - he is in charge of it and it is basically his brain child. Those around the world that write code for the web using a Microsoft platform owe him big kudos. Anyway, when he speaks it is wise to listen. He has a list of <a href="http://weblogs.asp.net/scottgu/pages/ASP.NET-2.0-Tips_2C00_-Tricks_2C00_-Recipes-and-Gotchas.aspx">"Tricks, Tips and Gotchas" for ASP.Net</a>. Worth a read.</p>',id:"/Users/jbasdf/projects/justinball/src/posts/2006-08-02-aspnet-tips-and-tricks/index.md absPath of file >>> MarkdownRemark",frontmatter:{templateKey:"blog-post",path:"/aspnet-tips-and-tricks",date:"2006-08-02T06:00:00Z",title:"ASP.net tips and tricks",imageUrl:null,structuredHtml:null,image:null}}},{node:{excerpt:"I have been working on getting some CSS to work for a new design for The Plan Collection. The payoff is terribly small. I am really starting to hate CSS and the new \"tableless\" world of web design. I have spent and enourmous amount of time working around bugs in browsers and find new ways of getting things to work. CSS is pretty miserable to work with. Don't believe me?  Here's an entire article…",html:'<p>I have been working on getting some CSS to work for a new design for The Plan Collection. The payoff is terribly small. I am really starting to hate CSS and the new "tableless" world of web design. I have spent and enourmous amount of time working around bugs in browsers and find new ways of getting things to work. CSS is pretty miserable to work with. Don\'t believe me? <a href="http://www.alistapart.com/articles/footers">Here\'s an entire article on getting footers to work</a>. That is not the only one in my list of bookmarks. Should it really take an entire article to figure out how to get stuff to stay at the bottom of the page?</p>\n<p>I am annoyed can you tell?</p>\n<p>I have come up with a new measure of the usefullness of a programing language. It has nothing to do with lines of code but rather the rate and degree of profanity required to complete a task. Right now CSS is pretty high. The old ASP was pretty high too. Flash had moments when the meter went so far off the chart as to justify me being sent straight to hell. With ASP.Net the meter is usually pretty low unless I need to do something that is not supported by the framework or something that is not the .Net way. I think Ruby on Rails has required only a handful of colorful metaphors, and those were related to setup not to code. C is up there. Writing drivers for Windows in C requires that no one be around me less their ears burst into flames.</p>',id:"/Users/jbasdf/projects/justinball/src/posts/2006-07-29-pph-profanity-per-hour/index.md absPath of file >>> MarkdownRemark",frontmatter:{templateKey:"blog-post",path:"/pph-profanity-per-hour",date:"2006-07-29T06:00:00Z",title:"PPH &#8211; Profanity per Hour",imageUrl:null,structuredHtml:null,image:null}}},{node:{excerpt:"I am trying to set a new Macbook pro to boot Mac OSX and Windows with a third partition for data. It is a pain, but  here is a good resource to help you get started . I managed to mess up the partitions. If you do that you will need to boot off the install disk then use gpt to delete any extra partitions that you have created.  The man page for gpt is here .  I also found this post about setting…",html:'<p>I am trying to set a new Macbook pro to boot Mac OSX and Windows with a third partition for data. It is a pain, but <a href="http://wiki.onmac.net/index.php/Triple_Boot_via_BootCamp">here is a good resource to help you get started</a>. I managed to mess up the partitions. If you do that you will need to boot off the install disk then use gpt to delete any extra partitions that you have created. <a href="http://www.hmug.org/man/8/gpt.php">The man page for gpt is here</a>. <a href="http://www.friday.com/bbum/2006/05/04/">I also found this post about setting up and deleting partitions helpful</a>.</p>\n<p>As far as steps to make it work. Follow the first link. If you mess up like I did you will need to use gpt to delete the volumes. The command looks like this:\nsudo gpt remove -i 3</p>\n<p>Then you will need to use gpt to recreate the volumes:\nsudo gpt add\n(Look at the man page. The options will depend on how large you want the partition to be and at which sector you want the partition to start. It is a little low level but follow the instructions on the gpt man page and you will be just fine.)</p>\n<p>Next you need to boot into OSX and format the partitions. Use diskutil eraseValue to do this. It is pretty fast.</p>\n<p>OK get a tasty beverage.</p>\n<p>Now boot using a boot cd that has an fdisk utility. I recommend using <a href="http://ebcd.pcministry.com/">Emergency Boot Disk</a>. It requires that you install it on a Windows box and then generate an iso. That mean you will need seperate Windows machine with a cd burner. Ask your friends for help you if you don\'t one. If you don\'t have friends then suck. Join My Space and get some.</p>\n<p>Next step is a big one:\nSTART OVER because you are screwed. Once the Master Boot Record is messed up you are out of luck. So now you have to copy off your osx install onto a firewire drive, reinstall and start over. Just FYI this sucks.</p>\n<p>Best of luck.</p>\n<p>UPDATE:\nI got tired of having a screwed up Mac and I didn\'t want to wait until Trent (system admin) gets back from the Wind Rivers to help me so...</p>\n<ol>\n<li>I downloaded Carbon Copy Cloner</li>\n<li>Cloned my Mac to an external drive</li>\n<li>Booted off the external drive</li>\n<li>Now that you are booted using the external drive you can run diskutil and repartition the harddrive. Use this to setup your Windows partitions</li>\n<li>Use Carbon Copy Cloner to copy your OS back onto your harddrive. (You did make a Mac partition right?</li>\n<li>Now proceed with your windows setup. Be sure to use an fdisk util to set the last partition on the drive active so Windows installs there.</li>\n</ol>',id:"/Users/jbasdf/projects/justinball/src/posts/2006-07-28-setting-up-new-macbook-pro/index.md absPath of file >>> MarkdownRemark",frontmatter:{templateKey:"blog-post",path:"/setting-up-new-macbook-pro",date:"2006-07-28T06:00:00Z",title:"Setting up new Macbook pro",imageUrl:null,structuredHtml:null,image:null}}},{node:{excerpt:"I keep track of a couple of servers that we use for The Plan Collection. We have three Dell servers and each one of them has a DRAC 4 card which is usually a very helpful piece of hardware that let's me manage the machine remotely. All of a sudden one of the cards quit responding to commands. I could see what was going on, but I couldn't control the machine - which defeats the purpose of having…",html:"<p>I keep track of a couple of servers that we use for The Plan Collection. We have three Dell servers and each one of them has a DRAC 4 card which is usually a very helpful piece of hardware that let's me manage the machine remotely. All of a sudden one of the cards quit responding to commands. I could see what was going on, but I couldn't control the machine - which defeats the purpose of having the card. After spending forever on the phone with Dell's tech support on three different occasions they finally agreed to replace it. (Dell's server support is usually pretty good, but this time it took way to long for them to just replace the stupid card.) Anyway, something interesting I found out after flashing the firmware on the old card is <a href=\"http://lists.us.dell.com/pipermail/linux-poweredge/2005-December/023718.html\">a problem I found described here</a>. You must clear out your browser's cache of Java applets when you flash the card or else you run the risk of using an applet that is out of sync with the card. I couldn't even get the applet to load until I read that page and cleared out my cache. Unfortunately, that didn't fix the main problem which was that the card wouldn't respond. The applet did finally load though. Today a tech from Dell replaced the old DRAC card. It took about five minutes which I was happy about and now we are back up and running.</p>",id:"/Users/jbasdf/projects/justinball/src/posts/2006-07-25-interesting-drac-4-problem/index.md absPath of file >>> MarkdownRemark",frontmatter:{templateKey:"blog-post",path:"/interesting-drac-4-problem",date:"2006-07-25T06:00:00Z",title:"Interesting DRAC 4 problem",imageUrl:null,structuredHtml:null,image:null}}},{node:{excerpt:"For years I have relied soley on typing to keep me in shape. Most of the frameworks I have used managed to help me keep the pounds off. They required plenty of code and my fingers were left in great condition. Then I found Ruby on Rails and the pounds started to come on. I just haven't been typing as much. Damn you Rails and your miniscule amount of code. Because of this new condition I was forced…",html:'<p>For years I have relied soley on typing to keep me in shape. Most of the frameworks I have used managed to help me keep the pounds off. They required plenty of code and my fingers were left in great condition. Then I found Ruby on Rails and the pounds started to come on. I just haven\'t been typing as much. Damn you Rails and your miniscule amount of code.</p>\n<p>Because of this new condition I was forced to buy a bike. Ok it might have been gas prices too. Here it is:</p>\n<p><a href="http://www.jamisbikes.com/usa/bikes/06%5C_ventura%5C_elite.html">http://www.jamisbikes.com/usa/bikes/06_ventura_elite.html</a></p>\n<p>I have almost 70 miles on it after one week which is nothing compared to all those hard core guys out there, but it helps with my new found typing exercise deficit.</p>',id:"/Users/jbasdf/projects/justinball/src/posts/2006-07-21-ruby-made-me-fatter-so-i-had-to-do-something/index.md absPath of file >>> MarkdownRemark",frontmatter:{templateKey:"blog-post",path:"/ruby-made-me-fatter-so-i-had-to-do-something",date:"2006-07-21T06:00:00Z",title:"Ruby made me fatter so I had to do something",imageUrl:null,structuredHtml:null,image:null}}},{node:{excerpt:"I finally worked through most of the challenges I was faced with and I like asp.net again. It is interesting to program in several environments. I do a lot of Ruby on Rails these days and I love it. However, I have other applications that are written in ASP.Net. I have written quite a bit of Python code in the past few years - mainly in the context of Zope and Plone. If you were to ask me what the…",html:"<p>I finally worked through most of the challenges I was faced with and I like asp.net again. It is interesting to program in several environments. I do a lot of Ruby on Rails these days and I love it. However, I have other applications that are written in ASP.Net. I have written quite a bit of Python code in the past few years - mainly in the context of Zope and Plone. If you were to ask me what the best web platform is I will still tell you that it depends. I think it is easy to get excited over the framework you love, or the one that you learned to program on. It is easy to become indoctrinated by the hype. However, at the end of the day I think it is best to stand back and look at the situation objectively rather than religiously. Over the years and through the platforms I have started to become more and more agnostic when it comes to my programing faith. Ruby on Rails may be new and exciting and it is fun to progam. It might even deserve all the hype it gets, but if it doesn't fit your project's needs it isn't right. ASP.Net meets the needs of the new Plan Collection.com site. It is stable. It is well supported. Unfortunately, it is expensive (when you figure in a license for sql server). However, the cost is still less than switching to a new technology when you consider the time involved in switching. Oh yeah, and ASP.Net is fun to code too.</p>",id:"/Users/jbasdf/projects/justinball/src/posts/2006-07-17-aspnet-is-fun-again/index.md absPath of file >>> MarkdownRemark",frontmatter:{templateKey:"blog-post",path:"/aspnet-is-fun-again",date:"2006-07-17T06:00:00Z",title:"asp.net is fun again",imageUrl:null,structuredHtml:null,image:null}}},{node:{excerpt:"I should be writing more but I bought and xbox 360. Stupid thing. I and my wife played Zuma till 1 am last night. I wish fun stuff wasn't so addicting. I have the audio hooked into my reciever with 6.1 surround. It is something to hear. I promise myself to write more code soon and to get to the next level of Zuma.",html:"<p>I should be writing more but I bought and xbox 360. Stupid thing. I and my wife played Zuma till 1 am last night. I wish fun stuff wasn't so addicting. I have the audio hooked into my reciever with 6.1 surround. It is something to hear. I promise myself to write more code soon and to get to the next level of Zuma.</p>",id:"/Users/jbasdf/projects/justinball/src/posts/2006-06-21-xbox/index.md absPath of file >>> MarkdownRemark",frontmatter:{templateKey:"blog-post",path:"/xbox",date:"2006-06-21T06:00:00Z",title:"xbox",imageUrl:null,structuredHtml:null,image:null}}},{node:{excerpt:"For a long time now I have been trying to figure out how to update The Plan Collection to an open source platform. I find myself updating it to ASP.Net instead. ASP.Net is ok to work with. I think Ruby on Rails is better. By better I mean simplier. ASP.Net has more stuff. It comes with all kinds of bells and whistles and millions of pages of docs to read to learn how to use it. It is more flexible…",html:"<p>For a long time now I have been trying to figure out how to update The Plan Collection to an open source platform. I find myself updating it to ASP.Net instead. ASP.Net is ok to work with. I think Ruby on Rails is better. By better I mean simplier. ASP.Net has more stuff. It comes with all kinds of bells and whistles and millions of pages of docs to read to learn how to use it. It is more flexible than Rails and I would bet that it is faster since it is compiled, sort of.</p>\n<p>I do it not because I want to but because I have to. I think many software projects are that way. Building a brand new application is a luxury. You can do all kinds of things that you want to do. Maintaining an application is different. You do things because you have to. For example, The Plan Collection has about 90,000 pages in the Google index. We can't afford to throw that away so we need urls to stay the same. At least we need to be able to setup redirect so that they site still works with those urls. In addition, we added forums, blogs, etc to The Plan Collection a while ago. That software, yes you guessed it, is written in ASP.Net. To switch platforms now I would have to rewrite a very large code base, rebuild and migrate a database, and figure out how to move forums and blogs to something else.</p>\n<p>I am in a have to situation. I loved ASP.Net for years. I am paying a high cost for that love now. I still do like ASP.Net. It is a powerful framework with excellent tools, but it is expensive. For a large company that might not be a big deal. However, if you are a small business having to pay 5k for a database server is very painful. (One SQL server license actually costs more than our server!!) </p>\n<p>Rails is free and open. The databases it talks to are free and open. If you are starting a small venture think about what you want to do so that someday you don't find yourself in despair because of what you have to do.</p>",id:"/Users/jbasdf/projects/justinball/src/posts/2006-06-14-not-because-i-want-to/index.md absPath of file >>> MarkdownRemark",frontmatter:{templateKey:"blog-post",path:"/not-because-i-want-to",date:"2006-06-14T06:00:00Z",title:"Not because I want to",imageUrl:null,structuredHtml:null,image:null}}},{node:{excerpt:"I have spent the past few weeks working on two projects. One is brand new and very exciting -  houseplans.info . I developed that site in Ruby on Rails and it uses mysql on the backend. That project took me about four weeks working a few hours in the evenings. It is a joy to work on. I compare that to  The Plan Collection  which I have spent the last 7 years working on. It is written in old ASP…",html:'<p>I have spent the past few weeks working on two projects. One is brand new and very exciting - <a href="http://www.houseplans.info">houseplans.info</a>. I developed that site in Ruby on Rails and it uses mysql on the backend. That project took me about four weeks working a few hours in the evenings. It is a joy to work on. I compare that to <a href="http://www.theplancollection.com">The Plan Collection</a> which I have spent the last 7 years working on. It is written in old ASP and is painful to work on. I have been updating it to ASP.Net here and there and it just isn\'t as much fun as working in Ruby on Rails. By fun I mean that in twenty seconds I can setup url rewrites in Rails while I spent several days testing, debugging and cussing url rewrites in ASP.Net. I\'m still not done. So far I am still unable to find a way for a form to post back to the rewritten url. ASP.Net happily ignores the rewrite and sets the form postback for you and refuses to give you a way to change it.</p>\n<p>Open source is so much better and lets me be in a happy place.</p>',id:"/Users/jbasdf/projects/justinball/src/posts/2006-06-14-the-plan-collection/index.md absPath of file >>> MarkdownRemark",frontmatter:{templateKey:"blog-post",path:"/the-plan-collection",date:"2006-06-14T06:00:00Z",title:"The Plan Collection",imageUrl:null,structuredHtml:null,image:null}}},{node:{excerpt:"As per my last post I am loving Ruby on Rails. The biggest drawback to the framwork is my quest to find the right editor.\nI have actually been using Dreamweaver when I write code on Windows. It makes me feel like a lesser programmer for some reason,\nbut it works great. There is a plugin called  RubyWeaver  that makes it easy. Add into that the Subversion utility for\nDreamweaver that lets you…",html:'<p>As per my last post I am loving Ruby on Rails. The biggest drawback to the framwork is my quest to find the right editor.\nI have actually been using Dreamweaver when I write code on Windows. It makes me feel like a lesser programmer for some reason,\nbut it works great. There is a plugin called <a href="http://www.ridingtheclutch.com/">RubyWeaver</a> that makes it easy. Add into that the Subversion utility for\nDreamweaver that lets you <a href="">cloak/uncloak SCM Directories</a> and you have a decent editor.\n(Without that last extension Dreamweaver will try to upload all the hidden Subversion directories and make a mess of you server).</p>\n<p> [2]: <a href="http://www.macromedia.com/cfusion/exchange/index.cfm#view=sn106&#x26;viewName=Exchange">http://www.macromedia.com/cfusion/exchange/index.cfm#view=sn106&#x26;viewName=Exchange</a> Search Details&#x26;loc=en_us&#x26;authorid=0&#x26;page=0&#x26;scrollPos=0&#x26;subcatid=0&#x26;snid=sn106&#x26;itemnumber=-1&#x26;extid=1018603&#x26;catid=0</p>\n<p>On Linux I have been using <a href="http://www.radrails.org/">RadRails</a>. It is ok most of the time. However, every now and then it drives me nuts.\nToday is such a day. When I copy and paste I get randon \'invalid argument\' errors. I can live with that but the latest is insane.\nAs I type, Radrails is outputing everything in reverse. No kidding. Here is some output:\nskcus sliardar</p>',id:"/Users/jbasdf/projects/justinball/src/posts/2006-06-13-i-hate-radrails/index.md absPath of file >>> MarkdownRemark",frontmatter:{templateKey:"blog-post",path:"/i-hate-radrails",date:"2006-06-13T06:00:00Z",title:"I hate RadRails",imageUrl:null,structuredHtml:null,image:null}}},{node:{excerpt:"I have worked in numerous roles as a programmer. My lot has been everything from low level USB firmware to Visual Test to ASP and then ASP.Net. Years ago, when I first saw ASP.Net I thought that I had found the best web framework in the world. I am working on a PhD (here and there). Last semester I worked on an independent study project ( scrumdidilyumptiou.us ). Most of the project was done over…",html:'<p>I have worked in numerous roles as a programmer. My lot has been everything from low level USB firmware to Visual Test to ASP and then ASP.Net. Years ago, when I first saw ASP.Net I thought that I had found the best web framework in the world. I am working on a PhD (here and there). Last semester I worked on an independent study project (<a href="http://scrumdidilyumptiou.us">scrumdidilyumptiou.us</a>). Most of the project was done over the course of a few weeks with the bulk of the work done during a meeting at the Melon Foundation. I am a programmer you can\'t expect me to listen to business like presentations can you?</p>\n<p>Because everyone else was doing it I decided I would give Ruby on Rails a shot. The hype isn\'t hype. It\'s the real thing. Two weeks ago in my spare time I started a project at <a href="http://www.houseplans.info">www.houseplans.info</a>. Its up and running now. Two weeks. I measure my Ruby on Rails projects in weeks not months. It is an amazing framework. Tonight I find myself writing ASP.Net code. I wish I wasn\'t. It is power. It can do a lot. It cannot do pretty urls. I have spent hours writing url rewrite code. This stuff takes seconds in Rails. Really - go look at map.connect in the routes.rb file. I discovered it at 2am in a hotel in New York. The next day all my urls were beautiful and user friendly. Try it with ASP.Net. You can tell me all about \'HttpContext.Current.RewritePath all you want. It doesn\'t work nearly as well. It is sitting in an IDE in front of me right now and I am sick of it. You can tell me that I should write an ISAPI filter. I will ask you why? Rails handles it in seconds why should I blow hours.</p>\n<p>ASP.Net takes control.  Just like Microsoft isn\'t free (as in beer or freedom) ASP.Net takes away your freedom.  You don\'t get to controll where your form posts to.  Your Ids are a mess of insane garbage.  Pretty HTML, not just valid XHTML, but really pretty HTML is out of your reach.  Just FYI for the ASP.Net team.  This:</p>\n<pre><code class="html">\n<div>\n  <input type="hidden" name="__EVENTTARGET" id="__EVENTTARGET" value="" />\n  <input type="hidden" name="__EVENTARGUMENT" id="__EVENTARGUMENT" value="" />\n  <input type="hidden" name="__LASTFOCUS" id="__LASTFOCUS" value="" />\n  <input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="/wEPDwUKLTcwODczMjYzMg8WKB4ETVhIRGYeBE1YU1FmHgRNTkhEZh4CQ1BmHgJTUWYeA0RJRGYeBE1nQ==" />\n</div>\n</pre></code>\n<p>isn\'t pretty.  Neither is this:</p>\n<pre><code class="html">\n&lt;img id="ctl00_ctl00_content_content_RssForXYZ" .....\n</pre></code>\n<p>That is one nasty id.  I would hate to have to use that id for anything like oh say Javascript or CSS.  (Yes, I know there are server side functions you use to hook up Javascript controls, but why should I have to?)</p>\n<p>Ya, I have written ASP.Net code for a long time and yes I know why they do it and I know what its for.  Clean it up anyway.  Maybe you can\'t.  Maybe the approach is what\'s wrong.  I wish I could say it wasn\'t my problem, but it is.  I have a windows server and a legacy app written in ASP (not ASP.Net) that I have to upgrade because it is falling apart.  I can\'t use Rails, not yet anyway.  Why not?  Because I have 93,000 pages in the Google index and I have to have a way to match up new URLs to old ones and still come up with a valid page.  I have a database with 61 tables and 400 stored procedures.  I am stuck.  Vendor lock in blows.  My advice to anyone starting a new project - user Ruby On Rails.  You will cry a lot less and find yourself saying, "this is amazing" a lot more.</p>',id:"/Users/jbasdf/projects/justinball/src/posts/2006-06-05-joining-the-rails-bandwagon/index.md absPath of file >>> MarkdownRemark",frontmatter:{templateKey:"blog-post",path:"/joining-the-rails-bandwagon",date:"2006-06-05T06:00:00Z",title:"Joining the Rails bandwagon",imageUrl:null,structuredHtml:null,image:null}}},{node:{excerpt:"Engineers are almost perfect. No really. When we are successful you get a pat on the back. When you fail you kill people.  Here are some of the worst mistakes.",html:'<p>Engineers are almost perfect. No really. When we are successful you get a pat on the back. When you fail you kill people. <a href="http://www.wired.com/wired/archive/14.06/start.html?pg=9">Here are some of the worst mistakes.</a></p>',id:"/Users/jbasdf/projects/justinball/src/posts/2006-06-02-engineers-are-almost-perfect-but-not-quite/index.md absPath of file >>> MarkdownRemark",frontmatter:{templateKey:"blog-post",path:"/engineers-are-almost-perfect-but-not-quite",date:"2006-06-02T06:00:00Z",title:"Engineers are almost perfect but not quite.",imageUrl:null,structuredHtml:null,image:null}}},{node:{excerpt:"I thought I liked to play with Legos,  but this is awesome.",html:'<p>I thought I liked to play with Legos, <a href="http://www.seriouswheels.com/2004/2004-Volvo-XC90-LEGO-Replica-XC90-1600x1200.htm">but this is awesome.</a></p>',id:"/Users/jbasdf/projects/justinball/src/posts/2006-06-02-lego-volvo/index.md absPath of file >>> MarkdownRemark",frontmatter:{templateKey:"blog-post",path:"/lego-volvo",date:"2006-06-02T06:00:00Z",title:"Lego Volvo",imageUrl:null,structuredHtml:null,image:null}}},{node:{excerpt:"Now I know why.  I knew that it was logical to sleep after lunch.",html:'<p>Now I know why. <a href="http://www.eurekalert.org/pub_releases/2006-06/uom-wwc060106.php">I knew that it was logical to sleep after lunch.</a></p>',id:"/Users/jbasdf/projects/justinball/src/posts/2006-06-02-i-get-tired-after-i-eat/index.md absPath of file >>> MarkdownRemark",frontmatter:{templateKey:"blog-post",path:"/i-get-tired-after-i-eat",date:"2006-06-02T06:00:00Z",title:"I get tired after I eat",imageUrl:null,structuredHtml:null,image:null}}},{node:{excerpt:"When I was a boy scout ( a long time ago) someone tried to heat a can of beany weenies in the fire. In the infinite wisdom of a 13 year old they didn't crack the lid. One explosion and a rain of beanie weenies later we were all ok. At another camp someone threw a can of mosquito spray in the fire. It took a while but it exploded with some fury and blew a hole in the shelter we had setup. We were…",html:"<p>When I was a boy scout ( a long time ago) someone tried to heat a can of beany weenies in the fire. In the infinite wisdom of a 13 year old they didn't crack the lid. One explosion and a rain of beanie weenies later we were all ok. At another camp someone threw a can of mosquito spray in the fire. It took a while but it exploded with some fury and blew a hole in the shelter we had setup. We were stupid.<br>\nI am just glad that we didn't end up with the <a href=\"http://www.telegraph.co.uk/news/main.jhtml;jsessionid=OW3WMZVTBOP45QFIQMGCFGGAVCBQUIV0?xml=/news/2006/06/01/ndeo01.xml\">results of this British teen's mistake.</a> Looks like an expensive mistake.</p>",id:"/Users/jbasdf/projects/justinball/src/posts/2006-06-02-things-that-go-boom/index.md absPath of file >>> MarkdownRemark",frontmatter:{templateKey:"blog-post",path:"/things-that-go-boom",date:"2006-06-02T06:00:00Z",title:"Things that go boom",imageUrl:null,structuredHtml:null,image:null}}},{node:{excerpt:"I don't like AOL, but this  $1,595.69 bill  ensures that I will never use them.",html:'<p>I don\'t like AOL, but this <a href="http://www.chicagotribune.com/news/columnists/chi-0605310024may31,1,6880056.column?coll=chi-news-col&#x26;ctrack=1&#x26;cset=true">$1,595.69 bill</a> ensures that I will never use them.</p>',id:"/Users/jbasdf/projects/justinball/src/posts/2006-06-01-i-thought-i-paid-a-lot-for-internet/index.md absPath of file >>> MarkdownRemark",frontmatter:{templateKey:"blog-post",path:"/i-thought-i-paid-a-lot-for-internet",date:"2006-06-01T06:00:00Z",title:"I thought I paid a lot for internet",imageUrl:null,structuredHtml:null,image:null}}},{node:{excerpt:"On the way into work I was listening to 'The Infinite Mind' on NPR. It was a story about  Caris Corfman  an actress who lost her short term memory after surgery to remove a brain tumor. Her situation reminded me of the movie   50 first dates . At the time I saw the movie I had no idea that the condition was even possible, but today I am thankful for the simple ability to remember.",html:'<p>On the way into work I was listening to \'The Infinite Mind\' on NPR. It was a story about <a href="http://www.imdb.com/name/nm0179830/">Caris Corfman</a> an actress who lost her short term memory after surgery to remove a brain tumor. Her situation reminded me of the movie <a href="http://www.imdb.com/title/tt0343660/"> 50 first dates</a>. At the time I saw the movie I had no idea that the condition was even possible, but today I am thankful for the simple ability to remember.</p>',id:"/Users/jbasdf/projects/justinball/src/posts/2006-06-01-thankful-for-memory-today/index.md absPath of file >>> MarkdownRemark",frontmatter:{templateKey:"blog-post",path:"/thankful-for-memory-today",date:"2006-06-01T06:00:00Z",title:"Thankful for Memory Today",imageUrl:null,structuredHtml:null,image:null}}},{node:{excerpt:'More from Jenna. I walk past her room the other night and I hear,\n"I like Aubrey and I like Alyssa and I like Jenna, but I don\'t like\nmommy or daddy. They are mean to me."',html:'<p>More from Jenna. I walk past her room the other night and I hear,\n"I like Aubrey and I like Alyssa and I like Jenna, but I don\'t like\nmommy or daddy. They are mean to me."</p>',id:"/Users/jbasdf/projects/justinball/src/posts/2006-05-04-more-from-jenna/index.md absPath of file >>> MarkdownRemark",frontmatter:{templateKey:"blog-post",path:"/more-from-jenna",date:"2006-05-04T06:00:00Z",title:"More From Jenna",imageUrl:null,structuredHtml:null,image:null}}},{node:{excerpt:'Two nights ago I walk past Jenna\'s room. She is in there chatting up a storm. It is around 11pm and I hear,\n"I am not tired. Someone who is not tired is someone who is not asleep." She is funny.',html:'<p>Two nights ago I walk past Jenna\'s room. She is in there chatting up a storm. It is around 11pm and I hear,\n"I am not tired. Someone who is not tired is someone who is not asleep." She is funny.</p>',id:"/Users/jbasdf/projects/justinball/src/posts/2006-04-11-jenna-talks-herself-to-sleep/index.md absPath of file >>> MarkdownRemark",frontmatter:{templateKey:"blog-post",path:"/jenna-talks-herself-to-sleep",date:"2006-04-11T06:00:00Z",title:"Jenna talks herself to sleep",imageUrl:null,structuredHtml:null,image:null}}},{node:{excerpt:'I went to a meeting at MIT with Wiley last week. When I am gone I\nmake a point to call my wife every night because I miss her. She\ntells me that while eating dinner my youngest daughter (2 years) Jeann\npoints to Alyssa (4 years) and says, " * | head." My wife is of\ncourse appauled and says, "What!!!" So Jenna points to Alyssa\nagain and says, "Alyssa,  * | head." My wife again says\n"What…',html:'<p>I went to a meeting at MIT with Wiley last week. When I am gone I\nmake a point to call my wife every night because I miss her. She\ntells me that while eating dinner my youngest daughter (2 years) Jeann\npoints to Alyssa (4 years) and says, "*<strong>| head." My wife is of\ncourse appauled and says, "What!!!" So Jenna points to Alyssa\nagain and says, "Alyssa, *</strong>| head." My wife again says\n"What!!!!!!!" Jenna slows down this time and says, "Alyssa,\nsh.i..r..t head." Kids are funny.</p>',id:"/Users/jbasdf/projects/justinball/src/posts/2006-03-31-my-daughters-are-funny/index.md absPath of file >>> MarkdownRemark",frontmatter:{templateKey:"blog-post",
path:"/my-daughters-are-funny",date:"2006-03-31T07:00:00Z",title:"My daughters are funny",imageUrl:null,structuredHtml:null,image:null}}}],pathPrefix:"archive",first:!1,last:!1,index:31,pageCount:33}}}});
//# sourceMappingURL=path---archive-31-509f539476f9f6428a72.js.map