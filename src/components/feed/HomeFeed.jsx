import Post from '../posts/Post'
import classes from './HomeFeed.module.css'

const HomeFeed = () => {

    return<>
    <a href="#" className={classes["show__posts"]}> <span>Show x posts</span> </a>
    <Post />
    {/* <Post/> */}
    </>
}

export default HomeFeed