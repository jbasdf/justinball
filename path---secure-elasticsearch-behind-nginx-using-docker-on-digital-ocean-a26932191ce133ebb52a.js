webpackJsonp([42607179610058],{1421:function(e,a){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2014-05-02-secure-elasticsearch-behind-nginx-using-docker-on-digital-ocean/index.md absPath of file >>> MarkdownRemark",html:'<p>I\'ve been a big fan of <a href="http://www.elasticsearch.org/">Elastic Search</a> for a very long time. It\'s a great piece of software that can be used as an object database as well as a search index. I realize\nthat\'s not the intention of the software but it works so I\'m happy. Elastic Search doesn\'t have security built in so if you want to lock down your index (which is a good idea) then you\'ll need to run it\nbehind a proxy. I briefly considered writing something in Go. There\'s a <a href="https://github.com/lukas-vlcek/node.es">node.js proxy for Elastic Search</a> but it hasn\'t been maintained in quite some time.</p>\n<p>I want fewer moving pieces. Nginx provides basic authentication. I\'m happy with that.</p>\n<p><a href="https://www.digitalocean.com/?refcode=735771c93fa7">Digital Ocean</a> is a new(ish) hosting company. They run on SSDs. They are pretty cheap and you can have a server running <a href="https://www.docker.io/">Docker</a> in 55 seconds.\nI\'m happy with that.</p>\n<p>Mix all the above and you get a nice bit of software that you can be happy with after you figure out the mixing part. It goes something like this:</p>\n<h3>Start</h3>\n<p>Setup an account on <a href="https://www.digitalocean.com/?refcode=735771c93fa7">Digital Ocean</a> and <a href="https://www.digitalocean.com/community/articles/how-to-use-the-digitalocean-docker-application">launch an instance running Docker</a>.</p>\n<h3>Update Your Server</h3>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>  apt-get update</code></pre>\n      </div>\n<h3>Use iptables to lock down the server</h3>\n<h4>Add iptables-persistent</h4>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>  sudo apt-get install iptables-persistent</code></pre>\n      </div>\n<h4>Copy iptables.rules file into /etc/iptables/rules.v4 (file contents below)</h4>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>  *filter\n  :INPUT ACCEPT [0:0]\n  :FORWARD ACCEPT [0:0]\n  :OUTPUT ACCEPT [0:0]\n  [0:0] -A INPUT -i lo -j ACCEPT\n  [0:0] -A INPUT -m state --state RELATED,ESTABLISHED -j ACCEPT\n  [0:0] -A INPUT -p tcp -m tcp --dport 22 -j ACCEPT\n  [0:0] -A INPUT -p tcp -m tcp --dport 443 -j ACCEPT\n  [0:0] -A INPUT -p tcp -m tcp --dport 80 -j ACCEPT\n  [0:0] -A INPUT -j DROP\n  COMMIT</code></pre>\n      </div>\n<h4>Update iptables rules</h4>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>  iptables-restore -c < /etc/iptables/rules.v4</code></pre>\n      </div>\n<h3>Setup Authentication for nginx</h3>\n<h4>Install tools for setting up users</h4>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>  sudo apt-get install -y apache2-utils</code></pre>\n      </div>\n<h4>Setup directory</h4>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>  sudo mkdir -p /var/www/es\n  sudo mkdir -p /var/www/es_public</code></pre>\n      </div>\n<h4>Add a user. You\'ll be prompted for a password that you shouldn\'t forget.</h4>\n<p>Setup a public user that can read data from Elastic Search</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>  sudo htpasswd -c /var/www/es/.htpasswd public_username_goes_here</code></pre>\n      </div>\n<p>Setup an admin user that can write data to Elastic Search</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>  sudo htpasswd -c /var/www/es/.htpasswd admin_username_goes_here</code></pre>\n      </div>\n<h3>Docker</h3>\n<h4>Setup directories</h4>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>  sudo mkdir /data\n  sudo mkdir /var/log/nginx</code></pre>\n      </div>\n<h4>Install Elastic Search</h4>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>  docker pull dockerfile/elasticsearch</code></pre>\n      </div>\n<h4>Run and name Elastic Search</h4>\n<p>The name will allow us to get information about the container from within our Nginx container that we\'ll fire up next.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>  docker run -d --name elasticsearch -v /data:/data dockerfile/elasticsearch</code></pre>\n      </div>\n<h4>Build nginx container - <a href="https://github.com/jbasdf/nginx_es">source for the docker image here in case you want to know what\'s going on.</a></h4>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>  docker build -t="jbasdf/nginx_es" github.com/jbasdf/nginx_es</code></pre>\n      </div>\n<h4>Run Nginx container</h4>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>  docker run -d -p 80:80 --link elasticsearch:elasticsearch -v /var/log/nginx:/var/log/nginx -v /var/www/es:/var/www/es jbasdf/nginx_es</code></pre>\n      </div>\n<p>You should now now be up and running. Test it using curl and make sure you get a response from Elastic Search:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>  curl -XGET --user public_username_goes_here:password_goes_here \'http://www.yourdomain.com\'</code></pre>\n      </div>',frontmatter:{title:"Secure ElasticSearch behind Nginx using Docker on Digital Ocean",date:"May 02, 2014",imageUrl:null,image:null}}},pathContext:{path:"/secure-elasticsearch-behind-nginx-using-docker-on-digital-ocean"}}}});
//# sourceMappingURL=path---secure-elasticsearch-behind-nginx-using-docker-on-digital-ocean-a26932191ce133ebb52a.js.map