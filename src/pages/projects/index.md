---
templateKey: 'about-page'
path: /projects
title: Projects
---
Here is a list of projects I have worked  on over the years.

<a href="http://www.genlighten.com"><img src="http://www.justinball.com/wp-content/uploads/2008/03/genlightenlogo.gif" alt="genlightenlogo" title="genlightenlogo" width="333" height="78" class="alignnone size-full wp-image-988" /></a>
<h3><a href="http://www.genlighten.com">Genlighten</a></h3>
Technologies: Ruby on Rails, mysql
Genlighten is a startup focused on making it easier to find genealogy records that are not online by connecting local providers with genealogists.  This has been one of my favorite projects to work on since I wrote all the code and thus have been able to determine the system architecture.  Everything that works is due to a lot of late nights.  Everything that doesn't it also due to a lot of late nights.

<h3><a href="http://github.com/jbasdf/babelphish/tree/master">Babelphish</a></h3>
Babelphish helps you impress the ladies.  Translate your yml files using Google translate and watch your entire application run in Japanese (or 41 other languages).  Install it with:
<pre code="ruby"> sudo gem install babelphish</pre>  Then just do <pre>babelphish -y ./locales/en.yml</pre>

<h3><a href="http://uploader.rubyforge.org/">Uploader</a></h3>
Uploader helps you add multiple file uploads to your Rails application using <a href="http://www.thoughtbot.com/projects/paperclip">Paperclip</a> and <a href="http://swfupload.org/">Swfupload</a>.  It also helps you send your uploads to Amazon's S3 service so that you never have to worry about losing your files.
Install it with:
<pre code="ruby"> sudo gem install uploader</pre>  Integration requires a little bit of work and has plenty of options. Head over to the link above to read the docs.
Get the source code: <a href="http://github.com/jbasdf/uploader/tree/master">uploader on github</a>.

<h3><a href="http://github.com/jbasdf/cms_lite/tree/master">CMS Lite gem</a></h3>
CMS Lite is a Ruby gem that makes it simple to add lots of content to your rails application without having to add a full CMS system.  Install it with:
<pre code="ruby"> sudo gem install cms-lite</pre>  It automatically generates routes to the files in /content.  It can also translate your content via Google Translate with: <pre code="ruby">rake cms_lite:translate</pre>  Follow the link for the full read me.

<h3><a href="http://github.com/jbasdf/muck/tree/master">Muck</a></h3>
Technologies: Ruby on Rails, mysql
Muck is a collection of Rails Engines and Rails application templates that make it simple to build new Rails applications.  You can find the code on my <a href="http://github.com/jbasdf">github account</a>.  If you want to build a new site using the template and you have Rails installed just do this:
<pre code="ruby">
rails testapp -m http://github.com/jbasdf/rails-templates/raw/master/muck.rb
</pre>

<h3><a href="http://github.com/jbasdf/luvfoo/tree/master">Luvfoo</a></h3>
Technologies: Ruby on Rails, mysql
Luvfoo is an open source social networking platform.  It is currently in production for <a href="http://www.teacherswithoutborders.org">Teachers Without Borders</a>.  Turns out a lot of people are interested in developing niche social networks.  I like the idea that the users of the platform can feel like they truly own their site.  We are pulling ideas and code from other projects with the MIT license (the same one we use).  The project is in very active development right now with new features and fixes coming out daily.  One really cool aspect is that many of the volunteers who are helping with the code are international so we have a truly global project.  In addition, this project pulls ideas and even code from many of the other projects I worked on previously at COSL.

