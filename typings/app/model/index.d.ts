// This file is created by egg-ts-helper@1.29.1
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBook from '../../../app/model/book';
import ExportBorrow from '../../../app/model/borrow';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Book: ReturnType<typeof ExportBook>;
    Borrow: ReturnType<typeof ExportBorrow>;
    User: ReturnType<typeof ExportUser>;
  }
}
