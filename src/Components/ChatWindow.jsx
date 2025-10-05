import OptionMenu from "./OptionMenu"
import ChatWave from "./ChatWave"
import ChatWindowSection from "./ChatWindowSection"
import MobileMenu from "./MobileMenu"
const ChatWindow = () => {
  return (
    <div className="p-0 m-0">
      <div className="flex"> <OptionMenu></OptionMenu>
    
      <ChatWave/>
      <ChatWindowSection />
        </div>
      <MobileMenu/>
    </div>
  )
}

export default ChatWindow
