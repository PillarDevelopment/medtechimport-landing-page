import HeroSection from '@/components/HeroSection'
import CategoriesSection from '@/components/CategoriesSection'
import PopularProducts from '@/components/PopularProducts'
import FeaturesSection from '@/components/FeaturesSection'
import InternalLinks from '@/components/InternalLinks'
export default function Home() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <PopularProducts />
      <FeaturesSection />
      <InternalLinks type="homepage" />
    </>
  )
}