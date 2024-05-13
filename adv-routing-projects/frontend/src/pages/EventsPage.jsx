import { useLoaderData, json } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();

  // if(data.isError){
  //   return<p>{data.message}</p>;    ----ALTERNTAIVE
  // }
  const events = data.events;
  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return {isError: true, message: 'Could not fetch events.'}    ----ALTERNTAIVE
    // throw new Response(JSON.stringify({ message: "Could not fetch event" }), {
    //   status: 500,    ------ALTERNTAIVE
    // });
    return json(
      { message: "Could not fetch event" },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
}
