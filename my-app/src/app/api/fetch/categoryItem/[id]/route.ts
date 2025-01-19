import { client } from "@/sanity/lib/client";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
export async function GET(req:NextApiRequest,content:{
    params:{
        id:string
    }
}){
    try{
        const query = `*[_type=="product"&&category._ref=="${content.params.id}"]`;
        const resp = await client.fetch(query);
        return NextResponse.json(resp);
    }
    catch{
    return new Response(
      JSON.stringify({ error: "Failed to fetch Categories" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
    }
}