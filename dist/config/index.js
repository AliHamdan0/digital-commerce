"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PRODUCT_CATEGORIES = void 0;
exports.PRODUCT_CATEGORIES = [
    {
        label: "Imported",
        value: "imported",
        featured: [
            {
                name: "Fried picks",
                href: "/products?category=ui_kits",
                imageSrc: "/nav/ui-kits/mixed.jpg",
            },
            {
                name: "New Spicy",
                href: "/products?category=ui_kits&sort=desc",
                imageSrc: "/nav/ui-kits/blue.jpg",
            },
            {
                name: "Bestsellers",
                href: "/products?category=ui_kits",
                imageSrc: "/nav/ui-kits/purple.jpg",
            },
        ],
    },
    {
        label: "Local",
        value: "local",
        featured: [
            {
                name: "Favorite Products Picks",
                href: "/products?category=icons",
                imageSrc: "/nav/icons/picks.webp",
            },
            {
                name: "New Arrivals",
                href: "/products?category=icons&sort=desc",
                imageSrc: "/nav/icons/new.jpg",
            },
            {
                name: "Bestselling Dishes",
                href: "/products?category=icons",
                imageSrc: "/nav/icons/bestsellers.jpg",
            },
        ],
    },
];
