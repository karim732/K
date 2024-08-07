import EditableDiv from "../input/EditableDiv";
import profile from "../../assets/profile.png";
import classes from "./CreatePost.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAsia, faImage, faIcons, faList, faSmile, faClock, faLocationDot } from "@fortawesome/free-solid-svg-icons";
const CreatePost = () => {

    return <div className="d-flex" style={{ padding: "10px", columnGap: "8px",borderBottom: "1px solid rgb(194, 192, 192)" }}>
            <img src={profile} alt="profile pic" width="40px" height="40px" />
            <div className="flex-grow-1">
                <div className="d-flex flex-column align-items-start">
                    <EditableDiv />
                    {/* <div>Who can reply</div> */}
                    <button className={`btn ${classes['who--can--replay']}`}><FontAwesomeIcon icon={faEarthAsia}/> <span className="ms-1">Everyone can reply</span> </button>
                </div>
                <hr style={{margin:"0.5rem 0.5rem 0.5rem 0"}}/>
                <div className="d-flex justify-content-between">
                    <div className={classes.attachment}>
                       <button className="btn" title="Media"><FontAwesomeIcon icon={faImage}/> </button>
                       <button className="btn" title="GIF"><FontAwesomeIcon icon={faIcons}/> </button>
                       <button className="btn" title="Poll"><FontAwesomeIcon icon={faList}/> </button>
                       <button className="btn" title="Emoji"><FontAwesomeIcon icon={faSmile}/> </button>
                       <button className="btn" title="Schedule"><FontAwesomeIcon icon={faClock}/> </button>
                       <button className="btn" title="Location" disabled><FontAwesomeIcon icon={faLocationDot}/> </button>
                       
                    </div>
                    <button className="btn btn-primary rounded-pill" style={{ width: "max-content", fontWeight: "bolder" }}>
                        Post
                    </button>
                </div>
            </div>
        </div>
}

export default CreatePost;