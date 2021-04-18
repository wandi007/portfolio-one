import { NextApiResponse, NextApiRequest } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const userResponse = await fetch(`https://api.github.com/users/mah51`);
  const userReposResponse = await fetch(
    `https://api.github.com/users/mah51/repos?per_page=100`,
  );

  const user = await userResponse.json();
  const repositories = await userReposResponse.json();

  const notForked = repositories.filter((repo) => !repo.fork);
  const stars = notForked.reduce(
    (a: number, r: { stargazers_count: number }) => a + r.stargazers_count,
    0,
  );

  res.setHeader(
    `Cache-Control`,
    `public, s-maxage=1200, stale-while-revalidate=600`,
  );

  return res.status(200).json({
    followers: user.followers,
    stars,
  });
};