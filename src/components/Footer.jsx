export default function Footer() {
  return (
    <footer className="relative bg-surface-alt border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg gradient-bg-warm flex items-center justify-center font-display font-bold text-white text-sm">A</div>
              <span className="font-display font-bold text-lg text-text-primary">Akura</span>
            </div>
            <p className="text-text-muted text-sm">Adaptive Sinhala Learning for Early Childhood</p>
          </div>
          <div className="text-center">
            <p className="text-text-secondary text-sm font-medium">Sri Lanka Institute of Information Technology</p>
            <p className="text-text-muted text-xs mt-1">Faculty of Computing — 2024/25</p>
          </div>
          <div className="sm:text-right">
            <p className="text-text-secondary text-sm">© {new Date().getFullYear()} Team Akura</p>
            <p className="text-text-muted text-xs mt-1">All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
