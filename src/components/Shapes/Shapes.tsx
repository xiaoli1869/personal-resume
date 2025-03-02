import React from "react";
const Shapes: React.FC = () => {
  return (
    <div className="shapes">
      <div className="fixed -left-1/2 -top-1/2 -z-10 animate-spin-very-slow xl:-left-[20%] xl:-top-1/3">
        <img src="/images/gradient-1.png" alt="" className="" />
      </div>

      <div className="fixed -right-[50%] top-[10%] -z-10 animate-spin-very-slow xl:-right-[15%] xl:top-[10%]">
        <img src="/images/gradient-2.png" alt="" className="" />
      </div>

      <div className="move-with-cursor fixed left-[10%] top-[20%] -z-10">
        <img src="/images/object-3d-1.png" alt="" className="" />
      </div>

      <div className="move-with-cursor fixed bottom-[20%] right-[10%] -z-10">
        <img src="/images/object-3d-2.png" alt="" className="" />
      </div>
    </div>
  );
};

export default Shapes;
