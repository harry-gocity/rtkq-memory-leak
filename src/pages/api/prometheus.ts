import { NextApiRequest, NextApiResponse } from "next";
import { collectDefaultMetrics, register } from "prom-client";

collectDefaultMetrics({});

const prometheus = async (_req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader("Content-type", register.contentType);
  res.send(await register.metrics());
};

export default prometheus;
