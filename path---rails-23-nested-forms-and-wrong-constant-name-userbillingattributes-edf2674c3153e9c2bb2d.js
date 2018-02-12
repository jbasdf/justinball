webpackJsonp([63721500134415],{1385:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2009-04-16-rails-23-nested-forms-and-wrong-constant-name-userbillingattributes/index.md absPath of file >>> MarkdownRemark",html:"<p>I found a chance to try out the new nested forms in a project I've been working on for a long time.  (I actually tried them out a long time ago in Edge Rails, but then got burned when they pulled the functionality back out).</p>\n<p>Everything looked like it would go well until I got this:</p>\n<p>wrong constant name User[billingAttributes])</p>\n<p>I cussed and cursed Rails and the plugin I am using for a few minutes and then decided that I was a grown up and a Rails programmer and I shouldn't be so stupid so I looked hard at the stack trace.  It then occurred to me that I had built out a custom form builder for the project and that this error is in fact my fault.</p>\n<p>I have some ugly code that looks like this:</p>\n<pre><code class=\"ruby\">\n  def required_field?(field)\n    @object_name.to_s.camelize.constantize.reflect_on_validations_for(field).map(&:macro).include?(:validates_presence_of)\n  end\n</pre></code>\n<p>Normally '@object<em>name' would give you the name of the object you are using like 'user' etc.  However, when you are using nested forms the object in this case is named 'User[billingAttributes]'.  I was in fact using the wrong value all along and lucking out.  It worked because I had never given it a reason not to.  That doesn't me I had the right code.  It just meant that I was kind of lucky in that it work and very lucky in that I caught it, but unlucky because my &#x3C;a href=\"<a href=\"http://en.wikipedia.org/wiki/Duck\">http://en.wikipedia.org/wiki/Duck</a></em>typing\">code was quacking like a duck even though it was at best a pigeon</a>.</p>\n<p>I now have some ugly code that looks like this which does work:</p>\n<pre><code class=\"ruby\">\n  def required_field?(field)\n    reflect_on = object.class if !object.blank?\n    if reflect_on.blank?\n      reflect_on = @object_name.to_s.camelize.constantize rescue nil\n    end\n    if !reflect_on.blank?\n      reflect_on.reflect_on_validations_for(field).map(&:macro).include?(:validates_presence_of)\n    else\n      false\n    end\n  end\n</pre></code>",frontmatter:{title:"Rails 2.3, Nested forms and wrong constant name User[billingAttributes])",date:"April 16, 2009",imageUrl:null,image:null}}},pathContext:{path:"/rails-23-nested-forms-and-wrong-constant-name-userbillingattributes"}}}});
//# sourceMappingURL=path---rails-23-nested-forms-and-wrong-constant-name-userbillingattributes-edf2674c3153e9c2bb2d.js.map