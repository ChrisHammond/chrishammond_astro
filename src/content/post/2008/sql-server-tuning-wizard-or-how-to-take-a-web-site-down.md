---
title: "SQL Server Tuning Wizard, or How to take a web site down"
author: Chris Hammond
publishDate: 2008-03-11T15:19:12
updateDate: 2008-03-11T15:19:12
tags: [ 'aspnet', 'general Software Development', 'SQL' ]
excerpt: "Learn about optimizing SQL databases while avoiding common pitfalls. Discover how one user's choice led to a critical error and lessons learned."
url: /2008/sql-server-tuning-wizard-or-how-to-take-a-web-site-down  # Use the generated URL with year
---
<p>So today I was getting impatient with some of the load times on SCCAForums.com, so I decided to run the SQL profiler on the database to see if there were any suggested improvements to speed it up.</p> <p>I ran the tuning wizard and it came up with a suggest that would be a 93% improvement, sold, lets run the script!</p> <p>Fast forward, an hour later, when I go to make a post on the server and boom it fails. WTF? "Hey Dave, can you post and see if my ban on your account works". He gets the same error.</p> <p>Not good. Anyways, SQL server's tuning wizard created a view, and when applying an index to that view it setup a requirement for ARITHABORT ON to be set when inserting into the cs_posts table.</p> <p>It took me a while to fix it, but I think everything is back up and running now. I removed the index on the view that was created :(</p> <p>Lesson learned, don't just execute random SQL on your database, even if SQL server suggested it!</p>
