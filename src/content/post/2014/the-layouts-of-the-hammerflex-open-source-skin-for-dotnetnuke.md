---
title: "The Layouts of the HammerFlex open source skin for DotNetNuke"
author: Chris Hammond
publishDate: 2014-02-25T01:02:56
updateDate: 2014-02-25T01:36:54
tags: [ 'Content Management System', 'DNN', 'DotNetNuke', 'Free', 'HammerFlex', 'Layout', 'Open Source', 'Panes', 'Skin', 'Template' ]
excerpt: "Discover how to maximize HammerFlex open source skin for DNN! Learn about its Bootstrap framework, responsive layout, and module placement options for a seamless user experience. Download HammerFlex now and submit your suggestions on GitHub."
url: /2014/the-layouts-of-the-hammerflex-open-source-skin-for-dotnetnuke  # Use the generated URL with year
---
<p>One of the things I've failed to do with my latest free open source skin, <a href="https://www.christoc.com/Projects/HammerFlex" target="_blank">HammerFlex</a>, for DNN is provide a good overview of how to utilize the skin. To really understand a skin, one must know the layout, and the thought process behind the layout (panes). </p> <p>The HammerFlex skin uses Bootstrap (<a href="https://getbootstrap.com">https://getbootstrap.com</a>) to provide a responsive structure. This blog post provides an overview of the desktop browser version of the skin, the way bootstrap works, and the skin is designed, if you &ldquo;shrink&rdquo; the screen size, you will see the Panes fall into a single column layout. You can see this by going to a site using <a href="https://www.christoc.com/Projects/HammerFlex" target="_blank">HammerFlex</a> and shrinking the width of your browser.</p> <p>Bootstrap uses a Grid system, essentially consisting of 12 columns, and you can then break up your &ldquo;rows&rdquo; into any combination of these columns, to control the width of the columns on your page, or in DNN terms, to control the Panes available for placing modules. HammerFlex provides you a variety of rows providing different width columns. You do not have to put a module in every pane in a skin, many of the pages I use only have a module in one or two panes. </p> <p>Rather than describing each row individual you will find diagrams of the two Layouts for the <a href="https://www.christoc.com/Projects/HammerFlex" target="_blank">HammerFlex</a> skin, the Home and Edit layouts, below. The primary difference for the Edit skin is that the ContentPane (the default pane that modules go into) is full width (col-md-12).</p> <p>Home.ascx (Home Skin Layout) Click for a larger view</p> <div id="blogimages"> <p><a href="/assets/images/PublishThumbnails/WindowsLiveWriter/thelayoutsofthehammerflexopensourceskinf_14f79/homeskin-layout_2.jpg" title="HammerFlex Home Skin Layout"><img title="HomeSkin-Layout" style="border: 0px solid; display: inline;" alt="HomeSkin-Layout" src="/assets/images/PublishThumbnails//WindowsLiveWriter/TheLayoutsoftheHammerFlexopensourceskinf_14F79/HomeSkin-Layout_thumb.jpg" width="573" height="293" /></a> </p> <p>Edit.ascx (Edit Skin Layout) Click for a larger view</p> <p><a href="/assets/images/PublishThumbnails//WindowsLiveWriter/TheLayoutsoftheHammerFlexopensourceskinf_14F79/Edit-Skin-Layout_2.jpg" title="HammerFlex Edit Skin Layout"><img title="Edit-Skin-Layout" style="border: 0px solid; display: inline;" alt="Edit-Skin-Layout" src="/assets/images/PublishThumbnails//WindowsLiveWriter/TheLayoutsoftheHammerFlexopensourceskinf_14F79/Edit-Skin-Layout_thumb.jpg" width="573" height="293" /></a></p> </div> <p>Be sure to download the <a href="https://www.christoc.com/Projects/HammerFlex" target="_blank">HammerFlex</a> skin today! If you have any changes you'd like to see in the skin, you can <a href="https://github.com/ChrisHammond/HammerFlex" target="_blank">submit a Pull request over on GitHub</a>.</p>

