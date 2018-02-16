webpackJsonp([61105995479913],{997:function(e,a){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2010-01-21-acts_as_taggable-libraries-and-the-big-case-problem/index.md absPath of file >>> MarkdownRemark",html:'<p>Over the years I\'ve had a chance to use the three tagging libraries available for Ruby on Rails:</p>\n<ul>\n\t<li><a href="http://github.com/mbleigh/acts-as-taggable-on">acts-as-taggable-on</a></li>\n\t<li><a href="http://github.com/jviney/acts_as_taggable_on_steroids">acts_as_taggable_on_steroids</a></li>\n  <li><a href="http://agilewebdevelopment.com/plugins/acts_as_taggable">acts_as_taggable</a></li>\n</ul>\n<p>I think the original acts as taggable is now defunct.  The other libraries are derivatives of that library.  In using tags on various sites the problem I always seem to run across is how to deal with tag case.  For example, to some blue is the same as Blue.  However, is god the same as God?  It depends on who you ask.  It seems that acts-as-taggable-on handles the case problem properly.  I noticed that if I add the tag \'blue\' to an object I cannot add another tag called \'Blue\'.  However, if I delete \'blue\' and then add the tag \'Blue\' it works as expected and the upper case tag becomes associated with the object.</p>\n<p> acts<em>as</em>taggable<em>on</em>steroids doesn\'t handle the case problem especially well and I frequently run across this error:</p>\n<pre><code class="ruby">\n  ActiveRecord::RecordInvalid (Validation failed: Tag has already been taken):\n</pre></code>\n<p>It turns out that that the key difference between the two libraries is in how they setup the tag relationship.</p>\n<p>acts-as-taggable-on does this:</p>\n<pre><code class="ruby">\ndef save_tags\n          (custom_contexts + self.class.tag_types.map(&:to_s)).each do |tag_type|\n            next unless instance_variable_get("@#{tag_type.singularize}_list")\n            owner = instance_variable_get("@#{tag_type.singularize}_list").owner\n            new_tag_names = instance_variable_get("@#{tag_type.singularize}_list") - tags_on(tag_type).map(&:name)\n            old_tags = tags_on(tag_type, owner).reject { |tag| instance_variable_get("@#{tag_type.singularize}_list").include?(tag.name) }\n\n            transaction do\n              base_tags.delete(*old_tags) if old_tags.any?\n              new_tag_names.each do |new_tag_name|\n                new_tag = Tag.find_or_create_with_like_by_name(new_tag_name)\n                Tagging.create(:tag_id => new_tag.id, :context => tag_type,\n                               :taggable => self, :tagger => owner)\n              end\n            end\n          end\n\n          true\n        end\n</pre></code>\n<p>while acts<em>as</em>taggable<em>on</em>steroids does it this way:</p>\n<pre><code class="ruby">\n        def save_tags\n          return unless @tag_list\n\n          new_tag_names = @tag_list - tags.map(&:name)\n          old_tags = tags.reject { |tag| @tag_list.include?(tag.name) }\n\n          self.class.transaction do\n            if old_tags.any?\n              taggings.find(:all, :conditions => ["tag_id IN (?)", old_tags.map(&:id)]).each(&:destroy)\n              taggings.reset\n            end\n\n            new_tag_names.each do |new_tag_name|\n              tags << Tag.find_or_create_with_like_by_name(new_tag_name)\n            end\n          end\n\n          true\n        end\n</pre></code>\n<p>The key difference is in this:</p>\n<pre><code class="ruby">\nTagging.create(:tag_id => new_tag.id, :context => tag_type,\n                               :taggable => self, :tagger => owner)\n</pre></code>\n<p>versus:</p>\n<pre><code class="ruby">\ntags << Tag.find_or_create_with_like_by_name(new_tag_name)\n</pre></code>\n<p>The first will return false and on go on it\'s way.  The second throws an exception.  Which is the right way of dealing with the problem?  I guess it depends.  I don\'t feel like either is a great solution.  Both libraries assume that \'blue\' == \'Blue\'.  If that assumption is correct then a different bit of code should change in each library.  Tag.rb should lower case the names in the comparison:</p>\n<pre><code class="ruby">\n  def ==(object)\n    super || (object.is_a?(Tag) && name == object.name)\n  end\n</pre></code>\n<p>changes to:</p>\n<pre><code class="ruby">\n  def ==(object)\n    super || (object.is_a?(Tag) && name.downcase == object.name.downcase)\n  end\n</pre></code>\n<p>However, if you want to leave each tag as the user specified rather than change the case then a different line needs to be changed in tag.rb</p>\n<pre><code class="ruby">\n  # LIKE is used for cross-database case-insensitivity\n  def self.find_or_create_with_like_by_name(name)\n    find(:first, :conditions => ["name LIKE ?", name]) || create(:name => name)\n  end\n</pre></code>\n<p>will need to change to</p>\n<pre><code class="ruby">\n  # = is used for to ensure tags are case sensitive\n  def self.find_or_create_with_like_by_name(name)\n    find(:first, :conditions => ["name =", name]) || create(:name => name)\n  end\n</pre></code>\n<p>Of course the second change will result in the duplication of tags in your site - you will end up with tags \'Blue\' and \'blue\', but that is the intent.  Your searches might need to be adjusted accordingly.</p>',frontmatter:{title:"acts_as_taggable libraries and the big case problem.",date:"January 21, 2010",imageUrl:null,image:null}}},pathContext:{path:"/acts_as_taggable-libraries-and-the-big-case-problem"}}}});
//# sourceMappingURL=path---acts-as-taggable-libraries-and-the-big-case-problem-8604e1a294cb280f4ae8.js.map