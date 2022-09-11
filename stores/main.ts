import type {
  DataSampleClientList,
  DataSampleTransactionHistory,
} from '~/types'

export const useMainStore = defineStore('main', () => {
  // State
  const userName = ref<string>()
  const userEmail = ref<string>()
  const userAvatar = ref<string>()
  const isFieldFocusRegistered = ref<boolean>(false)

  const clients = ref<DataSampleClientList>([
    {
      id: 1,
      avatar: 'https://avatars.dicebear.com/v2/gridy/Howell-Hand.svg',
      login: 'percy64',
      name: 'Howell Hand',
      company: 'Kiehn-Green',
      city: 'Emelyside',
      progress: 70,
      created: 'Mar 3, 2021',
    },
    {
      id: 2,
      avatar: 'https://avatars.dicebear.com/v2/gridy/Hope-Howe.svg',
      login: 'dare.concepcion',
      name: 'Hope Howe',
      company: 'Nolan Inc',
      city: 'Paristown',
      progress: 68,
      created: 'Dec 1, 2021',
    },
    {
      id: 3,
      avatar: 'https://avatars.dicebear.com/v2/gridy/Nelson-Jerde.svg',
      login: 'geovanni.kessler',
      name: 'Nelson Jerde',
      company: 'Nitzsche LLC',
      city: 'Jailynbury',
      progress: 49,
      created: 'May 18, 2021',
    },
    {
      id: 4,
      avatar: 'https://avatars.dicebear.com/v2/gridy/Kim-Weimann.svg',
      login: 'macejkovic.dashawn',
      name: 'Kim Weimann',
      company: 'Brown-Lueilwitz',
      city: 'New Emie',
      progress: 38,
      created: 'May 4, 2021',
    },
  ])

  const transactionHistory = ref<DataSampleTransactionHistory>([
    {
      amount: 375.53,
      name: 'Home Loan Account',
      date: '3 days ago',
      type: 'deposit',
      business: 'Turcotte',
    },
    {
      amount: 470.26,
      name: 'Savings Account',
      date: '3 days ago',
      type: 'payment',
      business: 'Murazik - Graham',
    },
    {
      amount: 971.34,
      name: 'Checking Account',
      date: '5 days ago',
      type: 'invoice',
      business: 'Fahey - Keebler',
    },
    {
      amount: 374.63,
      name: 'Auto Loan Account',
      date: '7 days ago',
      type: 'withdrawal',
      business: 'Collier - Hintz',
    },
  ])

  // Actions
  const setUser = ({
    name,
    email,
    avatar,
  }: {
    name?: string
    email?: string
    avatar?: string
  }) => {
    if (name) {
      userName.value = name
    }
    if (email) {
      userEmail.value = email
    }
    if (avatar) {
      userAvatar.value = avatar
    }
  }

  // const fetch = (sampleDataKey: string) => {
  //   try {
  //     const { data, error } = useFetch(`data-sources/${sampleDataKey}.json`);
  //     if (error) throw error;
  //     if (data && data.data) {
  //       this[sampleDataKey] = data.data;
  //     }
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // };

  return {
    // state
    userName,
    userEmail,
    userAvatar,
    isFieldFocusRegistered,
    clients,
    transactionHistory,
    // actions
    setUser,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMainStore, import.meta.hot))
}
