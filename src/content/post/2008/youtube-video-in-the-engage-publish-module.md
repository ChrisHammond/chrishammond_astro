---
title: "YouTube Video in the Engage: Publish module"
author: Chris Hammond
publishDate: 2008-03-26T15:09:30
updateDate: 2008-03-26T15:33:03
tags: [ 'DotNetNuke Tips' ]
excerpt: "Learn how to embed YouTube videos in Engage: Publish articles using standard HTML or the new 5.0.2 feature. Stay updated for more insider tips!"
url: /2008/youtube-video-in-the-engage-publish-module  # Use the generated URL with year
---
<p>So this is a little easter egg type feature for users of <a href="https://www.engagemodules.com/Modules/EngagePublish.aspx">Engage: Publish</a>.</p> <p>If you want to embed YouTube videos in your <a href="https://www.engagemodules.com/Modules/EngagePublish.aspx">Engage: Publish</a> articles you can do so with standard HTML, or you can use this new feature added to the 5.0.2 release of Publish.</p> <p>If you put [_youtube_:_######_] replacing the #### with a video ID such as pJbSDiaK8co, Publish will replace that with the proper HTML (Also remove the underscores, I had to put those in there so Publish wouldn't replace the text above)</p> <p>Example</p> <p>[youtube:pJbSDiaK8co]</p> <p>This is the first of what will eventually be a token framework in the Publish module. Through the use of Tokens you will be able to configure how a particular article/category displays on your website. Stay tuned for more insider Publish tips.</p> <p>One catch with the YouTube token, Publish will currently only replace on YouTube token per article, in a future release it will work for more than one per.</p> <p>There is a bug in 5.0.2 relating to this YouTube token, you must put it in lowercase for it to work.</p>

