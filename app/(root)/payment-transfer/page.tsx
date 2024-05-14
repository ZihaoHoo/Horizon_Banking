import HeaderBox from '@/components/HeaderBox'
import PaymentTransferForm from '@/components/PaymentTransferForm'
import { getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const Transfer = async () => {

  const loggedIn = await getLoggedInUser();
  const { $id } = loggedIn;
  const accounts = await getAccounts({userId: $id});
  const accountsData = accounts?.data;
  
  if(!accounts) return;
  return (
    <section className='payment-transfer'>
      <HeaderBox title='Payment Transfer' 
      subtext="Please provide any specific details or notes related to the payment transfer"/>

      <section className='size-full pt-5'>
        <PaymentTransferForm accounts={accountsData}/>
      </section>
    </section>
  )
}

export default Transfer