import React, {Component} from 'react';
import css from '../../Feature.module.scss';
import Lightbox from "react-image-lightbox";
import {Link} from "react-router-dom";
import AppURL from "../../../../components/Route/AppURL";

class NotifyEmail extends Component {
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
        const {photoIndex, isOpen} = this.state;
        return (
            <div>
                <div className="text-left mb-5">
                    <h4>Thông Báo Email</h4>
                </div>
                <div className={css.desc}>
                    <p>Miêu tả:</p>
                    <span>Tính năng này dùng để gửi email thông báo cho quý khách khi có một email mới
                                            nào thỏa một số điều kiện nhất định.</span>
                </div>
                <div>
                    <p style={{fontWeight: 600}}>Giải thích một số mục:</p>
                    <ul>
                        <li>Bật: bật tính năng này</li>
                        <li>Gửi email thông báo cho những email này: gửi email thông báo tới những
                            địa chỉ này
                        </li>
                    </ul>
                </div>
                <div>
                    <img src={require('./image/notifyemail.png')} alt="" onClick={() => {
                        this.openLightBox(0)
                    }}/>
                </div>
                <br/>
                <div>
                    <p style={{fontWeight: 600}}>Một số bộ lọc:</p>
                    <div>
                        <ul>
                            <li>Email gửi ra ngoài tổ chức: thông báo khi có người dùng gửi email ra
                                ngoài
                            </li>
                            <li>Email có tệp đính kèm: thông báo khi có người dùng gửi email có tệp
                                đính kèm
                            </li>
                            <li>Tệp đính kèm có dung lượng lớn hơn: thông báo khi có người dùng gửi
                                email có tệp đính kèm và có kích thước lớn hơn một kích thước cụ thể
                            </li>
                        </ul>
                    </div>
                </div>

                <hr/>
                <div className={css.footerCenter}>
                    <div>
                        <Link to={AppURL.configGMail()}>
                            <span><i className="fas fa-long-arrow-alt-left"/></span>
                            <span>Cấu hình G Mail</span>
                        </Link>
                    </div>
                    <div>
                        <Link to={AppURL.staticEmail()}>
                            <span>Thống kê</span>
                            <span><i className="fas fa-long-arrow-alt-right"/></span>
                        </Link>
                    </div>
                </div>

                {isOpen && (
                    <Lightbox
                        mainSrc={require('./image/notifyemail.png')}
                        onCloseRequest={() => this.setState({isOpen: false})}
                    />
                )}
            </div>
        );
    }
}

export default NotifyEmail;
