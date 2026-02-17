export default function CinematicBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* base radial */}
      <div className="absolute inset-0 bg-[radial-gradient(55%_55%_at_50%_0%,rgba(255,255,255,0.14),transparent_60%)]" />
      {/* glow blobs */}
      <div className="absolute -top-48 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl animate-[pulse_6s_ease-in-out_infinite]" />
      <div className="absolute -bottom-56 -left-40 h-[520px] w-[520px] rounded-full bg-white/8 blur-3xl animate-[pulse_8s_ease-in-out_infinite]" />
      {/* subtle grid */}
      <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:64px_64px]" />
      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(100%_60%_at_50%_40%,transparent_30%,rgba(0,0,0,0.9)_100%)]" />
    </div>
  );
}
