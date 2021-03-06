---
title: Adding GraphQL to our REST APIs
author: Justin Ball
layout: post
tags:
  - "learning"
  - "graphql"
  - "api"
  - "REST"
date: 2017-11-28T16:27:32.000Z
templateKey: blog-post
path: "/Adding-GraphQL-to-our-REST-APIs"
description: ""
imageUrl: https://img.youtube.com/vi/F329W0PR6ds/sddefault.jpg
---
Rarely do we get to build applications from scratch. Rather, we frequently have to make improvements on existing systems. Coursera has built on their existing REST APIs. Here's how.
<div id="F329W0PR6ds" class="youtube-video">
  <h2 class="youtube-title">Declarative GraphQL: Adding GraphQL to our REST APIs - Bryan Kane</h2>
  <iframe src="https://www.youtube.com/embed/F329W0PR6ds" frameborder="0" width="640" height="385" allowfullscreen>
    <p>Your browser does not support iframes.</p>
  </iframe>
  <p class="youtube-description">Coursera has over 500 REST APIs in production. We're all in on GraphQL, but given this scale, it would be impossible to build a schema and write 500 custom resolvers to handle each of our endpoints. Instead, we used information we already had about our APIs (which actions are available, and request and response formats) to automatically build GraphQL resolvers and add them all to a single, unified schema. We also created a structured way for developers to define relations between models, in both forward and reverse directions, which will enable almost all pages on Coursera to be loaded via a single GraphQL query.</p>
</div>
