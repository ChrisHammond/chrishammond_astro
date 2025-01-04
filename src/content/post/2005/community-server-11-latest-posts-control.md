---
title: "Community Server 1.1 Latest Posts control"
author: Chris Hammond
publishDate: 2005-07-18T09:22:00
updateDate: 2024-05-17T20:42:05
tags: [ 'Community Server', 'Development', 'SEO', 'Site News', 'Technology' ]
excerpt: "Learn how to enhance your website with a custom forum posts control by downloading and implementing this convenient tool on SCCAForums.com. #webdevelopment #controls"
url: /2005/community-server-11-latest-posts-control  # Use the generated URL with year
---
<p>I took the latest forum posts control from Christian Nordbakk and turned it into a control to use on SCCAForums.com</p>  <p>The differences are that my control</p>  <ul>  <li>displays the latest post made&nbsp;</li>  <li>links to the last post made instead of the first</li>  <li>shows the user who made the last post</li>  <li>shows the forum the post was made in</li> </ul>  <p>You can change some of the settings for this control such as the number of posts returned, by looking at the GetThreads() method in the code.</p>  <p>If you want to use this control please feel free to do so. <a href="https://gist.github.com/ChrisHammond/7863717a110784387c28f7df40ab9bc1">You&#39;ll need to download the control here</a> (rename it from latestforumsposts.txt to latestforumposts.ascx) and place it in the <u>root of your CS folder, </u>eventually I&#39;ll get around to making this control part of my CJHControls package, but for now you can just use it as is. It won&#39;t work in the themes/default/skins/ folder without some further changes.</p>  <p>To put it on your main page you need to add the following to the top of your default.aspx file</p>  <p>&lt;%@ Register TagPrefix=&quot;LatestForumPostsControl&quot; TagName=&quot;LatestForumPosts&quot; SRC=&quot;LatestForumPosts.ascx&quot; %&gt;</p>  <p>and then add this line to the page</p>  <p><latestforumpostscontrol:latestforumposts id="Latestforumposts1" name="Latestforumposts1" runat="Server">&lt;LatestForumPostsControl:LatestForumPosts Runat=&quot;Server&quot; ID=&quot;Latestforumposts1&quot; NAME=&quot;Latestforumposts1&quot;/&gt;</latestforumpostscontrol:latestforumposts></p> 


