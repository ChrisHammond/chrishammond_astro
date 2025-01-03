---
title: "Meadow F7 Unable to Deploy"
author: Chris Hammond
publishDate: 2020-03-31T05:24:19
updateDate: 2020-03-31T05:24:19
tags: [ 'F7', 'Meadow', 'Meadow F7', 'Wilderness Labs' ]
excerpt: "Having trouble deploying your Meadow F7 application on Windows 10? Learn how to fix the 'Couldn't initialize serial port' error with this solution!"
url: /2020/meadow-f7-unable-to-deploy  # Use the generated URL with year
---
<p>A quick blog post here, to hopefully help the next person who runs into this problem. </p><p>While trying to run my first Meadow F7 application with Windows 10 and Visual Studio 2019, every time I would go to DEPLOY the app, the Meadow would disconnect and the app would fail to deploy. </p><p>The error would ultimately come back with </p><blockquote><p>Couldn't initialize serial port</p></blockquote><p>It would fail on step</p><blockquote><p>[3/31/2020 12:18:32 AM]&nbsp;&nbsp; Deploying to Meadow on COM3...<br /> [3/31/2020 12:18:32 AM]&nbsp;&nbsp; Initializing Meadow&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p></blockquote><p>The OS would make the sound that a USB device connection was lost, and then it would get the initialize serial port error.</p><p>The way I ended up fixing this was to go to the Windows 10 Power &amp; Sleep settings, get into your “plan”’s settings page, and click on the Change advanced power settings option. From there, scroll down to USB Settings, and I changed the USB selective suspend setting from ENABLED to DISABLED. Click Apply.</p><p><a href="/assets/images/PublishThumbnails//open-live-writer/meadow-f7-unable-to-deploy_4af/image_2.png"><img width="479" height="259" title="image" style="display: inline; background-image: none;" alt="image" src="/assets/images/PublishThumbnails//Open-Live-Writer/Meadow-F7-Unable-to-Deploy_4AF/image_thumb.png" border="0"></a></p><p>As soon as I did this I was able to deploy the app with Visual Studio 2019 to the Meadow F7 board. You may need to disconnect and reconnect the board, and check the Meadow Device Explorer to make sure you have the correct com port selected (in my case Com3).</p>

