import React from 'react';
import Header from './Header';

const reload=()=>{
	window.location.href="/";
}
export const NotFound = () => {
    return (
        <div style={{textAlign:'center'}}><Header/><h1>Opps route not found!</h1><button onClick={e=>reload()}>Home</button></div>
        );
}