import logo from '../image/logo.svg'
import { Link } from "react-router-dom";
export default function Logo() {
    return (
        <Link to="/" className="link home-link">
            <img src={logo} alt="" width="100" height="100" />
        </Link>
    )
}