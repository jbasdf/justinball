webpackJsonp([0xc86d3100e8c4],{1493:function(e,r){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2010-07-31-textmate-rspec-bundle-error/index.md absPath of file >>> MarkdownRemark",html:"<p>After installing the <a href=\"http://github.com/rspec/rspec-tmbundle\">Textmate RSpec bundle</a> I started getting this error:</p>\n<p>\n/Applications/TextMate.app/Contents/SharedSupport/Support/lib/builder.rb:86:in `blank_slate_method_added': stack level too deep (SystemStackError) from /Applications/TextMate.app/Contents/SharedSupport/Support/lib/builder.rb:86:in `blank_slate_method_added' from /Library/Ruby/Gems/1.8/gems/builder-2.1.2/lib/blankslate.rb:84:in `method_added' from /Library/Ruby/Gems/1.8/gems/builder-2.1.2/lib/blankslate.rb:104 from /Library/Ruby/Site/1.8/rubygems/custom_require.rb:31:in `gem_original_require' from /Library/Ruby/Site/1.8/rubygems/custom_require.rb:31:in `require' from /Users/jbasdf/projects/red/vendor/rails/activesupport/lib/active_support/basic_object.rb:21 from /Library/Ruby/Site/1.8/rubygems/custom_require.rb:31:in `gem_original_require' from /Library/Ruby/Site/1.8/rubygems/custom_require.rb:31:in `require' ... 32 levels... from /Users/jbasdf/Library/Application Support/TextMate/Bundles/RSpec.tmbundle/Support/lib/spec/../spec/mate/runner.rb:36:in `chdir' from /Users/jbasdf/Library/Application Support/TextMate/Bundles/RSpec.tmbundle/Support/lib/spec/../spec/mate/runner.rb:36:in `run' from /Users/jbasdf/Library/Application Support/TextMate/Bundles/RSpec.tmbundle/Support/lib/spec/../spec/mate/runner.rb:24:in `run_focussed' from /tmp/textmate-command-31296.rb:3\n</p>\n<p>The solution is pretty simple. Just add this to spec_helper.rb:</p>\n<pre><code class=\"ruby\">\n$:.reject! { |e| e.include? 'TextMate' }\n</pre></code>",frontmatter:{title:"Textmate RSpec Bundle Error",date:"July 31, 2010",imageUrl:null,image:null}}},pathContext:{path:"/textmate-rspec-bundle-error"}}}});
//# sourceMappingURL=path---textmate-rspec-bundle-error-d0d860af38f126231ea7.js.map