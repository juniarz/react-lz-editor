'use strict';

exports.__esModule = true;

var _ENTITY_ATTR_MAP, _DATA_TO_ATTR;

exports.default = stateToHTML;

var _draftJs = require('draft-js');

var _main = require('../stateUtils/main');

var _colorConfig = require('../colorConfig');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BOLD = _main.INLINE_STYLE.BOLD,
    CODE = _main.INLINE_STYLE.CODE,
    ITALIC = _main.INLINE_STYLE.ITALIC,
    STRIKETHROUGH = _main.INLINE_STYLE.STRIKETHROUGH,
    UNDERLINE = _main.INLINE_STYLE.UNDERLINE;


var INDENT = '  ';
var BREAK = '<br>';

var ENTITY_ATTR_MAP = (_ENTITY_ATTR_MAP = {}, _ENTITY_ATTR_MAP[_main.ENTITY_TYPE.LINK] = { url: 'href', rel: 'rel', target: 'target', title: 'title', className: 'class' }, _ENTITY_ATTR_MAP[_main.ENTITY_TYPE.IMAGE] = { src: 'src', height: 'height', width: 'width', alt: 'alt', className: 'class' }, _ENTITY_ATTR_MAP[_main.ENTITY_TYPE.VIDEO] = { src: 'src', controls: 'controls', height: 'height', width: 'width', alt: 'alt', className: 'class' }, _ENTITY_ATTR_MAP[_main.ENTITY_TYPE.AUDIO] = { src: 'src', controls: 'controls', height: 'height', width: 'width', alt: 'alt', className: 'class' }, _ENTITY_ATTR_MAP);

var DATA_TO_ATTR = (_DATA_TO_ATTR = {}, _DATA_TO_ATTR[_main.ENTITY_TYPE.LINK] = function (entityType, entity) {
  var attrMap = ENTITY_ATTR_MAP.hasOwnProperty(entityType) ? ENTITY_ATTR_MAP[entityType] : {};
  var data = entity.getData();
  var attrs = {};
  for (var _iterator = Object.keys(data), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var dataKey = _ref;

    var dataValue = data[dataKey];
    if (attrMap.hasOwnProperty(dataKey)) {
      var attrKey = attrMap[dataKey];
      attrs[attrKey] = dataValue;
    } else if (DATA_ATTRIBUTE.test(dataKey)) {
      attrs[dataKey] = dataValue;
    }
  }
  return attrs;
}, _DATA_TO_ATTR[_main.ENTITY_TYPE.IMAGE] = function (entityType, entity) {
  var attrMap = ENTITY_ATTR_MAP.hasOwnProperty(entityType) ? ENTITY_ATTR_MAP[entityType] : {};
  var data = entity.getData();
  var attrs = {};
  for (var _iterator2 = Object.keys(data), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
    var _ref2;

    if (_isArray2) {
      if (_i2 >= _iterator2.length) break;
      _ref2 = _iterator2[_i2++];
    } else {
      _i2 = _iterator2.next();
      if (_i2.done) break;
      _ref2 = _i2.value;
    }

    var dataKey = _ref2;

    var dataValue = data[dataKey];
    if (attrMap.hasOwnProperty(dataKey)) {
      var attrKey = attrMap[dataKey];
      attrs[attrKey] = dataValue;
    }
  }
  return attrs;
}, _DATA_TO_ATTR[_main.ENTITY_TYPE.VIDEO] = function (entityType, entity) {
  var attrMap = ENTITY_ATTR_MAP.hasOwnProperty(entityType) ? ENTITY_ATTR_MAP[entityType] : {};
  var data = entity.getData();
  var attrs = {};
  for (var _iterator3 = Object.keys(data), _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
    var _ref3;

    if (_isArray3) {
      if (_i3 >= _iterator3.length) break;
      _ref3 = _iterator3[_i3++];
    } else {
      _i3 = _iterator3.next();
      if (_i3.done) break;
      _ref3 = _i3.value;
    }

    var dataKey = _ref3;

    var dataValue = data[dataKey];
    if (attrMap.hasOwnProperty(dataKey)) {
      var attrKey = attrMap[dataKey];
      attrs[attrKey] = dataValue;
    }
  }
  return attrs;
}, _DATA_TO_ATTR[_main.ENTITY_TYPE.AUDIO] = function (entityType, entity) {
  var attrMap = ENTITY_ATTR_MAP.hasOwnProperty(entityType) ? ENTITY_ATTR_MAP[entityType] : {};
  var data = entity.getData();
  var attrs = {};
  for (var _iterator4 = Object.keys(data), _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
    var _ref4;

    if (_isArray4) {
      if (_i4 >= _iterator4.length) break;
      _ref4 = _iterator4[_i4++];
    } else {
      _i4 = _iterator4.next();
      if (_i4.done) break;
      _ref4 = _i4.value;
    }

    var dataKey = _ref4;

    var dataValue = data[dataKey];
    if (attrMap.hasOwnProperty(dataKey)) {
      var attrKey = attrMap[dataKey];
      attrs[attrKey] = dataValue;
    }
  }
  return attrs;
}, _DATA_TO_ATTR);

