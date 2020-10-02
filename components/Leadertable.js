import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import data from '../env.json';
import Avatar from "@material-ui/core/Avatar";
import styles from "./Navbar.module.css";
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#000044",
    color: "white",
    border: "none",
    fontFamily:"Russo One",
    fontSize: 16
  },
  body: {
    fontFamily:"Russo One",
    fontSize: 14,
    color: "white",
    border: "none",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: "rgba(255,255,255,0.4)",
    },
    "&:nth-of-type(even)": {
      backgroundColor: "rgba(0,0,0,0.5)",
      color: "white",
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    marginTop: "15px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "auto",
    maxWidth: "900px",
    position: "relative",
    marginBottom: "20px"
  },
});

export default function Leadertable() {
  const [RankList, setRankList] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    axios
      .get(data.api+"/api/leaderboard"/*, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }*/)
      .then((response) => {
        setRankList(response.data);
        console.log(response.data);
        console.log(RankList);
      });
  }, []);

  return (
    <div>
      <div className="rtable">
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>

              <StyledTableCell>Rank</StyledTableCell>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell align="left">Player</StyledTableCell>
              <StyledTableCell align="left">Points</StyledTableCell>
            </TableRow>
          </TableHead>

          {RankList.length ? (
            <TableBody style={{ fontFamily: "'Barlow', sans-serif" }}>
              {RankList.map((row, index) => (
                <StyledTableRow
                  key={index}
                  style={{ fontFamily: "'Barlow', sans-serif" }}
                >
                  <StyledTableCell component="th" scope="row">
                    {row.rank}.
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    
                    <Avatar
                  
                  alt={name}
                  src={row.imgurl}
                  
                  
                /></StyledTableCell>
                <StyledTableCell>{row.name}</StyledTableCell>
                  <StyledTableCell align="left">{row.score}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          ) : (
            <Typography
                variant="h6"
                className={classes.title}
                style={{ fontFamily: "'Russo One', sans-serif", fontSize:18, color:'white'}}
              >

                &nbsp;&nbsp;&nbsp;Loading...
              </Typography>

            )}
        </Table>
      </div>
    </div>
  );
}
