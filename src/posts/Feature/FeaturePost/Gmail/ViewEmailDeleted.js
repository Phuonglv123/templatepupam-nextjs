import React, {Component} from 'react';
import css from '../../Feature.module.scss'
import Lightbox from "react-image-lightbox";
import {Link} from "react-router-dom";
import AppURL from "../../../../components/Route/AppURL";

class ViewEmailDeleted extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
                <div className='text-left mb-5'>
                    <h4>Xem Email Đã Xóa</h4>
                </div>
                <div className={css.desc}>
                    <p>Miêu tả:</p>
                    <span>Tính năng này cho phép quý khách xem lại những email đã xóa.</span>
                </div>
                <div>
                    <p>Lưu ý chỉ xem được những email đã xóa bằng GsuiteX, những email người dùng
                        xóa khi sử dụng Gmail(web) hoặc Outlook,.. Sẽ không xem lại được.</p>
                    <p>Những email đã xóa cũng chưa thể khôi phục lại được (GsuiteX chưa hỗ trợ tính
                        năng này)</p>
                </div>
                <div>
                    <img src={require('./image/emaildeleted.png')} alt="" onClick={() => {
                        this.openLightBox(0)
                    }}/>
                </div>

                <hr/>
                <div className={css.footerCenter}>
                    <div>
                        <Link to={AppURL.searchEmailPost()}>
                            <span style={{marginRight: 5}}><i className="fas fa-long-arrow-alt-left"/></span>
                            <span>Tìm kiếm email</span>
                        </Link>
                    </div>
                    <div>
                        <Link to={AppURL.configGMail()}>
                            <span  style={{marginRight: 5}}>Cấu hình G Mail</span>
                            <span><i className="fas fa-long-arrow-alt-right"/></span>
                        </Link>
                    </div>
                </div>
                {isOpen && (
                    <Lightbox
                        mainSrc={require('./image/emaildeleted.png')}
                        onCloseRequest={() => this.setState({isOpen: false})}
                    />
                )}
            </div>
        );
    }
}

export default ViewEmailDeleted;
