import HomeClient from '@/components/HomeClient';

// No necesitamos definir metadata aquí porque ya la tienes completa en layout.js
// Next.js usará automáticamente la del layout.

export default function Home() {
  return (
    <>
      <HomeClient />
    </>
  );
}