function getTags(blockType) {
  switch (blockType) {
    case _main.BLOCK_TYPE.HEADER_ONE:
      return ['h1'];
    case _main.BLOCK_TYPE.HEADER_TWO:
      return ['h2'];
    case _main.BLOCK_TYPE.HEADER_THREE:
      return ['h3'];
    case _main.BLOCK_TYPE.HEADER_FOUR:
      return ['h4'];
    case _main.BLOCK_TYPE.HEADER_FIVE:
      return ['h5'];
    case _main.BLOCK_TYPE.HEADER_SIX:
      return ['h6'];
    case _main.BLOCK_TYPE.UNORDERED_LIST_ITEM:
    case _main.BLOCK_TYPE.ORDERED_LIST_ITEM:
      return ['li'];
    case _main.BLOCK_TYPE.BLOCKQUOTE:
      return ['blockquote'];
    case _main.BLOCK_TYPE.CODE:
      return ['pre', 'code'];

    default:
      return ['p'];
  }
}

function getWrapperTag(blockType) {
  switch (blockType) {
    case _main.BLOCK_TYPE.UNORDERED_LIST_ITEM:
      return 'ul';
    case _main.BLOCK_TYPE.ORDERED_LIST_ITEM:
      return 'ol';
    default:
      return null;
  }
}

