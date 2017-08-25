'use strict';

import React from 'react';
import {connect} from 'react-redux';
// import * as actions from '../../actions/app';
import {Input, Button, Modal, Form, message} from 'antd';
import './index.less';
import {getUrl} from '../../util/index'
import wangEditor from 'wangeditor';
// require('wangeditor');
var editor1,editor2,editor3,editor4,editor5,editor6;
class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount(){
      var that=this;
      var id = this.props.id;
      console.log(id)
      if(id.indexOf('editor1-0')>-1){
        editor1 = new wangEditor(id);
        editor1.config.menus = wangEditor.config.menus.map((item,index)=>{
           if (item === 'video') {
               return null
           }
           if (item === 'location') {
               return null
           }
           if (item === 'insertcode') {
               return null
           }
           return item
       })
       editor1.config.uploadImgUrl = getUrl() + '/property/image/upload';
       editor1.config.withCredentials = false;
        editor1.create()
        var html =editor1;
        editor1.$txt.html(this.props.html);
        editor1.onchange = function(){
          var content = html.$txt.html();
          that.props.handleEditor(id,content);
        }
      }else if(id.indexOf('editor1-1')>-1){
        editor2 = new wangEditor(id);
        editor2.config.menus = wangEditor.config.menus.map((item,index)=>{
           if (item === 'video') {
               return null
           }
           if (item === 'location') {
               return null
           }
           if (item === 'insertcode') {
               return null
           }
           return item
       })
       editor2.config.uploadImgUrl = getUrl() + '/property/image/upload';
       editor2.config.withCredentials = false;
        editor2.create()
        var html =editor2;
        editor2.$txt.html(this.props.html);
        editor2.onchange = function(){
          var content = html.$txt.html();
          that.props.handleEditor(id,content);
        }
      }else if(id.indexOf('editor1-2')>-1){
        editor3 = new wangEditor(id);
        editor3.config.menus = wangEditor.config.menus.map((item,index)=>{
           if (item === 'video') {
               return null
           }
           if (item === 'location') {
               return null
           }
           if (item === 'insertcode') {
               return null
           }
           return item
       })
       editor3.config.uploadImgUrl = getUrl() + '/property/image/upload';
       editor3.config.withCredentials = false;
        editor3.create()
        var html =editor3;
        editor3.$txt.html(this.props.html);
        editor3.onchange = function(){
          var content = html.$txt.html();
          that.props.handleEditor(id,content);
        }
      }else if(id.indexOf('editor1-3')>-1){
        editor4 = new wangEditor(id);
        editor4.config.menus = wangEditor.config.menus.map((item,index)=>{
           if (item === 'video') {
               return null
           }
           if (item === 'location') {
               return null
           }
           if (item === 'insertcode') {
               return null
           }
           return item
       })
       editor4.config.uploadImgUrl = getUrl() + '/property/image/upload';
       editor4.config.withCredentials = false;
        editor4.create()
        var html =editor4;
        editor4.$txt.html(this.props.html);
        editor4.onchange = function(){
          var content = html.$txt.html();
          that.props.handleEditor(id,content);
        }
      }else if(id.indexOf('editor1-4')>-1){
        editor5 = new wangEditor(id);
        editor5.config.menus = wangEditor.config.menus.map((item,index)=>{
           if (item === 'video') {
               return null
           }
           if (item === 'location') {
               return null
           }
           if (item === 'insertcode') {
               return null
           }
           return item
       })
       editor5.config.uploadImgUrl = getUrl() + '/property/image/upload';
       editor5.config.withCredentials = false;
        editor5.create()
        var html =editor5;
        editor5.$txt.html(this.props.html);
        editor5.onchange = function(){
          var content = html.$txt.html();
          that.props.handleEditor(id,content);
        }
      }else if(id.indexOf('editor1-5')>-1){
        editor6 = new wangEditor(id);
        editor6.config.menus = wangEditor.config.menus.map((item,index)=>{
           if (item === 'video') {
               return null
           }
           if (item === 'location') {
               return null
           }
           if (item === 'insertcode') {
               return null
           }
           return item
       })
       editor6.config.uploadImgUrl = getUrl() + '/property/image/upload';
       editor6.config.withCredentials = false;
        editor6.create()
        var html =editor5;
        editor6.$txt.html(this.props.html);
        editor6.onchange = function(){
          var content = html.$txt.html();
          that.props.handleEditor(id,content);
        }
      }

    }
    componentWillReceiveProps(nextProps){
      if(this.props.html==nextProps.html){
        return false;
      }
        var that=this;
        var id = this.props.id;
        if(id.indexOf('editor1-0')>-1){
          var html1 =editor1;
          editor1.$txt.html(nextProps.html);
          editor1.onchange = function(){
            var content = html1.$txt.html();
            that.props.handleEditor(id,content);
          }
        }else if(id.indexOf('editor1-1')>-1){
          var html2 =editor2;
          editor2.$txt.html(nextProps.html);
          editor2.onchange = function(){
            var content = html2.$txt.html();
            that.props.handleEditor(id,content);
          }
        }else if(id.indexOf('editor1-2')>-1){
          var html3 =editor3;
          editor3.$txt.html(nextProps.html);
          editor3.onchange = function(){
            var content = html3.$txt.html();
            that.props.handleEditor(id,content);
          }
        }else if(id.indexOf('editor1-3')>-1){
          var html4 =editor4;
          editor4.$txt.html(nextProps.html);
          editor4.onchange = function(){
            var content = html4.$txt.html();
            that.props.handleEditor(id,content);
          }
        }else if(id.indexOf('editor1-4')>-1){
          var html5 =editor5;
          editor5.$txt.html(nextProps.html);
          editor5.onchange = function(){
            var content = html5.$txt.html();
            that.props.handleEditor(id,content);
          }
        }else if(id.indexOf('editor1-5')>-1){
          var html6 =editor6;
          editor6.$txt.html(nextProps.html);
          editor6.onchange = function(){
            var content = html6.$txt.html();
            that.props.handleEditor(id,content);
          }
        }
    }
    render() {
      let style={width: '100%',
      height: '200px'}
        return (
          <div>
              <div id={this.props.id} style={style} contentEditable="true"></div>
          </div>
        );
    }
}
export default connect((state) => {
  return {
    editor: state.editor
  }
})(Editor);
