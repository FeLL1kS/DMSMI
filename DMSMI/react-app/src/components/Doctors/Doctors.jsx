import React from 'react'
import { Grid, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, ButtonGroup, Button } from '@material-ui/core';
import classes from './Doctors.module.css'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import DoctorFormContainer from './DoctorFormContainer';

class Doctors extends React.Component {

    componentDidMount()
    {
        this.props.fetchAllDoctors()
    }

    updateSelected(id)
    {
        let newFormData = this.props.doctors.find(c => c.id === id)
        this.props.updateForm(newFormData)
        this.props.updateCurrentId(id)
    }

    render()
    {
        return (
            <Paper className={classes.paper} elevation={3}>
                <Grid container>
                    <Grid item xs={6}>
                        <DoctorFormContainer />
                    </Grid>
                    <Grid item xs={6}>
                        <TableContainer>
                            <Table>
                                <TableHead className={classes.root}>
                                    <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Pasport</TableCell>
                                    <TableCell>Age</TableCell>
                                    <TableCell></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        this.props.doctors.map((record, index) =>{
                                            return (<TableRow key={index} hover>
                                                <TableCell>{record.fullName}</TableCell>
                                                <TableCell>{record.pasport}</TableCell>
                                                <TableCell>{record.age}</TableCell>
                                                <TableCell>
                                                    <ButtonGroup variant="text">
                                                        <Button><EditIcon color="primary" onClick={()=>{this.updateSelected(record.id)}}/></Button>
                                                        <Button><DeleteIcon color="secondary" onClick={()=> this.props.deleteDoctor(record.id)}/></Button>
                                                    </ButtonGroup>
                                                </TableCell>
                                            </TableRow>)
                                        })
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </Paper>
        )
    }
}

export default Doctors