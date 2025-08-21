import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Categories from '@/components/Categories'
import About from '@/components/About'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Categories />
      <About />
      <ContactForm />
      <Footer />
    </main>
  )
}
