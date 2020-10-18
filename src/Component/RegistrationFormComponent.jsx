import React from 'react'

import s from '../Stylesheets/registrationForm.module.css'


export const RegistrationFormComponent = (props) => {
    return(
        <div className = {s.wrapper}>
            <h1 >Регистрация</h1>
            <input value = {props.name}
                onChange={(e) => props.actionHandler({type: "UPDATE_NAME", value: e.target.value})}
                placeholder={"NAME"} type={"text"}/>
            <input value = {props.surname}
                onChange={(e) => props.actionHandler({type: "UPDATE_SURNAME", value: e.target.value})}
                placeholder={"SURNAME"} type={"text"}/>
            <input value = {props.mail}
                onChange={(e) => props.actionHandler({type: "UPDATE_MAIL", value: e.target.value})}
                placeholder={"MAIL"} type={"text"}/>
            <input value = {props.phone}
                onChange={(e) => props.actionHandler({type: "UPDATE_PHONE", value: e.target.value})}
                placeholder={"PHONE"} type={"text"}/>
            <input value = {props.login}
                onChange={(e) => props.actionHandler({type: "UPDATE_LOGIN", value: e.target.value})}
                placeholder={"LOGIN"} type={"text"}/>
            <input value = {props.password}
                onChange={(e) => props.actionHandler({type: "UPDATE_PASSWORD", value: e.target.value})}
                placeholder={"PASSWORD"} type={"text"}/>
            <input value = {props.repeatPassword}
                onChange={(e) => props.actionHandler({type: "UPDATE_REPEATPASSWORD", value: e.target.value})}
                placeholder={"REPEAT PASSWORD"} type={"text"} isRight = {(props.password == props.repeatPassword) ? "Right" : "NotRight"}/>
            <p>Аккаунт для:</p>
           <div className ={s.radioButton}>
           <input value = {props.isStudent}
                onChange={(e) => props.actionHandler({type: "UPDATE_ISSTUDENT", value: e.target.value})}
                placeholder={"Student"} type={"radio"}/>
            <p>Student</p>
             <input value = {props.isTeacher}
                onChange={(e) => props.actionHandler({type: "UPDATE_ISTEACHER", value: e.target.value})}
                placeholder={"Teacher"} type={"radio"}/>
            <p>Teacher</p>
            {
                props.isStudent ? (
                    <select>
                        <option disabled>Група</option>
                        <option value="K-71">К-71</option>
                        <option value="Ф-51">Ф-51</option>
                    </select>
                    ) : props.isTeacher ? (
                            <input value = {props.key}
                            onChange={(e) => props.actionHandler({type: "UPDATE_KEY", value: e.target.value})}
                            placeholder={"KEY"} type={"text"}/>
                            ) : null
            }
            </div>      

             <input onClick={() => props.actionHandler({type: "PUSH_NEW_REGISTRATIONFORM"})} type={"submit"}/>   

        </div>
    )



}