import profile from '../../assets/profile.png'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import PostMedia from './PostMedia';

const Post = () => {
    const isAd = true
    const fullText = "Americans don’t vote in foreign elections \n\nNoncitizens shouldn’t vote in ours \n\nWe need the SAVE ACT — attached to the September spending bill — to stop that from happening \n\nShare if you agree"

    return <div className="d-flex" style={{ padding: "10px", columnGap: "8px", borderBottom: "1px solid rgb(194, 192, 192)" }}>
        <img src={profile} alt="profile pic" width="35px" height="35px" />
        <div className="flex-grow-1">
            <div className='d-flex justify-content-between'>
                <div className='d-flex justify-content-start align-items-center' style={{ columnGap: "3px" }}>
                    <span style={{ color: '#0f1419', fontWeight: "500" }}>Historic Vids</span>
                    <FontAwesomeIcon icon={faCircleCheck} color='#1D9BF0' />
                    <span style={{ color: '#536471' }}>@historyinmemes · 6h</span>
                </div>
                <div className='d-flex justify-content-start align-items-center' style={{ columnGap: "6px" }}>
                    {isAd && <span>Ad</span>}
                    <FontAwesomeIcon icon={faEllipsis} />
                </div>
            </div>
            <div style={{whiteSpace:"pre-line"}}>
                {fullText}
            </div>
            <PostMedia />

        </div>
    </div>
}

export default Post