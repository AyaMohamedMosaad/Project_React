import React from "react";
import './FooterStyle.css'
import { FaBeer , FaFacebookF ,FaInstagramSquare,FaLinkedin,FaTwitter} from 'react-icons/fa';
export function Footer() {
    return (
        <>


            <footer className="container-fluid bg-grey py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6 ">
                                    <div className="logo-part">
                                        <img src="https://dynamic.brandcrowd.com/asset/logo/a8912a27-ee4f-42a4-bd23-d46783f1fa06/logo-search-grid-1x?v=637861166733870000&text=Albums&colorpalette=grayscale" className="w-50 logo-footer" />
                                        <p>7637 Laurel Dr. King Of Prussia, PA 19406</p>
                                        <p>Use this tool as test data for an automated system or find your next pen</p>
                                    </div>
                                </div>
                                <div className="col-md-6 px-4">
                                    <h6> About Albums</h6>
                                    <p>But horizontal lines can only be a full pixel high.</p>
                                    <a href="#" className="btn-footer"> More Info </a><br />
                                    <a href="#" className="btn-footer"> Contact Us</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div claclassNamess="row">
                                <div className="col-md-6 px-4">
                                    <h6> Help us</h6>
                                    <div className="row ">
                                        <div className="col-md-6">
                                            <ul>
                                                <li> <a href="#"> Home</a> </li>
                                                <li> <a href="#"> About</a> </li>
                                                <li> <a href="#"> Service</a> </li>
                                                <li> <a href="#"> Team</a> </li>
                                                <li> <a href="#"> Help</a> </li>
                                                <li> <a href="#"> Contact</a> </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6 px-4">
                                            <ul>
                                                <li> <a href="#"> Cab Faciliy</a> </li>
                                                <li> <a href="#"> Fax</a> </li>
                                                <li> <a href="#"> Terms</a> </li>
                                                <li> <a href="#"> Policy</a> </li>
                                                <li> <a href="#"> Refunds</a> </li>
                                                <li> <a href="#"> Paypal</a> </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 ">
                                    <h6> Newsletter</h6>
                                    <div className="social">
                                        <div className="test">
                                       <FaFacebookF /><span>       </span>
                                       <FaInstagramSquare/><span>       </span>
                                       <FaLinkedin/><span>       </span>
                                       <FaTwitter/><span>       </span>
                                       </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>



















        </>
    )
}