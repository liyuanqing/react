import React from 'react'
import {
  Form,
  Button,
  Row,Col,Modal,Select
} from 'antd';
const Option = Select.Option;
const FormItem = Form.Item;
const children = [];
class modal extends  React.Component{
  constructor(props) {
    super(props);
    this.state = {
      groupList:[],

    }
  }
  componentDidMount() {
      this.setState({
        groupList:this.props.groupList,
      });
  }
  componentWillReceiveProps(nextProps) {
    if(this.props.id!=nextProps.id){
      this.props.form.resetFields(['life_service_type_id','community_id']);
    }
  }
  handleOk(){
    // this.props.ok(this.state.selectArr,()=>{
    //   this.props.form.resetFields(['channels']);
    //   this.setState({
    //     selectArr:[],
    //   });
    // })
    this.props.form.validateFields((err, values) => {
      if(err){
        return
      }
      let {
        community_id,
        life_service_type_id
      } = values;
      this.props.ok({
        community_id:community_id,
        life_service_type_id:life_service_type_id,
        life_service_id:this.props.id,
      })
    })
  }
  handleCancel(){
    this.props.form.resetFields(['channels']);
    this.setState({
      selectArr:[],
    });
    this.props.hide()
  }
  handleChange(value) {
    this.setState({
      selectArr:value,
    });
  }
  Change(value, option){

  }
  render() {
    const {
      getFieldDecorator
    } = this.props.form;
    const formItemLayout = {
      labelCol: {
        span: 10
      },
      wrapperCol: {
        span: 14
      },
    }
    return (
      <Modal
        title="生活号配置"
        visible={this.props.visible}
        onCancel={this.handleCancel.bind(this)}
        onOk={this.handleOk.bind(this)}>

        <Form>
          <Row>
            <Col span={16}>
              <FormItem label="生活号类别" {...formItemLayout}>
                {getFieldDecorator('life_service_type_id',{
                  // onChange: this.Change.bind(this)
                  rules: [
                    {required: true, message: '请选择!'},
                  ],
                  initialValue:this.props.life_service_type_id
                })(
                  <Select placeholder="请选择" onSelect={this.Change.bind(this)}>
                    <Option key={-1} dataValue={""} value="">请选择</Option>
                    {this.props.groupList.map((value,index)=>{
                      return <Select.Option key={index} value={value.key.toString()}>{value.value}</Select.Option>
                    })
                    }
                  </Select>
                )}
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={16}>
              <FormItem label="关联小区" {...formItemLayout}>
                {getFieldDecorator('community_id',{
                  rules: [
                {required: true, message: '请选择!'},
                  ],
                  initialValue:this.props.community_id
                })(
                  <Select
                    placeholder="请选择"
                    showSearch
                    filterOption={(input, option) => option.props.dataValue.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                  >
                    <Option key={-1} dataValue={""} value="">请选择</Option>
                    {this.props.communityList.map((value,index)=>{
                      return <Option key={index} dataValue={value.name} value={value.id.toString()}>{value.name}</Option>
                    })}
                  </Select>
                )}
              </FormItem>
            </Col>
          </Row>
        </Form>
      </Modal>
    )
  }
}
modal = Form.create({})(modal)

export default modal
