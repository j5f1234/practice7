import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async register() {
    const { ctx } = this;
    ctx.validate({
        name: 'string'
    })
    const { name } = ctx.request.body
    let user = await ctx.model.User.create({name})
    ctx.body = {
      success: true,
      data: { 
          userId:user.id
      } 
    }
    ctx.sesssion.id = user.id
  }

    public async login() {
    const { ctx } = this
    try {
      ctx.validate({
        userId :{type: 'number', min: 1}
      })
    } catch(e){
      ctx.body = {
        success: false,
        error: '参数错误'
      }
      return
    }
    const { userId } = ctx.request.body
    const { User } = ctx.model
    let user = await User.findByPk(userId)
    if ( user ) {
      ctx.body = {
        success: true
      }
      ctx.session.id = user.id
    }
    else {
      ctx.body = {
        success : false,
        error: '用户不存在'
      }
    }
  }

  public async logout(){
    this.ctx.session = null
    this.ctx.body = {
      success: true
    }
  }

  public async changeInfo(){
    const {ctx } = this
    const {name}=ctx.request.body
    let id = ctx.session.id
    let user = await ctx.model.User.findByPk(id)
    if(user) {
      user.name = name
      user.save()
      ctx.body = {
        success: true
      }
    }
  }

  public async getInfo(){
    const {ctx} = this
    let id = ctx.session.id
    let user = await ctx.model.User.findByPk(id)
    if(user){
      ctx.body = {
        success:true,
        data:{
          userId: user.id,
          name: user.name
        }
      }
    }
  }
}
