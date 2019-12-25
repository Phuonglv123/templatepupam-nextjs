import React, {Component} from 'react';
import Lightbox from "react-image-lightbox";
import css from '../../Feature.module.scss';
import {Link} from "react-router-dom";
import AppURL from "../../../../components/Route/AppURL";

class Authentication extends Component {
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
                    <h4>Phân Quyền</h4>
                </div>
                <div className={css.desc}>
                    <p>Miêu tả:</p>
                    <span>Quý khách có thể phân quyền cho nhiều tài khoản khác nhau.</span>
                </div>
                <div>
                    <p>Mặc định sẽ có một quyền “Admin” có thể sử dụng tất cả các tính năng.</p>
                    <div>
                        <img src={require('./image/auth.png')} alt="" onClick={() => {
                            this.openLightBox(0)
                        }}/>
                    </div>
                </div>
                <hr/>
                <div className={css.footerCenter}>
                    <div>
                        <Link to={AppURL.BulkMigration()}>
                            <span><i className="fas fa-long-arrow-alt-left"/></span>
                            <span>Bulk Migration</span>
                        </Link>
                    </div>
                    <div>
                        <Link to={AppURL.actionLog()}>
                            <span>Lịch sử hành động</span>
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

export default Authentication;
