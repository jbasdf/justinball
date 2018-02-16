webpackJsonp([98657101493215],{1560:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2014-03-17-vector-programming-and-reactive-javascript/index.md absPath of file >>> MarkdownRemark",html:'<h2>The Functional Part</h2>\nDon\'t describe how to process the data using a loop instead have your code state what you want to happen.\n<p>Use functional concepts to build nice observable streams:</p>\n<ul>\n<li>Map: transform one collection into another.</li>\n<li>Filter: filter one collection into a smaller collection.</li>\n<li>Reduce: take a collection and reduce it into a single result (like inject in Ruby).</li>\n<li>Zip: zip two collections into a single collection.</li>\n</ul>\n<p>Reactive programming requires thinking functionaly.</p>\n<h2>Observables</h2>\n<ul>\n<li>Turn events into collections.</li>\n<li>Allow you to handle errors in the collection.</li>\n<li>Unsubscribe when the event is done.</li>\n</ul>\n<h2>Observable methods</h2>\n- merge: combine collections into a collection as each item arrives.\n- concatAll: combine collections into a new collection in the order in which they were created. Flatten async requests and resolve race conditions.\n- takeUntil: creates a single observable of a source collection and a stop collection. When event from stop collection occurs unsubscribe from source.\n- switchLatest: only use the latest collection. Throw out the rest.\n- distinctUntilChanged: filters out duplicate occurrences.\n<h2>Example</h2>\n<p>(from <a href="https://github.com/Reactive-Extensions/RxJS">https://github.com/Reactive-Extensions/RxJS</a>)</p>\n<pre><code class="javascript">\n/* Only get the value from each key up */\nvar keyups = Rx.Observable.fromEvent($input, \'keyup\')\n  .map(function (e) {\n      return e.target.value;\n  })\n  .filter(function (text) {\n      return text.length > 2;\n  });\n<p>/* Now throttle/debounce the input for 500ms <em>/\nvar throttled = keyups\n.throttle(500 /</em> ms */);</p>\n<p>/* Now get only distinct values, so we eliminate the arrows and other control characters */\nvar distinct = throttled\n.distinctUntilChanged();</p>\n</pre></code>\n<h3>Resources</h3>\n- <a href="http://reactive-extensions.github.io/RxJS/">Reactive-Extensions for Javascript</a>\n- <a href="http://jhusain.github.io/learnrx/">Learn Reactive Programming</a> by <a href="https://twitter.com/jhusain">jhusain</a>\n- <a href="https://hackpad.com/Asynchronous-JavaScript-at-Netflix-j0DqUOf5fCV">Asynchronous JavaScript at Netflix</a>\n- <a href="https://hackpad.com/Adding-Even-More-Fun-to-Functional-Programming-With-RXJS-W4be7aCTEjt">Adding Even More Fun to Functional Programming With RXJS</a>',frontmatter:{title:"Vector Programming and Reactive Javascript",date:"March 17, 2014",imageUrl:null,image:null}}},pathContext:{path:"/vector-programming-and-reactive-javascript"}}}});
//# sourceMappingURL=path---vector-programming-and-reactive-javascript-4f0e4671b502f00c0ad5.js.map