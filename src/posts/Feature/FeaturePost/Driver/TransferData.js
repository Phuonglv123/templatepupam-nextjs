import React, {Component} from 'react';
import css from '../../Feature.module.scss';
import Lightbox from "react-image-lightbox";
import {Link} from "react-router-dom";
import AppURL from "../../../../components/Route/AppURL";

class TransferData extends Component {
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
            "./image/transferdata.png",
            "./image/formtransfer.png",
            "./image/actiontransfer.png",
        ];
        const {photoIndex, isOpen} = this.state;
        return (
            <div>
                <div className="text-left mb-5">
                    <h4>Chuyển Dữ Liệu</h4>
                </div>
                <div className={css.desc}>
                    <p>Miêu tả:</p>
                    <span>Tính năng này cho phép quý khách chuyển dữ liệu (copy) Drive từ một người
                                            dùng này sang một người dùng khác (có thể chuyển cho người dùng không nằm
                                            trong tổ chức).</span>
                </div>
                <div>
                    <img src={require(`${images[0]}`)} alt="" onClick={() => {
                        this.openLightBox(0)
                    }}/>
                </div>
                <br/>
                <div>
                    <p>Trước tiên quý khách cần cấp quyền cho GsuiteX bằng cách nhấp vào nút
                        “Connect more account” và làm theo hướng dẫn.</p>
                    <p>Sau khi đã cấp quyền thành công thì trong ô From, To sẽ hiển thị những tài
                        khoản quý khách đã kết nối</p>
                    <div>
                        <img src={require(`${images[1]}`)} alt="" onClick={() => {
                            this.openLightBox(1)
                        }}/>
                    </div>
                </div>
                <br/>
                <div>
                    <p>Quý khách chọn lần lượt From, To, nhấn “Next” để tiếp tục.</p>
                    <p>Ở bước tiếp theo, quý khách chọn những thư mục để chuyển dữ liệu. GsuiteX chỉ
                        hiển thị những thư mục có trong thư mục gốc</p>
                    <div>
                        <img src={require(`${images[2]}`)} alt="" onClick={() => {
                            this.openLightBox(2)
                        }}/>
                    </div>
                </div>
                <br/>
                <div>
                    <p>Tiếp theo quý khách tiến hành “Share” những thư mục đã chọn cho người dùng
                        “To”, để người dùng này có quyền “View” những thư mục đã chọn. Sau khi đã
                        “Share”, quý khách nhấp vào nút “Check” để GsuiteX tiến hành kiểm tra</p>
                    <p>Cuối cùng quý khách nhấp vào nút “Start migration” để tiến hành chuyển dữ
                        liệu.</p>
                    <p>Việc chuyển dữ liệu có thể diễn ra khá lâu. Để xem kết quả quý khách vui lòng
                        không thoát khỏi trang này, nếu thoát việc chuyển dữ liệu vẫn tiếp tục nhưng
                        quý khách không thể xem kết quả được nữa.</p>
                </div>

                <hr/>
                <div className={css.footerCenter}>
                    <div>
                        <Link to={AppURL.editContactEmail()}>
                            <span><i className="fas fa-long-arrow-alt-left"/></span>
                            <span>Sửa email liên hệ</span>
                        </Link>
                    </div>
                    <div>
                        <Link to={AppURL.BulkMigration()}>
                            <span>Bulk Migration</span>
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

export default TransferData;
