import BuyComponent from "./Buy";
import Invent from "./inventory";

const MainContent = () => {
  return (
    <div className=" w-9/12 p-10 flex flex-col">
      <div className="flex justify-end">
        <button className=" pl-10 pr-10 pt-4 pb-4 m-10 bg-blue-400 text-white rounded">
          Add
        </button>
      </div>
      <div className="shadow-xl w-full  rounded-xl border-gray-300 border-2 p-4">
        <div className="flex justify-between font-bold">
          <h1>Name</h1>
          <h1>Price</h1>
          <h1>Category</h1>
          <h1>Stock</h1>
          <h1>Date</h1>
        </div>

        <BuyComponent />
        <Invent />
      </div>
    </div>
  );
};

export default MainContent;
