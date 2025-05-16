import { FaPlus, FaShoppingCart, FaTasks, FaReceipt } from "react-icons/fa";

const SideSection = () => {
  return (
    <div className="w-3/12 bg-slate-100 pt-32  h-screen  flex flex-col gap-10 justify-start">
      <div className="bg-blue-400 h-14 text-3xl w-full flex items-center  gap-4 text-white pl-10">
        <FaPlus className="w-6 h-6" />
        Add
      </div>
      <div className=" h-14 text-3xl w-full flex items-center  gap-4 text-black pl-10">
        <FaShoppingCart className="w-6 h-6" />
        Buy
      </div>
      <div className=" h-14 text-3xl w-full flex items-center  gap-4 text-black pl-10">
        <FaTasks className="w-6 h-6" />
        Inventory Reports
      </div>
      <div className=" h-14 text-3xl w-full flex items-center gap-4 text-black pl-10">
        <FaReceipt className="w-6 h-6" />
        Sales Report
      </div>
    </div>
  );
};

export default SideSection;
