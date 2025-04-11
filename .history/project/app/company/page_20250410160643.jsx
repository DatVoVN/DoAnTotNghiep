import CompanyOverview from "@/components/Company/CompanyOverview";
import React from "react";

const page = () => {
  return (
    <div className="space-y-[5px]">
      <CompanyOverview />
      <CompanyOverview />
      <CompanyOverview />
      <CompanyOverview />
    </div>
  );
};

export default page;
