import React, { useEffect } from "react";
//here useEffect is a react hook
import axios from "axios"; //we call network with this
const HomePage = () => {
  //login user data
  const getUserData = async () => {
    try {
      const res = await axios.post(
        "/api/v1/user/getUserData",
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            //ye bearer me space ke vajah se error aya tha yaad rakhna token compare
            //hote wqkt uss space ko bhi match kiya jata hai
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <div>
      <h1>Homepage</h1>
    </div>
  );
};

export default HomePage;
