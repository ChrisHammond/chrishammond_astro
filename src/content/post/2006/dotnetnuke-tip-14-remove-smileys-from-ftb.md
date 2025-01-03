---
title: "DotNetNuke Tip #14, Remove Smileys from FTB"
author: Chris Hammond
publishDate: 2006-08-18T16:20:00
updateDate: 2008-01-23T16:51:02
tags: []
excerpt: "Perhaps you&#39;re running a professional website and don&#39;t want your content authors entering smileys into their content? The latest version of DNN with the FreeTextBox provider by default allows anyone with FTB access to put smileys in their content.To remove the smiley toolbar button you&#39;ll need to recompile the Provider.Ftb3HtmlEditorProvider project.In the Ftb3HtmlEditorProvider.vb file go to Line #318 and comment that line out.Recompile the project and deploy the newly updated DotNetNuke.Ftb3HtmlEditorProvider.dll. Posted from..."
url: /2006/dotnetnuke-tip-14-remove-smileys-from-ftb  # Use the generated URL with year
---
<p>Perhaps you&#39;re running a professional website and don&#39;t want your content authors entering smileys into their content? The latest version of DNN with the FreeTextBox provider by default allows anyone with FTB access to put smileys in their content.</p><p>To remove the smiley toolbar button you&#39;ll need to recompile the Provider.Ftb3HtmlEditorProvider project.</p><p>In the Ftb3HtmlEditorProvider.vb file go to Line #318 and comment that line out.</p><p>Recompile the project and deploy the newly updated DotNetNuke.Ftb3HtmlEditorProvider.dll.</p> Posted from <A href="https://weblogs.asp.net/christoc/">weblogs.asp.net/christoc</a>
