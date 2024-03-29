"use strict";

exports.__esModule = true;


function combineOrderedStyles(customMap, defaults) {
  if (customMap == null) {
    return defaults;
  }
  var defaultStyleMap = defaults[0],
      defaultStyleOrder = defaults[1];

  var styleMap = Object.assign({}, defaultStyleMap);
  var styleOrder = [].concat(defaultStyleOrder);
  for (var _iterator = Object.keys(customMap), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var _styleName = _ref;

    if (defaultStyleMap.hasOwnProperty(_styleName)) {
      var defaultStyles = defaultStyleMap[_styleName];
      styleMap[_styleName] = Object.assign({}, defaultStyles, customMap[_styleName]);
    } else {
      styleMap[_styleName] = customMap[_styleName];
      styleOrder.push(_styleName);
    }
  }
  return [styleMap, styleOrder];
}

exports.default = combineOrderedStyles;