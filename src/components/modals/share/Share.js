import React, {Component} from 'react'
import './Share.css'

class Share extends Component {
    render() {
        return (
            <div
                className="modal fade"
                id="shareModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Đăng lại</h5>
                        </div>
                        <div className="modal-body">
                            <ul className="share-methods">
                                <li>
                                    <i className="fab fa-facebook-square"></i>
                                    <span className="share-method-name">Chia sẻ facebook</span>
                                </li>
                                <li>
                                    <i className="fab fa-facebook-messenger"></i>
                                    <span className="share-method-name">Chia sẻ Messenger</span>
                                </li>
                                <li>
                                    <i className="fab fa-twitter-square"></i>
                                    <span className="share-method-name">Chia sẻ Twitter</span>
                                </li>
                                <li>
                                    <i className="far fa-envelope"></i>
                                    <span className="share-method-name">Chia sẻ qua email</span>
                                </li>
                                <li>
                                    <i className="far fa-copy"></i>
                                    <span className="share-method-name">Sao chép đường dẫn</span>
                                </li>
                                <li>
                                    <button type="button" className='btn btn-secondary' data-dismiss="modal" style={{"margin-left":" 150px"}}>Hủy bỏ</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Share