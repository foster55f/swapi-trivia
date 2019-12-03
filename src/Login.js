import React, {Component} from 'react'
import './Login.css'


class Login extends Component {
    constructor() {
        super();
        this.state = {
            user: {
                name: '',
                quote: '',
                ranking: '',
                isSignedIn: false,
                errors:{}
              }
        }
    }

    handleChange(event) {
        this.setState({ 'name': event.target.value })
    }

    login = (event) => {
        event.preventDefault();
        console.log(this.props.enterUserInfo)
    }

    render() {
        return (
            <div className = 'loginHome'>
             <h1 className = 'welcome'>Welcome to Star Wars!!!</h1>
              <form>
                    <input type='text' placeholder='Name' value={this.state.name} onChange={event => this.handleChange(event)}/>
                    <div>
                        <label>Select Level</label>
                        <select>
                            <option>padawan</option>
                            <option>jedi knight</option>
                            <option>jedi master</option>
                        </select>
                    </div>
                    <button type= 'submit' className = 'loginButton' onClick ={this.login}>Luke I Am Your Father</button>
              </form>
            </div>
        )
    }
}

export default Login
