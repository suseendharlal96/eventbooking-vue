import Events from "./components/Events";
import Bookings from "./components/Bookings";
import Auth from "./components/Auth";

export const routes = [
  { path: "/", redirect: "/events", component: Events },
  { path: "/events", component: Events },
  { path: "/bookings", component: Bookings },
  { path: "/auth", component: Auth },
  { path: "*", redirect: "/events", component: Events },
];
