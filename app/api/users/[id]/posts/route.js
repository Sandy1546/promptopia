import { connectToDB } from "@utils/database";
import Article from "@models/article";
import Prompt from "@models/prompt";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const prompts = await Prompt.find({ creator: params.id }).populate(
      "creator"
    );
    // console.log(prompts);

    return new Response(JSON.stringify(prompts), { status: 200 });
    // return new Response(prompts, {status: 200 })
  } catch (error) {
    return new Response("Failed to fetch prompts", { status: 500 });
    // console.log(error);
  }
};
