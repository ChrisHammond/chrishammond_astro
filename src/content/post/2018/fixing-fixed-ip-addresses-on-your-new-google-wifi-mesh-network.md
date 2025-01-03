---
title: "Fixing fixed IP addresses on your new Google Wifi mesh network"
author: Domotics Blog
publishDate: 2018-01-21T15:59:44
updateDate: 2021-01-27T16:34:53
tags: [ 'Domotics' ]
excerpt: Explore our journey of enhancing home internet coverage using Google Wifi. Learn from our challenges adapting fixed IP addresses to DHCP on the new network.

---
<p>I recently installed a mesh network in our house using Google Wifi, replacing an Asus RT-N66U that was powering the network for our entire house (2 story, with basement). We found that Wifi was weak in certain areas of the house, the RT-N66U was on the first floor in the middle of the house.</p><p>For the Google Wifi install, I ended up putting one unit in the basement, near where the modem is connected to the Charter Cable, one wired in the middle of the house where the Asus unit was, and one up in the attic above the second floor, also hardwired with previously ran Ethernet.</p><p>One of the things I read before the install was that with Google Wifi you need to have all your devices on dynamic DHCP instead of Fixed IPs, you can assign fixed IPs but it needs to be done after they are on the Google Wifi network. I read this, yet I ignored it, and paid the price. I had fixed IP addresses for 2 headless servers, my main PC, and 2 POE cameras outside of the house.</p><p>I realized my error as soon as I tried to remote into my file server, it was on a different networking (192.168.1.## instead of the new google network 192.168.86.##). I don’t have a monitor near that machine, or my other server, so getting into those machines and changing the IP address was going to be difficult.</p><p>Enter my OLD hardware. I realized I could still plug in the old hardware and get on the old network, remote to the devices and change the IP settings. Wrong. In setting up the SSIS on my Google Wifi network, I reused the exact same name, so connecting to that SSID with my Surfacebook (wifi only, no ethernet) wasn’t going to be easy. Instead I found an old Linksys router that had DD-WRT installed on it. I was able to reset that device, get it running on the old IP range. That allowed me to simply plug the devices into that system, and then I was able to have my remote connectivity to get into the unit and setup the new proper connections.</p> 


