import paths from "../pages/paths";
import Tasks from "../pages/Tasks/Tasks";
import Settings from "../pages/Settings/Settings";
import Store from "../pages/Store/Store";

const routesConfig = [
  {
    path: paths.index,
    component: Store,
    requiresAuth: true,
  },
  {
    path: paths.tasks,
    component: Tasks,
    requiresAuth: true,
  },
  {
    path: paths.settings,
    component: Settings,
    requiresAuth: true,
  },
];

export default routesConfig;
