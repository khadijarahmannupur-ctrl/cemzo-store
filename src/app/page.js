"use client";

import { useState, useMemo, useCallback } from "react";
import { useProducts } from "@/hooks/useProducts";
import SearchBar from "./components/ui/SearchBar";
import CategoryFilter from "./components/ui/CategoryFilter";
import ProductGrid from "./components/product/ProductGrid";
import ProductModal from "./components/product/ProductModal";


export default function Home() {
  const { products, categories, loading, error } = useProducts();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSearch = useCallback((val) => setSearch(val), []);
  const handleCategory = useCallback((cat) => setActiveCategory(cat), []);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchCat = activeCategory === "all" || p.category === activeCategory;
      const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [products, search, activeCategory]);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-8">

      {/* Heading */}
      <section>
        <p className="text-xs font-semibold uppercase tracking-widest text-[#8B5E3C] mb-1">
          Discover
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0A2947] dark:text-[#F3E4C9]">
          All Products
        </h1>
      </section>

      {/* Controls */}
      <section className="flex flex-col sm:flex-row gap-3 sm:items-center">
        <SearchBar onSearch={handleSearch} />
        <CategoryFilter
          categories={categories}
          active={activeCategory}
          onChange={handleCategory}
        />
      </section>

      {/* Result count */}
      {!loading && !error && (
        <p className="text-sm text-[#8B5E3C]">
          {filtered.length} product{filtered.length !== 1 ? "s" : ""} found
        </p>
      )}

      {/* Grid */}
      <ProductGrid
        products={filtered}
        loading={loading}
        error={error}
        onSelect={setSelectedProduct}
      />

      {/* Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

    </main>
  );
}