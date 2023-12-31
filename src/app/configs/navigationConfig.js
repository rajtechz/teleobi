import i18next from 'i18next';

import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
  {
    id: 'dashboards',
    title: 'Dashboards',
    type: 'group',
    icon: 'heroicons-outline:home',
    translate: 'DASHBOARDS',
    children: [
      
      
      {
        id: 'dashboards.analytics',
        title: 'Analytics',
        type: 'item',
        icon: 'heroicons-outline:chart-pie',
        url: '/dashboards/analytics',
      },

    ],
  },
  {
    id: 'Facebook-Instagram',
    title: 'Facebook-Instagram',
    type: 'group',
    icon: 'heroicons-outline:facebook',
    translate: 'Facebook-Instagram',
    children: [
      
      
      {
        id: 'Facebook-Instagram.OTN-Broadcast',
        title: 'OTN-Broadcast',
        type: 'item',
        icon: 'heroicons-outline:presentation-chart-bar',
        url: '/facebook/instagram/otn/Broadcast',
      },
      {
        id: 'Facebook-Instagram.Multimedia Post',
        title: 'Multimedia Post',
        type: 'item',
        icon: 'heroicons-outline:video-camera',
        url: '/facebook/instagram/media',
      },
      {
        id: 'Facebook-Instagram.CTA Post',
        title: 'CTA Post',
        type: 'item',
        icon: 'heroicons-outline:pencil-alt',
        url: '/facebook/instagram/ctaPost',
      },
      {
        id: 'Facebook-Instagram.Carousel/Video Post',
        title: 'Carousel/Video Post',
        type: 'item',
        icon: 'heroicons-outline:plus',
        url: '/facebook/instagram/videoPost',
      },
      {
        id: 'Facebook-Instagram.Create Chatbot',
        title: 'Create Chatbot',
        type: 'item',
        icon: 'heroicons-outline:chat-alt-2',
        url: '/facebook/instagram/createChatBot',
      },

    ],
  },
  {
    id: 'apps.chat',
    title: 'Chat',
    type: 'group',
    icon: 'heroicons-outline:chat-alt',
    translate: 'CHAT',
    children: [
      {
        title: 'Live Chat',
        type: 'item',
        icon: 'heroicons-outline:chat-alt',
        url: '/apps/chat',
      }
    ]
  },
  {
    id: 'WhatsappBot',
    title: 'WhatsappBot',
    type: 'group',
    translate: 'WhatsAppBot',
    children: [
      {
        id: 'WhatsappBot.BoatList',
        title: 'Boat List',
        type: 'item',
        icon:'heroicons-outline:view-list',
        url: '/whasappBot/list'
      },
    ]

  },
  {
    id: 'Email Marketing',
    title: 'Email Marketing',
    type: 'group',
    translate: 'Email-Marketing',
    children: [
      {
        id: ' EmailMarketing.ContactGroups',
        title: 'Contact Groups',
        type: 'item',
        icon:'heroicons-outline:user-group',
        url: '/emailMarketting/contactGroups'
      },
      {
        id: '.EmailMarketing.AddContacts',
        title: 'Add Contacts',
        icon: 'heroicons-outline:plus',
        type: 'item',
        url: '/emailMarketting/addContacts'

      },
      {
        id: 'EmailMarketing.ManageTemplates',
        title: 'Manage Templates',
        type: 'item',
        icon:'heroicons-outline:template',
        url: '/emailMarketting/manageTemplates'

      },
      {
        id: 'EmailMarketing.Create Campaign',
        title: 'Create Campaign',
        type: 'item',
        icon:'heroicons-outline:document-add',
        url: '/emailMarketting/createCampaign'

      },
      {
        id: 'EmailMarketing.Campaign Reports',
        title: 'Campaign Reports',
        type: 'item',
        icon:'heroicons-outline:document-report',
        url: '/emailMarketting/campaignReports'

      },
      {
        id: 'EmailMarketing.Connect SMTP',
        title: 'Connect SMTP',
        type: 'item',
        url: '/emailMarketting/connectsmtp'

      },
    ]
  },
  {
    id: 'SMS Marketing',
    title: 'SMS Marketing',
    type: 'group',
    translate: 'Sms-Marketing',
    children: [
      {
        id: 'SMSMarketing.Contact Groups',
        title: 'Contact Groups',
        type: 'item',
        icon:'heroicons-outline:user-group',
        url: '/smsMarketing/contactGroups'

      },
      {
        id: 'Add Contacts',
        title: 'Add Contacts',
        icon: 'heroicons-outline:plus',
        type: 'item',
        url: '/smsMarketing/addContacts'

      },
      {
        id: 'Manage Templates',
        title: 'Manage Templates',
        type: 'item',
        icon:'heroicons-outline:template',
        url: '/smsMarketing/manageTemplates'

      },
      {
        id: 'Create Campaign',
        title: 'Create Campaign',
        type: 'item',
        icon:'heroicons-outline:document-add',
        url: '/emailMarketting/createCampaign'

      },
      {
        id: 'Campaign Reports',
        title: 'Campaign Reports',
        type: 'item',
        icon:'heroicons-outline:document-report',
        url: '/emailMarketting/campaignReports'

      },
      {
        id: 'Connect API',
        title: 'Connect API',
        type: 'item',
        icon:'heroicons-outline:server',
        url: '/emailMarketting/connectApi'

      },
    ]
  },
  {
    id: 'Sequence Campaigns',
    title: 'Sequence Campaigns',
    type: 'group',
    icon: 'heroicons-outline:cube',
    translate: 'Sequence-Campaigns',
    children: [
      {
        id: 'Create Campaign',
        title: 'Create Campaign',
        icon:'heroicons-outline:document-add',
        type: 'item',
        url: '/sequenceCampaigns/createCampaign'

      },
      {
        id: 'View Campaign',
        title: 'View Campaign',
        type: 'item',
        icon:'heroicons-outline:users',
        url: '/sequenceCampaigns/viewCampaign'

      },

    ]
  },
  {
    id: 'Comment Automation',
    title: 'Comment Automation',
    type: 'group',
    icon: 'heroicons-outline:cube',
    translate: 'Comment-Automation',

    children: [
      {
        id: 'Create New Template',
        title: 'Create New Template',
        type: 'item',
        icon:'heroicons-outline:plus',
        url: '/commentAutomation/createNewtemplate'

      },
      {
        id: 'Create Reply Template',
        title: 'Create Reply Template',
        type: 'item',
        icon:'heroicons-outline:chat-alt',
        url: '/commentAutomation/createReplyTemplate'

      },
      {
        id: 'Manage Campaigns',
        title: 'Manage Campaigns',
        type: 'item',
        icon:'heroicons-outline:template',
        url: '/commentAutomation/manageCampaigns'

      },
      {
        id: 'Auto Comment Reports',
        title: 'Auto Comment Reports',
        type: 'item',
        icon:'heroicons-outline:chat-alt',
        url: '/commentAutomation/autoCommentReports'

      },
      {
        id: 'Auto Reply  Reports',
        title: 'Auto Reply Report',
        type: 'item',
        icon:'heroicons-outline:chat-alt-2',
        url: '/commentAutomation/autoReplyReports'

      },
    ]
  },
  {
    id: 'Google My Business',
    title: 'Google My Business',
    type: 'group',
    icon: 'heroicons-outline:cube',
    translate: 'Google-My-Business',
    children: [
      {
        id: 'Account Import',
        title: 'Account Import',
        type: 'item',
        icon:'heroicons-outline:user',
        url: '/googleMyBusiness/accountImport'

      },
      {
        id: 'Location Manager',
        title: 'Location Manager',
        type: 'item',
        icon:'heroicons-outline:user-circle',
        url: '/googleMyBusiness/locationManager'

      },
      {
        id: 'Campaigns',
        title: 'Campaigns',
        type: 'item',
        icon:'heroicons-outline:check',
        url: '/googleMyBusiness/campaigns'

      },
      {
        id: 'Review Replies',
        title: 'Review Replies',
        type: 'item',
        icon:'heroicons-outline:star',
        url: '/googleMyBusiness/reviewReplies'

      },
    ]

  },
  {
    id: 'Ecommerce',
    title: 'Ecommerce',
    type: 'group',
    translate: 'ECOMMERCE',
    children: [
      {
        id: 'e-commerce-products',
        title: 'Products',
        type: 'item',
        icon: 'heroicons-outline:shopping-cart',
        url: 'apps/e-commerce/products',
        end: true,
      },
    ]

  },


  {
    id: 'pages',
    title: 'Pages',
    type: 'group',
    icon: 'heroicons-outline:document',
   
          
            children: [

              {
                id: 'pages.authentication.sign-in.modern',
                title: 'Sign In',
                type: 'item',
                icon: 'heroicons-outline:key',
                url: '/pages/authentication/sign-in/modern',
              },
              {
                id: 'pages.authentication.sign-up.modern',
                title: 'Sign up',
                type: 'item',
                icon: 'heroicons-outline:user-add',
                url: '/pages/authentication/sign-up/modern',
              },
             
              {
                id: 'pages.authentication.forgot-password.modern',
                title: 'Forgot password',
                type: 'item',
                icon: 'heroicons-outline:question-mark-circle',
                url: '/pages/authentication/forgot-password/modern',
              },
              {
                id: 'pages.authentication.reset-password.modern',
                title: 'Reset password',
                type: 'item',
                icon: 'heroicons-outline:key',
                url: '/pages/authentication/reset-password/modern',
              },
              {
                id: 'pages.authentication.confirmation-required.modern',
                title: 'Confirmation required',
                type: 'item',
                icon: 'heroicons-outline:exclamation',
                url: '/pages/authentication/confirmation-required/modern',
              },
              {
                id: 'pages.authentication.sign-out.modern',
                title: 'Sign out',
                type: 'item',
                icon: 'heroicons-outline:logout',
                url: '/pages/authentication/sign-out/modern',
              },

            ],
          
      },

      {
        id: 'Subscription',
        title: 'Subscription',
        type: 'group',
        translate: 'Subscription',
        children: [
          {
            id: 'PackageManager',
            title: 'Package-manager',
            type: 'item',
            icon: 'heroicons-outline:server',
            url: 'subscription/packageManager',
            end: true,
          },
          {
            id: 'UserManager',
            title: 'User-manager',
            type: 'item',
            icon: 'heroicons-outline:user',
            url: 'subscription/userManager',
            end: true,
          },
        ]
    
      },
    
    ]
    

export default navigationConfig;
