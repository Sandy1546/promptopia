import { connectToDB } from "@utils/database";

import Article from "@models/article";

export const POST = async (req) => { //we don't need res in this case
    const {userId, prompt, tag} = await req.json();

    try {
        await connectToDB();
        const newPrompt = new Article({creator: userId, prompt, tag})

        await newPrompt.save();

        return new Response(JSON.stringify(newPrompt), {status: 201})
    } catch (error) {
        return new Response("Failed to create a new prompt", {status: 500})
    }
}  