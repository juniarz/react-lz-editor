'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PasteNoStyleControls = function (_Component) {
  _inherits(PasteNoStyleControls, _Component);

  function PasteNoStyleControls(props) {
    _classCallCheck(this, PasteNoStyleControls);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = {
      visible: false,
      plantext: ""
    };
    _this.onTextToggle = _this.onTextToggle.bind(_this);
    _this.pasteContent = _this.pasteContent.bind(_this);
    _this.handleCancel = _this.handleCancel.bind(_this);
    _this.sendTextToEditor = _this.sendTextToEditor.bind(_this);
    return _this;
  }

  PasteNoStyleControls.prototype.pasteContent = function pasteContent(e) {
    var _this2 = this;

    this.state.plantext = e.target.value;
    this.forceUpdate();
    setTimeout(function () {
      if (!!_this2.state.plantext) {
        _this2.setState({ disabled: false });
      }
    }, 100);
  };

  PasteNoStyleControls.prototype.sendTextToEditor = function sendTextToEditor() {
    var text = this.state.plantext + "";
    this.props.receiveText(text);
    this.setState({ visible: false, plantext: "" });
  };

  PasteNoStyleControls.prototype.onTextToggle = function onTextToggle() {
    this.setState({ visible: true, disabled: true, plantext: "" });
  };

  PasteNoStyleControls.prototype.handleCancel = function handleCancel(e) {
    this.setState({ visible: false });
    this.state.plantext = "";
    this.forceUpdate();
  };

  PasteNoStyleControls.prototype.componentDidMount = function componentDidMount() {};

  PasteNoStyleControls.prototype.render = function render() {
    var className = 'RichEditor-styleButton';
    var that = this;
    return _react2.default.createElement(
      'div',
      { className: 'RichEditor-controls' },
      _react2.default.createElement(
        'span',
        { className: className, onClick: that.onTextToggle, title: that.props.lang.pasteText },
        _react2.default.createElement(_antd.Icon, { key: 'paset_text', type: 'editor_paset_text' })
      ),
      _react2.default.createElement(
        _antd.Modal,
        {
          title: that.props.lang.insertNoStyleText,
          visible: that.state.visible,
          closable: false,
          width: 800,
          footer: [_react2.default.createElement(
            _antd.Button,
            { key: 'back', size: 'large', onClick: that.handleCancel },
            ' ',
            that.props.lang.cancelText,
            ' '
          ), _react2.default.createElement(
            _antd.Button,
            { key: 'submit', type: 'primary', size: 'large', disabled: that.state.disabled, onClick: that.sendTextToEditor },
            that.props.lang.OKText,
            '  '
          )] },
        _react2.default.createElement(_antd.Input, { type: 'textarea', rows: 10, onChange: that.pasteContent, value: that.state.plantext, placeholder: that.props.lang.pasteTipMsg })
      )
    );
  };

  return PasteNoStyleControls;
}(_react.Component);

module.exports = PasteNoStyleControls;