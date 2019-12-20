import React, {Component} from 'react';
import style from "./Style.module.scss";
import {Link} from "react-router-dom";
import AppURL from "../Route/AppURL";

class SidebarFeature extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openEmail: this.props.open,
            openDriver: this.props.openDriver,
            openOther: this.props.openOther,
            activeLink: null,
            top: null
        }
    }

    toggleEmail = () => {
        this.setState({
            openEmail: !this.state.openEmail
        });
    };

    toggleDriver = () => {
        this.setState({
            openDriver: !this.state.openDriver
        });
    };

    toggleOther = () => {
        this.setState({
            openOther: !this.state.openOther
        });
    };

    handleClick = () => {
        const currentClass = document.getElementsByClassName("nav-item");
        for (let i = 0; i < currentClass.length; i++) {
            currentClass[i].classList.toggle("active_item");
            console.log(currentClass[i]);
        }
    };

    render() {

        return (
            <div className={style.sidebar}>
                <div className={style.title}>
                    <span>Table of content</span>
                </div>
                <div className={style.menu}>
                    <ul className="nav flex-column">
                        <li className='nav-item'>
                            <Link to={AppURL.feature()}>
                                <div className='row'>
                                    <span style={{width: '15px', marginRight: 12}}/>
                                    <span>Bắt đầu</span>
                                </div>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link" onClick={this.toggleEmail}>G Mail</span>
                            {this.state.openEmail &&
                            <div>
                                <ul className="nav flex-column">
                                    {GMail.map((i, index) => (
                                        <li key={index}
                                            className='nav-item'>
                                            <Link to={i.to}>
                                                <div className='row'>
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
                            <span className="nav-link" onClick={this.toggleDriver}>Driver</span>
                            {this.state.openDriver &&
                            <div>
                                <ul className="nav flex-column">
                                    {Driver.map((i, index) => (
                                        <li key={index}
                                            className='nav-item'>
                                            <Link to={i.to}>
                                                <div className='row'>
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
                            <span className="nav-link" onClick={this.toggleOther}>Other feature</span>
                            {this.state.openOther &&
                            <div>
                                <ul className="nav flex-column" style={{lineHeight: 1.5}}>
                                    {Other.map((i, index) => (
                                        <li key={index} style={{marginBottom: 10}}
                                            className='nav-item'>
                                            <Link to={i.to}>
                                                <div className='row'>
                                                    <span className='col-sm-2'/>
                                                    <span className='col-sm-10'>{i.name}</span>
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
    },
    {
        name: 'Tìm kiếm email',
        to: AppURL.searchEmailPost(),
    },
    {
        name: 'Xem email đã xóa',
        to: AppURL.viewEmailDeleted(),
    }, {
        name: 'Cấu hình G Mail',
        to: AppURL.configGMail(),
    }, {
        name: 'Thông báo',
        to: AppURL.notifyEmail(),
    }, {
        name: 'Thống kê',
        to: AppURL.staticEmail(),
    }, {
        name: 'Sửa email liên hệ',
        to: AppURL.editContactEmail(),
    },
];

const Driver = [
    {
        name: 'Chuyển dữ liệu',
        to: AppURL.transferDriver(),
    },
    {
        name: 'Bulk migration',
        to: AppURL.BulkMigration(),
    },
];

const Other = [
    {
        name: 'Phân quyền',
        to: AppURL.authentication(),
    },
    {
        name: 'Lịch sử hành động',
        to: AppURL.actionLog(),
    },
    {
        name: 'Thông tin tài khoản',
        to: AppURL.informationAccount(),
    }, {
        name: 'Danh sách tài khoản',
        to: AppURL.listAccount(),
    }, {
        name: 'Lịch sử đăng nhập',
        to: AppURL.historyLogin(),
    },
];

export default SidebarFeature;
