import { client } from "@/sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";
export async function GET(req:NextRequest,content:{
    params:Promise<{id:string}>}
){
    try{
      const id = await(content.params);
        const query = `*[_type=="product"&&category._ref=="${id.id}"]`;
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