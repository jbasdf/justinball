---
title: Gatsby 2.0 and Forestry
author: Justin Ball
tags:
- blog
- gatsby
date: 2020-01-26T07:00:00Z
templateKey: blog-post
path: "/gatsby-2-and-forestry"
description: ''
image: ''
imageUrl: ''

---
I've let this blog sit idle for a very long time because all the cool kids stopped blogging and I've spent so much time on the tech that I neglected writing anything. 

I'm hoping to change that now. My initial experience with [Gatsby](https://www.gatsbyjs.org/ "gatsby.js") wasn't good. I don't have a lot of time and so getting everything setup took forever. In spite of the effort I knew that I wanted a static site. I used to use [Wordpress](https://wordpress.org/). It's painfully slow to load. Keeping up with security updates was a nightmare and the allure of hosting content on S3 for a few pennies a month was just too great. Given that pain I've gone through a couple of site generators. [Jekyll](https://jekyllrb.com/) was technology of choice for a long time. I write a lot of Ruby code so it was a natural fit. However it was slow. I've been enjoying learning and playing around with [Go](https://golang.org/) so I considered [Hugo](https://gohugo.io/). It's really fast, but I really wanted to be able to customize my code a bit via Javascript so Gatsby won. I guess that's a lot about technology right after I said I was going to spend more time writing and less time on tech.

Given how much pain I went through to get everything setup I was dreading the Gatsby 2.0 upgrade. Turns out it wasn't bad. I spent about 3 hours changing some code, upgrading packages and thinking about how to proceed going forward.

Ironically, part of that process included considering a move to Hugo and dumping Gatsby. While looking through Hugo templates I discovered [forestry.io](https://forestry.io/). I sit at a computer all day and so opening my site, writing and post and doing a deploy isn't a big deal. However, I really wanted to be able to make a post on the web, have it commit to [my github repo](https://github.com/jbasdf/justinball "Justin Ball")