+++
title = "References vs copying 👥"
type = "demo"
layout = "single"
day = "14"
screenshot = ""
+++

* If you update an referenced array or object it will always reference back to the original
* Empty {{< code "slice()" >}} method with no arguments returns a copy of all the array data, {{< code "concat()" >}} and ES6 spread work similarly
* Using {{< code "assign()" >}} creates a copy for objects, but only 1 level deep
* Using {{< code "JSON.parse()" >}} and {{< code "JSON.clone()" >}} can make a deep copy but isn't recommended