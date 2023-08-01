import { Button } from '@components/ui/button'
import { Input } from '@components/ui/input'

export const App = () => {
  return (
    <>
      <div className="text-2xl rounded-lg">test</div>
      <Button>Тест</Button>
      <Button size="full">Тест</Button>
      <Input placeholder="test" />
    </>
  )
}
