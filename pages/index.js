import { ConnectButton } from "@rainbow-me/rainbowkit";
import Wallet from "../Components/Wallet";
import Sample from "../Components/Sample";

const Home = () => {
  return (
    <div className="py-6 justify-center text-center">
      <div className="flex justify-center">
        <ConnectButton />
      </div>

      <h1 className="text-4xl font-bold mt-6">C-Free</h1>

      {/* <Wallet /> */}
      <Sample />
    </div>
  );
};

export default Home;
