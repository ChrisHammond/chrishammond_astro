---
title: "DNN 7.1 fails to load with OpenSearch from Xepient Solutions installed"
author: Chris Hammond
publishDate: 2013-07-14T20:45:33
updateDate: 2013-07-14T20:45:34
tags: [ 'DNN', 'DotNetNuke', 'Search', 'SQL' ]
excerpt: "Solve website loading issues after upgrade by addressing LuceneNet DLL errors and disabling tasks in the Xepient OpenSearch module with this SQL guide."
url: /2013/dnn-71-fails-to-load-with-opensearch-from-xepient-solutions-installed  # Use the generated URL with year
---
I was upgrading a customer's website this evening, in a test environment thankfully, and ran into a problem. The upgrade appeared to run successfully, minus one little issue with a primary key (in the 6.0.0 script). But after running the upgrade, the website wouldn't load. I kept getting an error in Chrome, and then finally started getting 503 errors as the server shut down the application pool completely. After doing a little digging I was able to track down an issue in the Windows Event Viewer where the application was erroring on a problem with the LuceneNet DLL, that pointed towards the Xepient OpenSearch module, so for now, to get the site up and running I turned off the Scheduled task in the SCHEDULE table for that module. You can use the SQL below if you want to disable your own task.&nbsp; USE AT YOUR OWN RISK  update Schedule set Enabled = 0&nbsp; where TypeFullName = 'XepientSolutions.XSSearchSpider.XSSearchSpider, XepientSolutions.XSSearchSpider'  This obviously will cause search issues, but for now I am just testing things out and I will figure out how I will address search before the site upgrade actually launches in production.




