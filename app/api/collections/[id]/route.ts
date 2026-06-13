import { NextResponse } from "next/server";
import { getProductsByCollection, COLLECTIONS } from "@/lib/products";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const collection = COLLECTIONS.find((c) => c.id === id);
  if (!collection) {
    return NextResponse.json({ error: "not_found" }, { status: 404 });
  }
  return NextResponse.json({
    collection,
    products: getProductsByCollection(collection.id),
  });
}
