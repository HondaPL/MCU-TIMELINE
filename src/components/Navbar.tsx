import { Link } from 'react-router-dom'

export default function Navbar() {

    return (
        <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
                <Link to="/mcu"><li>MCU Timeline</li></Link>
                <Link to="/ssu"><li>SSU Timeline</li></Link>
                {/* <Link to="/xmen"><li>X-Men Timeline</li></Link> */}
            </ul>
        </div>
    )
}