import { PrismaClient } from '@prisma/client'
import { Pool } from "pg";
import getCurrentUser from '@/app/actions/getCurrentUser';
import { NextRequest, NextResponse } from 'next/server';
import prisma from "@/app/libs/prismadb"
async function createTable(tableName: string) {
    await prisma.$executeRawUnsafe(`CREATE TABLE ${tableName} (id SERIAL PRIMARY KEY);`);
}
function capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
export async function GET(
    request: any,
    response: any
) {
    try {
        const pool = new Pool({
            user: process.env.DATABASE_USERNAME,
            host: process.env.DATABASE_HOST,
            database: 'appDB', // Specify the database name here
            password: process.env.DATABASE_PASSWORD,
            port: process.env.DATABASE_PORT ? parseInt(process.env.DATABASE_PORT, 10) : undefined, 
        });
        //const client = await pool.connect();
        
        const currentUser = await getCurrentUser(); 
        const { slug } = response.params;
        console.log(slug);
        let u =  capitalizeFirstLetter(slug);
        // Check if the user is authenticated
        if (!currentUser) {
            // User is not authenticated, return an unauthorized response
            return new NextResponse("Unauthorized", { status: 401 });
        }
        // const tablesResult = await client.query(
        //     "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'"
        // );
        // let rowsResult = await client.query(`
        //     SELECT * FROM "${u}"
        // `);
        let rowsResult = await prisma.$queryRawUnsafe(`
            SELECT * FROM "${u}"
        `);
        // let fields = rowsResult.fields.map((row) => row);
        // let values = rowsResult.rows.map((row) => row);


       






        return NextResponse.json(rowsResult);
        
    } catch (error) {
        const errorMessage = "An error occurred while fetching listings";
        return new NextResponse(errorMessage, { status: 500 });
    }
}