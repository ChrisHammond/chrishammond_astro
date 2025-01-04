---
title: "Scrubbing a DotNetNuke Database for user info and passwords"
author: Chris Hammond
publishDate: 2011-02-08T02:34:05
updateDate: 2011-02-08T02:34:05
tags: []
excerpt: "Learn the steps to safely send a backup of your DotNetNuke database for testing without risking your data. Backup, restore, scrub, and shrink for security! #DotNetNuke #Database #Security"
url: /2011/scrubbing-a-dotnetnuke-database-for-user-info-and-passwords  # Use the generated URL with year
---
<p>If you’ve ever needed to send a backup of your <a href="https://www.dotnetnuke.com">DotNetNuke</a> database to a developer for testing, you likely trust the developer enough to do so without scrubbing your data, but just to be safe it is probably best that you do take the time to scrub.</p>  <p>Before you do anything with the SQL below, make sure you have a backup of your website! I would recommend you do the following.</p>  <ol>   <li>Backup your existing production database </li>    <li>Restore a backup of your production database as a NEW database </li>    <li>Run the scripts below on the NEW database </li>    <li>Shrink the NEW database </li>    <li>Backup the NEW database </li> </ol>  <div class="tags">Tags: DotNetNuke;Database;Administration;Admin;SQL;DB;Shrink;Backup</div><div class="category">Category: <a href=https://www.dotnetnuke.com/Resources/Blogs/tabid/825/CatID/6/Default.aspx>Reference</a></div><div class="category">Category: <a href=https://www.dotnetnuke.com/Resources/Blogs/tabid/825/CatID/2/Default.aspx>User Experience</a></div><div class="category">Category: <a href=https://www.dotnetnuke.com/Resources/Blogs/tabid/825/CatID/9/Default.aspx>Development</a></div><div class="category">Category: <a href=https://www.dotnetnuke.com/Resources/Blogs/tabid/825/CatID/10/Default.aspx>Security</a></div><img src="https://feeds.feedburner.com/~r/dnndaily/~4/g1JbtBtt5rg" height="1" width="1"/>