var MarkupGenerator = function () {
  function MarkupGenerator(contentState) {
    _classCallCheck(this, MarkupGenerator);

    this.contentState = contentState;
  }

  MarkupGenerator.prototype.generate = function generate() {
    this.output = [];
    this.blocks = this.contentState.getBlocksAsArray();
    this.totalBlocks = this.blocks.length;
    this.currentBlock = 0;
    this.indentLevel = 0;
    this.wrapperTag = null;
    while (this.currentBlock < this.totalBlocks) {
      this.processBlock();
    }
    this.closeWrapperTag();
    return this.output.join('').trim();
  };

  MarkupGenerator.prototype.processBlock = function processBlock() {
    var block = this.blocks[this.currentBlock];
    var blockType = block.getType();
    var blockData = block.getData();
    var newWrapperTag = getWrapperTag(blockType);
    if (this.wrapperTag !== newWrapperTag) {
      if (this.wrapperTag) {
        this.closeWrapperTag();
      }
      if (newWrapperTag) {
        this.openWrapperTag(newWrapperTag);
      }
    }
    this.indent();
    this.writeStartTag(blockType, blockData);
    this.output.push(this.renderBlockContent(block));

    var nextBlock = this.getNextBlock();
    if (canHaveDepth(blockType) && nextBlock && nextBlock.getDepth() === block.getDepth() + 1) {
      this.output.push('\n');

      var thisWrapperTag = this.wrapperTag;
      this.wrapperTag = null;
      this.indentLevel += 1;
      this.currentBlock += 1;
      this.processBlocksAtDepth(nextBlock.getDepth());
      this.wrapperTag = thisWrapperTag;
      this.indentLevel -= 1;
      this.indent();
    } else {
      this.currentBlock += 1;
    }
    this.writeEndTag(blockType);
  };

  MarkupGenerator.prototype.processBlocksAtDepth = function processBlocksAtDepth(depth) {
    var block = this.blocks[this.currentBlock];
    while (block && block.getDepth() === depth) {
      this.processBlock();
      block = this.blocks[this.currentBlock];
    }
    this.closeWrapperTag();
  };

  MarkupGenerator.prototype.getNextBlock = function getNextBlock() {
    return this.blocks[this.currentBlock + 1];
  };

  MarkupGenerator.prototype.writeStartTag = function writeStartTag(blockType, blockData) {
    var tags = getTags(blockType);
    var blockStyle = "",
        blockAlign = blockData.get("textAlignment");
    if (blockAlign) {
      blockStyle = "text-align:" + blockAlign + ';';
    }
    for (var _iterator5 = tags, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();;) {
      var _ref5;

      if (_isArray5) {
        if (_i5 >= _iterator5.length) break;
        _ref5 = _iterator5[_i5++];
      } else {
        _i5 = _iterator5.next();
        if (_i5.done) break;
        _ref5 = _i5.value;
      }

      var tag = _ref5;

      this.output.push('<' + tag + ' ' + (blockStyle ? " style='" + blockStyle + "'" : "") + '>');
    }
  };

  MarkupGenerator.prototype.writeEndTag = function writeEndTag(blockType) {
    var tags = getTags(blockType);
    if (tags.length === 1) {
      this.output.push('</' + tags[0] + '>\n');
    } else {
      var output = [];
      for (var _iterator6 = tags, _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : _iterator6[Symbol.iterator]();;) {
        var _ref6;

        if (_isArray6) {
          if (_i6 >= _iterator6.length) break;
          _ref6 = _iterator6[_i6++];
        } else {
          _i6 = _iterator6.next();
          if (_i6.done) break;
          _ref6 = _i6.value;
        }

        var tag = _ref6;

        output.unshift('</' + tag + '>');
      }
      this.output.push(output.join('') + '\n');
    }
  };

  MarkupGenerator.prototype.openWrapperTag = function openWrapperTag(wrapperTag) {
    this.wrapperTag = wrapperTag;
    this.indent();
    this.output.push('<' + wrapperTag + '>\n');
    this.indentLevel += 1;
  };

  MarkupGenerator.prototype.closeWrapperTag = function closeWrapperTag() {
    var wrapperTag = this.wrapperTag;

    if (wrapperTag) {
      this.indentLevel -= 1;
      this.indent();
      this.output.push('</' + wrapperTag + '>\n');
      this.wrapperTag = null;
    }
  };

  MarkupGenerator.prototype.indent = function indent() {
    this.output.push(INDENT.repeat(this.indentLevel));
  };

  MarkupGenerator.prototype.renderBlockContent = function renderBlockContent(block) {
    var blockType = block.getType();
    var text = block.getText();
    if (text === '') {
      return BREAK;
    }
    text = this.preserveWhitespace(text);
    var charMetaList = block.getCharacterList();
    var entityPieces = (0, _main.getEntityRanges)(text, charMetaList);
    return entityPieces.map(function (_ref7) {
      var entityKey = _ref7[0],
          stylePieces = _ref7[1];

      var content = stylePieces.map(function (_ref8) {
        var text = _ref8[0],
            style = _ref8[1];

        var content = encodeContent(text);

        if (style.has(BOLD)) {
          content = '<strong>' + content + '</strong>';
        }
        if (style.has(UNDERLINE)) {
          content = '<ins>' + content + '</ins>';
        }
        if (style.has(ITALIC)) {
          content = '<em>' + content + '</em>';
        }
        if (style.has(STRIKETHROUGH)) {
          content = '<del>' + content + '</del>';
        }
        Object.keys(_colorConfig.colorStyleMap).map(function (keyItem) {
          if (!!keyItem && style.has(keyItem)) {
            content = '<span style="color:' + _colorConfig.colorStyleMap[keyItem].color + '">' + content + '</span>';
          }
        });
        if (style.has(CODE)) {
          content = blockType === _main.BLOCK_TYPE.CODE ? content : '<code>' + content + '</code>';
        }
        return content;
      }).join('');
      var entity = entityKey ? _draftJs.Entity.get(entityKey) : null;

      var entityType = entity == null || !entity.getType() ? null : entity.getType().toUpperCase();
      if (entityType != null && entityType === _main.ENTITY_TYPE.LINK) {
        var attrs = DATA_TO_ATTR.hasOwnProperty(entityType) ? DATA_TO_ATTR[entityType](entityType, entity) : null;
        var attrString = stringifyAttrs(attrs);
        return '<a' + attrString + '>' + content + '</a>';
      } else if (entityType != null && entityType === _main.ENTITY_TYPE.IMAGE) {
        var _attrs = DATA_TO_ATTR.hasOwnProperty(entityType) ? DATA_TO_ATTR[entityType](entityType, entity) : null;

        var _attrString = stringifyAttrs(_attrs);

        return '<img' + _attrString + '/>';
      } else if (entityType != null && entityType === _main.ENTITY_TYPE.VIDEO) {
        var _attrs2 = DATA_TO_ATTR.hasOwnProperty(entityType) ? DATA_TO_ATTR[entityType](entityType, entity) : null;
        var _attrString2 = stringifyAttrs(_attrs2);
        return '<video' + _attrString2 + '></video>';
      } else if (entityType != null && entityType === _main.ENTITY_TYPE.AUDIO) {
        var _attrs3 = DATA_TO_ATTR.hasOwnProperty(entityType) ? DATA_TO_ATTR[entityType](entityType, entity) : null;
        var _attrString3 = stringifyAttrs(_attrs3);
        return '<audio' + _attrString3 + '></audio>';
      } else {
        return content;
      }
    }).join('');
  };

  MarkupGenerator.prototype.preserveWhitespace = function preserveWhitespace(text) {
    var length = text.length;

    var newText = new Array(length);
    for (var i = 0; i < length; i++) {
      if (text[i] === ' ' && (i === 0 || i === length - 1 || text[i - 1] === ' ')) {
        newText[i] = '\xA0';
      } else {
        newText[i] = text[i];
      }
    }
    return newText.join('');
  };

  return MarkupGenerator;
}();

