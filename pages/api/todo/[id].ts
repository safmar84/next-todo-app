import type { NextApiRequest, NextApiResponse } from 'next'

import todos from '../../../mock/mock-data'


const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query?.id

  if (!id) {
    return res.status(400).json('Bad request')
  }

/*   if (req.method === 'DELETE') {
    return res.status(202).json('Deleted')
  } */

  const [todo] = todos.filter((t) => t.id === id)
  if (!todo) {
    return res.status(404).json('Not found')
  }
  return res.status(200).json(todo)
}

export default handler