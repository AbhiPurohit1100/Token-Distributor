import { ConnectButton } from "@rainbow-me/rainbowkit";
import { FaGithub } from "react-icons/fa";

export function Home() {
  return (
    <header className="w-full h-15 flex items-center justify-between px-8 bg-gray-900 text-gray-100 shadow-md">
      <div className="flex items-center gap-4">
        <span className="text-2xl font-bold tracking-tight">Token-Distributor</span>
        <a
          href="https://github.com/AbhiPurohit1100/Token-Distributor" // Replace with your actual repo link
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-200 transition-colors"
          aria-label="GitHub Repository"
        >
          <FaGithub size={28} />
        </a>
      </div>
      <div className="scale-80">
        <ConnectButton
          showBalance={true}
          accountStatus="avatar"
          chainStatus="icon"
        />
      </div>
    </header>
  );
}
