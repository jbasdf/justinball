webpackJsonp([59540251639164],{1492:function(r,s){r.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2011-07-18-ruby-1-9-2-rvm-and-a-nasty-error-when-installing-rubygems-couldnt-parse-yaml-at-line-2-column-10-psychsyntaxerror/index.md absPath of file >>> MarkdownRemark",html:"<p>It's 'funny' how seemingly simple things take you down nasty paths. I was hoping to spend a few minutes playing with <a href=\"http://www.igvita.com/2011/03/08/goliath-non-blocking-ruby-19-web-server/\">Goliath</a>. That led me to installing ruby 1.9.2 using rvm which spit out this error:</p>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>Removing old Rubygems files...\nInstalling rubygems dedicated to ruby-1.9.2-p290...\nInstalling rubygems for /Users/jbasdf/.rvm/rubies/ruby-1.9.2-p290/bin/ruby\nERROR: Error running 'GEM_PATH=\"/Users/jbasdf/.rvm/gems/ruby-1.9.2-p290:/Users/jbasdf/.rvm/gems/ruby-1.9.2-p290@global:/Users/jbasdf/.rvm/gems/ruby-1.9.2-p290:/Users/jbasdf/.rvm/gems/ruby-1.9.2-p290@global\" GEM_HOME=\"/Users/jbasdf/.rvm/gems/ruby-1.9.2-p290\" \"/Users/jbasdf/.rvm/rubies/ruby-1.9.2-p290/bin/ruby\" \"/Users/jbasdf/.rvm/src/rubygems-1.6.2/setup.rb\"', please read /Users/jbasdf/.rvm/log/ruby-1.9.2-p290/rubygems.install.log\nWARN: Installation of rubygems did not complete successfully.</code></pre>\n      </div>\n<p>That's not especiallyl pretty but it did point me to a log file which contained this:</p>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>/Users/jbasdf/.rvm/rubies/ruby-1.9.2-p290/lib/ruby/1.9.1/psych.rb:148:in `parse': couldn't parse YAML at line 2 column 10 (Psych::SyntaxError)\n        from /Users/jbasdf/.rvm/rubies/ruby-1.9.2-p290/lib/ruby/1.9.1/psych.rb:148:in `parse_stream'\n        from /Users/jbasdf/.rvm/rubies/ruby-1.9.2-p290/lib/ruby/1.9.1/psych.rb:119:in `parse'\n[2011-07-18 18:29:21] GEM_PATH=\"/Users/jbasdf/.rvm/gems/ruby-1.9.2-p290:/Users/jbasdf/.rvm/gems/ruby-1.9.2-p290@global:/Users/jbasdf/.rvm/gems/ruby-1.9.2-p290:/Users/jbasdf/.rvm/gems/ruby-1.9.2-p290@global\" GEM_HOME=\"/Users/jbasdf/.rvm/gems/ruby-1.9.2-p290\" \"/Users/jbasdf/.rvm/rubies/ruby-1.9.2-p290/bin/ruby\" \"/Users/jbasdf/.rvm/src/rubygems-1.6.2/setup.rb\"\n/Users/jbasdf/.rvm/rubies/ruby-1.9.2-p290/lib/ruby/1.9.1/psych.rb:148:in `parse': couldn't parse YAML at line 2 column 10 (Psych::SyntaxError)\n        from /Users/jbasdf/.rvm/rubies/ruby-1.9.2-p290/lib/ruby/1.9.1/psych.rb:148:in `parse_stream'\n        from /Users/jbasdf/.rvm/rubies/ruby-1.9.2-p290/lib/ruby/1.9.1/psych.rb:119:in `parse'\n        from /Users/jbasdf/.rvm/rubies/ruby-1.9.2-p290/lib/ruby/1.9.1/psych.rb:106:in `load'\n        from /Users/jbasdf/.rvm/src/rubygems-1.6.2/lib/rubygems/config_file.rb:235:in `load_file'\n        from /Users/jbasdf/.rvm/src/rubygems-1.6.2/lib/rubygems/config_file.rb:179:in `initialize'\n        from /Users/jbasdf/.rvm/src/rubygems-1.6.2/lib/rubygems/gem_runner.rb:76:in `new'\n        from /Users/jbasdf/.rvm/src/rubygems-1.6.2/lib/rubygems/gem_runner.rb:76:in `do_configuration'\n        from /Users/jbasdf/.rvm/src/rubygems-1.6.2/lib/rubygems/gem_runner.rb:49:in `run'\n        from /Users/jbasdf/.rvm/src/rubygems-1.6.2/setup.rb:35:in `'</code></pre>\n      </div>\n<p>Again not especially helpful. However, ruby and all it's lovely gems are open source so I dropped a 'puts' statement into 'config_file.rb' (/Users/jbasdf/.rvm/rubies/ruby-1.9.2-p290/lib/ruby/1.9.1/rubygems/config_file.rb) and found the culprit - a very ugly .gemrc file in my home directory that I probably put there years ago. It looks like this:</p>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>echo -e '---\n:benchmark: false\ngem: --no-ri --no-rdoc\n:update_sources: true\n:bulk_threshold: 1000\n:verbose: true\n:backtrace: false' > ~/.gemrc</code></pre>\n      </div>\n<p>psych - the yaml processor for ruby 1.9.2 - didn't like that ugly yaml at all. I removed my .gemrc file (I don't need anything custom) and everything started to work.</p>\n<p>If you run into this problem the paths will be specific to your machine but hopefully the ideas help.</p>\n<p>A couple of takeaways:</p>\n<ol>\n<li>You can tweak anything in Ruby. Don't be afraid to mess around with anything to find your problem.</li>\n<li>I knew #1, but for some reason I always try everything else before going for #1. I gotta just go for #1 to start with and save myself the time.</li>\n<li>I love Ruby</li>\n</ol>",frontmatter:{title:"ruby 1.9.2, rvm and a Nasty Error When Installing RubyGems: couldn&#8217;t parse YAML at line 2 column 10 (Psych::SyntaxError)",date:"July 18, 2011",imageUrl:null,structuredHtml:null,image:null}}},pathContext:{path:"/ruby-1-9-2-rvm-and-a-nasty-error-when-installing-rubygems-couldnt-parse-yaml-at-line-2-column-10-psychsyntaxerror"}}}});
//# sourceMappingURL=path---ruby-1-9-2-rvm-and-a-nasty-error-when-installing-rubygems-couldnt-parse-yaml-at-line-2-column-10-psychsyntaxerror-b86303c85877f183f967.js.map