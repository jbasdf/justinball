webpackJsonp([0xc9157daa5fd3],{1128:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2013-10-24-ember-textfield-ignores-arrow-keys-how-to-monitor-key-events-in-your-textfield/index.md absPath of file >>> MarkdownRemark",html:'<p>Ember provides a text field view that makes generating text input fields pretty simple. What\'s really cool is with the\n  simple addition of onEvent="keyPress" and action="my_function" you can monitor changes to the field as the user types.\n  It looks something like this:</p>\n<script src="https://gist.github.com/jbasdf/9202528.js"></script>\n<p>(On a side note you can also just add an observer to your controller for \'value\' and it will be called as the user types in new content.)</p>\n<p>Even with all this magic I ran into a scenerio that not handled - I needed to know if the user had pressed the arrow up or down keys. A quick\n  dig into the Ember code led me to the Ember.TextSupport mixin. The Ember.TextField view mixes in Ember.TextSupport so you only need to\n  create your own textfield view, extend Ember.TextField and override a couple of the methods from Ember.TextSupport. It looks like this:<p>\n<script src="https://gist.github.com/jbasdf/9202561.js"></script>\n<p>Using your new arrow enabled view then looks like this:</p>\n<script src="https://gist.github.com/jbasdf/9202574.js"></script>',frontmatter:{title:"Ember Textfield ignores arrow keys. How to monitor key events in your textfield",date:"October 24, 2013",imageUrl:null,structuredHtml:null,image:null}}},pathContext:{path:"/ember-textfield-ignores-arrow-keys.-how-to-monitor-key-events-in-your-textfield"}}}});
//# sourceMappingURL=path---ember-textfield-ignores-arrow-keys-how-to-monitor-key-events-in-your-textfield-a5bc14621a599562da2a.js.map