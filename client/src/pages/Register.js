import { Form, Input, message } from "antd";
import "../styles/RegisterStyles.css";
import React from "react";
import axios from "axios"; //we call network with this
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  //constant variable for navigate method from reactdom router
  const navigate = useNavigate();
  //form handler function
  const onfinishHandler = async (values) => {
    try {
      const res = await axios.post("/api/v1/user/register", values);
      //userctrl.js file me success ki jo spelling hai wo aur ye same hone chahiye
      if (res.data.success) {
        message.success("Registered successfully!"); //antd me alert box ke liye
        navigate("/login"); //to navigate to login page ek hook hai ye
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("something went wrong");
    }
  };
  return (
    //react fragment syntatical sugar form
    <>
      <div className="form-container">
        <Form
          layout="vertical"
          onFinish={onfinishHandler}
          className="register-form"
        >
          <h1 className="text-center">Register Form</h1>
          <Form.Item label="Name" name="name">
            <Input type="text" required />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>
          <button className="btn btn-primary" type="submit">
            Register
          </button>
          <Link to="/login" className="ms-2">
            Already a user Login here
          </Link>
        </Form>
      </div>
    </>
  );
};

export default Register;