<a href="http://www.theplancollection.com"><img src="http://www.justinball.com/wp-content/uploads/2008/04/theplancollection-logo.gif" alt="The Plan Collection Logo" title="theplancollection-logo" width="250" height="50" class="alignnone size-full wp-image-415" /></a>
<h3><a href="http://www.theplancollection.com">ThePlanCollection.com</a></h3>
Technologies: Asp.net, C#, SQL Server 2005, Windows Server 2003, Lucene.Net, various external APIs, and a code generator based on the old version of LLBLGen that I hope to release as open source someday soon.
I am listing this project first since it is the one that I have worked on the longest.  This company is now 9 years old.  We originally used ASP with SQL server on a shared shared server.  It has since grow to a very large project with a fairly sophisticated network/security setup.
This website now boasts nearly 20,000 house plans and a great deal of daily traffic.
<a href="http://apps.facebook.com/house-plans/">The Plan Collection can be found on Facebook with this application</a>.  <a href="http://www.theplancollection.com/house-plan-related-articles-technology/">I also write technology articles for ThePlanCollection based on the technology we are using for that site</a>.

<h3><a href="http://www.teacherswithoutborders.org">Teachers Without Borders</a></h3>
Technologies: Wordpress (php, mysql, apache)
I was a Teachers Without Borders Fellow at The Center for Open and Sustainable Learning (COSL).  This project took a number of different directions.  I'm not actively working on it anymore, but <a href="http://teacherswithoutborders.org/profiles/fredmed1/blogs/justin-ball-a-twb-hero">Fred Mednick, the founder of Teachers Without Borders, was kind enough to write this when we finished up</a>.  One of our first directions was to use <a href="http://wordpress.org">Wordpress</a> which is a great platform.  <a href="/projects/wordpress-plugins/">Here is a list of Wordpress Plugins we tried out.</a>.  We tried using <a href="http://buddypress.org/">Buddypress</a> for a while and I had a chance to contribute some code to that project.  The project wasn't mature enough for our needs at the time so we changed direction and started a fork of <a href="http://lovdbyless.com/">lovdbyless</a>.  That project took on a life of its own and eventually became <a href="http://github.com/jbasdf/luvfoo/tree/master">Luvfoo</a>.  That project currently powers Teachers Without Borders.

While working with Teachers Without Borders I had the chance to work with several projects that involved groups in the Middle East.  Others involved groups in Africa.  Working with Teachers Without Borders was an incredibly rewarding experience and gave me a chance to interact with people all of the world.  It was a chance to feel like I was making a difference for good.

<a href="http://apps.facebook.com/indulgences/"><img src="http://www.justinball.com/wp-content/uploads/2008/04/indulgences-logo.gif" alt="Indulgences Logo" title="indulgences-logo" width="243" height="56" class="alignnone size-full wp-image-414" /></a>
<h3><a href="http://apps.facebook.com/indulgences/">Indulgenc.es</a> (Defunct)</h3>
Technologies: Ruby on Rails, MySql, rfacebook.
For fun I and <a href="http://chickenarmpits.blogspot.com/">Marion</a> constructed a Facebook application that ensures neither you or your friends need feel any guilt for your various deeds.

<h3><a href="http://apps.facebook.com/gabbler/">Gablr</a> (Defunct)</h3>
Technologies: Ruby on Rails, MySql, rfacebook.  My friends send me links to interesting stuff they find all the time.  I hate to lose the links so I hacked together a Facebook application one weekend that let's you share links with your buddies and then have a conversation around that content.

<a href="http://www.51weeks.com"><img src="http://www.justinball.com/wp-content/uploads/2008/04/51weeks-logo.png" alt="51 Weeks Logo" title="51weeks-logo" width="225" height="67" class="alignnone size-full wp-image-417" /></a>
<h3><a href="http://www.51weeks.com">51 Weeks</a></h3>
Technologies: Ruby on Rails, Postgresql, OpenID, Java
<a href="http://code.google.com/p/51weeks/source/checkout">Get 51Weeks Source Code</a>
51Weeks is a conference support system that helps enhance the conference goers social experience.  This was used (and built) during the <a href="http://www.51weeks.com/events/3">Open Education Conference at Utah State in 2007</a> as well as at the <a href="http://www.isls.org/icls2008/">International Conference of the Learning Sciences in the Netherlands</a>.  The system scans for blog entries and photos on flickr for the conference tag and pulls them together into the application for others to find.  It also provides an online program that lets the participants indicate which sessions they are planning on attending.

