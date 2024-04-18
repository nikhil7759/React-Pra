import React from "react";
import { useParams } from "react-router-dom";

const EventDetailPage = () => {
  const forNavigateInsideEvent = useParams();
  return (
    <>
      <h1>EventDetailPage</h1>
      <p>Event ID:{forNavigateInsideEvent.eventID}</p>
      {/*  HERE .eventID is the name which i used in app js for route, also useparam hooks use to navigate inside a child page */}
    </>
  );
};

export default EventDetailPage;
