import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import React, { useState } from 'react';
import MyLayout from '../components/layout'
import { Row, Col, PageHeader, Button, Select, Image, List, Card} from 'antd';
import 'antd/dist/antd.css';

const data = [
    {
      name: 'Vanessa White',
      field:'Skincare',
      hospital: "National Neuroscience Institute", 
    },
    {
      name: 'James Black',
      field:'Cardiology',
      hospital: "National Heart Centre Singapore", 
    },
    {
      name: 'Jane Brown',
      field:'Haematology',
      hospital:'National Cancer Centre Singapore',
    },
    {
      name: 'Jeffery White',
      field:'Cardiology',
      hospital: 'National Heart Centre Singapore',
    },
    {
        name: 'Jeffery White',
        field:'Cardiology',
        hospital: 'National Heart Centre Singapore',
      },
      {
        name: 'Jeffery White',
        field:'Cardiology',
        hospital: 'National Heart Centre Singapore',
      },
  ];
  

export default function DoctorList() {

    return (
      <>
       <PageHeader className="site-page-header"/>
       <div>
        <h1>Our Doctors</h1>
        <List
            grid={{ gutter: 16, column: 3}}
            dataSource={data}
            renderItem={item => (
            <List.Item>
                <Card>
                    <Col>

                        <Col>
                            <Row><Image src="/JamesBlack.jpeg"></Image></Row>
                        </Col>

               
                        <Row><h1>Dr {item.name}</h1></Row>
                        <Row> <h4>Specialty: {item.field}</h4></Row>
                        <Row> <h4>Currently working at: {item.hospital}</h4></Row>

                        <Row>
                            <div style={{textAlign:"center",width:"300px", height:"40px", margin:"auto auto"}}>
                                <Button type="primary" shape="round" size="medium"
                                >Book a Consultation</Button>
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