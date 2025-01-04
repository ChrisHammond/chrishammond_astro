---
title: "DotNetNuke 6 Upgrade and the RadEditor Provider"
author: Chris Hammond
publishDate: 2011-07-21T02:41:10
updateDate: 2011-07-21T02:41:10
tags: []
excerpt: "Excited about DotNetNuke 6? Learn how to add RadEditorProvider for an upgrade or new installation in a few easy steps. Improve your DNN experience now!"
url: /2011/dotnetnuke-6-upgrade-and-the-radeditor-provider  # Use the generated URL with year
---
<p>So you are excited about <a href="https://www.dotnetnuke.com/" target="_blank">DotNetNuke</a> 6, yes? No? Well you should be! It was released today. If you are excited about the new TextProvider, the RadEditorProvider then you are going to love DotNetNuke 6. Unless of course you are doing an upgrade, then unfortunately you won’t get the provider!</p>  <p>Why? Well, unfortunately a slight oversight in the packaging process missed the RadEditorProvider in the Upgrade package. But never fear, the fix is simple!</p>  <p>First, if you haven’t upgraded yet, download both the Upgrade and Install package for DotNetNuke 6. Extract the Upgrade package as you normally would. Before using it though, dig into the INSTALL package, go into the Install folder, the Provider folder, and copy the RadEditorProvider_06.00.00_Install.zip file. Paste that file into the Upgrade Package/Install/Provider folder.</p>  <p>Now proceed with the upgrade as you normally would. (Backup, backup, backup, backup). If you need help doing an upgrade, <a href="https://www.dotnetnuke.com/Resources/Wiki/Page/Upgrading-DotNetNuke.aspx" target="_blank">read the DotNetNuke Wiki</a>!</p>  <p>If you have already upgraded your site to DNN6, you simply need to upload the RadEditorProvider via the Host/Extensions page.</p>  <p>Once you have the Provider installed, you can go to the Host/HTML Editor Manager page. There you can choose the DotNetNuke.RadEditorProvider to get it configured!</p>

