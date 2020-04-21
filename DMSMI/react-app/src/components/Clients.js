import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions/Client'
import { Grid, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, withStyles, ButtonGroup, Button } from '@material-ui/core';
import ClientsForm from './ClientsForm'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import { useToasts }  from 'react-toast-notifications'

const styles = theme => ({
    root : {
        "& .MuiTableCell-head":{
            fontSize: "1.25rem"
        }
    },
    paper : {
        margin: theme.spacing(2),
        padding: theme.spacing(2)
    }
}) 

const Clients = ({classes, ...props}) => {
    const[currentId, setCurrentId] = useState(0)

    useEffect(() => {
        props.fetchAllClients()
    }, [])

    const{ addToast } = useToasts()

    const onDelete = id => {
        props.deleteClient(id, ()=>addToast("Deleted successfully", {appearance: 'info'}))
    }

    return ( 
        <Paper className={classes.paper} elevation={3}>
            <Grid container>
                <Grid item xs={6}>
                    <ClientsForm {...({currentId, setCurrentId})}/>
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
                                    props.clientList.map((record, index) =>{
                                        return (<TableRow key={index} hover>
                                            <TableCell>{record.fullName}</TableCell>
                                            <TableCell>{record.sex}</TableCell>
                                            <TableCell>{record.age}</TableCell>
                                            <TableCell>
                                                <ButtonGroup variant="text">
                                                <Button><EditIcon color="primary" onClick={()=>{setCurrentId(record.id)}}/></Button>
                                                <Button><DeleteIcon color="secondary" onClick={()=> onDelete(record.id)}/></Button>
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
     );
}

const mapStateToProps = state => ({
    clientList: state.Client.list
})

const mapActionToProps = {
    fetchAllClients : actions.fetchAll,
    deleteClient : actions.Delete
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(Clients));