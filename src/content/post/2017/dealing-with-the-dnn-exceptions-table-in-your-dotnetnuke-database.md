---
title: "Dealing with the DNN Exceptions table in your DotNetNuke Database"
author: Chris Hammond
publishDate: 2017-01-05T18:12:21
updateDate: 2017-01-05T18:12:21
tags: [ 'Database', 'DNN', 'DotNetNuke', 'EventLog', 'Exceptions', 'SiteLog' ]
excerpt: "Learn how to troubleshoot database storage issues in DNN with tips on managing EventLog and Exceptions table entries efficiently."
url: /2017/dealing-with-the-dnn-exceptions-table-in-your-dotnetnuke-database  # Use the generated URL with year
---
<p>I woke up this snowy January morning with email from my most excellent web hosting company (<a href="https://www.appliedi.net">www.appliedi.net</a>) letting me know that my database server was almost out of hard drive space. Thanks for the heads up to the <a href="https://www.appliedi.net" target="_blank">AppliedI</a> team!</p> <p>My first thought was “How is that possible?” I was just on the server in the past couple of days doing all my DNN9 upgrades, and there were 20 gigs of free space not 4 days ago. With a quick check I found that one of the databases was 9gb. 4 days ago that database was &lt;250mb. </p> <p>In the days of old DNN the most likely culprit would be the SiteLog table. Most of my DNN based sites have been running on DNN for 10+ years now, so I knew that the SiteLog was not the cause of my issue. (See information about the site log below)</p> <p>The next thing to check was the EventLog and Exceptions table. The EventLog table is where “events” and errors in DNN have almost always been stored, there are settings in the Event Log (admin log, admin viewer, it has had many names in the life of DNN) that limit the number of times a particular occurrence will be stored in the EventLog table, in my case the error that I was having was only in the eventlog table 100 times, because that is what the “general exception” event had set for it’s limit. </p> <h3>Checking the Exceptions Table in DotNetNuke</h3> <p>The Exceptions table, however is newer, I don’t specifically what release it was added, but it was in the last couple of years. My Exceptions table had millions of entries in it. Easy fix to clean up the table</p> <p>SQL: “truncate table exceptions” </p> <p>I then shrunk the database and all was well again, back to &lt;250mb. A quick check of the Exceptions table 30 minutes later and there were another 20k records.</p> <p>SQL: “select count(1) from exceptions”</p> <p>So then it was time to dig in and try to track down what was causing all of the exceptions.There isn’t a “view” of the exceptions table anywhere, but you can still see the “latest” exceptions in the EventLog table, so using the Admin Logs (in DNN9) view I was able to see that very frequently there was an error being thrown on <a href="https://www.DNNChat.com" target="_blank">DNNChat.com</a> with these contents:</p> <blockquote> <p>InnerMessage:The relative virtual path 'sharedresources.host.resx' is not allowed here.<br />InnerStackTrace:<br />at System.Web.VirtualPath.FailIfRelativePath() at System.Web.Hosting.HostingEnvironment.MapPathActual(VirtualPath virtualPath, Boolean permitNull) at System.Web.Hosting.HostingEnvironment.MapPathInternal(VirtualPath virtualPath) at System.Web.Hosting.HostingEnvironment.MapPath(VirtualPath virtualPath) at DotNetNuke.Services.Localization.LocalizationProvider.GetResourceFileCallBack(CacheItemArgs cacheItemArgs)</p></blockquote> <p>Basically the Chat module, after upgrading the website to DNN9 was throwing errors, that I believe were being generated in the SignalR ChatHub, trying to get the “file” path for localization. I spent a short amount of time trying to address the bug in the chat module, but was unable to get a development environment that could recreate the issue. In production that error was constantly being thrown, but there were no visible notions of any errors, no problems in the module, nothing shown to the visitors of the site, everything worked fine.</p> <h3>Fixing the Exceptions table</h3> <p>Unable to reproduce the error, to try to fix the error, I decided I would try to shut down the Exceptions table in the database. Unfortunately, there is not an easy way to do this, there isn’t an interface for the table. I reached out to a few contacts at DNN Corp and one suggested that I try disabling that type of error in the EventLog, using the Log Settings that allow you to change how many times an event will be stored. I found the Log Setting for “general exception” and simply turned off logging for that error. By doing this I was able to prevent this error from continually being logged into the Exceptions table. The downside is that all “General Exceptions” in that installation of DotNetNuke are now being “lost” but at least I don’t have to go to bed at night worried that my server will be full by morning.</p> <p>Over the next few days I’ll try to recreate the error in an environment, and then ultimately address the problem, hopefully.</p> <p>The only real difference between my production environment and my development environments is that I’m running IIS 7.5 in production and IIS 8.5 in dev, so I’ll try to get a dev environment up and running on IIS 7.5 and see what I can find there.</p> <p>&nbsp;</p> <h3>Check the Site Log in DotNetNuke</h3> <p>The SiteLog was the table where all “Traffic” on a site was stored, and in the old days (like DNN 2 and 3 timeframe) it was “on” by default, there was a process that was supposed to clean it out after a set amount of time, but high traffic sites often had so much data in there that the cleanup process would time out, and ultimately nothing would ever be removed. </p> <p>Cleaning out your sitelog is easy run “truncate table sitelog” in SSMS and you’re golden. <a href="https://stackoverflow.com/questions/17436175/disable-dnn-logging-to-sitelog-table" target="_blank">If you did this, also check out this SO question/answer for what else to do</a>.</p>
