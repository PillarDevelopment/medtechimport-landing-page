import HeroSection from '@/components/HeroSection'
import CategoriesSection from '@/components/CategoriesSection'
import PopularProducts from '@/components/PopularProducts'
import FeaturesSection from '@/components/FeaturesSection'
import InternalLinks from '@/components/InternalLinks'
import Breadcrumbs, { breadcrumbConfigs } from '@/components/Breadcrumbs'

export default function Home() {
  return (
    <>
      <Breadcrumbs items={breadcrumbConfigs.home} />
      <HeroSection />
      <CategoriesSection />
      <PopularProducts />
      <FeaturesSection />
      <InternalLinks type="homepage" />
    </>
  )
}