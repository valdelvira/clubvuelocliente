import EventCard from "./EventCard"
import { Col } from "react-bootstrap"
import { useContext } from 'react'
import { AuthContext } from "../../context/auth.context"

const EventList = ({ events, refreshEvents }) => {

    let newParticipants
    const { user } = useContext(AuthContext)
    return (
        <>{
            
            events.map(event => {
                console.log(event)
                if(user){

                    newParticipants = event?.participants.map(elem => { 
                        if (elem?._id === user?._id){
                            return {...elem, isParticipant:true}
                        }
                        
                    })
                }
                return <Col md={4} key={event._id}> <EventCard {...event } participants={newParticipants} refreshEvents={refreshEvents} /> </Col>
            })
        }
        </>
    )
}

export default EventList