webpackJsonp([0x62f7723cad12],{1986:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2009-09-12-gems-on-an-engineyard-solo-instance/index.md absPath of file >>> MarkdownRemark",html:'<p>I started running into a few issues on an Engineyard Solo instance with my muck gems. Basically, <a href="http://github.com/jbasdf/muck/tree/master">muck</a> consists of a lot of\nRails engines packaged as gems for reusability. When we release a new app we also need to release new versions of the gems since\nthat\'s where most of guts of the lives. This worked fine until recently when we rebuilt our instance (to switch to <a href="http://www.modrails.com/">Passenger</a>).\nIn the past a wait of about ten minutes was sufficient for the new gems to show up. The problem was that I would do a sudo gem\ninstall muck-engine and no matter how much cussing I did I ended up with the old version not the new one that I just released.\nI checked gem env and <a href="http://gems.rubyforge.org">http://gems.rubyforge.org</a> was listed as a source. Thanks to <a href="http://brainspl.at/">Ezra</a> I found out that Engineyard\nmaps <a href="http://gems.rubyforge.org">http://gems.rubyforge.org</a> to a local mirror. If you want to change it just edit /etc/hosts and comment out the\nline that looks like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">174.129.222.219  gems.rubyforge.org</code></pre>\n      </div>\n<p>All better again.</p>',frontmatter:{title:"Gems on an EngineYard Solo instance",date:"September 12, 2009",imageUrl:null,structuredHtml:null,image:null}}},pathContext:{}}}});
//# sourceMappingURL=path---gems-on-an-engineyard-solo-instance-782b79fd9a818b3bfb0f.js.map