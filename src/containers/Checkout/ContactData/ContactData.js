import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            city: '',
            state: '',
            areaCode: ''
        }
    }

    render () {
        return (
            <div className={classes.ContactData}>
                <h4>Enter Your Contact Data</h4>
                <form>
                    <input className={classes.Input} type='text' name='name' placeholder='Your Name'/>
                    <input className={classes.Input} type='text' name='email' placeholder='Your Email'/>
                    <input className={classes.Input} type='text' name='street' placeholder='Street'/>
                    <input className={classes.Input} type='text' name='city' placeholder='City'/>
                    <input className={classes.Input} type='text' name='state' placeholder='State'/>
                    <input className={classes.Input} type='text' name='areaCode' placeholder='Area Code'/>
                    <Button btnType='Success'>ORDER</Button>
                </form>
            </div>
        );
    }
} 

export default ContactData;