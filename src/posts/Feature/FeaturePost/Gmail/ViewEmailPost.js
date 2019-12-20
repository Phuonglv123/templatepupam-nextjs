import React, {Component} from 'react';
import style from '../../Feature.module.scss';
import Lightbox from "react-image-lightbox";

class ViewEmailPost extends Component {
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
            './image/viewemail.png',
            "./image/featureemail.png",
            "./image/viewthread.png",
            "./image/deletedthread.png",
            "./image/deletedmessage.png",
            "./image/deletemultithread.png"
        ];
        const {photoIndex, isOpen} = this.state;
        return (
            <div>
                <div className='text-left mb-5'>
                    <h4>Xem Email</h4>
                </div>
                <div className={style.desc}>
                    <p>Miêu tả:</p>
                    <span>Tính năng này cho phép quý khách xem, xóa email của từng người dùng.</span>
                </div>
                <div>
                    <img src={require('./image/viewemail.png')} alt="" onClick={() => {
                        this.openLightBox(0)
                    }}/>
                </div>
                <br/>
                <div>
                    <p>Để bắt đầu, quý khách chọn người dùng cần xem.</p>
                    <p>Quý khách có thể tìm kiếm theo email, tên bằng cách nhập vào ô tìm kiếm phía
                        trên.</p>
                    <p>Sau khi chọn một người dùng, hệ thống sẽ chuyển tới trang sau:</p>
                </div>
                <div>
                    <img src={require('./image/featureemail.png')} alt="" onClick={() => {
                        this.openLightBox(1)
                    }}/>
                </div>
                <br/>
                <div>
                    <p style={{fontWeight: 600}}>Một số bộ lọc quý khách có thể áp dụng như:</p>
                    <ul>
                        <li>Bao gồm Spam & Trash email: Xem cả những email có trong Spam và Trash
                        </li>
                        <li>Tìm kiếm: tìm kiếm email theo nội dung</li>
                        <li>Từ ngày: lọc những email sau một ngày cụ thể</li>
                        <li>Tới ngày: lọc những email trước một ngày cụ thể</li>
                        <li>Nhãn: chỉ hiển thị những email chứa nhãn cụ thể</li>
                    </ul>
                </div>
                <div>
                    <p style={{fontWeight: 600}}>Để xem thread nào, quý khách nhấp vào dòng đó:</p>
                    <div>
                        <img src={require(`${images[2]}`)} alt="" onClick={() => {
                            this.openLightBox(2)
                        }}/>
                    </div>
                </div>
                <br/>
                <div>
                    <p style={{fontWeight: 600}}>Để xóa một thread, quý khách nhấp vào biểu tượng
                        thùng rác trên cùng:</p>
                    <div>
                        <img src={require(`${images[3]}`)} alt="" onClick={() => {
                            this.openLightBox(3)
                        }}/>
                    </div>
                </div>
                <br/>
                <div>
                    <p style={{fontWeight: 600}}>Để xóa một message, quý khách nhấp vào biểu tượng
                        thùng rác của từng
                        message:</p>
                    <div>
                        <img src={require(`${images[4]}`)} alt="" onClick={() => {
                            this.openLightBox(4)
                        }}/>
                    </div>
                </div>
                <br/>
                <div>
                    <span style={{fontWeight: 600, borderBottom: "2px solid #333"}}>Lưu ý:</span>
                    <ul>
                        <li>Khi xóa email nào thì email đó sẽ mất hẳn (không đưa vào trash) và người
                            dùng đó sẽ không thấy email đó nữa
                        </li>
                        <li>Quý khách có thể xem lại những email đã xóa trong GsuiteX</li>
                        <li>Không thể khôi phục lại những email đã xóa (chưa hỗ trợ tính năng này)
                        </li>
                    </ul>
                </div>
                <div>
                    <p>Quý khách cũng có thể xóa nhiều thread cùng lúc bằng cách chọn rồi nhấp vào
                        “Xóa … dòng”:</p>
                    <div>
                        <img src={require(`${images[5]}`)} alt="" onClick={() => {
                            this.openLightBox(5)
                        }}/>
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

export default ViewEmailPost;
