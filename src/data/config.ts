import { portfolioByLocale } from './locales/portfolio'

export {
  DEFAULT_LOCALE,
  type Locale,
  portfolioByLocale,
  type PortfolioLocaleBundle,
  type PortfolioUiStrings,
} from './locales/portfolio'

/** English bundle; the live app uses `portfolioByLocale[locale]`. */
export const portfolioConfig = portfolioByLocale.en
