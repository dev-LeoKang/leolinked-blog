export default function Footer() {
  return (
    <footer className="border-t py-6 text-xs text-muted-foreground">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4">
        <span>© {new Date().getFullYear()} leolinked</span>
        <span>Built with Next.js</span>
      </div>
    </footer>
  );
}
