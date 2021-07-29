import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import React, { useState } from 'react';
import MyLayout from '../components/layout'
import { Row, Col, PageHeader, Button, Select, Image, List, Form, Input,Checkbox,Card, Avatar } from 'antd';
import 'antd/dist/antd.css';
import { CommentOutlined, EllipsisOutlined, AlertOutlined } from '@ant-design/icons';

const { Meta } = Card;


const data = [
  {
      title: 'FWD Insurance',
      image:'/FWDInsurance.jpg',
      description: 'Through this customer-led approach, FWD aims to become a leading pan-Asian insurer that changes the way people feel about insurance.'
  },
  {
      title: 'AXA Insurance',
      image:'/AXAInsurance.png',
      description: ' AXA promises to deliver insurance packages that will meet your needs and help you prepare for the future.'
  },
  {
      title: 'AIA Insurance',
      image:'/AIAInsurance.jpeg',
      description: 'It’s committed to improving the lives of its clients by providing insurance plans that promise a stable future.'
  },
  {
      title: 'Aviva Insurance',
      image:'/AvivaInsurance.jpeg',
      description: 'Nobody deserves to have an uncertain future, and Aviva Insurance is here to ensure that you won’t have to be anxious about what the future holds.'
  },
  {
      title: 'Pacific Prime Singapore',
      image:'/PacificPrimeSingapore.jpeg',
      description: ' Pacific Prime knows how expensive it is to get sick without proper insurance, so it took upon itself to offer affordable and competitive insurance plans to everyone on the island.'
  },
  {
      title: 'Liberty Insurance',
      image:'/LibertyInsurance.png',
      description: 'Liberty Insurance is committed to providing their clients with insurance that will remove their worries about the uncertainty of the future.'
  }
];



export default function Insurance() {

    return (
        <>
        <PageHeader className="site-page-header"/>

        <div>
        <h1 style={{textAlign:"center", fontSize:"30px"}}>Insurances</h1>

        <List
                grid={{ gutter: 20, column: 3 }}
                dataSource={data}
                renderItem={item => (
                <List.Item style={{textAlign:'center'}}>
                    <Card 
                      style={{ width: 360 }}
                      cover={
                        <img
                          alt="example"
                          src={item.image}
                          style={{height:"240px"}}
                        />
                      }
                      actions={[
                        <div><AlertOutlined key="knowmore" />  Service</div>,
                        <div><CommentOutlined key="contact"/>  Contact</div>,
                        <div><EllipsisOutlined key="ellipsis" />  More</div>,
                      ]}>
                        <Meta
                        // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title={item.title} 
                        description={item.description}
                      />
                    </Card>
                </List.Item>
                )}
            />
        </div>
        </>

    )}


Insurance.getLayout = (Insurance) => (
        <MyLayout number="5">
          {Insurance}
        </MyLayout>
      )