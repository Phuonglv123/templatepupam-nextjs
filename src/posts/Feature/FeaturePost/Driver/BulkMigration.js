import React, {Component} from 'react';
import css from '../../Feature.module.scss';
import Lightbox from "react-image-lightbox";
import {Link} from "react-router-dom";
import AppURL from "../../../../components/Route/AppURL";

class BulkMigration extends Component {
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
        const images = [
            "./image/domaintrans.png",
            "./image/next2domain.png",
            "./image/next3domain.png",
            "./image/next4domain.png"
        ];
        const {photoIndex, isOpen} = this.state;
        return (
            <div>
                <div className="text-left mb-5">
                    <h4>Bulk Migration</h4>
                </div>
                <div className={css.desc}>
                    <p>Miêu tả:</p>
                    <span>Tính năng này tương tự với tính năng “Chuyển dữ liệu”, tuy nhiên nó cho phép
                                        chuyển dữ liệu cho nhiều người cùng lúc, và chỉ hỗ trợ cho những người dùng
                                        có trong tổ chức.</span>
                </div>
                <div>
                    <p>Tính năng này thường được sử dụng khi quý khách có từ 2 domain trở lên, khi
                        có nhu cầu chuyển dữ liệu từ domain này sang domain kia.</p>
                    <p>Để bắt đầu quý khách chọn domain cần chuyển:</p>
                    <div>
                        <img src={require(`${images[0]}`)} alt="" onClick={() => {
                            this.openLightBox(0)
                        }}/>
                    </div>
                    <br/>
                    <p style={{fontWeight: 600}}>Tiếp theo quý khách chọn những người dùng tương ứng cần
                        chuyển:</p>
                    <div>
                        <img src={require(`${images[1]}`)} alt="" onClick={() => {
                            this.openLightBox(1)
                        }}/>
                    </div>
                    <br/>
                    <p>Quý khách có thể nhấp vào nút “Auto match” để hệ thống tự chọn những người
                        dùng tương ứng theo tên. Ví dụ abc@a.com sẽ ứng với abc@b.com </p>
                    <p>Để chuyển người dùng nào quý khách tích vào ô của người dùng đó:</p>
                    <div>
                        <img src={require(`${images[2]}`)} alt="" onClick={() => {
                            this.openLightBox(2)
                        }}/>
                    </div>
                    <br/>
                    <p style={{fontWeight: 600}}>Tiếp theo quý khách kiểm tra lại danh sách người dùng
                        muốn chuyển, ấn
                        “Submit” để bắt đầu:</p>
                    <div>
                        <img src={require(`${images[3]}`)} alt="" onClick={() => {
                            this.openLightBox(3)
                        }}/>
                    </div>
                </div>

                <hr/>
                <div className={css.footerCenter}>
                    <div>
                        <Link to={AppURL.transferDriver()}>
                            <span><i className="fas fa-long-arrow-alt-left"/></span>
                            <span>Chuyển dữ liệu</span>
                        </Link>
                    </div>
                    <div>
                        <Link to={AppURL.authentication()}>
                            <span>Phân quyền</span>
                            <span><i className="fas fa-long-arrow-alt-right"/></span>
                        </Link>
                    </div>
                </div>

                {isOpen && (
                    <Lightbox
                        mainSrc={require(`${images[photoIndex]}`)}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({isOpen: false})}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                        }
                    />
                )}
            </div>
        );
    }
}

export default BulkMigration;
