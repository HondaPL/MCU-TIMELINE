import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

    const [check, setCheck] = useState(false)

    return (
        <div id="menuToggle">
            <input checked={check} onChange={() => {}} onClick={() => check ? setCheck(false) : setCheck(true)} id="checkbox" type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
                <Link onClick={() => setCheck(false)} to="/mcu"><li>MCU Timeline</li></Link>
                <Link onClick={() => setCheck(false)} to="/ssu"><li>SSU Timeline</li></Link>
                <Link onClick={() => setCheck(false)} to="/xmen"><li>X-MEN Timeline</li></Link>
            </ul>
        </div>
    )
}