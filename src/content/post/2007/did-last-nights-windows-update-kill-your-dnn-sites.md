---
title: "Did last night's Windows Update kill your DNN sites?"
author: Chris Hammond
publishDate: 2007-07-11T10:54:00
updateDate: 2008-01-23T16:51:08
tags: [ 'aspnet', 'DotNetNuke', 'DotNetNuke Tips' ]
excerpt: "Learn how to fix DNN issues caused by recent .Net Security Patches. Replace curly quotes with standard quotes in Text/HTML module for a quick solution."
url: /2007/did-last-nights-windows-update-kill-your-dnn-sites  # Use the generated URL with year
---
<P>There apparently were two .Net Security Patches made available last night in WIndows Update. They are causing some problems with DNN, not sure which versions specifically, but I've seen issues reported in 4.3.6 and&nbsp; 4.3.5 so far.</P> <P>Sebastian posted this in a forum earlier today as fix for the Text/HTML module no longer working.</P> <P>in /controls/TextEditor.ascx line 9 replace id = ”celTextEditor” Runat=”Server” with id = <FONT style="BACKGROUND-COLOR: #ffff00">"</FONT>celTextEditor<FONT style="BACKGROUND-COLOR: #ffff00">"</FONT> Runat=<FONT style="BACKGROUND-COLOR: #ffff00">"</FONT>Server<FONT style="BACKGROUND-COLOR: #ffff00">"</FONT></P> <P><FONT size=+0>The issue being the CURLY quotes (I don't know the proper term and am too <S>lazy</S> busy&nbsp;to look it up). I had another client with the same problem, they had curly quotes in their skin file instead of normal "" quotes, with windows update last night the skin immediately broke.</FONT></P> <P><FONT size=+0>So if you're having some issues with your DNN sites, start looking for funky quotes and replacing them with standard quotes!</FONT></P> Posted from <A href="https://weblogs.asp.net/christoc/">weblogs.asp.net/christoc</a>

