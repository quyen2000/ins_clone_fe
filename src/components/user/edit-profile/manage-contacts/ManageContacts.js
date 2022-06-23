import React, {Component} from 'react'
import './ManageContacts.css'

class ManageContacts extends Component {
    componentDidMount() {
        document.title = "Zarządzaj kontaktami · InstagramClone"
    }
    
    render() {
        return (
            <div className="privacy-component manage-component">
                <h2>Quản lý danh bạ</h2>
                <p className="manage-text">Đây là danh sách những người liên hệ mà bạn đã tải lên Instagram. 
                Để xóa người liên hệ đã đồng bộ, hãy nhấn vào Xóa tất cả. Người liên hệ sẽ tải lại lên vào lần
                tiếp theo Instagram đồng bộ danh bạ của bạn. Nếu không muốn như vậy, bạn có thể đi đến phần cài 
                đặt thiết bị và tắt quyền truy cập vào danh bạ.</p>
                <p className="manage-text">Chỉ mình bạn xem được người liên hệ của mình nhưng Instagram 
                sử dụng thông tin bạn đã tải lên liên quan đến người liên hệ của bạn để đưa ra gợi ý kết 
                bạn cho bạn và những người khác và để cải thiện trải nghiệm cho tất cả mọi người.</p>
                <div className="contacts-synchronized">
                    <span className="bold">0 người liên hệ đã đồng bộ
                    </span>
                    <span className="delete-all-contacts">Xoá tất cả</span>
                </div>
                <div className="contacts-synchronized">
                Khi bạn tải danh bạ của mình lên Instagram, họ sẽ hiển thị ở đây.
                </div>
                <button disabled className="btn btn-primary edit-profil-button" type="submit">Xoá tất cả</button>
            </div>
        )
    }
}

export default ManageContacts
