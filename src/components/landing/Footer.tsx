export default function Footer() {
  return (
    <footer className="border-t hairline-gold px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 text-sm">
        <div>
          <p className="font-display text-lg">Quezel</p>
          <p className="text-muted-foreground">Slow coffee lounge</p>
        </div>
        <div className="flex items-center gap-4 text-muted-foreground">
          <span>Instagram</span>
          <span>Spotify</span>
          <span>Journal</span>
        </div>
        <p className="text-muted-foreground">© 2026 Quezel. All rights reserved.</p>
      </div>
    </footer>
  );
}
