import type { Connection, QueryDB } from '../databaseConnection'

export type ResolversContext = {
    connection: Connection
    queryDB: QueryDB
}
