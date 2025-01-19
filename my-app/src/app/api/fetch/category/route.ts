import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";
export async function GET(){
    try{
        const query = `*[_type=="category"]{
  id,title,image,_id
}`;
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