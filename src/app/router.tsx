import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/home";
import { RoutePage } from "../pages/route";
import { SearchPage } from "../pages/search";
import { SettingPage } from "../pages/setting";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "/route/:id",
    element: <RoutePage />,
  },
  {
    path: "/setting",
    element: <SettingPage />,
  },
]);
