import React from "react";
import { useContractRead } from "wagmi";
import CarbonFree from "../artifacts/contracts/CarbonFree.sol/CarbonFree.json";

function Sample() {
  const { data, isError, isLoading } = useContractRead(
    {
      addressOrName: "0x5fc8d32690cc91d4c39d9d3abcbd16989f875707",
      contractInterface: CarbonFree,
    },
    "name"
  );

  console.log(data);

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export default Sample;
