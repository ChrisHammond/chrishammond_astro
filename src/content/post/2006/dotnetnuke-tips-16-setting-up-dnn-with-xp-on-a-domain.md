---
title: "DotNetNuke Tips #16, Setting up DNN with XP on a Domain"
author: Chris Hammond
publishDate: 2006-08-31T23:41:00
updateDate: 2008-01-23T16:51:02
tags: [ 'aspnet', 'DotNetNuke Development', 'DotNetNuke Tips', 'IIS' ]
excerpt: "Discover how to avoid common setup issues with DotNetNuke in our latest blog post. Save time and headaches by setting folder permissions correctly!"
url: /2006/dotnetnuke-tips-16-setting-up-dnn-with-xp-on-a-domain  # Use the generated URL with year
---
<p>Welcome to another installment of the DotNetNuke Tips to help simplify your life. This is a simple one, but can save you a TON of headache and troubleshooting.</p><p>I was helping a coworker out today, trying to track down a gremlin for a new development install on Windows XP SP2. The coworker, we&#39;ll call Whistle, was having troubles getting his new environment up and running. The site wouldn&#39;t run thus it wouldn&#39;t create the proper database tables, stored procs and related data.</p><p>After a few minutes of beating his head on the desk&nbsp;I sat down to assist. He had completed&nbsp;the usual setup process, created a database, extracted the ZIP file, modified the web.config file for the newly created database, and of course, he set the proper permissions on the folders.</p><p>But for some reason the site wouldn&#39;t load in IE, repeating errors that DNN was unable to modify the web.config file. After his&nbsp;10 minutes, and myself spending another 5 minutes trying to get it running we ran across the most simplest of issues, that I&#39;m sure many of you have also faced, as have I a few times as well.</p><p>When you setup the permissions on your folders, if you&#39;re on a domain, and setting up an IIS5 machine (Win2k or XP) be sure to change the &quot;LOCATION&quot; of the user to be the local machine and not the domain ASPNET user!</p><p>Such a simple thing, yet very easy to miss and hard to track down. Stay tuned for more DotNetNuke tips, brought to you by Chris Hammond from <a href="https://www.engagesoftware.net/" target="_blank">Engage Software</a>.</p> Posted from <A href="https://weblogs.asp.net/christoc/">weblogs.asp.net/christoc</a>

