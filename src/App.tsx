import { Footer } from '@components/footer'
import { Landing } from '@components/landing'
import { Navbar } from '@components/navbar'

export const App = () => {
  return (
    <div className="flex justify-center h-screen">
      <div className="flex flex-col justify-between h-full w-[1520px] py-2 px-6">
        <Navbar />
        <Landing />
        <Footer />
      </div>
    </div>
  )
}
