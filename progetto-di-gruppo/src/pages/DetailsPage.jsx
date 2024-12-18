

import travelDestination from '../db'
import Header from '../components/Header'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'

export default function DetailsPage() {
    const { id } = useParams()

    const [partecipants, setParticipants] = useState('')
    const [newArray, setnewArray] = useState(travelDestination[id].participants)

    console.log(partecipants);



    function search() {

        const searchArray = travelDestination[id].participants.filter(participant => `${participant.firstName}${participant.lastName}`.toLocaleLowerCase().includes(partecipants.toLowerCase()))
        console.log(searchArray);
        setnewArray(searchArray)
        return searchArray
    }

    useEffect(() => {
        search()
    }, [partecipants])



    const title = travelDestination[id].destination



    return (
        <>
            <Header />
            <h3 className='text-center'>{title}</h3>

            <div className='container d-flex align-items-center flex-column'>
                <input className='form-control input-group-text my-3 w-50' aria-label="First name" type='text' placeholder='🔍' onChange={(e) => setParticipants(e.target.value)} />

                <div className="accordion accordion-flush col-6" id="accordionFlushExample">

                    {newArray.map((participant, index) => (

                        <div key={index} className="accordion-item border my-3 rounded-3 ">
                            <h2 className="accordion-header ">
                                <button className="accordion-button collapsed rounded-3" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${index}`} aria-expanded="false" aria-controls={`flush-collapse${index}`}>
                                    {participant.firstName} {participant.lastName}
                                </button>
                            </h2>
                            <div id={`flush-collapse${index}`} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <p>Telefono: {participant.phone}</p>
                                    <p>Email: {participant.email}</p>
                                    <p>Codice Fiscale: {participant.fiscalCode}</p>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>


            </div>

        </>
    )
}
