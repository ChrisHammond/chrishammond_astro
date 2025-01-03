---
title: "DotNetNuke Sitemap integration for your modules"
author: Chris Hammond
publishDate: 2011-05-21T00:36:51
updateDate: 2024-05-15T05:28:18
tags: [ '350Z', 'Cars', 'DotNetNuke', 'Nissan', 'Project 350Z', 'Project350z', 'Project350zcom', 'SEO', 'Sitemap' ]
excerpt: "Learn how to easily implement a sitemap for your DNN modules following Chris Paterra's guide. Streamline SEO for your site with this simple integration."
url: /2011/dotnetnuke-sitemap-integration-for-your-modules  # Use the generated URL with year
---
<p>I have thought for a while now that I should do some SiteMap integration for a couple of modules, but I honestly never got around to getting it done.</p>  <p align="left">Something triggered my need yesterday, and I got rolling with things rather quickly. <a href="http://www.dotnetnuke.com/Community/Blogs/tabid/825/EntryId/2666/Creating-a-Sitemap-Provider-For-Your-Module.aspx" target="_blank">Chris Paterra has a great post on how to implement a sitemap for your modules</a>, I ended up implementing one for the <a href="http://dnnsimplearticle.codeplex.com" target="_blank">DNNSimpleArticle</a> module which powers the homepage of Solo2.org and SCCAForums.com. I also implemented it for the module that powers <a href="https://www.chrishammond.com">chrishammond.com</a>, <a href="https://www.project350z.com" target="_blank">Project350z.com</a> and DomoticsBlog.com</p>  <p align="left">The basics are pretty straight forward for getting a SiteMap integrated with your custom modules. I won't recreate Chris' blog post here, but basically you need to create a new class, and populate a list of SiteMapUrls. Depending on your module, and it's content, that may or may not be difficult.</p>  <p align="left">I think I'm going to implement the sitemap for the next release of the Wiki module, should be fairly straight forward.</p> 

