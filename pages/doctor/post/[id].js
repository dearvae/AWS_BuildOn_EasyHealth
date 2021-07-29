import Link from 'next/link'
import MyLayout from '../../../components/doctor_layout'
import { PageHeader, Avatar } from 'antd';
import React, { useState } from 'react';
import { Card } from 'antd';
import CommentBox from '../../components/comment'
import { useRouter } from 'next/router'


export default function Post() {
    const router = useRouter()
    const { pid } = router.query
  
    return (
        <>
        <PageHeader
        className="site-page-header"
        onBack={() => router.push("/doctor/forum")}
        title="Title"
        subTitle="This is a subtitle"
        />
        <Card title="Card title">
        <CommentBox />   
        <CommentBox />   
        <CommentBox />   
        <CommentBox />  
        </Card>
        </>
    )
  }

  Post.getLayout = (post) => (
    <MyLayout>
      {post}
    </MyLayout>
  )