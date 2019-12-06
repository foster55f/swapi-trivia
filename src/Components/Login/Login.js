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
                errors: {}
            }
        }
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
        console.log(this.state.name)
        console.log(this.state.quote)
    }

    login = (event) => {
        event.preventDefault();
        if (!this.state.name || this.state.name.length === 0 || !this.state.quote || this.state.quote.length === 0 ) {
            alert("Please fill out all spaces");
        }
        this.setState({ isSignedIn: true })
        this.props.enterUserInfo(this.state)
    }

    // error = () => {

    // }

    render() {
        return (
            <div className = 'login-home'>
             <h1 className = 'welcome'>Welcome to Star Wars!!!</h1>
              <form>
                    <input type='text' placeholder='Name' value={this.state.name} name = 'name' onChange={event => this.handleChange(event)} />
                    <textarea type='text' placeholder='Quote' value={this.state.quote} name = 'quote' onChange={event => this.handleChange(event)}></textarea>
                    <div>
                        <label>Select Level</label>
                        <select>
                            <option>padawan</option>
                            <option>jedi knight</option>
                            <option>jedi master</option>
                        </select>
                    </div>
                    <button type='submit' className='loginButton' onClick ={this.login}>Luke I Am Your Father</button>
              </form>
            </div>
        )
    }
}

export default Login
