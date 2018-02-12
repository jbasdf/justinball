webpackJsonp([0x9560fd6021ef],{1467:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2015-02-06-testing-software-bugs-me/index.md absPath of file >>> MarkdownRemark",html:"<p>Agile practices have pushed software engineers towards test driven development. The result has been an increase\nin project velocity and general happiness all around. However, at some point you will get a project that either\nlacks tests or has insufficient test coverage. Even on projects that have 100% coverage bugs will still manifest\nthemselves. For example, the developer may have misunderstood the requirment during implementation. Their test\nmight pass but the code it test is an expression of incorrect behavior.</p>\n<p>For these reasons we still use staging servers and we still go through testing before a final release to \nproduction. It takes a special person to endure the procoess of testing the same software over and over. \nFinding bugs in software is not typically the job most developers long for so I'm greatful to our team\nmembers who diligently deal with the process each week.</p>\n<p>Bugs don't always show up during QA either. The worst bugs make it to production and are typically found\nduring some critical demo. I really hate those bugs.</p>\n<p>Where ever a bug is found in the process it's critical that it be recorded and recorded correctly.\n  If a bug report doesn't contain detailed enough information the developer working on the problem can waste\n  an insane amount of time trying to reproduce the bug. Make the bug report obscure enough and you'll end up with a\n  pissed off developer and a report marked \"Unable to Reproduce\".\n</p>\n<p>You want your limited and expensive development resources fixing bugs not trying to find them all over gain. \nHere are a few tips for moving your developers from the bug discovery phase to the bug fix phase as quickly as\npossible:</p>\n<ul>\n  <li>Include a url. It doesn't matter if it's a production, staging or development url. The developer can\n  figure out the domain. If the application is written correctly the rest of the url contains critical state\n  information that can be used to locate the bug and reproduce the state.</li>\n  <li>Don't try to pack everything into the title. I've seen plenty of bugs with a title and no descriptoin. Unless the \n  bug is something along the lines of change this text the title is insufficient to accurately desribe the problem.</li>\n  <li>Do use <a href=\"http://www.techsmith.com/jing.html\">Jing</a> to capture a short video demonstrating the steps to\n    reproduce the bug. I worked on a project once where almost every report came with a Jing. Finding and reproducing\n    the bug was trivial.</li>\n  <li>If you don't feel like you need a full video take a screenshot. <a href=\"https://evernote.com/skitch/\">Skitch</a> \n    works great. Do draw on the screen shot. Make notes. Add arrows that point to problem areas.\n  </li>\n  <li>Write a detailed description. What browser were you using? What version? Do you have any plugins installed?\n  What operating system are you on? If you want to be really helpful open up the javascript console. Are there errors?\n  copy and paste those over.\n  </li>\n  <li>If you need to communicate with the developer about the bug. Include the comments in the bug. We use Pivotal Tracker.\n  It's awesome. It has comments. Keep all the discussion about the bug included with the bug. Emails will get lost or forgotten.\n  It might be tempting to walk over to someones desk and tell them all about it. Don't do that. They're probably working on \n  something else and will immediately brain dump everything you tell them.\n  </li>\n  <li>\n    While you are compiling the the report think of yourself getting hit by a bus on the way home from work. You will\n    never speak of this bug again. Someone else has to fix it. They can't ask you a question. They can't read your mind.\n    Details and context matter include them in the description. We are human beings. We forget. When a developer gets around\n    to fixing the bug you entered last week or last month you will have forgotten everything about it.\n  </li>\n</ul>\n<p>That's it. Happy squashing. Watch out for busses.</p>",frontmatter:{title:"Testing Software Bugs Me",date:"February 06, 2015",imageUrl:null,image:null}}},pathContext:{path:"/testing-software-bugs-me"}}}});
//# sourceMappingURL=path---testing-software-bugs-me-107e4f169c4aeec5c31b.js.map