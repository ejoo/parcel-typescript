import * as React from 'react';

export default class extends React.Component{
    state = {
        text: 'something here',
        showUsers: true,
        x: 0,
        y: 0,
    }

    toggleUsers = () => {
        const newShowUsers = !this.state.showUsers;
        this.setState({
            text: "Something there.",
            showUsers: newShowUsers,
        });
    }

    inpuChange = (e) => {
        const value = e.target.value;

        this.setState({
            text: value
        })
    }

    mouseMove = (e) => {
        const x = e.clientX;
        const y = e.clientY;

        this.setState({
            x, y
        })
    }

    render() {
        return (
            <div>
                <span> Events </span>
                <hr />
                <input type='text' onKeyUp={this.inpuChange} /> <br />
                { this.state.text}<br />
                { this.state.text.split('').reverse().join("")}<br />
                { this.state.text}<br />
                 <br />
                <button onClick={this.toggleUsers}>{this.state.showUsers ? "Hide": "Show"}</button>
                 {
                     this.state.showUsers  && (
                         <div>
                             <h1>Users</h1>
                             <ul>
                                 <li>Ejaz</li>
                                 <li>Naeem</li>
                             </ul>
                         </div>
                     )
                 }

                 <div onMouseMove={this.mouseMove} style={{background: "white", position: 'relative', width: "200px", height: "200px"}}>
                    <p>X: {this.state.x}</p>
                    <p>Y: {this.state.y}</p>
                    <div style={{width: '40px', height: '40px',  background: 'red',position: 'absolute', left: this.state.x, top: this.state.y}}>
                    here
                    </div>
                 </div>
            </div>
        )
    }
}