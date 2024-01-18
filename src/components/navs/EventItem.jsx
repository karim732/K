import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import classes from "./EventItem.module.css";
const EventItem = (props) => {
  let action = props.event.image ? (
    props.event.image
  ) : (
    <FontAwesomeIcon icon={faEllipsis} />
  );
  let addDetails = "";
  if (props.event.additionalDetails) {
    addDetails = props.event.additionalDetails.map((item, i) => (
      <>
        <span>{item}</span> {}
      </>
    ));
  }
  return (
    <div
      className={
        classes["event-item"] +
        " d-flex justify-content-between align-items-center"
      }
      style={{ padding: "10px" }}
    >
      <div className="d-flex flex-column">
        <div>{props.event.title}</div>
        <div>{props.event.body}</div>
        <div className="mt-1">
          {props.event.details}&nbsp;
          {addDetails}
        </div>
      </div>
      {action}
    </div>
  );
};

export default EventItem;
