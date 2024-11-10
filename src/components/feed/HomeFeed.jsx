import { useContext, useEffect } from 'react'
import { ScreenContext } from '../pages/RootLayout'
import Post from '../posts/Post'
import classes from './HomeFeed.module.css'

const HomeFeed = () => {
    const screen = useContext(ScreenContext)
    return<>
    {!['small', 'medium'].includes(screen) && <a href="#" className={classes["show__posts"]}> <span>Show x posts</span> </a> }
    
    <Post />
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>

    </>
}

export default HomeFeed