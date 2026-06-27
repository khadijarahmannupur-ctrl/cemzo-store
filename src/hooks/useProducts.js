"use client";

import { useEffect, useState } from "react";
import { fetchProducts, fetchCategories } from "@/services/productService";

export function useProducts() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        Promise.all([fetchProducts(), fetchCategories()])
            .then(([prods, cats]) => {
                setProducts(prods);
                setCategories(["all", ...cats]);
            })
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    return { products, categories, loading, error };
}