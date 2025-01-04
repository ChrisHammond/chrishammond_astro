---
title: "DotNetNuke Daily Tip #3 6/26/06 "
author: Chris Hammond
publishDate: 2006-06-26T10:47:00
updateDate: 2008-01-23T16:51:01
tags: []
excerpt: "Learn how to clear search tables in DotNetNuke with this helpful tip from Chris Hammond on 6/26/2006. SQL commands included. Contact for more Daily Tips!"
url: /2006/dotnetnuke-daily-tip-3-62606-  # Use the generated URL with year
---
<P><A href="https://weblogs.asp.net/christoc/archive/tags/daily+tips/default.aspx"><STRONG>Check out all of the DotNetNuke Daily Tips from Chris Hammond.</STRONG></A></P> <P><STRONG>DotNetNuke Daily Tip for 6/26/2006 </STRONG></P> <P>During your development you may run across a time when you need to clear out the search tables for DotNetNuke's searching engine. Here's the SQL to do so.</P> <P>delete SearchItemWordPosition where SearchItemWordId in (select SearchItemWordId from SearchItemWord where SearchItemID in (select SearchItemId from SearchItem))&nbsp; <BR>delete SearchWord where SearchWordsId in (select SearchWordsId from SearchItemWord where SearchItemID in (select SearchItemId from SearchItem))&nbsp; <BR>delete SearchItemWord where SearchItemId in (select SearchItemId from SearchItem) delete SearchItem&nbsp; </P> <P><FONT size=1><FONT size=3>Thanks to Mark Gorla from <A href="https://www.engagesoftware.net/">Engage Software</A> for providing this tip.</FONT></FONT></P> <P><FONT size=1><FONT size=3>Do you have a question about DotNetNuke? Perhaps I can answer it here as a Daily DotNetNuke Tip! Email <A href="mailto:chris.hammond@dotnetnuke.com?subject=Daily Tips" temp_href="mailto:chris.hammond@dotnetnuke.com?subject=Daily Tips">chris.hammond at dotnetnuke.com</A>&nbsp;&nbsp;with your question! Be sure to put Daily Tips in the subject line.</FONT></P></FONT>

