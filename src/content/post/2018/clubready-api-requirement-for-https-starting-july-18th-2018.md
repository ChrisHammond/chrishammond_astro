---
title: "ClubReady API Requirement for HTTPS starting July 18th, 2018"
author: weblogs.asp.net
publishDate: 2018-05-23T16:13:48
updateDate: 2018-05-23T16:13:48
tags: []
<<<<<<< HEAD
excerpt: "ClubReady is enhancing security by deprecating support for HTTP requests to its Public API from July 18th, 2018. Users must switch to HTTPS via TLS 1.2."
=======
excerpt: "ClubReady will deprecate support for non-secure HTTP requests to their API. Make sure to modify requests to HTTPS via TLS 1.2 before July 18th, 2018."
>>>>>>> da72f53 (Updates with blog content and descriptions updated)
url: /2018/clubready-api-requirement-for-https-starting-july-18th-2018  # Use the generated URL with year
---
<div><i>On July 18th, 2018, ClubReady will be deprecating support for non-secure HTTP requests to the ClubReady Public API, found at </i><a rel="nofollow" href="https://www.clubready.com/api/current/"><i>https://www.clubready.com/api/current/</i></a><i>&nbsp;</i></div> <div></div> <div>After this date you will no longer be able to make requests to ClubReady end points with the HTTP protocol.</div> <div></div> <div>All requests need to be modified before this date to utilize the HTTPS via TLS 1.2. Earlier versions of TLS (1.0, and 1.1) are no longer supported due to security vulnerabilities.</div> <h2><b>Live Test On June 27th</b></h2> <p>ClubReady will be testing this change in production, for 2 hours, starting at 1pm Central Time on Wednesday June 27th, 2018. This will allow us to implement the change, and log any requests that come in during that time so that we can identify requests that haven't been properly updated. If you haven't changed your calls by this date, any calls during this time frame will fail.</p> <h2><b>Does this impact me?</b></h2> <p>That question is best answered with another question, do you utilize the ClubReady API in any way? Typically this is done via a third party piece of software, an integration, that puts Leads from your website into your ClubReady application, or perhaps a Mobile app that uses the ClubReady for scheduling. If you haven't developed a custom tool to add leads into ClubReady, or a custom website to perform sales within ClubReady's API you likely don't have anything to worry about.</p> <h2><b>Why is ClubReady making this change?</b></h2> <p>To further enhance security of our systems, and your data, we are proactively making this change.&nbsp;</p> <h2><b>What if I'm using a different API?</b></h2> <p>If you are using <a rel="nofollow" href="https://www.clubready.com/api">https://www.clubready.com/api</a> this change will impact you just the same. We also recommend that you change your API path to be <a rel="nofollow" href="https://www.clubready.com/api/current/">https://www.clubready.com/api/current/</a> for all future requests.</p> <p></p> <a href="https://weblogs.asp.net:443/christoc/clubready-api-requirement-for-https-starting-july-18th-2018">Read More at weblogs.asp.net:443</a>

<<<<<<< HEAD
=======

>>>>>>> da72f53 (Updates with blog content and descriptions updated)