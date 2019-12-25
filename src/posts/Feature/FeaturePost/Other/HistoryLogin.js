import React, {Component} from 'react';
import Lightbox from "react-image-lightbox";
import css from '../../Feature.module.scss';
import {Link} from "react-router-dom";
import AppURL from "../../../../components/Route/AppURL";

class HistoryLogin extends Component {
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
                    <h4>Lịch Sử Đăng Nhập</h4>
                </div>
                <div className={css.desc}>
                    <p>Miêu tả:</p>
                    <span>Xem lịch sử đăng nhập của quý khách:</span>
                </div>
                <div>
                    <img src={require('./image/history-login.png')} alt="" onClick={() => {
                        this.openLightBox(0)
                    }}/>
                </div>

                <hr/>
                <div className={css.footerFirst}>
                    <div>
                        <Link to={AppURL.listAccount()}>
                            <span><i className="fas fa-long-arrow-alt-left"/></span>
                            <span>Danh sách tài khoản</span>
                        </Link>
                    </div>
                </div>

                {isOpen && (
                    <Lightbox
                        mainSrc={require('./image/history-login.png')}
                    />
                )}
            </div>
        );
    }
}

export default HistoryLogin;
