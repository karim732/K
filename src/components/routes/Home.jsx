import HomeHeader from "../headers/HomeHeader";
import CreatePost from "../posts/CreatePost";
import HomeFeed from "../feed/HomeFeed";

const Home = () => {
  return (
    <>
      <HomeHeader />
      <CreatePost />
      <HomeFeed />
    </>
  );
};

export default Home;
