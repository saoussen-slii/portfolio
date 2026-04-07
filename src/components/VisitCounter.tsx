/**
 * Third-party visit counter (embed). Each page load requests the counter image;
 * the provider increments totals and can show visitors by country (e.g. Flag Counter).
 *
 * Setup: https://flagcounter.com → create a counter → paste env vars in `.env` (local)
 * and in Vercel → Project → Settings → Environment Variables.
 */
export function VisitCounter() {
  const imgSrc = import.meta.env.VITE_VISIT_COUNTER_IMG_SRC?.trim()
  const href = import.meta.env.VITE_VISIT_COUNTER_HREF?.trim()

  if (!imgSrc) {
    if (import.meta.env.PROD) return null
    return (
      <p className="text-sm text-stone-500">
        Add{' '}
        <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs">
          VITE_VISIT_COUNTER_IMG_SRC
        </code>{' '}
        to <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs">.env</code> (see{' '}
        <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs">.env.example</code>) to show the
        live counter.
      </p>
    )
  }

  const content = (
    <img
      src={imgSrc}
      alt="Visitor and country statistics"
      width={200}
      height={120}
      className="max-w-full rounded-lg border border-white/10 bg-white/5 p-1"
      decoding="async"
    />
  )

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60"
        aria-label="Open visitor statistics (external site)"
      >
        {content}
      </a>
    )
  }

  return content
}
