"use client";
import React, { useState, useEffect } from "react";
import styles from "../styles/FilterSidebar.module.css";

const FilterCategory = ({ title, options, onFilterChange }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleCheckboxChange = (option) => {
    let newSelectedOptions;
    if (selectedOptions.includes(option)) {
      newSelectedOptions = selectedOptions.filter((item) => item !== option);
    } else {
      newSelectedOptions = [...selectedOptions, option];
    }
    setSelectedOptions(newSelectedOptions);

    // Notify parent component about the change
    onFilterChange(title, newSelectedOptions);
  };

  return (
    <div className={styles.filterCategory}>
      <button
        className={styles.filterTitle}
        onClick={toggleExpand}
        aria-expanded={isExpanded}
        aria-controls={`filter-options-${title.toLowerCase().replace(/\s+/g, "-")}`}
      >
        {title}
        <span
          className={`${styles.toggleArrow} ${isExpanded ? styles.expanded : ""}`}
        >
          &#9662;
        </span>
      </button>

      {isExpanded && (
        <div
          id={`filter-options-${title.toLowerCase().replace(/\s+/g, "-")}`}
          className={styles.filterOptions}
        >
          {options.map((option, index) => (
            <label key={index} className={styles.checkboxLabel}>
              <input
                type="checkbox"
                className={styles.checkbox}
                checked={selectedOptions.includes(option)}
                onChange={() => handleCheckboxChange(option)}
              />
              <span className={styles.checkboxCustom}></span>
              <span className={styles.optionText}>{option}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

const FilterSidebar = ({ isOpen, onClose, updateActiveFilters }) => {
  const [selectedFilters, setSelectedFilters] = useState({});
  const [totalActiveFilters, setTotalActiveFilters] = useState(0);

  const filterCategories = [
    {
      id: 1,
      title: "CUSTOMIZABLE",
      options: [
        "Custom Color",
        "Custom Size",
        "Custom Material",
        "Custom Print",
        "Custom Embroidery",
      ],
    },
    {
      id: 2,
      title: "IDEAL FOR",
      options: ["Men", "Women", "Children", "Teens", "Elderly"],
    },
    {
      id: 3,
      title: "OCCASION",
      options: ["Casual", "Formal", "Business", "Party", "Sports", "Outdoor"],
    },
    {
      id: 4,
      title: "WORK",
      options: ["Office", "Field", "Home", "Travel", "Construction"],
    },
    {
      id: 5,
      title: "FABRIC",
      options: [
        "Cotton",
        "Polyester",
        "Wool",
        "Silk",
        "Linen",
        "Denim",
        "Leather",
      ],
    },
    {
      id: 6,
      title: "SEGMENT",
      options: ["Premium", "Mid-range", "Budget", "Luxury", "Eco-friendly"],
    },
    {
      id: 7,
      title: "SUITABLE FOR",
      options: ["Summer", "Winter", "Spring", "Fall", "All Seasons"],
    },
    {
      id: 8,
      title: "RAW MATERIALS",
      options: ["Organic", "Synthetic", "Recycled", "Natural", "Blended"],
    },
    {
      id: 9,
      title: "PATTERN",
      options: [
        "Solid",
        "Striped",
        "Checkered",
        "Floral",
        "Geometric",
        "Abstract",
      ],
    },
  ];

  // Handle filter changes from child components
  const handleFilterChange = (category, selectedOptions) => {
    const newSelectedFilters = {
      ...selectedFilters,
      [category]: selectedOptions,
    };

    setSelectedFilters(newSelectedFilters);
  };

  // Calculate total active filters whenever selectedFilters changes
  useEffect(() => {
    let count = 0;
    Object.values(selectedFilters).forEach((options) => {
      count += options.length;
    });

    setTotalActiveFilters(count);

    // Update parent component if the callback exists
    if (updateActiveFilters) {
      updateActiveFilters(count);
    }
  }, [selectedFilters, updateActiveFilters]);

  // Clear all filters
  const handleClearAll = () => {
    setSelectedFilters({});
  };

  // Apply filters and close the mobile panel
  const handleApplyFilters = () => {
    // Here you would typically apply the filters to the product list
    // For now, we just close the panel
    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className={styles.desktopSidebar}>
        <div className={styles.filterContent}>
          {filterCategories.map((category) => (
            <FilterCategory
              key={category.id}
              title={category.title}
              options={category.options}
              onFilterChange={handleFilterChange}
            />
          ))}

          {totalActiveFilters > 0 && (
            <button className={styles.clearAllButton} onClick={handleClearAll}>
              Clear All Filters ({totalActiveFilters})
            </button>
          )}
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div className={styles.mobileOverlay} onClick={onClose}>
          <div
            className={styles.mobileFilterPanel}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Product filters"
          >
            <div className={styles.filterHeader}>
              <h2 className={styles.filterHeading}>
                Filters
                {totalActiveFilters > 0 && (
                  <span className={styles.mobileFilterCount}>
                    ({totalActiveFilters})
                  </span>
                )}
              </h2>
              <button
                className={styles.closeButton}
                onClick={onClose}
                aria-label="Close filters"
              >
                ×
              </button>
            </div>

            <div className={styles.filterScrollArea}>
              {filterCategories.map((category) => (
                <FilterCategory
                  key={category.id}
                  title={category.title}
                  options={category.options}
                  onFilterChange={handleFilterChange}
                />
              ))}
            </div>

            <div className={styles.filterActions}>
              <button
                className={styles.clearButton}
                onClick={handleClearAll}
                disabled={totalActiveFilters === 0}
              >
                Clear All
              </button>
              <button
                className={styles.applyButton}
                onClick={handleApplyFilters}
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FilterSidebar;
