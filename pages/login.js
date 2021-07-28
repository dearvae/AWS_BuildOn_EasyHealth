import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import React, { useState } from 'react';
import MyLayout from '../components/layout'
import { Row, Col, PageHeader, Button, Select, Image, List, Card, Form, Input,Checkbox} from 'antd';
import 'antd/dist/antd.css';
import Avatar from 'antd/lib/avatar/avatar';

const onFinish = (values) => {
    console.log('Success:', values);
  };
  
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  

export default function Login() {

    return (
      <>
        <div>
          <div style={{textAlign:"center"}}>
            <img style={{margin:'1em', height:'100px'}} src="/easyHealthLogo.png"/>
          </div>
          <h1 style ={{textAlign:'center',margin:'1em', fontSize:"30px"}}>Login</h1>
            <div style ={{textAlign:'center'}}>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 8,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                    offset: 8,
                    span: 8,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                    offset: 8,
                    span: 8,
                    }}
                >

                    <Button style={{backgroundColor:"#afd45b",color:"white"}}htmlType="submit">
                         <Link href="/">
                        <a>Login Now</a>
                        </Link>
                    </Button>
                    
                    <br></br>
                    <br></br>

                    <Button style={{backgroundColor:"#afd45b",color:"white"}} htmlType="submit">
                        <Link href="/register">
                            <a>Sign Up Here</a>
                        </Link> 
                    </Button>
           
     
                </Form.Item>
                </Form>
            </div>  
      </div>
      </>
      )
      }



Login.getLayout = (Login) => (
        <MyLayout number="3">
          {Login}
        </MyLayout>
      )