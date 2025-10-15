import Hero from "@/components/pages/Hero";
import WhyAttend from "@/components/pages/WhyAttend";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <section id="home" >
        <Hero/>
      </section>
      <section id="why attend" className="py-16">
        <WhyAttend/>
      </section>
      <hr />
      <section id="about" className="py-16">
        About Us
      </section>
      <hr />
      <section id="events" className="py-16">
        Events
      </section>
      <hr />
      <section id="contact" className="pt-16">
        Contact
      </section>
    </div>
  )
}
