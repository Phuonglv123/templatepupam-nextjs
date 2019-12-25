import React, {Component} from 'react';
import style from "./Style.module.scss";
import {Link, withRouter} from "react-router-dom";
import AppURL from "../Route/AppURL";

class SidebarFeature extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openEmail: false,
            openDriver: false,
            openOther: false,
            top: null
        }
    }

    toggleEmail = () => {
        this.setState({
            openEmail: !this.state.openEmail
        });
        localStorage.setItem('openMail', !this.state.openEmail)
    };

    toggleDriver = () => {
        this.setState({
            openDriver: !this.state.openDriver
        });
        localStorage.setItem('openDriver', !this.state.openDriver)
    };

    toggleOther = () => {
        this.setState({
            openOther: !this.state.openOther
        });
        localStorage.setItem('openOther', !this.state.openOther)
    };

    componentDidMount() {
        document.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                this.setState({top: '10px'})
            } else {
                this.setState({top: null})
            }
        });
        window.scrollTo(0, 0);
    }

    render() {
        const path = this.props.location.pathname;
        return (
            <div className={style.sidebar} style={{top: this.state.top}}>
                <div className={style.title}>
                    <span>Table of content</span>
                </div>
                <div className={style.menu}>
                    <ul className="nav flex-column">
                        <li className='nav-item'>
                            <Link to={AppURL.feature()}>
                                <div className={`row ${path === '/feature' && 'active'}`}>
                                    <span style={{width: '15px', marginRight: 12}}/>
                                    <span>Bắt đầu</span>
                                </div>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link" onClick={this.toggleEmail}
                                  style={{fontWeight: this.state.openEmail ? 'bold' : null}}>G Mail</span>
                            {localStorage.getItem('openMail') === 'true' && <div>
                                <ul className="nav flex-column" style={{marginLeft: -30}}>
                                    {GMail.map((i, index) => (
                                        <li key={index}
                                            className='nav-item'>
                                            <Link to={i.to}>
                                                <div
                                                    className={`row ${path === i.to && 'active'}`}>
                                                    <span className={'col-sm-3'}/>
                                                    <span className='col-sm-9'>{i.name}</span>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            }
                        </li>
                        <li className="nav-item">
                            <span className="nav-link" onClick={this.toggleDriver}
                                  style={{fontWeight: this.state.openDriver ? 'bold' : null}}>Driver</span>
                            {localStorage.getItem('openDriver') === 'true' && <div>
                                <ul className="nav flex-column" style={{marginLeft: -30}}>
                                    {Driver.map((i, index) => (
                                        <li key={index}
                                            className='nav-item'>
                                            <Link to={i.to}>
                                                <div className={`row ${path === i.to && 'active'}`}>
                                                    <span className='col-sm-3'/>
                                                    <span className='col-sm-9'>{i.name}</span>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            }
                        </li>
                        <li className="nav-item">
                            <span className="nav-link" onClick={this.toggleOther}
                                  style={{fontWeight: this.state.openOther ? 'bold' : null}}>Other feature</span>
                            {localStorage.getItem('openOther') === 'true' && <div>
                                <ul className="nav flex-column" style={{marginLeft: -30}}>
                                    {Other.map((i, index) => (
                                        <li key={index}
                                            className='nav-item'>
                                            <Link to={i.to}>
                                                <div className={`row ${path === i.to && 'active'}`}>
                                                    <span className='col-sm-3'/>
                                                    <span className='col-sm-9'>{i.name}</span>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

const GMail = [
    {
        name: 'Xem email',
        to: AppURL.viewEmailPost(),
        id: 'view email'
    },
    {
        name: 'Tìm kiếm email',
        to: AppURL.searchEmailPost(),
        id: 'search email'
    },
    {
        name: 'Xem email đã xóa',
        to: AppURL.viewEmailDeleted(),
        id: 'view email deleted'
    }, {
        name: 'Cấu hình G Mail',
        to: AppURL.configGMail(),
        id: 'config email'
    }, {
        name: 'Thông báo',
        to: AppURL.notifyEmail(),
        id: 'notify'
    }, {
        name: 'Thống kê',
        to: AppURL.staticEmail(),
        id: 'static'
    }, {
        name: 'Sửa email liên hệ',
        to: AppURL.editContactEmail(),
        id: 'edit email'
    },
];

const Driver = [
    {
        name: 'Chuyển dữ liệu',
        to: AppURL.transferDriver(),
        id: 'transfer data'
    },
    {
        name: 'Bulk migration',
        to: AppURL.BulkMigration(),
        id: 'bulk migration'
    },
];

const Other = [
    {
        name: 'Phân quyền',
        to: AppURL.authentication(),
        id: 'authentication'
    },
    {
        name: 'Lịch sử hành động',
        to: AppURL.actionLog(),
        id: 'action log'
    },
    {
        name: 'Thông tin tài khoản',
        to: AppURL.informationAccount(),
        id: 'information account'
    }, {
        name: 'Danh sách tài khoản',
        to: AppURL.listAccount(),
        id: 'list account'
    }, {
        name: 'Lịch sử đăng nhập',
        to: AppURL.historyLogin(),
        id: 'history'
    },
];

export default withRouter(SidebarFeature);
