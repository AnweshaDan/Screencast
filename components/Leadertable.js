import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styles from './Leadertable.module.css'



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

function createData(Rank, Player, Points) {
  return { Rank, Player, Points };
}

const rows = [
  createData(1, 'A', 50),
  createData(1, 'A', 50),
  createData(1, 'A', 50),
  createData(1, 'A', 50),
  createData(1, 'A', 50),
  createData(1, 'A', 50),
  createData(1, 'A', 50),
  createData(1, 'A', 50),

];

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
  const classes = useStyles();

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
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.Rank}
                </StyledTableCell>
                <StyledTableCell align="left">{row.Player}</StyledTableCell>
                <StyledTableCell align="left">{row.Points}</StyledTableCell>


              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </div>


    </div>
  );
}
