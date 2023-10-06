import getCurrentUser from '@/app/actions/getCurrentUser';
import axios from 'axios';
import { NextResponse } from 'next/server';
import { Pool } from 'pg';

async function getDatabaseName(): Promise<string> {
	const response = await axios.get('your_api_endpoint');
	return response.data.databaseName;
}

export async function GET(req: any, res: any) {
	try {
		const currentUser = await getCurrentUser();
		const queryParams = new URL(req.url).searchParams;
		const _filter: string | null = queryParams.get('_filter');
		const tableData = queryParams.get('_table');
		const { name } = res.params;
		console.log(queryParams, 'filter');
		// Check if the user is authenticated
		if (!currentUser) {
			// User is not authenticated, return an unauthorized response
			return new NextResponse('Unauthorized', { status: 401 });
		}

		const pool = new Pool({
			user: process.env.DATABASE_USERNAME,
			host: process.env.DATABASE_HOST,
			database: name, // Specify the database name here
			password: process.env.DATABASE_PASSWORD,
			port: process.env.DATABASE_PORT ? parseInt(process.env.DATABASE_PORT, 10) : undefined
		});
		const client = await pool.connect();

		// Fetch all tables
		const tablesResult = await client.query(
			"SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'"
		);
		const tableNames = tablesResult.rows.map((row) => row.table_name);
		let data: any = {};

		tableNames.map((t) => {
			data[t] = {};
			return data[t];
		});
		for (const table of tableNames) {
			let rowsResult = await client.query(`
                SELECT * FROM "${table}"
            `);

			let fields = rowsResult.fields.map((row) => row);
			let values = rowsResult.rows.map((row) => row);

			if (_filter === 'values') {
				data[table].values = values;
			} else if (_filter === 'fields') {
				data[table].fields = fields;
			} else {
				data[table].fields = fields;
				data[table].values = values;
			}
		}
		client.release();
		if (tableData) {
			if (_filter) {
				return NextResponse.json(data[tableData][_filter]);
			}
			return NextResponse.json(data[tableData]);
		}
		return NextResponse.json(data);
	} catch (error) {
		const errorMessage = 'An error occurred while fetching database tables';
		return new NextResponse(errorMessage, { status: 500 });
	}
}
