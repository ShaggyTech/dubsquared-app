export default defineEventHandler(() => {
  // In a real app, you would likely fetch data from a database here via $fetch() method
  // As is, this api route will simply return example hardcoded client data below
  return [
    {
      id: 19,
      avatar: 'https://avatars.dicebear.com/v2/gridy/Howell-Hand.svg',
      login: 'percy64',
      name: 'Howell Hand',
      company: 'Kiehn-Green',
      city: 'Emelyside',
      progress: 70,
      created: 'Mar 3, 2021',
    },
    {
      id: 11,
      avatar: 'https://avatars.dicebear.com/v2/gridy/Hope-Howe.svg',
      login: 'dare.concepcion',
      name: 'Hope Howe',
      company: 'Nolan Inc',
      city: 'Paristown',
      progress: 68,
      created: 'Dec 1, 2021',
    },
    {
      id: 32,
      avatar: 'https://avatars.dicebear.com/v2/gridy/Nelson-Jerde.svg',
      login: 'geovanni.kessler',
      name: 'Nelson Jerde',
      company: 'Nitzsche LLC',
      city: 'Jailynbury',
      progress: 49,
      created: 'May 18, 2021',
    },
    {
      id: 22,
      avatar: 'https://avatars.dicebear.com/v2/gridy/Kim-Weimann.svg',
      login: 'macejkovic.dashawn',
      name: 'Kim Weimann',
      company: 'Brown-Lueilwitz',
      city: 'New Emie',
      progress: 38,
      created: 'May 4, 2021',
    },
  ]
})
