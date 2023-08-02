import { cn } from '@lib/utils'
import { SVGProps } from 'react'
import { SpritesMap } from './sprite.gen'

export type IconName = {
  [Key in keyof SpritesMap]: `${Key}/${SpritesMap[Key]}`
}[keyof SpritesMap]

export interface IconProps
  extends Omit<SVGProps<SVGSVGElement>, 'name' | 'type'> {
  name: IconName
}

export const Icon = ({ name, className, viewBox, ...props }: IconProps) => {
  const [spriteName, iconName] = name.split('/')

  return (
    <svg
      className={cn(
        'select-none fill-current w-[1em] h-[1em] inline-block text-inherit',
        className,
      )}
      viewBox={viewBox}
      focusable="false"
      aria-hidden
      {...props}
    >
      <use href={`/public/${spriteName}.svg#${iconName}`} />
    </svg>
  )
}
