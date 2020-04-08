## Description

This is a simple module that can be used to list connected serial devices on a Linux based OS.



## Usage

### Installation

`npm install serial-list`

### Require

`const serialList = require('serial-list')`

### Methods

#### list

`serialList.list()`

Returns a promise that when resolved returns a result array.

`[
  'cu.Device-1',
  'cu.Device-2',
  'cu.usbmodem1234'
]`

