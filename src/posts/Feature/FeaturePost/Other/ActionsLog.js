import React, {Component} from 'react';
import Lightbox from "react-image-lightbox";
import css from '../../Feature.module.scss';

class ActionsLog extends Component {
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
                    <h4>Lịch Sử Hành Động</h4>
                </div>
                <div className={css.desc}>
                    <p>Miêu tả:</p>
                    <span>Mọi thao tác trên hệ thống của quý khách đều được lưu lại để tiện tra cứu sau
                                        này.</span>
                </div>
                <div>
                    <img src={require('./image/auth.png')} alt="" onClick={() => {
                        this.openLightBox(0)
                    }}/>
                </div>

                {isOpen && (
                    <Lightbox
                        mainSrc={require('./image/auth.png')}
                    />
                )}
            </div>
        );
    }
}

export default ActionsLog;
