import SideSection from "./Side";
import MainContent from "./MainContent";

const BodyContent = () => {
  return (
    <div className="flex flex-row">
      <SideSection />
      <MainContent />
    </div>
  );
};

export default BodyContent;
