webpackJsonp([0xaaeb605180f1],{1164:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2008-01-23-framework-problems-will-ruin-your-day/index.md absPath of file >>> MarkdownRemark",html:'<p>I created a code generator that writes all the of the code that connects <a href="http://www.theplancollection.com" title="Visit my website filled with great house plans and we will rejoice together.">ThePlanCollection.com</a> website with its database. It is kind of like ActiveRecord that makes Rails so useful but not nearly as elegant. Someday I will release it as open source, but I am probably to late given all the other code generators that are now available. Why I continue to build an maintain my own generator I don\'t know. I makes me a cry a lot.</p>\n<p>Like today. I noticed that the <a href="http://www.theplancollection.com/my-house-plans" title="You can save house plans here and show them off to your mom.">My House Plans</a> feature on <a href="http://www.theplancollection.com" title="my house plans not yours.  Ok maybe I can share.   :-)">ThePlanCollection.com</a> wasn\'t working so I started digging into the problem. It turns out that there is a bug in the generator and I am sure there are many more. The problem is that C# won\'t let you set DateTime values or Guids to null. That is very lame. So in my code I have to create a member variable that indicates the value is supposed to be null so that it can be passed to the database as null. One of those checks was happening when it didn\'t need to so in spite of passing in a value the check looked at the member variable which indicated the value should be null and so viola the value went to the database as null.</p>\n<p>I take some of the blame here. I should have caught this bug. I should have known not to change a default value a week ago. However, ultimately I blame this on the !@#$ morons at M$. Why the hell can\'t I set a Guid or DateTime to null?</p>\n<p>Now you know why I love Ruby.</p>',frontmatter:{title:"Framework Problems Will Ruin Your Day",date:"January 23, 2008",imageUrl:null,image:null}}},pathContext:{path:"/framework-problems-will-ruin-your-day"}}}});
//# sourceMappingURL=path---framework-problems-will-ruin-your-day-288dada56335d1dc6913.js.map