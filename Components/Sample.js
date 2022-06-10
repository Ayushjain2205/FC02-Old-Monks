import React from "react";
import { useContract, useProvider } from "wagmi";
import CarbonFree from "../artifacts/contracts/CarbonFree.sol/CarbonFree.json";

function Sample() {
  const provider = useProvider();
  const contract = useContract({
    addressOrName: "0x5fbdb2315678afecb367f032d93f642f64180aa3",
    contractInterface: CarbonFree,
    signerOrProvider: provider,
  });

  console.log(contract);

  const getBalance = async () => {
    let tokenDecimals = await contract.decimals;
    console.log(tokenDecimals);
  };
  getBalance();
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export default Sample;
