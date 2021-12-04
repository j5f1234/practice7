import { Model, INTEGER,STRING,DATE } from 'sequelize'
import { Application } from 'egg'

class User extends Model{
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
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
    return User
}