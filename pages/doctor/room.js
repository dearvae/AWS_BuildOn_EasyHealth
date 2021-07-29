import Link from 'next/link'
import Router from 'next/router'
import DailyIframe from '@daily-co/daily-js';
import MyLayout from '../../components/doctor_layout'
import React,{useState} from 'react';
import { Row, Col, Tag, Modal, Radio, Avatar, Button} from 'antd';
import { UserAddOutlined,  StarOutlined } from '@ant-design/icons';

const style = { background: 'transparent', padding: '5px'};

let callFrame;

export default function Room() {
  
    React.useEffect(() => {
        callFrame = DailyIframe.createFrame({
            showLeaveButton: false,
            iframeStyle: {
                position: 'absolute',
                top: '13%',
                left: '20%',
                bottom: '10%',
                right: '20%',
                width: '75%',
                height: '75%'
            }
        });
        callFrame.join({ url: 'https://nuovonatura.daily.co/dev-Test' });
    });

    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleLeave = () => {
      callFrame.destroy();
      Router.push('/');
    }

    const showModal = () => {
      setIsModalVisible(true);
    };
    
    const handleOk = () => {
      setIsModalVisible(false);
    };
    
    const handleCancel = () => {
      setIsModalVisible(false);
    };

    return (
      <div>
        <div>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" span={8}>
                <div style={style}>
                  <h1>Patient Name: Li Beining</h1> 
                </div>
              </Col>

              <Col className="gutter-row" span={8}>
                <div style={style}>
                  <h1>Gender: Female</h1>
                </div>
              </Col>

              <Col className="gutter-row" span={8}>
                <div style={style}>
                  <Button type="primary" danger onClick={handleLeave}>Leave Meeting!</Button>
                </div>
              </Col>
            </Row>
        </div>
        <div>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={8}>
                <div style={style}>
                  <h1 style={style}>DOB: 07-01-1998</h1>
                </div>
              </Col>
              <Col className="gutter-row" span={8}>
                <div style={style}>
                  <h1>Nationality: Singapore</h1>
                </div>
              </Col>
              <Col className="gutter-row" span={8}>
              <div style={style}>
                  <h1>Symptom: Skin feels itchy, it may be eczema. </h1>
                </div>
              </Col>

          </Row>
        </div>
      </div>
    );
}
  

  Room.getLayout = (room) => (
    <MyLayout>
      {room}
    </MyLayout>
  )