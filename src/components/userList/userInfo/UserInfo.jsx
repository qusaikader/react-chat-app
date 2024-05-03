import './userInfo.css'

const UserInfo = () => {
    return (
        <div className='userInfo'>
            <div className="user">
                <img src="./avatar.png" alt="Avatar" />
                <h2>John Doe</h2>
            </div>
            <div className="icons">
                <img src="./more.png" alt="Options Icon" />
                <img src="./video.png" alt="Video Icon" />
                <img src="./edit.png" alt="Edit Icon" />
            </div>
        </div>
    )
}

export default UserInfo;