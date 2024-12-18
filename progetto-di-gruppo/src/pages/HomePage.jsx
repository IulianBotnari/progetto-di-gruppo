import travelDestinations from "../db"
import Header from "../components/Header"
import TravelCard from "../components/TravelCard"

export default function HomePage() {


    return (
        <>

            <Header />

            <TravelCard travelDestinations={travelDestinations} />


        </>
    )
}