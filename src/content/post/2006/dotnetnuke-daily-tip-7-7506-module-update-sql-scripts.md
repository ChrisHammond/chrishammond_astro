---
title: "DotNetNuke Daily Tip #7 7/5/06 Module Update SQL Scripts"
author: Chris Hammond
publishDate: 2006-07-05T12:06:00
updateDate: 2008-01-23T16:51:01
tags: []
excerpt: "Learn how to avoid SQL script issues when developing custom modules in DotNetNuke. Save .SqlDataProvider files in UTF-8 format for successful module uploads."
url: /2006/dotnetnuke-daily-tip-7-7506-module-update-sql-scripts  # Use the generated URL with year
---
<P><STRONG>DotNetNuke Daily Tip for 7/5/2006 </STRONG></P> <P>After a brief haitus for the July 4 festivities here in the States the <A href="/christoc/archive/tags/daily+tips/default.aspx">DotNetNuke Daily Tips</A> are back!</P> <P>For our daily tip today I'll be covering a minor item to watch out for when you develop your own custom modules using the DataProvider model. DotNetNuke's provider model and PrivateAssembly installer for modules can be an extremely powerful tool when you know how to use them. Here's one catch with the module upload process.</P> <P>If you've developed a custom module and&nbsp;have upgrade scripts for your module that&nbsp;fire with the&nbsp;PA installer you may have SQL scripts have a '+' in them, perhaps concatenating strings together.&nbsp;You need to be sure to save the .SqlDataProvider file in UTF-8 format. I always seem to have the best luck doing this with plain old notepad. Open the file in notepad, save as, and be sure to choose UTF-8 as the encoding. You can make Visual Studio do this, but had some challenges actually getting VS to save properly with that encoding so I always open and save my files in Notepad just to be sure. If you don't do this you'll run into a few problems when you upload your modules via the PrivateAssembly installer and it tries to run the SQL scripts.</P> <P>Stay tuned for&nbsp;another <A href="/christoc/archive/tags/daily+tips/default.aspx"><FONT face="Times New Roman" size=3>DotNetNuke Daily Tip</FONT></A><FONT face="Times New Roman" size=3> coming tomorrow!</FONT></P> Posted from <A href="https://weblogs.asp.net/christoc/">weblogs.asp.net/christoc</a>

