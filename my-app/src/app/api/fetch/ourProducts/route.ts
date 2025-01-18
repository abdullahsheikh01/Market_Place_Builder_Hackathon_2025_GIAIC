import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function GET() {
    try{
        const query = `*[_type=="product"]{badge,image,title,priceWithoutDiscount,id,price,id}[0..7]`;
        const res = await client.fetch(query);
        return NextResponse.json(res)
}
catch{
    return "Unknown Error"
    }
}