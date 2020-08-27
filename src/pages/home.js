import React from 'react';
import firebaseApp from '../firebase';

export default function Home() {
    return (
        <>
            <h1>Home</h1>
            <button onClick={() => firebaseApp.auth().signOut()} >Sign out</button>
        </>
    );
};