export { Icon } from './Icon';
let theme: 'light' | 'dark' = 'light';
export const getTheme = (): typeof theme => theme;
export const updateTheme = (newTheme: typeof theme): void => {
  theme = newTheme;
}
