import UserList from "./components/userList/UserList.jsx";
import UserDetails from "./components/userDetails/UserDetails.jsx";
import Chat from "./components/chat/Chat.jsx";


const App = () => {
  return (
    <div className='container'>
      <UserList />
      <Chat />
      <UserDetails />
    </div>
  )
}

export default App