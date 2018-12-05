+++
title = "Event capture, propagation, bubbling and once 💥"
type = "demo"
layout = "single"
day = "25"
screenshot = "Nested rectangles"
+++

* The concept of 'bubbling' - triggering events on all parent elements in the document
* 'Capturing' goes top-down; 'bubbling' goes back up
* Passing a third argument in a event listener is an 'options' object and you can set if you want it to fire on the capturing
* {{< code "stopPropagation()" >}} method will stop the bubbling up
* The 'once' option - which unbinds the event listener

Not much in the actual demo for this one but the concepts are very useful.