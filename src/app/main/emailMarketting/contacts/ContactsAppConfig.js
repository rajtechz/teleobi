import { lazy } from 'react';
import ContactView from './contact/ContactView';
import ContactForm from './contact/ContactForm';
import GroupForm from './group/GroupForm'

const ContactsApp = lazy(() => import('./ContactsApp'));

const ContactsAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/emailMarketting/contactGroups',
      element: <ContactsApp />,
      children: [
        {
          path: ':id',
          element: <ContactView />,
        },
        {
          path: ':id/edit',
          element: <ContactForm />,
        },
        {
          path:":id/editGroup",
          element:<GroupForm/>
        }
      ],
    },
  ],
};

export default ContactsAppConfig;
