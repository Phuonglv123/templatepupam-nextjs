import React, {Component} from 'react';
import style from '../../Feature.module.scss'
import Lightbox from "react-image-lightbox";
import {Link} from "react-router-dom";
import AppURL from "../../../../components/Route/AppURL";

class SearchEmailPost extends Component {

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
        const images = [
            "./image/searchemail.png",
            "./image/resultfilter.png"
        ]
        return (
            <div>
                <div className='text-left mb-5'>
                    <h4>Tìm Kiếm Email</h4>
                </div>
                <div className={style.desc}>
                    <p>Miêu tả:</p>
                    <span>Chức năng này giúp quý khách tìm kiếm email của tất cả những người dùng có
                                            trong tổ chức</span>
                </div>
                <div>
                    <img src={require(`${images[0]}`)} alt="" onClick={() => {
                        this.openLightBox(0)
                    }}/>
                </div>
                <br/>
                <div>
                    <p style={{fontWeight: 600}}>Một số bộ lọc:</p>
                    <ul>
                        <li>Bao gồm Spam & Trash email: xem cả những email có trong Spam và Trash
                        </li>
                        <li>Gửi từ ngoài tổ chức: chỉ lọc những email gửi từ ngoài tổ chức (domain
                            khác với domain của tổ chức). Ví dụ domain của quý khách là a.com thì
                            những email gửi từ b.com, gmail.com,... sẽ là những email gửi từ ngoài
                            tổ chức.
                        </li>
                        <li>Gửi ra ngoài tổ chức: tương tự như “Gửi từ ngoài tổ chức” nhưng áp dụng
                            cho email gửi ra ngoài tổ chức
                        </li>
                        <li>Có tệp đính kèm: chỉ lọc những email có tệp đính kèm
                        </li>
                        <li>
                                                <span>
                                                    <img src={require('./image/filteremail.png')} alt=""
                                                         style={{width: '30%'}}/>
                                                        : tìm kiếm theo thread hoặc message
                                                        </span>
                        </li>
                        <li>
                            Chọn người dùng: chỉ tìm kiếm trong mailbox của một số người nhất định
                            (nếu để trống thì tìm tất cả người dùng)
                        </li>
                        <li>Nhãn: chỉ tìm các email có nhãn nhất định</li>
                        <li>Từ khóa: tìm theo từ khóa</li>
                        <li>Từ ngày: chỉ tìm những email sau một ngày cụ thể</li>
                        <li>Tới ngày: chỉ tìm những email trước một ngày cụ thể</li>
                        <li>Từ email: chỉ tìm những email được gửi tới từ một địa chỉ cụ thể</li>
                        <li>Đến email: chỉ tìm những email gửi tới một địa chỉ cụ thể</li>
                    </ul>
                </div>
                <div>
                    <p style={{fontWeight: 600}}>Sau khi nhập các bộ lọc, quý khách nhấp vào nút
                        “Tìm kiếm” để bắt đầu.
                        Các kết quả sẽ lần lượt hiện ra như hình:
                    </p>
                    <div>
                        <img src={require(`${images[1]}`)} alt="" onClick={() => {
                            this.openLightBox(1)
                        }}/>
                    </div>
                </div>
                <br/>
                <div>
                    <p>Các thao tác xem, xóa email tương tự như phần “Xem email”</p>
                    <span>
                                                        Quý khách cũng có thể xuất kết quả ra file (CSV) bằng cách nhấp vào nút
                                                        <img src="./image/csv.png" alt=""
                                                             style={{width: '20%'}}/>
                                                        </span>
                </div>

                <hr/>
                <div className={style.footerCenter}>
                    <div>
                        <Link to={AppURL.viewEmailPost()}>
                            <span><i className="fas fa-long-arrow-alt-left"/></span>
                            <span>Xem email</span>
                        </Link>
                    </div>
                    <div>
                        <Link to={AppURL.viewEmailDeleted()}>
                            <span>Xem email đã xóa</span>
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

export default SearchEmailPost;
