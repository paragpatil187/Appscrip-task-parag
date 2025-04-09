"use client";
import React, { useState } from "react";
import styles from "../styles/ProductCard.module.css";

const ProductCard = ({
  id,
  title,
  price,
  image,
  description,
  category,
  rating,
}) => {
  const [imageError, setImageError] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAddToCart = () => {
    console.log(`Product ${id} added to cart:`, title);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const toggleWishlist = (e) => {
    e.preventDefault();
    setIsWishlisted(!isWishlisted);
    console.log(
      `Product ${id} ${!isWishlisted ? "added to" : "removed from"} wishlist:`,
      title,
    );
  };

  // Format price to show 2 decimal places
  const formattedPrice = parseFloat(price).toFixed(2);

  // Calculate installment price (4 payments)
  const installmentPrice = (price / 4).toFixed(2);

  // Truncate title if too long
  const truncatedTitle =
    title.length > 30 ? `${title.substring(0, 30)}...` : title;

  // Fallback image if the original fails to load
  const fallbackImage =
    "https://placehold.co/300x300/f0f0f0/cccccc?text=Product+Image";

  return (
    <article className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img
          src={imageError ? fallbackImage : image}
          alt={title}
          className={styles.productImage}
          loading="lazy"
          onError={handleImageError}
        />
        {rating && rating.count < 100 && (
          <div className={styles.outOfStock}>LOW STOCK</div>
        )}
      </div>

      <div className={styles.productInfo}>
        <div className={styles.nameWishlistContainer}>
          <h3 className={styles.productName}>{truncatedTitle}</h3>
          <button
            className={`${styles.wishlistButton} ${isWishlisted ? styles.active : ""}`}
            onClick={toggleWishlist}
            aria-label={
              isWishlisted ? "Remove from wishlist" : "Add to wishlist"
            }
            aria-pressed={isWishlisted}
          >
            <svg
              className={styles.heartIcon}
              viewBox="0 0 24 24"
              width="18"
              height="18"
              stroke="currentColor"
              strokeWidth="2"
              fill={isWishlisted ? "currentColor" : "none"}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        </div>
        <p className={styles.productPrice}>
          ${formattedPrice} or 4 payments of ${installmentPrice} with sezzle
        </p>
      </div>

      <button
        className={styles.addToCartButton}
        onClick={handleAddToCart}
        aria-label="Add to cart"
      >
        <i className="tiTiShoppingCart" />
      </button>
    </article>
  );
};

export default ProductCard;
