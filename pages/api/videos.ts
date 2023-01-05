import type { NextApiRequest, NextApiResponse } from 'next'

export default async function videos(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  else {

    const videos = ["photo-1530584379127-80bf85c555ed.avif", "photo-1603314585442-ee3b3c16fbcf.avif", "photo-1611416517780-eff3a13b0359.avif"];

    res.status(200).json(videos)
  }


}

