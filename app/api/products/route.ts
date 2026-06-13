import { NextResponse } from "next/server";
import { PRODUCTS, COLLECTIONS, CATEGORIES } from "@/lib/products";

export async function GET() {
  return NextResponse.json({
    products: PRODUCTS,
    collections: COLLECTIONS,
    categories: CATEGORIES,
    meta: {
      total: PRODUCTS.length,
      generated: new Date().toISOString(),
    },
  });
}
