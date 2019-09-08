import { Request, Response } from "express";

/**
 * GET /
 * Home page.
 */
export const index = (req: Request, res: Response) => {
    res.send('<img src="https://pics.me.me/other-particle-particle-cern-cern-60903821.png" />');
};