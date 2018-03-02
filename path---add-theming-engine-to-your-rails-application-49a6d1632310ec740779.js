webpackJsonp([0xe9bac5a50815],{1037:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2010-01-23-add-theming-engine-to-your-rails-application/index.md absPath of file >>> MarkdownRemark",html:"<p>I've written about the <a href=\"http://github.com/jbasdf/disguise\">disguise gem</a> before, but I've made enough changes that it warrants a new blog post.  I noticed a few performance problems which have now been fixed and the configuration has been cleaned up a bit.</p>\n<p>Disguise makes it simple to swap out the views used by your rails application either by selecting a theme using an admin UI or by changing out the theme based on the current url.  For most apps the feature is probably not relevant, but if you are building a piece of software like a blog or social network then letting your users customize the look of the site is crucial to adoption.</p>\n<p>Find the install instructions on the <a href=\"http://github.com/jbasdf/disguise\">project's github account</a>.</p>\n<p>While setting a given theme works fine and doesn't incur much of a performance hit beyond method call, swapping out the theme based on the current domain can incur a performance hit since it reloads the localization strings.  Here's the bit of code that swaps the views:</p>\n<pre><code class=\"ruby\">\n      def setup_theme\n        return if !Disguise::Config.themes_enabled\n        return if current_theme.blank? || current_theme.name.blank?\n        theme_view_path = File.join(Disguise::Config.theme_full_base_path, current_theme.name, 'views')\n        if self.view_paths.first == theme_view_path\n          return\n        else\n          return if !theme_exists(theme_view_path)\n          clean_theme_view_path\n          self.prepend_view_path(theme_view_path)\n          clean_theme_locale\n          set_theme_locale\n          I18n.reload!\n        end\n      end\n</pre></code>\n<p>I'm hoping to find a way to improve performance when changing themes, but for now be aware that changing themes based on domains is a work in progress and shouldn't be used in a production environment.</p>",frontmatter:{title:"Add Theming Engine to Your Rails Application",date:"January 23, 2010",imageUrl:null,structuredHtml:null,image:null}}},pathContext:{path:"/add-theming-engine-to-your-rails-application"}}}});
//# sourceMappingURL=path---add-theming-engine-to-your-rails-application-49a6d1632310ec740779.js.map