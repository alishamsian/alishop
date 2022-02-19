import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/Logo-2.png'

const mainNav = [
    {
        display: "Trang chủ",
        path: "/"
    },
    {
        display: "Sản phẩm",
        path: "/catalog"
    },
    {
        display: "Phụ kiện",
        path: "/accessories"
    },
    {
        display: "Liên hệ",
        path: "/contact"
    }
]

const Header = () => {
    
  return (
    <div className="header">
        <div className="container">
            <div className="header__logo">
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="header__menu">
                <div className="header__menu__mobile-toggle">
                    <i className='bx bx-menu-alt-left'></i>
                </div>
                {
                    mainNav.map((item , index)=>(
                        
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Header