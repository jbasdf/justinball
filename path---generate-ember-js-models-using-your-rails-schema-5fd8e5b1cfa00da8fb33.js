webpackJsonp([0xe42fae51c580],{1150:function(e,n){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2013-09-28-generate-emberjs-models-using-your-rails-schema/index.md absPath of file >>> MarkdownRemark",html:"<p>I love Ember.js. I hate typing and I especially hate typing code that a machine could build. I got really tired of reading\na Rails schema to build new Ember.js models so I create a rake task for it. I make no guarantees that this code will\nwork for you or that it won't delete some of your code or start a nuclear war. Enjoy!</p>\n<p>(<a href=\"https://gist.github.com/jbasdf/6744552\" title=\"Generate Ember.js models using your Rails Schema\">Link to gist if that's easier.</a>)</p>\n<p>(<a href=\"https://gist.github.com/jbasdf/6786849\" title=\"Generate Ember.js models using your Rails Schema\">Updated for Ember Data 1.0.0 beta.</a>)</p>\n<pre><code class=\"ruby\">\nnamespace :ember do\n\n  desc \"Build ember models from schema\"\n  task :models => :environment do\n\n    # Change these values to fit your project\n    namespace = 'App' # The Ember application's namespace.\n    output_dir = File.join(Rails.root, \"app/assets/javascripts/common/models\") # The directory where ember models will be written\n\n    schema_file = File.join(Rails.root, 'db/schema.rb')\n\n    current = ''\n    file = ''\n    max = 0\n    attrs = []\n\n    File.readlines(schema_file).each do |line|\n\n      # Stuff to ignore\n      next if line.strip.blank?\n      next if /#.*/.match(line)\n      next if /add_index.+/.match(line)\n      next if /ActiveRecord::Schema.define/.match(line)\n\n      # Find tables in the schema\n      if m = /create_table \\\"(.+)\\\".*/.match(line)\n        current = \"#{namespace}.#{m.captures[0].classify.singularize} = DS.Model.extend({\\n\"\n        file = \"#{m.captures[0].singularize}.js\"\n      elsif m = /t\\.(.+)\\s+\"([0-9a-zA-z_]+)\".*/.match(line)\n        max = m.captures[1].length if m.captures[1].length > max\n        attrs << m.captures\n      elsif m = /end/.match(line) && current.present?\n        attrs.each_with_index do |attr, i|\n          spaces = ''\n          type = 'string'\n          if %w(integer float).include?(attr[0])\n            type = 'number'\n          elsif %w(datetime time date).include?(attr[0])\n            type = 'date'\n          elsif %w(boolean).include?(attr[0])\n            type = 'boolean'\n          end\n          comma = ','\n          if attrs.size-1 == i\n            comma=''\n          end\n          ((max + 1) - attr[1].length).times{spaces << ' '}\n          if attr[1].ends_with?('_id')\n            relation = attr[1][0...(attr[1].length-3)]\n            current << \"  #{relation}:    #{spaces}DS.belongsTo('#{namespace}.#{relation.classify.singularize}'),\\n\"\n          end\n          current << \"  #{attr[1]}: #{spaces}DS.attr('#{type}')#{comma}\\n\"\n        end\n        current << \"});\\n\"\n        f = File.join(output_dir, file)\n        if File.exists?(f)\n          puts \"Ember model already exists: #{f}\"\n        else\n          current.gsub!('_spaces_', '')\n          puts \"Writing Ember model: #{f}\"\n          File.open(f, 'w'){|f| f.write(current)}\n        end\n\n        current = ''\n        file = ''\n        max = 0\n        attrs = []\n\n      else\n        if /end/.match(line).blank?\n          puts \"Don't know how to handle: #{line}\"\n        end\n      end\n\n    end\n\n  end\n\nend\n\n</pre></code>",frontmatter:{title:"Generate Ember.js models using your Rails Schema",date:"September 28, 2013",imageUrl:null,image:null}}},pathContext:{path:"/generate-ember.js-models-using-your-rails-schema"}}}});
//# sourceMappingURL=path---generate-ember-js-models-using-your-rails-schema-5fd8e5b1cfa00da8fb33.js.map