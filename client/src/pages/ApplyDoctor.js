import Layout from "./../components/Layout";
import React from "react";
import { Col, Form, Input, Row, TimePicker } from "antd";

const ApplyDoctor = () => {
  //handle form
  const handleFinish = async (values) => {
    console.log(values);
  };
  return (
    <Layout>
      <h1 className="text-center">ApplyDoctor</h1>;
      <Form layout="vertical" onFinish={handleFinish} className="m-4">
        <h4>Personal Details:</h4>
        {/* FIRST ROW FOR PERSONAL DETAILS */}
        <Row gutter={20}>
          <Col xs={24} md={24} lg={8}>
            {/* first name */}
            <Form.Item
              label="First Name"
              name="firstName"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Enter your first name" />
            </Form.Item>
          </Col>

          <Col xs={24} md={24} lg={8}>
            {/* last name */}
            <Form.Item
              label="Last Name"
              name="LastName"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Enter your last name." />
            </Form.Item>
          </Col>

          <Col xs={24} md={24} lg={8}>
            {/* phone no. */}
            <Form.Item
              label="Phone No."
              name=" phone"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Enter your phone no." />
            </Form.Item>
          </Col>

          <Col xs={24} md={24} lg={8}>
            {/* email */}
            <Form.Item
              label="Email"
              name="email"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Enter your email" />
            </Form.Item>
          </Col>

          <Col xs={24} md={24} lg={8}>
            {/* website */}
            <Form.Item label="Website URL" name="website">
              <Input
                type="text"
                placeholder="Enter your website url(optional)"
              />
            </Form.Item>
          </Col>

          <Col xs={24} md={24} lg={8}>
            {/* address */}
            <Form.Item
              label="Address"
              name="address"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Enter your address" />
            </Form.Item>
          </Col>
        </Row>

        <h4>Professional Details</h4>
        <Row gutter={20}>
          {/* 2ND ROW FOR PROFESSIONAL DETAILS */}
          <Col xs={24} md={24} lg={8}>
            {/* Specialization */}
            <Form.Item
              label="Specialization"
              name="specialization"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Enter your Specialization" />
            </Form.Item>
          </Col>

          <Col xs={24} md={24} lg={8}>
            {/* experience */}
            <Form.Item
              label="Experience"
              name="experience"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Enter your experience." />
            </Form.Item>
          </Col>

          <Col xs={24} md={24} lg={8}>
            {/* feesperconsultation */}
            <Form.Item
              label="Phone No."
              name="feesPerConsultation"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Enter feesperconsultation" />
            </Form.Item>
          </Col>

          <Col xs={24} md={24} lg={8}>
            {/* timings */}
            <Form.Item
              label="Timings"
              name="timings"
              required
              rules={[{ required: true }]}
            >
              <TimePicker.RangePicker format="HH:MM" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}></Col>
          <Col xs={24} md={24} lg={8}>
            <div className="d-flex justify-content-end">
              <button className="btn btn-primary form-btn">Submit</button>
            </div>
          </Col>
        </Row>
      </Form>
    </Layout>
  );
};

export default ApplyDoctor;
