---
title: "INETA Community Champion, Take 2"
author: Chris Hammond
publishDate: 2010-07-07T01:05:47
updateDate: 2024-07-09T17:54:53
tags: [ 'Awards', 'Software Development' ]
excerpt: "Discover how the INETA Community Champions program can elevate your .NET development journey. Learn how one developer leveraged APIs to streamline submission entries and received recognition for their community contributions."
url: /2010/ineta-community-champion-take-2  # Use the generated URL with year
---
<p>Last week sometime, perhaps the week before, I got an email from INETA reminding me to get my submissions in for the INETA Community Champions contest for Q2 2010. I last entered Community Champion info for the Q4 2008 contest, in which I was graciously awarded a prize. Being ineligible for a year after winning I failed to keep up with all my various entries.</p>  <p>So the recent email got me going, I thought, boy I hope I can pull all my Community-Credit.com data over to the INETA Community Champions program, to which I found out you can't. The programs aren't currently linked, as they once were. That was a shame as I am pretty good about getting all my community related activities into Community-Credit.com, even though David Silverlight has basically had the site shutdown for over a year now, I figured if he ever turned it back on I would be all set!</p>  <p>I figured I would just get my Community-Credit info from the website manually and manually put it into the INETA Community Champions program, no such luck on that either. Something on www.community-credit.com is hosed because you can't pull up results for anything you've done since July of 2009, last month it was June of 2009, and next month it will be August of 2009.</p>  <p>So in comes the API for CC. I have a <a href="https://github.com/ChrisHammond/S8RCC" target="_blank">codeplex project</a> I created long ago for a simple <a href="https://www.dotnetnuke.com/" target="_blank">DotNetNuke</a> module that works with community-credit.com, I host an instance of the module on my site (on a restricted page of course) so that I can quickly enter all my activities via the API, which makes all my forum posting on DotNetNuke.com very easy to track. So I got to thinking, I know that the website is busted, but I wonder if the API itself works?</p>  <p>A few code tweaks to my module (uploaded to <a href="https://github.com/ChrisHammond/S8RCC" target="_blank">codeplex</a>, vs2010 project) and boom, I was able to easily pull back a list of all my community-credit submissions over a specified date range, even for time within the past 12 months.</p>  <p>Then it was just a matter of filtering through that list of info to get the INETA related activities, user group organization, newsletters, meetings, speaking engagements, etc. I had a busy year! Between moving to Colorado last August and starting a DotNetNuke user group in Denver, speaking there, at the Denver User Group, DevConnections last fall, then moving to California and starting up the Bay Area DNN User's Group and presenting at the Toronto DNN User Group, I had a lot of submissions to get caught up on. I also realized I completely left out my sessions at <a href="https://www.sdn.nl" target="_blank">SDN</a> in The Netherlands last December!</p>  <p>Nonetheless, yesterday I was honored to receive an email from INETA telling me that I was once again a Community Champion</p>  <p>What is an INETA Community Champion? Check out their website for more info. If you are active in the .NET development community I encourage you to get your submissions in for Q3 2010. It's a lot easier to enter them over time, as you do activities, then it is at the last minute, trust me!</p>  <p>Thanks again to INETA for putting on the Champs program. I look forward to trying to keep my activities up to date so that the next time I'm eligible I'm ready and waiting!</p>  <p>PS- if you are interested in checking out my <a href="https://github.com/ChrisHammond/S8RCC" target="_blank">CommunityCredit module on codeplex</a> feel free to get the source and start playing with it. It isn't pretty, and you likely will need to remove the Engage: Publish reference that is in there. In a future release I will likely pull that out of the project completely. It's the Blog engine that powers my website at <a href="https://www.chrishammond.com">www.chrishammond.com</a> and I think I just came up with a better way to get the info into community-credit.com for my blog posts ;)</p> 

