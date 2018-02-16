webpackJsonp([23420950233986],{1445:function(t,e){t.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2006-07-28-setting-up-new-macbook-pro/index.md absPath of file >>> MarkdownRemark",html:'<p>I am trying to set a new Macbook pro to boot Mac OSX and Windows with a third partition for data. It is a pain, but <a href="http://wiki.onmac.net/index.php/Triple_Boot_via_BootCamp">here is a good resource to help you get started</a>. I managed to mess up the partitions. If you do that you will need to boot off the install disk then use gpt to delete any extra partitions that you have created. <a href="http://www.hmug.org/man/8/gpt.php">The man page for gpt is here</a>. <a href="http://www.friday.com/bbum/2006/05/04/">I also found this post about setting up and deleting partitions helpful</a>.</p>\n<p>As far as steps to make it work. Follow the first link. If you mess up like I did you will need to use gpt to delete the volumes. The command looks like this:\nsudo gpt remove -i 3</p>\n<p>Then you will need to use gpt to recreate the volumes:\nsudo gpt add\n(Look at the man page. The options will depend on how large you want the partition to be and at which sector you want the partition to start. It is a little low level but follow the instructions on the gpt man page and you will be just fine.)</p>\n<p>Next you need to boot into OSX and format the partitions. Use diskutil eraseValue to do this. It is pretty fast.</p>\n<p>OK get a tasty beverage.</p>\n<p>Now boot using a boot cd that has an fdisk utility. I recommend using <a href="http://ebcd.pcministry.com/">Emergency Boot Disk</a>. It requires that you install it on a Windows box and then generate an iso. That mean you will need seperate Windows machine with a cd burner. Ask your friends for help you if you don\'t one. If you don\'t have friends then suck. Join My Space and get some.</p>\n<p>Next step is a big one:\nSTART OVER because you are screwed. Once the Master Boot Record is messed up you are out of luck. So now you have to copy off your osx install onto a firewire drive, reinstall and start over. Just FYI this sucks.</p>\n<p>Best of luck.</p>\n<p>UPDATE:\nI got tired of having a screwed up Mac and I didn\'t want to wait until Trent (system admin) gets back from the Wind Rivers to help me so...</p>\n<ol>\n<li>I downloaded Carbon Copy Cloner</li>\n<li>Cloned my Mac to an external drive</li>\n<li>Booted off the external drive</li>\n<li>Now that you are booted using the external drive you can run diskutil and repartition the harddrive. Use this to setup your Windows partitions</li>\n<li>Use Carbon Copy Cloner to copy your OS back onto your harddrive. (You did make a Mac partition right?</li>\n<li>Now proceed with your windows setup. Be sure to use an fdisk util to set the last partition on the drive active so Windows installs there.</li>\n</ol>',frontmatter:{title:"Setting up new Macbook pro",date:"July 28, 2006",imageUrl:null,image:null}}},pathContext:{path:"/setting-up-new-macbook-pro"}}}});
//# sourceMappingURL=path---setting-up-new-macbook-pro-3c56a0fc03579f755af3.js.map