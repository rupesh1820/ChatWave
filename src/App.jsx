import { Routes, Route} from 'react-router-dom'
import ChatWindow from './Components/ChatWindow'

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<ChatWindow/>} />
      </Routes>
    </>
  )
}

export default App
