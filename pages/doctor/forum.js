import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import React, { useState } from 'react';
import MyLayout from '../../components/doctor_layout'
import {  Table, PageHeader, Input, Modal, Tooltip } from 'antd';
import 'antd/dist/antd.css';
import { PlusOutlined} from '@ant-design/icons';

const { TextArea } = Input;
const data = [
  {
    title: '20 health tips for 2020',
  },
  {
    title: 'CS1101S is hard!!',
  },
  {
    title: 'CS1101S is hard!!',
  },
  {
    title: 'CS1101S is hard!!',
  },
  {
    title: 'CS1101S is hard!!',
  },
  {
    title: 'CS1101S is hard!!',
  },
  {
    title: 'CS1101S is hard!!',
  },
  {
    title: 'CS1101S is hard!!',
  },
];

export default function Forum() {
  const [isCreateModalVisible, setIsCreateModalVisible] = useState(false);


  const showCreateModal = () => {
    setIsCreateModalVisible(true);
  };

  const handleCreateOk = () => {
    setIsCreateModalVisible(false);
    Router.push('/post/1');
  };

  const handleCreateCancel = () => {
    setIsCreateModalVisible(false);
  };


  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      width: '90%',
    },
    {
      title: 'Action',
      key: 'go',
      fixed: 'right',
      width: '10%',
      render: () => <Link href="/post/1">Read More</Link>,
    },
  ];

  return (
    <>
     <PageHeader
    className="site-page-header"
    title="Forum"
    />
      <Table columns={columns} dataSource={data}/>
      <Modal title="Write a new Post" 
      visible={isCreateModalVisible} 
      okText="Post"
      cancelText="Cancel"
      onOk={handleCreateOk} onCancel={handleCreateCancel}>

        <Input placeholder="Title" />
        <p> </p>
        <TextArea rows={4}/>
        <p> </p>
      </Modal>
   
      <a href="#" style={{position:"fixed",
                          width:"60px",
                          height:"60px",
                          bottom:"120px",
                          right:"140px",
                          backgroundColor:"#0C9",
                          fontSize:"30px",
                          color:"#FFF",
                          borderRadius:"50px",
                          textAlign:"center",
                          boxShadow: "2px 2px 3px #999"}}>
        <Tooltip placement="bottomRight" title="Create a new Post" arrowPointAtCenter><PlusOutlined style={{marginTop:"15px", width:"100%"}} onClick={showCreateModal}/></Tooltip>
      </a>
    </>
    )
}


Forum.getLayout = (forum) => (
  <MyLayout number="1">
    {forum}
  </MyLayout>
)