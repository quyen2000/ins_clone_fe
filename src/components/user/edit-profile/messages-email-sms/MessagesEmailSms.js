import React, {Component} from 'react'
import './MessagesEmailSms.css'

export default class MessagesEmailSms extends Component {
    componentDidMount() {
        document.title = "Powiadomienia · InstagramClone"
    }

    render() {
        return (
            <div className="privacy-component messages-email-sms">
                <h2>Đăng ký:</h2>
                <div className="choice-box">
                    <div class="form-check">
                        <input
                            class="form-check-input"
                            name="isPrivate"
                            type="checkbox"
                            onClick={this.onChange}
                            id="isPrivateCheck"/>
                        <label class="form-check-label" for="isPrivateCheck">
                            Email phản hồi
                        </label>
                    </div>
                    <p className="privacy-text">Đóng góp ý kiến về Instagram.</p>
                </div>

                <div className="choice-box">
                    <div class="form-check">
                        <input
                            class="form-check-input"
                            name="isPrivate"
                            type="checkbox"
                            onClick={this.onChange}
                            id="isPrivateCheck"/>
                        <label class="form-check-label" for="isPrivateCheck">
                            Email lời nhắc
                        </label>
                    </div>
                    <p className="privacy-text">Nhận thông báo mà bạn có thể đã bỏ lỡ.</p>
                </div>

                <div className="choice-box">
                    <div class="form-check">
                        <input
                            class="form-check-input"
                            name="isPrivate"
                            type="checkbox"
                            onClick={this.onChange}
                            id="isPrivateCheck"/>
                        <label class="form-check-label" for="isPrivateCheck">
                            Email về sản phẩm
                        </label>
                    </div>
                    <p className="privacy-text">Xem mẹo về công cụ của Instagram.</p>
                </div>

                <div className="choice-box">
                    <div class="form-check">
                        <input
                            class="form-check-input"
                            name="isPrivate"
                            type="checkbox"
                            onClick={this.onChange}
                            id="isPrivateCheck"/>
                        <label class="form-check-label" for="isPrivateCheck">
                            E-maile tin tức
                        </label>
                    </div>
                    <p className="privacy-text">Tìm hiểu về các tính năng mới của Instagram.</p>
                </div>

                <div className="choice-box">
                    <div class="form-check">
                        <input
                            class="form-check-input"
                            name="isPrivate"
                            type="checkbox"
                            onClick={this.onChange}
                            id="isPrivateCheck"/>
                        <label class="form-check-label" for="isPrivateCheck">
                            Tin nhắn SMS
                        </label>
                    </div>
                    <p className="privacy-text">Nhận lời nhắc qua SMS</p>
                </div>
            </div>
        )
    }
}
