import React, {Component} from 'react';
import Lightbox from "react-image-lightbox";
import css from '../../Feature.module.scss';

class ListAccount extends Component {
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
                    <h4>Danh Sách Tài Khoản</h4>
                </div>
                <div className={css.desc}>
                    <p>Miêu tả:</p>
                    <span>Xem danh sách các tài khoản có quyền truy cập.</span>
                </div>
                <div>
                    <img src={require('./image/list-account.png')} alt="" onClick={() => {
                        this.openLightBox(0)
                    }}/>
                </div>

                {isOpen && (
                    <Lightbox
                        mainSrc={require('./image/list-account.png')}
                    />
                )}
            </div>
        );
    }
}

export default ListAccount;
