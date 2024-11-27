import postImg1 from '../../assets/postImg1.jfif'
import postImg2 from '../../assets/postImg2.jfif'
import postImg3 from '../../assets/postImg3.jfif'
import classes from './PostMedia.module.css'

const PostMedia = () => {
    // const images = [postImg1,postImg2,postImg3]
    // const images = [postImg1,postImg2]
    const images = [postImg1]
    const imageStyles = images.length === 1 ? {gridTemplateColumns: '1fr', width: '70%'}  :{gridTemplateColumns: '1fr 1fr'}
    return <div className={classes['media--container']} style={imageStyles}>
        {images.map((img) => <div className={classes.image} style={{
            backgroundImage: `url(${img})`,
        }}></div>)}

    </div>

}

export default PostMedia