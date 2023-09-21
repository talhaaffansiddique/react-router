import { Link, useParams } from "react-router-dom";

const SingleProduct = () => {
  //console.log(useParams);

  const { productId } = useParams();
  return (
    <section className="section product">
      <h4>{productId}</h4>
      <Link to="/products"> back to product</Link>
    </section>
  );
};

export default SingleProduct;
