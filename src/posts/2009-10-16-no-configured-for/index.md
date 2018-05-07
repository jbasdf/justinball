---
title: no <processor_id> configured for <Any>
author: Justin Ball
layout: post
permalink: "/2009/10/16/no-configured-for/"
tags:
  - "Ruby On Rails"
  - "gems ruby on rails"
  - "jeweler"
  - "ruby"
date: '2009-10-16T06:00:00Z'
templateKey: blog-post
path: "/no-configured-for"
description: ''
---

If you are using Jeweler and get this error:
<blockquote>
  no  configured for
</blockquote>

Check out the troubleshooting section:


You need to edit ~/.rubyforge/auto-config.yml and make sure processor_ids is set like this:

    processor_ids:
            IA64: 6000
            AMD-64: 1500
            Any: 8000
            Sparc: 4000
            PPC: 2000
            Other: 9999
            Alpha: 7000
            i386: 1000
            UltraSparc: 5000
            MIPS: 3000
