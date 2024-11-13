import sql from 'mssql';
import { z } from 'zod';

export const dbConfigSchema = z.object({
  server: z.string().min(1),
  database: z.string().min(1),
  user: z.string().min(1),
  password: z.string().min(1),
  port: z.number().int().positive(),
  trustServerCertificate: z.boolean().default(true),
});

export type DbConfig = z.infer<typeof dbConfigSchema>;

let poolConnection: sql.ConnectionPool | null = null;

export async function connectToDatabase(config: DbConfig) {
  try {
    if (poolConnection) {
      await poolConnection.close();
    }

    poolConnection = await sql.connect({
      ...config,
      options: {
        trustServerCertificate: true,
        encrypt: true
      }
    });

    return { success: true, message: 'Connected successfully' };
  } catch (error) {
    console.error('Database connection error:', error);
    return { success: false, message: error instanceof Error ? error.message : 'Failed to connect' };
  }
}

export async function getPool() {
  if (!poolConnection || !poolConnection.connected) {
    throw new Error('Database not connected');
  }
  return poolConnection;
}