import React, {Component} from 'react'
import './SmallFooter.css'

export default class SmallFooter extends Component {
    render() {
        return (
            <div className="d-lg-none small-footer">
                    <ul className="small-footer-list">
                        <li>Meta</li>
                        <li>Giới thiệu</li>
                        <li>Blog</li>
                        <li>API</li>
                        <li>Việc làm</li> <br />
                        <li>Quyền riêng tư</li>
                        <li>Điều khoản</li>
                        <li>Mục lục</li>
                        <li>Profile</li> <br />
                        <li>Hashtag</li>
                        <li>Vị trí</li>
                    </ul>
                    <p className="copyright-small">© 2022 INSTAGRAM</p>
            </div>
        )
    }
}
