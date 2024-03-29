"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _antd = require("antd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OpenFull = function (_Component) {
  _inherits(OpenFull, _Component);

  function OpenFull(props) {
    _classCallCheck(this, OpenFull);

    return _possibleConstructorReturn(this, _Component.call(this, props));
  }

  OpenFull.prototype.render = function render() {
    return _react2.default.createElement(
      "div",
      { className: "RichEditor-controls" },
      _react2.default.createElement(
        "span",
        { className: "RichEditor-styleButton", onClick: this.props.onToggle },
        this.props.coverTitle
      )
    );
  };

  return OpenFull;
}(_react.Component);

var AutoSave = function (_Component2) {
  _inherits(AutoSave, _Component2);

  function AutoSave(props) {
    _classCallCheck(this, AutoSave);

    return _possibleConstructorReturn(this, _Component2.call(this, props));
  }

  AutoSave.prototype.render = function render() {
    return _react2.default.createElement(
      "div",
      { className: "RichEditor-controls" },
      _react2.default.createElement(
        "span",
        { className: "RichEditor-styleButton", onClick: this.props.onToggle },
        this.props.lang.autoSave
      )
    );
  };

  return AutoSave;
}(_react.Component);

;

var SourceEditor = function (_Component3) {
  _inherits(SourceEditor, _Component3);

  function SourceEditor(props) {
    _classCallCheck(this, SourceEditor);

    return _possibleConstructorReturn(this, _Component3.call(this, props));
  }

  SourceEditor.prototype.render = function render() {
    return _react2.default.createElement(
      "div",
      { className: "RichEditor-controls" },
      _react2.default.createElement(
        "span",
        { className: "RichEditor-styleButton", onClick: this.props.onToggle },
        this.props.coverTitle
      )
    );
  };

  return SourceEditor;
}(_react.Component);

;
module.exports = {
  OpenFull: OpenFull,
  AutoSave: AutoSave,
  SourceEditor: SourceEditor
};