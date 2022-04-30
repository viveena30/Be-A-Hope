import React from 'react'

export default function Footer() {
    return (
        <div className="footer-data">
            <div className="quick-links">
                <ul>
                    <li className='link-title'>Company</li>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">
                            About us
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Donate
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Contact us
                        </a>
                    </li>
                </ul>
            </div>
            <div className="company-profile">
                <div className="company-logo">
                    <i class="fa-brands fa-drupal"></i>
                    <div className="company-name">DFT</div>
                </div>
                <div className="company-info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quae id, commodi veniam nulla dolor!
                </div>
            </div>
            <div className="social-links">
                <ul>
                    <li className='link-title'>Social Media</li>
                    <li>
                        
                        <a href="#"><i class="fa-brands fa-facebook-f"></i>Facebook</a>
                    </li>
                    <li>
                       
                        <a href="#"> <i class="fa-brands fa-instagram"></i>Instagram</a>
                    </li>
                    <li>
                        
                        <a href="#"><i class="fa-brands fa-twitter"></i>Twitter</a>
                    </li>
                    <li>
                        
                        <a href="#"><i class="fa-brands fa-linkedin-in"></i>Linkedin</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

