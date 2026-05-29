import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle
} from "@/components/ui/card";

import SuccessMessage from "@/app/register/components/success-message";
import RegistrationForm from "@/app/register/components/registration-form";

import { useState } from "react";

export default function Registration() {
    const [ isLoading, setLoading ] = useState<boolean>(false);
    const [ isSuccess, setSuccess ] = useState<boolean>(false);

    return (
        <Card className="h-full w-full mb-8">
        <CardHeader className="text-theme-navy">
          <CardTitle className="py-2 font-bold lg:text-3xl text-2xl flex items-center justify-between">
            <div className="">Registration</div>
          </CardTitle>
          <CardDescription 
            className="text-justify bg-theme-cyan text-gray-700 p-2 rounded">
              <p className="inline">
                {`For the SKP acceptance process (only those who already have an STR) and a certificate 
                by Ministry of Health, make sure you have a Plataran Sehat account before you fill the form. 
                If you don't have one yet, register yourself at the following link`}</p>
              <a 
                href="https://lms.kemkes.go.id/register" 
                target="_" 
                className="text-theme-navy ml-1 font-semibold">
                https://lms.kemkes.go.id/register</a>
              <p className="inline">
                {`. Then, fill in the column below according to the 
                identity you use in your Plataran Sehat account to facilitate the process of 
                cross-checking the Ministry of Health's certificate and SKP claims`}</p>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2 justify-center">
          {
            isSuccess ? 
              <SuccessMessage /> : 
              <RegistrationForm 
                isLoading={ isLoading }
                setLoading={ setLoading }
                setSuccess={ setSuccess } />
          }
        </CardContent>
      </Card>
    )
}