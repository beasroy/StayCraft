import { getRoomReviews } from "@/libs/apis";
import { NextResponse } from "next/server";

export async function GET(req: Request,
  {params}:{params:{id: string}}
  ){
    const roomId=params.id;
    try {
        const roomReviews=await getRoomReviews(roomId);
        return NextResponse.json(roomReviews,{
            status:200,
            statusText:"Success"
        })
        
    } catch (error) {
        console.log("getting review failed",error);
        return new NextResponse("unable to fetch",{status:400})
    }

}