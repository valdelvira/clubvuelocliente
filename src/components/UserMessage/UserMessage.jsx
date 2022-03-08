import { useContext } from 'react'
import { MessageContext } from '../../context/userMessage.context'
import { Toast } from 'react-bootstrap'

import "./UserMessage.css"



const UserMessage = () => {

    const { setShowMessage, showMessage, messageInfo } = useContext(MessageContext)

    return (
        <Toast onClose={() => setShowMessage(false)} show={showMessage} delay={3000} autohide style={{ right: 10, top: 0 }}>
            <Toast.Header>
                <strong>{messageInfo.title}</strong>
            </Toast.Header>
            <Toast.Body >{messageInfo.desc}</Toast.Body>
        </Toast>
    )
}

export default UserMessage