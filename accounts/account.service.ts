import bcrypt from 'bcryptjs';
import { query } from '../_helpers/db';

export const register = async (params: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}) => {
    const existing: any = await query(
        'SELECT id FROM accounts WHERE email = ?',
        [params.email]
    );
    if (existing.length > 0) {
        throw new Error(`Email "${params.email}" is already registered`);
    }

    const passwordHash = await bcrypt.hash(params.password, 10);

    await query(
        `INSERT INTO accounts (firstName, lastName, email, passwordHash) VALUES (?, ?, ?, ?)`,
        [params.firstName, params.lastName, params.email, passwordHash]
    );

    return { message: 'Registration successful' };
};