---
title: "Migrating Codeplex Projects to GitHub fix!"
author: weblogs.asp.net
publishDate: 2017-10-09T22:28:39
updateDate: 2017-10-09T22:28:39
tags: []
excerpt: "Struggling to migrate Codeplex projects to GitHub? Find out how to locate the correct credentials for a successful migration in our latest blog post! #Codeplex #GitHub #migration"
url: /2017/migrating-codeplex-projects-to-github-fix  # Use the generated URL with year
---
<p>I’ve been trying for months to migrate my Codeplex Projects over to GitHub, but always got stuck at this step on GitHub (trying to get credentials for CodePlex:</p><p><a href="https://aspblogs.blob.core.windows.net/media/christoc/media/image_1DA58F82.png"><img width="415" height="239" title="image" style="display: inline; background-image: none;" alt="image" src="https://aspblogs.blob.core.windows.net/media/christoc/media/image_thumb_5510C212.png" border="0"></a></p><p>I enter my Codeplex username and password, but it always comes back and asks me for the credentials again, they never work.</p><p>Well it’s been YEARS since I’ve checked anything into Codeplex, and I remembered that back in the day, I had to connect with different credentials in TFS, so how do you find those?</p><ul><li>Navigate to the project in Codplex</li><li>Choose Source</li><li>Choose the “Connect” option<br /><a href="https://aspblogs.blob.core.windows.net/media/christoc/media/image_4504840C.png"><img width="244" height="48" title="image" style="margin: 0px; display: inline; background-image: none;" alt="image" src="https://aspblogs.blob.core.windows.net/media/christoc/media/image_thumb_4B4B5A9A.png" border="0"></a></li><li>Look at the Username field, in my case it was SND\SOMETHING_CP</li></ul><p>Using that username and my normal CodePlex password, I was finally able to get the migration completed for one of my projects, only 21 more to go….</p> <a href="https://weblogs.asp.net:443/christoc/CodeplexToGithub">Read More at weblogs.asp.net:443</a>


