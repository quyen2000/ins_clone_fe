import React, {Component} from 'react'
import './PrivacySettings.css'
import PrivateAccountModal from '../../../modals/private-account-modal/PrivateAccountModal';
import {setProfilePrivate} from '../../../../actions/profileActions'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

class PrivacySettings extends Component {
    state = {
        isPrivate: null
    }

    componentDidMount() {
        document.title = "Quyền riêng tư và bảo mật · InstagramClone"
        this.setState({isPrivate: this.props.editData.private})
    }

    onChange = (e) => {
        if (this.state.isPrivate === false) {
            this.setState({
                [e.target.name]: e.target.checked
            })
            this.props.setProfilePrivate()
        }
    }

    profileUnPrivate = () => {
        this
            .props
            .setProfilePrivate()
        this.setState({isPrivate: false})
    }

    render() {
        return (
            <div className="privacy-component">
                <h2>Quyền riêng tư và bảo mật</h2>
                <div class="form-check">
                    <input
                        data-toggle="modal"
                        data-target={this.state.isPrivate
                        ? '#privateAccountModal'
                        : ''}
                        class="form-check-input"
                        name="isPrivate"
                        type="checkbox"
                        checked={this.state.isPrivate}
                        onClick={this.onChange}
                        id="isPrivateCheck"/>
                    <label class="form-check-label" for="isPrivateCheck">
                        Tài khoản riêng tư
                    </label>
                </div>
                <p className="privacy-text">Khi tài khoản của bạn ở chế độ riêng tư, chỉ những người 
                mà bạn phê duyệt mới được xem ảnh và video của bạn trên Instagram. Những người đang 
                theo dõi bạn sẽ không bị ảnh hưởng</p>
                <PrivateAccountModal profilePrivate={this.profileUnPrivate}/>
            </div>
        )
    }
}

PrivacySettings.propTypes = {
    user: PropTypes.object.isRequired
}

const mapStateToProps = state => ({user: state.auth.user, editData: state.profiles.editData})

export default connect(mapStateToProps, {setProfilePrivate})(PrivacySettings)
