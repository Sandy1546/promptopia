import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

//GET path
export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const prompt = await Prompt.findById(params.id).populate("creator");
    if (!prompt) return new Response("Prompt not found", { status: 404 });
    // console.log(prompts);

    return new Response(JSON.stringify(prompt), { status: 200 });
    // return new Response(prompts, {status: 200 })
  } catch (error) {
    return new Response("Failed to fetch prompts", { status: 500 });
    // console.log(error);
  }
};

//PATCH (update)
export const PATCH = async (request, { params }) => {
  const { prompt, tag, isPublic } = await request.json();

  try {
    await connectToDB();

    const existingPrompt = await Prompt.findById(params.id);

    if (!existingPrompt)
      return new Response("Prompt not found", { status: 404 });

    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;
    existingPrompt.isPublic = isPublic;

    await existingPrompt.save();

    return new Response(JSON.stringify(existingPrompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to update prompt", { status: 500 });
  }
};

//DELETE (delete)
export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();

    await Prompt.findByIdAndDelete(params.id);

    return new Response("Prompt deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Failed to delete the prompt", { status: 500 });
  }
};
