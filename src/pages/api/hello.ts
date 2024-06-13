import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../firebase";
import { doc, setDoc } from 'firebase/firestore';
type Data = {
  status: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ status: "DONE" });
}
