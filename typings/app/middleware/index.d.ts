// This file is created by egg-ts-helper@1.29.1
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportOnline from '../../../app/middleware/online';

declare module 'egg' {
  interface IMiddleware {
    online: typeof ExportOnline;
  }
}
