import React, {Component} from 'react';
import style from './MyFooter.module.scss';

type Props = {}

class MyFooter extends Component<Props> {
    render() {
        return (
            <div className={style.myFooter}>
                <div style={{width: '100%', backgroundColor: 'rgb(28, 35, 61)', borderTop: '1px solid #293357db'}}
                     className="pt-5 pb-5">
                    <div className="container">
                        <div className='row'>
                            <div className='col-sm-12 col-md-12 col-lg-3 text-left'>
                                <div className={style.linkFooter}>
                                    <ul>
                                        <li>
                                            <span className={style.titleFooter}>SẢN PHẨM KHÁC</span>
                                        </li>
                                        <li>
                                            <a href="https://gsuite.pupam.com/vi/" target="_blank">
                                                GSUITE BY PUPAM
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://office365.pupam.com/" target="_blank">
                                                OFFICE BY PUPAM
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://domain.pupam.com/" target="_blank">
                                                DOMAIN BY PUPAM
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://grablic.pupam.com/" target="_blank">
                                                GRABLIC BY PUPAM
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-sm-12 col-md-12 col-lg-3 text-left'>
                                <div className={style.linkFooter}>
                                    <ul>
                                        <li>
                                            <span className={style.titleFooter}>CHÍNH SÁCH VÀ BẢO MẬT</span>
                                        </li>
                                        <li>
                                            <a href="https://policies.pupam.com/2018/07/dieu-khoan-su-dung.html"
                                               target="_blank">
                                                CHÍNH SÁCH & QUY ĐỊNH CHUNG
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://policies.pupam.com/2018/07/qui-dinh-ve-thanh-toan.html"
                                               target="_blank">
                                                HÌNH THỨC THANH TOÁN
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://policies.pupam.com/2018/07/chinh-sach-van-chuyen-giao-nhan-cai-dat.html"
                                               target='_blank'>
                                                VẬN CHUYỂN, GIAO NHẬN & CÀI ĐẶT
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://policies.pupam.com/2018/07/chinh-sach-bao-tri-bao-hanh.html"
                                               target="_blank">
                                                BẢO TRÌ & BẢO HÀNH
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://policies.pupam.com/2018/07/chinh-sach-doi-tra-hang-va-hoan-tien.html"
                                               target="_blank">
                                                ĐỔI TRẢ & HOÀN TIỀN
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://policies.pupam.com/2018/07/chinh-sach-bao-mat.html"
                                               target='_blank'>
                                                BẢO MẬT THÔNG TIN CÁ NHÂN VÀ TỔ CHỨC
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-sm-12 col-md-12 col-lg-3 text-left'>
                                <div className={style.linkFooter}>
                                    <ul>
                                        <li>
                                            <span className={style.titleFooter}>HỖ TRỢ KHÁCH HÀNG</span>
                                        </li>
                                        <li>
                                            <a href="https://support.pupam.com/vi/" target='_blank'>
                                                SUPPORT BY PUPAM
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-sm-12 col-md-12 col-lg-3 text-right'>
                                <div className={style.resLogo}>
                                    <div>
                                        <img src={require('./images/logopupamwhite.c13a8c2d165a.png')} alt="logo"
                                             style={{width: '150px'}}/>
                                    </div>
                                    <div className={style.footerAbout}>
                                        <span>CÔNG TY TNHH MTV VIET NIS 728-730 VÕ VĂN KIỆT, P1, QUẬN 5, TP.HCM</span>
                                        <span>HOTLINE: 1900 1254</span>
                                        <span>EMAIL: SUPPORT@PUPAM.COM</span>
                                    </div>
                                    <div>
                                        <div className="d-flex justify-content-start align-items-center">
                                            <div>
                                                <img src={require('./images/paypal.png')} alt="paypal"
                                                     style={{width: '130px'}}/>
                                            </div>
                                            <div>
                                                <a href="http://online.gov.vn/HomePage/CustomWebsiteDisplay.aspx?DocId=32087"
                                                   target="_blank">
                                                    <img src='./images/dathongbao.png' alt=""
                                                         style={{width: '130px'}}/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-start align-items-center">
                                            <div>
                                                <a href="https://www.microsoft.com/en-us/solution-providers/partnerdetails/viet-nis-coltd-(pupam)_fe365dd9-d218-41bd-876b-2776f3f4d943/ff3558f4-c31e-4dd5-bc9d-e2d1074db373"
                                                   target="_blank">
                                                    <img
                                                        src={require('./images/Microsoft-Silver-Partner.c59ee9eded1b.png')}
                                                        alt="" style={{width: '130px'}}/>
                                                </a>

                                            </div>
                                            <div>
                                                <a href="" target="_blank">
                                                    <img src={require('./images/google-cloud-Partner-logo.png')} alt=""
                                                         style={{width: '130px'}}/>
                                                </a>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="text-center" style={{width: '100%', backgroundColor: '#141a32'}}>
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className='mt-3'>
                                <div className="form-group">
                                    <select className="form-control" id="exampleFormControlSelect1">
                                        <option>Vietnamese</option>
                                        <option>English</option>
                                    </select>
                                </div>
                            </div>
                            <div className={style.footerLi}>
                                <ul className='d-flex justify-content-center align-items-center mt-3'>
                                    <li>VietNis</li>
                                    <li>|</li>
                                    <li>Pupam</li>
                                    <li>|</li>
                                    <li>Policies</li>
                                </ul>
                            </div>
                            <div>
                                <span style={{color: 'white'}}>© 2018 - Bản quyền thuộc Công Ty TNHH MTV Việt Nis</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyFooter;
