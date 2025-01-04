---
title: "DotNetNuke Tip #15, Running a webservice inside of a DNN site."
author: Chris Hammond
publishDate: 2006-08-21T13:58:00
updateDate: 2008-01-23T16:51:02
tags: []
excerpt: "Learn how to run a webservice inside DotNetNuke with this easy fix. Create a virtual directory, copy BIN files, and modify web.config for seamless integration."
url: /2006/dotnetnuke-tip-15-running-a-webservice-inside-of-a-dnn-site  # Use the generated URL with year
---
<p>Perhaps you need to run a webservice inside an instance of DotNetNuke. If you&#39;ve tried by just copying the webservice directory out there you&#39;ve probably been frustrated with the result.</p><p>The fix is pretty darn simple. First thing, create a virtual directory in IIS for your web service folder.</p><p>Second, copy the BIN files from the DotNetNuke/bin folder to the webservice/bin folder.</p><p>In the webservice web.config file add the following to System.web</p><p><font size="2">&lt;httpModules&gt;<p>&lt;clear /&gt;</p><p>&lt;/httpModules&gt;</p><p>That will clear out the httpModules that DNN loads, thus allowing your webservice to run on it&#39;s own.</p></font></p><p>&lt;clear /&gt;</p><p>&lt;/httpModules&gt;</p><p>That will clear out the httpModules that DNN loads, thus allowing your webservice to run on it&#39;s own.</p> Posted from <A href="https://weblogs.asp.net/christoc/">weblogs.asp.net/christoc</a>

