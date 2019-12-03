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

    render() {
        return (
            <div className = 'loginHome'>
             <h1 className = 'welcome'>Welcome to Star Wars!!!</h1>
              <form>
                    <input />
                    <div>
                        <label>Select Level</label>
                        <select></select>
                    </div>
                    <button type= 'submit' className = 'loginButton' onClick ={this.login}>Luke I Am Your Father</button>
              </form>
            </div>
        )
    }
}

export default Login
