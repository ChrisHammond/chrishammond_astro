---
title: "Adding Facebook Comments using Razor in DotNetNuke"
author: Chris Hammond
publishDate: 2011-03-14T02:49:08
updateDate: 2011-03-14T02:49:08
tags: []
excerpt: "Learn how to integrate Facebook Comments into your DotNetNuke site! Follow our guide for adding comments to individual articles using Razor and the Razor Host module. #DotNetNuke #Razor #Facebook"
url: /2011/adding-facebook-comments-using-razor-in-dotnetnuke  # Use the generated URL with year
---
<p>The other day I posted on how to add the new <a href="https://www.dotnetnuke.com/Resources/Blogs/tabid/825/EntryId/2995/Integrating-Facebook-Comments-into-your-DotNetNuke-Pages.aspx">Facebook Comments</a> to your <a href="https://www.dotnetnuke.com">DotNetNuke</a> website. This worked okay for basic modules that only had one content display, but for a module like <a href="https://dnnsimplearticle.codeplex.com" target="_blank">DNNSimpleArticle</a> this didn’t work well as the URLs for each article didn’t come across as individual URLs because of the way the Facebook code is formatted. When displaying the Comments I also only wanted to show them on individual articles, not on the main article listing.</p>  <p>There is actually a pretty easy fix though, a number of options, you could write a very simple module to do this, you could embed some of this into your Skin, or the method I chose. I wanted to make this work using Razor with the new Razor Host module in DotNetNuke 5.6.1.</p>  <p>For instructions on how to get the Razor Host module installed you should watch the following Video.</p>  <div class="tags">Tags: DotNetNuke;Razor;Facebook;</div><div class="category">Category: <a href=https://www.dotnetnuke.com/Resources/Blogs/tabid/825/CatID/16/Default.aspx>Community</a></div><div class="category">Category: <a href=https://www.dotnetnuke.com/Resources/Blogs/tabid/825/CatID/5/Default.aspx>Extension Forge</a></div><div class="category">Category: <a href=https://www.dotnetnuke.com/Resources/Blogs/tabid/825/CatID/6/Default.aspx>Reference</a></div><div class="category">Category: <a href=https://www.dotnetnuke.com/Resources/Blogs/tabid/825/CatID/9/Default.aspx>Development</a></div><img src="https://feeds.feedburner.com/~r/dnndaily/~4/9waakQR_pgU" height="1" width="1"/>


