import { Mail, MapPin, Phone, Instagram, Youtube, Facebook } from 'lucide-react';
import { useRouter } from '@/router';

export function Footer() {
  const { navigate } = useRouter();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gold/20 bg-gradient-to-b from-bg/50 to-bg mt-auto pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Top Section */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 pb-12 border-b border-border/40">
          
          {/* Brand & Logo Column - Centered on Mobile & Desktop */}
          <div className="space-y-4 w-full flex flex-col items-center justify-center text-center">
            <button
              onClick={() => navigate('/')}
              className="flex justify-center transition-transform hover:scale-105 focus:outline-none w-full"
            >
              <img 
                src="/file_000000005dc481fabda416f9778f3a0a-removebg-preview.png" 
                alt="Farhan Balouch Full Logo" 
                className="h-36 sm:h-48 w-auto max-w-[280px] sm:max-w-[320px] mx-auto object-contain drop-shadow-[0_4px_12px_rgba(234,179,8,0.15)]"
              />
            </button>
            <p className="text-sm text-text-muted leading-relaxed font-serif italic border-t-2 border-gold/40 pt-2 max-w-[280px]">
              "Farhan — A Story Still Being Written." ⭐
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-gold font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              {['About', 'My Story', 'Work', 'Contact'].map((item) => {
                const path = item === 'My Story' ? '/story' : `/${item.toLowerCase()}`;
                return (
                  <li key={item}>
                    <button 
                      onClick={() => navigate(path)} 
                      className="text-text-muted hover:text-gold transition-colors duration-200 flex items-center gap-1.5"
                    >
                      <span className="text-gold/40 text-xs">›</span> {item}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Direct Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-gold font-semibold mb-4">Direct Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a 
                  href="mailto:Muhammadfarhan138223@gmail.com" 
                  className="flex items-center gap-3 text-text-muted hover:text-gold transition-colors p-2.5 rounded-xl bg-white/5 hover:bg-gold/10 border border-white/5 hover:border-gold/30 transition-all group"
                >
                  <Mail className="w-4 h-4 text-gold group-hover:scale-110 transition-transform shrink-0" />
                  <span className="truncate text-xs">Muhammadfarhan138223@gmail.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/923093244171" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 text-text-muted hover:text-gold transition-colors p-2.5 rounded-xl bg-white/5 hover:bg-gold/10 border border-white/5 hover:border-gold/30 transition-all group"
                >
                  <Phone className="w-4 h-4 text-gold group-hover:scale-110 transition-transform shrink-0" />
                  <span className="text-xs font-medium">+92 309 3244171</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-text-muted p-2.5 rounded-xl bg-white/5 border border-white/5">
                <MapPin className="w-4 h-4 text-gold shrink-0" />
                <span className="text-xs">Ahmadpur East, Pakistan</span>
              </li>
            </ul>
          </div>

          {/* Connect With Me (Horizontal Social Links) */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-gold font-semibold mb-4">Connect With Me</h4>
            <p className="text-xs text-text-muted mb-4">Follow my journey across social channels:</p>
            
            <div className="flex flex-wrap gap-3">
              <a 
                href="https://www.instagram.com/farhan_deals/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-gradient-to-tr from-amber-500/10 to-pink-500/10 border border-pink-500/30 text-pink-400 hover:scale-110 hover:border-pink-500 transition-all shadow-sm"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a 
                href="https://www.tiktok.com/@farhandeals.store" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 border border-white/20 text-text hover:scale-110 hover:border-gold hover:text-gold transition-all flex items-center justify-center font-bold text-xs w-9 h-9 shadow-sm"
                title="TikTok"
              >
                TT
              </a>

              <a 
                href="https://www.youtube.com/@FarhanDeals/shorts" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 hover:scale-110 hover:border-red-500 transition-all shadow-sm"
                title="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>

              <a 
                href="https://www.facebook.com/p/Farhan-Deals-61586852994463/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 hover:scale-110 hover:border-blue-500 transition-all shadow-sm"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>© {year} <span className="text-gold font-medium">Farhan Balouch</span>. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Built with precision</span>
            <span className="text-gold">•</span>
            <span>Narrated by Rawi</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
