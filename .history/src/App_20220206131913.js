import { ChatEngine } from 'react-chat-engine';

import './App.css';

import ChatFeed from './components/ChatFeed.jsx';


const App = () => {
    return (
        <ChatEngine 
            height="100vh"
            projectID="1e4bdd26-b3fa-42c0-9369-1cde4568ea1d"
            userName="raad"
            userSecret="raad"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App;