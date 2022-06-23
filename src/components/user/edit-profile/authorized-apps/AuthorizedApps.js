import React, {Component} from 'react'

class AuthorizedApps extends Component {
    componentDidMount() {
        document.title = "Autoryzowane aplikacje · InstagramClone"
    }

    render() {
        return (
            <div className="privacy-component">
                <p className="privacy-text">Bạn không cho phép bất kỳ ứng dụng nào truy cập vào tài khoản Instagram của mình.</p>
            </div>
        )
    }
}

export default AuthorizedApps
