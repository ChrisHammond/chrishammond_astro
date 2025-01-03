---
title: "New DotNetNuke Module Development Templates V2.2"
author: Chris Hammond
publishDate: 2013-04-03T23:55:52
updateDate: 2013-04-03T23:55:52
tags: [ 'C', 'DNN', 'DotNetNuke', 'Module', 'Module Development', 'Templates', 'VS2012' ]
excerpt: "Discover the latest updates in version 2.2 of the open-source DotNetNuke Module Development Templates, including major DLL location fixes and minor tweaks."

---
<p>I have released version 2.2 of my open source <a href="https://christoctemplate.codeplex.com/" target="_blank">DotNetNuke Module Development Templates</a>.</p>  <p>Version 2.2 is really just a minor update for the release, with a couple of fixes, one big, and the rest fairly small.</p>  <p>The big one is that the RELEASE build now puts the DLL for your projects into the website’s BIN folder instead of the local BIN folder. You would have seen this if you created a new project from one of the templates, and then immediately tried to do a RELEASE build, the packaging process would have failed saying it couldn’t find the DLL. If you built in DEBUG then release, the packaging process would work (though with the wrong DLL)</p>  <p>I upgraded the MSBuildTasks references to the latest 1.4.0.56 release from NUGET.</p>  <p>The final change, was modifications to the default namespaces, email address, URL, and company name for the templates. Being that the templates have always been called Christoc’s Module Development Templates, I renamed them to Christoc as the default. You can still customize the templates as you always have been able to do, for information on how to customize the templates <a href="https://www.chrishammond.com/blog/itemid/2618/customizing-the-latest-module-dev-project-template" target="_blank">read this blog post</a>.</p>  <p><a href="https://christoctemplate.codeplex.com/" target="_blank">So run off and download the templates</a>! </p>


