webpackJsonp([82267146328380],{1552:function(e,n){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2008-03-28-using-amazons-web-services-from-ruby-jonathan-younger/index.md absPath of file >>> MarkdownRemark",html:'<p>Right Scale has a great gem:\ngem install right_aws\nRightScale RightAws::Sqs\nRightScale RightAws::Ec2</p>\n<p>They will automatically retry errors for you.</p>\n<p>gem install kato\nKato - EC2 Pool Manager</p>\n<pre><code class="ruby">\nrequire \'rubygems\'\nrequrie \'right_aws\'\nRightAws::RightAWSParser.xml_lib = \'libxml\'\n\nSQS = RightAws::Sqs.new(access_id, access_key) #get an SQS object\nqueue = SQS.queue("name_of_queue") #create a or get a reference to an existing queue\nqueue.psuh "put message in the queue" #8k max\nqueue.size # get an approximate number of message in the queue\nmessage = queue.receive #\nmessage.delete # if you don\'t delete your messages they will show up again\n</pre></code>\n<pre><code class="ruby">\nrequire \'rubygems\'\nrequrie \'right_aws\'\nRightAws::RightAWSParser.xml_lib = \'libxml\'\nEC2 = RightAsw::Ec2.new(access_id, access_key)\nEC2.describe_instances # get a hash of running instances\nEC2.run_instances("name_of_ami", minium_instances_to, max) # start up instances\nEC2.terminate_instances(["id1", "id2"]) # turn them off\n</pre></code>\n<pre><code class="ruby">\nrequire \'kato\'\n# Let Kato manage your instances\npool = Kato::PoolSupervisor.new(config)\npool.run\n</pre></code>\n<p>Kato can manage multiple pools.  You can give it a min and max number of instances and give it an uptime interval.  Amazon charges by the hour for the machine so you if you start it up you may as well leave it on for the full hour.</p>',frontmatter:{title:"Using Amazon&#8217;s Web Services from Ruby &#8211; Jonathan Younger",date:"March 28, 2008",imageUrl:null,structuredHtml:null,image:null}}},pathContext:{path:"/using-amazons-web-services-from-ruby-jonathan-younger"}}}});
//# sourceMappingURL=path---using-amazons-web-services-from-ruby-jonathan-younger-3759ea9951433b2f30f1.js.map