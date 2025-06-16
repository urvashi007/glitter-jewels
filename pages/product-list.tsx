'use client';

import { useState } from 'react';
import { Box, Container } from '@mui/material';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InnerBanner from '@/components/InnerBanner';
import ProductFilterSidebar from '@/components/ProductFilterSidebar';
import CardCollection from '@/components/CardCollection';
import ProductDetailsDrawer from '@/components/ProductDetailsDrawer';

type Product = {
  id: string;
  price: string;
  gold: string;
  diamond: string;
  image: string;
};

const filters = [
  {
    label: 'Price',
    options: [
      '₹5,000 to ₹10,000',
      '₹10,000 to ₹25,000',
      '₹25,000 to ₹50,000',
      '₹50,000 to ₹100,000',
      '₹100,000 and above',
    ],
  },
  {
    label: 'Diamond carat',
    options: ['0.1', '0.25', '0.5', '1.0'],
  },
  {
    label: 'Gold Weight',
    options: ['2g', '5g', '10g'],
  },
  {
    label: 'Diamond Shape',
    options: ['Round', 'Princess', 'Emerald'],
  },
];

const productsItem: Product[] = [
  {
    id: 'Ring-001',
    price: '₹25,000',
    gold: '2.5g',
    diamond: '0.25ct',
    image: './Categories/img1.png',
  },
  {
    id: 'Ring-002',
    price: '₹32,500',
    gold: '3g',
    diamond: '0.35ct',
    image: './Categories/img2.png',
  },
  {
    id: 'Pendant-003-1',
    price: '₹18,000',
    gold: '2g',
    diamond: '0.15ct',
    image: './Categories/img3.png',
  },
  {
    id: 'Bracelet-004-1',
    price: '₹45,000',
    gold: '5g',
    diamond: '0.5ct',
    image: './Categories/img1.png',
  },
  {
    id: 'Pendant-003-2',
    price: '₹18,000',
    gold: '2g',
    diamond: '0.15ct',
    image: './Categories/img3.png',
  },
  {
    id: 'Bracelet-004-2',
    price: '₹45,000',
    gold: '5g',
    diamond: '0.5ct',
    image: './Categories/img1.png',
  },
  {
    id: 'Pendant-003-3',
    price: '₹18,000',
    gold: '2g',
    diamond: '0.15ct',
    image: './Categories/img3.png',
  },
  {
    id: 'Bracelet-004-3',
    price: '₹45,000',
    gold: '5g',
    diamond: '0.5ct',
    image: './Categories/img1.png',
  },
  {
    id: 'Bracelet-004-3',
    price: '₹45,000',
    gold: '5g',
    diamond: '0.5ct',
    image: './Categories/img1.png',
  },
  {
    id: 'Bracelet-004-3',
    price: '₹45,000',
    gold: '5g',
    diamond: '0.5ct',
    image: './Categories/img1.png',
  },
  {
    id: 'Bracelet-004-3',
    price: '₹45,000',
    gold: '5g',
    diamond: '0.5ct',
    image: './Categories/img1.png',
  },
  {
    id: 'Bracelet-004-3',
    price: '₹45,000',
    gold: '5g',
    diamond: '0.5ct',
    image: './Categories/img1.png',
  },
];

export default function ProductListPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setDrawerOpen(true);
  };

  return (
    <>
      <Header
        logoLight="/white-logo.svg"
        logoDark="/logo.svg"
        searchEnabled={true}
        navItems={[
          { label: 'Our Expertise' },
          {
            label: 'Product',
            submenu: ['Bracelets', 'Earrings', 'Necklace', 'Pendant', 'Rings', 'View All'],
          },
          { label: 'Enquiry' },
        ]}
      />

      <InnerBanner
        title="Our Latest Collection"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Our Latest Collection' },
        ]}
      />

      <Container maxWidth="lg" sx={{ py: 8, }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4,}}>
          <Box sx={{ flex: { xs: '0 0 100%', md: '0 0 25%' }, maxWidth: { md: '25%' } }}>
            <ProductFilterSidebar filters={filters} />
          </Box>
          <Box sx={{ flex: 1 }}>
            <CardCollection
              products={productsItem}
              columns={3}
              showProductCountAndSort={true}
              onProductClick={handleProductClick}
            />
          </Box>
        </Box>
      </Container>

      <Footer />

      <ProductDetailsDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        product={selectedProduct}
      />
    </>
  );
}
