import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function GET() {
    try{
        const query = `*[_type=="product" && "featured" in tags]{
  badge,image,title,priceWithoutDiscount,id,price
}`;
        const res = await client.fetch(query);
        return NextResponse.json(res)
}
catch (error) {
    console.log(error)
    return new Response(
      JSON.stringify({ error: "Failed to fetch categories" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}