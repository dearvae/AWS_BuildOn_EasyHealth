import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import React, { useState } from 'react';
import MyLayout from '../components/layout'
import { Row, Col, PageHeader, Button, Select, Image, List, Card} from 'antd';
import 'antd/dist/antd.css';
import Avatar from 'antd/lib/avatar/avatar';

const data = [
    {
      name: 'Meng Jiayu',
      field:'Skincare',
      hospital: "National Neuroscience Institute", 
      image:"/doctoreg1.jpeg",
      ratings: "4.9+",
      experience: "7 years+",
      price: "50"
    },
    {
      name: 'James Black',
      field:'Skincare',
      hospital: "National Neuroscience Institute", 
      image:"/doctoreg3.jpeg",
      ratings: "4.4+",
      experience: "6 years+",
      price: "40"
    },
    {
      name: 'Jane Brown',
      field:'Skincare',
      hospital: "National Neuroscience Institute", 
      image:"/doctoreg2.jpeg",
      ratings: "4.8+",
      experience: "6 years+",
      price: "45"
    },
    // {
    //   name: 'Thomas Tan',
    //   field:'Cardiology',
    //   hospital: 'National Heart Centre Singapore',
    //   image:"/doctoreg4.jpeg",
    //   ratings: "4.3+",
    //   experience: "9 years+",
    //   price: "30"
    // },
    // {
    //     name: 'Winson Ng',
    //     field:'Cardiology',
    //     hospital: 'National Heart Centre Singapore',
    //     image:"/doctoreg5.jpeg",
    //     ratings: "4.9+",
    //     experience: "7 years+",
    //     price: "90"
    //   },
    //   {
    //     name: 'Mary Tan',
    //     field:'Cardiology',
    //     hospital: 'National Heart Centre Singapore',
    //     image:"/doctoreg6.jpeg",
    //     ratings: "4.6+",
    //     experience: "9 years+",
    //     price: "120"
    //   },
  ];
  

export default function DoctorList() {

    return (
      <>
       <PageHeader className="site-page-header"/>
       <div>
        <h1 style={{textAlign:"center", fontSize:"30px"}}>Our Doctors</h1>
        <List
            grid={{ gutter: 16, column: 3}}
            dataSource={data}
            renderItem={item => (
            <List.Item>
                <Card>
                    <Col>

                        <Col>
                            <Row><Image src={item.image} style={{height:"300px"}}></Image></Row>
                        </Col>
               
                        <Row><h1>Dr {item.name}</h1></Row>
                        <Row> <h4>Specialty: {item.field}</h4></Row>
                        <Row> <h4>Currently working at: {item.hospital}</h4></Row>

                        <Row>
                            <Col span={8}>
                                <Avatar src="/ratings.png"></Avatar> <a style={{fontSize:"15px"}}>: {item.ratings}</a>
                            </Col> 
                            <Col span={8} style={{margin:"auto auto"}}>
                            <Avatar src="/experience.png"></Avatar> <a style={{fontSize:"15px"}}>: {item.experience}</a>
                            </Col>
                        </Row>

                        <Row style={{marginTop:"10px"}}>
                            <Col span={8}>
                            <Avatar src="/availability.png"></Avatar> <a style={{fontSize:"15px"}}>: available</a>
                            </Col>
                            <Col span={8} style={{margin:"auto auto"}}>
                            <Avatar src="/consultationfee.png"></Avatar> <a style={{fontSize:"15px"}}>: SGD {item.price}</a> 
                            </Col>
                        </Row>

                        <Row>
                            <div style={{textAlign:"center",width:"300px", height:"40px", margin:"auto auto", paddingTop:"10px"}}>
                              <Link href="/room">
                                <Button type="primary" shape="round" size="medium"
                                style={{width:"300px", height:"40px", fontSize:"18px"}}
                                >Start a Call Now</Button>
                                </Link>
                            </div>
                        </Row>
                    </Col>
                  
                </Card>
            </List.Item>
            )}
        />
        </div>
       
    </>
    )}



DoctorList.getLayout = (doctorList) => (
        <MyLayout number="2">
          {doctorList}
        </MyLayout>
      )