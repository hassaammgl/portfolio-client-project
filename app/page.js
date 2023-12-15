import Header from "@/components/Header";

import Languages from "@/components/Languages";
import Company from "@/components/Company";
import Quote from "@/components/Quote";
import BgVideo from "@/components/BgVideo";
import Footer from "@/components/Footer";
import Home from "@/components/Home";

export default function page() {
  return (
    <>
      <Header />
      <BgVideo />
      <Home />
      <Languages />
      <Company />
      <Quote />
      <Footer />
    </>
  );
}
