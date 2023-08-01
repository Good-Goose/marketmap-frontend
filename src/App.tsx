import { Footer } from '@components/footer'
import { Navbar } from '@components/navbar'

export const App = () => {
  return (
    <div className="flex justify-center h-screen">
      <div className="flex flex-col justify-between h-full w-[1520px]">
        <Navbar />
        <Footer />
      </div>
    </div>
  )
}
