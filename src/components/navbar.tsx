import logo from '@assets/icons/logo.svg'
import logoWithText from '@assets/icons/logo-with-text.svg'
import menu from '@assets/icons/menu.svg'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu'
import { Button } from './ui/button'

export const Navbar = () => {
  return (
    <div className="flex items-center w-full">
      <div className="inline-flex w-1/2 xl:justify-start items-center">
        <img src={logoWithText} alt="" className="hidden xl:block" />
        <img src={logo} alt="" className="block xl:hidden" />
      </div>
      <div className="inline-flex w-1/2">
        <div className="w-full hidden xl:inline-flex justify-end items-center">
          <Button variant="link">Главная</Button>
          <Button variant="link">Услуги</Button>
          <Button variant="link">Проекты</Button>
          <Button variant="link">О нас</Button>
          <Button variant="link">Вопрос-Ответ</Button>
        </div>
        <div className="w-full inline-flex xl:hidden justify-end items-center">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <img src={menu} alt="" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Button variant="link" size="none">
                  Главная
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button variant="link" size="none">
                  Услуги
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button variant="link" size="none">
                  Проекты
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button variant="link" size="none">
                  О нас
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button variant="link" size="none">
                  Вопрос-Ответ
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem>+7 (995) 149-92-11</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}
