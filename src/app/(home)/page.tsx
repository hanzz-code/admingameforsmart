import Link from 'next/link';
import {
  LayoutDashboard,
  Users,
  BookOpen,
  Trophy,
  Headphones,
  Settings,
  ArrowRight,
  Zap,
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#030303] text-zinc-100 flex flex-col justify-between overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-rose-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-violet-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 py-12 flex-1 flex flex-col justify-center">
        {/* Header Branding */}
        <div className="flex items-center gap-2 mb-12 self-center sm:self-start">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-rose-600 to-violet-600 flex items-center justify-center shadow-lg shadow-rose-500/20">
            <Zap className="h-5 w-5 text-white animate-pulse" />
          </div>
          <span className="font-semibold text-lg tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-400">
            GAMEFORSMART ADMIN PORTAL
          </span>
        </div>

        {/* Hero Section */}
        <div className="text-center sm:text-left max-w-3xl mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            Pusat Panduan & <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-purple-500 to-violet-500">
              Dokumentasi Teknis
            </span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-8">
            Dokumentasi terperinci untuk arsitektur admin, alur autentikasi middleware, keamanan Supabase RLS, orkestrasi turnamen multi-babak, billing Xendit, dan scanner resepsionis luring turnamen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <Link
              href="/docs"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-rose-600 to-violet-600 hover:from-rose-500 hover:to-violet-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-rose-500/20 hover:shadow-rose-500/30"
            >
              Buka Dokumentasi
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/docs/dashboard/authentication-security"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-zinc-900 hover:bg-zinc-800/80 text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700 font-semibold rounded-xl transition-all duration-300"
            >
              Sistem Keamanan & Middleware
            </Link>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Card 1 */}
          <Link
            href="/docs/dashboard"
            className="group relative rounded-2xl border border-zinc-900 bg-zinc-950/40 p-6 hover:border-rose-500/30 hover:bg-zinc-950/70 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="h-12 w-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                <LayoutDashboard className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-zinc-100 group-hover:text-rose-400 transition-colors duration-300 mb-2">
                Dashboard & Analitik
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Panduan analitik ringkasan KPI, bagan tren user growth Recharts, master games analytics, dan server-side paginated log audit.
              </p>
            </div>
            <div className="mt-6 flex items-center text-sm font-semibold text-rose-500 gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Pelajari Lebih Lanjut <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </Link>

          {/* Card 2 */}
          <Link
            href="/docs/manajemen-user"
            className="group relative rounded-2xl border border-zinc-900 bg-zinc-950/40 p-6 hover:border-purple-500/30 hover:bg-zinc-950/70 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="h-12 w-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-zinc-100 group-hover:text-purple-400 transition-colors duration-300 mb-2">
                Manajemen User & Staf
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Kelola profiles data user, role administrator, status blokir akun, subskripsi tier, dan check-in luring di meja resepsionis turnamen.
              </p>
            </div>
            <div className="mt-6 flex items-center text-sm font-semibold text-purple-500 gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Pelajari Lebih Lanjut <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </Link>

          {/* Card 3 */}
          <Link
            href="/docs/manajemen-konten"
            className="group relative rounded-2xl border border-zinc-900 bg-zinc-950/40 p-6 hover:border-violet-500/30 hover:bg-zinc-950/70 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="h-12 w-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-zinc-100 group-hover:text-violet-400 transition-colors duration-300 mb-2">
                Kuis, Game & Blog
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Pengaturan bank kuis, antrean kurasi persetujuan kuis, pustaka game, grup komunitas lobi, dan blog TipTap WYSIWYG editor.
              </p>
            </div>
            <div className="mt-6 flex items-center text-sm font-semibold text-violet-500 gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Pelajari Lebih Lanjut <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </Link>

          {/* Card 4 */}
          <Link
            href="/docs/manajemen-konten/competition"
            className="group relative rounded-2xl border border-zinc-900 bg-zinc-950/40 p-6 hover:border-amber-500/30 hover:bg-zinc-950/70 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="h-12 w-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Trophy className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-zinc-100 group-hover:text-amber-400 transition-colors duration-300 mb-2">
                Turnamen & Whitelist
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Orkestrasi turnamen kuis, pembuatan babak, pembagian standings klasemen, session whitelistAllowed check, dan cascading database cleanup.
              </p>
            </div>
            <div className="mt-6 flex items-center text-sm font-semibold text-amber-500 gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Pelajari Lebih Lanjut <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </Link>

          {/* Card 5 */}
          <Link
            href="/docs/billing-support"
            className="group relative rounded-2xl border border-zinc-900 bg-zinc-950/40 p-6 hover:border-emerald-500/30 hover:bg-zinc-950/70 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="h-12 w-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Headphones className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors duration-300 mb-2">
                Billing & Pusat Bantuan
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Tiket support keluhan pengguna, SLA prioritas otomatis, eskalasi otomatis billing overdue, monitoring Xendit payments, dan data idempotency.
              </p>
            </div>
            <div className="mt-6 flex items-center text-sm font-semibold text-emerald-500 gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Pelajari Lebih Lanjut <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </Link>

          {/* Card 6 */}
          <Link
            href="/docs/pengaturan"
            className="group relative rounded-2xl border border-zinc-900 bg-zinc-950/40 p-6 hover:border-cyan-500/30 hover:bg-zinc-950/70 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="h-12 w-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Settings className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-zinc-100 group-hover:text-cyan-400 transition-colors duration-300 mb-2">
                Pengaturan & Sistem
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Aktifkan Maintenance Mode, kustomisasi palet warna tema/radius border, templat rejection comments multi-bahasa, dan trash bin.
              </p>
            </div>
            <div className="mt-6 flex items-center text-sm font-semibold text-cyan-500 gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Pelajari Lebih Lanjut <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-zinc-900 py-6 text-center text-zinc-500 text-xs">
        <p>© 2026 GameForSmart. All rights reserved. Technical Admin Documentation Portal.</p>
      </footer>
    </div>
  );
}
