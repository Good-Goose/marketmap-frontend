import logoTitle from '@assets/icons/logo-title.svg'
import { Button } from './ui/button'

export const Footer = () => {
  return (
    <footer>
      <div className="flex items-center w-full ">
        <div className="inline-flex w-full xl:w-1/2  justify-center xl:justify-start items-center">
          <img src={logoTitle} alt="" />
        </div>
        <div className=" w-1/2  hidden lg:inline-flex justify-end items-center">
          <Button variant="link">Главная</Button>
          <Button variant="link">Услуги</Button>
          <Button variant="link">Проекты</Button>
          <Button variant="link">О нас</Button>
          <Button variant="link">Вопрос-Ответ</Button>
        </div>
      </div>
      <div className="flex items-center w-full xl:border-t text-center xl:justify-between flex-col xl:flex-row text-primary-foreground">
        <p>Политика обработки персональных данных</p>
        <p>2023 © Market Map «Marketplace Agency»</p>
      </div>
    </footer>
  )
}
