import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App';

// 개발 환경에서 데모 컴포넌트들을 직접 임포트
import * as demo01 from './demos/01-basic-structure';
import * as demo02 from './demos/02-components';
import * as demo03 from './demos/03-state-management';
import * as demo04 from './demos/04-event-handling';
import * as demo05 from './demos/05-conditional-and-list-rendering';
import * as demo06 from './demos/06-component-reuse';
import * as demo07 from './demos/07-use-effect-async';
import * as demo08 from './demos/08-use-reducer';
import * as demo09 from './demos/09-use-effect-deps';
import * as demo10 from './demos/10-custom-hook';
import * as demo11 from './demos/11-styling';
import * as demo12 from './demos/12-error-boundary';
import * as demo13 from './demos/13-lazy-loading';
import * as demo14 from './demos/14-testing';
import * as demo15 from './demos/15-utils-types';

const demos = [
  { path: '01', element: <demo01.default /> },
  { path: '02', element: <demo02.default /> },
  { path: '03', element: <demo03.default /> },
  { path: '04', element: <demo04.default /> },
  { path: '05', element: <demo05.default /> },
  { path: '06', element: <demo06.default /> },
  { path: '07', element: <demo07.default /> },
  { path: '08', element: <demo08.default /> },
  { path: '09', element: <demo09.default /> },
  { path: '10', element: <demo10.default /> },
  { path: '11', element: <demo11.default /> },
  { path: '12', element: <demo12.default /> },
  { path: '13', element: <demo13.default /> },
  { path: '14', element: <demo14.default /> },
  { path: '15', element: <demo15.default /> },
];

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Navigate to="/demo/01" replace /> },
      {
        path: 'demo',
        children: demos,
      },
       { path: '*'}
    ],
  },
]); 