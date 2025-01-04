---
title: "How to put YouTube into your CS Blog"
author: Chris Hammond
publishDate: 2006-06-10T23:10:00
updateDate: 2008-01-23T16:51:00
tags: []
excerpt: "Learn how to embed a YouTube video in your blog using CommunityServer 2.0. Follow these steps to modify your config files and enable video embedding."
url: /2006/how-to-put-youtube-into-your-cs-blog  # Use the generated URL with year
---
<P><A href="https://sccaforums.com/blogs/christoc/archive/2006/06/10/Motor_Pull_Preperation_240Z.aspx">I was trying to get a YouTube video in one of my blogs today and ran into a few troubles. After some googling, and changes to config files I got it working</A>.</P> <P>For anyone else who's looking at how to do this here it is.</P> <P>Modify your communityserver.config file, in the markup/html section add the following.</P> <P>&nbsp;&nbsp;&nbsp;&nbsp;&lt;embed<BR>&nbsp;&nbsp;&nbsp; style="true"<BR>&nbsp;&nbsp;&nbsp; type="true"<BR>&nbsp;&nbsp;&nbsp; src="true"<BR>&nbsp;&nbsp;&nbsp; quality="true"<BR>&nbsp;&nbsp;&nbsp; bgcolor="true"<BR>&nbsp;&nbsp;&nbsp; scale="true"<BR>&nbsp;&nbsp;&nbsp; wmode="true"<BR>&nbsp;&nbsp;&nbsp; salign="true"<BR>&nbsp;&nbsp;&nbsp; FlashVars="true" <BR>&nbsp;&nbsp;&nbsp; width="true"<BR>&nbsp;height="true"&nbsp;&nbsp;/&gt;<BR>&nbsp;&nbsp;&nbsp; <BR>&nbsp;&nbsp;&nbsp;&lt;object<BR>&nbsp;&nbsp;&nbsp;&nbsp;width="true"<BR>&nbsp;&nbsp;&nbsp;&nbsp;height="true"&nbsp;&nbsp;&nbsp;&nbsp;/&gt;<BR>&nbsp;&nbsp;&nbsp;&lt;param<BR>&nbsp;&nbsp;&nbsp;&nbsp;name="true"<BR>&nbsp;&nbsp;&nbsp;&nbsp;value="true"&nbsp;&nbsp;&nbsp;&nbsp;/&gt;</P> <P>Don't forget to hit your web.config file after making the above changes. Warning, you're opening up your site to allow users to post content you may not want them to be able to post. This is for CommunityServer 2.0, I haven't tested for other versions.</P> Posted from <A href="https://weblogs.asp.net/christoc/">weblogs.asp.net/christoc</a>

