import CarsFilterOption from '@/components/CarsFilterOption';
import Hero from '@/components/Hero';
import SearchInput from '@/components/SearchInput';

export default function Home() {
  return (
    <main>
      <Hero />
      <SearchInput />
      <CarsFilterOption />
    </main>
  );
}
