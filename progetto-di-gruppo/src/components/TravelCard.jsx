import { Link, NavLink } from "react-router"


export default function TravelCard({ travelDestinations }) {


    return (
        <>
            <div className="container">
                <div className="row">

                    {travelDestinations.map((trip, index) => (


                        <Link className="col-12 col-md-6 col-lg-4 my-3 text-decoration-none" to={`/details/${index}`} key={index}>
                            <div className="card h-100" >
                                <img src={trip.img} className="card-img-top h-75" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-decoration-none">{trip.destination}</h5>
                                    <p className="card-text text-decoration-none">{trip.startDate}</p>
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