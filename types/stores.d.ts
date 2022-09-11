import type { DataSampleClients } from '~/types'

export interface StoreMainState {
  userName: string
  userEmail: string
  userAvatar: string
  isFieldFocusRegistered: boolean
  clients: DataSampleClients
}
