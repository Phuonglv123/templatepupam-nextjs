import React, {Component} from 'react';
import Lightbox from "react-image-lightbox";
import css from '../../Feature.module.scss';
import {Link} from "react-router-dom";
import AppURL from "../../../../components/Route/AppURL";

class InformationAccount extends Component {
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
                    <h4>Thông Tin Tài Khoản</h4>
                </div>
                <div className={css.desc}>
                    <p>Miêu tả:</p>
                    <span>Xem thông tin tài khoản hiện tại của quý khách.</span>
                </div>
                <div>
                    <img src={require('./image/info-account.png')} alt="" onClick={() => {
                        this.openLightBox(0)
                    }}/>
                </div>

                <hr/>
                <div className={css.footerCenter}>
                    <div>
                        <Link to={AppURL.actionLog()}>
                            <span><i className="fas fa-long-arrow-alt-left"/></span>
                            <span>Lịch sử hành động</span>
                        </Link>
                    </div>
                    <div>
                        <Link to={AppURL.listAccount()}>
                            <span>Danh sách tài khoản</span>
                            <span><i className="fas fa-long-arrow-alt-right"/></span>
                        </Link>
                    </div>
                </div>

                {isOpen && (
                    <Lightbox
                        mainSrc={require('./image/info-account.png')}
                    />
                )}
            </div>
        );
    }
}

export default InformationAccount;
