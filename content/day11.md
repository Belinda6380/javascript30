+++
title = "Custom HTML5 video player 📺"
type = "demo"
layout = "single"
day = "11"
screenshot = "Video player"
+++

* {{< code ":fullscreen" >}} pseudo class
* {{< code "step" >}} attribute for slider elements
* that you can call {{< code "querySelector()" >}} on node/object variables
* {{< code "video" >}} element {{< code "paused" >}} property
* accessing data attributes with {{< code "dataset" >}}
* {{< code "parseFloat()" >}} method
* {{< code "timeupdate" >}} video event
* using ES6 function arrow notation to check if a variable is set to true before continuing running the function

While still a bit iffy on arrow functions (and it's clear that's an area I need to revise in-depth), I was able to build out additional functionality with a mute button. The button uses a little speaker emoji to indicate the status of the mute, and is linked to the adjacent volume slider which also mutes when it reaches zero while saving its current state. I found this challenging at first, before realising the video's volume remains at its value, regardless of the video's mute status.

I also added a restart playback button.