<h3><a href="http://oerfeeds.info/">oerfeeds.info</a></h3>
Technologies: Ruby on Rails, MySQL
<a href="http://code.google.com/p/oerfeeds/source/checkout">Get OERFeeds.info Source Code</a>
We built this application with the <a href="http://creativecommons.org/">Creative Commons</a> guys in about 4 hours for the Open Education Interop we held at <a href="http://cosl.usu.edu/">COSL</a>.  It's purpose is to provide a simple directory of Open Educational Resource (OER) Feeds so that the guys at OER Commons and other such OER aggregation services and repositories have an easy place to find OER related Feeds.

<a href="http://igag.us/"><img src="http://www.justinball.com/wp-content/uploads/2008/04/logo.gif" alt="igag.us logo" title="igagu.us logo" width="60" height="60" class="alignnone size-full wp-image-420" /></a>
<h3><a href="http://igag.us/">igagus</a></h3>
Technologies: Ruby on Rails, PostGreSQL, Java
<a href="http://code.google.com/p/igagus/source/checkout">Get igag.us Source Code</a>
I stood in line for hours to get one of the first iPhones.  After getting over a nasty sunburn what's a developer to do?  Write an application of course.  I created an RSS Reader formated for the iPhone.  I prefer it to the Google Reader, but then I wrote it.  What's cool is that I added a mark feature.  Mark a story and it will save it.  You can then feed that back out as RSS which is the source of 'What I am reading' on the front page of my blog.  Java is on the list because that is what powers the news aggregator behind the site.

<a href='http://www.justinball.com/wp-content/uploads/2008/04/logo1.gif'><img src="http://www.justinball.com/wp-content/uploads/2008/04/logo1.gif" alt="gistr logo" title="Gistr Logo" width="275" height="108" class="alignnone size-full wp-image-421" /></a>
<h3><a href="http://www.gistr.com">Gistr</a></h3>
Technologies: Ruby on Rails, PostGreSQL
This is another project that I wrote during a meeting.  Gistr is a small utility application that helps us gather up our research in social network in one place.

<a href="http://www.folksemantic.org/"><img src="http://www.justinball.com/wp-content/uploads/2008/04/folksemantic.gif" alt="Folksemantic Logo" title="folksemantic" width="500" height="96" class="alignnone size-full wp-image-409" /></a>
<h3><a href="http://www.folksemantic.org/">Folksemantic</a></h3>
Folksemantic was born out of a conference we attended at the <a href="http://www.mellon.org/">Mellon Foundation</a> and the subsequent funding they provided.  The following projects were all funded on this Grant:

<blockquote>
<a href="http://www.ocwfinder.org/"><img src="http://www.justinball.com/wp-content/uploads/2008/04/ocwfinder-banner.gif" alt="OCW Finder Logo" title="ocwfinder-banner" width="319" height="46" class="alignnone size-full wp-image-411" /></a>
<h4><a href="http://www.ocwfinder.org/">OCWFinder</a></h4>
<a href="http://code.google.com/p/ocwfinder/source/checkout">Get OCWFinder Source Code</a>
OCW Finder harvest metadata from various OCW and OER repositories using the aggregator project listed below.  Using the tags from the various feeds the data is then presented in a way that is easy for the user to browse.  This project made the front page of digg a few years ago.

<a href="http://www.ozmozr.com/"><img src="http://www.justinball.com/wp-content/uploads/2008/04/oz_logo.jpg" alt="Ozmozr Logo" title="oz_logo" width="240" height="62" class="alignnone size-full wp-image-412" /></a>
<h4><a href="http://www.ozmozr.com/">Ozmozr</a></h4>
<a href="http://code.google.com/p/ozmozr/source/checkout">Get Ozmozr Source Code</a>
Ozmozr was an attempt to do identity aggregation, social networking, and RSS aggregation.  This project produced the aggregator project below.  After initial launch we had people signing up every few seconds.  It was pretty cool.  Unfortunately, we were forced to move onto our other projects because of time lines and had to leave the code at the wrong time.  This project was reviewed by <a href="http://weblog.jamisbuck.org/">Jamis Buck</a> and <a href="http://www.vernix.org/marcel/">Marcel Molina, Jr</a> at the Mountain West Ruby Conference. Jamis and Marcel are core Rails contributors and are famous for The Rails Way - http://www.therailsway.com/, a website that details best practices for Ruby programmers.
I wrote about it <a href="http://www.justinball.com/2007/03/17/code-review-of-ozmozr-by-jamis-buck-and-marcel-molina/">here</a> and you can <a href="http://mtnwestrubyconf2007.confreaks.com/session10.html">watch the video here</a>.

