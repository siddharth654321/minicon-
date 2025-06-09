import dynamic from 'next/dynamic'

const AccountPage = dynamic(() => import('../components/account'), { ssr: false })

const Account = () => {
  return (
    <div style={{backgroundColor:'#fff', height:'100vh'}}>
        <AccountPage />
    </div>
  )
}

export default Account