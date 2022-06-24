import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import phoneImage from '../images/phoneImage.png'
import loginLogo from '../images/loginLogo.png'
import {login} from '../../../actions/authActions'
import {Link, Redirect} from "react-router-dom";
import './Login.css'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            usernameOrEmail: '',
            password: ''
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        const loginRequest = {
            usernameOrEmail: this.state.usernameOrEmail,
            password: this.state.password
        }

        this
            .props
            .login(loginRequest)
    }
    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/"/>;
        }
        return (
            <div className="login-main background-color">
                <div className="container login-section">
                    <div className="row">
                        <div className="phone-image col-md-6 d-none d-md-block">
                            <img src={phoneImage} alt="phones"/>
                        </div>
                        <div className="col-md-6">
                            <div className="login-box">
                                <img className="login-logo" src={loginLogo} alt="login-logo"/>
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="usernameOrEmail"
                                            value={this.state.usernameOrEmail}
                                            onChange={this.onChange}
                                            className="form-control login-input"
                                            required
                                            placeholder="Email or Username..."/></div>
                                    <div className="form-group">
                                        <input
                                            value={this.state.password}
                                            onChange={this.onChange}
                                            type="password"
                                            required
                                            name="password"
                                            className="form-control login-input"
                                            placeholder="Password"/></div>
                                    <button type="submit" className="btn btn-block mybtn btn-primary login-button">Login</button>
                                </form>
                                <span className="login-divider center">hoặc</span>
                                <Link className="login-link fb" to="/">Đăng nhập bằng Facebook</Link>
                                <Link className="login-link" to="/">Quên mật khẩu?</Link>
                                {this.props.isLoading === true
                                    ? 'nhật ký'
                                    : ''}
                            </div>
                            <div className="login-box sign-up-box">
                                Bạn chưa có tài khoản ư?
                                <Link className="register-sign" to="/register">Đăng ký</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({isAuthenticated: state.auth.isAuthenticated})

export default connect(mapStateToProps, {login})(Login);