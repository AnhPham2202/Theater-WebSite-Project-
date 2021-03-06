import React from 'react'

import logo_1 from '../../assets/img/logoConnect-1.png'
import logo_2 from '../../assets/img/logoConnect-2.png'
import logo_3 from '../../assets/img/logoConnect-3.png'
import logo_4 from '../../assets/img/logoConnect-4.png'
import logo_5 from '../../assets/img/logoConnect-5.png'
import logo_6 from '../../assets/img/logoConnect-6.png'
import logo_7 from '../../assets/img/logoConnect-7.jpg'
import logo_8 from '../../assets/img/logoConnect-8.png'
import logo_9 from '../../assets/img/logoConnect-9.png'
import logo_10 from '../../assets/img/logoConnect-10.jpg'
import logo_11 from '../../assets/img/logoConnect-11.png'
import logo_12 from '../../assets/img/logoConnect-12.png'
import logo_13 from '../../assets/img/logoConnect-13.png'
import logo_14 from '../../assets/img/logoConnect-14.jpg'

export default function Footer() {

    const renderLogo = () => {
        const logoContent = []
        for (let i = 1; i <= 16; i += 5) {
            logoContent.push(
                <div className="row">
                    {renderRow(i)}
                </div>
            )
        }
        return logoContent;
    }
    const renderRow = (start) => {
        let rowContent = []

        for (let i = start; i <= start + 4; i++) {

            if (i == 7 || i == 10 || i == 14) {
                rowContent.push(
                    <a href="#">
                        <img src={logo_1} alt />
                    </a>
                )
            } else {
                rowContent.push(
                    <a href="#">
                        <img src={`./img/logoConnect-${i}.png`} alt />
                    </a>
                )
            }
        }
        return rowContent;
    }

    const renderOtherLogo = (start, end) => {
        let content = [];
        for (let i = start; i <= end; i++) {
            content.push(
                <a href="#">
                    <img src={`./img/footer-logo-${i}.png`} alt />
                </a>
            )
        }
        return content;
    }
        return (
            <section id="footer">
                <div className="container">
                    <div className="row top-footer">
                        <div className="left col-md-4">
                            <p>TIX</p>
                            <div className="row">
                                <div className="col-md-6">
                                    <a href="#">FAQ</a>
                                    <a href="#">Brand Guidelines</a>
                                </div>
                                <div className="col-md-6">
                                    <a href="#">Tho??? thu???n s??? d???ng</a>
                                    <a href="#">Ch??nh s??ch b???o m???t</a>
                                </div>
                            </div>
                        </div>
                        <div className="mid col-md-4">
                            <p>?????i t??c</p>
                            {renderLogo()}
                        </div>
                        <div className="right col-md-4">
                            <div className="row">
                                <div className="media-social col-md-6">
                                    <p>MOBILE APP</p>
                                    {renderOtherLogo(1,2)}
                                </div>
                                <div className="app col-md-6">
                                    <p>SOCIAL</p>
                                    {renderOtherLogo(3,4)}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row bottom-footer">
                        <div className="col-md-2">
                            <a href="#">
                                <img src="./img/footer-1.jpg" alt />
                            </a>
                        </div>
                        <div className="col-md-8">
                            <p className="title">TIX ??? S???N PH???M C???A C??NG TY C??? PH???N ZION</p>
                            <p>?????a ch???: Z06 ???????ng s??? 13, Ph?????ng T??n Thu???n ????ng, Qu???n 7, Tp. H??? Ch?? Minh, Vi???t Nam.<br />
          Gi???y ch???ng nh???n ????ng k?? kinh doanh s???: 0101659783,<br />
          ????ng k?? thay ?????i l???n th??? 30, ng??y 22 th??ng 01 n??m 2020 do S??? k??? ho???ch v?? ?????u t?? Th??nh ph??? H??? Ch??
          Minh c???p.<br />
          S??? ??i???n Tho???i (Hotline): 1900 545 436<br />
          Email: <a href="#">support@tix.vn</a></p>
                        </div>
                        <div className="col-md-2">
                            <a href="#">
                                <img src="./img/footer-2.png" alt />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
