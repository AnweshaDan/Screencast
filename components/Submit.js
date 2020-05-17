import React from 'react';
import Button from '@material-ui/core/Button';


function Submit(props) {
  
  return (
    <Button className="btnSubmit" variant="contained" color="primary" href='/' disableElevation onClick={props.submit}>
      Submit
    </Button>
  );
}
export default Submit;
