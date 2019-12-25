import React, {Component} from 'react';
import css from '../../Feature.module.scss';
import Lightbox from "react-image-lightbox";
import {Link} from "react-router-dom";
import AppURL from "../../../../components/Route/AppURL";

class EditContactEmail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colorLogo: 'white',
            photoIndex: 0,
            isOpen: false,
        }
    }

    openLightBox(id) {
        this.setState({
            isOpen: true,
            photoIndex: id
        })
    }

    render() {
        const {isOpen} = this.state;
        return (
            <div>
                <div className="text-left mb-5">
                    <h4>Sửa Email Liên Hệ</h4>
                </div>
                <div className={css.desc}>
                    <p>Miêu tả:</p>
                    <span>Khi có một email gửi tới Inbox, mặc định Gmail sẽ tạo một Contact nếu địa
                                            chỉ này chưa tồn tại trong hệ thống.</span>
                </div>
                <div>
                    <p>Nếu xảy ra trường hợp Admin của G Suite thay đổi tên của một người dùng (ví
                        dụ thay đổi tên từ abc@a.com sang xyz@a.com) thì Contact sẽ không thay đổi
                        theo, dẫn tới người dùng có thể gửi email tới sai địa chỉ. Và tính năng này
                        để khắc phục điều trên.</p>
                </div>
                <div>
                    <img src={require('./image/editcontact.png')} alt="" onClick={() => {
                        this.openLightBox(0)
                    }}/>
                </div>

                <hr/>
                <div className={css.footerCenter}>
                    <div>
                        <Link to={AppURL.staticEmail()}>
                            <span><i className="fas fa-long-arrow-alt-left"/></span>
                            <span>Thông kế</span>
                        </Link>
                    </div>
                    <div>
                        <Link to={AppURL.transferDriver()}>
                            <span>Chuyển dữ liệu</span>
                            <span><i className="fas fa-long-arrow-alt-right"/></span>
                        </Link>
                    </div>
                </div>

                {isOpen && (
                    <Lightbox
                        mainSrc={require('./image/editcontact.png')}
                    />
                )}
            </div>
        );
    }
}

export default EditContactEmail;
