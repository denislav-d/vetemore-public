import "@/app/globals.scss";
import "@/styles/pages/_brand-page.scss";

// import Image from "next/image";
import Link from "next/link";

import NavBar from "@/components/NavBar";
import ProductList from "@/components/ProductList";
import ErrorBoundary from "@/components/ErrorBoundary";

import { useRouter } from "next/router";
import { brands, Brand } from "@/data/brands";

interface Product {
  "Product Name": string;
  Price: number;
  "Product Type": string;
  "Product Link": string;
  "Product Image": string;
}

interface BrandPageProps {
  data: Product[];
  isLoading?: boolean;
  error?: string;
}

export default function BrandPage({ data, isLoading, error }: BrandPageProps) {
  const router = useRouter();
  const { slug } = router.query;

  const brandData: Brand = brands.find((brand) => brand.slug === slug) || {
    name: "",
    slug: "",
    quote: "",
    description: "",
  };

  const ProductsData = data.filter((product: Product) =>
    product["Product Name"].includes(brandData.name)
  );

  return (
    <ErrorBoundary>
      <main>
        <NavBar />

        <section className="brand-page__section">
          <div className="brand-page__wrapper">
            {/* <Image
              src={brandData.image}
              alt={brandData.name}
              className="brand-page__designer-image"
            /> */}
            <div className="brand-page__information">
              {/* <Image
                src={brandData.logo}
                alt="logo"
                className="brand-page__logo"
              /> */}
              <h3 className="brand-page__quote">{brandData.quote}</h3>
              <p className="brand-page__description">{brandData.description}</p>
            </div>
          </div>

          <Link href="/">
            <h1 className="brand-page__vetemore-logo">Vetemòre</h1>
          </Link>
        </section>

        <section className="px-8 mt-24 lg:mt-30">
          <ProductList
            data={ProductsData}
            isLoading={isLoading}
            error={error}
          />
        </section>
      </main>
    </ErrorBoundary>
  );
}
