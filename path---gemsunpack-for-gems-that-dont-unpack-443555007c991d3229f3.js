webpackJsonp([0xf03e0d8e51b4],{1099:function(e,n){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2009-09-10-gemsunpack-for-gems-that-dont-unpack/index.md absPath of file >>> MarkdownRemark",html:"<p>I couldn't figure out why my gems wouldn't unpack until I ran across this: <a href=\"http://metaclass.org/2009/4/13/rake-gems-unpack\">http://metaclass.org/2009/4/13/rake-gems-unpack</a>.  My gems have rake tasks and I have to include them in the app's rakefile to make them available so Rails won't unpack them.</p>\n<p>I did this instead:</p>\n<pre><code class=\"ruby\">\n  def muck_gems\n    ['cms-lite', 'disguise', 'uploader', 'muck-solr', 'muck-raker', 'muck-engine',\n    'muck-users', 'muck-activities', 'muck-comments', 'muck-profiles', 'muck-friends',\n    'muck-contents', 'muck-blogs', 'muck-shares'] #'muck-invites'\n  end\n\n  # execute commands in a different directory\n  def inside(dir, &block)\n    FileUtils.cd(dir) { block.arity == 1 ? yield(dir) : yield }\n  end\n\n  desc \"unpacks all muck gems into vendor/gems using versions installed on the local machine.\"\n  task :unpack do\n    gem_path = File.join(File.dirname(__FILE__), '..', '..', 'vendor', 'gems')\n    FileUtils.mkdir_p(gem_path) unless File.exists?(gem_path)\n    inside gem_path do\n      muck_gems.each do |gem_name|\n        system(\"gem unpack #{gem_name}\")\n        system(\"gem specification #{gem_name} > .specification\")\n      end\n    end\n  end\n\n</pre></code>",frontmatter:{title:"gems:unpack for gems that don&#8217;t unpack",date:"September 10, 2009",image:null}}},pathContext:{path:"/gemsunpack-for-gems-that-dont-unpack"}}}});
//# sourceMappingURL=path---gemsunpack-for-gems-that-dont-unpack-443555007c991d3229f3.js.map