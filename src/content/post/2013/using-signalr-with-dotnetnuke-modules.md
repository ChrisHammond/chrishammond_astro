---
title: "Using SignalR with DotNetNuke Modules"
author: Chris Hammond
publishDate: 2013-03-25T01:58:49
updateDate: 2013-03-25T09:53:47
tags: [ 'aspnet', 'Chat', 'Development', 'DNN', 'DotNetNuke', 'Module', 'Module Development', 'SignalR' ]
<<<<<<< HEAD
excerpt: "Learn how to leverage SignalR in your DotNetNuke modules for real-time web application communication. Explore this basic tutorial on GitHub."
=======
excerpt: "Learn how to integrate SignalR with custom DotNetNuke Modules with this tutorial, guiding you through installation, setup, and creating a basic Chat module."
>>>>>>> da72f53 (Updates with blog content and descriptions updated)
url: /2013/using-signalr-with-dotnetnuke-modules  # Use the generated URL with year
---
<p>This post will provide you with a basic tutorial for utilizing SignalR with custom <a href="https://www.christoc.com/projects" target="_blank">DotNetNuke Modules</a>. If you want to bypass the blog post go check out the source on GitHub, you can <a href="https://github.com/ChrisHammond/DNN-SignalR" target="_blank">Fork my Repository</a>. The module created here will be very simple, if you want a full blown module with more features be sure to check out the open source <a href="https://www.christoc.com/dotnetnuke" target="_blank">DotNetNuke</a> Module <a href="https://signalrchat.codeplex.com" target="_blank">SignalRChat</a>, and see it in action at <a href="https://dnnCHAT.com/">https://dnnCHAT.com/</a> </p>  <p>SignalR is an ASP.NET library for using websockets and long polling in your applications. Basically what this means, is that you can have your web pages (or apps) maintain an open connection with a webserver, passing data back and forth, without having to do standard posts and gets for the content and functions. SignalR is a free library that you can get from <a href="https://www.signalr.net">www.signalr.net</a> and you can DL from <a href="https://www.nuget.org">nuget.org</a> right into your Visual Studio projects.</p>  <p>With my new daytime job I had the need to dive deeply into the pool that is SignalR, so I figured what better way to do that than try to create a <a href="https://www.dotnetnuke.com" target="_blank">DotNetNuke</a> module that would use SignalR. There are plenty of Chat examples for SignalR, so I figured that would be a good place to start.</p>  <p>This post assumes you already have a DotNetNuke development environment setup locally at <a href="https://dnndev.me">https://dnndev.me</a>, and that you have my Visual Studio templates installed. If you don’t, head on over to the DNN Wiki <a title="https://www.dotnetnuke.com/Resources/Wiki/Page/development-environment.aspx" href="https://www.dotnetnuke.com/Resources/Wiki/Page/development-environment.aspx">https://www.dotnetnuke.com/Resources/Wiki/Page/development-environment.aspx</a></p>  <p>To start, you should create a new DotNetNuke module using my templates, <a href="https://christoctemplate.codeplex.com">https://christoctemplate.codeplex.com</a>, I used the C# DAL template, but you can use any of the C# templates. The DAL template has less information that will need to be removed than if you use the DAL2 template, the DAL2 template actually has a working sample in it). I called the module I used for this blog <strong>DNNSignalR</strong>, but you can name yours whatever you want. </p>  <h2>Install SignalR</h2>  <p>Install SignalR into the project using NUGET. To do this open your Package Manager Console (found under Tools/Library Package Manager) in Visual Studio 2012. In the Console run the following line</p>  <blockquote>   <p>Install-Package Microsoft.AspNet.SignalR</p> </blockquote>  <p>This will download the SignalR resources into a Packages folder inside of your module’s folder. SignalR provides a variety of resources that will be utilized, as well as an older version of jQuery which will not be used.</p>  <h2>Add a Reference</h2>  <p>In your project add a reference to DotNetNuke.Web.DLL in the website’s BIN folder, this will allow you to use the Route Mapping in DNN 7.</p>  <h3>Map the Route</h3>  <p><a href="/assets/images/PublishThumbnails//windows-live-writer/using-signalr-with-dotnetnuke-modules_11bd5/image_2.png" rel="lightbox[thispost]"><img title="image" style="float: right; display: inline; background-image: none;" border="0" alt="image" align="right" src="/assets/images/PublishThumbnails//Windows-Live-Writer/Using-SignalR-with-DotNetNuke-Modules_11BD5/image_thumb.png" width="244" height="106" /></a>In order for SignalR to work in DNN7, you need to tell DNN how to handle requests to the path /signalr/hubs/ that path won’t physically exist, due to the way the service framework in DNN7 works this is actually very easy to do. </p>  <p>Add a class to your project called RouteMapper.cs using the code in the screenshot here. (In the sample code check out the /components folder)</p>  <p><strong>Note:</strong> If you are using URLMaster, you will need to add <strong>|/signalr </strong>to the end of the <strong>doNotRewriteRegex </strong>setting on the Regex Settings tab of the URLMaster Friendly URL Settings module (under the HOST menu).</p>  <h2>Create the ChatHub</h2>  <p><a href="/assets/images/PublishThumbnails//Windows-Live-Writer/Using-SignalR-with-DotNetNuke-Modules_11BD5/image_4.png" rel="lightbox[thispost]"><img title="image" style="float: right; display: inline; background-image: none;" border="0" alt="image" align="right" src="/assets/images/PublishThumbnails//Windows-Live-Writer/Using-SignalR-with-DotNetNuke-Modules_11BD5/image_thumb_1.png" width="244" height="133" /></a>The ChatHub.cs class will be the listener on the SignalR side, “clients” (the view of the module) will send to that chathub using the Send method. The Hub will then broadcast that information back out to all connected clients using the addMessage javascript function, implemented in view.ascx later in this post. In this example ChatHub is really simple, but you’ll find that this class will likely be fairly complex as you start to build our the ability to send messages to different “Groups”, which is supported by SignalR.</p>  <h2>Creating the View Control</h2>  <p>The View Control in this DotNetNuke module is going to be pretty simple, but it also does everything for the module. It will communicate with the ChatHub, with communication happening in both directions. The first thing we’re going to add to the View control are two JS references. You can do this in a number of ways with DotNetNuke, but the easiest way (not necessarily the best) is to just put them in the ASCX file </p>  <p><a href="/assets/images/PublishThumbnails//Windows-Live-Writer/Using-SignalR-with-DotNetNuke-Modules_11BD5/image_12.png" rel="lightbox[thispost]"><img title="image" style="display: inline; background-image: none;" border="0" alt="image" src="/assets/images/PublishThumbnails//Windows-Live-Writer/Using-SignalR-with-DotNetNuke-Modules_11BD5/image_thumb_5.png" width="601" height="71" /></a></p>  <p><a href="/assets/images/PublishThumbnails//Windows-Live-Writer/Using-SignalR-with-DotNetNuke-Modules_11BD5/image_8.png" rel="lightbox[thispost]"><img title="image" style="float: right; display: inline; background-image: none;" border="0" alt="image" align="right" src="/assets/images/PublishThumbnails//Windows-Live-Writer/Using-SignalR-with-DotNetNuke-Modules_11BD5/image_thumb_3.png" width="352" height="130" /></a>After that we’re going to add the JavaScript that communicates with the ChatHub. The important parts here are the addMessage definition, which will be called by the Hub when a clients submits a chat message, and the start() method which we fire and then wire up the click handler for the linkSubmit hyperlink. The addMessage method will be called by the ChatHub “server” whenever any “client” clicks on the linkSubmit hyperlink. The server sends whatever the messages is to all clients, and it will then be rendered into the browser.</p>  <p><a href="/assets/images/PublishThumbnails//Windows-Live-Writer/Using-SignalR-with-DotNetNuke-Modules_11BD5/image_10.png" rel="lightbox[thispost]"><img title="image" style="float: left; display: inline; background-image: none;" border="0" alt="image" align="left" src="/assets/images/PublishThumbnails//Windows-Live-Writer/Using-SignalR-with-DotNetNuke-Modules_11BD5/image_thumb_4.png" width="355" height="61" /></a>The HTML for the view control is pretty simple, with a single DNN:LABEL control that will tell the user where they can type. The INPUT file will take the message a user wants to send. The Hyperlink linkSubmit will be used for the click event to send the chat message, and finally the UL called “messages” will be used to display the received messages.</p>  <h2>View.ascx.resx</h2>  <p><a href="/assets/images/PublishThumbnails//Windows-Live-Writer/Using-SignalR-with-DotNetNuke-Modules_11BD5/image_16.png" rel="lightbox[thispost]"><img title="image" style="float: right; display: inline; background-image: none;" border="0" alt="image" align="right" src="/assets/images/PublishThumbnails//Windows-Live-Writer/Using-SignalR-with-DotNetNuke-Modules_11BD5/image_thumb_7.png" width="441" height="75" /></a>You can go ahead and define the fields shown in this screenshot in the app_localresources/view.ascx.resx file, these values will get populated by DNN in the label, and link on the page. </p>  <h2>Packaging and Installing the Module</h2>  <p>If you created the module using my module development templates, packaging the module is as easy as switching to Release mode in Visual Studio and compiling the module. Then from the DNN host/extensions page upload the module through the Install Extension Wizard. Once you’ve gone through that process you can place the module on a page.</p>  <h2>What the Module Does</h2>  <p>The module doesn’t do much, it really just takes a text entry and displays it on the page, you’ll need to open the page in two different browser to really test things out. You’ll notice that the messages are pretty simple and won’t tell you who they are from, but that’s okay, it was just&#160; quick and dirty sample module. If you want full blown chat functionality check out SignalRChat module demo’d at <a href="https://www.dnnchat.com">https://www.dnnchat.com</a>.</p>  <p>Hopefully this at least gets you started with SignalR though, using SignalR you’ll find that you can really empower your DNN modules to be responsive, without having to write a bunch of webservices to do so.</p>  <h2>Download the Source</h2>  <p align="left">The <a href="https://github.com/ChrisHammond/DNN-SignalR" target="_blank">Source Code samples</a> for this blog post are <a href="https://github.com/ChrisHammond/DNN-SignalR" target="_blank">available on GitHub</a></p>
