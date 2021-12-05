import { Controller } from 'egg';

export default class BookController extends Controller {
  public async addNew() {
    const { ctx } = this;
    const { name,total } = ctx.request.body
    let book = await ctx.model.Book.create({name,total,remain:total})
    ctx.body = {
      success: true,
      data: {
        bookid: book.id
      }
    }
  }

  public async borrow() {
    const {ctx} = this
    const { bookId, number } = ctx.request.body
    let id = ctx.session.id
    const { Book, Borrow }=ctx.model
    Borrow.create({bookId: bookId, userId:id, number: number })
    Book.decrement('remain', {by:number, where: {id: bookId}})
    ctx.body = {
      success: true,
      data: {
        id: id,
        bookId: bookId
      }
    }
  }
} 
