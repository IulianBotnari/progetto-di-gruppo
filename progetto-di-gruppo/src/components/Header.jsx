import { Link, NavLink } from "react-router"


export default function Header() {

    return (

        <>
            <Link className="text-decoration-none text-dark link-warning" to={'/'}><h1 className="text-center my-4">Travel Sti cazzi</h1></Link>
        </>
    )
}