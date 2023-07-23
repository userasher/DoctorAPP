import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { useSelector, useDispatch } from "react-redux";
import { Col, Form, Input, Row, TimePicker, message } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import { showLoading, hideLoading } from "../../redux/features/alertSlice";
//params and useEffect are hooks used on this page

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  const [doctor, setDoctor] = useState(null);
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //update doc ==================
  const handleFinish = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/doctor/updateProfile",
        { ...values, userId: user._id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        message.success(res.data.message);
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Something went wrong");
    }
  };

  //get doc details function
  const getDoctorInfo = async () => {
    try {
      const res = await axios.post(
        "/api/v1/doctor/getDoctorInfo",
        { userId: params.id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.data.success) {
        setDoctor(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDoctorInfo();
  }, []);
  return (
    <Layout>
      <h1>Manage Profile</h1>
      {doctor && (
        <Form
          layout="vertical"
          onFinish={handleFinish}
          className="m-4"
          initialValues={doctor}
        >
          <h4>Personal Details:</h4>
          {/* FIRST ROW FOR PERSONAL DETAILS */}
          <Row gutter={20}>
            <Col xs={24} md={24} lg={8}>
              {/* first name */}
              <Form.Item
                label="First Name"
                name="firstName"
                required
                // rules={[{ required: true }]}
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
                // rules={[{ required: true }]}
              >
                <Input type="text" placeholder="Enter your last name." />
              </Form.Item>
            </Col>

            <Col xs={24} md={24} lg={8}>
              {/* phone no. */}
              <Form.Item
                label="Phone No."
                name="phone"
                required
                // rules={[{ required: true }]}
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
                // rules={[{ required: true }]}
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
                // rules={[{ required: true }]}
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
                // rules={[{ required: true }]}
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
                // rules={[{ required: true }]}
              >
                <Input type="text" placeholder="Enter your experience." />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              {/* feesperconsultation */}
              <Form.Item
                label="FessPerConsultation"
                name="feesPerConsultation"
                required
                // rules={[{ required: true }]}
              >
                <Input type="text" placeholder="Enter feesperconsultation" />
              </Form.Item>
            </Col>

            {/* <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Timing"
                name="timings"
                required
                // rules={[{ required: true }]}
              >
                <TimePicker.RangePicker format="hh:mm" />
              </Form.Item>
            </Col> */}

            <Col xs={24} md={24} lg={8}></Col>
            <Col xs={24} md={24} lg={8}>
              <div className="d-flex justify-content-end">
                <button className="btn btn-primary form-btn" type="submit">
                  Update
                </button>
              </div>
            </Col>
          </Row>
        </Form>
      )}
    </Layout>
  );
};

export default Profile;
