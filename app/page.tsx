import { Navbar } from "@/components/undangen/navbar"
import { Hero } from "@/components/undangen/hero"
import { Tenun } from "@/components/undangen/tenun"
import { Manifesto } from "@/components/undangen/manifesto"
import { Themes } from "@/components/undangen/themes"
import { Fitur } from "@/components/undangen/fitur"
import { Ritual } from "@/components/undangen/ritual"
import { Steps } from "@/components/undangen/steps"
import { Pricing } from "@/components/undangen/pricing"
import { Faq } from "@/components/undangen/faq"
import { FinalCta, Footer } from "@/components/undangen/cta-footer"
import { WaFloat } from "@/components/undangen/wa-float"
import { Grain } from "@/components/undangen/grain"

export default function Page() {
  return (
    <>
      <Grain />
      <Navbar />
      <main>
        <Hero />
        <Tenun />
        <Manifesto />
        <Themes />
        <Fitur />
        <Tenun />
        <Ritual />
        <Steps />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WaFloat />
    </>
  )
}
