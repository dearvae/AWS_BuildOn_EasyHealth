import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import React, { useState } from 'react';
import MyLayout from '../../components/doctor_layout'
import { Row, Col, PageHeader, Button, Select, Image, List, Card, Form, Input,Popover} from 'antd';
import 'antd/dist/antd.css';
import { StarOutlined, FormOutlined, TeamOutlined, UnlockOutlined, SafetyCertificateOutlined, FilePptOutlined, NotificationOutlined,
  ReconciliationOutlined, CloudSyncOutlined,
  HistoryOutlined, MailOutlined, MessageOutlined, RiseOutlined, ContactsOutlined, PayCircleOutlined } from '@ant-design/icons';


export default function Settings() {

    return (
        <>
   <div style={{
            background: "#f2f2f2",
            padding: "30px"}}>
            <Row gutter={8} style={{ marginBottom: 8 }}>
                <Col span={8}>
                    <Card title="Account" bordered={false} extra={<Popover content="Edit"><ContactsOutlined style={{ cursor: 'pointer'}} /></Popover>}>
                        <span>
                            Meng Jiayu <span style={{float: 'right'}}>023124</span>
                        </span>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Basic" bordered={false} extra={<Popover content="Edit"><FormOutlined style={{ cursor: 'pointer'}} /></Popover>}>
                        <span>
                            Basic application settings
                        </span>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Security" bordered={false} extra={<Popover content="Edit"><SafetyCertificateOutlined style={{ cursor: 'pointer'}} /></Popover>}>
                        <span>
                            Change security settings
                        </span>
                    </Card>
                </Col>
            </Row>
            <Row gutter={8} style={{ marginBottom: 8 }}>
                <Col span={8}>
                    <Card title="Privacy" bordered={false} extra={<Popover content="Edit"><FilePptOutlined style={{ cursor: 'pointer'}} /></Popover>}>
                        <span>
                            Review the privacy rules
                        </span>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Notification" bordered={false} extra={<Popover content="Edit"><NotificationOutlined style={{ cursor: 'pointer'}} /></Popover>}>
                        <span>
                            Change how you are notified
                        </span>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Feedback" bordered={false} extra={<Popover content="Edit"><ReconciliationOutlined style={{ cursor: 'pointer'}} /></Popover>}>
                        <span>
                            Submit feedbacks
                        </span>
                    </Card>
                </Col>
            </Row>
            <Row gutter={8}>
                <Col span={8}>
                    <Card title="Update" bordered={false} extra={<Popover content="Edit"><CloudSyncOutlined style={{ cursor: 'pointer'}} /></Popover>}>
                        <span>
                            Check for udpates
                        </span>
                    </Card>
                </Col>
            </Row>
        </div>
        </>

    )}


Settings.getLayout = (Settings) => (
        <MyLayout>
          {Settings}
        </MyLayout>
      )