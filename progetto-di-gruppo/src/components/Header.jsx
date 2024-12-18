import { Link, NavLink } from "react-router"


export default function Header() {

    return (

        <>
            <Link className="text-decoration-none text-dark link-success" to={'/'}><h1 className="text-center my-4">Travel Hub</h1></Link>
        </>
    )
}