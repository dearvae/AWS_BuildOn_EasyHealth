import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import React, { useState } from 'react';
import MyLayout from '../components/layout'
import { Table, PageHeader, Input, Button, Space, Tag, Modal, Select, Switch, Tooltip } from 'antd';
import 'antd/dist/antd.css';
import Highlighter from 'react-highlight-words';
import { SearchOutlined, RightOutlined, PlusOutlined, ThunderboltOutlined, CloseOutlined, CheckOutlined} from '@ant-design/icons';
const { Option } = Select;


export default function Home() {


  return (
    <>
     <PageHeader
    className="site-page-header"
    title="Join a room you are interested in:"
    />

    </>
    )
}

Home.getLayout = (home) => (
  <MyLayout number="1">
    {home}
  </MyLayout>
)