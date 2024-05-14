import React from "react";

interface props {
  params: { slug: string[] };
  searchParams: { sortOrder: string };
}

const Products = ({ params: { slug }, searchParams: { sortOrder } }: props) => {
  return (
    <div>
      Products {slug} -- {sortOrder}
    </div>
  );
};

export default Products;
