type KeyAccomplishmentProps = {
  text: string
}

export function KeyAccomplishment({ text }: KeyAccomplishmentProps) {
  return (
    <li className="rounded-2xl border border-sky-500/20 bg-slate-900/50 p-4 ring-1 ring-amber-950/20">
      {text}
    </li>
  )
}
