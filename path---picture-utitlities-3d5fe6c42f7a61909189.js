webpackJsonp([0xe86f73d2af22],{2195:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2013-06-23-picture_utitlities/index.md absPath of file >>> MarkdownRemark",html:"<p>We have a library of almost 100,000 photos. I'm guessing the number is higher if you count the total number that we have backed up for family members. Managing that many photos can be a challenge and\n<a href=\"http://www.justinball.comhow-to-manage-60000-digital-photos\">I've blooged about the topic before. </a> We like to keep our photos in specific directories with names perfectly constructed\nusing the date information from the exif data. It seems like an obvious scheme which makes me wonder why all the photo management software has to choose such a crappy nameing convention. You might think\nthat it's a not a big deal since you never look at the files names anyway. However, you're wrong. Just let iPhoto import your pictures and then let Picasa auto scan your hard drive to find folders. You will end up with a\nmillion random names inside of Picasa at which point you'll give up digital photography all together and go back to film. We further complicate the issue by putting photos into folders based on the family member who took the photo.\nThis comes in really handy when their hard drive crashes (it's happened twice) and they call you begging for the backups. I have two 4 Terrabyte drives plus a RAID system so in our family I am \"the cloud\". There's nothing worse than losing\nseveral years of your life to a technical glitch. Spend the money and back up your pictures.</p>\n<p>We import all our new photos to a specific directory - NewPhotosFromCamera - and then I have written scripts that handle the rename. Right now I'm focused on making my wife's life even easier and so I've been tweaking the\n  script so that it knows exactly where to put the photo after the rename based on the camera model. (Unfortunately, the exif data doesn't contain the names of family members so around here people get to be known by their camera.) At any rate\n  I needed a way to find all those camera names. With Ruby and the exif gem it's easy. Here's the code in case you ever want to do the same. It will also count the number of photos per camera. Also, unless your username happens to be 'jbasdf'\n  remember to change the directory to your user's directory.</p>\n<script src=\"https://gist.github.com/jbasdf/5846991.js\"></script>",frontmatter:{title:"Picture Utilities",date:"June 23, 2013",imageUrl:null,structuredHtml:null,image:null}}},pathContext:{}}}});
//# sourceMappingURL=path---picture-utitlities-3d5fe6c42f7a61909189.js.map