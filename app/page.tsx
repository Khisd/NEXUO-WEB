"use client"
import { useState } from 'react'

// ==========================================
// CONFIGURATION
// ==========================================
const GITHUB_URL = "https://github.com/Khisd/NEXUO-PROJECT";
const VERSION = "v2.4.1";
const YOUTUBE_VIDEO_ID = "dQw4w9WgXcQ"; // Ganti dengan ID Video Tutorial kamu

export default function Home() {
  const [page, setPage] = useState<'home' | 'store'>('home');
  const [showPrivacy, setShowPrivacy] = useState(false);

  const goToStore = () => setPage('store');

  return (
    <main className="min-h-screen bg-black text-white font-mono flex flex-col items-center">
      
      {/* NAVIGATION */}
      <nav className="w-full border-b border-neutral-800 py-5 text-center sticky top-0 bg-black/90 backdrop-blur-sm z-50">
        <div className="flex justify-center gap-8 text-xs tracking-[2px] uppercase font-semibold">
          <button onClick={() => setPage('home')} className={`${page === 'home' ? 'text-amber-400 border-b-2 border-amber-400 pb-4' : 'text-neutral-500 hover:text-amber-400'} transition-all`}>
            Home
          </button>
          <button onClick={() => setPage('store')} className={`${page === 'store' ? 'text-amber-400 border-b-2 border-amber-400 pb-4' : 'text-neutral-500 hover:text-amber-400'} transition-all`}>
            Store
          </button>
        </div>
      </nav>

      {/* CONTAINER */}
      <div className="w-full max-w-4xl px-4 py-10">
        {page === 'home' ? <HomePage navigateToStore={goToStore} /> : <StorePage />}
      </div>

      {/* MODAL PRIVACY POLICY */}
      {showPrivacy && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowPrivacy(false)}>
          <div className="bg-neutral-900 border border-neutral-700 max-w-2xl w-full max-h-[80vh] overflow-y-auto rounded-lg shadow-2xl p-8 relative text-neutral-300" onClick={e => e.stopPropagation()}>
            <button onClick={() => setShowPrivacy(false)} className="absolute top-4 right-4 text-neutral-500 hover:text-white text-2xl">&times;</button>
            <h2 className="text-2xl font-bold text-amber-400 mb-6 tracking-wider">PRIVACY POLICY</h2>
            <div className="space-y-4 text-xs leading-relaxed text-neutral-400">
              <p><strong className="text-white">Effective Date:</strong> 2024.</p>
              <p>At NEXUO, we are committed to protecting your privacy. This policy outlines our stance on data handling.</p>
              <h3 className="text-white font-bold mt-4 text-sm">1. NO DATA STORAGE</h3>
              <p>NEXUO operates strictly as a <strong>local automation tool</strong>. We do not collect, store, or transmit your personal data or trading credentials on any external server.</p>
              <h3 className="text-white font-bold mt-4 text-sm">2. Trading Credentials</h3>
              <p>Your MT5 login details are stored locally in <code className="bg-neutral-800 px-1 rounded">nexuo_config.json</code> solely for automation purposes. This data never leaves your computer.</p>
              <h3 className="text-white font-bold mt-4 text-sm">3. Disclaimer</h3>
              <p>NEXUO is provided "as is". We are not liable for any financial losses incurred while using this tool.</p>
            </div>
            <button onClick={() => setShowPrivacy(false)} className="mt-8 bg-amber-400 text-black font-bold px-6 py-2 rounded text-xs hover:bg-amber-300 transition-all">
              I UNDERSTAND
            </button>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="mt-auto w-full border-t border-neutral-900 py-10 text-center">
        <div className="text-neutral-600 text-[10px] tracking-widest mb-4">
            // NEXUO CORP. USE AT YOUR OWN RISK //
        </div>
        <div className="flex justify-center gap-6 text-neutral-500 text-xs">
            <button onClick={() => setShowPrivacy(true)} className="hover:text-amber-400 transition-colors">
              Privacy Policy
            </button>
            <span>•</span>
            <a href={GITHUB_URL} target="_blank" className="hover:text-amber-400 transition-colors">GitHub</a>
        </div>
      </footer>
    </main>
  );
}

