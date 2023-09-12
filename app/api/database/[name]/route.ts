import prisma from "@/app/libs/prismadb"
import { NextRequest, NextResponse } from "next/server";
import { Pool } from "pg";
import getCurrentUser, { getSession } from '@/app/actions/getCurrentUser'
import axios from 'axios';

async function getDatabaseName(): Promise<string> {
  const response = await axios.get('your_api_endpoint');
  return response.data.databaseName;
}



export async function GET(
  req: NextRequest,
  res: any,
) {
  
  try {
    const currentUser = await getCurrentUser(); 
    const { name } = res.params;
    // Check if the user is authenticated
    if (!currentUser) {
        // User is not authenticated, return an unauthorized response
        return new NextResponse("Unauthorized", { status: 401 });
    }
    
    const pool = new Pool({
        user: process.env.DATABASE_USERNAME,
        host: process.env.DATABASE_HOST,
        database: name, // Specify the database name here
        password: process.env.DATABASE_PASSWORD,
        port: process.env.DATABASE_PORT ? parseInt(process.env.DATABASE_PORT, 10) : undefined, 
    });
    const client = await pool.connect();

    // Fetch all tables
    const tablesResult = await client.query(
      "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'"
    );
    const tableNames = tablesResult.rows.map((row) => row.table_name);
    let data : any = {};

    tableNames.map((t)=>{
        data[t] = {fields: null, values: null};
        return data[t];
    })
    for (const table of tableNames) {
            
            let rowsResult = await client.query(`
                SELECT * FROM "${table}"
            `);

            let fields = rowsResult.fields.map((row) => row);
            let values = rowsResult.rows.map((row) => row);
            data[table].values = values;
            data[table].fields = fields;
    }

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
    const errorMessage = "An error occurred while fetching database tables";
    return new NextResponse(errorMessage, { status: 500 });
  }


}
    