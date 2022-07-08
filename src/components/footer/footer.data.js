import { FaFacebook, FaTwitter, FaGithub, FaDribbble } from 'react-icons/fa';

export default [
  {
    header: 'Useful Links',
    items: [
      {
        path: '/',
        label: 'Support Center',
      },
      {
        path: '/',
        label: 'Customer Support',
      },
      {
        path: '/',
        label: 'About Us',
      },
      {
        path: '/',
        label: 'Copyright',
      },
    ],
  },

  {
    header: 'Contact',
    items: [
      {
        path: '/',
        label: 'Facebook',
        name: 'facebook',
        icon: <FaFacebook />,
      },
      {
        path: '/',
        label: 'Twitter',
        name: 'twitter',
        icon: <FaTwitter />,
      },
      {
        path: '/',
        label: 'Github',
        name: 'github',
        icon: <FaGithub />,
      },
      {
        path: '/',
        label: 'Dribbble',
        name: 'dribbble',
        icon: <FaDribbble />,
      },
    ],
  },
];
