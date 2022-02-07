// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type LeadsPackage = {
  leads: any[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<LeadsPackage>
) {
  res.status(200).json({
    leads: [
      { email: "felipeMelo@gmail.com" },
      { email: "JohnDae@gmail.com" }
    ]
  })
}
