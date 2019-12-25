import React, {Component} from 'react';
import Lightbox from "react-image-lightbox";
import css from '../../Feature.module.scss';
import {Link} from "react-router-dom";
import AppURL from "../../../../components/Route/AppURL";

class ActionsLog extends Component {
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
                    <h4>Lịch Sử Hành Động</h4>
                </div>
                <div className={css.desc}>
                    <p>Miêu tả:</p>
                    <span>Mọi thao tác trên hệ thống của quý khách đều được lưu lại để tiện tra cứu sau
                                        này.</span>
                </div>
                <div>
                    <img src={require('./image/auth.png')} alt="" onClick={() => {
                        this.openLightBox(0)
                    }}/>
                </div>

                <hr/>
                <div className={css.footerCenter}>
                    <div>
                        <Link to={AppURL.authentication()}>
                            <span><i className="fas fa-long-arrow-alt-left"/></span>
                            <span>Phân quyền</span>
                        </Link>
                    </div>
                    <div>
                        <Link to={AppURL.informationAccount()}>
                            <span>Thông tin tài khoản</span>
                            <span><i className="fas fa-long-arrow-alt-right"/></span>
                        </Link>
                    </div>
                </div>

                {isOpen && (
                    <Lightbox
                        mainSrc={require('./image/auth.png')}
                    />
                )}
            </div>
        );
    }
}

export default ActionsLog;
