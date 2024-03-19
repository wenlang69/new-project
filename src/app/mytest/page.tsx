'use client';

import React from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Tabs, TabsContent } from '@/components/ui/tabs';

const MyTestPage = () => {
  const unisatLink =
    'https://unisat-wallet.medium.com/unisat-inscribe-is-now-live-1c742702841e';
  return (
    <main>
      <section className='layout relative flex min-h-screen flex-col py-16 items-center	gap-4 font-mono'>
        <h2 className=' text-xl font-medium subpixel-antialiased lg:text-2xl  text-amber-400'>
          UniSat Inscribe
        </h2>
        <div className='text-center'>
          UniSat only charges the service fee for{' '}
          <span className='text-amber-400'>the first 25 inscriptions</span>
          <br />
          in a single inscribing batch order, up to a maximum of 1000
          inscriptions.
        </div>
        <Button
          variant='link'
          className='text-amber-400 underline'
          onClick={() => window.open(unisatLink)}
        >
          How to inscribe?
        </Button>

        <div className='space-x-2 space-y-2'>
          <Button variant='secondary'>Secondary</Button>
          <Button variant='destructive'>Destructive</Button>
          <Button variant='outline'>Outline</Button>
          <Button variant='ghost'>Ghost</Button>
        </div>
        <div className='mt-4'>
          <Tabs defaultValue='text' className='w-md'>
            <div className='grid w-full grid-cols-4 gap-4'>
              <Button variant='outline' value='text'>
                Text
              </Button>
              <Button variant='outline' value='brc20'>
                Brc20
              </Button>
            </div>

            <TabsContent value='text'>
              <Card>
                <CardHeader>
                  <CardTitle></CardTitle>
                  <CardDescription>
                    If single, we will inscribe exactly what is there.
                    <br /> If bulk, we will inscribe one for every new line.
                  </CardDescription>
                </CardHeader>
                <CardContent className='space-y-2'>
                  <RadioGroup defaultValue='single' className='flex'>
                    <div className='flex items-center space-x-2'>
                      <RadioGroupItem value='single' id='r1' />
                      <Label htmlFor='r1'>Single</Label>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <RadioGroupItem value='bulk' id='r2' />
                      <Label htmlFor='r2'>Bulk</Label>
                    </div>
                  </RadioGroup>

                  <div className='space-y-1'>
                    <Label htmlFor='name'>Name</Label>
                    <Input id='name' defaultValue='Pedro Duarte' />
                  </div>
                  <div className='space-y-1'>
                    <Label htmlFor='username'>Username</Label>
                    <Input id='username' defaultValue='@peduarte' />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save changes</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value='brc20'>
              <Card>
                <CardHeader>
                  <CardDescription>
                    <a
                      href='https://domo-2.gitbook.io/brc-20-experiment/'
                      className='underline'
                    >
                      Read more details about brc-20
                    </a>
                  </CardDescription>
                </CardHeader>
                <CardContent className='space-y-2'>
                  <div className='space-y-1'>
                    <Label htmlFor='current'>Current password</Label>
                    <Input id='current' type='password' />
                  </div>
                  <div className='space-y-1'>
                    <Label htmlFor='new'>New password</Label>
                    <Input id='new' type='password' />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save password</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  );
};

export default MyTestPage;
