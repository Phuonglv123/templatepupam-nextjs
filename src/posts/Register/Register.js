import React, {Component} from 'react';
import css from './register.module.scss';

class Register extends Component {
    componentDidMount(): void {
        document.getElementById('bg-custom').style.background = 'transparent'
    }

    render() {
        return (
            <div id="register" className={css.register}>

                <div style={{width: '100%'}} className='d-flex justify-content-start align-items-center'>
                    <div className={css.left}>
                        <div className='text-center' style={{lineHeight: 2.5}}>
                            <span className={css.titleRegister}>Welcome back in XGsuite</span>
                            <div>
                                <a href="https://gsuitex.pupam.com/login/" style={{marginRight: '20px'}}>Login</a>
                                <a href="/">Back to Home</a>
                            </div>
                            <div>
                                <img src={require('./image/tab2.png')} alt=""
                                     style={{width: '50%', marginTop: '2em'}}/>
                            </div>
                        </div>
                    </div>
                    <div className={css.right}>
                        <div className={css.bckColor}>
                            <div className={css.myCard}>
                                <form onSubmit={e => {
                                    e.preventDefault();
                                    this.handleSubmit(1)
                                }}>
                                    <div className='row'>
                                        <div className='col-sm-6'>
                                            <div className="form-group">
                                                <label htmlFor="email">Firt Name</label>
                                                <input type="email" className="form-control" placeholder="Enter email"
                                                       id="email"/>
                                            </div>
                                        </div>
                                        <div className='col-sm-6'>
                                            <label htmlFor="email">Last Name</label>
                                            <input type="email" className="form-control" placeholder="Enter email"
                                                   id="email"/>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-sm-6'>
                                            <label htmlFor="email">Email</label>
                                            <input type="email" className="form-control" placeholder="Enter email"
                                                   id="email"/>
                                        </div>
                                        <div className='col-sm-6'>
                                            <label htmlFor="email">Password</label>
                                            <input type="email" className="form-control" placeholder="Enter email"
                                                   id="email"/>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-sm-6'>
                                            <label htmlFor="email">Confirm Password</label>
                                            <input type="email" className="form-control" placeholder="Enter email"
                                                   id="email"/>
                                        </div>
                                        <div className='col-sm-6'>
                                            <label htmlFor="email">Domain Name</label>
                                            <input type="email" className="form-control" placeholder="Enter email"
                                                   id="email"/>
                                        </div>
                                    </div>
                                    <div className='text-center mt-3 mb-3'>
                                        <button type='submit'>Register</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;
