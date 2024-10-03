import EventItem from "./EventItem";
import Card from "../UI/Card";
import basketball from "./../../assets/basketball.jpg";

const imageStyles = { width: "60px", aspectRatio: "1/1" };
const Timeline = () => {
  const EventItems = [
    {
      title: "NFL • 2 hours ago",
      body: "Dolphins at Eagles",
      image: (
        <div>
          <img
            src={basketball}
            alt="NFL"
            className="rounded-3"
            style={imageStyles}
          />
        </div>
      ),
    },
    {
      title: "Sports • Trending",
      body: "#ShreyasIyer",
      details: "2,644 posts",
    },
    {
      title: "Entertainment • Trending",
      body: "#Kalki2898AD",
      details: "Trending with",
      additionalDetails: ["#HBDRebelstarPrabhas", "#HBDRebelstarSalaar"],
    },
    {
      title: "Sports • Trending",
      body: "#Sachin",
      details: "28.6k posts",
    },
    {
      title: "Sports • Trending",
      body: "#Jadeja",
      details: "49.7k posts",
    },
    {
      title: "Sports • Trending",
      body: "#Sachin",
      details: "28.6k posts",
    },
    {
      title: "Sports • Trending",
      body: "#Jadeja",
      details: "49.7k posts",
    },
    {
      title: "Sports • Trending",
      body: "#Sachin",
      details: "28.6k posts",
    },
    {
      title: "Sports • Trending",
      body: "#Jadeja",
      details: "49.7k posts",
    },
    {
      title: "Sports • Trending",
      body: "#Sachin",
      details: "28.6k posts",
    },
    {
      title: "Sports • Trending",
      body: "#Jadeja",
      details: "49.7k posts",
    },
  ];
  return (
    <Card>
      <div className="fw-bold fs-4" style={{ padding: "10px" }}>
        What's happening
      </div>
      {EventItems.map((item) => (
        <EventItem key={item.key} event={item} />
      ))}
    </Card>
  );
};

export default Timeline;
