import "@/app/globals.scss";
import "@/styles/pages/_home-page.scss";

import Link from "next/link";
import { useState, useEffect } from "react";

import BrandsList from "@/components/BrandsList";
import HomepageFeatured from "@/components/HomepageFeatured";
import ProductList from "@/components/ProductList";
import HamburgerMenu from "@/components/HamburgerMenu";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

interface Product {
  Price: number;
  "Product Name": string;
  "Product Link": string;
  "Product Image": string;
  "Product Type": string;
}

interface HomePageProps {
  data: Product[];
}

export default function HomePage({ data }: HomePageProps) {
  const newProductsData = data.slice(20, 24);

  const AmiParisData = data
    .filter((product: Product) => product["Product Name"].includes("Ami Paris"))
    .slice(0, 4);

  const JacquemusData = data
    .filter((product: Product) => product["Product Name"].includes("Jacquemus"))
    .slice(0, 4);

  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main>
      {isMobile ? <HamburgerMenu /> : <NavBar />}

      <section className="px-8 my-24 lg:my-30">
        <HomepageFeatured />
      </section>

      <section className="home-page__section flex flex-col gap-2">
        <span className="home-page__section-title">Explore New Arrivals</span>
        <ProductList data={newProductsData} />
      </section>

      <section className="home-page__section flex flex-col gap-2">
        <Link href="/ami-paris">
          <span className="home-page__section-title">Explore AMI Paris</span>
        </Link>
        <ProductList data={AmiParisData} />
      </section>

      <section className="home-page__section flex flex-col gap-2">
        <Link href="/jacquemus">
          <span className="home-page__section-title">Explore Jacquemus</span>
        </Link>
        <ProductList data={JacquemusData} />
      </section>

      {!isMobile && (
        <section className="px-8 mb-36">
          <BrandsList />
        </section>
      )}

      <section className="home-page__section">
        <ProductList data={data} />
      </section>

      <section className="home-page__section">
        <Footer />
      </section>
    </main>
  );
}
