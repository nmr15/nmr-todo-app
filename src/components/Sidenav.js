import React from 'react'
import { IconContext } from 'react-icons/lib';
import { FaCheckSquare, FaUserAlt, FaSignOutAlt } from "react-icons/fa";
import './Sidenav.scss';

const Sidenav = () => {
  return (
    <>
      <section className="section__sidenav">
        <div className="sidenav">
          <div className="sidenav__header">
            <p className="sidenav__header-content">React To Do App</p>
          </div>
          <div className="sidenav__account">
            <div className="sidenav__account-image"></div>
            <p className="sidenav__account-name">John Doe</p>
          </div>
          <div className="sidenav__menu">
            <ul className="sidenav__menu-list">
              <li className="sidenav__menu-item">
                <a href="#" className="sidenav__menu-link">
                  <IconContext.Provider value={{ className: "sidenav__menu-icon" }}>
                    <FaCheckSquare />
                  </IconContext.Provider>
                  <span>Todos</span>
                </a>
              </li>
              <li className="sidenav__menu-item">
                <a href="#" className="sidenav__menu-link">
                  <IconContext.Provider value={{ className: "sidenav__menu-icon" }}>
                    <FaUserAlt />
                  </IconContext.Provider>
                  <span>Account</span>
                </a>
              </li>
              <li className="sidenav__menu-item">
                <a href="#" className="sidenav__menu-link">
                  <IconContext.Provider value={{ className: "sidenav__menu-icon" }}>
                    <FaSignOutAlt />
                  </IconContext.Provider>
                  <span>Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
    
  )
}

export default Sidenav