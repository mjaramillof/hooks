import React, { useState } from  'react';
    
    
const UserFormHooks = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confpassword, setConfPassword] = useState("");  
     
    return(
        <>
            <form>
                <div>
                    <label>Username: </label> 
                    <input type="text" onChange={ (e) => setUsername(e.target.value) } value={ username } />
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="email" onChange={ (e) => setEmail(e.target.value) } value={ email }/>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={ (e) => setPassword(e.target.value) } value={ password }/>
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={ (e) => setConfPassword(e.target.value) } value={ confpassword }/>
                </div>
            </form>

            <h1>Your Form Data</h1>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm password: {confpassword}</p>
        </>
    );
};
    
export default UserFormHooks;