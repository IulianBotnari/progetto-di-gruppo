import travelDestinations from "../db"
import { Link, NavLink } from "react-router"

export default function HomePage() {


    return (
        <>
            <h1>Welcome to the Home Page</h1>


            <h2>Popular Travel Destinations</h2>

            <div className="container">
                <div className="row">

                    {travelDestinations.map((trip, index) => (


                        <Link className="col-12 col-md-6 col-lg-4 my-3" to={`/details/${index}`} key={index}>
                            <div className="card h-100" >
                                <img src={trip.img} className="card-img-top h-75" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{trip.destination}</h5>
                                    <p className="card-text">{trip.startDate}</p>
                                </div>
                            </div>



                        </Link>



                    ))
                    }

                </div>

            </div>


        </>
    )
}