---
title: Luvfoo &#8211; Open Source Ruby on Rails Social Network Platform
author: Justin Ball
layout: post
permalink: "/2008/09/15/764/"
tags:
  - "Ruby On Rails"
  - "Ruby On Rails"
  - "social networking"
  - "software"
date: '2008-09-15T06:00:00Z'
templateKey: blog-post
path: "/764"
description: ''
---

For lack of a better place to put this right now I am posting the roadmap for the Ruby on Rails social network we are building here. There has been quite a lot of interest in the project and quite a bit of willingness to contribute for which I am grateful. There are some features on this list that are a bit out there and we might not every get to. The idea is to do a brain dump and collect feedback. If you have interest or ideas feel free to add comments.

The code is currently running on:
[Teachers Without Borders][1]
[Youth for Habitat (English, Turkish)][2]

 [1]: http://www.teacherswithoutborders.org
 [2]: http://yfh.enpraxis.net/?lang=yfh-en

[Get the source on GitHub][3]

 [3]: http://github.com/jbasdf/luvfoo/tree/master

## Roadmap by Feature

**Featured Content
**
*   Develop a site wide news system that let's admins push news from member blogs or groups to the home page. In addition, group managers should be able to push news to the group home page. It would be nice to be able to attach news items to the various widgets so they can highlight specific member or group news items in various locations on the site.
*   Make it possible for site admins to filter / push images to the home page.


**
File upload share
**
*   Let users upload files to their profile.
*   Files can be shared with other users or groups
*   Enable google docs integration via an open in google docs link
*   Enable integration with Amazon S3

*   enable online conversion of documents into html
*   enable collaborative editing of document within the site via fck editor and juggernaut
*   Let users to upload files to there projects (just officers or all the members - depend on the permission that the officer gives)


**
Search
**
*   Develop a site wide content search system
*   Figure out a search members system. Part of the improve members page process.
*   Enable recommendation system. Suggest users that are interesting
*   Let users import their contact lists from GMail etc. Use that to search for potential friends
*   Let users search for each other via skills or interests

*   Improve the groups listing page. Allow for featured groups. Make groups discoverable.


**
Groups
**
*   Improve group home page
*   Enable file upload directly into groups. Files uploaded here should remain attached to the user doing the upload but be automatically shared with the group. (and give synchronization editing on these documents - like google docs).

*   Let group admins send email to all members
*   Integrate forums
*   Add voting/survey mechanism to groups
*   Analyze bookmarks shared by group members. Pull in rss from those pages.
*   Use recommender to suggest other interesting content


*   Add events to groups
*   Calendering
*   Ability to create an impromptu event via SMS. Let users respond via SMS
*   Send out reminders via email, IM or SMS

*   Add ability to pull in posts(from member's external blogs) or news stories (from member's internal blog) into the group automatically based on tags
*   Permissions
*   Define roles:
*   Pledge - User who has requested to join but not yet received approval
*   Observer - User who has joined but cannot participate

*   Member - User who has joined and can participate
*   Manager - User who can can change role of other members except the creator and other managers

*   Creator - User who can change the role of anybody

*   Alumni - User who once belonged but who wants to be listed but no longer notified

*   Banned - User banned from the group who cannot rejoin without admin approval


*   Creator and managers can specify:

*   Default role for new members
*   Whether or not joining requires approval
*   Whether or not the group shows up in the group index



**Profile Page

**
*   Activity Feeds - Redo activity feeds so that they don't
    have to render by pulling object data from the database every time.
    Instead it should be outputing html with perhaps some simple text
    substitution for the user name, friends etc - like the facebook api
*   Add ability to invite someone to a group right from their profile
*   Fix portfolio integration with eduCommons


*   Add user stats and integrate with Twitter
*   Pull in posts from a user's blog
*   Pull in bookmarks from user's delicious
*   Fix flickr integration
*   Consider other services that might be worth pulling in that express a user's identity (make the site more fun)


*   What does it mean when I click the x next to a feed item?
*   add ability to rank people automatically by there posts and efforts they put on the site.




**Communication
**
*   Send out more notifications to users via email.

*   Let them know when a comment is made.
*   there are changes in groups
*   there is friend activity
*   new messages are received.

*   Adding permission system - and let the user to avoid this messages if he likes to.




**CMS
**
*   Build out static page system
*   Add zip file upload to add large numbers of files quickly


*   Enable FCK editor
*   Enable CMS for users
*   Integrate file and photos so that a user can insert their stuff into a new page



*   Enable CMS for groups
*   Enable Send2Wiki like functionality for CMS pages

*   Add Juggernaut to allow for simultaneous editing of files
*   Add ability to attach assignments and/or quizzes to content
*   Will need a way to gather responses





**Themes

**
*   Enable theming engine so that the site is easier to deploy for 3rd parties


*   Create a default theme.





**API
**
*   Add blogger or moveable type API so that users can add content from a standard blogging utility
*   Enable integration with Google docs via this mechanism. Users can publish from their Google docs directly to the site


**
SMS
**
*   Add SMS capability so that the system can send out alerts to members.
*   Let friends SMS friends
*   Enable SMS for groups


**
Localization
**
*   Enable Google Translation integration
*   Get volunteers to translate the site into multiple languages


**
Administration
**
*   Build admin system to let users control site settings
*   Let admins send out newsletters or SMS alerts to all members of the site
*   Let admins monitor and ban users or content
*   Let site admins choose a theme for the site


**
Users
**
*   Generalize profile system so that any fields can be added/remove
*   Integrate new profile system with Salesforce


**
Relations/Friends
**
*   Modify friend relationship system to use follow, friend and mentor
*   Add a direct link for accepting a friend to the friend request email
*   When click on request link, change immediately to sending request... to indicate activity
*   Provide a quick link for getting back to looking at people
*   Add the ability to request friends from the profile index page (people you know well

**
Photos
**
*   Make home page photos display in a light box when click on

*   Improve experience. Let users and groups upload photos into galleries.

*   Integrate with Amazon S3


**
Sharing
**
*   Hook link sharing into alexa images so we can show a screen shot of the website a user has shared

**
Chat
**
*   Use juggernaut to add chat functionality

**
Redesign
**
*   Examine each page for usability.


**
Sitemaps
**
*   Add ability to create an xml site map for crawlers


**
Maintenance
**
*   Remove dependency on prototype. Use only jQuery to reduce script size.
*   Clean up stylesheet

*   Fix broken tests.
*   Add new tests as we review code


**Deployment
**
*   Ensure every field where a user can input data is sanitized to prevent xss



**Deployment
**
*   Look at ways to easily deploy the site via cap to providers like Morph
*   Enable backup of database via rake task to Amazon S3 (perhaps automate via a background task)


**
Performance
**
*   Are gravatar's causing us to be sluggish?
*   Set up multiple mongrel processes
*   Set up 3 subdomain asset hosts
*   Analyze and optimize queries on each page
*   Use Rails caching
*   Asynchronously load non-essential stuff
