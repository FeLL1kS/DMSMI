import React from 'react'
import { Grid, TextField, Button, withStyles } from '@material-ui/core';

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

const ClientForm = ({classes, ...props}) => {

    const handleSubmit = e => {
        e.preventDefault()
        if(props.currentId === 0)
            props.createClient(props.formData)
        else
            props.updateClient(props.currentId, props.formData)
        resetForm()
    }
    
    const handleInputChange = e => {
        const name = e.target.name
        const value = e.target.value
        let newFormData = {
            ...props.formData,
        }
        newFormData[name] = value;
        props.updateForm(newFormData)
    }

    const resetForm = () => {
        let newFormData = {
            fullName: '',
            age: '',
            sex: '',
            snils: '',
            police: '',
            address: ''
        }
        props.updateForm(newFormData)
        props.updateCurrentId(0)
    }

    return (
        <form autoComplete="off" noValidate onSubmit={handleSubmit} className={classes.root}>
            <Grid container>
            <Grid item xs={6}>
                <TextField name="fullName" variant="outlined" label="ФИО" value={props.formData.fullName} onChange={handleInputChange}/>
                <TextField name="age" variant="outlined" label="Возраст" value={props.formData.age} onChange={handleInputChange}/>
                <TextField name="sex" variant="outlined" label="Пол" value={props.formData.sex} onChange={handleInputChange}/>
            </Grid>
            <Grid item xs={6}>
                <TextField name="snils" variant="outlined" label="СНИЛС" value={props.formData.snils} onChange={handleInputChange}/>
                <TextField name="police" variant="outlined" label="Полис" value={props.formData.police} onChange={handleInputChange}/>
                <TextField name="address" variant="outlined" label="Адрес" value={props.formData.address} onChange={handleInputChange}/>
                <div>
                    <Button variant="contained" color="primary" type="submit" className={classes.smMargin}>Отправить</Button>
                    <Button variant="contained" onClick={resetForm} className={classes.smMargin}>Сбросить</Button>
                </div>
            </Grid>
            </Grid>
        </form>
    )
} 

export default withStyles(styles)(ClientForm)