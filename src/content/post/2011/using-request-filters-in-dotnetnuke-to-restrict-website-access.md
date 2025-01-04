---
title: "Using request filters in DotNetNuke to restrict website access"
author: Chris Hammond
publishDate: 2011-10-11T10:50:39
updateDate: 2011-10-11T10:50:40
tags: []
excerpt: "Learn how to block or allow specific IP addresses on your DotNetNuke website with Request Filters. Prevent spammers and secure your site effectively."
url: /2011/using-request-filters-in-dotnetnuke-to-restrict-website-access  # Use the generated URL with year
---
<p>Have you ever had the need to blog a range of IP Addresses from accessing your website? Or perhaps, setup a website that is only accessible to a specific range of IP Addresses? <a href="/" target="_blank">DotNetNuke</a> Request Filters are a great tool for getting such functionality configured, all configurable within your browser, without needing access to the settings in IIS.</p> <p>Before configuring the request filters, I’ll throw out an example of why you might do this. If your website has a forum, or other community type interface, you have likely experienced spammers trying to take advantage of these features. Sometimes these spammers come from a specific IP Address, or even a specific range of ip addresses. If that is the case, you may want to turn off your website for those IP Addresses.</p> <p>A word of warning, the instructions below are very powerful, if you aren’t careful, you could bring your website down. Read through the instructions before attempting to configure your website’s request filters.</p> <h2>Configuring your DotNetNuke website to be accessible from one IP Address</h2> <p>Here are the steps to configure request filtering for an IP Address, essentially making the website ONLY accessible to a person browsing from a computer using the defined IP address. All other addresses will redirect to DotNetNuke.com. (these instructions assume you are running on DotNetNuke 6+</p><img src="https://feeds.feedburner.com/~r/dnndaily/~4/CE6g6GhvlDk" height="1" width="1"/>


