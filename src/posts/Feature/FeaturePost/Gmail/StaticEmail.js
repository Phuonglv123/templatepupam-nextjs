import React, {Component} from 'react';
import Lightbox from "react-image-lightbox";
import css from '../../Feature.module.scss';

class StaticEmail extends Component {
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
                    <h4>Thống Kê Email</h4>
                </div>
                <div className={css.desc}>
                    <p>Miêu tả:</p>
                    <span>Thống kê những email gửi ra ngoài, có tệp đính kèm.</span>
                </div>
                <div>
                    <p>Hiện tại GsuiteX chỉ hỗ trợ thống kê những email mà người dùng gửi ra ngoài
                        tổ chức.</p>
                    <p>Quý khách chọn khoảng thời gian để thống kê, sau đó nhấp vào nút “Làm
                        mới”.</p>
                </div>
                <div>
                    <img src={require('./image/staticemail.png')} alt="" onClick={() => {
                        this.openLightBox(0)
                    }}/>
                </div>
                <br/>
                <div>
                    <p>Nhấp vào nút “Chi tiết” để xem chi tiết những email đã gửi ra ngoài.</p>
                    <p>Nhấp vào nút “Xuất ra file” để xuất kết quả ra file (CSV).</p>
                </div>

                {isOpen && (
                    <Lightbox
                        mainSrc={require('./image/staticemail.png')}
                    />
                )}
            </div>
        );
    }
}

export default StaticEmail;
