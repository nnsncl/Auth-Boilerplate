import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import firebaseApp from '../firebase';

const SignUp = ({ history }) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;

        try {
            await firebaseApp
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            history.push('/');
        } catch (error) {
            alert(error);
        }
    }, [history])

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSignUp}>
                <label htmlFor='email' >Email</label>
                <input name='email' type='email' placeholder='Email address' />
                <label htmlFor='password' >Email</label>
                <input name='password' type='password' placeholder='Password' />
                <button type='submit' >Sign Up</button>
            </form>
        </div>
    );
};

export default withRouter(SignUp);