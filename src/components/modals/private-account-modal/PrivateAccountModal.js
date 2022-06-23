import React, {Component} from 'react'
import './PrivateAccountModal.css'

class PrivateAccountModal extends Component {
    render() {
        return (
            <div>
                <div
                    className="modal fade"
                    id="privateAccountModal"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog liked-by-modal" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">
                                    Thay đổi cài đặt quyền riêng tư ?
                                    <p className="modal-silver">Mọi người sẽ có thể xem ảnh và video của bạn trên Instagram. 
                                    Bạn không cần phê duyệt người theo dõi nữa.</p>
                                </h5>
                            </div>
                            <div className="modal-body">
                                <ul className="change-profile-photo-menu">
                                    <li
                                        onClick={this.props.profilePrivate}
                                        className="add-photo"
                                        data-dismiss="modal"
                                        aria-label="Close">
                                        Ok
                                    </li>
                                    <li data-dismiss="modal" aria-label="Close">Huỷ</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PrivateAccountModal