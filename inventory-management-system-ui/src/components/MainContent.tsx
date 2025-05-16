import AddComponent from "./Add";
import BuyComponent from "./Buy";

const MainContent = () => {
  return (
    <div className=" w-9/12 p-10 flex">
      <div className="shadow-xl w-full  rounded-xl border-gray-300 border-2 p-4">
        <div className="flex justify-between font-bold">
          <h1>Name</h1>
          <h1>Price</h1>
          <h1>Category</h1>
          <h1>Stock</h1>
          <h1>Date</h1>
        </div>
        <AddComponent />
        <BuyComponent />
      </div>
    </div>
  );
};

export default MainContent;
