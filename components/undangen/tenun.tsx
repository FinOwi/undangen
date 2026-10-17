/**
 * Pita tenun ulos — signature divider Undangen.
 * Garis selvage kain: emas, hitam, kapas. Bukan hiasan acak.
 */
export function Tenun({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`h-[14px] ${className}`}
      style={{
        background:
          "linear-gradient(to bottom, #B8862F 0 2px, #17110F 2px 6px, #F1E8D6 6px 8px, #17110F 8px 12px, #B8862F 12px 14px)",
      }}
    />
  )
}