function stringifyAttrs(attrs) {
  if (attrs == null) {
    return '';
  }
  var parts = [];
  for (var _iterator7 = Object.keys(attrs), _isArray7 = Array.isArray(_iterator7), _i7 = 0, _iterator7 = _isArray7 ? _iterator7 : _iterator7[Symbol.iterator]();;) {
    var _ref9;

    if (_isArray7) {
      if (_i7 >= _iterator7.length) break;
      _ref9 = _iterator7[_i7++];
    } else {
      _i7 = _iterator7.next();
      if (_i7.done) break;
      _ref9 = _i7.value;
    }

    var attrKey = _ref9;

    var attrValue = attrs[attrKey];
    if (attrKey == "src") {
      attrValue = attrValue.replace(/[?#&].*$/g, "");
    }
    if (attrValue != null) {
      parts.push(' ' + attrKey + '="' + encodeAttr(attrValue + '') + '"');
    }
  }
  return parts.join('');
}

function canHaveDepth(blockType) {
  switch (blockType) {
    case _main.BLOCK_TYPE.UNORDERED_LIST_ITEM:
    case _main.BLOCK_TYPE.ORDERED_LIST_ITEM:
      return true;
    default:
      return false;
  }
}

function encodeContent(text) {
  return text.split('&').join('&amp;').split('<').join('&lt;').split('>').join('&gt;').split('\xA0').join('&nbsp;').split('\n').join(BREAK + '\n');
}

function encodeAttr(text) {
  return text.split('&').join('&amp;').split('<').join('&lt;').split('>').join('&gt;').split('"').join('&quot;');
}

function stateToHTML(content) {
  return new MarkupGenerator(content).generate();
}