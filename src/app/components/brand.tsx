import Image from 'next/image';
import LogoHMPPD from "@/public/logo/brand/logo_HMPPD.png";
import LogoRSUNS from "@/public/logo/brand/Logo_RS_UNS.png";
import LogoRSDM from "@/public/logo/brand/logo_RSDM.png";
import LogoUNS from "@/public/logo/brand/logo_UNS.png";
import LogoKemenkes from "@/public//logo/brand/logo_IDI.png"

const Brand = () => {
  return (
    <div className="flex h-12 w-14 gap-2">
        <Image src={ LogoKemenkes } alt="Logo Kemenkes" />
        <Image src={ LogoRSUNS } alt="Logo RS UNS" />
        <Image src={ LogoHMPPD } alt="Logo HMPPD" />
        <Image src={ LogoUNS } alt="Logo UNS" />
        <Image src={ LogoRSDM } alt="Logo RSDM" />
    </div>
  );
}

export default Brand;