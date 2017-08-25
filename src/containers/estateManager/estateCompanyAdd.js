'use strict';
import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/estateManager/estateCompanyAdd';
import {
    Breadcrumb,
    Form,
    Input,
    Button,
    Select,
    message,
    Popconfirm,
    Radio,Upload,Modal,Icon
} from 'antd';
import {
    getUrl
} from '../../util/index';
const Option = Select.Option;
const FormItem = Form.Item;
const RadioGroup = Radio.Group;

class estateCompanyAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitLoading: false,
      disabled: true,
      newID:'',
      isUpload:true,
      previewVisible:false,
      previewImage: "",
    }
    this.props.dispatch(actions.companyParent({
      status: 1
    }));
    this.props.dispatch(actions.mccodeList({})) //获取经营类目
    // this.props.dispatch(actions.getUploadToken("yaoping","123456"));
  }
  handlePreview(file) {
      this.setState({
        previewImage: file.url || file.thumbUrl,
        previewVisible: true,
      });
    }
    handleCancel() {
        this.setState({
            previewVisible: false
        })
    }
    handImgChange(e){
        if(e.fileList.length){
            this.setState({isUpload:false})
        }else{
            this.setState({isUpload:true})
        }
        if (e.file.status == 'error') {
            message.error('很遗憾...这次上传失败了。');
        }

        if(e.file.response!=undefined){
          this.setState({
            business_img:e.file.response.data.filepath,
            business_img_local:e.file.response.data.localPath
          })
        }
    }
    normFile(e) {
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    }
    beforeUpload(file) {
      const isJPEG = file.type === 'image/jpeg';
      const isPNG = file.type === 'image/png';
      const isJPG = file.type === 'image/jpg';
      if (!isJPG&&!isJPEG&&!isPNG) {
        message.error('只能上传.jpeg,.jpg,.png图片');
        return false;
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        message.error('请上传小于 2MB 的图片!');
            return false;
      }
      const newDate = new Date().getTime();
      const strs=file.type.split("/");
      this.setState({
        name: "zhihuishequ_text/"+newDate+"."+strs[1],
        files: file
      });
    }
  handleSubmit(e) {
    this.props.form.validateFields((err, values) => {
      if (!!err) {
				return;
			}
      this.props.dispatch(actions.companyUpdate({
        alipay_account: values.alipay_account,
        link_man: values.link_man,
        link_phone: values.link_phone,
        login_name: values.login_name,
        login_phone: values.login_phone,
        property_name: values.property_name,
        status: values.status,
        email: values.email,
        business_img:this.state.business_img,
        business_img_local:this.state.business_img_local,
        business_license:values.business_license,
        mcc_code:values.mcc_code,
      },()=>{
        message.success('新增成功！');
        setTimeout(() => {
          location.href = "#/estateCompanyManager";
        },1000)
      }));
    });
  }

  handleBack(e) {
    history.go(-1);
  }

  render() {
    const { getFieldDecorator,initialValue } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 3 },
      wrapperCol: { span: 6 },
    };
    const uploadButton = (
        <div>
        <Icon type="plus" />
        <div className="ant-upload-text">选择图片</div>
        </div>
      )
    const {info,parentList,uploadToken,category} = this.props.estateCompanyAdd;
    return (
      <div className="page-content">
        <Breadcrumb separator="/">
          <Breadcrumb.Item><a href="#/serveManager">物业管理</a></Breadcrumb.Item>
          <Breadcrumb.Item><a href="#/estateCompanyManager">企业管理</a></Breadcrumb.Item>
          <Breadcrumb.Item>新增企业</Breadcrumb.Item>
        </Breadcrumb>
        <section className="section">
        <Form>
          <FormItem label="企业名称" {...formItemLayout} hasFeedback>
            {getFieldDecorator('property_name',{rules:[{type: "string",pattern: /^[\u2E80-\u9FFF]+$/,required:true,message:'请输入20以内文字'}]})(<Input maxLength={20} placeholder="请输入企业名称"/>)}
          </FormItem>
          <FormItem label="经营类目" {...formItemLayout}>
                {getFieldDecorator('mcc_code', {
                    rules: [
                        {required: true,message: '请选择小区类型'},
                    ],
                })(
                  <Select placeholder="请选择小区类型">
                    {
                      category.map((value,index)=>{
                        return  <Option key={index} value={value.key}>{value.value}</Option>
                      })
                    }
                  </Select>
                )}
            </FormItem>
          <FormItem label="营业执照号" {...formItemLayout} hasFeedback>
            {getFieldDecorator('business_license',{rules:[{type: "string",pattern: /^\d{16}$/,required:true,message:'请输入16位执照号'}]})(<Input maxLength={16} placeholder="请输入营业执照号"/>)}
          </FormItem>
          <FormItem {...formItemLayout} label="企业执照图片">
            {getFieldDecorator('business_img', {
                rules: [
                  {required:true,message:'请上传企业执照图片'}
                  ],
                valuePropName: 'fileList2',
                normalize: this.normFile,
                onChange:this.handImgChange.bind(this)
            })(
            <Upload name="file" action={getUrl()+'/property/image/upload-img'}  data={{file:this.state.files}}  listType="picture-card" onPreview={this.handlePreview.bind(this)} beforeUpload={this.beforeUpload.bind(this)}>
            {this.state.isUpload?uploadButton:null}
        </Upload>
        )}
        <Modal visible={this.state.previewVisible} footer={null} onCancel={this.handleCancel.bind(this)}>
          <img alt="example" style={{ width: '100%' }} src={this.state.previewImage} />
        </Modal>
        </FormItem>
          <FormItem label="企业联系人" {...formItemLayout} hasFeedback>
            {getFieldDecorator('link_man',{rules:[{type: "string",pattern: /^[\u2E80-\u9FFF]+$/,required:true,message:'请输入20以内文字'}]})(<Input maxLength={20} placeholder="请输入联系人"/>)}
          </FormItem>
          <FormItem label="联系电话" {...formItemLayout} hasFeedback>
            {getFieldDecorator('link_phone',{rules:[{type: "string",pattern: /^((0\d{2,3}-\d{7,8})|(1\d{10}))$/,required:true,message:'请输入固定电话号或者手机号'}]})(<Input placeholder="请输入联系电话"/>)}
          </FormItem>
          <FormItem label="邮箱地址" {...formItemLayout} hasFeedback>
            {getFieldDecorator('email',{rules:[{type:"email",required:true,message:'请输入50位以内，必须存在@.com格式，不能输入文字、特殊符号'}]})(<Input maxLength={50} placeholder="请输入邮箱地址"/>)}
          </FormItem>
          <FormItem label="支付宝账号" {...formItemLayout} hasFeedback>
            {getFieldDecorator('alipay_account',{rules:[{type: "string",pattern: /^((\w)+(\.\w+)*@(\w)+((\.\w+)+)|(1\d{10}))$/,required:true,message:'请输入正确支付宝账号'}]})(<Input placeholder="请输入支付宝账号"/>)}
          </FormItem>
          <FormItem label="登录账号" {...formItemLayout} hasFeedback>
            {getFieldDecorator('login_name',{rules:[{type: "string",pattern: /^[0-9a-zA-Z.@]{4,30}$/,required:true,message:'请输入4-30位字符'}]})(<Input maxLength={30} placeholder="请输入登录账号"/>)}
          </FormItem>
          <FormItem label="关联手机号码" {...formItemLayout} hasFeedback>
            {getFieldDecorator('login_phone',{rules:[{required:true,message:'请输入关联手机号码'}, {min: 11,max: 11,message: '请输入正确手机号'}]})(<Input placeholder="请输入关联手机号码"/>)}
          </FormItem>
          <FormItem label="状态" {...formItemLayout}>
            {getFieldDecorator('status',{rules:[{required:true,message:'请选择状态'}],initialValue:"1"})(
              <RadioGroup>
                <Radio value="1">启用</Radio>
                <Radio value="2">禁用</Radio>
              </RadioGroup>
            )}
          </FormItem>
          <FormItem wrapperCol={{ span: 12, offset: 2 }}>
              <Button type="ghost" onClick={this.handleBack.bind(this)} className="mr1">返回</Button>
              <Popconfirm title="确定要新增企业？" onConfirm={this.handleSubmit.bind(this)}>
                <Button type="primary" className="ant-btn-lg">提交</Button>
              </Popconfirm>
          </FormItem>

        </Form>
        </section>
       </div>
    )
  }
}

estateCompanyAdd = Form.create()(estateCompanyAdd);
export default connect(state => {
  return {
    estateCompanyAdd: state.estateCompanyAdd
  }
})(estateCompanyAdd);
