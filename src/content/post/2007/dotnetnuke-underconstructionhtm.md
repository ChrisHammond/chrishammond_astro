---
title: "DotNetNuke Underconstruction.htm"
author: Chris Hammond
publishDate: 2007-07-29T22:42:00
updateDate: 2024-04-22T19:25:25
tags: [ 'net', 'daily tips', 'DotNetNuke', 'Trouble Shooting' ]
excerpt: "If you&#39;re having problems with your DotNetNuke site, mainly every time the site loads the first time (after the site has been reset), going to the install/underconstruction.htm file, here&#39;s a quick tip. Check the VERSIONS table in your database, we were having an issue with this on a recent test site and when I checked the versions table it was completely empty. I corrected the problem by adding a Version entry for 4.5.3, which is the DNN version that this particular site was running. Posted from... "
url: /2007/dotnetnuke-underconstructionhtm  # Use the generated URL with year
---
<p mce_keep="true">If you&#39;re having problems with your DotNetNuke site, mainly every time the site loads the first time (after the site has been reset), going to the install/underconstruction.htm file, here&#39;s a quick tip.</p>  <p mce_keep="true">Check the VERSIONS table in your database, we were having an issue with this on a recent test site and when I checked the versions table it was completely empty.</p>  <p mce_keep="true">I corrected the problem by adding a Version entry for 4.5.3, which is the DNN version that this particular site was running.</p>  <p>Posted from <a href="https://weblogs.asp.net/christoc/">weblogs.asp.net/christoc</a></p> 
