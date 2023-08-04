import { Footer } from '@components/footer'
import { Landing } from '@components/landing'
import { Navbar } from '@components/navbar'

export const App = () => {
  return (
    <>
      <div className="flex justify-center bg-background">
        <div className="flex flex-col justify-between h-full w-[1520px] py-3 px-6">
          <Navbar />
        </div>
      </div>
      <div className="flex justify-center bg-[#dee9fe]">
        <div className="flex flex-col justify-between h-full w-full">
          <Landing />
        </div>
      </div>
      <div className="flex justify-center bg-background">
        <div className="flex flex-col justify-between h-full w-[1520px] py-3 px-6">
          <Footer />
        </div>
      </div>
    </>
  )
}
