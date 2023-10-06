const { Pool } = require('pg-promise');

// Database configuration
const dbConfig = {
	user: process.env.DATABASE_USERNAME,
	host: process.env.DATABASE_HOST,
	database: process.env.DATABASE_NAME, // Specify the database name
	password: process.env.DATABASE_PASSWORD,
	port: process.env.DATABASE_PORT ? parseInt(process.env.DATABASE_PORT, 10) : undefined
};
export async function DBPool(config: any) {
	const poold = new Pool(config);
	return poold;
}

const pool = new Pool(dbConfig);
export default pool;
