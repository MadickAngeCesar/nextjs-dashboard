import 'dotenv/config'; 
import postgres from 'postgres';

const connectionString = process.env.POSTGRES_URL || process.env.POSTGRES_URL_NON_POOLING;

async function testConnection() {
  try {
    const sql = postgres(connectionString!, { ssl: 'require' });
    await sql`SELECT 1`;
    console.log('Database connection successful!');
    process.exit(0);
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1);
  }
}

testConnection();
