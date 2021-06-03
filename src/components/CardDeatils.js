import React from 'react'
import './card-details.css'
 import { Card, Col, Row } from 'antd';

 
import 'antd/dist/antd.css';

const CardDeatils = () => {
    return (
        <div className="detail-cont">
            <h1>Shop Details</h1>
            <div className="boxxx">
            <div className="leftbox">
                <img src="19396.jpg"/>

            </div>
            <div className="rightbox">
                <h1>shop Name - Bajaj service center</h1>
                <h2>Full Address - shop no 15 near lajpatnagar delhi</h2>
                <h3>owner-Rajesh</h3>
                <h3>Contact details:9756523412</h3>
                <h3></h3>

                </div>
            </div>
            <h1>Customer Review</h1>
            <div className="Rating-section">
<div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Great service"  hoverable={true} >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa eos sint? Esse sunt, consectetur ipsum nostrum cumque, soluta excepturi deleniti alias et exercitationem aut odio velit omnis perferendis officiis?
        <h3>Arun</h3>                         
        </Card>
      </Col>
      <Col span={8}>
           <Card title="Great service"  hoverable={true} >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa eos sint? Esse sunt, consectetur ipsum nostrum cumque, soluta excepturi deleniti alias et exercitationem aut odio velit omnis perferendis officiis?
        <h3>Rishav</h3>                         
        </Card>
      </Col>
      <Col span={8}>
         <Card title="Great service"  hoverable={true} >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa eos sint? Esse sunt, consectetur ipsum nostrum cumque, soluta excepturi deleniti alias et exercitationem aut odio velit omnis perferendis officiis?
        <h3>Pallavi</h3>                         
        </Card>
      </Col>
    </Row>
  </div>
            </div>
        </div>
    )
}

export default CardDeatils
