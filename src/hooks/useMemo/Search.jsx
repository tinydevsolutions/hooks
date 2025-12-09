import React, { useState, useEffect, useMemo } from "react";

function ProductSearch() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("none");
  const [cart, setCart] = useState([]);

  // Fetch products
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  // Unique categories
  const categories = useMemo(() => {
    const allCats = products.map((p) => p.category);
    return ["all", ...new Set(allCats)];
  }, [products]);

  // Highlight function (feature #9)
  const highlight = (title) => {
    if (!query) return title;
    const regex = new RegExp(`(${query})`, "gi");
    return title.replace(regex, "<mark>$1</mark>");
  };

  // Filter + Sort using useMemo
  const filteredProducts = useMemo(() => {
    let list = [...products];

    // Search filter
    if (query.trim() !== "") {
      list = list.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Category filter
    if (category !== "all") {
      list = list.filter((p) => p.category === category);
    }

    // Sorting logic
    if (sortOrder === "low-high") {
      list.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "high-low") {
      list.sort((a, b) => b.price - a.price);
    }

    return list;
  }, [query, category, sortOrder, products]);

  // Add to cart (dummy)
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    alert(`${product.title} added to cart!`);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>🛒 Product Search</h2>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: 8, width: "250px", marginRight: 10 }}
      />

      {/* Category filter */}
      <select
        onChange={(e) => setCategory(e.target.value)}
        style={{ padding: 8 }}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat.toUpperCase()}
          </option>
        ))}
      </select>

      {/* Sorting */}
      <select
        onChange={(e) => setSortOrder(e.target.value)}
        style={{ padding: 8, marginLeft: 10 }}
      >
        <option value="none">Sort By Price</option>
        <option value="low-high">Low → High</option>
        <option value="high-low">High → Low</option>
      </select>

      <hr style={{ margin: "20px 0" }} />

      {/* Product list */}
      {filteredProducts.length === 0 ? (
        <p>No products found...</p>
      ) : (
        filteredProducts.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              padding: 15,
              marginBottom: 10,
              display: "flex",
              alignItems: "center",
              borderRadius: 10,
            }}
          >
            {/* Product Image */}
            <img
              src={product.thumbnail}
              alt={product.title}
              style={{
                width: 90,
                height: 90,
                objectFit: "cover",
                borderRadius: 8,
                marginRight: 20,
              }}
            />

            <div style={{ flex: 1 }}>
              <h3
                dangerouslySetInnerHTML={{ __html: highlight(product.title) }}
              ></h3>
              <p>₹ {product.price}</p>
              <p style={{ fontSize: 13, color: "gray" }}>{product.category}</p>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => addToCart(product)}
              style={{
                padding: "8px 16px",
                background: "black",
                color: "white",
                border: "none",
                borderRadius: 5,
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default ProductSearch;
