webpackJsonp([3],{

/***/ 1268:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(92);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(296);

	var _estateCompanyAdd = __webpack_require__(1269);

	var actions = _interopRequireWildcard(_estateCompanyAdd);

	var _antd = __webpack_require__(375);

	var _index = __webpack_require__(371);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Option = _antd.Select.Option;
	var FormItem = _antd.Form.Item;
	var RadioGroup = _antd.Radio.Group;

	var estateCompanyAdd = function (_React$Component) {
	  _inherits(estateCompanyAdd, _React$Component);

	  function estateCompanyAdd(props) {
	    _classCallCheck(this, estateCompanyAdd);

	    var _this = _possibleConstructorReturn(this, (estateCompanyAdd.__proto__ || Object.getPrototypeOf(estateCompanyAdd)).call(this, props));

	    _this.state = {
	      submitLoading: false,
	      disabled: true,
	      newID: '',
	      isUpload: true,
	      previewVisible: false,
	      previewImage: ""
	    };
	    _this.props.dispatch(actions.companyParent({
	      status: 1
	    }));
	    _this.props.dispatch(actions.mccodeList({})); //获取经营类目
	    // this.props.dispatch(actions.getUploadToken("yaoping","123456"));
	    return _this;
	  }

	  _createClass(estateCompanyAdd, [{
	    key: 'handlePreview',
	    value: function handlePreview(file) {
	      this.setState({
	        previewImage: file.url || file.thumbUrl,
	        previewVisible: true
	      });
	    }
	  }, {
	    key: 'handleCancel',
	    value: function handleCancel() {
	      this.setState({
	        previewVisible: false
	      });
	    }
	  }, {
	    key: 'handImgChange',
	    value: function handImgChange(e) {
	      if (e.fileList.length) {
	        this.setState({ isUpload: false });
	      } else {
	        this.setState({ isUpload: true });
	      }
	      if (e.file.status == 'error') {
	        _antd.message.error('很遗憾...这次上传失败了。');
	      }

	      if (e.file.response != undefined) {
	        this.setState({
	          business_img: e.file.response.data.filepath,
	          business_img_local: e.file.response.data.localPath
	        });
	      }
	    }
	  }, {
	    key: 'normFile',
	    value: function normFile(e) {
	      if (Array.isArray(e)) {
	        return e;
	      }
	      return e && e.fileList;
	    }
	  }, {
	    key: 'beforeUpload',
	    value: function beforeUpload(file) {
	      var isJPEG = file.type === 'image/jpeg';
	      var isPNG = file.type === 'image/png';
	      var isJPG = file.type === 'image/jpg';
	      if (!isJPG && !isJPEG && !isPNG) {
	        _antd.message.error('只能上传.jpeg,.jpg,.png图片');
	        return false;
	      }
	      var isLt2M = file.size / 1024 / 1024 < 2;
	      if (!isLt2M) {
	        _antd.message.error('请上传小于 2MB 的图片!');
	        return false;
	      }
	      var newDate = new Date().getTime();
	      var strs = file.type.split("/");
	      this.setState({
	        name: "zhihuishequ_text/" + newDate + "." + strs[1],
	        files: file
	      });
	    }
	  }, {
	    key: 'handleSubmit',
	    value: function handleSubmit(e) {
	      var _this2 = this;

	      this.props.form.validateFields(function (err, values) {
	        if (!!err) {
	          return;
	        }
	        _this2.props.dispatch(actions.companyUpdate({
	          alipay_account: values.alipay_account,
	          link_man: values.link_man,
	          link_phone: values.link_phone,
	          login_name: values.login_name,
	          login_phone: values.login_phone,
	          property_name: values.property_name,
	          status: values.status,
	          email: values.email,
	          business_img: _this2.state.business_img,
	          business_img_local: _this2.state.business_img_local,
	          business_license: values.business_license,
	          mcc_code: values.mcc_code
	        }, function () {
	          _antd.message.success('新增成功！');
	          setTimeout(function () {
	            location.href = "#/estateCompanyManager";
	          }, 1000);
	        }));
	      });
	    }
	  }, {
	    key: 'handleBack',
	    value: function handleBack(e) {
	      history.go(-1);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props$form = this.props.form,
	          getFieldDecorator = _props$form.getFieldDecorator,
	          initialValue = _props$form.initialValue;

	      var formItemLayout = {
	        labelCol: { span: 3 },
	        wrapperCol: { span: 6 }
	      };
	      var uploadButton = _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_antd.Icon, { type: 'plus' }),
	        _react2.default.createElement(
	          'div',
	          { className: 'ant-upload-text' },
	          '\u9009\u62E9\u56FE\u7247'
	        )
	      );
	      var _props$estateCompanyA = this.props.estateCompanyAdd,
	          info = _props$estateCompanyA.info,
	          parentList = _props$estateCompanyA.parentList,
	          uploadToken = _props$estateCompanyA.uploadToken,
	          category = _props$estateCompanyA.category;

	      return _react2.default.createElement(
	        'div',
	        { className: 'page-content' },
	        _react2.default.createElement(
	          _antd.Breadcrumb,
	          { separator: '/' },
	          _react2.default.createElement(
	            _antd.Breadcrumb.Item,
	            null,
	            _react2.default.createElement(
	              'a',
	              { href: '#/serveManager' },
	              '\u7269\u4E1A\u7BA1\u7406'
	            )
	          ),
	          _react2.default.createElement(
	            _antd.Breadcrumb.Item,
	            null,
	            _react2.default.createElement(
	              'a',
	              { href: '#/estateCompanyManager' },
	              '\u4F01\u4E1A\u7BA1\u7406'
	            )
	          ),
	          _react2.default.createElement(
	            _antd.Breadcrumb.Item,
	            null,
	            '\u65B0\u589E\u4F01\u4E1A'
	          )
	        ),
	        _react2.default.createElement(
	          'section',
	          { className: 'section' },
	          _react2.default.createElement(
	            _antd.Form,
	            null,
	            _react2.default.createElement(
	              FormItem,
	              _extends({ label: '\u4F01\u4E1A\u540D\u79F0' }, formItemLayout, { hasFeedback: true }),
	              getFieldDecorator('property_name', { rules: [{ type: "string", pattern: /^[\u2E80-\u9FFF]+$/, required: true, message: '请输入20以内文字' }] })(_react2.default.createElement(_antd.Input, { maxLength: 20, placeholder: '\u8BF7\u8F93\u5165\u4F01\u4E1A\u540D\u79F0' }))
	            ),
	            _react2.default.createElement(
	              FormItem,
	              _extends({ label: '\u7ECF\u8425\u7C7B\u76EE' }, formItemLayout),
	              getFieldDecorator('mcc_code', {
	                rules: [{ required: true, message: '请选择小区类型' }]
	              })(_react2.default.createElement(
	                _antd.Select,
	                { placeholder: '\u8BF7\u9009\u62E9\u5C0F\u533A\u7C7B\u578B' },
	                category.map(function (value, index) {
	                  return _react2.default.createElement(
	                    Option,
	                    { key: index, value: value.key },
	                    value.value
	                  );
	                })
	              ))
	            ),
	            _react2.default.createElement(
	              FormItem,
	              _extends({ label: '\u8425\u4E1A\u6267\u7167\u53F7' }, formItemLayout, { hasFeedback: true }),
	              getFieldDecorator('business_license', { rules: [{ type: "string", pattern: /^\d{16}$/, required: true, message: '请输入16位执照号' }] })(_react2.default.createElement(_antd.Input, { maxLength: 16, placeholder: '\u8BF7\u8F93\u5165\u8425\u4E1A\u6267\u7167\u53F7' }))
	            ),
	            _react2.default.createElement(
	              FormItem,
	              _extends({}, formItemLayout, { label: '\u4F01\u4E1A\u6267\u7167\u56FE\u7247' }),
	              getFieldDecorator('business_img', {
	                rules: [{ required: true, message: '请上传企业执照图片' }],
	                valuePropName: 'fileList2',
	                normalize: this.normFile,
	                onChange: this.handImgChange.bind(this)
	              })(_react2.default.createElement(
	                _antd.Upload,
	                { name: 'file', action: (0, _index.getUrl)() + '/property/image/upload-img', data: { file: this.state.files }, listType: 'picture-card', onPreview: this.handlePreview.bind(this), beforeUpload: this.beforeUpload.bind(this) },
	                this.state.isUpload ? uploadButton : null
	              )),
	              _react2.default.createElement(
	                _antd.Modal,
	                { visible: this.state.previewVisible, footer: null, onCancel: this.handleCancel.bind(this) },
	                _react2.default.createElement('img', { alt: 'example', style: { width: '100%' }, src: this.state.previewImage })
	              )
	            ),
	            _react2.default.createElement(
	              FormItem,
	              _extends({ label: '\u4F01\u4E1A\u8054\u7CFB\u4EBA' }, formItemLayout, { hasFeedback: true }),
	              getFieldDecorator('link_man', { rules: [{ type: "string", pattern: /^[\u2E80-\u9FFF]+$/, required: true, message: '请输入20以内文字' }] })(_react2.default.createElement(_antd.Input, { maxLength: 20, placeholder: '\u8BF7\u8F93\u5165\u8054\u7CFB\u4EBA' }))
	            ),
	            _react2.default.createElement(
	              FormItem,
	              _extends({ label: '\u8054\u7CFB\u7535\u8BDD' }, formItemLayout, { hasFeedback: true }),
	              getFieldDecorator('link_phone', { rules: [{ type: "string", pattern: /^((0\d{2,3}-\d{7,8})|(1\d{10}))$/, required: true, message: '请输入固定电话号或者手机号' }] })(_react2.default.createElement(_antd.Input, { placeholder: '\u8BF7\u8F93\u5165\u8054\u7CFB\u7535\u8BDD' }))
	            ),
	            _react2.default.createElement(
	              FormItem,
	              _extends({ label: '\u90AE\u7BB1\u5730\u5740' }, formItemLayout, { hasFeedback: true }),
	              getFieldDecorator('email', { rules: [{ type: "email", required: true, message: '请输入50位以内，必须存在@.com格式，不能输入文字、特殊符号' }] })(_react2.default.createElement(_antd.Input, { maxLength: 50, placeholder: '\u8BF7\u8F93\u5165\u90AE\u7BB1\u5730\u5740' }))
	            ),
	            _react2.default.createElement(
	              FormItem,
	              _extends({ label: '\u652F\u4ED8\u5B9D\u8D26\u53F7' }, formItemLayout, { hasFeedback: true }),
	              getFieldDecorator('alipay_account', { rules: [{ type: "string", pattern: /^((\w)+(\.\w+)*@(\w)+((\.\w+)+)|(1\d{10}))$/, required: true, message: '请输入正确支付宝账号' }] })(_react2.default.createElement(_antd.Input, { placeholder: '\u8BF7\u8F93\u5165\u652F\u4ED8\u5B9D\u8D26\u53F7' }))
	            ),
	            _react2.default.createElement(
	              FormItem,
	              _extends({ label: '\u767B\u5F55\u8D26\u53F7' }, formItemLayout, { hasFeedback: true }),
	              getFieldDecorator('login_name', { rules: [{ type: "string", pattern: /^[0-9a-zA-Z.@]{4,30}$/, required: true, message: '请输入4-30位字符' }] })(_react2.default.createElement(_antd.Input, { maxLength: 30, placeholder: '\u8BF7\u8F93\u5165\u767B\u5F55\u8D26\u53F7' }))
	            ),
	            _react2.default.createElement(
	              FormItem,
	              _extends({ label: '\u5173\u8054\u624B\u673A\u53F7\u7801' }, formItemLayout, { hasFeedback: true }),
	              getFieldDecorator('login_phone', { rules: [{ required: true, message: '请输入关联手机号码' }, { min: 11, max: 11, message: '请输入正确手机号' }] })(_react2.default.createElement(_antd.Input, { placeholder: '\u8BF7\u8F93\u5165\u5173\u8054\u624B\u673A\u53F7\u7801' }))
	            ),
	            _react2.default.createElement(
	              FormItem,
	              _extends({ label: '\u72B6\u6001' }, formItemLayout),
	              getFieldDecorator('status', { rules: [{ required: true, message: '请选择状态' }], initialValue: "1" })(_react2.default.createElement(
	                RadioGroup,
	                null,
	                _react2.default.createElement(
	                  _antd.Radio,
	                  { value: '1' },
	                  '\u542F\u7528'
	                ),
	                _react2.default.createElement(
	                  _antd.Radio,
	                  { value: '2' },
	                  '\u7981\u7528'
	                )
	              ))
	            ),
	            _react2.default.createElement(
	              FormItem,
	              { wrapperCol: { span: 12, offset: 2 } },
	              _react2.default.createElement(
	                _antd.Button,
	                { type: 'ghost', onClick: this.handleBack.bind(this), className: 'mr1' },
	                '\u8FD4\u56DE'
	              ),
	              _react2.default.createElement(
	                _antd.Popconfirm,
	                { title: '\u786E\u5B9A\u8981\u65B0\u589E\u4F01\u4E1A\uFF1F', onConfirm: this.handleSubmit.bind(this) },
	                _react2.default.createElement(
	                  _antd.Button,
	                  { type: 'primary', className: 'ant-btn-lg' },
	                  '\u63D0\u4EA4'
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return estateCompanyAdd;
	}(_react2.default.Component);

	estateCompanyAdd = _antd.Form.create()(estateCompanyAdd);
	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    estateCompanyAdd: state.estateCompanyAdd
	  };
	})(estateCompanyAdd);

/***/ })

});