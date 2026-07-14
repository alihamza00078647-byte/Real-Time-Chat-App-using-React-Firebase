import assets from "../../assets/assets";
import "./leftSidebar.css";


function LeftSidebar() {
  return (
    <div className="ls">
      <div className="ls-top">
        <div className="ls-nav">
          <img className="logo" src={assets.logo} />
          <div className="menu">
            <img src={assets.menu_icon}  />
          </div>
        </div>

        <div className="ls-search">
          <img src={assets.search_icon} />
          <input
            type="text"
            placeholder="Search here."
            className=""
          />
        </div>
      </div>
      <div className="ls-list">
        {Array(12).fill("").map((item, index) => (
            <div key={index} className="friends">
            <img src={assets.profile_img} />
            <div>
                <p>Richard Rollis</p>
                <span>Hello, how are you?</span>
            </div>
        </div>
        ))}
      </div>
    </div>
  );
}


export default LeftSidebar;