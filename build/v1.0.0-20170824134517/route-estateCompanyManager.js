webpackJsonp([1],{

/***/ 1264:
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

	var _estateCompanyManager = __webpack_require__(1265);

	var actions = _interopRequireWildcard(_estateCompanyManager);

	var _reactRouter = __webpack_require__(308);

	var _antd = __webpack_require__(375);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FormItem = _antd.Form.Item;
	var Option = _antd.Select.Option;
	var createForm = _antd.Form.create;
	var RadioGroup = _antd.Radio.Group;

	var estateCompanyParams = {
	  property_name: '',
	  link_man: '',
	  status: '',
	  link_phone: '',
	  login_name: '',
	  alipay_account: '',
	  page: 1,
	  rows: 10
	};

	var estateCompanyManager = function (_React$Component) {
	  _inherits(estateCompanyManager, _React$Component);

	  function estateCompanyManager(props) {
	    _classCallCheck(this, estateCompanyManager);

	    var _this = _possibleConstructorReturn(this, (estateCompanyManager.__proto__ || Object.getPrototypeOf(estateCompanyManager)).call(this, props));

	    _this.state = {
	      localsize: 10
	    };
	    estateCompanyParams.page = 1;
	    estateCompanyParams.rows = 10;
	    _this.handleReset(_this); // 进入页面执行重置列表操作（里面会获取列表）
	    return _this;
	  }

	  _createClass(estateCompanyManager, [{
	    key: 'handleSubmit',
	    value: function handleSubmit(e) {
	      var _this2 = this;

	      e.preventDefault();
	      this.props.form.validateFields(function (err, values) {
	        if (!!err) {
	          return;
	        }
	        estateCompanyParams.property_name = values.property_name;
	        estateCompanyParams.link_man = values.link_man;
	        estateCompanyParams.status = values.status;
	        estateCompanyParams.link_phone = values.link_phone;
	        estateCompanyParams.login_name = values.login_name;
	        estateCompanyParams.alipay_account = values.alipay_account;
	        estateCompanyParams.page = 1;

	        _this2.props.dispatch(actions.getList(estateCompanyParams));
	      });
	    }
	  }, {
	    key: 'companyOpenDown',
	    value: function companyOpenDown(text) {
	      var _this3 = this;

	      var state = '';
	      text.status == 1 ? state = 2 : state = 1;
	      this.props.dispatch(actions.companyOpenDown({
	        property_id: text.id,
	        status: state
	      }, function () {
	        _this3.props.dispatch(actions.getList(estateCompanyParams));
	      }));
	    }
	  }, {
	    key: 'handlePaginationChange',
	    value: function handlePaginationChange(page) {
	      estateCompanyParams.page = page;
	      this.props.dispatch(actions.getList(estateCompanyParams));
	    }
	  }, {
	    key: 'handleShowSizeChange',
	    value: function handleShowSizeChange(current, size) {
	      estateCompanyParams.rows = size;
	      this.setState({
	        localsize: size
	      });
	      estateCompanyParams.page = 1;
	      this.props.dispatch(actions.getList(estateCompanyParams));
	    }
	  }, {
	    key: 'handleReset',
	    value: function handleReset(e) {
	      this.props.form.resetFields();
	      estateCompanyParams = {
	        property_name: '',
	        link_man: '',
	        status: '',
	        link_phone: '',
	        login_name: '',
	        alipay_account: '',
	        page: 1,
	        rows: 10
	      };
	      this.setState({
	        localsize: 10
	      });
	      this.props.dispatch(actions.getList(estateCompanyParams));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this4 = this;

	      var columns = [{
	        title: '编号',
	        dataIndex: 'id',
	        key: 'id'
	      }, {
	        title: '企业名称',
	        dataIndex: 'property_name',
	        key: 'property_name'
	      }, {
	        title: '联系人',
	        dataIndex: 'link_man',
	        key: 'link_man'
	      }, {
	        title: '联系电话',
	        dataIndex: 'link_phone',
	        key: 'link_phone'
	      }, {
	        title: '登录账号',
	        dataIndex: 'login_name',
	        key: 'login_name'
	      }, {
	        title: '新增时间',
	        dataIndex: 'create_at',
	        key: 'create_at'
	      }, {
	        title: '状态',
	        dataIndex: 'status',
	        render: function render(text, record) {
	          return _react2.default.createElement(
	            'span',
	            null,
	            text == 1 ? '启用' : '禁用'
	          );
	        }
	      }, {
	        title: '操作',
	        render: function render(text, record) {
	          var link = '/estateCompanyUpdate?id=' + record.id;
	          return _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	              _antd.Popconfirm,
	              { title: record.status == 1 ? '确定要禁用该企业帐号吗？' : '确定要启用该企业帐号吗？', onConfirm: _this4.companyOpenDown.bind(_this4, text) },
	              _react2.default.createElement(
	                _antd.Button,
	                null,
	                record.status == 1 ? '禁用' : '启用'
	              )
	            ),
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { to: link },
	              _react2.default.createElement(
	                _antd.Button,
	                { className: 'mlr1' },
	                '\u7F16\u8F91'
	              )
	            )
	          );
	        }
	      }];
	      var formItemLayout = {
	        labelCol: {
	          span: 8
	        },
	        wrapperCol: {
	          span: 16
	        }
	      };
	      var getFieldDecorator = this.props.form.getFieldDecorator;
	      var _props$estateCompanyM = this.props.estateCompanyManager,
	          data = _props$estateCompanyM.data,
	          paginationTotal = _props$estateCompanyM.paginationTotal;

	      var pagination = {
	        showSizeChanger: true,
	        showQuickJumper: true,
	        current: estateCompanyParams.page,
	        pageSize: this.state.localsize,
	        onShowSizeChange: this.handleShowSizeChange.bind(this),
	        onChange: this.handlePaginationChange.bind(this),
	        total: parseInt(paginationTotal),
	        pageSizeOptions: ['10', '20', '30', '40'],
	        defaultPageSize: 10
	      };
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
	              '\u4F01\u4E1A\u7BA1\u7406'
	            )
	          ),
	          _react2.default.createElement(
	            _antd.Breadcrumb.Item,
	            null,
	            '\u4F01\u4E1A\u7BA1\u7406'
	          )
	        ),
	        _react2.default.createElement(
	          _antd.Card,
	          null,
	          _react2.default.createElement(
	            _antd.Form,
	            { horizontal: true },
	            _react2.default.createElement(
	              _antd.Row,
	              null,
	              _react2.default.createElement(
	                _antd.Col,
	                { span: 6 },
	                _react2.default.createElement(
	                  FormItem,
	                  _extends({ label: '\u4F01\u4E1A' }, formItemLayout),
	                  getFieldDecorator('property_name')(_react2.default.createElement(_antd.Input, { type: 'text', placeholder: '\u8BF7\u8F93\u5165\u4F01\u4E1A\u540D\u79F0' }))
	                )
	              ),
	              _react2.default.createElement(
	                _antd.Col,
	                { span: 6 },
	                _react2.default.createElement(
	                  FormItem,
	                  _extends({ label: '\u8054\u7CFB\u4EBA' }, formItemLayout),
	                  getFieldDecorator('link_man')(_react2.default.createElement(_antd.Input, { type: 'text', placeholder: '\u8BF7\u8F93\u5165\u8054\u7CFB\u4EBA\u59D3\u540D' }))
	                )
	              ),
	              _react2.default.createElement(
	                _antd.Col,
	                { span: 6 },
	                _react2.default.createElement(
	                  FormItem,
	                  _extends({ label: '\u72B6\u6001' }, formItemLayout),
	                  getFieldDecorator('status')(_react2.default.createElement(
	                    _antd.Select,
	                    { placeholder: '\u8BF7\u9009\u62E9\u72B6\u6001' },
	                    _react2.default.createElement(
	                      Option,
	                      { value: '1' },
	                      '\u542F\u7528'
	                    ),
	                    _react2.default.createElement(
	                      Option,
	                      { value: '2' },
	                      '\u7981\u7528'
	                    )
	                  ))
	                )
	              )
	            ),
	            _react2.default.createElement(
	              _antd.Row,
	              null,
	              _react2.default.createElement(
	                _antd.Col,
	                { span: 6 },
	                _react2.default.createElement(
	                  FormItem,
	                  _extends({ label: '\u8054\u7CFB\u7535\u8BDD' }, formItemLayout),
	                  getFieldDecorator('link_phone')(_react2.default.createElement(_antd.Input, { type: 'text', placeholder: '\u8BF7\u8F93\u5165\u8054\u7CFB\u7535\u8BDD' }))
	                )
	              ),
	              _react2.default.createElement(
	                _antd.Col,
	                { span: 6 },
	                _react2.default.createElement(
	                  FormItem,
	                  _extends({ label: '\u767B\u5F55\u8D26\u53F7' }, formItemLayout),
	                  getFieldDecorator('login_name')(_react2.default.createElement(_antd.Input, { type: 'text', placeholder: '\u8BF7\u8F93\u5165\u767B\u5F55\u8D26\u53F7' }))
	                )
	              ),
	              _react2.default.createElement(
	                _antd.Col,
	                { span: 6 },
	                _react2.default.createElement(
	                  FormItem,
	                  _extends({ label: '\u652F\u4ED8\u5B9D\u8D26\u53F7' }, formItemLayout),
	                  getFieldDecorator('alipay_account')(_react2.default.createElement(_antd.Input, { type: 'text', placeholder: '\u8BF7\u8F93\u5165\u652F\u4ED8\u5B9D\u8D26\u53F7' }))
	                )
	              ),
	              _react2.default.createElement(
	                _antd.Col,
	                { span: 5, offset: 1 },
	                _react2.default.createElement(
	                  _antd.Button,
	                  { type: 'primary', onClick: this.handleSubmit.bind(this), className: 'mr1' },
	                  '\u67E5\u8BE2'
	                ),
	                _react2.default.createElement(
	                  _antd.Button,
	                  { type: 'ghost', onClick: this.handleReset.bind(this) },
	                  '\u91CD\u7F6E'
	                )
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          _antd.Card,
	          { className: 'mt1' },
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/estateCompanyAdd' },
	            _react2.default.createElement(
	              'span',
	              null,
	              _react2.default.createElement(
	                _antd.Button,
	                { type: 'primary' },
	                _react2.default.createElement(_antd.Icon, { type: 'plus' }),
	                '\u65B0\u589E\u4F01\u4E1A'
	              )
	            )
	          ),
	          _react2.default.createElement(_antd.Table, { dataSource: data, columns: columns, className: 'mt1', pagination: pagination })
	        )
	      );
	    }
	  }]);

	  return estateCompanyManager;
	}(_react2.default.Component);

	estateCompanyManager = createForm()(estateCompanyManager);
	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    estateCompanyManager: state.estateCompanyManager
	  };
	})(estateCompanyManager);

/***/ })

});