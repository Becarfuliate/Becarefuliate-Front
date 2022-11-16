import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import {getDataGamesUser} from '../../store/Partidas/actions';
import TableContainer from '@mui/material/TableContainer';
import React, { useState, useEffect } from "react";
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import { styled } from '@mui/material/styles';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import UnirsePatida from '../UnirsePartida/UnirsePartida';
import {connect} from 'react-redux';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  }
}));


function ListarPartida({getDataGamesUser}) {
  const [listPartidas, setListPartidas] = useState([]);
  
  useEffect(() => {
    getDataGamesUser(setListPartidas);
  }, [getDataGamesUser]);
  
  return (
  <div>
    <TableContainer component={Paper}>
      <Table sx={{ width: 'auto', ml: 50}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>name</StyledTableCell>
            <StyledTableCell align="right">max_players</StyledTableCell>
            <StyledTableCell align="right">min_players</StyledTableCell>
            <StyledTableCell align="right">n_matchs</StyledTableCell>
            <StyledTableCell align="right">n_rounds_matchs</StyledTableCell>
            <StyledTableCell align="right">Estado/Accion de la Partida</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listPartidas.map((row) => (
            <StyledTableRow user={row.id} key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.max_players}</StyledTableCell>
              <StyledTableCell align="right">{row.min_players}</StyledTableCell>
              <StyledTableCell align="right">{row.n_matchs}</StyledTableCell>
              <StyledTableCell align="right">{row.n_rounds_matchs}</StyledTableCell>
              <StyledTableCell>
                <UnirsePatida matchID={row.id}/>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
  );
}

export default connect(null, {getDataGamesUser})(ListarPartida);