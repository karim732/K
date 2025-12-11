import classes from "./HomeHeader.module.css";

const HomeHeader = () => {

    return <header className={classes.header}>
        <div style={{ height: "50px" }}>
            <a href="#">
                <div>
                    <span>For You</span>
                    <div className={classes.highlighter}></div>
                </div>
            </a>
            <a href="#">
                <div>
                    <span>Following</span>
                    <div className={classes.highlighter}></div>
                </div>
            </a>
        </div>
    </header>
}

export default HomeHeader