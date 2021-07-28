import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import React, { useState } from 'react';
import MyLayout from '../components/layout'
import { Row, Col, PageHeader, Button, Select, Image, List, Card, Form, Input,Checkbox} from 'antd';
import 'antd/dist/antd.css';
import Avatar from 'antd/lib/avatar/avatar';


export default function AboutUs() {

    return (
        <>
        hello world
        about us
        </>

    )}


AboutUs.getLayout = (AboutUs) => (
        <MyLayout number="8">
          {AboutUs}
        </MyLayout>
      )