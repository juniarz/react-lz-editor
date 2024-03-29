'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

var _businessComponents = require('../../global/components/businessComponents');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AudioStyleControls = function (_Component) {
  _inherits(AudioStyleControls, _Component);

  function AudioStyleControls(props) {
    _classCallCheck(this, AudioStyleControls);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = {
      visible: false,
      audios: []
    }, _this.onAudioToggle = _this.onAudioToggle.bind(_this);
    _this.sendAudioToEditor = _this.sendAudioToEditor.bind(_this);
    _this.handleCancel = _this.handleCancel.bind(_this);
    _this.getAudioObject = _this.getAudioObject.bind(_this);
    return _this;
  }

  AudioStyleControls.prototype.getAudioObject = function getAudioObject(fileObj) {
    this.state.audios = this.state.audios.concat(fileObj);
    if (!!this.state.audios) {
      this.setState({ disabled: false });
    }
    this.forceUpdate();
  };

  AudioStyleControls.prototype.onAudioToggle = function onAudioToggle() {
    this.setState({ visible: true, disabled: true, audios: [] });
  };

  AudioStyleControls.prototype.sendAudioToEditor = function sendAudioToEditor() {
    this.setState({ visible: false });
    var audios = this.state.audios.map(function (item) {
      return item;
    });
    this.props.receiveAudio(audios);
    this.state.audios = [];
    this.forceUpdate();
  };

  AudioStyleControls.prototype.handleCancel = function handleCancel(e) {
    this.setState({ visible: false });
    this.state.audios = [];
    this.forceUpdate();
  };

  AudioStyleControls.prototype.render = function render() {
    var className = 'RichEditor-styleButton';
    var that = this;
    return _react2.default.createElement(
      'div',
      { className: 'RichEditor-controls' },
      _react2.default.createElement(
        'span',
        { className: className, onClick: that.onAudioToggle },
        _react2.default.createElement(_antd.Icon, { type: 'editor_audio', title: this.props.lang.insertAudioTip })
      ),
      _react2.default.createElement(
        _antd.Modal,
        {
          title: this.props.lang.insertAudioModalTitle,
          visible: that.state.visible,
          closable: false,
          footer: [_react2.default.createElement(
            _antd.Button,
            { key: 'back', size: 'large', onClick: that.handleCancel },
            ' ',
            this.props.lang.cancelText,
            ' '
          ), _react2.default.createElement(
            _antd.Button,
            { key: 'submit', type: 'primary', size: 'large', disabled: that.state.disabled, onClick: that.sendAudioToEditor },
            this.props.lang.OKText,
            ' '
          )] },
        _react2.default.createElement(_businessComponents.UploadImage, { isMultiple: true,
          fileList: that.state.audios,
          isOpenModel: that.state.visible,
          limit: 10,
          cbReceiver: that.getAudioObject,
          fileType: 'audio',
          uploadConfig: this.props.uploadConfig,
          uploadProps: this.props.uploadProps,
          lang: this.props.lang })
      )
    );
  };

  return AudioStyleControls;
}(_react.Component);

module.exports = AudioStyleControls;