import "./App.css";
import { Button } from "flowbite-react";
import ButtonComponents1 from "./components/common/button/ButtonComponents1";
import { useState, useEffect } from "react";
import { ButtonComponents2 } from "./components/common/button/ButtonComponents2";
import CardProduct1 from "./components/cardt/CardProduct1";
import NavbarCompnents from "./components/navbar/NavbarCompnents";
import { useNavigate } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };

  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data); // Setting the entire products array
      });
  }, []);


  const productDetailOnclick = (product) =>{

    navigate("/prduct-Detail", { state: product });
     // console.log("product when clicked",product);
  }

  return (
    <>
      <h1>test react hook</h1>
      <div className="">
        {/* <h1>{count}</h1>
        <ButtonComponents1 handle={handleCount} pops={"count"} />
        <ButtonComponents2 handler={handleCount} title={"count2"} /> */}

        {/* Looping through products and passing each product to CardProduct1 */}
        <div className="p-10">
          <h1 className="text-3xl font-bold text-center mb-8">Product List</h1>
          <div className="flex flex-wrap -mx-4">
            {products.map((product) => (
              <CardProduct1
                key={product.id}
                product={product}
                handleProductDetial={() => productDetailOnclick(product)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
