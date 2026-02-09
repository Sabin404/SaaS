import Navbar from "@/app/_components/Navbar";

import Hero from "./_components/Hero";
import Seller from "./_components/Seller";
import KeyFeatures from "./_components/KeyFeatures";
import RealTime from "./_components/RealTime";
import Tools from "./_components/Tools";
import Testimonials from "./_components/Testimonials";
import Blogs from "./_components/Blogs";
import FAQ from "./_components/FAQ";
import NewsLetter from "./_components/NewsLetter";
import Footer from "./_components/Footer";

function App() {
  return (
    <main>
      {/* <header className="sticky top-0 z-50 w-full bg-white">
        <Navbar />
      </header> */}
      <section>
        <Hero />
      </section>
      <section className="bg-seller mt-10 lg:mt-16 lg:py-12 py-8 ">
        <Seller />
      </section>
      <section>
        <KeyFeatures />
      </section>
      <section className="bg-realtime mt-8">
        <RealTime />
      </section>
      <section className="bg-seller py-12">
        <Tools />
      </section>
      <section>
        <Testimonials />
      </section>
      <section className="bg-seller">
        <Blogs />
      </section>
      <section>
        <FAQ />
      </section>
      <section className="bg-seller py-6">
        <NewsLetter />
      </section>
      {/* <footer className=" bg-footer">
        <Footer />
      </footer> */}
    </main>
  );
}

export default App;