// ==========================================
// COMPONENT: HOME PAGE
// ==========================================
function HomePage({ navigateToStore }: { navigateToStore: () => void }) {
  return (
    <div className="flex flex-col items-center animate-fade-in">
      
      {/* LOGO ASCII */}
      <div className="text-center mb-10 select-none">
        <pre className="text-[8px] sm:text-[10px] leading-tight text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] inline-block text-left" style={{ fontFamily: 'monospace' }}>
{`███╗   ██╗███████╗██╗  ██╗██╗   ██╗ ██████╗ 
████╗  ██║██╔════╝╚██╗██╔╝██║   ██║██╔═══██╗
██╔██╗ ██║█████╗   ╚███╔╝ ██║   ██║██║   ██║
██║╚██╗██║██╔══╝   ██╔██╗ ██║   ██║██║   ██║
██║ ╚████║███████╗██╔╝ ██╗╚██████╔╝╚██████╔╝
╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝ ╚═════╝  ╚═════╝ `}
        </pre>
      </div>

      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">AUTOMATION TRADING ENGINE</h1>
      <h2 className="text-xs text-neutral-500 tracking-[4px] uppercase mb-10">[ Market Analysis & Execution Suite ]</h2>

      {/* STATUS BOX */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-r-md border-l-2 border-l-amber-400 p-4 text-left text-sm shadow-lg mb-10 w-fit font-mono">
        <div className="text-neutral-400 mb-1">&gt; SYSTEM STATUS: <span className="text-white font-bold">ONLINE</span></div>
        <div className="text-neutral-400">&gt; CURRENT VERSION: <span className="text-amber-400">{VERSION}</span></div>
        <div className="text-neutral-400">&gt; CONNECTION: <span className="text-white">SECURE (TLS 1.3)</span></div>
      </div>

      {/* BUTTONS */}
      <div className="flex flex-col items-center gap-4 mb-16">
        {/* UBAH: Link ke /api/download agar auto download */}
        <a href="/api/download" className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold py-4 px-12 rounded shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all text-sm tracking-wider uppercase">
          Download Tool
        </a>
        <a href={GITHUB_URL} target="_blank" className="text-neutral-500 border border-neutral-700 hover:border-amber-400 hover:text-amber-400 py-3 px-8 rounded text-xs uppercase transition-all">
          View Source (GitHub)
        </a>
      </div>

      {/* SECTION A */}
      <div className="w-full border-b border-neutral-800 mb-8 pb-2 text-center">
          <h3 className="text-neutral-400 uppercase tracking-[3px] text-xs font-bold">A. Core Features</h3>
      </div>
      <div className="grid md:grid-cols-3 gap-6 w-full mb-16 text-left">
        <Card title="Dual Plan Mode">
          <li><strong className="text-white">Free Signal Scanner:</strong> Free access to view real-time market signals.</li>
          <li><strong className="text-white">Premium Auto Trader:</strong> Paid access for automatic execution.</li>
        </Card>
        <Card title="Multi-Method Execution">
          <li><strong className="text-white">Auto Order (MT5):</strong> Bot sends Buy/Sell orders automatically.</li>
          <li><strong className="text-white">Telegram Alert:</strong> Bot sends signals to Telegram User ID.</li>
        </Card>
        <Card title="Dynamic Dashboard">
          <li><strong className="text-white">Display:</strong> Clean terminal using Rich library.</li>
          <li><strong className="text-white">Info:</strong> Strategy Name, Mode, Balance, Equity, P/L.</li>
        </Card>
      </div>

      {/* SECTION B */}
      <div className="w-full border-b border-neutral-800 mb-8 pb-2 text-center">
          <h3 className="text-neutral-400 uppercase tracking-[3px] text-xs font-bold">B. Technical Functions & Security</h3>
      </div>
      <div className="w-full bg-neutral-900 border border-neutral-800 rounded p-6 mb-16 columns-2 text-left text-xs text-neutral-400 space-y-2">
          <li><strong className="text-white">Connection Management:</strong> Initialize MT5 & save login automatically.</li>
          <li><strong className="text-white">Real-Time Market Data:</strong> Fetch OHLCV data to Pandas DataFrame.</li>
          <li><strong className="text-white">Indicator Calculation:</strong> RSI, EMA, MACD, Bollinger, Ichimoku Logic.</li>
          <li><strong className="text-white">Smart Execution:</strong> Auto SL/TP calculation & filling type detection.</li>
          <li><strong className="text-white">Cooldown System:</strong> Prevents repeated order spam.</li>
          <li><strong className="text-white">Security:</strong> Hidden MT5 password input.</li>
      </div>

      {/* SECTION C */}
      <div className="w-full border-b border-neutral-800 mb-8 pb-2 text-center">
          <h3 className="text-neutral-400 uppercase tracking-[3px] text-xs font-bold">C. Usage Tutorial</h3>
      </div>
      <div className="w-full bg-neutral-900 border border-neutral-800 rounded p-6 mb-16 text-left">
          <div className="border-b border-dashed border-neutral-700 pb-4 mb-4">
              <h5 className="text-white font-bold flex items-center mb-2"><span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>Initial Preparation</h5>
              <p className="text-neutral-400 text-xs">Ensure <strong>Python 3.10</strong> and <strong>MetaTrader 5</strong> are installed.</p>
          </div>
          <div className="border-b border-dashed border-neutral-700 pb-4 mb-4">
              <h5 className="text-white font-bold flex items-center mb-2"><span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>Install Libraries</h5>
              <div className="bg-black border border-neutral-700 rounded p-3 mt-2 text-green-400 text-xs">pip install MetaTrader5 pandas numpy requests rich</div>
          </div>
           <div className="border-b border-dashed border-neutral-700 pb-4 mb-4">
              <h5 className="text-white font-bold flex items-center mb-2"><span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>Premium Activation</h5>
              <p className="text-neutral-400 text-xs">Visit the <button onClick={navigateToStore} className="text-amber-400 hover:underline cursor-pointer">STORE</button> page to purchase an API Key.</p>
          </div>
          <div className="bg-red-900/20 border-l-2 border-red-500 p-3 text-red-400 text-xs mt-4">
              <strong>⚠️ WARNING:</strong> Always test on a <strong>DEMO ACCOUNT</strong> first.
          </div>
      </div>

      {/* SECTION D: VIDEO */}
      <div className="w-full border-b border-neutral-800 mb-8 pb-2 text-center">
          <h3 className="text-neutral-400 uppercase tracking-[3px] text-xs font-bold">D. Video Tutorial</h3>
      </div>
      <div className="w-full aspect-video bg-neutral-900 border border-neutral-800 rounded overflow-hidden mb-16 relative shadow-lg">
          <iframe className="w-full h-full absolute top-0 left-0" src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`} title="NEXUO Tutorial" frameBorder="0" allowFullScreen></iframe>
      </div>
    </div>
  );
}

// ==========================================
// COMPONENT: STORE PAGE (WITH QRIS)
// ==========================================
function StorePage() {
  const [paymentData, setPaymentData] = useState<any | null>(null);
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const handleBuy = async (product: { id: string, title: string, price: number }) => {
    setLoadingId(product.id);
    try {
      const res = await fetch('/api/payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          product_name: product.title,
          price: product.price * 15000 // Konversi USD ke IDR (contoh: $1 = Rp 15.000)
        })
      });
      const data = await res.json();

      if (data.qr_url) {
        setPaymentData({ qrUrl: data.qr_url, amount: product.price, title: product.title });
      } else {
        alert("Failed to create QR Code. Check console for details.");
        console.error(data);
      }
    } catch (err) {
      console.error(err);
      alert("Server connection error.");
    } finally {
      setLoadingId(null);
    }
  };

  // TAMPILAN MODAL QR CODE
  if (paymentData) {
    return (
      <div className="flex flex-col items-center animate-fade-in p-4">
        <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-8 max-w-sm w-full relative text-center">
          <button onClick={() => setPaymentData(null)} className="absolute top-2 right-4 text-neutral-500 text-2xl hover:text-white">&times;</button>
          
          <h3 className="text-xl font-bold mb-2 text-amber-400">{paymentData.title}</h3>
          <p className="text-neutral-500 text-xs mb-6">Scan QRIS to pay</p>
          
          <div className="bg-white p-4 rounded-lg mb-4 inline-block">
            <img src={paymentData.qrUrl} alt="QR Code" className="w-48 h-48" />
          </div>
          
          <p className="text-neutral-300 font-mono text-lg mb-6">
            Rp {(paymentData.amount * 15000).toLocaleString('id-ID')}
          </p>
          
          <div className="text-red-400 text-xs flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            Complete payment within 1 hour
          </div>
        </div>
      </div>
    );
  }

  // TAMPILAN LIST PRODUK
  return (
    <div className="flex flex-col items-center animate-fade-in">
       <div className="text-center mb-10 select-none">
        <pre className="text-[8px] sm:text-[10px] leading-tight text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] inline-block text-left" style={{ fontFamily: 'monospace' }}>
{`███╗   ██╗███████╗██╗  ██╗██╗   ██╗ ██████╗ 
████╗  ██║██╔════╝╚██╗██╔╝██║   ██║██╔═══██╗
██╔██╗ ██║█████╗   ╚███╔╝ ██║   ██║██║   ██║
██║╚██╗██║██╔══╝   ██╔██╗ ██║   ██║██║   ██║
██║ ╚████║███████╗██╔╝ ██╗╚██████╔╝╚██████╔╝
╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝ ╚═════╝  ╚═════╝ 
                S T O R E`}
        </pre>
      </div>

      <h3 className="text-xl font-bold mb-2 text-center">PREMIUM STRATEGY MARKETPLACE</h3>
      <p className="text-neutral-500 text-xs mb-10 text-center">Get access to exclusive professional trading strategies.</p>

      <div className="grid md:grid-cols-2 gap-6 w-full max-w-3xl">
        <ProductCard title="Rapid RSI Sniper" type="RSI" price="49.00" desc="Aggressive scalping strategy using short-period RSI on M1 timeframe." specs={['Timeframe: M1', 'Risk: Aggressive']} onBuy={() => handleBuy({ id: 'RSI', title: 'Rapid RSI Sniper', price: 49 })} isLoading={loadingId === 'RSI'} />
        <ProductCard title="Nexuo Hybrid Alpha" type="HYBRID" price="99.00" desc="Advanced combination of EMA 50 filter and RSI trigger on M5." specs={['Timeframe: M5', 'Risk: Balanced']} onBuy={() => handleBuy({ id: 'HYBRID', title: 'Nexuo Hybrid Alpha', price: 99 })} isLoading={loadingId === 'HYBRID'} />
      </div>
    </div>
  );
}

// ==========================================
// SMALL COMPONENTS
// ==========================================
function Card({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded p-5 transition-all hover:border-neutral-700 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
      <h4 className="text-amber-400 mb-3 font-mono text-sm tracking-wide">{title}</h4>
      <ul className="text-neutral-400 text-xs list-disc pl-4 space-y-1 leading-relaxed">{children}</ul>
    </div>
  );
}

function ProductCard({ title, type, price, desc, specs, onBuy, isLoading }: any) {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded overflow-hidden transition-all hover:border-amber-400 hover:shadow-[0_15px_40px_rgba(0,0,0,0.6)] group">
      <div className="bg-neutral-800/30 p-4 border-b border-neutral-800 flex justify-between items-center">
        <span className="font-bold text-sm">{title}</span>
        <span className="text-[9px] bg-neutral-800 border border-neutral-700 text-amber-400 px-2 py-1 rounded uppercase">{type}</span>
      </div>
      <div className="p-4">
        <p className="text-neutral-500 text-xs mb-4 min-h-[40px]">{desc}</p>
        <div className="grid grid-cols-2 gap-2 text-xs">
          {specs.map((s: string, i: number) => (
            <div key={i} className="bg-black/30 border border-neutral-800 p-2 rounded text-neutral-400">{s}</div>
          ))}
        </div>
      </div>
      <div className="p-4 border-t border-neutral-800 bg-black/20 text-center">
        <div className="text-[10px] text-neutral-600 tracking-widest mb-1">ONE TIME PAYMENT</div>
        <div className="text-2xl font-mono font-bold mb-3">${price}</div>
        <button onClick={onBuy} disabled={isLoading} className="block w-full py-2 border border-amber-400 text-amber-400 text-xs font-bold uppercase tracking-widest hover:bg-amber-400 hover:text-black transition-all disabled:opacity-50 disabled:cursor-not-allowed">
          {isLoading ? 'Processing...' : 'Pay with QRIS'}
        </button>
      </div>
    </div>
  );
}