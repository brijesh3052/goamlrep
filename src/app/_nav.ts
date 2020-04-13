import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    // badge: {
    //   variant: 'info',
    //   text: 'NEW'
    // }
  },
  // {
  //   title: true,
  //   name: 'Theme'
  // },

  {
    name: 'Notification channel',
    url: '/notification-channel',

    icon: 'icon-bell',
    children: [
      {
        name: 'Email',
        url: '/notification-channel/email',
        icon: 'icon-puzzle'
      },
      {
        name: 'SMS',
        url: '/notification-channel/sms',
        icon: 'icon-puzzle'
      },

    ]
  },
  {
    name: 'Message Configuration',
    url: '/message-configuration',
    icon: 'icon-pencil',
    // children: [
    //   {
    //     name: 'Email',
    //     url: '/message-configuration/msg-config-email',
    //     icon: 'icon-puzzle'
    //   },
    //   {
    //     name: 'SMS',
    //     url: '/message-configuration/msg-config-sms',
    //     icon: 'icon-puzzle'
    //   },

    // ]
  },
  {
    name: 'User Management',
    url: '/user-management',
    icon: 'icon-user',
    children: [
      {
        name: 'User',
        url: '/user-management/users',
        icon: 'icon-puzzle'
      },
      {
        name: 'Roles',
        url: '/user-management/user-roles',
        icon: 'icon-puzzle'
      },

    ]
  },
  // {
  //   title: true,
  //   name: 'Components'
  // },
  {
    name: 'Customer Registration',
    url: '/customer-registration',
    icon: 'icon-star',
    children: [
      {
        name: 'Customer',
        url: '/customer-registration/customers',
        icon: 'icon-cursor',
      },
      {
        name: 'Groups',
        url: '/customer-registration/groups',
        icon: 'icon-cursor',
      },
    ]
  },
  {
    name: 'Bulk Notification',
    url: '/bulk-notification',
    icon: 'icon-bell',
    // children: [
    //   {
    //     name: 'Bulk Email',
    //     url: '/group-notification/bulkemail',
    //     icon: 'icon-cursor',
    //   },
    //   {
    //     name: 'Bulk SMS',
    //     url: '/group-notification/bulksms',
    //     icon: 'icon-cursor',
    //   },
    // ]
  },
  {
    name: 'Reports',
    url: '/report',
    icon: 'icon-settings',
    children: [
      {
        name: 'Account Statment Generation',
        url: '/report/account-statement-generation',
        icon: 'icon-star',
      },
    ]
  },
  {
    name: 'Interface Gateway',
    url: '/interface-gateway',
    icon: 'icon-settings',
    children: [
      {
        name: 'Configuration',
        url: '/interface-gateway/configuration',
        icon: 'icon-star',
      },
      // {
      //   name: 'Jobs',
      //   url: '/interface-gateway/job',
      //   icon: 'icon-star',
      // },
      {
        name: 'Message Log',
        url: '/interface-gateway/messagelogs',
        icon: 'icon-star',
      },
    ]
  },

  {
    name: 'Jobs',
    url: '/job',
    icon: 'icon-star',
    // attributes: { text: relative },

  },

  // {
  //   name: 'Account Statment Generation',
  //   url: '/account-statement-generation',
  //   icon: 'icon-star',
  //   // attributes: { text: relative },

  // },

];
