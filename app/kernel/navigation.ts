export interface NavigationMap {
  home: "/"
  repairs: "/repairs"
  promotions: "/promotions"
  about: "/about"
  contacts: "/contacts"
}

export type NavLink = NavigationMap[keyof NavigationMap]

export interface NavItem {
  label: string
  to: NavLink
}

export const nav: NavItem[] = [
  {
    label: "Подбор авто",
    to: "/",
  },
  {
    label: "Услуги по ремонту",
    to: "/repairs",
  },
  {
    label: "Акции",
    to: "/promotions",
  },
  {
    label: "О компании",
    to: "/about",
  },
  {
    label: "Контакты",
    to: "/contacts",
  },
]
