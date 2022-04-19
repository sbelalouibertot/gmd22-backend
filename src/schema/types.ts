import { Request } from "express";

import { PrismaClient } from "@prisma/client";

export type GraphqlContext = {
  prisma: PrismaClient;
  request: Request;
};
