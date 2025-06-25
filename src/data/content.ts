export interface FooterItem {
  id: number;
  title: string;
}

export interface NavItem {
  id: number;
  title: string;
}

export const footerAboutItems: FooterItem[] = [
  { id: 1, title: "Brands" },
  { id: 2, title: "Designers" },
  { id: 3, title: "Wishlist" },
  { id: 4, title: "About" },
];

export const footerContactItems: FooterItem[] = [
  { id: 1, title: "info@vetemore.com" },
  { id: 2, title: "Instagram" },
  { id: 3, title: "Pinterest" },
];

export const footerLegalItems: FooterItem[] = [
  { id: 1, title: "Terms & Conditions" },
  { id: 2, title: "Privacy Policy" },
  { id: 3, title: "Developed by Denislav" },
  { id: 4, title: "Vetemòre 2023" },
];

export const navItems: NavItem[] = [
  { id: 1, title: "Brands" },
  { id: 2, title: "Designers" },
  { id: 3, title: "Wishlist" },
  { id: 4, title: "About" },
];

export const navEssentials: NavItem[] = [
  { id: 1, title: "Login" },
  { id: 2, title: "Search" },
  { id: 3, title: "Cart" },
];

export const hamburgerNavItems: NavItem[] = [
  { id: 1, title: "Brands" },
  { id: 2, title: "Designers" },
  { id: 3, title: "Journal" },
  { id: 4, title: "About" },
];

export const sortOptions = {
  default: "Our Picks",
  asc: "Low to high",
  desc: "High to low",
};

export const filterBrands = ["All brands", "Rick Owens", "LOEWE", "Ami Paris"];
