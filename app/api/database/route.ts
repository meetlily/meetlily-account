import prisma from "@/app/libs/prismadb"
import { NextRequest, NextResponse } from "next/server";
import { Pool } from "pg";
import { getSession } from '@/app/actions/getCurrentUser'


const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Replace with your PostgreSQL connection string
});
export async function GET(
  req: NextRequest,
  res: NextResponse,
) {
  
  try {
    const session = await getSession(); 
          
    // Check if the user is authenticated
    if (!session) {
        // User is not authenticated, return an unauthorized response
        return new NextResponse("Unauthorized", { status: 401 });
    }

    const client = await pool.connect();

    // Fetch all databases
    const databasesResult = await client.query(
      "SELECT datname FROM pg_database WHERE datistemplate = false"
    );
    const databases = databasesResult.rows.map((row) => row.datname);
    let data: any = databases;

    // Fetch all tables for each database
    // const tables: { [key: string]: string[] } = {};
    // for (const database of databases) {
    //   data.database[database] = [];
    //   const tablesResult = await client.query(
    //     `SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'`
    //   );
    //   const databaseTables = tablesResult.rows.map((row) => row.table_name);
    //   tables[database] = databaseTables;
      
    //   data.database[database] = {"name": database, tables: {}};
    //   for (const table of tables[database]) {
    //     data.database[database].tables[table] = {values: {},fields: {}};
    //     let rowsResult = await client.query(`
    //         SELECT * FROM "${table}"
    //     `);
    //     const fields = rowsResult.fields.map((row) => row);
    //     const values = rowsResult.rows.map((row) => row);
    //     data.database[database].tables[table].values = values;
    //     data.database[database].tables[table].fields = fields;
    //   }
    // }
    client.release();
    return NextResponse.json(data);
  } catch (error) {
    const errorMessage = "An error occurred while fetching listings";
    return new NextResponse(errorMessage, { status: 500 });
  }


}
    