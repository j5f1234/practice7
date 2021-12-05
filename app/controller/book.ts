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

	public async getBookInfo() {
		const {ctx } = this
		const{ bookId,page,limit} = ctx.query
		let bookId2 = parseInt( bookId )
		let page2 = parseInt(page)
		let limit2 = parseInt(limit)
		const data = await ctx.model.Borrow.findAndCountAll({
				where: { bookId: bookId2 },
				limit: limit2,
				offset: limit2 * (page2-1),
				include: [{
					model: ctx.model.User,
					as: 'user',
					attributes: ['name'],
					required: false
				}]
			}
		)
		ctx.body = {
			success: true,
			data
		}
	}

	public async delete(){
		const {ctx} = this
		const{id} = ctx.params
		let id2 = parseInt(id)
		ctx.model.Borrow.destroy({where:{id:id2}})
		ctx.body = {
			success: true,
		}
	}
} 
