import React from 'react'
import { Grid, TextField, Button, InputLabel, Select, MenuItem, FormControl, withStyles } from '@material-ui/core';


const styles = theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            minWidth: 230
        }
    },
    smMargin: {
        margin: theme.spacing(1)
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 230
    }
})

const AppointmentsForm = ({classes, ...props}) => {

    const handleSubmit = e => {
        e.preventDefault()
        if(props.currentId === 0)
            props.createAppointment(props.formData)
        else
            props.updateAppointment(props.currentId, props.formData)
        resetForm()
    }
    
    const handleInputChange = e => {
        const name = e.target.name
        const value = e.target.value
        let newFormData = {
            ...props.formData,
            [name]: value
        }
        console.log(newFormData)
        props.updateForm(newFormData)
    }

    const resetForm = () => {
        let newFormData = {
            clientId: '',
            doctorId: '',
            appointmentDate: '',
            note: ''
        }
        props.updateForm(newFormData)
        props.updateCurrentId(0)
    }

    return (
        <form autoComplete="off" noValidate onSubmit={handleSubmit} className={classes.root}>
            <Grid container>
            <Grid item xs={6}>
                <FormControl className={classes.formControl}>
                    <InputLabel>Клиенты</InputLabel>
                    <Select name="clientId" value={props.formData.clientId} onChange={handleInputChange}>
                        <MenuItem value="">Выберите клиента</MenuItem>
                        {props.clients.map(c => <MenuItem key={c.id} value={c.id}>{c.fullName}</MenuItem>)}
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel>Доктора</InputLabel>
                    <Select name="doctorId" value={props.formData.doctorId} onChange={handleInputChange}>
                        <MenuItem value="">Выберите доктора</MenuItem>
                        {props.doctors.map(d => <MenuItem key={d.id} value={d.id}>{d.fullName}</MenuItem>)}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField name="appointmentDate" label="Дата записи" type="date" value={props.formData.appointmentDate} onChange={handleInputChange} className={classes.textField} InputLabelProps={{ shrink: true, }}/>
                <TextField name="note" variant="outlined" label="Примечание" value={props.formData.note} onChange={handleInputChange}/>
                <div>
                    <Button variant="contained" color="primary" type="submit" className={classes.smMargin}>Отправить</Button>
                    <Button variant="contained" onClick={resetForm} className={classes.smMargin}>Сбросить</Button>
                </div>
            </Grid>
            </Grid>
        </form>
    )
} 

export default withStyles(styles)(AppointmentsForm)