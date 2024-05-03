import ChatList from './chatList/ChatList';
import UserInfo from './userInfo/UserInfo';
import './userList.css'

const UserList = () => {
    return (
        <div className='userList'>
            <UserInfo />
            <ChatList />
        </div>
    )
}

export default UserList;