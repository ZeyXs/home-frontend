import clsx from "clsx";

interface LogoProps {
  scale?: string;
  onClick: () => void;
};

export default function Logo({ scale = '100', onClick }: LogoProps) {
  return (
    <div className={clsx('flex flex-row justify-center items-center space-x-2 select-none cursor-pointer', `scale-${scale}`)} onClick={onClick}>
      <div className="text-white font-jost-black text-6xl">ZEYX</div>
      <div className="w-12 h-12 bg-[#FF6969] rounded-full"></div>
      <div className="text-white font-libre-barcode text-5xl">DEV</div>
    </div>
  );
};