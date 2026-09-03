import "./index.css";
import { useState } from "react";
import { MessageCircle } from "lucide-react";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      {/* Navigation */}
      <header className="sticky top-0 z-40 border-b border-stone-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <a href="#home" className="text-2xl font-light tracking-[0.25em]">
            LUMÉA
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#home" className="text-sm transition hover:text-stone-500">
              Home
            </a>

            <a
              href="#services"
              className="text-sm transition hover:text-stone-500"
            >
              Services
            </a>

            <a
              href="#about"
              className="text-sm transition hover:text-stone-500"
            >
              About
            </a>

            <a
              href="#contact"
              className="text-sm transition hover:text-stone-500"
            >
              Contact
            </a>

            <a
              href="#appointment"
              className="rounded-full bg-stone-900 px-5 py-2 text-sm text-white transition hover:bg-stone-700"
            >
              Book Appointment
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl md:hidden"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="border-t border-stone-200 bg-white px-6 py-6 md:hidden">
            <div className="flex flex-col gap-5">
              <a
                href="#home"
                onClick={() => setMenuOpen(false)}
                className="text-sm"
              >
                Home
              </a>

              <a
                href="#services"
                onClick={() => setMenuOpen(false)}
                className="text-sm"
              >
                Services
              </a>

              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="text-sm"
              >
                About
              </a>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="text-sm"
              >
                Contact
              </a>

              <a
                href="#appointment"
                onClick={() => setMenuOpen(false)}
                className="w-fit rounded-full bg-stone-900 px-5 py-3 text-sm text-white"
              >
                Book Appointment
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* Hero */}
      <main id="home">
        <section className="relative overflow-hidden bg-stone-100 px-6 py-24 sm:py-28 lg:px-12 lg:py-36">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
            {/* Left content */}
            <div className="max-w-2xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
                Beauty • Style • Confidence
              </p>

              <h1 className="animate-fade-up text-5xl font-semibold leading-[1.05] text-stone-900 sm:text-6xl lg:text-7xl">
                Your beauty,
                <br />
                <span className="italic text-stone-500">beautifully</span>{" "}
                defined.
              </h1>

              <p className="animate-fade-up mt-7 max-w-lg text-lg leading-8 text-stone-600">
                Discover a personalized beauty experience where elegant styling,
                professional care, and confidence come together.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#appointment"
                  className="inline-block rounded-full bg-stone-900 px-7 py-3.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-stone-700"
                >
                  Book Appointment
                </a>

                <a
                  href="#services"
                  className="inline-block rounded-full border border-stone-300 bg-white px-7 py-3.5 text-sm font-medium text-stone-800 transition hover:-translate-y-0.5 hover:border-stone-500"
                >
                  Explore Services
                </a>
              </div>

              <div className="mt-10 flex items-center gap-8 text-sm text-stone-500">
                <div>
                  <p className="text-2xl font-semibold text-stone-900">5+</p>
                  <p>Years Experience</p>
                </div>

                <div className="h-10 w-px bg-stone-300" />

                <div>
                  <p className="text-2xl font-semibold text-stone-900">1K+</p>
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>

            {/* Right visual */}
            <div className="relative">
              <div className="overflow-hidden rounded-[2.5rem] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=85"
                  alt="Beauty salon"
                  className="h-[500px] w-full object-cover sm:h-[600px]"
                />
              </div>

              <div className="absolute -bottom-6 -left-4 rounded-2xl bg-white px-6 py-5 shadow-xl sm:-left-8">
                <p className="text-xs uppercase tracking-[0.2em] text-stone-400">
                  LUMÉA
                </p>

                <p className="mt-1 font-serif text-lg text-stone-900">
                  Feel beautiful. Feel confident.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Intro */}
        <section className="bg-white px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
              Welcome to LUMÉA
            </p>

            <h2 className="mt-4 text-4xl font-light md:text-5xl">
              Beauty that feels like you.
            </h2>

            <p className="mt-6 leading-8 text-stone-600">
              From everyday self-care to your most special occasions, our beauty
              experts are here to create an experience that is personal,
              relaxing and unforgettable.
            </p>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12">
              <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
                What we offer
              </p>

              <h2 className="mt-3 text-4xl font-light md:text-5xl">
                Our Services
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              <div className="hover-lift group rounded-3xl border border-stone-200 bg-white p-7 shadow-sm">
                <h3 className="text-xl font-semibold text-stone-900">Hair</h3>

                <p className="mt-3 text-sm leading-7 text-stone-500">
                  Haircuts, styling, spa treatments and complete hair
                  transformations.
                </p>

                <p className="mt-6 text-sm font-semibold text-stone-900">
                  From ₹499
                </p>
              </div>

              <div className="hover-lift group rounded-3xl border border-stone-200 bg-white p-7 shadow-sm">
                <h3 className="text-xl font-semibold text-stone-900">Skin</h3>

                <p className="mt-3 text-sm leading-7 text-stone-500">
                  Facials and skincare treatments designed for healthy glowing
                  skin.
                </p>

                <p className="mt-6 text-sm font-semibold text-stone-900">
                  From ₹799
                </p>
              </div>

              <div className="hover-lift group rounded-3xl border border-stone-200 bg-white p-7 shadow-sm">
                <h3 className="text-xl font-semibold text-stone-900">Makeup</h3>

                <p className="mt-3 text-sm leading-7 text-stone-500">
                  Bridal, party and occasion makeup tailored to your personal
                  style.
                </p>

                <p className="mt-6 text-sm font-semibold text-stone-900">
                  From ₹1,499
                </p>
              </div>

              <div className="hover-lift group rounded-3xl border border-stone-200 bg-white p-7 shadow-sm">
                <h3 className="text-xl font-semibold text-stone-900">Nails</h3>

                <p className="mt-3 text-sm leading-7 text-stone-500">
                  Manicure, pedicure and beautiful nail care experiences.
                </p>

                <p className="mt-6 text-sm font-semibold text-stone-900">
                  From ₹599
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
                Simple Pricing
              </p>

              <h2 className="mt-3 text-4xl font-light md:text-5xl">
                Beauty Services
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-stone-600">
                Premium treatments designed to help you look and feel your best.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="hover-lift group rounded-3xl border border-stone-200 bg-white p-7 shadow-sm">
                <h3 className="text-xl font-semibold text-stone-900">
                  Hair Styling
                </h3>
                <p className="mt-3 text-sm leading-7 text-stone-500">
                  Haircut, styling and finishing.
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-3xl font-semibold text-stone-900">
                    ₹499
                  </span>
                  <button className="rounded-full border border-stone-300 px-5 py-2 text-sm hover:bg-stone-100">
                    Book
                  </button>
                </div>
              </div>

              <div className="hover-lift group rounded-3xl border border-stone-200 bg-white p-7 shadow-sm">
                <h3 className="text-xl font-semibold text-stone-900">
                  Hair Spa
                </h3>
                <p className="mt-3 text-sm leading-7 text-stone-500">
                  Deep nourishment and relaxing hair care.
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-3xl font-semibold text-stone-900">
                    ₹999
                  </span>
                  <button className="rounded-full border border-stone-300 px-5 py-2 text-sm hover:bg-stone-100">
                    Book
                  </button>
                </div>
              </div>

              <div className="hover-lift group rounded-3xl border border-stone-200 bg-white p-7 shadow-sm">
                <h3 className="text-xl font-semibold text-stone-900">
                  Glow Facial
                </h3>
                <p className="mt-3 text-sm leading-7 text-stone-500">
                  Refresh and hydrate your skin.
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-3xl font-semibold text-stone-900">
                    ₹799
                  </span>
                  <button className="rounded-full border border-stone-300 px-5 py-2 text-sm hover:bg-stone-100">
                    Book
                  </button>
                </div>
              </div>

              <div className="hover-lift group rounded-3xl border border-stone-200 bg-white p-7 shadow-sm">
                <h3 className="text-xl font-semibold text-stone-900">
                  Party Makeup
                </h3>
                <p className="mt-3 text-sm leading-7 text-stone-500">
                  Elegant makeup for parties and events.
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-3xl font-semibold text-stone-900">
                    ₹1,499
                  </span>
                  <button className="rounded-full border border-stone-300 px-5 py-2 text-sm hover:bg-stone-100">
                    Book
                  </button>
                </div>
              </div>

              <div className="hover-lift group rounded-3xl border border-stone-200 bg-white p-7 shadow-sm">
                <h3 className="text-xl font-semibold text-stone-900">
                  Bridal Makeup
                </h3>
                <p className="mt-3 text-sm leading-7 text-stone-500">
                  Complete bridal beauty experience.
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-3xl font-semibold text-stone-900">
                    ₹7,999
                  </span>
                  <button className="rounded-full border border-stone-300 px-5 py-2.5 text-sm font-medium text-stone-800 transition hover:bg-stone-900 hover:text-white">
                    Book
                  </button>
                </div>
              </div>

              <div className="hover-lift group rounded-3xl border border-stone-200 bg-white p-7 shadow-sm">
                <h3 className="text-xl font-semibold text-stone-900">
                  Manicure
                </h3>
                <p className="mt-2 text-sm text-stone-500">
                  Nail shaping, care and finishing.
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-2xl font-semibold">₹599</span>
                  <button className="rounded-full border border-stone-300 px-5 py-2 text-sm hover:bg-stone-100">
                    Book
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
                Our Work
              </p>

              <h2 className="mt-3 text-4xl font-light md:text-5xl">
                Beauty Gallery
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80"
                alt="Salon styling"
                className="gallery-image h-80 w-full rounded-3xl object-cover"
              />

              <img
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=80"
                alt="Hair styling"
                className="gallery-image h-80 w-full rounded-3xl object-cover"
              />

              <img
                src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=900&q=80"
                alt="Beauty service"
                className="gallery-image h-80 w-full rounded-3xl object-cover"
              />

              <img
                src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=80"
                alt="Makeup"
                className="gallery-image h-80 w-full rounded-3xl object-cover"
              />

              <img
                src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=900&q=80"
                alt="Makeup artist"
                className="gallery-image h-80 w-full rounded-3xl object-cover"
              />

              <img
                src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=900&q=80"
                alt="Salon interior"
                className="gallery-image h-80 w-full rounded-3xl object-cover"
              />
            </div>
          </div>
        </section>
        {/* Testimonials */}
        <section className="bg-stone-100 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
                Client Love
              </p>

              <h2 className="mt-3 text-4xl font-light md:text-5xl">
                What Our Clients Say
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-stone-600">
                We believe every visit should leave you feeling confident,
                refreshed and beautiful.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="hover-lift rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
                <div className="text-sm tracking-[0.25em] text-stone-500">
                  ★★★★★
                </div>

                <p className="mt-5 leading-7 text-stone-600">
                  “Absolutely loved my experience at LUMÉA. The staff was
                  professional and my hair looked amazing!”
                </p>

                <div className="mt-6">
                  <p className="font-medium">Priya Shah</p>
                  <p className="text-sm text-stone-500">Hair Styling</p>
                </div>
              </div>

              <div className="hover-lift rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
                <div className="text-sm tracking-[0.25em] text-stone-500">
                  ★★★★★
                </div>

                <p className="mt-5 leading-7 text-stone-600">
                  “The facial was so relaxing and my skin looked fresh
                  immediately. Highly recommended!”
                </p>

                <div className="mt-6">
                  <p className="font-medium">Riya Patel</p>
                  <p className="text-sm text-stone-500">Glow Facial</p>
                </div>
              </div>

              <div className="hover-lift rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
                <div className="text-sm tracking-[0.25em] text-stone-500">
                  ★★★★★
                </div>

                <p className="mt-5 leading-7 text-stone-600">
                  “My bridal makeup was perfect. I felt confident and beautiful
                  throughout my special day.”
                </p>

                <div className="mt-6">
                  <p className="font-medium">Meera Joshi</p>
                  <p className="text-sm text-stone-500">Bridal Makeup</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-stone-900 px-6 py-20 text-white">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
                About LUMÉA
              </p>

              <h2 className="mt-4 text-4xl font-light leading-tight md:text-5xl">
                More than beauty.
                <br />
                <span className="italic text-stone-500">It's your moment.</span>
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-stone-600">
                At LUMÉA Beauty Studio, we believe beauty is personal. Our goal
                is to create a calm, welcoming space where every client can
                relax, feel confident and leave feeling their absolute best.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div>
                  <p className="text-3xl font-semibold text-stone-900">1K+</p>
                  <p className="mt-1 text-sm text-stone-500">Happy Clients</p>
                </div>

                <div>
                  <p className="text-3xl font-semibold text-stone-900">5+</p>
                  <p className="mt-1 text-sm text-stone-500">
                    Years Experience
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2.5rem]">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=85"
                alt="LUMÉA beauty studio"
                className="h-[450px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </div>
        </section>

        {/* Appointment */}
        <section id="appointment" className="bg-white px-6 py-20">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
                Book Your Visit
              </p>

              <h2 className="mt-3 text-4xl font-light md:text-5xl">
                Make an Appointment
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-stone-600">
                Choose your service and preferred date. We'll confirm your
                appointment through WhatsApp.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();

                const name = e.target.name.value;
                const service = e.target.service.value;
                const date = e.target.date.value;

                const message = `Hello LUMÉA Beauty Studio!

Name: ${name}
Service: ${service}
Preferred Date: ${date}

I would like to book an appointment.`;

                const encodedMessage = encodeURIComponent(message);

                window.open(
                  `https://wa.me/917016964878?text=${encodedMessage}`,
                  "_blank",
                );
              }}
              className="mt-12 rounded-3xl border border-stone-200 bg-stone-50 p-8"
            >
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Your Name
                  </label>

                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full rounded-2xl border border-stone-200 bg-white px-5 py-3 outline-none focus:border-stone-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Service
                  </label>

                  <select
                    name="service"
                    required
                    className="w-full rounded-2xl border border-stone-200 bg-white px-5 py-3 outline-none focus:border-stone-500"
                  >
                    <option value="">Select a service</option>
                    <option>Hair Styling</option>
                    <option>Hair Spa</option>
                    <option>Glow Facial</option>
                    <option>Party Makeup</option>
                    <option>Bridal Makeup</option>
                    <option>Manicure</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Preferred Date
                  </label>

                  <input
                    name="date"
                    type="date"
                    required
                    className="w-full rounded-2xl border border-stone-200 bg-white px-5 py-3 outline-none focus:border-stone-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-8 w-full rounded-full bg-stone-900 px-6 py-4 text-sm font-medium text-white transition hover:bg-stone-700"
              >
                Book via WhatsApp
              </button>
            </form>
          </div>
        </section>
        {/* CTA */}
        <section className="bg-stone-900 px-6 py-24 text-center text-white">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-stone-400">
              Ready for your glow?
            </p>

            <h2 className="mt-4 text-4xl font-light leading-tight md:text-6xl">
              Let's make your next visit special.
            </h2>

            <p className="mx-auto mt-6 max-w-xl leading-7 text-stone-400">
              Treat yourself to a little time, care and confidence. Your next
              beauty experience starts here.
            </p>

            <a
              href="#appointment"
              className="mt-8 inline-block rounded-full bg-white px-8 py-4 text-sm font-medium text-stone-900 transition hover:-translate-y-0.5 hover:bg-stone-200"
            >
              Book an Appointment
            </a>
          </div>
        </section>
        {/* Contact */}
        <section id="contact" className="bg-stone-100 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
                  Visit Us
                </p>

                <h2 className="mt-3 text-4xl font-light md:text-5xl">
                  Let's Make You Feel Beautiful
                </h2>

                <p className="mt-6 max-w-lg leading-7 text-stone-600">
                  Visit LUMÉA Beauty Studio for premium beauty services,
                  personalized care and a relaxing experience.
                </p>

                <div className="mt-8 space-y-5 text-stone-700">
                  <p>
                    📍 <strong>Address:</strong>
                    <br />
                    123 Fashion Street, Ahmedabad, Gujarat
                  </p>

                  <p>
                    📞 <strong>Phone:</strong>
                    <br />
                    +91 99999 99999
                  </p>

                  <p>
                    🕐 <strong>Opening Hours:</strong>
                    <br />
                    Monday – Sunday: 10:00 AM – 8:00 PM
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white">
                <iframe
                  src="https://www.google.com/maps?q=Ahmedabad%20Gujarat&output=embed"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="LUMÉA Beauty Studio Location"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-stone-200 bg-white px-6 py-10">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="font-semibold tracking-[0.25em] text-stone-900">
                LUMÉA
              </h3>

              <p className="mt-2 text-sm text-stone-500">
                Beauty • Confidence • You
              </p>
            </div>

            <div className="flex flex-wrap gap-5 text-sm text-stone-500">
              <a href="#home" className="hover:text-stone-900">
                Home
              </a>

              <a href="#services" className="hover:text-stone-900">
                Services
              </a>

              <a href="#about" className="hover:text-stone-900">
                About
              </a>

              <a href="#appointment" className="hover:text-stone-900">
                Appointment
              </a>

              <a href="#contact" className="hover:text-stone-900">
                Contact
              </a>
            </div>

            <div className="text-sm text-stone-400">
              © 2026 LUMÉA Beauty Studio
            </div>
          </div>
        </footer>
      </main>
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/917016964878"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with LUMÉA on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white shadow-xl transition hover:-translate-y-1 hover:bg-stone-700"
      >
        <MessageCircle size={18} />
        WhatsApp
      </a>
    </div>
  );
}

export default App;
