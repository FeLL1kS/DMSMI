import Doctors from './Doctors'
import { connect } from 'react-redux'
import * as actions from '../../api/Doctors/Doctor'
import { UPDATE_CURRENT_ID, UPDATE_FORM } from '../../redux/doctorsReducer'

let mapStateToProps = (state) => {
    return {
        doctors: state.doctorsPage.doctors,
        formData: state.doctorsPage.formData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateForm: newFormData => {
            dispatch({type: UPDATE_FORM, newFormData})
        },
        updateCurrentId: newCurrentId => {
            dispatch({type: UPDATE_CURRENT_ID, newCurrentId})  
        },
        fetchAllDoctors: () => {
            actions.fetchAll(dispatch)
        },
        deleteDoctor: id => actions.Delete(dispatch, id)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Doctors)