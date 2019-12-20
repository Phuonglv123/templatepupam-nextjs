import React, {Component} from 'react';
import css from '../../Feature.module.scss';
import Lightbox from "react-image-lightbox";

class ConfigEmail extends Component {
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
            './image/cauhinh.png',
            "./image/cauhinh2.png",
        ];
        const {photoIndex, isOpen} = this.state;
        return (
            <div>
                <div className='text-left mb-5'>
                    <h4>Cấu Hình Email</h4>
                </div>
                <div className={css.desc}>
                    <p>Miêu tả:</p>
                    <span>Tính năng này cho phép quý khách chỉnh sửa cấu hình Gmail của từng người
                                            dùng, tương tự khi chọn Settings trong giao diện của Gmail.</span>
                </div>
                <div>
                    <img style={{width: '50%'}} src={require(`${images[0]}`)} alt="" onClick={() => {
                        this.openLightBox(0)
                    }}/>
                </div>
                <br/>
                <div>
                    <p style={{fontWeight: 600}}>Giao diện trang này như sau:</p>
                    <div>
                        <img src={require(`${images[1]}`)} alt="" onClick={() => {
                            this.openLightBox(1)
                        }}/>
                    </div>
                    <br/>
                    <div>
                        <p>Hiện tại GsuiteX chỉ mới hỗ trợ chỉnh “Vacation responder”</p>
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

export default ConfigEmail;
