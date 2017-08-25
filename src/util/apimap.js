'use strict';
export default {
  //商家管理
  businessmanList: ['/property/shop/lists', 'get'],
  businessmanCommon: ['/property/shop/common', 'get'],
  businessmanToggeleStatus: ['/property/shop/up', 'post'],
  businessmanDownloadQRcode: ['/property/shop/qrcode', 'get'],
  businessmanAdd: ['/property/shop/create', 'get'],
  businessmanEdit: ['/property/shop/edit', 'get'],
  businessmanEditDetail: ['/property/shop/show', 'get'],
  businessmanSignUpList: ['/property/shop/intentions', 'get'],
  businessmanSignUpAccept: ['/property/shop/accept', 'get'],
  businessMoneyList: ['/property/shop/balances', 'get'], //商家资金管理列表
  businessDetail: ['/property/shop/business', 'get'], //营业额明细
  incomesDetail: ['/property/shop/incomes', 'get'], //收益明细

  //服务管理
  serverList: ['/property/service/list', 'get'], //服务列表
  serverCheck: ['/property/service/check', 'post'], //启用/停用服务
  parentName: ['/property/service/parent', 'get'], //查找父级服务
  serverUpdate: ['/property/service/update', 'post'],//添加/编辑服务
  serverShow: ['/property/service/show', 'get'],//查看服务详情
  serviceTypes:['/property/service/types','get'], //获取服务类型
  //小区管理
  statusChange: ['/property/community/check', 'get'], //显示隐藏
  getArea: ['/property/house/area', 'get'], //获取省市
  serverLists: ['/property/service/service', 'get'], //获取开通服务
  getcompanyList: ['/property/company/company', 'get'], //获取开启物业公司
  updateCommunity: ['/property/community/create-comm', 'post'], //新增小区
  editCommunity: ['/property/community/edit-comm', 'post'], //编辑小区
  communityShow: ['/property/community/show', 'post'], //查看小区详情
  communityList: ['/property/community/lists', 'get'], //服务列表
  parkQrcode: ['/property/community/park-qrcode', 'get'], //临停我二维码
  siteQrcode: ['/property/community/site-qrcode', 'get'], //小区二维码
  siteLife: ['/property/community/life-qrcode', 'get'], // 生活缴费二维码
  testPay: ['/property/community/test-pay-code', 'get'],//下载支付测试二维码
  initService: ['/property/community/init-service', 'get'],//初始化服务
  textInsert: ['/property/community/test-data-insert', 'get'],//插入测试数据
  onlineApply: ['/property/community/online-apply', 'get'],//上线小区
  //物业公司管理
  companyList: ['/property/company/list', 'post'], //物业公司列表
  companyOpenDown: ['/property/company/open-down', 'post'], //启用停用物业公司
  companyParent: ['/property/company/parent', 'post'], //查找父级物业公司
  companyUpdate: ['/property/company/update', 'post'], //添加/编辑物业公司
  companyShow: ['/property/company/show', 'post'], //查看物业公司
  reserveList:['/property/reserve/list','get'],//物业公司报名列表
  reserveAccept:['/property/reserve/accept','post'],//物业公司报名设置为已受理
  mccodeList:['/property/company/mccode-list','get'],//物业公司经营类目
  //页面管理
  advertPosition: ['/property/advert/get-advert-position-down-list', 'get'], //获取广告位下拉列表
  advertList: ['/property/advert/get-advert-list', 'get'],   //获取广告列表
  adShowChange: ['/property/advert/handle-advert-show', 'post'], //广告隐藏显示
  deleteAd: ['/property/advert/delete-advert'], //广告删除
  adAdd: ['/property/advert/add-advert'],//广告新增
  advertPositionList: ['/property/advert/get-advert-position-list'],   //获取广告位列表
  advertPositionType: ['/property/advert/get-advert-position-type'],  //获取广告位类型
  adPositionLineChange: ['/property/advert/handle-advert-position-online'], //广告位上线（下线）
  advertPositionPage: ['/property/advert/get-advert-position-page'],  //获取广告位从属页面列表
  adPositionUpdate: ['/property/advert/add-advert-position'], //新增广告位
  advertPositionDetail: ['/property/advert/get-one-advert-position'], //获取单个广告位信息
  advertDetail: ['/property/advert/advert-infos'], //查看广告详情
  editAdvert: ['/property/advert/edit-advert'],//广告编辑
  editAdvertPosition: ['/property/advert/edit-advert-position'],//广告位编辑
  getCommunity: ['/property/advert/get-community', 'get'], //获取全部小区
  getScope: ['/property/advert/get-advert-type', 'get'],//获取广告配置范围下拉列表
  //系统管理
  getBuildings: ['/property/house/get-buildings', 'get'], //获取幢
  getUnits: ['/property/house/get-units', 'get'], //获取单元
  getRooms: ['/property/house/get-rooms', 'get'], //获取室号
  getCity: ['/property/house/city', 'get'], //获取室
  getGroups: ['/property/house/get-groups', 'get'], //获取组/苑/区
  delBillList: ['/property/bill/del-bill-list', 'get'],//删除账单——账单列表
  delCheck: ['/property/bill/del-bill-check', 'get'],//账单删除-勾选删除
  delAll: ['/property/bill/del-bill-all', 'get'],//账单删除-勾选删除
  operateLog: ['/property/user/operate-log', 'get'],//获取日志列表

  billExport: ['/property/bill/export', 'get'],
  billLists: ['/property/bill/lists', 'post'],
  billShow: ['/property/bill/show', 'post'],
  serviceService: ['/property/service/service', 'get'],
  serviceBillList: ['/property/service/bill-lists', 'get'],  //获取缴费项


  //房源管理
  saleList:['/property/house-source/sale-lists','get'], //出售房源列表
  distribute:['/property/house-source/distribute','post'], //房源分发
  saleShow:['/property/house-source/sale-show','get'], //出售房源详情
  saleCancel:['/property/house-source/sale-cancel','post'], //出售取消委托
  rentList:['/property/house-source/rent-lists','get'], //出租房源列表
  rentShow:['/property/house-source/rent-show','get'], //出租房源详情
  rentCancel:['/property/house-source/rent-cancel','post'], //出租取消委托
  logout: ['/property/user/login-out', 'post'],
  resetPassword: ['/property/user/change-password', 'post'],

 //素材管理
  materialCreate:['/property/material/create','post'], //素材添加接口
  materialEdit:['/property/material/edit','post'], //素材编辑接口
  materialShow:['/property/material/show','get'], //素材详情接口
  materialLists:['/property/material/lists','get'], //素材列表接口
  materialRemove:['/property/material/remove','post'],//素材删除接口
  //消息管理
  lifeType:['/property/life-no/types','get'],//可选生活号列表接口
  broadcastCreate:['/property/broadcast/create','post'],//消息发送接口
  broadcastSends:['/property/broadcast/sends','get'],//已发送消息列表接口
  //用户管理
  usersList:['/property/life-no/users','get'],//用户列表接口
  //生活号管理
  lifeList:['/property/life-no/list','get'],//生活号列表接口
  lifeQrcode:['/property/life-no/qrcode','get'],//生活号二维码下载
  lifeView:['/property/life-no/view','get'],//生活号详情
  lifeConfig:['/property/life-no/config','get'],//生活号配置
  lifeEdit:['/property/life-no/edit','get'],//生活号编辑
  lifeCreate:['/property/life-no/create','get'],//生活号新增

  lifeCommunitys:['/property/life-no/communitys','get'], //生活号类型与对应生活号
  lifeServerces:['/property/life-no/services','get'],//获取小区的服务接口

  // 智能设备管理2.4.1 http://192.168.1.22:8077/workspace/myWorkspace.do?projectId=41#3986
  deviceList:['/property/device/list','get'],//门禁设备列表
  deviceCommon:['/property/device/common','get'],//设备管理通用参数
  deviceUnits:['/property/device/units','get'],//小区单元列表
  deviceLog:['/property/device/opendoor-log','get'],//门禁记录列表
  deviceImport:['/property/device/door-import','get'],//门禁批量导入
  deviceCreate:['/property/device/create','get'],//门禁设备新增
  deviceTemplate:['/property/device/door-template','get'],//门禁设备模版下载

};
