import MainLayout from "../Layouts/MainLayout";

function Orders() {
  const orders = [
    {
      id: 101,
      customer: "John Smith",
      product: "Laptop",
      amount: "$1200",
      status: "Delivered",
    },
    {
      id: 102,
      customer: "Sarah Johnson",
      product: "Phone",
      amount: "$800",
      status: "Pending",
    },
    {
      id: 103,
      customer: "Michael Brown",
      product: "Headphones",
      amount: "$150",
      status: "Shipped",
    },
    {
      id: 104,
      customer: "Emily Davis",
      product: "Keyboard",
      amount: "$90",
      status: "Delivered",
    },
    {
      id: 105,
      customer: "David Wilson",
      product: "Monitor",
      amount: "$300",
      status: "Cancelled",
    },
  ];

  return (
    <MainLayout>
      <h1>Orders</h1>

      <table className="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Product</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.product}</td>
              <td>{order.amount}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </MainLayout>
  );
}

export default Orders;
