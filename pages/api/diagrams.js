import { jsonResponse } from '../../src/interfaces';

export default function handler(req, res) {
  res.status(200).json(jsonResponse);
}
