import { useEffect, useRef, useState } from 'react'
import './chat.css'
import EmojiPicker from 'emoji-picker-react'

const Chat = () => {

    const [openEmojiPicker, setOpenEmojiPicker] = useState(false);
    const [inputText, setInputText] = useState('');

    const endRef = useRef(null);

    useEffect(() => {
        endRef.current?.scrollIntoView({behavior: "smooth"});
    }, [])

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
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat veritatis, soluta suscipit 
                            laboriosam tempore ipsam cum odit error et maiores blanditiis quam dolor eaque ducimus eos nobis. 
                            Molestias, sequi optio.
                        </p>
                        <span>1 minute ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat veritatis, soluta suscipit 
                            laboriosam tempore ipsam cum odit error et maiores blanditiis quam dolor eaque ducimus eos nobis. 
                            Molestias, sequi optio.
                        </p>
                        <span>1 minute ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat veritatis, soluta suscipit 
                            laboriosam tempore ipsam cum odit error et maiores blanditiis quam dolor eaque ducimus eos nobis. 
                            Molestias, sequi optio.
                        </p>
                        <span>1 minute ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat veritatis, soluta suscipit 
                            laboriosam tempore ipsam cum odit error et maiores blanditiis quam dolor eaque ducimus eos nobis. 
                            Molestias, sequi optio.
                        </p>
                        <span>1 minute ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        </p>
                        <span>1 minute ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <img src="https://images.unsplash.com/photo-1714407625814-84b96fdaeb81?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        </p>
                        <span>1 minute ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        </p>
                        <span>1 minute ago</span>
                    </div>
                </div>
                <div ref={endRef}></div>
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