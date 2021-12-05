import { Model, INTEGER, DATE } from 'sequelize'
import { Application } from 'egg'

class Borrow extends Model{
    id: number
    bookId: number
    userId: number
    number: number
    readonly createdAt: Date
    readonly updatedAt: Date
}

export default ( app: Application) => {
    Borrow.init({
        id: { type: INTEGER, primaryKey: true, autoIncrement: true},
        bookId: INTEGER,
        userId: INTEGER,
        number: INTEGER,
        createdAt: DATE,
        updatedAt: DATE
    }, {
        sequelize: app.model,
        modelName: 'borrows',
        underscored: true
    })
    return Borrow
}