<a href="http://annorate.com/"><img src="http://www.justinball.com/wp-content/uploads/2008/04/annorate_logo.gif" alt="Annorate Logo" title="annorate_logo" width="257" height="50" class="alignnone size-full wp-image-406" /></a>
<h4><a href="http://annorate.com/">Annorate</a></h4>
<a href="http://code.google.com/p/annorate/source/checkout">Get Annorate Source Code</a>
Annorate is a project that makes it simple to rate and annotate web pages.

<a href="http://www.makeapath.com/"><img src="http://www.justinball.com/wp-content/uploads/2008/04/makeapathlogo.gif" alt="Make a Path Logo" title="makeapathlogo" width="266" height="50" class="alignnone size-full wp-image-410" /></a>
<h4><a href="http://www.makeapath.com/">Make a Path</a></h4>
<a href="http://code.google.com/p/makeapath/source/checkout">Get Make a Path Source Code</a>
Make a Path is a simple idea, but was fun.  It lets you create a path of websites and shows thumbnails for each.  The path can be shared with others, but more interesting is that the path looks a lot like a powerpoint presentation.  The idea is to sequence web pages like learning objects so that users can follow a logical path that is predetermined by a mentor or instructor.  Unfortunately, we were not able to get funding for other project that would have made this much better including integration with Annorate so that the instructor could leave comments, addition of a roving discussion so that users can interact around the content and an assessment tool that would let instructors embed questions in the content for the student to interact with.

<a href="http://send2wiki.com"><img src="http://www.justinball.com/wp-content/uploads/2008/04/send2wiki_logo.gif" alt="Send2Wiki Logo" title="send2wiki_logo" width="136" height="42" class="alignnone size-full wp-image-413" /></a>
<h4><a href="http://send2wiki.com">send2wiki</a></h4>
<a href="http://code.google.com/p/send2wiki/source/checkout">Get Send2Wiki Source Code</a>
Send2Wiki integrates with Media Wiki to make it easy to send existing content into the wiki.  A bookmarklet makes it easy for an end user.  When they find something interesting they only need to press the bookmarklet.  They are then given the chance to send the content through a translation service.  If a license is found on the page the license is retained.  If a license is not found the user is asked to indicate that they have the right to remix the content.  The relationship between the original page and the new page can be optionally sent to scrumdidilyumptio.us so that the relationship can be recorded.

<a href='http://www.justinball.com/wp-content/uploads/2008/04/scrumdidilyumptious.gif'><img src="http://www.justinball.com/wp-content/uploads/2008/04/scrumdidilyumptious.gif" alt="scrumdidilyumptious logo" title="scrumdidilyumptious" width="496" height="41" class="alignnone size-full wp-image-422" /></a>
<h4><a href="http://scrumdidilyumptio.us/">scrumdidilyumptio.us</a></h4>
<a href="http://code.google.com/p/didily/source/checkout">Get Scrumdidilyumpitio.us Source Code</a>
This is the project that we originally showed to Mellon.  It lets you establish relationships between websites using a simple triple store. Scrumdidilyumptious also includes a grease monkey script that will show web pages that have been related to the webpage you are currently on.  The idea is simple but powerful.  Create a web based database that anyone can add data to and let anyone query that data for their own purposes.

