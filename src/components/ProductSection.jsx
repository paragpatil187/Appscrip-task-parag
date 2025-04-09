"use client";
import React, { useState } from "react";
import styles from "../styles/ProductSection.module.css";
import FilterSidebar from "./FilterSidebar";
import ProductGrid from "./ProductGrid";

const ProductSection = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);

    // Prevent body scrolling when filter overlay is open
    if (!isFilterOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const closeFilter = () => {
    setIsFilterOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <section className={styles.productSection}>
      <h2 className={styles.title}>DISCOVER OUR PRODUCTS</h2>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
        scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
      </p>

      {/* Mobile Filter Toggle Button */}
      <button
        className={styles.filterToggle}
        onClick={toggleFilter}
        aria-expanded={isFilterOpen}
        aria-controls="filter-sidebar"
      >
        Filters
        <span
          className={`${styles.filterArrow} ${isFilterOpen ? styles.open : ""}`}
        >
          &#9662;
        </span>
      </button>

      <div className={styles.contentContainer}>
        <FilterSidebar isOpen={isFilterOpen} onClose={closeFilter} />
        <ProductGrid />
      </div>
    </section>
  );
};

export default ProductSection;
