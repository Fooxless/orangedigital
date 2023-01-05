import type { NextApiRequest, NextApiResponse } from 'next'

export default async function information(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  else {

    const videos = {
      pageName: ["Gallery", "Users Details"],
      userdetails: [{ name: "Connor Gryphon", description: "These is very adorable. I am loving this. Sometimes this pictures just are beautiful", picture: "user1.png", time: "10 minutes ago", likes: "4.5k", comments: "1.1k", },
      { name: "Connor Gryphon", description: "These is very adorable. I am loving this. Sometimes this pictures just are beautiful", picture: "user2.png", time: "10 minutes ago", likes: "4.5k", comments: "1.1k", },
      { name: "Connor Gryphon", description: "These is very adorable. I am loving this. Sometimes this pictures just are beautiful", picture: "user3.png", time: "10 minutes ago", likes: "4.5k", comments: "1.1k", },
      { name: "Connor Gryphon", description: "These is very adorable. I am loving this. Sometimes this pictures just are beautiful", picture: "user4.png", time: "10 minutes ago", likes: "4.5k", comments: "1.1k", }],
      photos: ["photo-1530584379127-80bf85c555ed.avif", "photo-1603314585442-ee3b3c16fbcf.avif", "photo-1611416517780-eff3a13b0359.avif"],
      detailsPage: {
        image: "detail-page-bg.png", title: "Lost on the Road to the mountains", author: "Alan Tiger",
        location: "Paris, France", release: "March 31st, 2016", likes: "4.5k", comments: "1.1k",
      },
    };

    res.status(200).json(videos)
  }


}

