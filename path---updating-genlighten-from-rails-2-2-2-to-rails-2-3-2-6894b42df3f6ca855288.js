webpackJsonp([0x7c4b85d16079],{3075:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2009-08-17-updating-genlighten-from-rails-2-2-2-to-rails-2-3-2/index.md absPath of file >>> MarkdownRemark",html:"<p>I can't resist new stuff so I'm updating Genlighten to Rails 2.3.2.  This release comes with some pretty sweet additions like Rack.  Here's what I had to do:</p>\n<ol>\n\t<li>Set RAILS_GEM_VERSION = '2.3.2' (easy)</li>\n\t<li>Removed stuff like this from my code:\n          <pre><code class=\"ruby\">\n            protect_from_forgery :except => :swfupload\n            session :cookie_only => false, :only => :swfupload\n          </pre></code>\n          -- 'The :digest and :secret options to protect_from_forgery are deprecated and have no effect.' and sessions are lazy loaded now.</li>\n\t<li>I updated shoulda to the latest version.  This resulted in a number of deprecation warnings which took me a while to fix.</li>\n</ol>\n<a href=\"http://guides.rubyonrails.org/2_3_release_notes.html\">The release notes are worth a read</a>.",frontmatter:{title:"Updating Genlighten from Rails 2.2.2 to Rails 2.3.2",date:"August 17, 2009",imageUrl:null,structuredHtml:null,image:null}}},pathContext:{}}}});
//# sourceMappingURL=path---updating-genlighten-from-rails-2-2-2-to-rails-2-3-2-6894b42df3f6ca855288.js.map