import { ChatEngine } from 'react-chat-engine';

import './App.css';

import LoginForm from './components/LoginForm.jsx'
import ChatFeed from './components/ChatFeed.jsx';


const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine 
            height="100vh"
            projectID="1e4bdd26-b3fa-42c0-9369-1cde4568ea1d"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            userSecret="raad"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App;