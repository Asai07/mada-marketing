'use client';

import { usePathname } from 'next/navigation';
import HeaderManager from './HeaderManager';
import FloatingChat from './FloatingChat';

export default function PublicElements() {
  const pathname = usePathname();

  if (pathname?.startsWith('/admin')) {
    return null;
  }

  return (
    <>
      <HeaderManager />
      <FloatingChat />
    </>
  );
}
