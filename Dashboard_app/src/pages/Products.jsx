import MainLayout from "../Layouts/MainLayout";

function Products() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      category: "Electronics",
      price: "$1200",
      stock: 25,
    },
    {
      id: 2,
      name: "Smartphone",
      category: "Electronics",
      price: "$800",
      stock: 40,
    },
    {
      id: 3,
      name: "Keyboard",
      category: "Accessories",
      price: "$60",
      stock: 75,
    },
    {
      id: 4,
      name: "Mouse",
      category: "Accessories",
      price: "$35",
      stock: 120,
    },
    {
      id: 5,
      name: "Monitor",
      category: "Electronics",
      price: "$300",
      stock: 18,
    },
  ];

  return (
    <MainLayout>
      <div className="products">
        <h1>Products</h1>

        <table className="products-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </MainLayout>
  );
}

export default Products;
