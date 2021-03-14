import { v4 as uuid } from 'uuid';

const initState = {
  featuredPosts: [
    {
      title: 'Featured post',
      date: 'Nov 12',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random',
      imageText: 'Image Text',
    },
    {
      title: 'Post title',
      date: 'Nov 11',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random',
      imageText: 'Image Text',
    },
  ],
  post: {
    title: 'Flat 10% Off',
    image: 'url(https://source.unsplash.com/random)',
    description:
      'We at Gyanacharya believe that everyone should get education, profit'
      + "doesn't matter when it comes to value."
      + 'We at Gyanacharya believe that everyone should get education, profit'
      + "doesn't matter when it comes to value."
      + 'We at Gyanacharya believe that everyone should get education, profit'
      + "doesn't matter when it comes to value."
      + 'We at Gyanacharya believe that everyone should get education, profit'
      + "doesn't matter when it comes to value."
      + 'We at Gyanacharya believe that everyone should get education, profit'
      + "doesn't matter when it comes to value.",
  },
  navlinkList: [
    { name: 'Home', dropdownList: ['asdf', 'asdlf', 'list'] },
    { name: 'books', dropdownList: ['asdfsdf', 'asdasdflf', 'sadlist'] },
    { name: 'zoom meeting', dropdownList: ['asdfsdf', 'asdlf', 'list'] },
    { name: 'course', dropdownList: ['asdfdf', 'asdlasdff', 'lisasdt'] },
    { name: 'about', dropdownList: ['asdfad', 'asdlfasdf', 'lisasdft'] },
  ],
  footers: [
    {
      title: 'Company',
      description: ['Team', 'History', 'Contact us', 'Locations'],
    },
    {
      title: 'Features',
      description: [
        'Cool stuff',
        'Random feature',
        'Team feature',
        'Developer stuff',
        'Another one',
      ],
    },
    {
      title: 'Resources',
      description: [
        'Resource',
        'Resource name',
        'Another resource',
        'Final resource',
      ],
    },
    {
      title: 'Legal',
      description: ['Privacy policy', 'Terms of use'],
    },
  ],
  studnetData: [
    {
      id: uuid(),
      address: {
        country: 'USA',
        state: 'West Virginia',
        city: 'Parkersburg',
        street: '2849 Fulton Street',
      },
      avatarUrl: '/Users/apple/todo-react-material/src/images/pp.jpeg',
      createdAt: 1555016400000,
      email: 'ekaterina.tankova@devias.io',
      name: 'Ekaterina Tankova',
      phone: '304-428-3097',
    },
    {
      id: uuid(),
      address: {
        country: 'USA',
        state: 'Bristow',
        city: 'Iowa',
        street: '1865  Pleasant Hill Road',
      },
      avatarUrl: '/static/images/avatars/avatar_4.png',
      createdAt: 1555016400000,
      email: 'cao.yu@devias.io',
      name: 'Cao Yu',
      phone: '712-351-5711',
    },
    {
      id: uuid(),
      address: {
        country: 'USA',
        state: 'Georgia',
        city: 'Atlanta',
        street: '4894  Lakeland Park Drive',
      },
      avatarUrl: '/Users/apple/todo-react-material/src/images/pp.jpeg',
      createdAt: 1555016400000,
      email: 'alexa.richardson@devias.io',
      name: 'Alexa Richardson',
      phone: '770-635-2682',
    },
    {
      id: uuid(),
      address: {
        country: 'USA',
        state: 'Ohio',
        city: 'Dover',
        street: '4158  Hedge Street',
      },
      avatarUrl: '/static/images/avatars/avatar_5.png',
      createdAt: 1554930000000,
      email: 'anje.keizer@devias.io',
      name: 'Anje Keizer',
      phone: '908-691-3242',
    },
    {
      id: uuid(),
      address: {
        country: 'USA',
        state: 'Texas',
        city: 'Dallas',
        street: '75247',
      },
      avatarUrl: '/static/images/avatars/avatar_6.png',
      createdAt: 1554757200000,
      email: 'clarke.gillebert@devias.io',
      name: 'Clarke Gillebert',
      phone: '972-333-4106',
    },
    {
      id: uuid(),
      address: {
        country: 'USA',
        state: 'California',
        city: 'Bakerfield',
        street: '317 Angus Road',
      },
      avatarUrl: '/static/images/avatars/avatar_1.png',
      createdAt: 1554670800000,
      email: 'adam.denisov@devias.io',
      name: 'Adam Denisov',
      phone: '858-602-3409',
    },
    {
      id: uuid(),
      address: {
        country: 'USA',
        state: 'California',
        city: 'Redondo Beach',
        street: '2188  Armbrester Drive',
      },
      avatarUrl: '/static/images/avatars/avatar_7.png',
      createdAt: 1554325200000,
      email: 'ava.gregoraci@devias.io',
      name: 'Ava Gregoraci',
      phone: '415-907-2647',
    },
    {
      id: uuid(),
      address: {
        country: 'USA',
        state: 'Nevada',
        city: 'Las Vegas',
        street: '1798  Hickory Ridge Drive',
      },
      avatarUrl: '/static/images/avatars/avatar_8.png',
      createdAt: 1523048400000,
      email: 'emilee.simchenko@devias.io',
      name: 'Emilee Simchenko',
      phone: '702-661-1654',
    },
    {
      id: uuid(),
      address: {
        country: 'USA',
        state: 'Michigan',
        city: 'Detroit',
        street: '3934  Wildrose Lane',
      },
      avatarUrl: '/static/images/avatars/avatar_9.png',
      createdAt: 1554702800000,
      email: 'kwak.seong.min@devias.io',
      name: 'Kwak Seong-Min',
      phone: '313-812-8947',
    },
    {
      id: uuid(),
      address: {
        country: 'USA',
        state: 'Utah',
        city: 'Salt Lake City',
        street: '368 Lamberts Branch Road',
      },
      avatarUrl: '/static/images/avatars/avatar_10.png',
      createdAt: 1522702800000,
      email: 'merrile.burgett@devias.io',
      name: 'Merrile Burgett',
      phone: '801-301-7894',
    },
  ],
};

const rootReducer = (state = initState) => state;

export default rootReducer;
