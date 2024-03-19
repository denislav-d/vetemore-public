import "@/app/globals.scss";
import "@/styles/pages/_brand-page.scss";

import Image from "next/image";
import Link from "next/link";

import NavBar from "@/components/NavBar";
import ProductList from "@/components/ProductList";

import { useRouter } from "next/router";
import { brands } from "@/data/brands";

export default function BrandPage({ data }: any) {
  const router = useRouter();
  const { slug } = router.query;

  const brandData = brands.find((brand) => brand.slug === slug) || {};

  const ProductsData = data.filter((product: any) =>
    product["Product Name"].includes(`${brandData.name}`)
  );

  return (
    <main>
      <NavBar />

      <section className="brand-page__section">
        <div className="brand-page__wrapper">
          <Image
            src={brandData.image}
            alt={brandData.name}
            className="brand-page__designer-image"
          />
          <div className="brand-page__information">
            <Image
              src={brandData.logo}
              alt="logo"
              className="brand-page__logo"
            />
            <h3 className="brand-page__quote">{brandData.quote}</h3>
            <p className="brand-page__description">{brandData.description}</p>
          </div>
        </div>

        <Link href="/">
          <h1 className="brand-page__vetemore-logo">Vetemòre</h1>
        </Link>
      </section>

      <section className="px-8 mt-24 lg:mt-30">
        <ProductList data={ProductsData} />
      </section>
    </main>
  );
}
