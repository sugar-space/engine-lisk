import { UserModel } from "../model";
import { findByAddress, findByUsername } from "./find";

export async function add(body: Record<string, unknown>) {
  try {
    JSON.parse(JSON.stringify(body));
  } catch (e) {
    throw new Error("Invalid body");
  }

  if (!body.username || !body.address) {
    throw new Error("Username and address are required");
  }

  // const user = await findByUsername(body.username as string);
  // console.log("user", user);
  // if (user && body.description === "") {
  //   throw new Error("Username already exists");
  // }

  const addressed = await findByAddress(body.address as string);

  if (!addressed) {
    // if user new
    const newItem = new UserModel(body);
    newItem.username = String(body.username).toLowerCase();
    newItem.bio = String(body.bio).toLowerCase();
    await newItem.save();

    return newItem._id;
  } else {
    // if user updated
    await UserModel.findOneAndUpdate(
      { address: body.address },
      { username: body.username, bio: body.bio }
    );

    return addressed._id;
  }
}
