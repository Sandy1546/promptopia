import { connectToDB } from "@utils/database";
import Members from "@models/members";


export const POST = async(req) => {
    const {email, password} = await req.json();
    console.log("hello");
    try {
        await connectToDB();
        const newMember = new Members({ email, password})

        await newMember.save();

        return new Response(JSON.stringify(newMember), {status: 201})
    } catch (error) {
        return new Response("Failed to create a new prompt", {status: 500})
    }
    // console.log(email)
}

export const GET = async(req, {params}) => {

    try {
        await connectToDB();

        const member = await Members.findOne

    } catch (error) {
        
    }

    try {
        await connectToDB();

        const prompt = await Article.findById(params.id).populate('creator')
        if(!prompt) return new Response('Prompt not found', {status: 404})
        // console.log(prompts);

        return new Response(JSON.stringify(prompt), {status: 200 })
        // return new Response(prompts, {status: 200 })
    } catch (error) {
        return new Response('Failed to fetch prompts', {status: 500 })
        // console.log(error);
    }

}