import { User } from "../models/user.model.js";
export const authCallback = async (req, res) => {
  try {
    const { id, firstName, lastName, imageUrl } = req.body;

    const user = await User.findOne({ clerkId: id });

    if (!user) {
      await User.create({
        clerkId: id,
        fullName: `${firstName || ""} ${lastName || ""}`.trim(),
        imageUrl,
      });
    }
    console.log("creating user");
    res.status(200).json({ success: true });
  } catch (error) {
    console.log("Error in auth", error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
};
