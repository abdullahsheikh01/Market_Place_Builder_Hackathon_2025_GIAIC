import { NextRequest, NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function GET(req:NextRequest,content:{
    params:{
        id:number|string
    }
}) {
    try{
        const query = `*[_type=="product"&& id =="${content.params.id}"]{
  badge,image,title,priceWithoutDiscount,id
}[0]`;
        const res = await client.fetch(query);
        return NextResponse.json(res)
}
catch{
    return "Unknown Error"
    }
}