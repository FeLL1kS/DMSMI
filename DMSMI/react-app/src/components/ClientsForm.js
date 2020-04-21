import React, { useState, useEffect } from 'react';
import { Grid, TextField, withStyles, Button } from '@material-ui/core';
import { connect } from 'react-redux'
import * as actions from '../actions/Client'
import useForm from './UseForm'
import { useToasts }  from 'react-toast-notifications'

const styles = theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            minWidth: 230
        }
    },
    smMargin: {
        margin: theme.spacing(1)
    }
})

const initialFieldValue = {
    fullName : '',
    age : '',
    sex : '',
    snils : '',
    police : '',
    address : ''
}

const ClientsForm = ({classes, ...props}) => {

    const{ addToast } = useToasts()

    const{
        values,
        setValues,
        handleInputChange,
        resetForm
    } = useForm(initialFieldValue, props.setCurrentId)

    const handleSubmit = e => {
        e.preventDefault()
        const onSuccess = () => { 
            resetForm()
            addToast("Submitted successfully", {appearance: 'success'})
        }
        if(props.currentId == 0)
            props.createClient(values, onSuccess)
        else
            props.updateClient(props.currentId, values, onSuccess)
    }

    useEffect(() => {
        if(props.currentId != 0)
            setValues({
                ...props.clientList.find(x => x.id == props.currentId)
            })
    },[props.currentId])

    return ( 
        <form autoComplete="off" noValidate className={classes.root} onSubmit={handleSubmit}>
            <Grid container>
            <Grid item xs={6}>
                <TextField name="fullName" variant="outlined" label="ФИО" value={values.fullName} onChange={handleInputChange}/>
                <TextField name="age" variant="outlined" label="Возраст" value={values.age} onChange={handleInputChange}/>
                <TextField name="sex" variant="outlined" label="Пол" value={values.sex} onChange={handleInputChange}/>
            </Grid>
            <Grid item xs={6}>
                <TextField name="snils" variant="outlined" label="СНИЛС" value={values.snils} onChange={handleInputChange}/>
                <TextField name="police" variant="outlined" label="Полис" value={values.police} onChange={handleInputChange}/>
                <TextField name="address" variant="outlined" label="Адрес" value={values.address} onChange={handleInputChange}/>
                <div>
                    <Button variant="contained" color="primary" type="submit" className={classes.smMargin}>Отправить</Button>
                    <Button variant="contained" onClick={resetForm} className={classes.smMargin}>Сбросить</Button>
                </div>
            </Grid>
            </Grid>
        </form>
    );
}

const mapStateToProps = state => ({
    clientList: state.Client.list
})

const mapActionToProps = {
    createClient : actions.create,
    updateClient : actions.update
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(ClientsForm));