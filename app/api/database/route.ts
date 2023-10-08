import { getSession } from '@/app/actions/getCurrentUser';
import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
	connectionString: process.env.DATABASE_URL // Replace with your PostgreSQL connection string
});
// Define a function to create tables and fields
async function createTablesAndFields(q: string) {
	const client = await pool.connect();
	try {
		// Create a table
		await client.query(q);
		await client.query(`
		  CREATE TABLE IF NOT EXISTS users (
		    id serial PRIMARY KEY,
		    username VARCHAR(255) NOT NULL,
		    email VARCHAR(255) NOT NULL
		  )
		`);
	} catch (error) {
		console.error('Error creating tables and fields:', error);
	} finally {
		// Release the client back to the pool
		client.release();
	}
}
export async function GET(req: NextRequest, res: NextResponse) {
	try {
		const session = await getSession();

		// Check if the user is authenticated
		if (!session) {
			// User is not authenticated, return an unauthorized response
			return new NextResponse('Unauthorized', { status: 401 });
		}
		const client = await pool.connect();
		// Fetch all databases
		const databasesResult = await client.query(
			'SELECT datname FROM pg_database WHERE datistemplate = false'
		);
		const databases = databasesResult.rows.map((row) => row.datname);
		let data: any = databases;
		client.release();
		return NextResponse.json(data);
	} catch (error) {
		const errorMessage = 'An error occurred while fetching listings';
		return new NextResponse(errorMessage, { status: 500 });
	}
}

export async function POST(req: NextRequest, res: NextResponse) {
	try {
		const session = await getSession();

		// Check if the user is authenticated
		if (!session) {
			// User is not authenticated, return an unauthorized response
			return new NextResponse('Unauthorized', { status: 401 });
		}

		const cr = await createTablesAndFields(`
		CREATE TABLE IF NOT EXISTS Component (
		  id serial PRIMARY KEY,
		  name VARCHAR(255) NOT NULL,
		  data json NOT NULL
		)
	  `);

		// Fetch all databases
		return NextResponse.json(cr);
	} catch (error) {
		const errorMessage = 'An error occurred while fetching listings';
		return new NextResponse(errorMessage, { status: 500 });
	}
}
