---
title: "How to use your Zune for external storage"
author: Chris Hammond
publishDate: 2006-11-28T02:38:00
updateDate: 2008-01-23T16:51:04
tags: [ 'SDK', 'Vista', 'Zune' ]
excerpt: "Learn how to use your Zune as external storage, and navigate your registry safely with these simple steps. Backup your registry before trying!"
url: /2006/how-to-use-your-zune-for-external-storage  # Use the generated URL with year
---
<p>While looking around for a Zune SDK this evening I found a way to use your Zune as an external storage device. I haven&#39;t yet tested this, so I can&#39;t guarantee it works yet.</p><p>Be sure to backup your registry before playing around with it.</p><ol start="1"><li>Make sure your Zune is not plugged in and your Zune software isn't running </li><li>open up regedit by going to the start menu and selecting &ldquo;run&rdquo;. Type regedt32 and hit &ldquo;OK&rdquo; </li><li>Browse to HKEY_LOCAL_MACHINE\System\ControlSet001\Enum\USB\ </li><li>Search for &ldquo;PortableDeviceNameSpace&rdquo;. This should be contained in the Vid_####&amp;Pid_####\########_-_########_-_########_-_########\Device Parameters within the above &hellip;\USB\ The ##'s listed here will be numbers and letters specific to your Zune </li><li>Change the following values: </li><ol start="1"><li>EnableLegacySupport to 1 </li><li>PortableDeviceNameSpaceExcludeFromShell to 0 </li><li>ShowInShell to 1 </li></ol><li>Plug in your Zune, and make sure the Zune Software starts up. </li><li>Hopefully at this point you can open up &ldquo;My Computer&rdquo; and browse your device, though it does NOT show up as a drive letter</li></ol><p>I found the information on ZuneBoards.com and Phaleux.com while looking around.</p><p>Still no word on when the Zune software will work with Vista.</p> Posted from <A href="https://weblogs.asp.net/christoc/">weblogs.asp.net/christoc</a>

