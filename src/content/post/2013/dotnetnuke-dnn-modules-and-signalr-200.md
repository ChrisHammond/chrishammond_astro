---
title: "DotNetNuke, DNN, Modules and SignalR 2.0.0"
author: Chris Hammond
publishDate: 2013-11-03T22:33:03
updateDate: 2013-11-03T22:33:03
tags: [ 'DNN', 'dnnCHAT', 'DotNetNuke', 'SignalR' ]
excerpt: "Explore the major changes in the first official SignalR 2.0.0 release and learn how to upgrade your SignalR package via Nuget to enhance your DNN modules."
url: /2013/dotnetnuke-dnn-modules-and-signalr-200  # Use the generated URL with year
---
In October, the SignalR project had their first official 2.0.0 release, and with that comes a number of changes to make your modules work with SignalR. You can upgrade your SignalR package via Nuget. You can find a guide to upgrading your projects at&nbsp;https://www.asp.net/signalr/overview/signalr-20/getting-started-with-signalr-20/upgrading-signalr-1x-projects-to-20 A couple of big changes that I found.      .NET 4.5 is required (the DNNCHAT module was already on 4.5)     The way Hubs are mapped/routed has changed to use OwinStartup (see documentation in the link above, or this page for DNNChat)  Since the 2.0.0 release of SignalR, there has been a new release of Microsoft.Owin (2.0.1). It appears that the SignalR code is compiled against Microsoft.Owin 2.0.0 and will not work out of the box in DNN anymore. Due to the way that DNN loads the class libraries (assemblies) inside of the APP (DNN) you need to add some extra information to the web.config in the root of the DNN website. &nbsp; &nbsp; &nbsp; &lt;dependentAssembly&gt; &nbsp; &nbsp; &nbsp; &nbsp; &lt;assemblyIdentity name="Microsoft.Owin" publicKeyToken="31bf3856ad364e35" culture="neutral" /&gt; &nbsp; &nbsp; &nbsp; &nbsp; &lt;bindingRedirect oldVersion="0.0.0.0-2.0.1.0" newVersion="2.0.1.0" /&gt; &nbsp; &nbsp; &nbsp; &lt;/dependentAssembly&gt; &nbsp; &nbsp; &nbsp; &lt;dependentAssembly&gt; &nbsp; &nbsp; &nbsp; &nbsp; &lt;assemblyIdentity name="Microsoft.Owin.Security" publicKeyToken="31bf3856ad364e35" culture="neutral" /&gt; &nbsp; &nbsp; &nbsp; &nbsp; &lt;bindingRedirect oldVersion="0.0.0.0-2.0.1.0" newVersion="2.0.1.0" /&gt; &nbsp; &nbsp; &nbsp; &lt;/dependentAssembly&gt;   &nbsp; For now you can manually add that to your web.config file, I plan to make the dnnCHAT module add it automatically on install/upgrade, but haven't come up with the .DNN manifest code for that yet. Currently, the source code for dnnCHAT on GitHub uses SignalR 2.0, but the latest release of DNNCHAT still uses an older release.




