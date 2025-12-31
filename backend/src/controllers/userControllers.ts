import type { Request, Response } from "express";
import * as queries from "../db/queries";
import { getAuth } from "@clerk/express";

export async function syncUsers(req: Request, res: Response) {
  try {
    const { userId } = getAuth(req);
    if (!userId) {
      return res.status(401).json({ err: "Unauthorized" });
    }
    const { email, name, imageUrl } = req.body;
    if (!email || !name || !imageUrl) {
      return res.status(400).json({ err: "Missing required fields" });
    }
    const user = await queries.upsertUser({
      id: userId,
      email,
      name,
      imageUrl,
    });
    res.status(200).json({ message: "User synced successfully", user });
  } catch (err) {
    console.error("Error syncing users:", err);
    res.status(500).json({ err: "Faild to sync users" });
  }
}
