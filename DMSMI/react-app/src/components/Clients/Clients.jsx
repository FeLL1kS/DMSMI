import React from 'react'
import classes from './Clients.module.css'
import { Grid, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, withStyles, ButtonGroup, Button } from '@material-ui/core';
import ClientsFormContainer from './ClientsFormContainer';
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'


class Clients extends React.Component {

    componentDidMount()
    {
        this.props.fetchAllClients()
    }

    updateSelected(id)
    {
        let newFormData = this.props.clients.find(c => c.id == id)
        this.props.updateForm(newFormData)
        this.props.updateCurrentId(id)
    }

    render() 
    {
        return(
            <Paper className={classes.paper} elevation={3}>
                <Grid container>
                    <Grid item xs={6}>
                        <ClientsFormContainer />
                    </Grid>
                    <Grid item xs={6}>
                        <TableContainer>
                            <Table>
                                <TableHead className={classes.root}>
                                    <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Sex</TableCell>
                                    <TableCell>Age</TableCell>
                                    <TableCell></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        this.props.clients.map((record, index) =>{
                                            return (<TableRow key={index} hover>
                                                <TableCell>{record.fullName}</TableCell>
                                                <TableCell>{record.sex}</TableCell>
                                                <TableCell>{record.age}</TableCell>
                                                <TableCell>
                                                    <ButtonGroup variant="text">
                                                        <Button><EditIcon color="primary" onClick={()=>{this.updateSelected(record.id)}}/></Button>
                                                        <Button><DeleteIcon color="secondary" onClick={()=> this.props.deleteClient(record.id)}/></Button>
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

export default Clients