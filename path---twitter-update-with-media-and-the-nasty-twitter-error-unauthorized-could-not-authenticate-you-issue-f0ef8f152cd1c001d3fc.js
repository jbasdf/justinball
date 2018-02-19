webpackJsonp([0xf5705bda5042],{1611:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2014-10-08-twitter-update_with_media-and-the-nasty-twitter-error-unauthorized-could-not-authenticate-you-issue/index.md absPath of file >>> MarkdownRemark",html:"<p>I've been playing around with the Twitter gem - yes this is what I do for fun. I was shocked to find out that all the cool kids are posting photos.\nI feel so stuck in the dark ages with just 140 characters. I set out to discover how to regain my hipster cred and since\nI am a lover of Ruby I started with the Twitter gem. The first bit of code that looked like this:</p>\n<pre><code class=\"ruby\">\n\n# We're going to upload an image from a url so we include open-uri\nrequire 'open-uri'\n\nclass TwitterApi\n\n  # Helper method to setup the twitter client. I'm lazy so the keys and secrets are safely stored in a nice .yml file.\n  def self.client\n    Twitter::REST::Client.new do |config|\n      config.consumer_key = Rails.application.secrets.twitter['consumer_key']\n      config.consumer_secret = Rails.application.secrets.twitter['consumer_secret']\n      config.access_token = Rails.application.secrets.twitter['oauth_token']\n      config.access_token_secret = Rails.application.secrets.twitter['oauth_token_secret']\n    end\n  end\n\n  # This method posts a tweet and image to Twitter\n  def self.post(tweet, image_url)\n    self.client.update_with_media(tweet, open(image_url))\n  end\n\nend\n</pre></code>\n<p>The problem with that code is that I would occasionally get this error:</p>\n<blockquote>\n  Twitter::Error::Unauthorized Could not authenticate you\n</blockquote>\n<p>That error makes no sense whatsoever since it only occured on some tweets but worked fine on others - clearly my authentication\nsetup was just fine.</p>\n<a href=\"https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=twitter%20api%20Twitter%3A%3AError%3A%3AUnauthorized%20(Could%20not%20authenticate%20you)\">\nA Google search turns up plenty of other examples where people have run into this problem.\n</a> There are a few helpful solutions like remembering to pass a file object to the 'update_with_media'. The open-uri library\nhandles just fine by letting us open a url with a simple 'open(url)'. Very cool. However, that didn't solve my problem.\n<p>I turned to the <a href=\"https://dev.twitter.com/rest/reference/post/statuses/update_with_media\">API documentation on Twitter</a>a> and found these bits of wisdom:</p>\n<blockquote>\nIf the user is over the daily media limit, this method will return an HTTP 403 error. In addition to media upload limits, the user is still limited in the number of statuses they can publish daily. If the user tries to exceed the number of updates allowed, this method will also return an HTTP 403 error, similar to POST statuses / update.\n</blockquote>\n<p>I was just sending one Tweet so that wasn't it. Then like a brick to the face it hit me:</p>\n<blockquote>\n  The Tweet text will be rewritten to include the media URL(s), which will reduce the number of characters allowed in the Tweet text. If the URL(s) cannot be appended without text truncation, the tweet will be rejected and this method will return an HTTP 403 error.\n</blockquote>\n<p>The length of the tweet cannot exceed 140 characters. That includes the url of the photo that Twitter generates and appends.\nThat sucks 1. I wasn't sure how long the photo url would be and 2. I'm wordy and the 140 character limit was already killing me. </p>\n<p><a href=\"https://dev.twitter.com/rest/public/uploading-media-multiple-photos\">Enter the new media upload API.</a>\nAs of today you'll find support for it in the <a href=\"https://github.com/sferik/twitter\">Twitter gem</a> on github. It's not in the officeal release yet so\nif you want to play with it you'll have to poing your gemfile to github:</p>\n<pre><code class=\"ruby\">\ngem \"twitter\", :git => 'https://github.com/sferik/twitter.git'\n</pre></code>\n<p>Now my code looks like this and all is well:</p>\n<pre><code class=\"ruby\">\n\nrequire 'open-uri'\n\n# The Twitter gem won't take StringIO so don't allow downloaded files to be created as StringIO. Force a tempfile to be created.\nOpenURI::Buffer.send :remove_const, 'StringMax' if OpenURI::Buffer.const_defined?('StringMax')\nOpenURI::Buffer.const_set 'StringMax', 0\n\nclass TwitterApi\n\n  def self.client\n    Twitter::REST::Client.new do |config|\n      config.consumer_key = Rails.application.secrets.twitter['consumer_key']\n      config.consumer_secret = Rails.application.secrets.twitter['consumer_secret']\n      config.access_token = Rails.application.secrets.twitter['oauth_token']\n      config.access_token_secret = Rails.application.secrets.twitter['oauth_token_secret']\n    end\n  end\n\n  def self.post(tweet, image)\n    return unless tweet.present?\n    open(image) do |media|\n      media_id = client.upload(media)\n      puts client.update(tweet, :media_ids => media_id)\n    end\n  end\n\nend\n\n</pre></code>",frontmatter:{title:"Twitter, update_with_media, and the nasty Twitter::Error::Unauthorized (Could not authenticate you) issue",date:"October 08, 2014",imageUrl:null,structuredHtml:null,image:null}}},pathContext:{path:"/twitter-update_with_media-and-the-nasty-twitter-error-unauthorized-could-not-authenticate-you-issue"}}}});
//# sourceMappingURL=path---twitter-update-with-media-and-the-nasty-twitter-error-unauthorized-could-not-authenticate-you-issue-f0ef8f152cd1c001d3fc.js.map