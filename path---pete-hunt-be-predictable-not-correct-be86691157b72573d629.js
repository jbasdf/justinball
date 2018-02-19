webpackJsonp([76714112777578],{1445:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2014-03-17-pete-hunt-be-predictable-not-correct/index.md absPath of file >>> MarkdownRemark",html:'<p>Mountain West Javascript starts today. <a href="https://twitter.com/floydophone">Peter Hunt</a>, Facebook developer and contributor to\n<a href="http://facebook.github.io/react/">reactjs.org</a> is first up presenting "Be predictable, not correct."</p>\n<p>Here\'s my notes:</p>\n<p>Even better: <a href="https://hackpad.com/Secrets-of-the-Virtual-DOM-ULWeSrnO3cF">Notes on Hackpad</a></p>\n<h2>Key Value Observation (KVO)</h2>\nThis is the pattern that Ember.js implements. Idea is to bind data to elements in the DOM.\nThe problem is that we have to use units of computation that the platform gives you. This results in leaky abstractions. The developer\nhas to hold to much information in their head and solutions become complex to implement. Can\'t compose using primitivies\nAngular uses Dirty Checking.\n<p>NOT the simpliest way to build things.</p>\n<h2>Reactive Design</h2>\nIn a mythical javascript language we could use Javascript primitives and we would have a reactive DOM.\nHowever, Javascript is not reactive. We do need to build some layer of abstraction. Reactjs built a reactive DOM.\nNo databinding artifacts. Takes advantage of existing Javascript.\n<h3>Virtual DOM</h3>\n- Whenever anything may have changed, re-render everything\n- Diff the previous data previous with the next\n- Only update the DOM with what changed\n<p>Avoid fighting the framework. Rerender and diffing feels expensive which is why we do data binding.</p>\n<ul>\n<li>KVO entangles app code with observables.</li>\n<li>Angualr style dirty chcking forces you to pass everything through $scope or $watch</li>\n<li>Virtual DOM needs a signal to say anything may have changed</li>\n</ul>\n<h3>Performance</h3>\n- Memory is more important for performance on mobile than CPU usage.\n- Render code is usually cheap.\n- Your view is usually smaller than your model.\n<p>Three words:</p>\nSimple composable primitives',frontmatter:{title:"Pete Hunt - Be predictable, not correct.",date:"March 17, 2014",imageUrl:null,structuredHtml:null,image:null}}},pathContext:{path:"/pete-hunt-be-predictable-not-correct"}}}});
//# sourceMappingURL=path---pete-hunt-be-predictable-not-correct-be86691157b72573d629.js.map