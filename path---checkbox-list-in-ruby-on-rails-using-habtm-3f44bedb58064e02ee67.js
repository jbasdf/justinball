webpackJsonp([0x8387661d105a],{1889:function(e,n){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2008-07-03-checkbox-list-in-ruby-on-rails-using-habtm/index.md absPath of file >>> MarkdownRemark",html:'<p>Checkboxes are one of those things that look easy and should be easy, but they aren\'t always easy.  I needed a solution that could create a checkbox list of languages that a user speaks.  So I don\'t forget  here\'s how to do it:</p>\n<p>The migrations are important.  You have to be sure to exclude the id parameter when you create languages_users or you will get \' Mysql::Error: #23000Duplicate entry\' due to the fact that ActiveRecord will try to store a value in the id field that indicates which model created the entry (User.languages &#x3C;&#x3C; vs Langauges.users).  The other option is the create the id parameter so that the direction is maintained but be sure that it is not created as a primary key.</p>\n<pre><code class="ruby">\nclass LanguagesUsers < ActiveRecord::Migration\n    def self.up\n        create_table :languages_users, :id => false, :force => true do |t|\n            t.integer :user_id\n            t.integer :language_id\n            t.timestamps\n        end\n    end\n\n    def self.down\n        drop_table :languages_users\n    end\nend\n</pre></code>\n<pre><code class="ruby">\nclass Languages < ActiveRecord::Migration\n\n    def self.up\n        create_table "languages", :force => true do |t|\n            t.string  "name"\n            t.string  "english_name"\n            t.integer "is_default", :default => 0\n        end\n    end\n\n    def self.down\n        drop_table "languages"\n        drop_table "users_languages"\n    end\nend\n</pre></code>\n<pre><code class="ruby">\nclass Users < ActiveRecord::Migration\n\n    def self.up\n        create_table "users", :force => true do |t|\n            t.string  "login"\n            # other fields excluded for brevity\n        end\n    end\n\n    def self.down\n        drop_table "users"\n    end\nend\n</pre></code>\n<p>Here are my models:\nuser.rb</p>\n<pre><code class="ruby">\nclass User < ActiveRecord::Base\n    has_and_belongs_to_many :languages\nend\n</pre></code>\n<p>language.rb:</p>\n<pre><code class="ruby">\nclass Language < ActiveRecord::Base\n  has_and_belongs_to_many :users\nend\n</pre></code>\n<p>In my user<em>controller.rb the create and update methods are simple.  This is thanks to the fact that you get a language</em>ids method on the user object because of the HABTM relationship. </p>\n<pre><code class="ruby">\n    def create\n        @user = User.new(params[:user])\n        @user.save\n    end\n\n    def update\n        params[:user][:language_ids] ||= []\n\n        @user = User.find(current_user)\n      \n        if @user.update_attributes params[:user]\n            flash[:notice] = "Settings have been saved."\n            redirect_to edit_user_url(@user)\n        else\n            flash.now[:error] = @user.errors\n            setup_form_values\n            respond_to do |format|\n                format.html { render :action => :edit}\n            end\n        end\n\n    end\n</pre></code>\n<p>On to the view:</p>\n<pre><code class="ruby">\n&lt;ul class=&quot;checkbox-list&quot;&gt;\n  &lt;% @languages.each do |language| -%&gt;\n&lt;li&gt;&lt;%= check_box_tag &quot;user[language_ids][]&quot;, language.id, user_speaks_language?(language) -%&gt; &lt;%= language.english_name -%&gt;&lt;/li&gt;\n  &lt;% end -%&gt;\n&lt;/ul&gt;\n</pre></code>\n<p>NOTE: I had an error in my original method.  This code:</p>\n<pre><code class="ruby">\n&lt;li&gt;&lt;%= f.check_box :language_ids, {:checked =&gt; user_speaks_language?(language)}, &quot;#{language.id}&quot;, &quot;&quot;  -%&gt; &lt;%= &quot;#{language.english_name}&quot; -%&gt;&lt;/li&gt;\n&lt;/pre&gt;&lt;/code&gt;\nshould be this:\n&lt;pre&gt;&lt;code class=&quot;ruby&quot;&gt;\n&lt;li&gt;&lt;%= check_box_tag &quot;user[language_ids][]&quot;, language.id, user_speaks_language?(language) -%&gt; &lt;%= language.english_name -%&gt;&lt;/li&gt;\n</pre></code>\n<p>And we\'ll need this helper method:</p>\n<pre><code class="ruby">\ndef user_speaks_language?(language)\n    if @user && !@user.login.nil? # no sense in testing new users that have no languages\n        @user.languages.include?(language)\n    else\n        false\n    end\nend\n</pre></code>\n<p>The result is that you will get a list of check boxes that update values in the join table that is part of the has<em>and</em>belongs<em>to</em>many relationship.  Rails is very cool</p>',frontmatter:{title:"Checkbox list in Ruby on Rails using HABTM",date:"July 03, 2008",imageUrl:null,structuredHtml:null,image:null}}},pathContext:{}}}});
//# sourceMappingURL=path---checkbox-list-in-ruby-on-rails-using-habtm-3f44bedb58064e02ee67.js.map