import React, {useState} from 'react';
import Button from '@material-ui/core/Button';






function Submit(props) {
  
  


  

 
  
  return (
    <div>
      
    <Button className="btnSubmit" variant="contained" color="primary"  disableElevation onClick={props.submit}>
      Submit
    </Button>
    
    
  


  </div>
  );
}

export default Submit;
