---
title: "Using jQuery in your content to add some flare to your DotNetNuke website"
author: Chris Hammond
publishDate: 2011-10-18T01:19:41
updateDate: 2024-03-11T16:29:51
tags: [ '350Z', 'Cars', 'Project 350Z', 'Project350z', 'Project350zcom' ]
excerpt: "Learn how to enhance your DotNetNuke website with custom features using simple jQuery. Explore ways to display random images and create a lightbox effect for your photos."
url: /2011/using-jquery-in-your-content-to-add-some-flare-to-your-dotnetnuke-website  # Use the generated URL with year
---
<p>With all of the changes to <a href="https://www.dotnetnuke.com/" target="_blank">DotNetNuke</a> 6, a lot can be lost in the fact that you actually maintain the content of your website, and while the maintenance UI has changed, the content that you present is still up to you. A CMS can only do so much for displaying you content, if you want to do some fancy things, branch out of your standard HTML.</p>  <p>I recently wanted to do a couple of things for my <a href="https://www.project350z.com" target="_blank">car website</a> (yes, I'm a car guy, so it is easy to use the website for examples).</p>  <ol>  <li>I wanted to have a random image loaded in the top portion of the pages of the website, changing, or randomly loading, on each page load (not rotating live on the page).</li>  <li>I wanted to display a list of recent photos on the home page, and when you click on one of them I wanted them to open up in a light box.</li> </ol>  <p>I could have done this in any number of ways, but I chose to implement some simple jQuery for each, below I will show you how.</p>  <p>First things first, the website uses my <a href="https://multifunction.codeplex.com/" target="_blank">free DotNetNuke skin, MultiFunction, available via Codeplex</a>. I have some example documentation on how to customize the CSS for the skin to make your site unique, feel free to check out the <a href="https://multifunction.codeplex.com/documentation" target="_blank">Documentation page</a> for those examples.</p>  <p><img height="1" src="https://feeds.feedburner.com/~r/dnndaily/~4/qXnz8ogDGXs" width="1" /></p> 


