import cart from '@assets/icons/cart.svg'
import checklist from '@assets/icons/checklist.svg'
import connection from '@assets/icons/connection.svg'
import group from '@assets/icons/group.svg'
import list from '@assets/icons/list.svg'
import megaphone from '@assets/icons/megaphone.svg'
import mind from '@assets/icons/mind.svg'
import research from '@assets/icons/research.svg'
import search from '@assets/icons/search.svg'
import blank from '@assets/images/blank.png'
import blankReversed from '@assets/images/blank-reversed.png'
import notebook from '@assets/images/notebook.png'
import notebookWithCart from '@assets/images/notebook-with-cart.png'
import phone from '@assets/images/phone.png'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'

export const Landing = () => {
  return (
    <div className="flex flex-col gap-20 xl:gap-40">
      <div className="w-full flex items-start uppercase flex-col justify-center">
        <div className="flex flex-col xl:flex-row-reverse items-end xl:items-center ml-4 justify-start">
          <img className="w-2/3 xl:w-1/2 " src={notebook} alt="" />
          <div className="w-full xl:w-1/3 flex gap-4 flex-col mb-8">
            <h1 className=" text-3xl xl:text-4xl font-semibold">
              разработка и реализация эффективных стратегий,
            </h1>
            <h2 className="text-2xl xl:text-3xl font-semibold mb-8">
              позволяющих максимально использовать потенциал e-commerce для
              вашего бизнеса
            </h2>
            <Button className="xl:w-fit mr-4" size="large">
              Оставить заявку
            </Button>
          </div>
        </div>
      </div>

      <div className=" flex items-center justify-center bg-background py-4 px-12 rounded-2xl gap-4 flex-col xl:flex-row text-center xl:text-left border-y-8 border-accent xl:text-2xl mx-4 xl:container">
        <div className="flex flex-col gap-2 xl:border-l-2 border-primary xl:pl-3">
          <h3 className="text-2xl text-secondary font-semibold">01</h3>
          <p>Комплексное продвижение на OZON</p>
        </div>
        <div className="flex flex-col gap-2 xl:border-l-2 border-primary xl:pl-3">
          <h3 className="text-2xl text-secondary font-semibold">02</h3>
          <p>Уникальные технологии вывода в ТОП</p>
        </div>
        <div className="flex flex-col gap-2  xl:border-l-2 border-primary xl:pl-3">
          <h3 className="text-2xl text-secondary font-semibold">03</h3>
          <p>Нам доверяют 100+ компаний</p>
        </div>
        <div className="flex flex-col gap-2  xl:border-l-2 border-primary xl:pl-3">
          <h3 className="text-2xl text-secondary font-semibold">04</h3>
          <p>Гарантия результата</p>
        </div>
        <Button className="hidden xl:block mx-4">заказать рассчет</Button>
      </div>
      <Button className="block xl:hidden mx-4">заказать рассчет</Button>

      <div className="w-full flex items-start xl:items-end flex-col justify-center xl:text-2xl">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-start">
          <img className="w-full xl:w-1/2 mb-20" src={blank} alt="" />
          <div className="flex flex-col xl:w-1/3  gap-8 mx-4">
            <h2 className="text-3xl xl:text-4xl font-semibold uppercase">
              Зачем нужно <span className="text-primary">продвижение</span>?
            </h2>
            <p>
              <span className="text-primary texl-4xl font-bold">ОZON</span>
              -популярный маркетплейс, второй по обороту онлайн-магазин России.
            </p>
            <div className="flex gap-4">
              <h3 className="text-2xl text-accent-foreground font-semibold pr-4 border-r-2 border-primary">
                01
              </h3>
              <p>
                Сегодня там представлены тысячи магазинов и миллионы товаров.
              </p>
            </div>
            <div className="flex gap-4">
              <h3 className="text-2xl text-accent-foreground font-semibold pr-4 border-r-2 border-primary">
                02
              </h3>
              <p>
                Конкурировать с другими продавцами в таких условиях становится
                всё сложнее
              </p>
            </div>
            <div className="flex gap-4">
              <h3 className="text-2xl text-accent-foreground font-semibold pr-4 border-r-2 border-primary">
                03
              </h3>
              <p>
                Поэтому для получения прибыли необходимо уделять внимание
                продвижению на маркетплейсе
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex items-start flex-col justify-center xl:text-2xl">
        <div className="flex flex-col-reverse xl:flex-row-reverse items-end xl:items-center ml-4 justify-start">
          <img className="w-2/3 xl:w-1/2 " src={blankReversed} alt="" />
          <div className="flex flex-col xl:w-1/3 gap-8 mx-4">
            <h2 className="text-3xl xl:text-4xl font-semibold uppercase">
              <span className="text-primary"> Кому подойдет </span>
              размещение и продвижение на маркетплейсе?
            </h2>
            <div className="flex gap-4 bg-background p-4 border-y-8 border-accent rounded-2xl flex-col xl:flex-row text-center xl:text-left items-center xl:items-start">
              <img src={mind} className="w-40" alt="" />
              <p>
                Сейчас на онлайн-торговой площадке представлен огромный
                ассортимент товаров. Соответственно, присутствие на популярной
                торговой платформе для любого производителя и поставщика — это
                отличный способ масштабирования бизнеса.
              </p>
            </div>
            <div className="flex gap-4 bg-background p-4 border-y-8 border-accent rounded-2xl flex-col xl:flex-row text-center xl:text-left items-center xl:items-start">
              <img src={group} className="w-40" alt="" />
              <p>
                Развитая логистическая и складская сеть маркетплейса OZON
                позволяет охватить практически все регионы. Это позволяет
                выходить на новые рынки и работать с более широкой аудиторией.
                Помогаем успешно запустить ваши продажи на OZON
              </p>
            </div>
            <div className="flex gap-4 bg-background p-4 border-y-8 border-accent rounded-2xl flex-col xl:flex-row text-center xl:text-left items-center xl:items-start">
              <img src={connection} className="w-40" alt="" />
              <p>
                Поэтому продвижение на онлайн-площадках и профессиональное
                сопровождение необходимо любому бизнесу, который планирует
                выходить на маркетплейсы. Помогаем грамотно вывести товары на
                OZON
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex items-start flex-col justify-center xl:text-2xl 2xl:container -mb-20">
        <div className="flex flex-col xl:w-1/2 gap-8 mx-4">
          <h2 className="text-3xl lg:text-4xl font-semibold uppercase">
            Может быть
            <span className="text-primary"> 2 сценария </span> развития событий
          </h2>
        </div>
      </div>

      <div className="w-full flex items-end flex-col justify-center xl:text-2xl 2xl:container">
        <div className="flex flex-col xl:flex-row items-start">
          <img className="w-full xl:w-1/2 mb-20" src={phone} alt="" />
          <div className="flex flex-col xl:w-1/2 gap-4 mx-4">
            <h2 className="text-2xl font-semibold uppercase text-primary">
              Если выберете нас
            </h2>
            <div className="flex gap-2 bg-background p-4 border-t-8 border-r-8 border-accent rounded-2xl flex-col mb-4">
              <h3 className="text-2xl font-semibold">Опыт и экспертиза:</h3>
              <p>
                Мы как компания, имеющая большой опыт работы с Ozone, обладаем
                глубокими знаниями и умениями для успешного продвижения вашего
                бренда. Мы знаем все нюансы и требования этой площадки, что
                поможет вам выделиться на фоне конкурентов
              </p>
            </div>
            <h2 className="text-2xl font-semibold uppercase">Работаете сами</h2>
            <div className="flex gap-2 flex-col text-primary-foreground">
              <h3 className="text-2xl font-semibold">Совмещение всех ролей:</h3>
              <p>
                Совмещение всех ролей в бизнес-проекте на Озоне подобно танцу на
                натянутой канатной дорожке. Вы выступаете в роли грациозного
                акробата, балансируя между ролью менеджера, маркетолога,
                аналитика и проектолога. Вам необходимо обладать невероятной
                гибкостью и уверенностью, чтобы не упасть и продолжать двигаться
                вперед.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex items-end flex-col justify-center xl:text-2xl 2xl:container font-semibold">
        <div className="flex flex-col gap-8 items-end mx-4">
          <h2 className="text-3xl xl:text-4xl font-semibold uppercase">
            Почему выгодно
            <span className="text-primary"> выбрать нас</span>
          </h2>
          <div className="flex flex-col lg:flex-row gap-8 w-full">
            <div className="flex gap-4 bg-background p-4 border-t-8 border-r-8 border-accent rounded-2xl flex-row items-start">
              <img src={megaphone} alt="" />
              <p>Разработка и ведение рекламных кампаний</p>
            </div>
            <div className="flex gap-4 bg-background p-4 border-t-8 border-r-8 border-accent rounded-2xl flex-row items-start">
              <img src={cart} alt="" />
              <p>Создание новых магазинов</p>
            </div>
            <div className="flex gap-4 bg-background p-4 border-t-8 border-r-8 border-accent rounded-2xl flex-row items-start">
              <img src={list} alt="" />
              <p>
                Управление контентом (описания, фото, видео, инфографика,
                RICH-контент)
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 w-full">
            <div className="flex gap-4 bg-background p-4 border-t-8 border-r-8 border-accent rounded-2xl flex-row items-start">
              <img src={search} alt="" />
              <p>
                Техническая поддержка и коммуникация с платформой при
                возникновении ошибок (претензии, блокировки)
              </p>
            </div>
            <div className="flex gap-4 bg-background p-4 border-t-8 border-r-8 border-accent rounded-2xl flex-row  items-start">
              <img src={research} alt="" />
              <p>
                Подготовка маркетинговой стратегии развития на маркетплейсе и
                медиаплана
              </p>
            </div>
            <div className="flex gap-4 bg-background p-4 border-t-8 border-r-8 border-accent rounded-2xl flex-row items-start">
              <img src={checklist} alt="" />
              <p>
                Подготовка еженедельной и ежемесячной отчетности и рекомендаций
                для клиента
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex items-start flex-col justify-center lg:text-xl 2xl:container -mb-20">
        <div className="flex flex-col xl:w-1/2 gap-4 mx-4">
          <h2 className="text-3xl lg:text-4xl font-semibold uppercase">
            Для тех кто еще думает выходить на
            <span className="text-primary"> OZON </span> или нет
          </h2>
          <h3 className="text-2xl xl:text-3xl font-semibold mb-10">
            Посмотрите на объемы рынка продаж товаров на OZON.
          </h3>
          <div className="flex flex-col lg:flex-row  gap-4 mb-14">
            <div>
              <span className="text-3xl lg:text-4xl font-semibold text-primary pb-2 border-b-2 border-accent-foreground">
                197 млрд
              </span>
              <p className="pt-4">Оборот продаж за 2020 год</p>
            </div>
            <div>
              <span className="text-3xl lg:text-4xl font-semibold text-primary pb-2 border-b-2 border-accent-foreground">
                448 млрд
              </span>
              <p className="pt-4">Оборот продаж за 2021 год</p>
            </div>
            <div>
              <span className="text-3xl lg:text-4xl font-semibold text-primary pb-2 border-b-2 border-accent-foreground">
                832 млрд
              </span>
              <p className="pt-4">Оборот продаж за 2022 год</p>
            </div>
          </div>
          <h4 className="text-xl xl:text-2xl font-semibold text-primary">
            Вы все еще думаете, стоит ли продавать на маркетплейсе или нет?
          </h4>
          <h4>
            Или продолжайте думать, что все будет хорошо с оффлайн-торговлей и
            классическими интернет-магазинами. Ведь, маркетплейсы это так сложно
            и "убыточно"
          </h4>
        </div>
      </div>

      <div className="w-full flex items-start flex-col justify-center">
        <div className="flex flex-col xl:flex-row-reverse items-end xl:items-center justify-start w-full px-4">
          <img className=" xl:w-1/2 " src={notebookWithCart} alt="" />
          <div className="w-full xl:w-1/3 flex gap-4 flex-col mb-8 bg-background p-8 rounded-2xl">
            <h1 className=" text-xl xl:text-4xl font-semibold uppercase mb-4">
              Форма обратной связи
            </h1>
            <div className="grid w-full items-center gap-2">
              <Label htmlFor="name">Ваше имя</Label>
              <Input id="name" placeholder="Анастасия" />
            </div>
            <div className="grid w-full items-center gap-2 mb-4">
              <Label htmlFor="phone">Ваш номер телефона</Label>
              <Input id="phone" placeholder="+7 (999) 999-99-99" />
            </div>
            <Button size="large">Оставить заявку</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
