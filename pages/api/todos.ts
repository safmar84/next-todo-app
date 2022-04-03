import type { NextApiRequest, NextApiResponse } from 'next'

import todos from '../../mock/mock-data'


const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(todos)
}

export default handler
