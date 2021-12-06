import React from 'react'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FormBlock_Styled.scss'

export const FormBlock = () => {
    return (
        <div className="form--container">
            <div className="form--hidden-container">
            <h3>Log In</h3>
           <Form>
               <Form.Group>
                   <Form.Label>Email</Form.Label>
                   <Form.Control className="form--input form--input-height" 
                                type='email' 
                                placeholder='Enter your email address'/>
               </Form.Group>   
               <Button className="form--btn-submit form--input-height" variant="primary" type="submit">Enter your email address</Button> 
            </Form>
           <a href="#">Already a member?</a>   <br />         
           <Button className="form--btn-signup" variant="primary">Sign up</Button>
        </div>
    </div>
    )
}
