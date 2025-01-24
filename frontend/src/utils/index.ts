export function classNames(...classes: unknown[]): string {
  return classes.filter(Boolean).join(' ')
}

// export function getIconFromString(icon: string): ReactElement {
//   return <Icon icon={icon} />
// }
