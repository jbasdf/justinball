webpackJsonp([57298877285308],{992:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2008-07-26-acts_as_state_machine-state-is-always-nil/index.md absPath of file >>> MarkdownRemark",html:'<p>If you are using the acts<em>as</em>state<em>machine plugin to manage the state of your object keep this in mind:\nIf you are going to have an object like an order or something similar that likely has a field state</em>id to relate in a geographic state then you need to be sure to rename the column that acts<em>as</em>state_machine plugin uses thus:</p>\n<pre><code class="ruby">\nacts_as_state_machine :initial => :new, :column => :mode\n</pre></code>\n<p>Then you can get your object\'s state thus:</p>\n<pre><code class="ruby">\nobj.mode\n</pre></code>\n<p>If you don\'t follow these steps ActiveRecord will override acts<em>as</em>state_machine and try to give you the geographic state (Utah, Idaho, etc) instead of the object state (new, edit, tired, etc).  (In my case the value was always nil no matter how many times I tried to obj.next! to transition the states of my object.  You will cry and scream and be in a very bad mood for a long time if you forget this fact.</p>\n<p>Here\'s more info on the <a href="http://rails.aizatto.com/2007/05/24/ruby-on-rails-finite-state-machine-plugin-acts_as_state_machine/">acts<em>as</em>state_machine plugin</a>.</p>',frontmatter:{title:"acts_as_state_machine &#8211; state is always nil",date:"July 26, 2008",imageUrl:null,image:null}}},pathContext:{path:"/acts_as_state_machine-state-is-always-nil"}}}});
//# sourceMappingURL=path---acts-as-state-machine-state-is-always-nil-4e9652a467ae02eea2e1.js.map