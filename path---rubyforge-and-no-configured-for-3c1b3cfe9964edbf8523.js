webpackJsonp([38658550704525],{1431:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2009-08-17-rubyforge-and-no-configured-for/index.md absPath of file >>> MarkdownRemark",html:'<p>I\'ve been using <a href="http://github.com/technicalpickles/jeweler/tree/master">jeweler</a> to setup a new gem. I followed the instructions provided, but started getting "  configured for " when I tried to do release my gem with "rake rubyforge:release". It turns out that the rubyforge gem doesn\'t quite configure everything for you. I added the following to ~/.rubyforge/autoconfig.yml and it started working:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>processor_ids:\n  IA64: 6000\n  Any: 8000\n  AMD-64: 1500\n  PPC: 2000\n  Sparc: 4000\n  Other: 9999\n  i386: 1000\n  Alpha: 7000\n  MIPS: 3000\n  UltraSparc: 5000</code></pre>\n      </div>',frontmatter:{title:"Rubyforge and no <processor_id> configured for <Any>",date:"August 17, 2009",imageUrl:null,image:null}}},pathContext:{path:"/rubyforge-and-no-configured-for"}}}});
//# sourceMappingURL=path---rubyforge-and-no-configured-for-3c1b3cfe9964edbf8523.js.map