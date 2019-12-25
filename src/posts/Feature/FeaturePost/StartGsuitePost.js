import React, {Component} from 'react';
import style from '../Feature.module.scss'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import {Link} from "react-router-dom";
import AppURL from "../../../components/Route/AppURL";

class StartGsuitePost extends Component {
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
        const images = [
            './Gmail/image/login-gsuite.png',
            './Gmail/image/start1.png',
            './Gmail/image/start2.png',
            './Gmail/image/start3.png',
            './Gmail/image/start4.png',
            './Gmail/image/start5.png',
            './Gmail/image/start6.png',
            './Gmail/image/start7.png',
            './Gmail/image/start8.png',
            './Gmail/image/start9.png',
            './Gmail/image/start10.png',
        ];
        const {photoIndex, isOpen} = this.state;
        return (
            <div>
                <div className="text-center mb-5">
                    <h5>Bắt đầu với GSuite X</h5>
                </div>
                <div>
                    <div>
                        <p>Quý khách thực hiện đăng nhập tại đường dẫn <a
                            href="https://gsuitex.pupam.com/login/">https://gsuitex.pupam.com/login/</a> để
                            bắt đầu sử dụng dịch vụ.</p>
                        <img src={require('./Gmail/image/login-gsuite.png')} alt="" onClick={() => {
                            this.openLightBox(0)
                        }}/>
                    </div>
                    <div>
                        <p>Hiện tại hệ thống chỉ hỗ trợ đăng nhập với google. Quý khách nhấp vào “Đăng
                            nhập với Google” để tiếp tục.</p>
                        <img src={require('./Gmail/image/start1.png')} alt="" style={{width: '50%'}} onClick={() => {
                            this.openLightBox(1)
                        }}/>
                    </div>
                </div>
                <div className="text-left mt-5">
                    <h5>Chọn G-Suite domain để sử dụng:</h5>
                </div>
                <div>
                    <p>Trang chủ sẽ hiển thị danh sách G Suite domain của quý khách kèm với tình trạng
                        dịch vụ.</p>
                    <img src={require('./Gmail/image/start2.png')} alt="" onClick={() => {
                        this.openLightBox(2)
                    }}/>
                    <br/>
                    <p>Một tài khoản có thể quản lý nhiều G Suite domain. Để thao tác trên domain nào
                        quý khách nhấp vào chọn domain đó.</p>
                </div>
                <div className='text-left mt-5'>
                    <h5>Lựa chọn tính năng:</h5>
                </div>
                <div>
                    <p>Sau khi chọn một domain để thao tác, danh sách các tính năng sẽ hiện ra như
                        hình:</p>
                    <img src={require('./Gmail/image/start3.png')} alt="" onClick={() => {
                        this.openLightBox(3)
                    }}/>
                    <br/>
                    <p>Các tính năng sẽ chia thành từng mục, ví dụ Gmail, Drive, Khác…</p>
                    <p>Mô tả sơ lược các tính năng:</p>
                    <div>
                        <div>
                            <h5>G mail:</h5>
                        </div>
                        <ul>
                            <li>Xem email: xem, xóa email theo người dùng</li>
                            <li>Tìm kiếm email: tìm kiếm, xem, xóa email của tất cả người dùng có trong
                                tổ chức
                            </li>
                            <li>Xem email đã xóa: xem lại những email đã xóa</li>
                            <li>Cấu hình Gmail: cấu hình Vacation responder của Gmail cho từng người
                                dùng
                            </li>
                            <li>Thông báo: thông báo khi có email mới thỏa một số điều kiện nhất định
                            </li>
                            <li>Thống kê: thống kê việc gửi nhận email</li>
                            <li>Sửa email liên hệ: sửa lại contact của tất cả người dùng khác khi thay
                                đổi tên một người dùng
                            </li>
                            <li>Tình trạng: xem tình trạng dịch vụ</li>
                        </ul>
                    </div>
                    <div>
                        <div>
                            <h5>Drive</h5>
                            <ul>
                                <li>Chuyển dữ liệu: chuyển dữ liệu Drive từ người dùng này sang người
                                    dùng khác
                                </li>
                                <li>Bulk migration: chuyển dữ liệu đồng loạt từ nhiều người dùng sang
                                    người dùng khác
                                </li>
                                <li>Bulk migration history: xem lại lịch sử chuyển dữ liệu đồng loạt
                                </li>
                                <li>Tình trạng: Xem tình trạng dịch vụ</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h5>Khác</h5>
                        </div>
                        <ul>
                            <li>Lịch sử hành động: xem lại lịch sử những thao tác đã thực hiện</li>
                            <li>Rename user domain: sửa lại email cho tất cả người dùng (khi chuyển từ
                                domain này sang domain khác)
                            </li>
                            <li>Contact migration: chuyển contact từ domain này sang domain khác</li>
                            <li>Calendar migration: chuyển calendar từ domain này sang domain khác</li>
                            <li>Phân quyền: phân quyền sử dụng trong GsuiteX</li>
                            <li>Thiết lập GsuiteX: cấu hình GsuiteX để có thể sử dụng dịch vụ</li>
                        </ul>
                    </div>
                    <div className='text-left mt-5'>
                        <h5>Thiết lập GsuiteX</h5>
                    </div>
                    <div>
                        <p>Để sử dụng GsuiteX, quý khách cần phải cấp quyền sử dụng các API của google
                            cho GsuiteX. </p>
                        <p>Để làm việc này, quý khách nhấp vào “Thiết lập GsuiteX” ở trang danh sách
                            tính năng. Khi chưa thiết lập (mới sử dụng lần đầu) thì hệ thống sẽ tự động
                            chuyển đến trang này.</p>
                        <div>
                            <img src={require('./Gmail/image/start4.png')} alt="" onClick={() => {
                                this.openLightBox(4)
                            }}/>
                        </div>
                        <br/>
                        <p>
                            Quý khách xem và làm theo hướng dẫn để cấp quyền cho GsuiteX:
                        </p>
                        <div>
                            <img src={require('./Gmail/image/start5.png')} alt="" onClick={() => {
                                this.openLightBox(5)
                            }}/>
                        </div>
                        <div>
                            <img src={require('./Gmail/image/start6.png')} alt="" onClick={() => {
                                this.openLightBox(6)
                            }}/>
                        </div>
                        <div>
                            <img src={require('./Gmail/image/start7.png')} alt="" onClick={() => {
                                this.openLightBox(7)
                            }}/>
                        </div>
                        <div>
                            <img src={require('./Gmail/image/start8.png')} alt="" onClick={() => {
                                this.openLightBox(8)
                            }}/>
                        </div>
                        <br/>
                        <p>Sau khi hoàn tất, quý khách nhấp vào nút “Kiểm tra” ở cuối trang để hệ thống
                            tiến hành kiểm tra.</p>
                        <div>
                            <img src={require('./Gmail/image/start9.png')} alt="" onClick={() => {
                                this.openLightBox(9)
                            }}/>
                        </div>
                        <br/>
                        <p>Nếu thành công hệ thống sẽ hiện như sau:</p>
                        <div>
                            <img src={require('./Gmail/image/start10.png')} alt="" onClick={() => {
                                this.openLightBox(10)
                            }}/>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className={style.footerEnd}>
                    <div>
                        <Link to={AppURL.viewEmailPost()}>
                            <span>Xem email</span>
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

export default StartGsuitePost;
