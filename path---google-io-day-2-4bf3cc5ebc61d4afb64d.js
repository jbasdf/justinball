webpackJsonp([0xbe95ea23e142],{1166:function(A,a){A.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2016-05-19-google-io-day-2/index.md absPath of file >>> MarkdownRemark",html:'<p>Commuted to Google IO via the Bay Area Bike share program again. Since there\'s only one bike share station near my hotel and only one near Google and there are 7000 developers here I was worried there wouldn\'t be any bikes. Nothing to worry about. I\'m pretty sure I\'m the only one using the bike share. Getting a bike isn\'t a problem. They are garabage, but they are a bike. I\'m guessing no one uses it because there are Google bikes everywhere. If I was a bit braver I would have just \'borrowed\' one got get around, but old guys obey the rules so Bike Share it is.</p>\n<h1>Firebase Security</h1>\n<p>Jacob Wenger (<a href="https://www.twitter.com/_jwngr">@_jwngr</a>)</p>\n<div class="post-images">\n  <iframe width="560" height="315" src="https://www.youtube.com/embed/PUBnlbjZFAI" frameborder="0" allowFullScreen></iframe>\n</div>\n<p><a href="https://docs.google.com/presentation/d/1rYJN_WR2pErGK7w1cd3zxiJ3n85f5fexGaTZzmBeOvY/pub">Slides</a></p>\n<p>I made it to the Firebase Security talk. Not a lot of people here but so far this is one of my favorite presentation because it is code heavy and because Firebase security can be a bit complicated. Everyone using Firebase needs this. The best way to learn a complex development topic is through lots of examples and this presentation is filled with them.</p>\n<p>Firebase security is one of the most difficult features for new Firebase developers to figure out so the Firebase team built rule compilers and the new dashboard provides a UI that makes testing your rules simple. With your typical application that utilizes an ORM the data validation lives in the models or if you\'re a database guy you\'ve probably built significant data validation in your database. With Firebase there is no ORM so I would say their data validation is more similar to old school validation in the database. That\'s cool because the rules live close to the data. It also puts all your database rules in one place so it\'s easy to see get a high level few of all your data rules in one place.</p>\n<div style="display:none;">\nHere\'s an example from Jacob\'s presentation:\n<pre><code class="javascript">\n</code></pre>\n</div>\n<p>Yesterday Firebase added file storage to their suite of offerings. Their previous rule language was they were very database specific so they needed a rules language for Firebase storage. So they built a new rules language from the ground up to handle. The new language is similar and allows functions for validations.</p>\n<div style="display:none;">\nHere\'s another example from Jacob\'s presentation:\n<pre><code class="javascript">\n</code></pre>\n</div>\n<div class="post-images">\n  \n  <a class="gatsby-resp-image-link" href="/static/firebase_security_presentation2-a9ec9e2c7b2694a967a68e65f142f740-db0af.jpg" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 650px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 75%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAwABAv/EABYBAQEBAAAAAAAAAAAAAAAAAAEAAv/aAAwDAQACEAMQAAABLB6h4rR//8QAGRAAAwEBAQAAAAAAAAAAAAAAAAECERMi/9oACAEBAAEFAuVHOk05ybo08n//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAYEQACAwAAAAAAAAAAAAAAAAAAAQIRUf/aAAgBAgEBPwFPS4n/xAAWEAEBAQAAAAAAAAAAAAAAAAAQMQH/2gAIAQEABj8Cmtf/xAAcEAEAAgIDAQAAAAAAAAAAAAABABFBcSExkWH/2gAIAQEAAT8hM1G4WAnP2d4PsKWP2YNpjthoan//2gAMAwEAAgADAAAAEAvP/8QAGBEAAgMAAAAAAAAAAAAAAAAAACEBMVH/2gAIAQMBAT8QUUPT/8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQIBAT8QEYP/xAAeEAEAAgEEAwAAAAAAAAAAAAABABEhMVFhcaGx0f/aAAgBAQABPxB96ZV7I0TMsr5K1Ku4Pc8iJUtYlrAq7iF2Legc89z/2Q==&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="firebase_security_presentation2" title="" src="/static/firebase_security_presentation2-a9ec9e2c7b2694a967a68e65f142f740-b80fa.jpg" srcset="/static/firebase_security_presentation2-a9ec9e2c7b2694a967a68e65f142f740-cf410.jpg 163w,\n/static/firebase_security_presentation2-a9ec9e2c7b2694a967a68e65f142f740-62f2a.jpg 325w,\n/static/firebase_security_presentation2-a9ec9e2c7b2694a967a68e65f142f740-b80fa.jpg 650w,\n/static/firebase_security_presentation2-a9ec9e2c7b2694a967a68e65f142f740-08cb4.jpg 975w,\n/static/firebase_security_presentation2-a9ec9e2c7b2694a967a68e65f142f740-f2bf9.jpg 1300w,\n/static/firebase_security_presentation2-a9ec9e2c7b2694a967a68e65f142f740-fd4ba.jpg 1950w,\n/static/firebase_security_presentation2-a9ec9e2c7b2694a967a68e65f142f740-db0af.jpg 3264w" sizes="(max-width: 650px) 100vw, 650px">\n    </span>\n  </span>\n  \n  </a>\n    \n  \n  <a class="gatsby-resp-image-link" href="/static/firebase_security_presentation-cab81cd7898b57406ad48ccf5d00a7a6-db0af.jpg" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 650px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 75%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAIBA//EABUBAQEAAAAAAAAAAAAAAAAAAAEC/9oADAMBAAIQAxAAAAGI4ktqj//EABkQAAIDAQAAAAAAAAAAAAAAAAABAhMhEv/aAAgBAQABBQKmRVrfIpSNZh//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAWEQEBAQAAAAAAAAAAAAAAAAAAASH/2gAIAQIBAT8BjH//xAAbEAACAgMBAAAAAAAAAAAAAAAAEQExAhAhkf/aAAgBAQAGPwKtKy5G59O4s//EABsQAQADAQADAAAAAAAAAAAAAAEAESExYZGx/9oACAEBAAE/IS7TFaPku2IMezYqWw7BQ6PKz//aAAwDAQACAAMAAAAQVA//xAAYEQACAwAAAAAAAAAAAAAAAAAAAREhMf/aAAgBAwEBPxBQh7R//8QAFxEBAAMAAAAAAAAAAAAAAAAAAAERUf/aAAgBAgEBPxCWrP/EABoQAQEBAQEBAQAAAAAAAAAAAAERACExQWH/2gAIAQEAAT8QM6jwH3OTgjJ8Jp1RLQmeVmzr3ud1EKpugSYtRPz3f//Z&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="firebase_security_presentation" title="" src="/static/firebase_security_presentation-cab81cd7898b57406ad48ccf5d00a7a6-b80fa.jpg" srcset="/static/firebase_security_presentation-cab81cd7898b57406ad48ccf5d00a7a6-cf410.jpg 163w,\n/static/firebase_security_presentation-cab81cd7898b57406ad48ccf5d00a7a6-62f2a.jpg 325w,\n/static/firebase_security_presentation-cab81cd7898b57406ad48ccf5d00a7a6-b80fa.jpg 650w,\n/static/firebase_security_presentation-cab81cd7898b57406ad48ccf5d00a7a6-08cb4.jpg 975w,\n/static/firebase_security_presentation-cab81cd7898b57406ad48ccf5d00a7a6-f2bf9.jpg 1300w,\n/static/firebase_security_presentation-cab81cd7898b57406ad48ccf5d00a7a6-fd4ba.jpg 1950w,\n/static/firebase_security_presentation-cab81cd7898b57406ad48ccf5d00a7a6-db0af.jpg 3264w" sizes="(max-width: 650px) 100vw, 650px">\n    </span>\n  </span>\n  \n  </a>\n    \n</div>\n<h1>Speechless</h1>\n<div class="post-images">\n  <p>Speechless is fun, crazy and impressive. I wish I had the presentation skills these guys have:</p>\n  \n  <a class="gatsby-resp-image-link" href="/static/speechless-ab67761488f560b0e4d3073edab31d38-db0af.jpg" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 650px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 75%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAECAwT/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABzuiYhEf/xAAcEAACAgIDAAAAAAAAAAAAAAABAgADERITITH/2gAIAQEAAQUCO1g4WRmtZWHmZ0Z//8QAFREBAQAAAAAAAAAAAAAAAAAAECH/2gAIAQMBAT8Bh//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABoQAAEFAQAAAAAAAAAAAAAAAAEAAhEhIiD/2gAIAQEABj8CGotN3Moijx//xAAaEAEAAwEBAQAAAAAAAAAAAAABABEhMUFR/9oACAEBAAE/ITRi1arkU7srnIIUB6kabc+S8HTr7k//2gAMAwEAAgADAAAAECfv/8QAFhEAAwAAAAAAAAAAAAAAAAAAEBFR/9oACAEDAQE/EHA//8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEhEf/aAAgBAgEBPxCqGI//xAAbEAEBAAMBAQEAAAAAAAAAAAABEQAhMUFxwf/aAAgBAQABPxB40lEfV9MbD0jTXrk2KiS4AEaotzFW2vjDK+lOjp/c/9k=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="speechless" title="" src="/static/speechless-ab67761488f560b0e4d3073edab31d38-b80fa.jpg" srcset="/static/speechless-ab67761488f560b0e4d3073edab31d38-cf410.jpg 163w,\n/static/speechless-ab67761488f560b0e4d3073edab31d38-62f2a.jpg 325w,\n/static/speechless-ab67761488f560b0e4d3073edab31d38-b80fa.jpg 650w,\n/static/speechless-ab67761488f560b0e4d3073edab31d38-08cb4.jpg 975w,\n/static/speechless-ab67761488f560b0e4d3073edab31d38-f2bf9.jpg 1300w,\n/static/speechless-ab67761488f560b0e4d3073edab31d38-fd4ba.jpg 1950w,\n/static/speechless-ab67761488f560b0e4d3073edab31d38-db0af.jpg 3264w" sizes="(max-width: 650px) 100vw, 650px">\n    </span>\n  </span>\n  \n  </a>\n    \n</div>\n<div class="post-images">\n  <p>Pop rocks!</p>\n  \n  <a class="gatsby-resp-image-link" href="/static/pop_rocks-ff205c9ab64073fe6832cd675b8bb523-db0af.jpg" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 650px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 75%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMBBf/EABYBAQEBAAAAAAAAAAAAAAAAAAACA//aAAwDAQACEAMQAAAB506SaaE//8QAGBAAAwEBAAAAAAAAAAAAAAAAARAhABH/2gAIAQEAAQUCu6URF//EABURAQEAAAAAAAAAAAAAAAAAABAx/9oACAEDAQE/AYf/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAXEAADAQAAAAAAAAAAAAAAAAABECGR/9oACAEBAAY/Aowdf//EABoQAQADAQEBAAAAAAAAAAAAAAEAIVERMXH/2gAIAQEAAT8hqqzYW63L2F9HARrhAzyf/9oADAMBAAIAAwAAABB7/wD/xAAXEQADAQAAAAAAAAAAAAAAAAAAAREh/9oACAEDAQE/EI8Uh//EABcRAQADAAAAAAAAAAAAAAAAAAABESH/2gAIAQIBAT8Qimv/xAAdEAEBAAICAwEAAAAAAAAAAAABEQAhMUFhcZGx/9oACAEBAAE/ELvqKUo+/ObSnC0Vn5hAIGl6wrbFMIXkfjlLpHSc5yEw95//2Q==&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="pop_rocks" title="" src="/static/pop_rocks-ff205c9ab64073fe6832cd675b8bb523-b80fa.jpg" srcset="/static/pop_rocks-ff205c9ab64073fe6832cd675b8bb523-cf410.jpg 163w,\n/static/pop_rocks-ff205c9ab64073fe6832cd675b8bb523-62f2a.jpg 325w,\n/static/pop_rocks-ff205c9ab64073fe6832cd675b8bb523-b80fa.jpg 650w,\n/static/pop_rocks-ff205c9ab64073fe6832cd675b8bb523-08cb4.jpg 975w,\n/static/pop_rocks-ff205c9ab64073fe6832cd675b8bb523-f2bf9.jpg 1300w,\n/static/pop_rocks-ff205c9ab64073fe6832cd675b8bb523-fd4ba.jpg 1950w,\n/static/pop_rocks-ff205c9ab64073fe6832cd675b8bb523-db0af.jpg 3264w" sizes="(max-width: 650px) 100vw, 650px">\n    </span>\n  </span>\n  \n  </a>\n    \n</div>\n<h1>Observations</h1>\n<ol>\n<li>\n<p>If you want to attend Google IO with far fewer people. Go early in the morning on the second day. This place is a ghost town.</p>\n</li>\n<li>\n<p>84 yesterday. 68 today. California weather isn\'t so different then Utah. I\'m wearing shorts anyway. A guy has to stick to his principles.</p>\n</li>\n<li>\n<p>Google turn by turn instructions aren\'t awesome. Routing you through a parking lot isn\'t a valid route and yes it was set to bike not walk.</p>\n</li>\n<li>\n<p>You can find sunscreen in the mobile restrooms that look like horse trailers.</p>\n</li>\n<li>\n<p>The best wifi is in the very corner over behind the Android Auto display, but keep it a secret.</p>\n</li>\n<li>\n<p>I wish I had 1/100 of the lighting equipment they have. They have crazy awesome stuff:</p>\n</li>\n</ol>\n<div class="post-images">\n  \n  <a class="gatsby-resp-image-link" href="/static/night2-18204aa75fce24bb997fd4288fa99d31-db0af.jpg" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 650px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 75%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMEAgX/xAAXAQADAQAAAAAAAAAAAAAAAAAAAQID/9oADAMBAAIQAxAAAAHibe82jLSV/8QAGhAAAgIDAAAAAAAAAAAAAAAAAQIAAxESMf/aAAgBAQABBQLUw1sFHCy4RhDWhn//xAAXEQADAQAAAAAAAAAAAAAAAAAAARNR/9oACAEDAQE/AZrSLP/EABcRAAMBAAAAAAAAAAAAAAAAAAABAhL/2gAIAQIBAT8BdGkf/8QAGBAAAwEBAAAAAAAAAAAAAAAAAAERECH/2gAIAQEABj8CK9XSn//EABsQAAICAwEAAAAAAAAAAAAAAAABESExUXGx/9oACAEBAAE/IXoIFV0rB+Ip0nOxuzYjA1gz/9oADAMBAAIAAwAAABCo7//EABgRAQADAQAAAAAAAAAAAAAAAAEAETGh/9oACAEDAQE/EBmiG7ez/8QAFhEBAQEAAAAAAAAAAAAAAAAAEQEQ/9oACAECAQE/EICZ/wD/xAAcEAEBAAICAwAAAAAAAAAAAAABEQAhQWExUbH/2gAIAQEAAT8QDzfc4ycprwu2eMQWhO77jIZErEwiXGrlEges/9k=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="night2" title="" src="/static/night2-18204aa75fce24bb997fd4288fa99d31-b80fa.jpg" srcset="/static/night2-18204aa75fce24bb997fd4288fa99d31-cf410.jpg 163w,\n/static/night2-18204aa75fce24bb997fd4288fa99d31-62f2a.jpg 325w,\n/static/night2-18204aa75fce24bb997fd4288fa99d31-b80fa.jpg 650w,\n/static/night2-18204aa75fce24bb997fd4288fa99d31-08cb4.jpg 975w,\n/static/night2-18204aa75fce24bb997fd4288fa99d31-f2bf9.jpg 1300w,\n/static/night2-18204aa75fce24bb997fd4288fa99d31-fd4ba.jpg 1950w,\n/static/night2-18204aa75fce24bb997fd4288fa99d31-db0af.jpg 3264w" sizes="(max-width: 650px) 100vw, 650px">\n    </span>\n  </span>\n  \n  </a>\n    \n  \n  <a class="gatsby-resp-image-link" href="/static/night-494e261faa38daa6ff3327d79a6cff47-db0af.jpg" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 650px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 75%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIDBAX/xAAVAQEBAAAAAAAAAAAAAAAAAAADAf/aAAwDAQACEAMQAAABy15bMtxCH//EABkQAAMAAwAAAAAAAAAAAAAAAAECEgAQEf/aAAgBAQABBQKwTaxbHfRn/8QAFhEBAQEAAAAAAAAAAAAAAAAAABIT/9oACAEDAQE/AdFv/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQACIf/aAAgBAgEBPwF2pdv/xAAZEAADAAMAAAAAAAAAAAAAAAAAEDEBESH/2gAIAQEABj8CpcbIuL//xAAZEAADAQEBAAAAAAAAAAAAAAAAAREhMYH/2gAIAQEAAT8hecVZ0MVrVeiuuFm1hDjcP//aAAwDAQACAAMAAAAQfN//xAAWEQEBAQAAAAAAAAAAAAAAAAABEEH/2gAIAQMBAT8QUKuz/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAR/9oACAECAQE/EDg2z//EABwQAQEAAgIDAAAAAAAAAAAAAAERACExQVFhcf/aAAgBAQABPxAxC1l1c0kiArqPfwyQAGUjBwT03E6Q4KzWGp4p4vuZ/9k=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="night" title="" src="/static/night-494e261faa38daa6ff3327d79a6cff47-b80fa.jpg" srcset="/static/night-494e261faa38daa6ff3327d79a6cff47-cf410.jpg 163w,\n/static/night-494e261faa38daa6ff3327d79a6cff47-62f2a.jpg 325w,\n/static/night-494e261faa38daa6ff3327d79a6cff47-b80fa.jpg 650w,\n/static/night-494e261faa38daa6ff3327d79a6cff47-08cb4.jpg 975w,\n/static/night-494e261faa38daa6ff3327d79a6cff47-f2bf9.jpg 1300w,\n/static/night-494e261faa38daa6ff3327d79a6cff47-fd4ba.jpg 1950w,\n/static/night-494e261faa38daa6ff3327d79a6cff47-db0af.jpg 3264w" sizes="(max-width: 650px) 100vw, 650px">\n    </span>\n  </span>\n  \n  </a>\n    \n  \n  <a class="gatsby-resp-image-link" href="/static/night1-22293b7095fe0d9767b0ef42b615f4f3-db0af.jpg" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 650px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 75%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQCBf/EABUBAQEAAAAAAAAAAAAAAAAAAAEC/9oADAMBAAIQAxAAAAHlq9LGsNf/xAAZEAADAQEBAAAAAAAAAAAAAAAAARECEiH/2gAIAQEAAQUCjIyCx5xkh//EABkRAAMAAwAAAAAAAAAAAAAAAAABAhNBUf/aAAgBAwEBPwFRL2Y56f/EABYRAQEBAAAAAAAAAAAAAAAAAAASAf/aAAgBAgEBPwG8U//EABUQAQEAAAAAAAAAAAAAAAAAABAh/9oACAEBAAY/Amv/xAAaEAADAQEBAQAAAAAAAAAAAAAAAREhYTGR/9oACAEBAAE/IX6tP4ZWCeGGqunZYJFZh//aAAwDAQACAAMAAAAQO+//xAAXEQEBAQEAAAAAAAAAAAAAAAABABFB/9oACAEDAQE/EANBHaf/xAAXEQEBAQEAAAAAAAAAAAAAAAABABEx/9oACAECAQE/EAOjZv/EABwQAQADAAIDAAAAAAAAAAAAAAEAESExUUFhcf/aAAgBAQABPxBuEvtOMVeclM1d9TYEMobKARegJf2aaBbrWf/Z&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="night1" title="" src="/static/night1-22293b7095fe0d9767b0ef42b615f4f3-b80fa.jpg" srcset="/static/night1-22293b7095fe0d9767b0ef42b615f4f3-cf410.jpg 163w,\n/static/night1-22293b7095fe0d9767b0ef42b615f4f3-62f2a.jpg 325w,\n/static/night1-22293b7095fe0d9767b0ef42b615f4f3-b80fa.jpg 650w,\n/static/night1-22293b7095fe0d9767b0ef42b615f4f3-08cb4.jpg 975w,\n/static/night1-22293b7095fe0d9767b0ef42b615f4f3-f2bf9.jpg 1300w,\n/static/night1-22293b7095fe0d9767b0ef42b615f4f3-fd4ba.jpg 1950w,\n/static/night1-22293b7095fe0d9767b0ef42b615f4f3-db0af.jpg 3264w" sizes="(max-width: 650px) 100vw, 650px">\n    </span>\n  </span>\n  \n  </a>\n    \n</div>',frontmatter:{title:"Google IO Day 2",date:"May 19, 2016",imageUrl:null,image:{childImageSharp:{sizes:{src:"/static/firebase_security_presentation2-a9ec9e2c7b2694a967a68e65f142f740-381d6.jpg"}}}}}},pathContext:{path:"/google-io-day-2"}}}});
//# sourceMappingURL=path---google-io-day-2-4bf3cc5ebc61d4afb64d.js.map