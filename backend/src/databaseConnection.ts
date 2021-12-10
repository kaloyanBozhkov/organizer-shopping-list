import dotenv from 'dotenv'
import { createConnection } from 'mysql'

// setup env vars
dotenv.config()

const connection = createConnection({
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT || ''),
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
})

// Query the connectied db and return promise that resolves with the results or throws error
export const queryDB = <D>(query: string): Promise<D> =>
    new Promise((res) => {
        connection.query(query, (error, results) => {
            if (error) throw error
            res(results as D)
        })
    })

export type Connection = typeof connection
export type QueryDB = typeof queryDB

export default connection
