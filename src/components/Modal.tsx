import { useEffect, type ReactNode } from 'react'

type ModalProps = {
  open: boolean
  title: string
  onClose: () => void
  children: ReactNode
  variant?: 'default' | 'fullscreen'
}

export function Modal({ open, title, onClose, children, variant = 'default' }: ModalProps) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const body = document.body
    const currentLocks = Number(body.dataset.modalLocks ?? '0')
    body.dataset.modalLocks = String(currentLocks + 1)
    body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      const locks = Math.max(0, Number(body.dataset.modalLocks ?? '1') - 1)
      body.dataset.modalLocks = String(locks)
      if (locks === 0) {
        body.style.overflow = ''
      }
    }
  }, [open, onClose])

  if (!open) return null

  const fullscreen = variant === 'fullscreen'

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center ${fullscreen ? 'p-2 sm:p-3' : 'p-4 sm:p-6'}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <button
        type="button"
        aria-label="Close dialog"
        className="modal-backdrop-animate absolute inset-0 bg-black/80"
        onClick={onClose}
      />
      <div
        className={`modal-panel-animate relative z-10 w-full overflow-y-auto border border-white/10 bg-app-elevated shadow-[0_0_0_1px_rgba(0,245,255,0.08),0_24px_80px_rgba(0,0,0,0.55)] ${
          fullscreen
            ? 'max-h-[96vh] max-w-[96vw] rounded-xl p-4 sm:p-5'
            : 'max-h-[94vh] max-w-6xl rounded-2xl p-6 sm:p-8'
        }`}
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <h2
            id="modal-title"
            className="font-heading text-xl font-bold tracking-tight text-text sm:text-2xl"
          >
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-lg border border-white/10 px-3 py-1.5 text-sm text-text-muted transition-colors hover:border-accent/40 hover:text-accent"
          >
            Close
          </button>
        </div>
        <div className="space-y-6 text-[15px] leading-relaxed text-text-muted sm:text-base">{children}</div>
      </div>
    </div>
  )
}
