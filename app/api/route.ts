import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    store: {
      name: "Slowburn",
      tagline: "Small-batch candles, made slow",
      description: "Hand-poured, small-batch candles in amber glass.",
      currency: "USD",
      shipping: {
        free_threshold: 60,
        standard: 6,
        expedited: 14,
      },
    },
    api: {
      version: "1.0",
      endpoints: {
        products: "/api/products",
        product_by_id: "/api/products/{id}",
        collection: "/api/collections/{id}",
      },
    },
  });
}
