import { getSession } from 'next-auth/react';
import MongoDBAdapter from './MongoDBAdapter';

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  if (session.user.role !== 'admin') {
    res.status(403).json({ message: 'Forbidden' });
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400).json({ message: 'Missing Required Fields' });
    return;
  }

  const adapter = MongoDBAdapter();
  const user = await adapter.createUser({
    name,
    email,
    password,
  });

  res.status(201).json({ user });
}
