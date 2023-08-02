import { Button } from './ui/button'

export const Landing = () => {
  return (
    <div className="w-full h-screen flex items-start uppercase flex-col justify-center">
      <div className="w-2/3  mb-9">
        <h1 className=" text-3xl lg:text-5xl mb-3 font-semibold">
          разработка и реализация эффективных стратегий,
        </h1>
        <h2 className="text-2xl lg:text-4xl font-semibold">
          позволяющих максимально использовать потенциал e-commerce для вашего
          бизнеса
        </h2>
      </div>
      <Button className="w-full lg:w-auto">Оставить заявку</Button>
    </div>
  )
}
