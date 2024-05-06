import UserList from "./components/userList/UserList.jsx";
import UserDetails from "./components/userDetails/UserDetails.jsx";
import Chat from "./components/chat/Chat.jsx";
import Login from "./components/login/Login.jsx";
import Notification from "./components/notification/Notification.jsx";

const App = () => {

  const user = true;

  return (
    <div className='container'>
      { user ? (
          <>
          <UserList />
          <Chat />
          <UserDetails />
          </>
      ) : ( 
        <Login />
      )}
      <Notification />
    </div>
  )
}

export default App