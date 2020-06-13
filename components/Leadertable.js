import React, {useState, useEffect} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styles from './Leadertable.module.css'
import axios from 'axios'


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#000033",
    color: "white",
    border: "none",
  },
  body: {
    fontSize: 14,
    color: "white",
    border: "none",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: "rgba(255,255,255,0.4)",
    },
    '&:nth-of-type(even)': {
      backgroundColor: "rgba(0,0,0,0.5)",
      color: "white",
    },
  },
}))(TableRow);






const useStyles = makeStyles({
  table: {
    marginTop: "10px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "auto",
    maxWidth: '700px',
    position: "relative"
  },
});




export default function CustomizedTables() {

  const [RankList, setRankList]=useState([])
  const classes = useStyles();
 

  useEffect(()=> {  
    axios.get('https://jsonplaceholder.typicode.com/users').then(response => {  

      console.log((RankList));
      setRankList( response.data  
      );
      console.log((RankList));

    });  
     
    console.log(RankList);  
    
  });  

  return (
    <div>

      <div className="rtable">
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Rank</StyledTableCell>
              <StyledTableCell align="left">Player</StyledTableCell>
              <StyledTableCell align="left">Points</StyledTableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {RankList.map((row,index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell align="left">{row.username}</StyledTableCell>
                <StyledTableCell align="left">{row.email}</StyledTableCell>


              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </div>


    </div>
  );
}