<h4>Aggregator Daemon</h4>
<a href="http://code.google.com/p/aggregatord/source/checkout">Get Aggregator Deamon Source Code</a>
This is a backend work horse project that we created using Java.  The aggregator understands Atom, RSS, OAI and can parse normal webpages.  All the data is then dumped into a database that our Ruby on Rails applications would then read from.

<h4>Recommender Deamon</h4>
<a href="http://code.google.com/p/recommenderd/">Get Recommender Source Code</a>
Recommendations are resource intensive so this project was created using Java.  This project reads from the database that the aggregator writes to (many of them if so configured).  The entries are then stemmed and tokenized.  The results can then be used to make recommendations.  Recently we changed from our algorithms and have started using <a href="http://lucene.apache.org/">Lucene</a> as the core of this project.

<h4>MOCSL Plugins</h4>
<a href="http://code.google.com/p/mocsl-plugins/source/checkout">Get MOCSL Plugins Source Code</a>
To make development easier we created a series of Ruby on Rails plugins.  The Open Account plugin made account management simple and added OpenID.  Now there are several other options available, but the Open Account can still provide a great deal of value.  The other plugins made it easier to maintain the parts of our database related to the Aggregator.  Unfortunately, newer releases of Rails broke one of the plugins we were using.  Fortunately, newer versions of Rails will do a better job with managing migrations.
</blockquote>

<a href="http://cosl.usu.edu/projects/educommons"><img src="http://www.justinball.com/wp-content/uploads/2008/04/educommons-logo1.png" alt="eduCommons Logo" title="educommons-logo1" width="350" height="60" class="alignnone size-full wp-image-419" /></a>
<h3><a href="http://cosl.usu.edu/projects/educommons">eduCommons</a></h3>
<a href="http://sourceforge.net/projects/educommons/" title="Download the source code for eduCommons">Get The Source Code</a>
Technologies: Zope, Plone, Python
eduCommons is an open source that enables Universities to participate in the OpenCourseWare movement without investing millions of dollars in infrastructure.  <a href="http://ocw.usu.edu/">Utah State's OpenCourseWare</a> and many of the universities that participate in the consortium are powered by this platform.


<h3><a href="http://sourceforge.net/projects/ols-usu/">Open Learning Support</a></h3>
Technologies: Zope, Python, MySql
This was one of the first projects sponsored by COSL.  At the time the group was named Open and Sustainable Learning Opportunity(OSLO).  This software provided <a href="http://mit.ols.usu.edu/">social support for MIT's OpenCourseWare Project</a>.

<h3>Proteus</h3>
Technologies: ASP, SQL Server, Windows Server 2000
This project was conceived by the illustrious Micah Schicker at 3GB.  It is an easy to use content management system and powered the <a href="http://newenglish.usu.edu">English Department's website at USU</a> until a few years ago.

<h3><a href="http://syllabase.usu.edu/syllabase/">Syllabase</a></h3>
Technologies: ASP, SQL Server, Windows Server
Syllabase was the reason 3GB was spun out of the university.  Chris Okelberry and two other guys built it in their evenings (3GB = 3 guys in the basement) to power Utah State's online masters degree in English.  This project was a full learning management implementation and in its day was very similar to WebCT its capabilities.  Blackboard obviously won in the space, but the project is still in use at Utah State and a couple of other universities.

<h3>Open Shop Keeper</h3>
Technologies: ASP.Net, SQL Server, Windows Server, Windows Services
We spent several years and a whole lot of money developing an ecommerce platform.  Originally, the purpose of this project was to sell blinds as a distributor.  We had a very sophisticated integration with Hunter Douglas's SAP system.  We used AJAX before it was cool.  We had hundreds of thousands of lines of code.  Then we ran out of money.  We tried to change the code into something we could release as open source, thus the Open Shop Keeper name.  This project was my biggest and most expensive failure.  However, I learned from it:
<ul>
  <li>Build the simplest thing you can as fast as you can.</li>
  <li>Get your application in front of your users and then get their feedback.</li>
  <li>Revise your application according to user feedback.</li>
  <li>Repeat the process above over and over.</li>
  <li>Choose your partners carefully</li>
  <li>Choose your business ventures carefully</li>
  <li>Focus on core value first.  The peripheral stuff can come later when you have money and can hire developers to focus on the remaining 20% of features.</li>
  <li>Marketing and business development should come first.  Software is a tool for business not the business.</li>
  <li>Make sure your marketing team and business team is as good as your development team and vice versa.</li>
