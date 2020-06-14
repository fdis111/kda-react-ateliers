import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import { Button } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
});


const MyTable = (props) => {
    const classes = useStyles();
    return ( 
        <TableContainer>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        {
                            props.tabCol.map(col => {
                                return <TableCell align="center">{col}</TableCell>            
                            })
                        }
                        <TableCell align="center" colspan="2">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {
                   props.employes.map(employe => {
                        return (
                            <tr key = {employe._id}>
                                <TableCell align="right">{employe.nom}</TableCell>
                                <TableCell align="right">{employe.prenom}</TableCell>
                                <TableCell align="right">{employe.etatMarital}</TableCell>
                                <TableCell align="right">{employe.pays}</TableCell>
                                <TableCell align="right">{employe.numeroTelephone}</TableCell>
                                <TableCell align="right">{employe.email}</TableCell>
                                <TableCell align="right">{employe.poste}</TableCell>
                                <TableCell align="right"><Button color="secondary" variant="outlined"> <DeleteIcon  /> </Button></TableCell>
                                <TableCell align="right"><Button color="primary" variant="outlined" ><EditIcon  /></Button></TableCell> 
                            </tr>
                        )
                    } )
                }
                </TableBody>
            </Table>
        </TableContainer>
        // <table className={props.className}>
        //     <thead>
        //         <tr>
        //             {
        //                 props.tabCol.map(col => {
        //                     return (
        //                         <th>{col}</th>
        //                     )
        //                 })
        //             }
        //             <th colspan="2">Action</th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         {
        //            props.employes.map(employe => {
        //                 return (
        //                     <tr key = {employe._id}>
        //                         <td data-label="Nom">{employe.nom}</td>
        //                         <td data-label="Prenom">{employe.prenom}</td>
        //                         <td data-label="Status Marital">{employe.etatMarital}</td>
        //                         <td data-label="Pays">{employe.pays}</td>
        //                         <td data-label="Télephone">{employe.numeroTelephone}</td>
        //                         <td data-label="Email">{employe.email}</td>
        //                         <td data-label="Post">{employe.poste}</td>
        //                         <td data-label="Action"><Button color="secondary" variant="outlined"> <DeleteIcon  /> </Button></td>
        //                         <td data-label="Action"><Button color="primary" variant="outlined" ><EditIcon  /></Button></td> 

        //                     </tr>
        //                 )
        //             } )
        //         }
        //     </tbody>
        // </table>
     );
}
 
export default MyTable;