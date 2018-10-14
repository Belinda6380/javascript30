+++
title = "Drum kit 🎼"
type = "demo"
layout = "day01"
day = "01"
screenshot = "Drum kit"
+++

* {{< code "<kbd>" >}} element exists for keyboard input
* transition events and their objects
* that there are functions and properties available for specific elements e.g. {{< code ".play();" >}} and {{< code ".currentTime" >}}

It also took me a little while to realise that the numerical value of the {{< code "data-key" >}} attribute on the {{< code "<div>" >}} and {{< code "<audio>" >}} elements isn't technically the same *thing* as the {{< code "keyCode" >}} value generated from the {{< code "keyDown" >}} event - they're just the same number being used to link the two together.