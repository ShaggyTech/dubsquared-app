export default defineEventHandler(() => {
  // In a real app, you would likely fetch data from a database here via $fetch() method
  // As is, this api route will simply return example hardcoded transaction data below
  return [
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
  ]
})
