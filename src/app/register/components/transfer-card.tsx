"use client"

import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

import { useMemo } from "react";

import Image from "next/image";
// import BankJatengLogo from "@/public/logo/bank/bank_jateng.png";
import BankMandiriLogo from "@/public/logo/bank/bank_mandiri.png"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface BankAccountRecipient {
    name: string,
    accNo: string
}

export default function TransferCard () {
    const bankAccRecipient: BankAccountRecipient = useMemo<BankAccountRecipient>(() => ({
        name: "Charistika Lonika",
        accNo: "1420024674805"
    }), []);

    const copyBankAcc = () => {
        navigator.clipboard.writeText(bankAccRecipient.accNo);
        toast.success("Account number copied!", {
            className: "custom-copy-toast",
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,   
            theme: "dark",
        });
    }

    return (
        <div className="bg-white rounded p-4 flex justify-between">
            <div className="md:flex">
                <Image 
                    src={ BankMandiriLogo } 
                    alt="Logo Bank Mandiri" 
                    className="lg:w-18 md:w-12 rounded" />
                <div className="">
                    <div className="mt-3 md:ml-4 md:mt-1 font-bold md:text-base text-sm">{ bankAccRecipient.name }</div>
                    <div className="md:ml-4 md:mt-1">{ bankAccRecipient.accNo }</div>
                </div>
            </div>
            <div className="">
                <Button onClick={ copyBankAcc } type="button" className="cursor-pointer bg-white hover:bg-white checked:bg-white shadow-none">
                    <Copy className="text-slate-800"/>
                </Button>
                <ToastContainer />
            </div>
        </div>
    )
}
