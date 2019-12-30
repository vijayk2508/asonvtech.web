let $ = require('jquery');
let Alert = require('./alert');
let Button = require('./button');
let Carousel = require('./carousel');
let Collapse = require('./collapse');
let Dropdown = require('./dropdown');
let Modal = require('./modal');
let Popover = require('./popover');
let Scrollspy = require('./scrollspy');
let Tab = require('./tab');
let Toast = require('./toast');
let Tooltip = require('./tooltip');
let Util = require('./util');



/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.3.1): index.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

(() => {
  if (typeof $ === 'undefined') {
    throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.')
  }

  const version = $.fn.jquery.split(' ')[0].split('.')
  const minMajor = 1
  const ltMajor = 2
  const minMinor = 9
  const minPatch = 1
  const maxMajor = 4

  if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
    throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0')
  }
})()

module.exports = {
  Util,
  Alert,
  Button,
  Carousel,
  Collapse,
  Dropdown,
  Modal,
  Popover,
  Scrollspy,
  Tab,
  Toast,
  Tooltip
}
