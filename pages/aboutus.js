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
        <PageHeader className="site-page-header"/>
        <div>
          <h1 style={{textAlign:"center", fontSize:"30px"}}>About Us</h1>
          <div style={{textAlign:"center"}}>
            <img style={{margin:'1em', height:'200px'}} src="/easyHealthLogo.png"/>
          </div>
          <div style={{textAlign:"center",marginLeft:"60px"}}>
          <h4 style={{textAlign:"center", fontSize:"16px"}}>Empowering Care and Healthcare System through a Marriage of Medicine and Technology</h4>
          </div>
         
         <p style={{width:"600px", textAlign:"center",marginLeft:"320px",marginTop:"30px"}}>
           The healthcare industry plays a vital role in the overall welfare of society, 
           making it critical for every nation to improve its citizens’ access to care and make its 
           healthcare system more efficient. EasyHealth aims to connect more patients with qualified doctors 
           for online consultations. You may have a preliminary check with our AI chatbot assistant to get an 
           instant diagnosis.</p>
          
        </div>
      
        </>

    )}


AboutUs.getLayout = (AboutUs) => (
        <MyLayout number="8">
          {AboutUs}
        </MyLayout>
      )