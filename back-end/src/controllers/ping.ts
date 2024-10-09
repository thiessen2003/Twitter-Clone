import { Request, Response } from "express";
import { ExtendedRequest } from "../types/extended-request";

export const ping = (req: Request, res: Response) => {
    res.json({ pong: true });
}

export const privatePing = (req: ExtendedRequest, res: Response) => {
    res.json({ pong: true, slug: req.userSlug });
}