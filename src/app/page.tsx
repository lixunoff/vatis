import Header from '@/components/Header'
import Hero from '@/components/Hero'
import VideoSection from '@/components/VideoSection'
import About from '@/components/About'
import LogosCarousel from '@/components/LogosCarousel'
import Services from '@/components/Services'
import LicensesCertificates from '@/components/LicensesCertificates'
import Objects from '@/components/Objects'
import Quote from '@/components/Quote'
import Contacts from '@/components/Contacts'
// import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <VideoSection />
        <About />
        <LogosCarousel />
        <Services />
        <LicensesCertificates />
        <Objects />
        <Quote />
        <Contacts />
        <Footer />
      </main>
    </>
  )
}