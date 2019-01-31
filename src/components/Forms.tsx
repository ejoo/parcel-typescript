import * as React from 'react';

export default class extends React.Component {

    state = {
        username: '',
        email: '',
        password: '',
    }

    submitForm = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    setUsername = (e) => {
        const us = e.target.value;
        this.setState({
            username: us
        });

    }

    render() {
        return (
            <div>
                <h2>Forms</h2>
                <hr />
                <form onSubmit={this.submitForm}>
                    <label htmlFor="">Email</label><br />
                    <input type='text' /><br />
                    <hr />
                    
                    <label htmlFor="">Username</label><br />
                    <input type='text' onChange={this.setUsername} /><br />
                    <hr />
                    <label htmlFor="">Passowrd</label><br />
                    <input type='password' /><br />
                    <hr />
                    <button>Register Me</button>
                </form>
            </div>
        )
    }
}