</ul>

<h3><a href="http://www.directdoorhardware.com/">Direct Door Hardware</a></h3>
Technologies: html and Paypal
I list this not because I did a lot of development on this project.  <a href="http://engjake.wordpress.com/">Jake</a> really did most of the work, but this is the first company I ever sold.  I also learned a great User Interface lesson with this project.  We had a very simple html site that used Paypal for a shopping cart.  It started making money so we decided that we should buy something expensive, something built by a big company, something enterprise.  We bought a commercial shopping cart.  It cost a lot of money.  We built templates for it so it looked like the old site.  We turned it on.  That very day sales went from very good to zero.  I kid you not.  Over the next three weeks we managed to get 7 orders or so.  Finally, in frustration we got rid of the software and went back to the hand built html.  That very day orders went right back up.  Don't ever trick yourself into believing that fancy graphics or functionality will win over user experience.  The commercial package looked nicer and was far more functional.  It didn't require that the user be directed to a remote shopping cart.  However, it also made it difficult to add all the hardware that you need to for a full house - inside doorknobs, closets, bathrooms etc.  The html site listed all items in one spot.  The user only needed to choose the correct quantities and hit order.  The commercial package had a catalog.  Even with 'recommended' items it took the user 10-30 minutes to figure out their order.  That experience is what the user cared about not branding.  I learned that lesson well.

<h3>Sorenson</h3>
Everything we did at Sorenson was proprietary so I cannot provide the code and I am not even sure about legalities around screenshots but here are the projects I worked on there:
<h3>Sorenson Technologies</h3>
<h4>Video Camera</h4>
Technologies: Wind River vxWorks, Sorenson ASIC, Arm 9, C++, ActiveX, ASP
We started building a prototype camera that would wirelessly transmit video that could then be viewed in a web browser.  It was a very cool and difficult concept in its time.  I think you can buy cameras like this for $50 at Best Buy these days.

<h3>Sorenson Vision</h3>

<h4>Networking</h4>
Techologies: RTP, TCP/IP, UDP, Custom Servers, NAT
I spent a lot of time understanding lower level networking protocols.  We had to figure out how to move video via UDP through NAT systems.  We spent time trying to deal with Jitter and Network latency.  The Internet infrastructure has gotten a lot better in recent years.  We take VOIP for granted, but it isn't a simple problem.  I had a great time working on it.

<h4>Sparc Codec</h4>
Sorenson built the codec for Quicktime.  Then Macromedia asked us to do one for Flash.  Since I was the only one who knew anything about Flash at the time I got to attend the first meeting where that relationship started.  That was cool so I am listing it here.

<h4>VisionLink</h4>
I did MFC and general Windows programming for our desktop Video conferencing project.

<h4>Glasses</h4>
This was one of those projects that was really cool in its time, but which never went anywhere.  The purpose of Glasses was to get video conferencing traffic through NAT systems.  I did a lot of debugging and finding memory leaks on this project.

<h4>USB Drivers</h4>
I wrote Windows drivers for our USB device.  I hate Windows drivers.  I will not be doing this again.

<h4>USB Firmware</h4>
My electrical engineering background came in handy.  We created test firmware for our USB Video Conferencing device.  Debugging consisted of watching wave forms on a logic analyzer and then deciphering the hex output.  I actually had a great time with this.  Writing code for embedded devices is pretty fun.

<h4>Testing</h4>
I started in QA at Sorenson.  Over the years I wrote test automation software and implemented computer imaging using Ghost.  It saved us a ton of time and the company money, but truthfully I just hated the monotonous tasks so I automated them.  I worked with some really great testers.  Now that agile programming is en vogue and testing is a part of every programmers job (why did we not do this long ago?) that background has been invaluable.
