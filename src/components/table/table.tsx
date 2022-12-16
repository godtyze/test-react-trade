import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {productionPrice} from "../../types";
import {createTableData} from "../../utils";
import {tableHeaders} from "../../constants";
import {observer} from "mobx-react-lite";
import store from "../../store/store";
import './table.css';

const BasicTable: React.FC = () => {
  const rows = [
    createTableData(tableHeaders.complexEvents,
      'isContainsComplexEvents',
      store.participants
    ),
    createTableData(tableHeaders.productionTime,
      'productionTimeInDays',
      store.participants
    ),
    createTableData(tableHeaders.warranty,
      'warrantyObligationsInMonths',
      store.participants
    ),
    createTableData(tableHeaders.termsOfPayment,
      'termsOfPaymentInPercents',
      store.participants
    ),
    createTableData(tableHeaders.productionPrice,
      'productionPriceInRubles',
      store.participants
    )
  ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ПАРАМЕТРЫ И ТРЕБОВАНИЯ</TableCell>
            {store.participants.map(participant => (
              <TableCell key={participant.key} align="right">
                <div className={store.currentTurnParticipant.key === participant.key
                  ? 'th-wrapper active'
                  : 'th-wrapper'}>
                  <span>УЧАСТНИК №{participant.key}</span>
                  <span>{store.currentTurnParticipant.key === participant.key && 'Ваш ход!'}</span>
                </div>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              {row.participantsData.map(data => {
                switch (row.name) {
                  case tableHeaders.complexEvents:
                    return (
                      <TableCell key={data.key} align="right">{data.value ? 'Есть' : '-'}</TableCell>
                    );
                  case tableHeaders.productionPrice:
                    return (
                      <TableCell key={data.key} align="right">
                        <div className='price'>
                          <span className='price__initial'>{(data.value as productionPrice).initialPrice} руб.</span>
                          <span className='price__subtract'>-{(data.value as productionPrice).subtractionInRubles} руб.</span>
                          <span className='price__final'>{(data.value as productionPrice).finalPrice} руб.</span>
                        </div>
                      </TableCell>
                    );
                  case tableHeaders.termsOfPayment:
                    return (
                      <TableCell key={data.key} align="right">{data.value as number}%</TableCell>
                    );
                  default:
                    return (
                      <TableCell key={data.key} align="right">{data.value as number}</TableCell>
                    );
                }
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default observer(BasicTable);