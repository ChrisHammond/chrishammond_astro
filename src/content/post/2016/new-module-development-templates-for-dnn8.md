---
title: "New Module Development Templates for DNN8"
author: Chris Hammond
publishDate: 2016-01-20T20:29:36
updateDate: 2016-01-20T20:29:36
tags: [ 'DNN', 'DotNetNuke', 'Module', 'Open Source', 'Project Templates', 'Visual Studio', 'Visual Studio 2015' ]
excerpt: "Discover how DNN Platform 8 introduces SPA and MVC patterns, with enhanced module templates for Windows Azure. Learn more about the latest updates!"
url: /2016/new-module-development-templates-for-dnn8  # Use the generated URL with year
---
<p>With the release of DNN Platform 8 last week it is now possible to develop modules using SPA and MVC patterns within the DNN platform. As Part of the buildup of the DNN 8 release, <a href="https://www.willstrohl.com/" target="_blank">Will Strohl</a> provided a Pull request to my <a href="https://cjh.am/dnntemplates" target="_blank">DNN Extension Project Templates</a> project to help clean up some of the basic module templates to work better on Windows Azure environments, and to prep them for inclusion of new DNN 8 specific templates for SPA and MVC modules.</p> <p>Early in the fall Joe Brinkman provided a partial SPA project, with the intention of it becoming a project template. I had a little time when it was initially submitted to work on it, but wasn’t able to get everything squared away on the template until early December. It wasn’t until last week that I got additional time to do further testing on the template and fix a few issues that occurred during the conversion to a project template. </p> <p>On January 10th, I released the first iteration of the <a href="https://cjh.am/dnntemplates" target="_blank">DNN8 project templates for Visual Studio 2015</a>, this release included Will Strohl’s changes, my original templates, and the SPA template with fixes and customizations on what Joe Brinkman had provided. Later that week (Friday night to be exact) I went through the process of integrating the MIT licensed MVC template that Joe Brinkman had also created. I put this through a few rounds of testing, fixes, and <a href="https://github.com/ChrisHammond/DNNTemplates/releases/tag/v06.01.00-beta" target="_blank">released that on January 15</a>.</p> <p>As of now, the release is marked as a Beta on GitHub, but I would say that this is the one you should start with. As always if you have any feedback or questions, please let me know! </p> <h3>DNN8 Tutorials</h3> <p>With the release of DNN8 I put together a couple of quick video tutorials, with more coming in the next few weeks. </p> <p><a href="https://www.youtube.com/watch?v=kOoQJDeTlJ0" target="_blank">The first video is a DNN8 Installation Video</a>, this video shows you how to setup DNN8 in a local development environment using the local DNNDEV.ME url, this URL is embedded in the project templates, so if you want to use the templates it is suggested that you setup DNN in this way.</p> <p>The second video tutorial is a video on <a href="https://www.youtube.com/watch?v=dpiOs_EL-OY" target="_blank">how to find and install the Project templates using the Visual Studio Gallery</a>.</p> <h3>Where to Create the Project</h3> <p>The SPA template follows the same approach as all of the other module templates in the collection, you create the Module project under the /desktopmodules/ folder. The MVC template is a little different, this project should be created in the /desktopmodules/mvc/ folder, this is important as the PATH for the references and the build path for&nbsp; the DLL is setup for this, if you put the module elsewhere, it likely will not build, and will not work.</p> <p>One thing to keep in mind with the project templates in Visual Studio, occasionally VS will freak out upon project creation, and in IIS will turn the DesktopModules folder into a “virtual directory”, this causes the DNN website to fail to load. If the site fails to load for you after creating a project from these templates, to into the IIS Manager, expand the website, and see if there is a little “arrow” on the DesktopModules folder, if so, right click on it and choose delete. This should resolve the problem.</p> <h3>DNNCorp Project Templates</h3> <p>During the time it took me to get all the kinks worked out on the code that Joe submitted, DNN Corp decided that they would manage and release their own templates. Competition typically makes things better right? We shall see, my experience with Corp managing templates in the past was poor, they never bothered to do anything with them, thus the reason I started maintain templates myself. If they can maintain them it will be a good thing for the community, but I have been maintaining DNN templates for going on 6+ years now, and know how I like them, and how best to work within a very well defined and specific development process, so I will continue to develop and maintain my templates, and create tutorials for them.</p>
