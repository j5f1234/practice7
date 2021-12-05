import { Model, INTEGER,STRING,DATE } from 'sequelize'
import { Application } from 'egg'

class User extends Model{
    id: number
    name: string
    createdAt: Date
    updatedAt: Date

    static associate: ()=>any
}

export default ( app: Application) => {
    User.init({
        id: { type: INTEGER, primaryKey: true, autoIncrement: true},
        name: STRING,
        createdAt: DATE,
        updatedAt: DATE
    }, {
        sequelize: app.model,
        modelName: 'users',
        underscored: true
    })

    User.associate = ()=>{
        app.model.User.hasMany( app.model.Borrow, {foreignKey: 'userId' ,as: 'borrow'})
    }
    return User
}