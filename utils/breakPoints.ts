
const breakPoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
} 

export const mediaQueries = ( key: ('sm' | 'md' | 'lg' | 'xl') ): string => {
  return `@media (min-width: ${ breakPoints[ key ] }px)`
}