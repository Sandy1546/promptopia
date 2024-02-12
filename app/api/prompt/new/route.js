import { connectToDB } from "@utils/database";

import Article from "@models/article";
import Prompt from "@models/prompt";

export const POST = async (req) => {
  //we don't need res in this case
  const { userId, prompt, tag, isPublic } = await req.json();

  try {
    await connectToDB();
    const newPrompt = new Prompt({ creator: userId, prompt, tag, isPublic });

    await newPrompt.save();

    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};
