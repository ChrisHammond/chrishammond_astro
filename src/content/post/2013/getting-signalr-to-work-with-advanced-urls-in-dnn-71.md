---
title: "Getting SignalR to work with Advanced URLs in DNN 7.1"
author: Chris Hammond
publishDate: 2013-07-27T00:51:19
updateDate: 2013-07-29T21:00:56
tags: [ 'DNN', 'DotNetNuke', 'SignalR' ]
excerpt: "Discover how to use SignalR with DotNetNuke modules for DNN 7.1 using the 'advanced' URL format, and how to override URL settings in DNN manually."
url: /2013/getting-signalr-to-work-with-advanced-urls-in-dnn-71  # Use the generated URL with year
---
<p><a href="https://www.chrishammond.com/blog/itemid/2624/using-signalr-with-dotnetnuke-modules">in a previous blog post I talked about how to use SignalR with your DotNetNuke modules</a>, well, if you are using DNN 7.1 and the "Advanced" URLFormat option (upgrades won't use this by default, new installs will) then the SignalR/Hubs route will no longer work, DNN will return a 404 for that path.</p> <p>What you need to do is "override" the URL settings in DNN. In the DNN Platform, you have to do this manually, via the database, I believe the EVOQ ($paid$) versions have a UI for this, but for those of us who focus specifically on the open source platform, you need to make manually update database entries to customize the URL handling in 7.1+.</p> <a href="https://www.christoc.com/tutorials/aid/5">Read More at www.christoc.com</a>


