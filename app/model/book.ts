import { Model, INTEGER, STRING, DATE } from 'sequelize'
import { Application } from 'egg'

class Book extends Model{
    id: number
    name: string
    total: number
    remain: number
    readonly createdAt: Date
    readonly updatedAt: Date
}

export default ( app: Application) => {
    Book.init({
        id: { type: INTEGER, primaryKey: true, autoIncrement: true},
        name: STRING,
        total: INTEGER,
        remain: INTEGER,
        createdAt: DATE,
        updatedAt: DATE
    }, {
        sequelize: app.model,
        modelName: 'books',
        underscored: true
    })
    return Book
}