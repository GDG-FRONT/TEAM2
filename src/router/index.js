import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Loading from '../components/Loading';
import Layout from '../layout/Layout';
import WeightInput from '../page/setup/pages/WeightInput';
import AgeInput from '../page/setup/pages/AgeInput';

const Setup = lazy(() => import('../page/setup/InitialSetup'));
const Main = lazy(() => import('../page/main'));
const Record = lazy(() => import('../page/record'));
const Statistic = lazy(() => import('../page/statistic'));

//음료페이지//
const WaterPage = lazy(() => import('../page/route/components/waterPage'));
const CoffeePage = lazy(() => import('../page/route/components/coffeePage'));
const JuicePage = lazy(() => import('../page/route/components/juicePage'));
const MilkPage = lazy(() => import('../page/route/components/milkPage'));
const SodaPage = lazy(() => import('../page/route/components/sodaPage'));
const TeaPage = lazy(() => import('../page/route/components/teaPage'));
const Warning = lazy(() => import('../page/route/components/warning'));
const Keypad = lazy(() => import('../page/route/components/keypad.jsx'));
const KeypadObj = lazy(() => import('../page/route/components/keypad-obj.jsx'));
const MainPage = lazy(() => import('../page/main/components/MainPage.jsx'));

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<Loading />}>
            <Setup />
          </Suspense>
        ),
      },

      {
        path: 'main',
        element: (
          <Suspense fallback={<Loading />}>
            <Main />
          </Suspense>
        ),
      },

      {
        path: 'record',
        element: (
          <Suspense fallback={<Loading />}>
            <Record />
          </Suspense>
        ),
      },

      {
        path: 'statistic',
        element: (
          <Suspense fallback={<Loading />}>
            <Statistic />
          </Suspense>
        ),
      },

      //
      {
        path: 'water',
        element: (
          <Suspense fallback={<Loading />}>
            <WaterPage />
          </Suspense>
        ),
      },
      {
        path: 'coffee',
        element: (
          <Suspense fallback={<Loading />}>
            <CoffeePage />
          </Suspense>
        ),
      },
      {
        path: 'juice',
        element: (
          <Suspense fallback={<Loading />}>
            <JuicePage />
          </Suspense>
        ),
      },
      {
        path: 'milk',
        element: (
          <Suspense fallback={<Loading />}>
            <MilkPage />
          </Suspense>
        ),
      },
      {
        path: 'soda',
        element: (
          <Suspense fallback={<Loading />}>
            <SodaPage />
          </Suspense>
        ),
      },
      {
        path: 'tea',
        element: (
          <Suspense fallback={<Loading />}>
            <TeaPage />
          </Suspense>
        ),
      },
      {
        path: 'keypad',
        element: (
          <Suspense fallback={<Loading />}>
            <Keypad />
          </Suspense>
        ),
      },
      {
        path: 'keypadObj',
        element: (
          <Suspense fallback={<Loading />}>
            <KeypadObj />
          </Suspense>
        ),
      },
      {
        path: 'warning',
        element: (
          <Suspense fallback={<Loading />}>
            <Warning />
          </Suspense>
        ),
      },
      {
        path: 'MainPage',
        element: (
          <Suspense fallback={<Loading />}>
            <MainPage />
          </Suspense>
        ),
      },
      {
        path: 'weight-input',
        element: (
          <Suspense fallback={<Loading />}>
            <WeightInput />
          </Suspense>
        ),
      },
      {
        path: 'Age-input',
        element: (
          <Suspense fallback={<Loading />}>
            <AgeInput />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
