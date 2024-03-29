'use strict';

exports.__esModule = true;

var ATTR_NAME_MAP = {
  acceptCharset: 'accept-charset',
  className: 'class',
  htmlFor: 'for',
  httpEquiv: 'http-equiv'
};

function normalizeAttributes(attributes) {
  if (attributes == null) {
    return attributes;
  }
  var normalized = {};
  var didNormalize = false;
  for (var _iterator = Object.keys(attributes), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var name = _ref;

    var newName = name;
    if (ATTR_NAME_MAP.hasOwnProperty(name)) {
      newName = ATTR_NAME_MAP[name];
      didNormalize = true;
    }
    normalized[newName] = attributes[name];
  }
  return didNormalize ? normalized : attributes;
}

exports.default = normalizeAttributes;