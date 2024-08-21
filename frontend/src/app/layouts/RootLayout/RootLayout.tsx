import { Outlet } from 'react-router-dom'
import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'

export const RootLayout = () => {
  return (
    <div style={{ padding: '0 20px' }}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
