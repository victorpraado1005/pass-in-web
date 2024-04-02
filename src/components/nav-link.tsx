import { ComponentProps } from "react";

interface NavLinkProps extends ComponentProps<'a'> {
  children: string,
  href: string,
}

export function NavLink({ children, href }: NavLinkProps) {
  return (
    <a href={href} className='text-zinc-300'>{children}</a>
  )
}