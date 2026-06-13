"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import type { Product, ProductSize } from "@/lib/products";
import { formatPrice } from "@/lib/format";
export { formatPrice };

export type CartItem = {
  productId: string;
  sizeId: string;
  name: string;
  sizeLabel: string;
  unitPrice: number;
  quantity: number;
  image: string;
};

type CartContextValue = {
  items: CartItem[];
  isOpen: boolean;
  itemCount: number;
  subtotal: number;
  open: () => void;
  close: () => void;
  addItem: (p: Product, size: ProductSize, qty?: number) => void;
  removeItem: (productId: string, sizeId: string) => void;
  updateQuantity: (productId: string, sizeId: string, qty: number) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "slowburn-cart-v1";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Hydrate from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setItems(parsed);
      }
    } catch {
      // ignore
    }
    setHydrated(true);
  }, []);

  // Persist
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items, hydrated]);

  const addItem = useCallback((p: Product, size: ProductSize, qty: number = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.productId === p.id && i.sizeId === size.id);
      if (existing) {
        return prev.map((i) =>
          i.productId === p.id && i.sizeId === size.id
            ? { ...i, quantity: i.quantity + qty }
            : i
        );
      }
      return [
        ...prev,
        {
          productId: p.id,
          sizeId: size.id,
          name: p.name,
          sizeLabel: size.label,
          unitPrice: size.price,
          quantity: qty,
          image: p.image,
        },
      ];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((productId: string, sizeId: string) => {
    setItems((prev) => prev.filter((i) => !(i.productId === productId && i.sizeId === sizeId)));
  }, []);

  const updateQuantity = useCallback((productId: string, sizeId: string, qty: number) => {
    if (qty <= 0) {
      setItems((prev) => prev.filter((i) => !(i.productId === productId && i.sizeId === sizeId)));
      return;
    }
    setItems((prev) =>
      prev.map((i) =>
        i.productId === productId && i.sizeId === sizeId ? { ...i, quantity: qty } : i
      )
    );
  }, []);

  const clear = useCallback(() => setItems([]), []);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = items.reduce((sum, i) => sum + i.unitPrice * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, isOpen, itemCount, subtotal, open, close, addItem, removeItem, updateQuantity, clear }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}

