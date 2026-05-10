import React from "react";

const Icon = ({ type, className = "w-8 h-8" }) => {
  const icons = {
    home: <path d="M3 11.5 12 4l9 7.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9.5Z" />,
    brain: <path d="M8.5 5.5A3.5 3.5 0 0 0 5 9v7a3 3 0 0 0 3 3h1v-5M15.5 5.5A3.5 3.5 0 0 1 19 9v7a3 3 0 0 1-3 3h-1v-5M9 7c1.2.2 2 1 2 2.2V21M15 7c-1.2.2-2 1-2 2.2V21M7 13h10" />,
    users: <path d="M16 11a4 4 0 1 0-8 0 4 4 0 0 0 8 0ZM4 21a8 8 0 0 1 16 0M18 8a3 3 0 0 1 3 3M22 21a5.5 5.5 0 0 0-4-5.3M6 8a3 3 0 0 0-3 3M2 21a5.5 5.5 0 0 1 4-5.3" />,
    heart: <path d="M12 21s-7-4.7-9.2-9A5.4 5.4 0 0 1 12 6.2 5.4 5.4 0 0 1 21.2 12C19 16.3 12 21 12 21Z" />,
    check: <path d="m5 13 4 4L19 7" />,
    phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6.4 6.4l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z" />,
    globe: <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20" />,
    mail: <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm18 4-10 6L2 8" />,
    clock: <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm0-14v5l3 2" />,
    pin: <path d="M12 22s7-5.6 7-12A7 7 0 1 0 5 10c0 6.4 7 12 7 12Zm0-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />,
    calendar: <path d="M7 2v4M17 2v4M3 9h18M5 5h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm7 7.5c1.8-2 5-1 5 1.7 0 2.1-2.2 3.6-5 5.3-2.8-1.7-5-3.2-5-5.3 0-2.7 3.2-3.7 5-1.7Z" />,
  };
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{icons[type] || icons.check}</svg>;
};

function ImageSlot({ label, note, className = "" }) {
  return (
    <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#dff3f1] to-[#0b3558] ${className}`}>
      <div className="absolute inset-0 opacity-25">
        <div className="absolute -left-10 top-10 h-44 w-44 rounded-full bg-white" />
        <div className="absolute bottom-8 right-8 h-32 w-32 rounded-full bg-[#81d8d0]" />
        <div className="absolute right-24 top-12 h-20 w-20 rounded-full bg-white" />
      </div>
      <div className="relative flex h-full min-h-[220px] flex-col items-center justify-center p-8 text-center text-white">
        <Icon type="users" className="mb-4 h-14 w-14" />
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#dff3f1]">{label}</p>
        <p className="mt-3 max-w-sm text-lg font-extrabold leading-tight">{note}</p>
      </div>
    </div>
  );
}

