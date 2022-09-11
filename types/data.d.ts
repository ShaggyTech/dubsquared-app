export type DataTransactionType =
  | 'deposit'
  | 'payment'
  | 'invoice'
  | 'withdrawal'

export interface DataSampleClient {
  id: number
  avatar: string
  login: string
  name: string
  company: string
  city: string
  progress: number
  created: string
}

export type DataSampleClientList = DataSampleClient[]

export interface DataSampleTransaction {
  amount: number
  name: string
  date: string
  type: DataTransactionType
  business: string
}

export type DataSampleTransactionHistory = DataSampleTransaction[]
