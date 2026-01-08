import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import TrustBar from '../components/TrustBar';
import NewArrivals from '../components/NewArrivals';
import InstagramBar from '../components/InstagramBar';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main>
      <Hero />
      <TrustBar/>
      <FeaturedProducts />
      <NewArrivals />
      <InstagramBar/>
      
      </main>
    </div>
  );
}