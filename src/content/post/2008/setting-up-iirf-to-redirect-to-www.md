---
title: "Setting up IIRF to redirect to www"
author: Chris Hammond
publishDate: 2008-02-18T16:01:57
updateDate: 2024-06-20T19:50:28
tags: [ 'aspnet', 'C', 'communityserver', 'DotNetNuke' ]
excerpt: "So I have been doing some testing on my website and needed to redirect requests to https://chrishammond.com to https://www.chrishammond.com/. Lucky for me the site is using IIRF to manage my urls from the old community server days to my DotNetNuke conversion. "
url: /2008/setting-up-iirf-to-redirect-to-www  # Use the generated URL with year
---
<p>So I have been doing some testing on my website and needed to redirect requests to <a href="https://www.chrishammond.com">https://www.chrishammond.com</a> to <a href="https://www.chrishammond.com/">https://www.chrishammond.com/</a>. Lucky for me the site is using IIRF to manage my urls from the old <a href="https://www.chrishammond.com/blog/itemid/1045/conversion-process-from-communityserver-to-dotnetn">community server days to my DotNetNuke conversion</a>.</p>  <p>Using IIRF I&#39;m able to create a simple rule that will handle the redirects for me, I&#39;ve pasted it below.</p>  <p># force proper www. prefix on all requests<br /> RewriteCond %{HTTP_HOST} ^chrishammond\.com [I]<br /> RewriteRule ^/(.*) https://www.chrishammond.com/$1 [I,RP]</p> 
