import paths from "../pages/paths";
import Chat from "../pages/Chat/Chat";
import Settings from "../pages/Settings/Settings";
import Store from "../pages/Store/Store";
import Contribute from "../pages/Contribute/Contribute";
import Study from "../pages/Study/Study";
import Projects from "../pages/Projects/Projects";
import Quiz from "../pages/Quiz/Quiz";

const routesConfig = [
  {
    path: paths.index,
    component: Store,
    requiresAuth: true,
  },
  {
    path: paths.chat,
    component: Chat,
    requiresAuth: true,
  },
  {
    path: paths.contribute,
    component: Contribute,
    requiresAuth: true,
  },
  {
    path: paths.study,
    component: Quiz,
    requiresAuth: true,
  },
  {
    path: paths.settings,
    component: Settings,
    requiresAuth: true,
  },
  {
    path: paths.projects,
    component: Projects,
    requiresAuth: true,
  },
];

export default routesConfig;
