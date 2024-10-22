import React, { useEffect, useState } from "react";
import { baseUrl } from "../../lib/constand";
import DataTable from "react-data-table-component";
import { Button, Modal } from "flowbite-react";

export default function ProductPage1() {
  const [product, setProduct] = useState([]);
  const [productDetail, setProdcutDetail] = useState({});
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    fetch(`${baseUrl}products`)
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data); // log the fetched data
        setProduct(data);
      });
  }, []);

  // Handle product details
  const handleProductDetail = (product) => {
    console.log("handleProductDetail", product);
    setProdcutDetail(product);
    setOpenModal(true);
  };

  // Handle delete product
  const handleDeleteProduct = (productId) => {
    console.log("handleDeleteProduct", productId);

    const newProducts = product.filter((item) => item.id !== productId);
    setProduct(newProducts);
  };

  // Table columns
  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
      cell: (row) => (
        <div className="truncate w-40" title={row.title}>
          {row.title}
        </div>
      ),
    },
    {
      name: "Category",
      selector: (row) => row.category,
      cell: (row) => (
        <div className="truncate w-40" title={row.category}>
          {row.category}
        </div>
      ),
    },
    {
      name: "Image",
      cell: (row) => (
        <div className="flex justify-center">
          <img
            src={row.image}
            alt={row.title}
            className="w-12 h-12 object-cover"
          />
        </div>
      ),
    },
    {
      name: "Price",
      selector: (row) => `$${row.price}`,
      sortable: true,
    },
    {
      name: "Description",
      selector: (row) => row.description,
      cell: (row) => (
        <div className="truncate w-64" title={row.description}>
          {row.description}
        </div>
      ),
    },
    {
      name: "Rating",
      selector: (row) => `${row.rating.rate} (${row.rating.count} reviews)`,
      cell: (row) => (
        <div
          className="truncate w-32"
          title={`${row.rating.rate} (${row.rating.count} reviews)`}
        >
          {row.rating.rate} ({row.rating.count} reviews)
        </div>
      ),
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-400 text-white rounded-sm">
            Edit
          </button>
          <button
            onClick={() => handleDeleteProduct(row.id)}
            className="ml-2 bg-red-500 hover:bg-red-400 text-white rounded-sm"
          >
            Delete
          </button>
          <button
            onClick={() => handleProductDetail(row)}
            className="ml-2 bg-green-400 hover:bg-green-400 text-white rounded-sm"
          >
            View
          </button>
        </div>
      ),
    },
  ];

  return (
    <section>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-6xl bg-white shadow-lg rounded-lg p-4 overflow-x-auto">
          <DataTable
            columns={columns}
            data={product}
            fixedHeader
            subHeader
            pointerOnHover
            highlightOnHover
            striped
            className="text-center"
          />
        </div>
      </div>

      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>{productDetail.title}</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <img
              className="w-[250px]"
              src={productDetail.image}
              alt={productDetail.title}
            />
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {productDetail.description}
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Price: ${productDetail.price}
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>Buy now</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}
