import React from 'react'


export default function Login({ setLogin, userdata }) {
    const submit = (e) => {
        e.preventDefault();
        userdata.forEach((val) => {
            console.log(e.target[0].value, e.target[1].value)
            if (e.target[0].value === val.userName && e.target[1].value === val.password) {
                setLogin(val.role);
            }
        })
    }
    return (
        <div style={{ marginTop: 50 }}>
            <form onSubmit={submit}>
                <div>
                    <label htmlFor='username'>UserName :
                        <input id='username' type="text" placeholder='username'></input></label>
                </div>
                <div style={{ marginTop: 10 }}>
                    <label htmlFor='password'>PassWord :
                        <input id='password' type="password" placeholder='password'></input></label>
                </div>
                <button style={{ marginTop: 10, marginLeft: 70 }} type='submit' > Login</button>

            </form>

        </div>
    )
}
