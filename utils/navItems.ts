// src/data/navData.ts
export type NavItem = {
  label: string;
  submenu?: {
    label: string;
    nestedSubmenu?: string[];
  }[];
};

export const navItems: NavItem[] = [
  {
    label: "Our Expertise",
  },
  {
    label: "Products",
    submenu: [
      {
        label: "Bracelets",
        nestedSubmenu: ["Gold", "Diamond", "Platinum"],
      },
      {
        label: "Earrings",
        nestedSubmenu: ["Gold", "Diamond", "Platinum"],
      },
      {
        label: "Necklace",
        nestedSubmenu: [],
      },
      {
        label: "Pendant",
        nestedSubmenu: [],
      },
      {
        label: "Rings",
        nestedSubmenu: [],
      },
      {
        label: "View All",
        nestedSubmenu: [],
      },
    ],
  },
  {
    label: "Enquiry",
    submenu: [],
  },
];
