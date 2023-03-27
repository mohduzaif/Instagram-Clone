import React from "react";
import Image from "next/image";
import logo from "../../assets/Instagram.jpeg";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';

function index() {
  return (
    <div className="signup-conatiner">
      <div className="signup-card">
        <Image src={logo} />
        <TextField
          id="outlined-basic"
          fullWidth
          label="Email"
          variant="outlined"
          margin="dense"
        />
        <TextField
          id="outlined-basic"
          fullWidth
          label="Password"
          variant="outlined"
          margin="dense"
        />
        <TextField
          id="outlined-basic"
          fullWidth
          label="Full Name"
          variant="outlined"
          margin="dense"
        />
        <Button 
        variant="outlined"
        fullWidth 
        color= "secondary"
        component="label">
            <CloudUploadOutlinedIcon/>
            Upload Profile Image
            {/* Here accept means we want and image nothing else */}
            <input hidden accept="image/*" type={"file"}/>
        </Button>
        <Button fullWidth variant="contained" style ={{marginTop:"1.5rem"}}>Sign Up</Button>
        <div className="tnc">
            By signing up, you agree to our Terms , Conditions and Cookies Policy.
        </div>
      </div>
      <div className="signup-bottom-card">Already Have an Account? 
      <span style={{color : "blueviolet"}}> Login </span> 
      </div>
    </div>
  );
}

export default index;
