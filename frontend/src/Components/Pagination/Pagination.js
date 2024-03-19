import React, { useEffect, useState } from "react";
import "./Pagination.css";
import { Link, useParams } from "react-router-dom";
export default function Pagination({
  items,
  itemsCount,
  pathname,
  setShownProducts,
}) {
  const [pagesCount, setPagesCount] = useState(null);
  const { page } = useParams();

  useEffect(() => {
    let endIndex = itemsCount * page;
    let startIndex = endIndex - itemsCount;
    let paginatedItems = items.slice(startIndex, endIndex);
    setShownProducts(paginatedItems);
    let pageNumber = Math.ceil(items.length / itemsCount);
    setPagesCount(pageNumber);
  }, [page, items]);
  return (
    <div className="courses-pagination">
      <ul className="courses__pagination-list">
        {Array(pagesCount)
          .fill(0)
          .map((item, index) => (
            <li className="courses__pagination-item">
              {index + 1 === Number(page) ? (
                <Link
                  to={`/products/${index + 1}`}
                  className="courses__pagination-link--active courses__pagination-link"
                >
                  {index + 1}
                </Link>
              ) : (
                <Link
                  to={`/products/${index + 1}`}
                  className="courses__pagination-link"
                >
                  {index + 1}
                </Link>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}
