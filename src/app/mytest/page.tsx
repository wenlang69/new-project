'use client';

import React from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
const decimalPattern = /^[0-9]*[.,]?[0-9]*$/;
const brcMap = [
  { title: 'Mint', value: 'mint' },
  { title: 'Deploy', value: 'deploy' },
  { title: 'Transfer', value: 'transfer' },
];
const textMap = [
  { title: 'Single', value: 'single' },
  { title: 'Bulk', value: 'bulk' },
];
const MyTestPage = () => {
  const unisatLink =
    'https://unisat-wallet.medium.com/unisat-inscribe-is-now-live-1c742702841e';

  const [repeatMint, setRepeatMint] = React.useState('');

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.match(decimalPattern)) {
      setRepeatMint(event.target.value);
    }
  };
  return (
    <main>
      <section className='layout relative flex min-h-screen flex-col py-16 items-center	gap-4'>
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
        <Tabs defaultValue='brc20' className='w-full max-w-lg px-2'>
          <TabsList className='grid w-full grid-cols-2'>
            <TabsTrigger value='brc20'>Brc20</TabsTrigger>
            <TabsTrigger value='text'>Text</TabsTrigger>
          </TabsList>
          <TabsContent value='brc20'>
            <Card>
              <CardHeader>
                <CardDescription className='underline text-center'>
                  <a href='https://domo-2.gitbook.io/brc-20-experiment/'>
                    Read more details about brc-20
                  </a>
                </CardDescription>
              </CardHeader>
              <CardContent className='flex flex-col gap-4'>
                <RadioGroup
                  defaultValue='mint'
                  className='flex space-x-4 justify-center'
                >
                  {brcMap.map((brc, index) => (
                    <div className='flex items-center space-x-2' key={index}>
                      <RadioGroupItem value={brc.value} id={`brc${index}`} />
                      <Label htmlFor={`brc${index}`}>{brc.title}</Label>
                    </div>
                  ))}
                </RadioGroup>
                <div className='grid grid-cols-12 items-center gap-2'>
                  <Label
                    htmlFor='tick'
                    className='col-start-2 col-end-4  text-end'
                  >
                    Tick
                  </Label>
                  <Input
                    className='col-span-8'
                    id='tick'
                    type='text'
                    placeholder='4 characters like "abcd"'
                  />
                </div>
                <div className='grid grid-cols-12 items-center gap-2'>
                  <Label
                    htmlFor='amount'
                    className='col-start-2 col-end-4  text-end'
                  >
                    Amount
                  </Label>
                  <Input
                    className='col-span-8'
                    id='amount'
                    type='number'
                    defaultValue={1}
                    min={1}
                  />
                </div>
                <div className='grid grid-cols-12  items-center gap-2'>
                  <Label
                    htmlFor='repeat-mint'
                    className='lg:col-start-1 col-start-2 col-end-4  text-end'
                  >
                    Repeat Mint
                  </Label>
                  <Input
                    className='col-span-3'
                    id='repeat-mint'
                    type='number'
                    defaultValue={1}
                    min={1}
                    value={repeatMint}
                    onChange={handleOnChange}
                  />
                  <Slider
                    className='col-span-5'
                    defaultValue={[0]}
                    max={1000}
                    step={1}
                  />
                </div>

                {/* <Tips text='Booster is an order acceleration service that allows users to pay an additional fee to expedite transactions, particularly during periods of network congestion.' /> */}
                <p className='text-xs line-clamp-2 text-center'>
                  The Booster will be unavailable when the Repeat Mint is
                  greater than 200.
                </p>

                <Button>Next</Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value='text'>
            <Card>
              <CardHeader>
                <CardDescription className='text-center'>
                  If single, we will inscribe exactly what is there.
                  <br /> If bulk, we will inscribe one for every new line.
                </CardDescription>
              </CardHeader>
              <CardContent className='flex flex-col gap-4'>
                <RadioGroup
                  defaultValue='single'
                  className='flex space-x-4 justify-center'
                >
                  {textMap.map((t, index) => (
                    <div className='flex items-center space-x-2' key={index}>
                      <RadioGroupItem value={t.value} id={`t${index}`} />
                      <Label htmlFor={`t${index}`}>{t.title}</Label>
                    </div>
                  ))}
                </RadioGroup>
                <Textarea placeholder='any text here' rows={8} />
                <Button>Next</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </main>
  );
};

export default MyTestPage;
