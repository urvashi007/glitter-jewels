
import Header from '@/components/Header';
import InnerBanner from '@/components/InnerBanner';
import OrderList from '@/components/OrderList';

export default function CustomOrderPage() {
  return (
    <>
      <Header
        logoLight="/white-logo.svg"
        logoDark="/logo.svg"
        navItems={["catalogue", "Collections", "Diamonds",]}
        searchEnabled
      />
      <InnerBanner
  title="Make Custom Order"
  breadcrumbs={[
    { label: 'Home', href: '/' },
    { label: 'Custom Order' },
  ]}
/>
      <OrderList />
      {/* Rest of your page */}
    </>
  );
}

