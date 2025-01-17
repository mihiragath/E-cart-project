import Home from '@/components/Home';
import Products from '@/components/products';
import Navbar from '@/components/Navbar';
export default function Main() {
  return (
    <main className="min-h-screen bg-black[0.96] antialiased bg-grid-white/[0.02]">
      <Home />
      <Products />
      <Navbar />
    </main>
  );
}
