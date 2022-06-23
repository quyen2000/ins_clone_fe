import React, { Component } from 'react'
import './ProfileFooter.css'

export default class ProfileFooter extends Component {
  render() {
    return (
      <div className="profile-footer container d-none d-lg-block">
        <ul className="profile-footer-list">
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
        <p className="profile-footer-copy">© 2022 INSTAGRAM</p>
      </div>
    )
  }
}
