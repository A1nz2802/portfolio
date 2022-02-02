
const breakPoints = {
  xs: 320,
  sm: 479,
  md: 767,
  lg: 920,
  xl: 1024
} 

export const mediaQueries = ( key: ('xs' | 'sm' | 'md' | 'lg' | 'xl') ): string => {
  return `@media (min-width: ${ breakPoints[ key ] }px)`
}