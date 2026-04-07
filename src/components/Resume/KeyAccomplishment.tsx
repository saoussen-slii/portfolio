type KeyAccomplishmentProps = {
  text: string
}

export function KeyAccomplishment({ text }: KeyAccomplishmentProps) {
  return <li className="rounded-2xl border border-white/10 bg-white/5 p-4">{text}</li>
}
