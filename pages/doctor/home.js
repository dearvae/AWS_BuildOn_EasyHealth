import Link from 'next/link'
import MyLayout from '../../components/doctor_layout'
import React, { useState, useEffect } from 'react';
import { Statistic, Card, Row, Col, Calendar, Progress, Button } from 'antd';
import { StarOutlined, ArrowUpOutlined, CheckSquareTwoTone} from '@ant-design/icons';
import dynamic from "next/dynamic";

const Area = dynamic(
  () => import("@ant-design/charts").then((mode) => mode.Area),
  { ssr: false }
);

function getListData(value) {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
          { done: 'done' },
        ];
      break;
    case 10:
      listData = [
          { done: 'done' },
        ];
      break;
    case 15:
      listData = [
          { done: 'done' },
        ];
      break;
    default:
  }
  return listData || [];
}

export default function Home() {
    var data = [
      {
      Date: '07-17',
      scales: 1,
      },
      {
          Date: '07-24',
          scales: 2,
      },
      {
          Date: '07-25',
          scales: 3,
      },
      {
          Date: '07-26',
          scales: 5,
      },
      {
        Date: '07-27',
        scales: 2,
      },
      {
          Date: '07-28',
          scales: 4,
      },
      {
          Date: '07-29',
          scales: 3,
      },
      {
          Date: '07-30',
          scales: 1,
      },
    ];
  var config = {
    data: data,
    xField: 'Date',
    yField: 'scales',
  };
    return (
        <>
        <h2>
          <a>Upcoming Consultations</a>
        </h2>
          <div className="site-card-wrapper">
              <Row gutter={16}>
                <Col span={8}>
                  <Card title="Patient: Li Beining" bordered={false}>
                  Symptom: Skin feels itchy, it may be eczema.
                  <br/>
                  <br/>
                  <Link href="/doctor/room">
                  <Button style={{margin:"auto auto", textAlign:"center",marginLeft:"100px", color:"blue"}}>Enter Meeting</Button>
                  </Link>
                  </Card>
                </Col>
                <Col span={8}>
                  <Card title="Patient: Jefferey Tan" bordered={false}>
                    Symptom: Urticaria
                    <br/>
                    <br/>
                  <Button style={{margin:"auto auto", textAlign:"center",marginLeft:"100px",color:"red"}}> In 30 Mins</Button>
                  </Card>
                </Col>
                <Col span={8}>
                  <Card title="Patient: Mary Lee" bordered={false}>
                    Symptom: Photodermatitis
                    <br/>
                    <br/>
                  <Button style={{margin:"auto auto", textAlign:"center",marginLeft:"100px",color:"green"}}> In 1 Hour </Button>
                  </Card>
                </Col>
              </Row>
      
            </div>

          <br/>

          <div >
        <Row >
        <Col span={12}>
        <Card style={{textAlign:"center"}}>
          <Statistic
            title="Earnings of the week"
            value={11.28}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            prefix={<ArrowUpOutlined />}
            suffix="%"
          />
        </Card>
        <Card style={{textAlign:"center"}}>
        <Statistic title="Stars received of the week" value={128} prefix={<StarOutlined />} />
        </Card>
        <Card Card title="KPI of the month" style={{textAlign:"center"}}>
        <Progress type="circle" percent={75} />
        <br />
        <br />
         You have met 30/40 patients this month.
        </Card>
        </Col>
        <Col span={12}>
        <Card title="Number of consultations this week" style={{textAlign:"center", height: "497px"}}>
        <Area {...config} />
        </Card>
        </Col>        
    </Row>
    </div>
    </>
    )
  }

  Home.getLayout = (home) => (
    <MyLayout>
      {home}
    </MyLayout>
  )