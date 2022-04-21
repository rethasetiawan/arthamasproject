import React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import {
    LabelContainer,
    InputWidth,
    BtnContainer,
  } from './LoginScreenStyle';

const PersonalScreen = ({}) =>{
      const dummyData = [
        {userid: 273, name: 'Margaretha Setiawan', password: 'password', role:'Role A'},
        {userid: 56, name: 'John Smith', password: 'password', role:'Role B'}
      ];
  
      const headCells = [
        {
          id: 'userid',
          label: 'UserId',
        },
        {
          id: 'name',
          label: 'Name',
        },
        {
          id: 'pass',
          label: 'Password',
        },
        {
            id: 'role',
            label: 'Role',
        },
        {
            id: 'misc',
            label: '',
          },
      ];
      
      const TableHeads = () => {
        return (
            <TableHead style={{background:'#DBE2EF'}}>
              <TableRow>
                {headCells.map((headCell) => (
                  <TableCell key={headCell.id}>
                      {headCell.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
          );
      }

    return(
        <div  style={{padding:30}}>
            <h3>Create User</h3> 
            <div style={{width:'80%'}}>
                <LabelContainer>
                  <div>UserId</div>
                  <InputWidth><input style={{border:'1px solid lightgray', padding:5, width:'100%'}}/></InputWidth>
                </LabelContainer>

                <LabelContainer>
                  <div>Name</div>
                  <InputWidth><input style={{border:'1px solid lightgray', padding:5, width:'100%'}}/></InputWidth>
                </LabelContainer>
                <LabelContainer>
                  <div>Password</div>
                  <InputWidth><input style={{border:'1px solid lightgray', padding:5, width:'100%'}}/></InputWidth>
                </LabelContainer>

                <LabelContainer>
                  <div>Role</div>
                  <InputWidth><input style={{border:'1px solid lightgray', padding:5, width:'100%'}}/></InputWidth>
                </LabelContainer>
                <BtnContainer style={{marginTop:20}}>CREATE</BtnContainer>
            </div>

            <div style={{background:'gray', height:1, width:'100%', margin:'30px 0px 30px 0px'}}/>
        <h3>List User</h3> 
        <Box sx={{ width: '100%', border:'1px solid #DBE2EF', broderRadius: 20 }}>
        {/* <Paper sx={{ width: '100%', mb: 2 }}> */}
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
            >
              <TableHeads/>
              <TableBody>
                {dummyData.map((row,index) => (
                    <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.userid}
                    </TableCell>
                    <TableCell >{row.name}</TableCell>
                    <TableCell >{row.password}</TableCell>
                    <TableCell >{row.role}</TableCell>
                    <TableCell >
                        <button style={{border:0, borderRadius:10, background:'#3F72AF', color:'white', padding:'10px 20px 10px 20px'}}>Edit</button>
                    </TableCell>
                    </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {/* <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          /> */}
        {/* </Paper> */}
       
      </Box>
      </div>
    )
}
export default (PersonalScreen);