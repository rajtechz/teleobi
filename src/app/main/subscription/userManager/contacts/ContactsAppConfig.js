import { lazy } from "react";

const ContactsApp = lazy(() => import("./ContactsApp"));
const AddUser = lazy(() => import("./AddUser"));
const ContactsAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: "/subscription/userManager",
      element: <ContactsApp />,
    },
    {
      path: "/subscription/userManager/addUser",
      element: <AddUser />,
    },
  ],
};

export default ContactsAppConfig;
