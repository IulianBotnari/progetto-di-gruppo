

import travelDestination from '../db'
import Header from '../components/Header'
import { useParams } from 'react-router'
import { useState } from 'react'

export default function DetailsPage() {

    const [partecipants, setParticipants] = useState('')


    const { id } = useParams()
    const title = travelDestination[id].destination




    return (
        <>
            <Header />
            <h3 className='text-center'>{title}</h3>
            <input type='text' placeholder='search' onChange={(e) => setParticipants(e.target.value)} />

            <div className='container'>

                <div className="accordion accordion-flush" id="accordionFlushExample">

                    {travelDestination[id].participants.map((participant, index) => (

                        <div key={index} className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${index}`} aria-expanded="false" aria-controls={`flush-collapse${index}`}>
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
