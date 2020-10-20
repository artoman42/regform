import React from 'react'
import { RegistrationFormComponent } from '../Component/RegistrationFormComponent';

import s from '../Stylesheets/registrationForm.module.css'

export class RegistrationFormCreator extends React.Component {
    constructor(props){
        super(props);
        this.state = {
                name:"",
                surname:"",
                mail:"",
                phone:"",
                login:"",
                password:"",
                repeatPassword:"",
                isStudent:"",
                isTeacher:"",
            }
        this.actionHandler.bind(this);
    }
    actionHandler = (action) => {
        switch(action.type){
            case "UPDATE_NAME":
                this.setState({name:action.value})
                break; 
            case "UPDATE_SURNAME":
                this.setState({surname:action.value})
                break;
            case "UPDATE_MAIL":
                this.setState({mail:action.value})
                break;
            case "UPDATE_PHONE":
                this.setState({phone:action.value})
                break;              
            case "UPDATE_LOGIN":
                this.setState({login:action.value})
                break;       
            case "UPDATE_PASSWORD":
                this.setState({password:action.value})
                break;
            case "UPDATE_REPEATPASSWORD":
                this.setState({repeatPassword:action.value})
                break; 
            case "UPDATE_USERTYPE":
                this.setState({userType:action.value})
                break;
            
            case "PUSH_NEW_REGISTRATIONFORM":
                alert("ALARM ALARM VASHI DANIE SPIZDILI");
                
                break;
            default: throw new Error(`BAD ACTION TYPE:${action.type}`)
            }    
    }

    render(){
        return <RegistrationFormComponent actionHandler = {this.actionHandler} {...this.state}/>

    }
}
