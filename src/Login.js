import React, {Component} from 'react'
import './Login.css'


class Login extends Component {
    constructor() {
        super();
        this.state = {
            user: {
                name: '',
                quote: '',
                ranking: ''
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
                    <button></button>
              </form>
            </div>
        )
    }
}

export default Login
