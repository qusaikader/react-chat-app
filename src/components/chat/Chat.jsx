import { useState } from 'react'
import './chat.css'
import EmojiPicker from 'emoji-picker-react'

const Chat = () => {

    const [openEmojiPicker, setOpenEmojiPicker] = useState(false);
    const [inputText, setInputText] = useState('');

    const handleEmoji = e => {
        setInputText(prev => prev + e.emoji);
        setOpenEmojiPicker(false);
    }

    return (
        <div className='chat'>
            <div className="chatHeader">
                <div className="user">
                    <img src="./avatar.png" alt="Profile Picture" />
                    <div className="texts">
                        <span>John Doe</span>
                        <p>Busy, only ChatterUp</p>
                    </div>
                </div>
                <div className="icons">
                    <img src="./phone.png" alt="Phone Call" />
                    <img src="./video.png" alt="Video Call" />
                    <img src="./info.png" alt="More Info" />
                </div>
            </div>
            <div className="chatContent">

            </div>
            <div className="chatInput">
                <div className="icons">
                    <img src="./img.png" alt="Image" />
                    <img src="./camera.png" alt="Camera" />
                    <img src="./mic.png" alt="Audio" />
                </div>
                <input type="text" placeholder='Type a message...' value={inputText} onChange={e => setInputText(e.target.value)}/>
                <div className="emoji">
                    <img src="./emoji.png" alt="Select Emoji" onClick={() => setOpenEmojiPicker((prevState) => !prevState)}/>
                    <div className="picker">
                    <EmojiPicker open={openEmojiPicker} onEmojiClick={handleEmoji}/>
                    </div>
                </div>
                <button className='sendButton'>Send</button>
            </div>
        </div>
    )
}

export default Chat;