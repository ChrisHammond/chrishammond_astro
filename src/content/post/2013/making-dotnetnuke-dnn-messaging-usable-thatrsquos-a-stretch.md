---
title: "Making DotNetNuke (DNN) Messaging Usable, that&rsquo;s a stretch"
author: Chris Hammond
publishDate: 2013-03-29T00:24:23
updateDate: 2013-03-29T00:25:56
tags: [ 'DotNetNuke', 'Languages', 'Messaging', 'SCCAForums' ]
<<<<<<< HEAD
excerpt: "Explore ways to improve messaging in DotNetNuke and learn simple hacks to enhance its stagnant features for a better user experience."
=======
excerpt: "Learn how to improve messaging in DotNetNuke by making changes to Language Resource files, adding hyperlinks to emails & more. Click to read further!"
>>>>>>> da72f53 (Updates with blog content and descriptions updated)
url: /2013/making-dotnetnuke-dnn-messaging-usable-thatrsquos-a-stretch  # Use the generated URL with year
---
<p><em>I’ll start this post off by stating a few things. One, I don’t work for DotNetNuke Corporation anymore, but I still love this project and will continue to work with it for the foreseeable future. That being said, expect tough love from me going forward.</em></p>  <p>The messaging feature was added in <a href="https://www.christoc.com/dotnetnuke" target="_blank">DotNetNuke</a> 6.2, and since then it might have seen a bug fix or two, but it like most other features added to DotNetNuke over the past 4 years, has remained stagnant and seen no additional enhancements.</p>  <p>If you would like to see some additional enhancements to the Message module please visit and vote for these items in the Community Voice on DotNetNuke.com <a href="https://www.dotnetnuke.com/Community/Community-Voice/ideaid/84.aspx" target="_blank">here</a>, <a href="https://www.dotnetnuke.com/Community/Community-Voice/ideaid/187.aspx" target="_blank">here</a>, <a href="https://www.dotnetnuke.com/Community/Community-Voice/ideaid/188.aspx" target="_blank">here</a></p>  <p>Now, how can you go about trying to improve the Messaging in DotNetNuke right now?</p>  <p>One of the biggest problems with the messaging module is the message that actually gets sent to the email address of the person receiving the message. It contains absolutely NO information on WHERE the message came from, other than the username of the person who sent it, in the SUBJECT of the email.</p>  <p>Nothing about the Portal/Website, not the name of the website, not a link to the website, or even a link to the messaging page of the site so that a user could respond if they wanted to. </p>  <p>So how can we improve this? Well, the only way that you can, without completely hacking the Messaging module (I am seriously considering a Fork of the module is necessary if DNNCorp doesn’t step up), is to make changes to the Language Resource files in your website. You will do this by following the steps below (for the images, click on them to see a larger view of what I am referring to)</p>  <p>Warning: Making these changes will also likely impact your “notification” emails in DNN, but in my case that is fine cause I still want to send people back to the Messaging/Notification area.</p>  <ol>   <li>Navigate to the Admin/Languages page (I did this as a super user)</li>    <li> <a href="/assets/images/PublishThumbnails//windows-live-writer/making-dotnetnuke-dnn-messaging-usable_13ed8/image_2.png" rel="lightbox[thispost]"><img title="image" style=" display: inline; background-image: none;" border="0" alt="image" src="/assets/images/PublishThumbnails//Windows-Live-Writer/Making-DotNetNuke-DNN-Messaging-Usable_13ED8/image_thumb.png" width="60" height="28" /></a>Click on the Pencil in the language editor under the HOST option (I didn’t use SYSTEM or SITE)    </li>    <li><a href="/assets/images/PublishThumbnails//Windows-Live-Writer/Making-DotNetNuke-DNN-Messaging-Usable_13ED8/image_4.png" rel="lightbox[thispost]"><img title="image" style="display: inline; background-image: none;" border="0" alt="image" src="/assets/images/PublishThumbnails//Windows-Live-Writer/Making-DotNetNuke-DNN-Messaging-Usable_13ED8/image_thumb_1.png" width="49" height="49" /></a>On the left side of the page click on the + next to Global Resources, then choose the GlobalResources (no space) option to edit that resource file.</li>    <li><a href="/assets/images/PublishThumbnails//Windows-Live-Writer/Making-DotNetNuke-DNN-Messaging-Usable_13ED8/image_6.png" rel="lightbox[thispost]"><img title="image" style="display: inline; background-image: none;" border="0" alt="image" src="/assets/images/PublishThumbnails//Windows-Live-Writer/Making-DotNetNuke-DNN-Messaging-Usable_13ED8/image_thumb_2.png" width="63" height="35" /></a>Navigate to the EMAIL_BODY_FORMAT.Text resource, I used the following Code in that resource in order to add a hyperlink back to the messages page on SCCAForums.com, you would obviously need to put in the URL for your own page/domain. I use URLMaster with extensionless URLs, you might need the .ASPX in yours.</li>    <ol>     <pre class="csharpcode">Subject: {0}&lt;br/&gt;     &lt;br/&gt; {1} &lt;br/&gt;&lt;br/&gt; To reply, visit &lt;a href=<span class="str">&quot;https://www.sccaforums.com/user-profile/messages/&quot;</span>&gt;SCCAForums.com Messages&lt;/a&gt; &lt;br/&gt;&lt;br/&gt; Please <span class="kwrd">do</span> not reply to <span class="kwrd">this</span> email.      </pre>     <style type="text/css">.csharpcode, .csharpcode pre { font-size: small; color: black; font-family: consolas, "Courier New", courier, monospace; background-color: #ffffff; /*white-space: pre;*/ } .csharpcode pre { margin: 0em; } .csharpcode .rem { color: #008000; } .csharpcode .kwrd { color: #0000ff; } .csharpcode .str { color: #006080; } .csharpcode .op { color: #0000c0; } .csharpcode .preproc { color: #cc6633; } .csharpcode .asp { background-color: #ffff00; } .csharpcode .html { color: #800000; } .csharpcode .attr { color: #ff0000; } .csharpcode .alt { background-color: #f4f4f4; width: 100%; margin: 0em; } .csharpcode .lnum { color: #606060; } </style></ol>    <li>Scroll to the bottom of the page and click on the Save Resource File option. This will generate a new GlobalResources.Host.resx file, that will include only the changed resource key we modified. The way DNN handles resource files is that it loads up the SYSTEM resource files (globalresources.resx) and then if there is a HOST file (globalresources.host.resx) any changes there, override those in the system file, then the SITE files (globalresources.portal-0.resx) is loaded (if available). </li> </ol>  <p>So, really I guess I should have told you to edit the SITE resource file, but I actually used the HOST file, because I only have one portal in the install, and I don’t have to worry about changing the URL for different portals, but if you had multiple portals in an install and you wanted this, you should edit the SITE resource file for each portal.</p>  <p>How can DotNetNuke Corporation make the Messaging module actually usable, more so than hacking RESX files?</p>  <ol>   <li>Add the ability to have Tokens in the email that is sent</li>    <li>Split the Messaging and Notification templates</li> </ol>  <p>Stay tuned to my blog here as I create posts like this, on how to make DotNetNuke better, maybe some of this will fall back into the core and posts like this won’t be necessary, but I don’t have much faith in that.</p>

<<<<<<< HEAD
=======

>>>>>>> da72f53 (Updates with blog content and descriptions updated)