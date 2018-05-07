webpackJsonp([0xfdcc9c32f3b4],{1958:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2008-03-12-family-search-write/index.md absPath of file >>> MarkdownRemark",html:'<p>We\'re back from lunch.  I had a great chat with Alan Braverman the CTO &#x26; founder of Geni.   They are doing some cool things by connecting living people with their families and to the larger family graph.   They also let you upload photos and other digital assets then assemble that into a timeline.  Eventually you will be able to create a family timeline.</p>\n<p>On to the FamilyTree Write.  This part of the API seems to be mainly applicable to software packages that want to contribute data to FamilySearch.  I am more of a data mooch than a data provider so it isn\'t as interesting but here goes:</p>\n<p>Only the <em>assertions</em> section of the entry is writable.\nIn version 1.1 the <em>summary</em> section will be writable.\nOnly the assertion value can be changed.  ie you can\'t just change the date of an event.  You have to change all parts of the event - the date, the place, the type (birth, death, etc) and the description.  If you left out the place or type it would update the date and delete the place and type.</p>\n<p>After you post you will get back a skeleton of the person which is really gross, but most of the people are probably dead so at least it won\'t hurt.  :-)  You only get back the IDs of the person so that you can map the object that was created to an object in your database.</p>\n<p>If you pass some bad data you will get errors or the parts of the request that fails.  They won\'t fail the entire request just the bad parts.</p>\n<p>To write you create an xml document:</p>\n<pre><code class="xml">\n<familytree version="1.0" xmlns="api.familysearch.org/familytree/v1">\n  <persons>\n    <person>\n      <assertions>\n        <name type="name"></name>\n        <event type="Birth" id="..">...</event>\n      </assertions>\n    <person>\n  <persons>\n</familytree>\n</pre></code>\n<br />\n<p>\nTo Delete:\n</p>\n<pre><code class="xml">\n<familytree version="1.0" xmlns="api.familysearch.org/familytree/v1">\n  <persons>\n    <person id="KW3b-2HB" fsaction:action="delete">\n    <person>\n  <persons>\n</familytree>\n</pre></code>\n<br />\n<p>\nYou can only change or delete assertions that you have contributed.  However, they have created a "disputed" assertion so that you can make correction to bad data.\n<p>Create a new assertion with the same values except for the disputed value.  Then set disputed=true.</p>\n<p>The system is person centric.  All relationships for a given person are stored with the person.</p>',frontmatter:{title:"Family Search Write",date:"March 12, 2008",imageUrl:null,structuredHtml:null,image:null}}},pathContext:{}}}});
//# sourceMappingURL=path---family-search-write-f206d8fc0923afaacc1e.js.map