import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {logout} from '../../../actions/authActions'
import './SideMenu.css'

class SideMenu extends Component {
    logOut = () => {
        this
            .props
            .logout()
    }

    render() {
        return (
            <div className="sticky-top sticky-offset">
                {this.props.user === null
                    ? 'Laduje'
                    : (
                        <div>
                            <div className="profile-short">
                                <Link to={'/user/' + this.props.user.username}>
                                    <img className="profile-image" src={this.props.user.imagePath} alt="profile"/>
                                    <div className="profile-details">
                                        <p className="profile-username">{this.props.user.username}</p>
                                        <p className="profile-name">{this.props.user.name}</p>
                                    </div>
                                </Link>
                            </div>

                            <div className="side-box relations">
                                <div className="box-header">
                                    <span className="box-title">Tin</span>
                                    <span className="box-header-action">Xem tất cả</span>
                                </div>
                                <div className="box-content">
                                    <div className="profile-short">
                                        <p className="button" href="#"><img src={this.props.user.imagePath} alt="profile"/></p>
                                        <div className="profile-details">
                                            <p className="profile-username">{this.props.user.username}</p>
                                            <p className="profile-name">11 phút trước</p>
                                        </div>
                                    </div>
                                    <div className="profile-short">
                                        <p className="button" href="#"><img src={this.props.user.imagePath} alt="profile"/></p>
                                        <div className="profile-details">
                                            <p className="profile-username">{this.props.user.username}</p>
                                            <p className="profile-name">11 phút trước</p>
                                        </div>
                                    </div>
                                    <div className="profile-short">
                                        <p className="button" href="#"><img src={this.props.user.imagePath} alt="profile"/></p>
                                        <div className="profile-details">
                                            <p className="profile-username">{this.props.user.username}</p>
                                            <p className="profile-name">11 phút trước</p>
                                        </div>
                                    </div>
                                    <div className="profile-short">
                                        <p className="button" href="#"><img src={this.props.user.imagePath} alt="profile"/></p>
                                        <div className="profile-details">
                                            <p className="profile-username">{this.props.user.username}</p>
                                            <p className="profile-name">11 phút trước</p>
                                        </div>
                                    </div>
                                    <div className="profile-short">
                                        <p className="button" href="#"><img src={this.props.user.imagePath} alt="profile"/></p>
                                        <div className="profile-details">
                                            <p className="profile-username">{this.props.user.username}</p>
                                            <p className="profile-name">11 phút trước</p>
                                        </div>
                                    </div>
                                    <div className="profile-short">
                                        <p className="button" href="#"><img src={this.props.user.imagePath} alt="profile"/></p>
                                        <div className="profile-details">
                                            <p className="profile-username">{this.props.user.username}</p>
                                            <p className="profile-name">11 phút trước</p>
                                        </div>
                                    </div>
                                    <div className="profile-short">
                                        <p className="button" href="#"><img src={this.props.user.imagePath} alt="profile"/></p>
                                        <div className="profile-details">
                                            <p className="profile-username">{this.props.user.username}</p>
                                            <p className="profile-name">11 phút trước</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="side-box propositions">
                                <div className="box-header">
                                    <span className="box-title">Gợi ý cho bạn</span>
                                    <span className="box-header-action">xem tất cả</span>
                                </div>
                                <div className="box-content">
                                    <div className="profile-short">
                                        <img className="profile-image" src={this.props.user.imagePath} alt="profile"/>
                                        <div className="profile-details">
                                            <p className="profile-username">{this.props.user.username}</p>
                                            <p className="profile-name">Thành viên mới...</p>
                                        </div>
                                        <span className="observe">Đăng ký</span>
                                    </div>
                                    <div className="profile-short">
                                        <img className="profile-image" src={this.props.user.imagePath} alt="profile"/>
                                        <div className="profile-details">
                                            <p className="profile-username">{this.props.user.username}</p>
                                            <p className="profile-name">Thành viên mới...</p>
                                        </div>
                                        <span className="observe">Đăng ký</span>
                                    </div>
                                    <div className="profile-short">
                                        <img className="profile-image" src={this.props.user.imagePath} alt="profile"/>
                                        <div className="profile-details">
                                            <p className="profile-username">{this.props.user.username}</p>
                                            <p className="profile-name">Thành viên mới...</p>
                                        </div>
                                        <span className="observe">Đăng ký</span>
                                    </div>
                                </div>
                            </div>

                            <footer>
                                <ul className="footer-list">
                                    <li>Meta</li>
                                    <li>Giới thiệu</li>
                                    <li>Blog</li>
                                    <li>API</li>
                                    <li>Việc làm</li>
                                    <li>Quyền riêng tư</li>
                                    <li>Điều khoản</li>
                                    <li>Mục lục</li>
                                    <li>Profile</li>
                                    <li>Hashtag</li>
                                    <li>Vị trí</li>
                                </ul>
                                <p className="copyright">© 2022 INSTAGRAM</p>
                            </footer>

                            <button className="form-control" onClick={this.logOut}>Đăng xuất</button>
                        </div>
                    )}
            </div>
        )
    }
}

SideMenu.propTypes = {
    logout: PropTypes.func.isRequired,
    user: PropTypes.object
}

const mapStateToProps = state => ({user: state.auth.user})

export default connect(mapStateToProps, {logout})(SideMenu);
