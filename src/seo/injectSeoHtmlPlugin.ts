import type { Plugin } from 'vite'

import { portfolioByLocale } from '../data/locales/portfolio'
import { buildStaticSeoHtml } from './staticHtml'

export function injectSeoHtmlPlugin(): Plugin {
  return {
    name: 'inject-seo-html',
    transformIndexHtml(html) {
      const staticHtml = buildStaticSeoHtml(portfolioByLocale.en)
      return html.replace('<div id="root"></div>', `<div id="root">${staticHtml}</div>`)
    },
  }
}
