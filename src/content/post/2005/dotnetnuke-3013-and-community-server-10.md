---
title: "DotNetNuke 3.0.13 and Community Server 1.0"
author: Chris Hammond
publishDate: 2005-04-14T23:48:00
updateDate: 2008-01-23T16:50:52
tags: [ 'Development', 'DotNetNuke', 'SEO', 'Site News', 'Technology' ]
excerpt: "Struggling to set up DNN and CS? Learn about failed attempts creating a community & app name issues in this informative blog post."
url: /2005/dotnetnuke-3013-and-community-server-10  # Use the generated URL with year
---
<P>I'm exactly the same place I started, I have nothing working.</P> <P>Here's what I've tried</P> <UL> <LI>Install <a title="DotNetNuke.com" href="https://www.dotnetnuke.com" target="_blank">dnn</a> 3.0.13</LI> <LI>Install CS with the installer, without creating a community, without installing the membership roles, no sample data</LI> <LI>Run cs_system.createcommunity trying to create a community with the applicationname of 0, which&nbsp;appears to be&nbsp;the <a title="DotNetNuke.com" href="https://www.dotnetnuke.com" target="_blank">dnn</a> default app name</LI></UL> <P>&nbsp;</P> <UL> <LI>Install <a title="DotNetNuke.com" href="https://www.dotnetnuke.com" target="_blank">dnn</a> 3.0.13</LI> <LI>Install CS with installer, with a community, changed the appname in the cs web.config to 0 instead of dev (at least 3 occurances)</LI> <LI>Run cs_system.createcommunity trying to create a community with the applicationname of 0, which&nbsp;appears to be&nbsp;the <a title="DotNetNuke.com" href="https://www.dotnetnuke.com" target="_blank">dnn</a> default app name</LI></UL> <P>&nbsp;</P> <UL> <LI>Install CS with installer, create community</LI> <LI>Install <a title="DotNetNuke.com" href="https://www.dotnetnuke.com" target="_blank">dnn</a> 3.0.13 (dnn install failed)</LI></UL> <P>&nbsp;</P> <UL> <LI>Install <a title="DotNetNuke.com" href="https://www.dotnetnuke.com" target="_blank">dnn</a> 3.0.13</LI> <LI>Run CS SQL Scripts on DB</LI> <LI>Run cs_system.createcommunity</LI></UL> <P>Nothing of the above has worked, hopefully I'll have some more time to mess with things this weekend....</P>

