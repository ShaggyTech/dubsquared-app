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

  // for the demo, we'll use hardcoded data from ./server/api routes for clients and transactions
  // in a real app, you would likely fetch data from a database via ./server/api routes and $fetch method
  const { data: clients } = useFetch<DataSampleClientList>('/api/clients')
  const { data: transactions } =
    useFetch<DataSampleTransactionHistory>('/api/transactions')

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
    transactions,
    // actions
    setUser,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMainStore, import.meta.hot))
}
