import React from "react";
import Router from "next/router";
import Button from "@material-ui/core/Button";
import Layout from "../components/Layout";

function finale() {

   const goback=()=>
   {
     localStorage.removeItem('email');
     Router.push('/');
   }
  
  return (
    <Layout>
      <div>
        <div
          style={{
            textAlign: "center",
            fontSize: "22px",
            fontFamily: "'Russo One', sans-serif",
            margin: "190px auto",
          }}
        >
          <span className="flicker">Times up !</span>
          <br />
          <span className="flicker">This round is over.</span>
          <br />
          <span className="flicker">Wait for tomorrow for more exciting ones.</span>
          <br/>
          <br/>
          <br />
          <span className="flicker">Your job here is done !</span>
        </div>
        <div style={{}}>
            <Button
            className="btnSubmit"
            variant="contained"
            color="primary"
            
            elevation={3}
            onClick={goback}
            style={{ backgroundColor: '#522d80', border: "3px solid white", height: "40px", width: "100px", borderRadius: "7px",display:'block',margin : '0 auto', width:'50%' }}
          >
            Logout/Go back
              </Button>
        </div>
      </div>
      <div style={{paddingTop:'220px'}}>
      
      </div>
      
    </Layout>
  );
}

export default finale;
