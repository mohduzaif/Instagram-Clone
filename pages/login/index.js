import Image from "next/image";
import logo from "../../assets/Instagram.jpeg";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Carousel } from "react-responsive-carousel";
import bg1 from "../../assets/bg1.jpg";
import bg2 from "../../assets/bg2.jpg";
import bg3 from "../../assets/bg3.jpg";
import bg4 from "../../assets/bg4.jpg";
import bg5 from "../../assets/bg5.jpg";
import { AuthContext } from "../../context/auth";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

function index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { user, login } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  });

  let handleClick = async () => {
    try {
      console.log(email);
      console.log(password);
      setLoading(true);
      setError("");
      await login(email, password);
      console.log("Logged In");
    } catch (err) {
      // console.log("err123",err.code);
      setError(err.code);
      setTimeout(() => {
        setError("");
      }, 3000);
    }

    setLoading(false);
  };

  return (
    <div className="login-conatiner">
      <div className="insta-mob-bg">
        <div className="carousel">
          <Carousel
            autoPlay={true}
            interval={1500}
            infiniteLoop={true}
            showArrows={false}
            showIndicators={false}
            showThumbs={false}
            showStatus={false}
          >
            <Image src={bg1} style={{ width: "250px", height: "434px" }} />
            <Image src={bg2} style={{ width: "250px", height: "434px" }} />
            <Image src={bg3} style={{ width: "250px", height: "434px" }} />
            <Image src={bg4} style={{ width: "250px", height: "434px" }} />
            <Image src={bg5} style={{ width: "250px", height: "434px" }} />
          </Carousel>
        </div>
      </div>
      <div>
        <div className="login-card">
          <Image src={logo} />
          <TextField
            id="outlined-basic"
            fullWidth
            type="text"
            label="Email"
            variant="outlined"
            margin="dense"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            id="outlined-basic"
            fullWidth
            type="password"
            label="Password"
            variant="outlined"
            margin="dense"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          {
            // if error is occured , then show the error
            error != "" && <div style={{ color: "red" }}>{error}</div>
          }
          <div style={{ color: "blue", marginTop: "1rem" }}>
            Forgot Password ?{" "}
          </div>
          <Button
            fullWidth
            variant="contained"
            style={{ marginTop: "1.5rem" }}
            onClick={handleClick}
          >
            Log in
          </Button>
        </div>
        <div className="bottom-card">
          Don't Have an Account?
          <span style={{ color: "blueviolet" }}> Sign Up </span>
        </div>
      </div>
    </div>
  );
}

export default index;
