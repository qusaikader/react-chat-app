import { useState } from 'react';
import './chatList.css'

const ChatList = () => {
    const [addMode, setAddMode] = useState(false);

    return (
        <div className='chatList'>
            <div className="search">
                <div className="searchBar">
                    <img src="./search.png" alt="Search icon" />
                    <input type="text" placeholder='Search'/>
                </div>
                <img src={addMode ? "./minus.png" : "./plus.png"} alt="Add user" className='add'
                onClick={() => setAddMode(prev => !prev)}/>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="Profile Picture" />
                <div className="texts">
                    <span>John Doe</span>
                    <p>Hello, How are you?</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="Profile Picture" />
                <div className="texts">
                    <span>John Doe</span>
                    <p>Hello, How are you?</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="Profile Picture" />
                <div className="texts">
                    <span>John Doe</span>
                    <p>Hello, How are you?</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="Profile Picture" />
                <div className="texts">
                    <span>John Doe</span>
                    <p>Hello, How are you?</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="Profile Picture" />
                <div className="texts">
                    <span>John Doe</span>
                    <p>Hello, How are you?</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="Profile Picture" />
                <div className="texts">
                    <span>John Doe</span>
                    <p>Hello, How are you?</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="Profile Picture" />
                <div className="texts">
                    <span>John Doe</span>
                    <p>Hello, How are you?</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="Profile Picture" />
                <div className="texts">
                    <span>John Doe</span>
                    <p>Hello, How are you?</p>
                </div>
            </div>
        </div>
    )
}

export default ChatList;