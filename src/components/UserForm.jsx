import React, {useState} from 'react'

const pageStyle = {
    background: 'black',
    color:'white'
}

const UserForm = () => {
    const [ firstname, setFirstName] = useState("");
    const [ lastname, setLastName] = useState("");
    const [ email, setEmail] = useState("");
    const [ password, setPassword] = useState("");
    const [ confpassword, setConfPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confpassword};
        console.log("Welcome", newUser);
    }
    return (
    <>
    <fieldset style={pageStyle}>
        <legend >Create Form:</legend>
        <form onSubmit={ createUser}>
            <div>
                <label>First Name:</label><br />
                <input type="text" onChange={ (e) => setFirstName(e.target.value)}/>
            </div>
            <div>
                <label>Last Name:</label><br />
                <input type="text" onChange={ (e) => setLastName(e.target.value)}/>
            </div>
            <div>
                <label>Email:</label><br />
                <input type="text" onChange={ (e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label>Password:</label><br />
                <input type="text" onChange={ (e) => setPassword(e.target.value)}/>
            </div>
            <div>
                <label>Confirm Password:</label><br />
                <input type="text" onChange={ (e) => setConfPassword(e.target.value)}/>
            </div>
            <br />
            <button type='submit'>Create My User</button>
        </form>
    </fieldset>
    <fieldset style={pageStyle}>
        <legend>Your Information:</legend>
        <div>
            <label>First Name:</label><br />
            <input type="text" value={firstname}/>
        </div>
        <div>
            <label>Last Name:</label><br />
            <input type="text" value={lastname}/>
        </div>
        <div>
            <label>Email:</label><br />
            <input type="text" value={email}/>
        </div>
        <div>
            <label>Password:</label><br />
            <input type="text" value={password}/>
        </div>
        <div>
            <label>Confirm Password:</label><br />
            <input type="text" value={confpassword}/>
        </div>
    </fieldset>
    </>
)
}

export default UserForm