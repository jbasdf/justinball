webpackJsonp([0xf4fffda2c81d],{1424:function(e,o){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2007-05-20-the-rails-way-jamis-buck-michael-koziarski/index.md absPath of file >>> MarkdownRemark",html:'<p>Don\'t forget to look at <a href="http://www.therailsway.com/">The Rails Way blog</a>.</p>\n<p>Move logic into your model.  This lets you break functionality into more granular components and makes testing easier.  Keep your controllers skinny. <a href="http://weblog.jamisbuck.org/2006/10/18/skinny-controller-fat-model"> Jamis blogged about this principle here.</a></p>\n<p>Use before filters to setup state before your controller runs.  Use before_create in your models.</p>\n<p>ActiveSupport helps you make your code intention revealing.  Ruby code can be self documenting.</p>\n<p>has<em>many, belong</em>to makes your code powerful easy to use, but many users donâ€™t use the power of the associations.</p>\n<pre><code class="ruby">\nDocument.find_all_by_user_id(@john.id)\n\nvs\n\n@john.documents # this one hits the db once and then stores the objects in memory.  After the call you don\'t have to keep hitting the db.\n</pre></code>\n<p>You can do the same with</p>\n<pre><code class="ruby">\n @john.documents.find(:all, :conditions => ....\n</pre></code>\n<p>try this:</p>\n<pre><code class="ruby">\n@cool.documents.find_by_user_id(@john.id)\n</pre></code>\n<p>then define it as a method:</p>\n<pre><code class="ruby">\n@cool.documents_authored_by(@john.id)\n</pre></code>\n<p>just be sure to not duplicate the method in both the tags and authors models that is difficult to maintain.\nYou might prefer:</p>\n<pre><code class="ruby">\n@john.documents.tagged_with(@cool)\n</pre></code>\n<p>Don\'t use the \'!!\' idiom.  What you are doing is saying not not.</p>\n<pre><code class="ruby">\ndef account_code?\n  !!@account_code.nil? # will return false if account_code nil\nend\n</pre></code>\n<p>this is better</p>\n<pre><code class="ruby">\ndef account_code?\n  @account_code ? true : false\nend\n</pre></code>\n<p>or you can do this</p>\n<pre><code class="ruby">\n# make sure to document true because... false because...\ndef account_code?\n  if @account_code\n    true\n  else\n    false\n  end\nend\n</pre></code>\n<p>I\'m tired of typing code.  I\'ll post a link to the slides when they get them up.</p>\n<p>Simplify \'New\' for creating objects with associations by creating a method in your model called build with associations that does that work for you instead of creating a bunch of objects and then associating them in the controller</p>\n<p>Simplify your routes.  If you are pointing to the same controller all the time use <strong>with_options</strong></p>\n<p>you can make better urls like this</p>\n<pre><code class="ruby">\ndef to_param\n  "#{id}-#{name}"\nend\n\nfind(params[:id])\n</pre></code>\n<p>but you have to be careful in your controller to make sure that other methods work with params[:id]</p>\n<pre><code class="ruby">\nreturning new do |billable|\n  billable.contract = Contract.new\nend\n</pre></code>\n<p>is the same as</p>\n<pre><code class="ruby">\nbillable = new\nbillable.contract = Contract.new\nreturn billable\n</pre></code>\n<p>but looks cool</p>\n<p>How do you deal with validations when you have a lot of associations.  I have dealt with this and it sucks.  I have had to force the various objects to validate and then pull the errors into an error object then show the errors from that object.</p>',frontmatter:{title:"The Rails Way Jamis Buck, Michael Koziarski",date:"May 20, 2007",image:null}}},pathContext:{path:"/the-rails-way-jamis-buck-michael-koziarski"}}}});
//# sourceMappingURL=path---the-rails-way-jamis-buck-michael-koziarski-b88c12893c2c918d6047.js.map