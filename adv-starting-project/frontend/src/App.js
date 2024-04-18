// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import React, { Fragment } from "react";
import RootPage from "./components/RootPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./components/pages/Homepage";
import EventsPage from "./components/pages/EventsPage";
import NewEventPage from "./components/pages/NewEventPage";
import EventDetailPage from "./components/pages/EventDetailPage";
import EditEventPage from "./components/pages/EditEventPage";
import EventsNavigation from "./components/EventsNavigation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      { path: "", element: <Homepage /> },

      {
        path: "/events",
        element: (
          <>
            <EventsNavigation />
            <EventsPage />
          </>
        ),
      },
      { path: "/events/:eventID", element: <EventDetailPage /> },
      { path: "/events/new", element: <NewEventPage /> },
      { path: "/events/eventID/edit", element: <EditEventPage /> },
    ],
  },
]);

function App() {
  return (
    <Fragment>
      <RouterProvider router={router} />
    </Fragment>
  );
}

export default App;
