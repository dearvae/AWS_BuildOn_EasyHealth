import Link from 'next/link'
import Router from 'next/router'
import DailyIframe from '@daily-co/daily-js';
import MyLayout from '../components/layout'
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
                top: '15%',
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
                  <h1>Doctor: Meng Jiayu</h1> 
                </div>
              </Col>

              <Col className="gutter-row" span={8}>
                <div style={style}>
                  <h1>Specialty: Skincare</h1>
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
            <Col className="gutter-row" span={16}>
                <div style={style}>
                  <h1 style={style}>Currently working at : National Neuroscience Institute of Singapore</h1>
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