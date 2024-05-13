import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../src//pages/HomePage";
import EventsPage, { loader as eventsLoader } from "../src/pages/EventsPage";
import EventDetailPage, {
  loader as eventDetailLoader,
} from "../src/pages/EventDetailPage";
import NewEventPage from "../src/pages/NewEventPage";
import EditEventPage from "../src/pages/EditEventPage";
import RootLayout from "../src/pages/Root";
import EventsRoot from "./pages/EventsRoot";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { path: "", element: <HomePage /> },
      {
        path: "events",
        element: <EventsRoot />,
        children: [
          { index: true, element: <EventsPage />, loader: eventsLoader },

          {
            path: ":eventId",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,D
              },
              { path: "edit", element: <EditEventPage /> },
            ],
          },
          { path: "new", element: <NewEventPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