export default function App() {
  const services = [
    ["home", "Home & Community Habilitation", "Personalized support that helps individuals build daily living skills, independence, and confidence at home and in the community."],
    ["brain", "Behavioral Support", "Compassionate guidance focused on positive routines, emotional wellness, and meaningful progress."],
    ["users", "Community Integration", "Real-world experiences that encourage social connection, participation, and community involvement."],
    ["heart", "Companion & Respite Services", "Trusted support and relief for individuals, families, and caregivers through caring companionship and respite options."],
  ];

  const activities = ["Library visits", "YMCA programs", "Bowling trips", "Movie theater visits", "Park & nature walks", "Museum tours", "Cooking & nutrition", "Money management", "Self-care workshops", "Art, music & dance activities", "Holiday celebrations", "Volunteer opportunities"];

  return (
    <div className="min-h-screen bg-[#f7f4ef] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0b3558] text-xl font-bold text-white">LH</div>
            <div>
              <p className="font-bold tracking-wide text-[#0b3558]">Living Life Home Connections</p>
              <p className="text-xs text-slate-500">Person-Centered Support</p>
            </div>
          </div>
          <a href="tel:4845317203" className="hidden items-center gap-2 rounded-full bg-[#1c9a9a] px-5 py-3 font-semibold text-white shadow-sm hover:opacity-90 sm:inline-flex">
            <Icon type="phone" className="h-4 w-4" /> Call Today
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f7f4ef] to-[#dff3f1]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#1c9a9a]">Supporting Adults with Intellectual Disabilities</p>
              <h1 className="text-5xl font-extrabold leading-tight text-[#0b3558] lg:text-6xl">Empowering Independence. Building Meaningful Connections.</h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700">We provide compassionate, person-centered support services that help adults with autism and intellectual disabilities live with confidence, dignity, and purpose.</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="tel:4845317203" className="rounded-full bg-[#0b3558] px-7 py-4 text-center font-bold text-white shadow-lg hover:opacity-90">Call (484) 531-7203</a>
                <a href="#services" className="rounded-full border border-slate-200 bg-white px-7 py-4 text-center font-bold text-[#0b3558] hover:bg-slate-50">View Services</a>
              </div>
            </div>
            <div className="rounded-[2rem] bg-white p-4 shadow-2xl">
              <ImageSlot label="Live. Learn. Thrive." note="Replace this block with the outdoor wheelchair support photo." className="h-[430px] shadow-xl" />
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3">
            {["Individualized care plans", "Compassionate experienced staff", "Safe supportive environments"].map((item) => (
              <div key={item} className="flex items-center gap-4 rounded-3xl bg-[#f7f4ef] p-6"><Icon type="check" className="h-7 w-7 text-[#1c9a9a]" /><p className="font-bold text-[#0b3558]">{item}</p></div>
            ))}
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#1c9a9a]">About Us</p>
              <h2 className="text-4xl font-extrabold leading-tight text-[#0b3558]">Helping individuals build confidence, independence, and meaningful community connections.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-700">At Living Life Home Connections, we believe every individual deserves the opportunity to thrive in a safe, supportive, and empowering environment. Our team provides personalized support that encourages independence, meaningful relationships, community involvement, and long-term personal growth.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <ImageSlot label="Activity Image" note="Use the drawing/activity support photo here." className="h-72 shadow-lg" />
              <ImageSlot label="Community Image" note="Use the smiling group/community photo here." className="mt-10 h-72 shadow-lg" />
            </div>
          </div>
        </section>

        <section id="services" className="bg-[#0b3558] py-20 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#81d8d0]">Our Services</p>
              <h2 className="text-4xl font-extrabold">Personalized support services designed around each individual.</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {services.map(([icon, title, text]) => (
                <article key={title} className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-sm">
                  <div className="mb-5 text-[#81d8d0]"><Icon type={icon} /></div>
                  <h3 className="mb-3 text-xl font-extrabold">{title}</h3>
                  <p className="leading-7 text-white/75">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#1c9a9a]">What We Offer</p>
              <h2 className="text-4xl font-extrabold text-[#0b3558]">Life skills, community outings, and enrichment activities.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">Our activities are designed to encourage participation, learning, confidence, and connection.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {activities.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-[#f7f4ef] px-4 py-3">
                  <Icon type="calendar" className="h-5 w-5 text-[#1c9a9a]" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f7f4ef] py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
            <div className="rounded-[2rem] bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-3xl font-extrabold text-[#0b3558]">Our Mission</h2>
              <p className="text-lg leading-8 text-slate-700">Our mission is to provide compassionate, person-centered support that promotes independence, dignity, inclusion, and meaningful community involvement.</p>
            </div>
            <div className="rounded-[2rem] bg-[#1c9a9a] p-8 text-white shadow-sm">
              <h2 className="mb-4 text-3xl font-extrabold">Let’s Build Independence Together</h2>
              <p className="mb-6 leading-7 text-white/85">Contact Living Life Home Connections LLC to learn more about services and support options.</p>
              <div className="space-y-4">
                <p className="flex items-center gap-3"><Icon type="phone" className="h-5 w-5" /> (484) 531-7203</p>
                <p className="flex items-center gap-3"><Icon type="globe" className="h-5 w-5" /> livinglifehomeconnections.godaddysites.com</p>
                <p className="flex items-center gap-3"><Icon type="mail" className="h-5 w-5" /> info@livinglifehomeconnections.com</p>
                <p className="flex items-center gap-3"><Icon type="clock" className="h-5 w-5" /> Monday–Friday | 9:00 AM – 5:00 PM</p>
                <p className="flex items-center gap-3"><Icon type="pin" className="h-5 w-5" /> Serving Pennsylvania and surrounding areas</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0b3558] py-8 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 md:flex-row">
          <p className="font-bold">Living Life Home Connections LLC</p>
          <p className="text-white/70">Empowering adults with autism and intellectual disabilities to live, learn, and thrive.</p>
        </div>
      </footer>
    </div>
  );
}
