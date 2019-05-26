# dcddfc-voting
Collect, Count, Display voting on drunken debates at Dragon*Con

We want to provide a mobile voting app to assit in tallying audience voting in an open,live event.

A key requriment is that wi-fi and cell networks are notoriously poor signal throughout Dragon*Con so for this event we will
need to run it on local hardware, connected to a local Wi-Fi network and provide for a public hotspot that attendees can
access in order to install and vote on the app....

So if you've got an interest in Hardware, Local Ops,  and Devops ..  please join!

We also have quite a tight release cycle.  Dragon*Con will happen Labor Day Weekend.

This means that iterations need to stay focused.
June:  ?
July: ?
Aug: ?

1) Can register my phone with the app.
   * Don't collect personal info (e.g. emails)
   * Stop vote fraud during each debate.
        * Each registered user gets one "vote" bucket.
        * Clever folks could clear cookies and vote again!
    MVP: Have Open / Close windows for registration before
    each debate?   That way once debate starts a device has
    one and only one "vote".  Do not accept new registrations
    during ongoing debates.   

    Any text to register could come with phone number,  but then we get into accessibility issues with network.  And what about costs of text? 

    ! What ever registation token, will need clustered storage support.  Want to be sure voter stays registered regardless of instance serving request.

2) Can choose a side in a debate
3) Can see current votes cast / votes per side
4) Can suggest a topic for debate
5) Admin can approve topic into queue
6) Admin can add debators names and info
7) Install App on local hardware (Raspberry Pi anyone?)
8) Connect to Wifi
9) Deploy and configure a local Wifi hotspot


