import React, {Component} from 'react';
import style from './Home.module.scss';
import MyFooter from "../../components/MyFooter/MyFooter";

type Props = {}

class Home extends Component<Props> {
    componentDidMount(): void {
        document.getElementById('bg-custom').style.backgroundColor = 'transparent'
    }

    render() {
        return (
            <div className={style.home}>
                <div className={style.banner}>
                    <div className='row' style={{width: '100%', margin: '0 auto'}}>
                        <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6'>
                            <div className={style.bannerText}>
                                <div>
                                    <span>GsuiteX, Quản lý email cho doanh nghiệp</span>
                                </div>
                                <div>
                                    <button>Start trial</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6'>
                            <div>
                                <img src={require('./images/hero-6-img-png.png')} alt="" style={{width: '100%'}}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.service} id='about'>
                    <div className='row' style={{width: '100%', margin: '0 auto'}}>
                        <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6'>
                            <div className={style.flexCenter}>
                                <div className={style.firstCard}>
                                    <div className='shadow-lg p-4 mb-4 bg-white'
                                         style={{width: '300px', borderRadius: '8px'}}>
                                        <div className={style.myIcon}>
                                            <i className="fas fa-layer-group"/>
                                        </div>
                                        <div className='text-center mt-2'>
                                            <span className={style.serviceTitle}>Example text example text</span>
                                        </div>
                                        <div className='text-center mt-2'>
                                            <span>Due to the evolution of our technology, creating a poster also affect in this changes.</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.leftCard}>
                                    <div className='shadow-lg p-4 mb-4 bg-white'
                                         style={{width: '300px', borderRadius: '8px'}}>
                                        <div className={style.myIcon}>
                                            <i className="fas fa-layer-group"/>
                                        </div>
                                        <div className='text-center mt-2'>
                                            <span className={style.serviceTitle}>Example text example text</span>
                                        </div>
                                        <div className='text-center mt-2'>
                                            <span>Due to the evolution of our technology, creating a poster also affect in this changes.</span>
                                        </div>
                                    </div>
                                    <div className='shadow-lg p-4 mb-4 bg-white'
                                         style={{width: '300px', borderRadius: '8px'}}>
                                        <div className={style.myIcon}>
                                            <i className="fas fa-layer-group"/>
                                        </div>
                                        <div className='text-center mt-2'>
                                            <span className={style.serviceTitle}>Example text example text</span>
                                        </div>
                                        <div className='text-center mt-2'>
                                            <span>Due to the evolution of our technology, creating a poster also affect in this changes.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6'>
                            <div className={style.serviceText}>
                                <div>
                                    <span className={style.textTop}>OUR SERVICES</span>
                                </div>
                                <div className='mt-3'>
                                    <span className={style.textMiddle}>Example text example text example text example text example text example text</span>
                                </div>
                                <div className="mt-3">
                                    <span className={style.textEnd}>Example text example text example text example text example text example text</span>
                                </div>
                                <div className="mt-3">
                                    <button>Example text</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.feature} id='feature'>
                    <div style={{width: '100%', margin: '0 auto'}} className='row'>
                        <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6'>
                            <div className={style.overView}>
                                <div className={style.featureText}>
                                    <div className='text-center'>
                                        <span className={style.textTop}>OUR FEATURE</span>
                                    </div>
                                    <div className='mt-3 text-center'>
                                        <span className={style.textMiddle}>Example text example text example</span>
                                    </div>
                                    <div className="mt-3">
                                        <div className='d-flex justify-content-start align-items-center'>
                                            <div className={style.featureIcon}>
                                                <i className="fas fa-layer-group"/>
                                            </div>
                                            <div>
                                                <div className={style.featureTitle}>
                                                    <span>Example text titile</span>
                                                </div>
                                                <div>
                                                    <span>Wonderful is fusing creativity and technology, with brave, bold strategy. It’s combining our talents.</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-3">
                                        <div className='d-flex justify-content-start align-items-center'>
                                            <div className={style.featureIcon}>
                                                <i className="fas fa-layer-group"/>
                                            </div>
                                            <div>
                                                <div className={style.featureTitle}>
                                                    <span>Example text titile</span>
                                                </div>
                                                <div>
                                                    <span>Wonderful is fusing creativity and technology, with brave, bold strategy. It’s combining our talents.</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-3">
                                        <div className='d-flex justify-content-start align-items-center'>
                                            <div className={style.featureIcon}>
                                                <i className="fas fa-layer-group"/>
                                            </div>
                                            <div>
                                                <div className={style.featureTitle}>
                                                    <span>Example text titile</span>
                                                </div>
                                                <div>
                                                    <span>Wonderful is fusing creativity and technology, with brave, bold strategy. It’s combining our talents.</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-3">
                                        <div className='d-flex justify-content-start align-items-center'>
                                            <div className={style.featureIcon}>
                                                <i className="fas fa-layer-group"/>
                                            </div>
                                            <div>
                                                <div className={style.featureTitle}>
                                                    <span>Example text titile</span>
                                                </div>
                                                <div>
                                                    <span>Wonderful is fusing creativity and technology, with brave, bold strategy. It’s combining our talents.</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.btnFeature}>
                                        <a href='/feature'>View more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6'>
                            <div className={style.marginImgFeature}>
                                <img src={require('./images/tab2.png')} alt="" style={{width: '100%'}}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.happyClient}>
                    <div className='row' style={{width: '100%', margin: 'auto'}}>
                        <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6'>
                            <div className={style.overClient}>
                                <img src={require('./images/about-6-img.png')} alt="" style={{width: '100%'}}/>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6'>
                            <div className={style.overClient}>
                                <div className={style.happyClientText}>
                                    <div>
                                        <span className={style.textTop}>OUR FEATURE</span>
                                    </div>
                                    <div className='mt-3'>
                                        <span className={style.textMiddle}>Example text example text example</span>
                                    </div>
                                    <div className="mt-3">
                                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur incidunt unde voluptates? Sint, vero.</span>
                                    </div>
                                </div>
                                <div className='mt-5'>
                                    <div className='row' style={{width: '100%', margin: '0 auto'}}>
                                        <div className='col-sm-12 col-md-12 col-lg-3'>
                                            <div className='shadow-lg p-4 mb-4 bg-white text-center'>
                                                <div>
                                                    <span>126+</span>
                                                </div>
                                                <div>
                                                    <span>Project Complete</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-sm-12 col-md-12 col-lg-3'>
                                            <div className='shadow-lg p-4 mb-4 bg-white text-center'>
                                                <div>
                                                    <span>126+</span>
                                                </div>
                                                <div>
                                                    <span>Project Complete</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-sm-12 col-md-12 col-lg-3'>
                                            <div className='shadow-lg p-4 mb-4 bg-white text-center'>
                                                <div>
                                                    <span>126+</span>
                                                </div>
                                                <div>
                                                    <span>Project Complete</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-sm-12 col-md-12 col-lg-3'>
                                            <div className='shadow-lg p-4 mb-4 bg-white text-center'>
                                                <div>
                                                    <span>126+</span>
                                                </div>
                                                <div>
                                                    <span>Project Complete</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.pricing} id='pricing'>
                    <div className="container">
                        <div className="text-center mb-3">
                            <div className='mb-3'>
                                <span className={style.titleCard}>Choose your plan</span>
                            </div>
                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusam entium quia quibusdam quis quo recusandae reiciendis temporibus veniam voluptate.</span>
                        </div>
                        <div className='row' style={{width: '100%', margin: '0 auto'}}>
                            <div className='col-sm-12 col-md-12 col-lg-4'>
                                <div className='shadow-lg p-4 mb-4 bg-white' style={{borderRadius: '8px'}}>
                                    <div className="text-center">
                                        <div className='mb-3'>
                                            <span className={style.titleCard}>Free</span>
                                        </div>
                                        <div className='mb-3'>
                                            <span className={style.titleCard}>$0</span>
                                        </div>
                                    </div>
                                    <div>
                                        <ul style={{lineHeight: 2}}>
                                            <li>Example text</li>
                                            <li>Example text</li>
                                            <li>Example text</li>
                                            <li>Example text</li>
                                            <li>Example text</li>
                                        </ul>
                                    </div>
                                    <div className={style.buttonCard}>
                                        <button>Start trial</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-12 col-md-12 col-lg-4'>
                                <div className='shadow-lg p-4 mb-4 bg-white' style={{borderRadius: '8px'}}>
                                    <div className="text-center">
                                        <div className='mb-3'>
                                            <span className={style.titleCard}>Free</span>
                                        </div>
                                        <div className='mb-3'>
                                            <span className={style.titleCard}>$0</span>
                                        </div>
                                    </div>
                                    <div>
                                        <ul style={{lineHeight: 2}}>
                                            <li>Example text</li>
                                            <li>Example text</li>
                                            <li>Example text</li>
                                            <li>Example text</li>
                                            <li>Example text</li>
                                        </ul>
                                    </div>
                                    <div className={style.buttonCard}>
                                        <button>Start trial</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-12 col-md-12 col-lg-4'>
                                <div className='shadow-lg p-4 mb-4 bg-white' style={{borderRadius: '8px'}}>
                                    <div className="text-center">
                                        <div className='mb-3'>
                                            <span className={style.titleCard}>Free</span>
                                        </div>
                                        <div className='mb-3'>
                                            <span className={style.titleCard}>$0</span>
                                        </div>
                                    </div>
                                    <div>
                                        <ul style={{lineHeight: 2}}>
                                            <li>Example text</li>
                                            <li>Example text</li>
                                            <li>Example text</li>
                                            <li>Example text</li>
                                            <li>Example text</li>
                                        </ul>
                                    </div>
                                    <div className={style.buttonCard}>
                                        <button>Start trial</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <MyFooter/>
            </div>
        )
    }
}

export default Home;
