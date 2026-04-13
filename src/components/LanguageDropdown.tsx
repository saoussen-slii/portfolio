import { Check, ChevronDown } from 'lucide-react'
import { useEffect, useId, useRef, useState } from 'react'

import type { Locale } from '../data/config'

const triggerClassName =
  'inline-flex min-w-[7.5rem] shrink-0 items-center justify-between gap-2 rounded-lg border border-sky-500/30 bg-sky-950/40 px-3 py-1.5 text-sm font-medium text-slate-100 shadow-sm shadow-sky-950/30 transition-colors hover:border-sky-400/40 hover:bg-sky-900/50 hover:text-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400'

const menuClassName =
  'absolute z-[60] mt-1 min-w-[10rem] rounded-lg border border-sky-500/30 bg-slate-950/95 py-1 shadow-lg shadow-black/40 ring-1 ring-slate-800/80 backdrop-blur-md'

const itemClassName =
  'flex w-full items-center gap-2 px-3 py-2 text-left text-sm text-slate-200 transition-colors hover:bg-sky-950/60 hover:text-sky-100 aria-checked:bg-sky-900/50 aria-checked:text-sky-100'

type LanguageDropdownProps = {
  locale: Locale
  onLocaleChange: (locale: Locale) => void
  optionEn: string
  optionFr: string
  ariaMenuLabel: string
  onAfterSelect?: () => void
  variant?: 'header' | 'mobile'
}

export function LanguageDropdown({
  locale,
  onLocaleChange,
  optionEn,
  optionFr,
  ariaMenuLabel,
  onAfterSelect,
  variant = 'header',
}: LanguageDropdownProps) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const menuId = useId()

  useEffect(() => {
    if (!open) return
    const onPointerDown = (event: MouseEvent | PointerEvent) => {
      const el = rootRef.current
      if (el && !el.contains(event.target as Node)) setOpen(false)
    }
    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.stopPropagation()
        setOpen(false)
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  const select = (next: Locale) => {
    onLocaleChange(next)
    setOpen(false)
    onAfterSelect?.()
  }

  const currentLabel = locale === 'en' ? optionEn : optionFr
  const isMobile = variant === 'mobile'

  return (
    <div ref={rootRef} className={isMobile ? 'relative mt-2 w-full' : 'relative'}>
      <button
        type="button"
        className={isMobile ? `${triggerClassName} w-full` : triggerClassName}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={ariaMenuLabel}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="truncate">{currentLabel}</span>
        <ChevronDown
          className={`size-4 shrink-0 text-slate-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          aria-hidden
        />
      </button>

      {open ? (
        <div
          id={menuId}
          role="menu"
          aria-label={ariaMenuLabel}
          className={isMobile ? `${menuClassName} left-0 right-0` : `${menuClassName} right-0`}
        >
          <button
            type="button"
            role="menuitemradio"
            aria-checked={locale === 'en'}
            className={itemClassName}
            onClick={() => select('en')}
          >
            <span className="font-medium">{optionEn}</span>
            {locale === 'en' ? <Check className="ml-auto size-4 shrink-0 text-sky-400" aria-hidden /> : null}
          </button>
          <button
            type="button"
            role="menuitemradio"
            aria-checked={locale === 'fr'}
            className={itemClassName}
            onClick={() => select('fr')}
          >
            <span className="font-medium">{optionFr}</span>
            {locale === 'fr' ? <Check className="ml-auto size-4 shrink-0 text-sky-400" aria-hidden /> : null}
          </button>
        </div>
      ) : null}
    </div>
  )
}
