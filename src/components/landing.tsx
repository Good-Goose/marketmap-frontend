import { Button } from './ui/button'

export const Landing = () => {
  return (
    <div className="flex flex-col gap-40 py-40">
      <div className="w-full flex items-start uppercase flex-col justify-center">
        <div className="w-3/4 lg:w-1/2 flex gap-4 flex-col mb-8">
          <h1 className=" text-3xl lg:text-4xlfont-semibold">
            разработка и реализация эффективных стратегий,
          </h1>
          <h2 className="text-2xl lg:text-3xl font-semibold">
            позволяющих максимально использовать потенциал e-commerce для вашего
            бизнеса
          </h2>
        </div>
        <Button className="w-full lg:w-auto" size="large">
          Оставить заявку
        </Button>
      </div>

      <div className="w-full flex items-center justify-center bg-background py-5 px-12 rounded-2xl gap-5 flex-col lg:flex-row text-center lg:text-left border-y-4 border-accent lg:text-2xl">
        <div className="flex flex-col gap-2 lg:border-l-2 border-primary lg:pl-3">
          <h3 className="text-2xl text-secondary font-semibold">01</h3>
          <p>Комплексное продвижение на OZON</p>
        </div>
        <div className="flex flex-col gap-2 lg:border-l-2 border-primary lg:pl-3">
          <h3 className="text-2xl text-secondary font-semibold">02</h3>
          <p>Уникальные технологии вывода в ТОП</p>
        </div>
        <div className="flex flex-col gap-2  lg:border-l-2 border-primary lg:pl-3">
          <h3 className="text-2xl text-secondary font-semibold">03</h3>
          <p>Нам доверяют 100+ компаний</p>
        </div>
        <div className="flex flex-col gap-2  lg:border-l-2 border-primary lg:pl-3">
          <h3 className="text-2xl text-secondary font-semibold">04</h3>
          <p>Гарантия результата</p>
        </div>
        <Button className="hidden lg:block">заказать рассчет</Button>
      </div>
      <Button className="block lg:hidden">заказать рассчет</Button>

      <div className="w-full flex items-start lg:items-end flex-col justify-center lg:text-2xl">
        <div className="flex flex-col lg:w-1/2 gap-8">
          <h2 className="text-3xl lg:text-4xl font-semibold uppercase">
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
            <p>Сегодня там представлены тысячи магазинов и миллионы товаров.</p>
          </div>
          <div className="flex gap-4">
            <h3 className="text-2xl text-accent-foreground font-semibold pr-4 border-r-2 border-primary">
              02
            </h3>
            <p>
              Конкурировать с другими продавцами в таких условиях становится всё
              сложнее
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

      <div className="w-full flex items-start flex-col justify-center lg:text-2xl">
        <div className="flex flex-col lg:w-1/2 gap-8">
          <h2 className="text-3xl lg:text-4xl font-semibold uppercase">
            <span className="text-primary"> Кому подойдет </span>
            размещение и продвижение на маркетплейсе?
          </h2>
          <div className="flex gap-4 bg-background p-5 border-y-4 border-accent rounded-2xl">
            <h3 className="text-2xl text-accent-foreground font-semibold pr-4">
              01
            </h3>
            <p>
              Сейчас на онлайн-торговой площадке представлен огромный
              ассортимент товаров. Соответственно, присутствие на популярной
              торговой платформе для любого производителя и поставщика — это
              отличный способ масштабирования бизнеса.
            </p>
          </div>
          <div className="flex gap-4 bg-background p-5 border-y-4 border-accent rounded-2xl">
            <h3 className="text-2xl text-accent-foreground font-semibold pr-4">
              02
            </h3>
            <p>
              Развитая логистическая и складская сеть маркетплейса OZON
              позволяет охватить практически все регионы. Это позволяет выходить
              на новые рынки и работать с более широкой аудиторией. Помогаем
              успешно запустить ваши продажи на OZON
            </p>
          </div>
          <div className="flex gap-4 bg-background p-5 border-y-4 border-accent rounded-2xl">
            <h3 className="text-2xl text-accent-foreground font-semibold pr-4">
              03
            </h3>
            <p>
              Поэтому продвижение на онлайн-площадках и профессиональное
              сопровождение необходимо любому бизнесу, который планирует
              выходить на маркетплейсы. Помогаем грамотно вывести товары на OZON
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex items-start flex-col justify-center lg:text-2xl">
        <div className="flex flex-col lg:w-1/2 gap-8">
          <h2 className="text-3xl lg:text-4xl font-semibold uppercase">
            Может быть
            <span className="text-primary"> 2 сценария </span> развития событий
          </h2>
        </div>
      </div>

      <div className="w-full flex items-end flex-col justify-center lg:text-2xl">
        <div className="flex flex-col lg:w-1/2 gap-4">
          <h2 className="text-2xl font-semibold uppercase text-primary">
            Если выберете нас
          </h2>
          <div className="flex gap-2 bg-background p-5 border-t-4 border-accent rounded-2xl flex-col mb-4">
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
            <h3 className="text-2xl font-semibold">Совмещение всех ролей: </h3>
            <p>
              Совмещение всех ролей в бизнес-проекте на Озоне подобно танцу на
              натянутой канатной дорожке. Вы выступаете в роли грациозного
              акробата, балансируя между ролью менеджера, маркетолога, аналитика
              и проектолога. Вам необходимо обладать невероятной гибкостью и
              уверенностью, чтобы не упасть и продолжать двигаться вперед.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
