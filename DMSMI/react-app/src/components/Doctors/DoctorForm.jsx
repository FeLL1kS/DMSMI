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

const DoctorForm = ({classes, ...props}) => {

    const handleSubmit = e => {
        e.preventDefault()
        if(props.currentId === 0)
            props.createDoctor(props.formData)
        else
            props.updateDoctor(props.currentId, props.formData)
        resetForm()
    }
    
    const handleInputChange = e => {
        const name = e.target.name
        const value = e.target.value
        let newFormData = {
            ...props.formData,
            [name]: value
        }
        props.updateForm(newFormData)
    }

    const resetForm = () => {
        let newFormData = {
            fullName: '',
            pasport: '',
            education: '',
            age: '',
            specialization: '',
            expirience: ''
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
                <TextField name="pasport" variant="outlined" label="Паспорт" value={props.formData.pasport} onChange={handleInputChange}/>
            </Grid>
            <Grid item xs={6}>
                <TextField name="education" variant="outlined" label="Образование" value={props.formData.education} onChange={handleInputChange}/>
                <TextField name="specialization" variant="outlined" label="Специализация" value={props.formData.specialization} onChange={handleInputChange}/>
                <TextField name="expirience" variant="outlined" label="Опыт" value={props.formData.expirience} onChange={handleInputChange}/>
                <div>
                    <Button variant="contained" color="primary" type="submit" className={classes.smMargin}>Отправить</Button>
                    <Button variant="contained" onClick={resetForm} className={classes.smMargin}>Сбросить</Button>
                </div>
            </Grid>
            </Grid>
        </form>
    )
} 

export default withStyles(styles)(DoctorForm)