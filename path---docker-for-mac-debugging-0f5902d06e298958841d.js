webpackJsonp([0x7296d67cb047],{1096:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2016-09-09-docker-for-mac-debugging/index.md absPath of file >>> MarkdownRemark",html:'<h3>The Problem:</h3>\nWhile trying to setup <a href="https://docs.docker.com/docker-for-mac/">Docker for Mac</a> I kept getting the following error anytime I tried to spin up a Docker image:\n<blockquote>\n  Couldn\'t connect to Docker daemon. You might need to start Docker for Mac.\n</blockquote>\n<h3>All the fixes said do this:</h3>\n<blockquote>\n  eval "docker-machine env default"\n</blockquote>\n<p>I tried but kept getting</p>\n<blockquote>\n  Host does not exist: "default"\n</blockquote>\n<h3>The fix for me</h3>\n<p>I had to run this:</p>\n<blockquote>\n  docker-machine create --driver virtualbox default\n</blockquote>\n<p>and then this:</p>\n<blockquote>\n  eval "docker-machine env default"\n</blockquote>\n<p>Also, anytime you open a new terminal you\'ll have to run</p>\n<blockquote>\n  eval "docker-machine env default"\n</blockquote>',frontmatter:{title:"Docker for Mac debugging",date:"September 09, 2016",imageUrl:null,image:null}}},pathContext:{path:"/docker-for-mac-debugging"}}}});
//# sourceMappingURL=path---docker-for-mac-debugging-0f5902d06e298958841d.js.map