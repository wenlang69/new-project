import { Metadata } from 'next';
import * as React from 'react';

export const metadata: Metadata = {
  title: 'Test',
  description: 'Try something default',
};

export default function MyTestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
