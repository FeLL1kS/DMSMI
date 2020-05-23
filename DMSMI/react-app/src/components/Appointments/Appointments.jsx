import React from 'react'
import { Grid, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, ButtonGroup, Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import classes from './Appointments.module.css'
import AppointmentsFormContainer from './AppointmentsFormContainer';

class Appointments extends React.Component {

    componentDidMount()
    {
        this.props.fetchAllAppointments()
    }

    // componentDidUpdate()
    // {
    //     this.props.fetchAllAppointments()
    // }

    updateSelected(id)
    {
        let appointment = this.props.appointments.find(a => a.id === id)
        
        let newFormData = {
            clientId: appointment.clientId,
            doctorId: appointment.doctorId,
            appointmentDate: appointment.appointmentDate.slice(0, 10),
            note: appointment.note
        }

        console.log(newFormData);
        
        this.props.updateForm(newFormData)
        this.props.updateCurrentId(id)        
    }
    

    render()
    {
        return (
            <Paper className={classes.paper} elevation={3}>
                <Grid container>
                    <Grid item xs={6}>
                        {/* <select>
                            {this.props.clients.map(c => (<option key={c.id} value={c.id}>{c.fullName}</option>))}
                        </select> */}
                        <AppointmentsFormContainer />
                    </Grid>
                    <Grid item xs={6}>
                        <TableContainer>
                            <Table>
                                <TableHead className={classes.root}>
                                    <TableRow>
                                    <TableCell>Client</TableCell>
                                    <TableCell>Doctor</TableCell>
                                    <TableCell>Date</TableCell>
                                    <TableCell></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        this.props.appointments.map((record, index) =>{
                                            return (<TableRow key={index} hover>
                                                <TableCell>{record.client.fullName}</TableCell>
                                                <TableCell>{record.doctor.fullName}</TableCell>
                                                <TableCell>{record.appointmentDate.slice(0, 10)}</TableCell>
                                                <TableCell>
                                                    <ButtonGroup variant="text">
                                                        <Button><EditIcon color="primary" onClick={()=>{this.updateSelected(record.id)}}/></Button>
                                                        <Button><DeleteIcon color="secondary" onClick={()=> this.props.deleteAppointment(record.id)}/></Button>
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

export default Appointments