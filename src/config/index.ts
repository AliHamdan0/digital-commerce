export const PRODUCT_CATEGORIES = [
  {
    label: "Imported",
    value: "imported" as const,
    featured: [
      {
        name: "Fried picks",
        href: `/products?category=imported`,
        imageSrc: "/nav/ui-kits/mixed.jpg",
      },
      {
        name: "New Spicy",
        href: "/products?category=imported&sort=desc",
        imageSrc: "/nav/ui-kits/blue.jpg",
      },
      {
        name: "Bestsellers",
        href: "/products?category=imported",
        imageSrc: "/nav/ui-kits/purple.jpg",
      },
    ],
  },
  {
    label: "Local",
    value: "local" as const,
    featured: [
      {
        name: "Favorite Products Picks",
        href: `/products?category=local`,
        imageSrc: "/nav/icons/picks.webp",
      },
      {
        name: "New Arrivals",
        href: "/products?category=local&sort=desc",
        imageSrc: "/nav/icons/new.jpg",
      },
      {
        name: "Bestselling Dishes",
        href: "/products?category=local",
        imageSrc: "/nav/icons/bestsellers.jpg",
      },
    ],
  },
];
