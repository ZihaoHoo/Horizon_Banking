import HeaderBox from '@/components/HeaderBox'
import RigthSidebar from '@/components/RigthSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'

const Home = () => {
  const loggedIn = {firstName:'Shephard', lastName :'Sea', email:'shephardSea@gmail.com'}
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
         <HeaderBox 
          type="greeting"
          title='Welcome'
          user={loggedIn?.firstName || 'Guest'}
          subtext='Access and manage your account and transcations efficiently.'
         />
         <TotalBalanceBox
          accounts ={[]}
          totalBanks={1}
          totalCurrentBalance={1250.35}
         />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RigthSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance:123.50},{currentBalance:500}]}/>
    </section>
  )
}

export default Home