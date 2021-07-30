import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import Router from 'next/router'

import MyLayout from '../components/layout'
import { Row, Col, PageHeader, Button, Select, Image } from 'antd';
import 'antd/dist/antd.css';


import Amplify from "aws-amplify";
import {AmplifyChatbot} from "@aws-amplify/ui-react";
import awsconfig from "../src/aws-exports";
import { fixControlledValue } from 'antd/lib/input/Input';

const { Option } = Select;
Amplify.configure(awsconfig);

export default function Home() {

  const handleChatComplete = (event) => {
    const {data, err} = event.detail;
    if (data) console.log("Chat fulfilled!", JSON.stringify(data));
    Router.push("/doctorlist")
    if (err) console.error("Chat failed:", err);
  };
  
  useEffect(() => {
    if(isChatVisible) {
      console.log("sasa")
      const chatbotElement = document.querySelector("amplify-chatbot");
      chatbotElement.addEventListener("chatCompleted", handleChatComplete);
    }
  });

  const [isChatVisible, setIsChatVisible] = useState(false);

  function handleOnClick() {
  
    setIsChatVisible(true);

  }
  
  return (
    <>
     <PageHeader className="site-page-header"/>

    <Row>
        <Col span={12}>
          <Row>
            <h1 style={{fontSize:"2.3rem",fontWeight: "normal", 
                        width:"400px",textAlign:"center",
                        marginLeft:"100px"}}>
              Your Wellness with a Simple Touch
              </h1>
          </Row>

          <Row>
          <p style={{
                    width:"400px",textAlign:"center", marginLeft:"100px",backgroundColor:"#A1D6AD",
                    padding:"20px"
          }}>
            EasyHealth aims to connect more patients with qualified doctors for online consultations.
            You may have a preliminary check with our AI chatbot assistant to get an instant diagnosis.</p>
          </Row>

          <Row style={{marginTop:"80px", textAlign:"center", marginLeft:"40px"}}>
            <ul style={{listStyle: "none"}}>
            <li>
              <Row>
                <Col span={12}>
                  <img src="/AIChatBot.png" 
                  style={{width:"120px",height:"120px", borderRadius: "50%",
                  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}
                  />
                  </Col>

                <Col span={12}>
                  <Button shape="round" size="large"
                  style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                          marginLeft:"10px",marginTop:"30px", width:"260px",height:"50px", borderColor:"#7dc98f",
                          backgroundColor:"#7dc98f",color:"white", fontSize:"20px", letterSpacing:"1px"}}
                          onClick={handleOnClick}>
                    AI Chatbot Assistant 
                  </Button>
                </Col>
              </Row>
            </li>
            <br/>
            <li>
              <Row>
                <Col span={12}>
                  <img src="/doctorCartoon.jpeg" 
                   style={{width:"120px",height:"120px", borderRadius: "50%",
                   boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}/>
                </Col>
                <Col span={12}>
                  <Link href="/doctorlist">
                  <Button  type="primary" shape="round" size="large"
                  style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                           marginLeft:"10px",marginTop:"30px", width:"260px",height:"50px",
                           fontSize:"20px",letterSpacing:"1px"}}>
                  Find Your Doctors
                  </Button>
                  </Link>
                  </Col>
              </Row>          
            </li>
          </ul>
          </Row>
        </Col>

        <Col span={12} style={{marginTop:"20px"}} >
          <Row>
            <Col span={24}>
              <Image width={620} src="/doctor1.jpeg" />
            </Col>
            <Col span={24}>
              <Image width={620} src="/doctor2.jpeg" />
            </Col>
          </Row>  
        </Col>
      </Row>
          {isChatVisible ? (
          <AmplifyChatbot
          style={{position: "fixed",
          bottom: "0",
          right: "0",
          zIndex:"999",
          backgroundColor:"#fff"}}
          botName="easy_dev"
          botTitle="Easy Health"
          welcomeMessage="Hello, how can I help you?"
          />
          ) : null}
    
    </>
    )
}

Home.getLayout = (home) => (
  <MyLayout number="1">
    {home}
  </MyLayout>
)