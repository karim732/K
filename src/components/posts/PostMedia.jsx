import postImg1 from '../../assets/postImg1.jfif'
import postImg2 from '../../assets/postImg2.jfif'
import postImg3 from '../../assets/postImg3.jfif'


const PostMedia = () => {
    return <div style={{width: "100%", height:"100%", position: "relative", display: "flex"}}>
        <div style={{
            width: "100%",
            height: "100%", backgroundImage: `url(${postImg3})`, backgroundRepeat: "no-repeat", backgroundSize: "cover",
            backgroundPosition:"center",
            position: "absolute", 
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
        }}>

        </div>
    </div>
}

export default PostMedia