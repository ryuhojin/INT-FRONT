import { NextRequest, NextFetchEvent, NextResponse } from "next/server";
export function middleware(req: NextRequest, ev: NextFetchEvent) {
    return NextResponse.next();
}
