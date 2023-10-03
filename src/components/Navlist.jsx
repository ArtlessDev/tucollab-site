import React from 'react'

function Navlist(){
  return (
    <nav className="navbar bg-dark nav-list">
        <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="https://tucollaborative.org/resources/">Resources</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="https://tucollaborative.org/research/">Research</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="https://tucollaborative.org/about-us/">About us</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="https://tucollaborative.org/trainings/">Training</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="https://tucollaborative.org/drrp/">Need 2B Needed</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="https://www.mhselfhelp.org/">Clearinghouse</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navlist