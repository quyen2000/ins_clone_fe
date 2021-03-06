import React, {Component} from 'react'
import './EditProfileChangePhotoModal.css'

class EditProfileChangePhotoModal extends Component {
    render() {
        return (
            <div
                className="modal fade"
                id="changeProfilePhotoModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog liked-by-modal" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Thay đổi ảnh của bạn</h5>
                        </div>
                        <div className="modal-body">
                            <ul className="change-profile-photo-menu">
                                <li className="add-photo">
                                    <label for="photo">
                                        <input
                                            type="file"
                                            name="photo"
                                            id="photo"
                                            onChange={this.props.imageChange}/>
                                        Tải ảnh lên
                                    </label>
                                </li>
                                <li onClick={this.props.removePhoto} className="delete-photo">Gỡ ảnh hiện tại</li>
                                <li data-dismiss="modal" aria-label="Close">Huỷ</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditProfileChangePhotoModal
