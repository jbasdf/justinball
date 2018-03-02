webpackJsonp([0x7ddf02a8b013],{1467:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2009-02-17-quick-tip-for-working-with-paypal-and-activemerchant-in-your-rails-application/index.md absPath of file >>> MarkdownRemark",html:'<p>Working with Paypal can be a bit difficult not because of the code required, but rather because their website can be a hassle to navigation.  I already have ActiveMerchant integrated into my application.  My problem was figuring out how to change it from Braintree to Paypal.  Here are the quick steps for getting going.</p>\n<ol>\n\t<li>Sign up for an account here:\nhttps://developer.paypal.com</li>\n\t<li>Click on \'Test Accounts\' then choose \'Seller\' and create an account</li>\n</li>You can then use that account to login just like a real business user with the exception that you will log in to the sandbox and no money will exchange hands.</li>\n<li>If you want you can also create a \'Buyer\' account that you can use to test transactions.</li>\n<li>Select the \'Seller\' account and then press \'Enter Sandbox Test Site\'.  You will be asked to login as the \'Buyer\' user.  Login and then under \'My Account\' which should be the first screen you see there will be 3 steps towards the bottom of the page.  Click on the \'Go\' button to accept the billing agreement and then you will be provided with API credentials.  Note that it will tell you that you will be billed $30 a month.  However since you are in the sandbox your test account is free so don\'t fret.  At least I hope they are free.  Maybe I should watch my account :-).</li> \n<li>If you don\'t copy the credentials provided no worries you can always get the API Credentials from inside your sandbox account by clicking on \'View Details\' under the buy account.  Copy the credentials they are the information you need to setup ActiveMerchant.</li>\n<li>You can now setup your application to talk to Paypal with something like this:\n<pre><code class="ruby">\n  gateway = ActiveMerchant::Billing::PaypalGateway.new(\n    :login => "seller_432342373_p.example.com",\n    :password => "WUDJOWK4M92C6HBE",\n    :signature => "28dusj#8skaTiKxtkm6L9DcSUCUgePAUDQ3L-9s83usj@$osja82haDYtSu"\n  )\n</pre></code>\n<li>I won\'t go into all the details of how to build a payment system instead watch the Railscasts and buy the <a href="http://peepcode.com/products/activemerchant-pdf">ActiveMerchant pdf</a></li>\n</ol>\n<p>Note: If you get this error during your work:</p>\n<pre><code class="ruby">\nError: There\'s an error with this transaction. Please enter a complete billing address.\n</pre></code>\n<p>It\'s because Paypal requires billing information even in test mode.  You\'ll need to include something like this in the \'options\' argument to the various method calls in ActiveMerchant:</p>\n<pre><code class="ruby">\n      :billing_address => {\n        :name     => "Test Guy",\n        :address1 => "123 W 423 E",\n        :city     => "Somewhere",\n        :state    => "CA",\n        :country  => "US",\n        :zip      => "88888"\n      }\n</pre></code>\n<p>If you get an error stating \'This transaction cannot be processed due to an invalid merchant configuration\' then you need to sign into your \'Buyer\' account and accept the API </p>\n<p>Railscasts are awesome.  <a href="http://railscasts.com/episodes/141-paypal-basics">PayPal Basics</a>, <a href="http://railscasts.com/episodes/144-active-merchant-basics">Active Merchant Basics</a>, and <a href="http://railscasts.com/episodes/145-integrating-active-merchant">Integrating Active Merchant</a> for a complete walk through.</p>',frontmatter:{title:"Quick Tip for working with Paypal and ActiveMerchant in your Rails Application",date:"February 17, 2009",imageUrl:null,structuredHtml:null,image:null}}},pathContext:{path:"/quick-tip-for-working-with-paypal-and-activemerchant-in-your-rails-application"}}}});
//# sourceMappingURL=path---quick-tip-for-working-with-paypal-and-activemerchant-in-your-rails-application-1f029580491ceb1f49bd.js.map