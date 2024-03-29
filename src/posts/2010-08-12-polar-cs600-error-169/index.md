---
title: Polar CS600 Error 169
author: Justin Ball
layout: post
permalink: "/2010/08/12/polar-cs600-error-169/"
tags:
  - "Cycling"
  - "polar cs600"
date: '2010-08-12T06:00:00Z'
templateKey: blog-post
path: "/polar-cs600-error-169"
description: ''
---

I have a Polar CS600 that I use to monitor my rides. I love it except for when it comes time to change the battery. This seemingly simple exercise is much harder than it should be. I've attempted to change the battery a number of times. It's an odd CR2354 button cell that is hard to find. Luckily the local jewelry store carries them. I switched the battery and nothing. I take it into the shop they do exactly the same thing and it comes up. I demons that power the little bugger hate me.

When I change the battery it comes up with Error 169 and refuses to do anything else. Luckily I found the fix [here][1]. Since it's likely that I'll have to go through this process again next here here's the solution blatantly copied from the forum. Note that this will wipe the computer's memory so hopefully you managed to save stuff before it died (I didn't and lost a week's worth of rides and all my bike specific settings).

 [1]: http://forum.polar.fi/showthread.php?t=6189

ProTrainer 5 version 5.20.134 was modified to remove the error code and set default settings to the Polar product. The error solution process removes settings and training files from the monitor memory.

Please do the following:

1.  Reset the unit by pressing all the buttons (except front button) at the same time. If resetting does not work, move to step 2.
2.  Go to service mode by pressing first Back button and within 2 seconds the Up button.
3.  Go to Internal test by pressing Up button once and press Start.
4.  Go to TCV mode by pressing Up button twice.
5.  Now open up ProTrainer 5 and make a connection between the Polar product
    and ProTrainer using IrDA device.
6.  Select Tools - Edit Polar Product Settings... and wait for a while, so that ProTrainer checks the memory.
7.  Click Close
8.  Reset the monitor again by pressing all the buttons (except Front
    button) for few seconds and check that you can go to Time mode.
