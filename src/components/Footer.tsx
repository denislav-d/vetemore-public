import "@/styles/components/_footer.scss";

const footerAboutItems: FooterItem[] = [
  { id: 1, title: "Brands" },
  { id: 2, title: "Designers" },
  { id: 3, title: "Wishlist" },
  { id: 4, title: "About" },
];

const footerContactItems: FooterItem[] = [
  { id: 1, title: "info@vetemore.com" },
  { id: 2, title: "Instagram" },
  { id: 3, title: "Pinterest" },
];

const footerLegalItems: FooterItem[] = [
  { id: 1, title: "Terms & Conditions" },
  { id: 2, title: "Privacy Policy" },
  { id: 3, title: "Developed by Denislav" },
  { id: 4, title: "Vetemòre 2023" },
];

interface FooterItem {
  id: number;
  title: string;
}

interface FooterItemProps {
  items: FooterItem[];
  listTitle: string;
}

export default function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">Vetemòre</h2>
      <section className="footer__grid">
        <div className="footer__about">
          <FooterItemList items={footerAboutItems} listTitle="About" />
          <FooterItemList items={footerContactItems} listTitle="Contact" />
        </div>
        <NewsletterForm />
      </section>
      <FooterLegal />
    </footer>
  );
}

function FooterItemList({ items, listTitle }: FooterItemProps) {
  return (
    <div className="tracking-tighter">
      <h2 className="text-base opacity-60">{listTitle}</h2>
      <ul className="text-2xl mt-5">
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

function NewsletterForm() {
  return (
    <div className="tracking-tighter">
      <h2 className="text-base opacity-60">Join our newsletter</h2>
      <form className="mt-4">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your email"
          className="footer__form"
        />
      </form>
    </div>
  );
}

function FooterLegal() {
  return (
    <div className="footer__legal">
      {footerLegalItems.map((item) => (
        <span key={item.id}>{item.title}</span>
      ))}
    </div>
  );
}
