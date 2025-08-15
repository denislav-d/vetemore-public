import "@/app/globals.scss";
import "@/styles/pages/_home-page.scss";

import Link from "next/link";
import { useState, useEffect, useMemo } from "react";

import BrandsList from "@/components/BrandsList";
import HomepageFeatured from "@/components/HomepageFeatured";
import ProductList from "@/components/ProductList";
import HamburgerMenu from "@/components/HamburgerMenu";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ErrorBoundary from "@/components/ErrorBoundary";

interface Product {
  Price: number;
  "Product Name": string;
  "Product Link": string;
  "Product Image": string;
  "Product Type": string;
}

interface HomePageProps {
  data: Product[];
  isLoading?: boolean;
  error?: string;
}

export default function HomePage({ data, isLoading, error }: HomePageProps) {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const { newProductsData, AmiParisData, JacquemusData } = useMemo(() => {
    if (!data || data.length === 0) {
      return {
        newProductsData: [],
        AmiParisData: [],
        JacquemusData: [],
      };
    }

    return {
      newProductsData: data.slice(20, 24),
      AmiParisData: data
        .filter((product: Product) =>
          product["Product Name"].includes("Ami Paris")
        )
        .slice(0, 4),
      JacquemusData: data
        .filter((product: Product) =>
          product["Product Name"].includes("Jacquemus")
        )
        .slice(0, 4),
    };
  }, [data]);

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
    <ErrorBoundary>
      <main>
        {isMobile ? <HamburgerMenu /> : <NavBar />}

        <section className="px-8 my-24 lg:my-30">
          <HomepageFeatured />
        </section>

        <section className="home-page__section flex flex-col gap-2">
          <span className="home-page__section-title">Explore New Arrivals</span>
          <ProductList
            data={newProductsData}
            isLoading={isLoading}
            error={error}
          />
        </section>

        <section className="home-page__section flex flex-col gap-2">
          <Link href="/ami-paris">
            <span className="home-page__section-title">Explore AMI Paris</span>
          </Link>
          <ProductList
            data={AmiParisData}
            isLoading={isLoading}
            error={error}
          />
        </section>

        <section className="home-page__section flex flex-col gap-2">
          <Link href="/jacquemus">
            <span className="home-page__section-title">Explore Jacquemus</span>
          </Link>
          <ProductList
            data={JacquemusData}
            isLoading={isLoading}
            error={error}
          />
        </section>

        {!isMobile && (
          <section className="px-8 mb-36">
            <BrandsList />
          </section>
        )}

        <section className="home-page__section">
          <ProductList data={data} isLoading={isLoading} error={error} />
        </section>

        <section className="home-page__section">
          <Footer />
        </section>
      </main>
    </ErrorBoundary>
  );
}
