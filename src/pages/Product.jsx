import { useContext } from "react";
import { useParams } from 'react-router-dom'
import { ShopContext } from "../context/ShopContext";
import Breadcrum from "../components/breadCrums/Breadcrum";
import ProductDisplay from "../components/productDisplay/ProductDisplay";
import DescriptionBox from "../components/descriptionBox/DescriptionBox";
import RelatedProducts from "../components/relatedProducts/RelatedProducts";

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();

  const product = all_product.find((e) => e.id === Number(productId))
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  )
}

export default Product