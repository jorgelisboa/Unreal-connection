import { Button, TextInput } from 'evergreen-ui'
import './Chat.css'

export default function Chat() {

    return(
        <main className="chat-area">
            <div className="chat-box">

            </div>
            <div className="input-area">
                <TextInput height="56px" className='text-input' appearance='default' type="text" maxLength="128" placeholder='type a message here...'/>
                <Button height="56px" className='send-button' appearance='primary'>send</Button>
            </div>
        </main>
    )
}