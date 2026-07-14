import assets from "../../assets/assets";
import "./chatbox.css";



function Chatbox() {
    return (
        <div className="chatbox">
            <div className="chat-user">
                <img src={assets.profile_img} alt="" />
                <p>Name here <img className="dot" src={assets.green_dot} alt="" /></p>
                <img src={assets.help_icon} className="help" alt="" />
            </div>


            <div className="chat-msg">
                {/* Sender Message */}
                <div className="s-msg">
                    <p className="msg">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                    <div>
                        <img src={assets.profile_img} alt="" />
                        <p>2:30 PM</p>
                    </div>
                </div>

                <div className="s-msg">
                    <img className="msg-image" src={assets.pic1} alt="" />
                    <div>
                        <img src={assets.profile_img} alt="" />
                        <p>2:30 PM</p>
                    </div>
                </div>

            
                {/* Receiver Message */}
                <div className="r-msg">
                    <p className="msg">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                    <div>
                        <img src={assets.profile_img} alt="" />
                        <p>2:30 PM</p>
                    </div>
                </div>
            </div>

            <div className="chat-input">
                <input type="text" placeholder="Send a Message" id="" />
                <input type="file" id="image" accept="image/png, image/jpg, image/jpeg" hidden />
                <label htmlFor="image">
                    <img src={assets.gallery_icon}  />
                </label>
                <img src={assets.send_button}  />
            </div>
        </div> 
    )
}


export default Chatbox;