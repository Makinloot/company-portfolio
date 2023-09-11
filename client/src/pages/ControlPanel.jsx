import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function ControlPanel() {
  const navigate = useNavigate();
  useEffect(() => {
    // localhost for dev env
    axios.get("http://localhost:3000/userstate").then((res) => {
      // axios.get("/userstate").then((res) => {
      if (!res.data.uid) navigate("/auth");
    });
  }, []);
  return <div>ControlPanel</div>;
}
