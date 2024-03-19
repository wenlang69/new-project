'use client';

import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';

export default function Header({ className }: { className?: string }) {
  const router = useRouter();
  const { setTheme } = useTheme();
  return (
    <nav
      className={cn(
        'sticky top-0 z-30 h-16 w-full backdrop-blur transition-shadow duration-300 ltr:right-0 rtl:left-0 sm:h-20 3xl:h-24',
        className
      )}
    >
      <div className='flex h-full items-center justify-between px-4 sm:px-6 lg:px-8 3xl:px-10'>
        <div className='flex items-center'>
          <div
            onClick={() => router.push('/')}
            className='flex items-center xl:hidden'
          >
            Icon Logo
          </div>
        </div>
        <Button variant='outline' size='icon'>
          <SunIcon
            className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0'
            onClick={() => setTheme('dark')}
          />
          <MoonIcon
            className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100'
            onClick={() => setTheme('light')}
          />
        </Button>
      </div>
    </nav>
  );
}
