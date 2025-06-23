// import rick_logo from "";
// import mcqueen_logo from "";
// import jacquemus_logo from "";
// import amiparis_logo from "";

// import rickowens_image from "";
// import mcqueen_image from "";
// import jacquemus_image from "";
// import amiparis_image from "";

// Additional brand imports from BrandsList
// import margiela_logo from "";
// import raf_logo from "";
// import vetements_logo from "";
// import givenchy_logo from "";
// import alyx_logo from "";
// import balenciaga_logo from "";

export interface Brand {
  id?: number;
  slug?: string;
  name: string;
  quote?: string;
  description?: string;
  // logo?: any;
  // image?: any;
}

export const brands: Brand[] = [
  {
    slug: "rick-owens",
    name: "Rick Owens",
    // logo: rick_logo,
    // image: rickowens_image,
    quote:
      "“My motivation is to fulfil any potential I have to contribute beauty to the world before I die.”",
    description:
      "Rick Owens is an American fashion designer known for his avant-garde and unconventional approach to luxury fashion. Founded in 1994, the Rick Owens brand has become synonymous with dark, edgy aesthetics and a distinctive blend of gothic and futuristic elements. Owens' designs often feature asymmetrical silhouettes, draped fabrics, and a monochromatic color palette, creating a unique and powerful visual language. Renowned for his expertise in leather craftsmanship, Rick Owens has cultivated a cult following for his distinctively bold and daring creations. The brand challenges traditional notions of beauty and fashion, embracing a raw and industrial aesthetic that sets it apart in the world of high-end fashion. Rick Owens' avant-garde designs continue to resonate with those seeking a non-conformist, edgy, and thought-provoking approach to luxury fashion.",
  },
  {
    slug: "alexander-mcqueen",
    name: "AlexanderMcQUEEN",
    // logo: mcqueen_logo,
    // image: mcqueen_image,
    quote: "“There is no better designer than nature.”",
    description:
      "Alexander McQueen is a British luxury fashion house that captivates the fashion world with its daring and provocative designs. Founded by the iconic designer Lee Alexander McQueen in 1992, the brand is renowned for its avant-garde creations that seamlessly merge craftsmanship with innovation. McQueen's distinct aesthetic often incorporates dark romanticism, theatrical flair, and meticulous attention to detail. The brand has become synonymous with pushing boundaries and challenging traditional notions of beauty in fashion. Known for its dramatic runway shows and sculptural designs, Alexander McQueen continues to be a symbol of creativity and rebellion within the realm of high fashion, honoring the legacy of its visionary founder.",
  },
  {
    slug: "jacquemus",
    name: "Jacquemus",
    // logo: jacquemus_logo,
    // image: jacquemus_image,
    quote:
      "“I would like more poetry, less industry; because fashion is nothing without poetry.”",
    description:
      "Jacquemus is a French fashion brand founded by designer Simon Porte Jacquemus in 2009. The brand has gained widespread acclaim for its refreshing and playful take on modern luxury. Jacquemus is celebrated for its emphasis on clean lines, minimalist aesthetics, and a distinctly Provençal influence. The designs often feature sun-drenched hues, oversized silhouettes, and a touch of Mediterranean-inspired charm. Simon Jacquemus has a knack for blending simplicity with a sense of youthful sophistication, creating pieces that feel effortlessly chic. The brand is known for its iconic accessories, such as the Le Chiquito mini bag, which has become a fashion statement in its own right. Jacquemus has carved a niche in the fashion world by offering a contemporary and breezy interpretation of luxury, capturing the essence of the French countryside with a modern twist. The brand's collections exude a sense of joy and carefree elegance, making it a favorite among fashion enthusiasts seeking a fresh and distinctive style.",
  },
  {
    slug: "ami-paris",
    name: "Ami Paris",
    // logo: amiparis_logo,
    // image: amiparis_image,
    quote: "“Being accessible is my biggest success.”",
    description:
      "AMI Paris is a French fashion brand founded by Alexandre Mattiussi in 2011. The brand is celebrated for its casual yet refined approach to menswear, offering a contemporary and accessible take on French style. AMI, which means 'friend' in French, reflects the brand's ethos of creating clothing that feels like a friendly and familiar companion in one's wardrobe. AMI Paris designs are characterized by clean lines, understated elegance, and a focus on timeless staples. Alexandre Mattiussi often infuses a sense of Parisian cool into his collections, striking a balance between sophistication and ease. The brand's aesthetic embraces a modern and urban sensibility, with a keen attention to detail and quality craftsmanship. AMI Paris has gained popularity for its versatile and approachable pieces, making it a go-to choice for those who appreciate a laid-back yet polished style. The brand's commitment to creating well-crafted, everyday essentials has contributed to its success in the world of contemporary menswear.",
  },
];

// Brands from BrandsList component (will be merged with main brands data)
export const featuredBrands: Brand[] = [
  {
    id: 1,
    name: "1017 ALYX 9SM",
    // logo: alyx_logo,
  },
  {
    id: 2,
    name: "A-COLD-WALL*",
    // logo: acw_logo,
  },
  {
    id: 3,
    name: "AlexanderMcQUEEN",
    // logo: mcqueen_logo,
    // image: mcqueen_image,
    description:
      "Alexander McQueen is a British luxury fashion house that captivates the fashion world with its daring and provocative designs. Founded by the iconic designer Lee Alexander McQueen in 1992, the brand is renowned for its avant-garde creations that seamlessly merge craftsmanship with innovation. McQueen's distinct aesthetic often incorporates dark romanticism, theatrical flair, and meticulous attention to detail. The brand has become synonymous with pushing boundaries and challenging traditional notions of beauty in fashion. Known for its dramatic runway shows and sculptural designs, Alexander McQueen continues to be a symbol of creativity and rebellion within the realm of high fashion, honoring the legacy of its visionary founder.",
  },
  {
    id: 4,
    name: "Balenciaga",
    // logo: balenciaga_logo,
  },
  {
    id: 5,
    name: "Givenchy",
    // logo: givenchy_logo,
    // image: givenchy_image,
    description:
      "Givenchy is a renowned French luxury fashion house known for its sophisticated and avant-garde designs. Founded by Hubert de Givenchy in 1952, the brand has consistently epitomized elegance and refinement. Renowned for its haute couture, ready-to-wear collections, and iconic accessories, Givenchy seamlessly blends timeless style with modern innovation. The label is celebrated for its sharp tailoring, distinctive prints, and a commitment to creating pieces that exude an air of aristocratic glamour. Givenchy's legacy continues to influence the fashion landscape with its bold aesthetic and commitment to pushing the boundaries of contemporary luxury.",
  },
  {
    id: 6,
    name: "Jacquemus",
    // logo: jacquemus_logo,
  },
  {
    id: 7,
    name: "Maison Margiela",
    // logo: margiela_logo,
  },
  {
    id: 8,
    name: "Raf Simons",
    // logo: raf_logo,
  },
  {
    id: 9,
    name: "Rick Owens",
    // logo: rick_logo,
  },
  {
    id: 10,
    name: "Vetements",
    // logo: vetements_logo,
  },
];
