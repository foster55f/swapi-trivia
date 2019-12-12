import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom'
import './Login.css'
import PropTypes from 'prop-types';


export class Login extends React.Component {
    constructor() {
        super();
        this.state = {
                name: '',
                quote: '',
                ranking: 'Padawan',
                isSignedIn: false,
                errors: ''
        }
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    login = (event) => {
        event.preventDefault();
        const {name, quote, ranking} = this.state
        if (!name || name.length === 0 || !quote || quote.length === 0) {
            return this.setState({ error: 'Please fill out all inputs!!' });
        }
  {/*   this.props.history.push("./movies")  */}
      this.setState({isSignedIn:true})
      this.props.enterUserInfo({ name, quote, ranking })

    }

    render() {
        return (
          <section className="login-section">
            <div className ='login-home'>
              <div className="form-container">
                <h1 className ='welcome'>Welcome to Star Wars!!!</h1>
                <h2>{this.state.error}</h2>
                <form>
                  <input type='text' placeholder='Name' value={this.state.name} name = 'name' onChange={event => this.handleChange(event)} />
                  <textarea type='text' placeholder='Quote' value={this.state.quote} name = 'quote' onChange={event => this.handleChange(event)}></textarea>
                  <div>
                    <label>Select Level:</label>
                      <select value={this.state.ranking} name = 'ranking' onChange={event => this.handleChange(event)}>
                        <option>Padawan</option>
                        <option>Jedi knight</option>
                        <option>Jedi master</option>
                      </select>
                  </div>
                  <button type='submit' className='loginButton' onClick={this.login}>Luke I Am Your Father</button>
                </form>
              </div>
            </div>
          </section>
        )
    }
}

export default withRouter(Login)

Login.propTypes = {
  enterUserInfo: PropTypes.func
}
