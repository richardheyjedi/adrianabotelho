export function ImagePlaceholder({ label, tone = 'sage', className = '' }: { label: string; tone?: string; className?: string }) {
  return <div className={`image-placeholder tone-${tone} ${className}`} role="img" aria-label={label}><span>Imagem editorial</span><strong>{label}</strong><small>Placeholder para substituir por fotografia real</small></div>;
}
