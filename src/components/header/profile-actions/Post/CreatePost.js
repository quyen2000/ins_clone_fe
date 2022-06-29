import React, { Component } from "react";
import "./CreatePost.css";

class CreatePost extends Component {
  render() {
    return (
      <div
                className="modal fade"
                id="createPost"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog liked-by-modal" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Create Post</h5>
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
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    );
  }
}

export default CreatePost;
