import { 
    Form, 
    FormControl,
    FormDescription,
    FormField, 
    FormItem, 
    FormLabel, 
    FormMessage 
  } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { 
    RadioGroup, 
    RadioGroupItem 
} from "@/components/ui/radio-group";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import TransferCard from "@/app/register/components/transfer-card";

import { Dispatch, SetStateAction, useMemo } from "react";
import { useForm } from "react-hook-form";

import { toast } from "react-toastify";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [ "image/jpeg", "image/jpg", "image/png" ];

enum AttendedEventForm {
  ONLINE_SYMPOSIUM = "Online symposium",
  OFFLINE_SYMPOSIUM = "Offline symposium",
  SYMPOSIUM_WORKSHOP = "Symposium + Workshop",
  OFFLINE_WORKSHOP = "Offline workshop",
  SYMPOSIUM_WORKSHOP_PICU = "Symposium + Workshop PICU",
  SYMPOSIUM_WORKSHOP_NICU = "Symposium + Workshop NICU",
  WORKSHOP_PICU = "Workshop PICU",
  WORKSHOP_NICU = "Workshop NICU",
}

enum ProfessionForm {
  LABEL_STUDENT_PUBLIC = "Student/Public",
  VAL_STUDENT_PUBLIC = "Student - Student/Public",

  LABEL_GP_RESIDENT = "GP/Resident",
  VAL_GP_RESIDENT = "GP - GP/Resident",

  LABEL_SP_PED = "Specialist Pediatrician",
  VAL_SP_PED = "Specialist - Pediatrician",

  LABEL_SP_ANES = "Specialist Anesthesiologist",
  VAL_SP_ANES = "Specialist - Anesthesiologist",

  LABEL_SP_PED_SURGEON = "Specialist Pediatric surgeon",
  VAL_SP_PED_SURGEON = "Specialist - Pediatric surgeon",

  LABEL_SP_GEN_SURGEON = "Specialist General surgeon",
  VAL_SP_GEN_SURGEON = "Specialist - General surgeon",

  LABEL_SP_INTERNIST = "Specialist Internist",
  VAL_SP_INTERNIST = "Specialist - Internist",

  LABEL_SP_OTHER = "Specialist Other",
  VAL_SP_OTHER = "Specialist - Other",
}  

export default function RegistrationForm({ isLoading, setLoading, setSuccess }
    : { isLoading: boolean, setLoading: Dispatch<SetStateAction<boolean>>,
        setSuccess: Dispatch<SetStateAction<boolean>>
     }
) {
    // Client side validation
    const regexPhone = useMemo<RegExp>(() => 
        new RegExp(/^8[1-9][0-9]{7,12}$/), []);
    const formSchema = z.object(
        {
            activeEmail: z.string().email({ message: "Email should be valid" }), 
            fullName: z.string().min(1, { message: "Full name is required" }), 
            nik: z.string().length(16, { message: "NIK should be valid"}),
            organization: z.string().min(1, { message: "Organization is required" }), 
            profession: z.string().min(1, { message: "Profession is required" }), 
            phoneNumber: z.string().regex(regexPhone, "Invalid phone number"), 
            attendedEvent: z.enum([
                AttendedEventForm.SYMPOSIUM_WORKSHOP_PICU,
                AttendedEventForm.SYMPOSIUM_WORKSHOP_NICU,
                AttendedEventForm.WORKSHOP_PICU,
                AttendedEventForm.WORKSHOP_NICU,
            ], {
                required_error: "Attended event is required",
            }),
            paymentMethod: z.string().min(1, { message: "Payment method is required" }), 
            transferAmount: z.coerce.number().gt(1),
            committeeCode: z.string(),
            transferProof: z.unknown()
                .transform(value => { return value as FileList})
                .refine((files) => files?.length == 1, "Image is required.")
                .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, "Max file size is 5MB")
                .refine(
                (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
                "only .jpg, .jpeg, and .png and files are accepted."
                ),
        });

    // Hook Form
    const form = useForm<z.infer<typeof formSchema>>(
        {
            resolver: zodResolver(formSchema),
            defaultValues: {
            activeEmail: "",
            fullName: "",
            nik: "",
            organization: "",
            profession: "",
            phoneNumber: "",
            paymentMethod: "",
            transferAmount: 0,
            committeeCode: "",
            transferProof: undefined,
        }
    });
    const fileRef = form.register("transferProof");

     // Handler
    async function onSubmit(values: z.infer<typeof formSchema>) {
        const formData = new FormData();
        formData.append("active_email", values.activeEmail);
        formData.append("full_name", values.fullName);
        formData.append("nik", values.nik);
        formData.append("organization", values.organization);
        formData.append("profession", values.profession);
        formData.append("phone_number", `+62${values.phoneNumber}`);
        formData.append("attended_event", values.attendedEvent);
        formData.append("payment_method", values.paymentMethod);
        formData.append("transfer_amount", values.transferAmount.toString());
        formData.append("committee_code", values.committeeCode.toString());
        formData.append("transfer_proof", values.transferProof[0]);

        try {
            setLoading(true);
            toast.loading("Submitting form...", {
                className: "custom-pending-toast",
                position: "top-right",
                autoClose: false,
                hideProgressBar: true,
                closeOnClick: false,
                closeButton: false,
                pauseOnHover: true,   
                isLoading: true,
                theme: "dark",
            });

            const response = await fetch("/api/register", {
                method: 'POST',
                body: formData
            });
            setLoading(false);
            toast.dismiss();
            if (response.status == 200) {
                setSuccess(true);
            } else {
                throw new Error('Failed to submit the data. Please try again.');
            }
        } catch (err) {
            const errInstance = err as Error;
            toast.error(errInstance.message, {
                className: "custom-upload-failed-toast",
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,   
                theme: "dark",
            });
        }
    }

    return (
        <Form { ...form }>
            <form onSubmit={ form.handleSubmit(onSubmit) }>
                <div className="md:flex flex-row md:gap-8">
                    <div className="basis-1/2">
                        <FormField
                            control={form.control}
                            name="activeEmail"
                            render={({ field }) => (
                                <FormItem className="my-4">
                                    <FormLabel>Active Email</FormLabel>
                                    <FormControl>
                                        <Input 
                                            placeholder="Will be used for certificate delivery" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                        )}/>
                        <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                                <FormItem className="my-4">
                                    <FormLabel>Full Name</FormLabel>
                                    <FormControl>
                                        <Input 
                                        placeholder="With title, for certificate" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                        )}/>
                        <FormField
                            control={form.control}
                            name="nik"
                            render={({ field }) => (
                                <FormItem className="my-4">
                                    <FormLabel>NIK</FormLabel>
                                    <FormControl>
                                        <Input 
                                        placeholder="Nomor Induk Kependudukan" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                        )}/>
                        <FormField
                            control={form.control}
                            name="organization"
                            render={({ field }) => (
                                <FormItem className="my-4">
                                    <FormLabel>Organization/Institution (include university)</FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g. Faculty of Medicine, Sebelas Maret University" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}/>
                        <FormField
                            control={form.control}
                            name="profession"
                            render={({ field }) => (
                                <FormItem className="my-4">
                                    <FormLabel>Profession</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                        <SelectTrigger className="w-full">
                                            <SelectValue 
                                            placeholder="Select an option" />
                                        </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                        <SelectItem value={ ProfessionForm.VAL_STUDENT_PUBLIC }>{ ProfessionForm.LABEL_STUDENT_PUBLIC }</SelectItem>
                                        <SelectItem value={ ProfessionForm.VAL_GP_RESIDENT }>{ ProfessionForm.LABEL_GP_RESIDENT }</SelectItem>
                                        <SelectItem value={ ProfessionForm.VAL_SP_PED }>{ ProfessionForm.LABEL_SP_PED }</SelectItem>
                                        <SelectItem value={ ProfessionForm.VAL_SP_ANES }>{ ProfessionForm.LABEL_SP_ANES }</SelectItem>
                                        <SelectItem value={ ProfessionForm.VAL_SP_PED_SURGEON }>{ ProfessionForm.LABEL_SP_PED_SURGEON }</SelectItem>
                                        <SelectItem value={ ProfessionForm.VAL_SP_GEN_SURGEON }>{ ProfessionForm.LABEL_SP_GEN_SURGEON }</SelectItem>
                                        <SelectItem value={ ProfessionForm.VAL_SP_INTERNIST }>{ ProfessionForm.LABEL_SP_INTERNIST }</SelectItem>
                                        <SelectItem value={ ProfessionForm.VAL_SP_OTHER }>{ ProfessionForm.LABEL_SP_OTHER }</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                        )}
                        />
                        <FormField
                            control={form.control}
                            name="phoneNumber"
                            render={({ field }) => (
                                <FormItem className="my-4">
                                <FormLabel>Mobile phone number (Whatsapp Linked)</FormLabel>
                                    <FormControl>
                                        <div className="flex">
                                        <div className="p-2 font-bold text-sm">+62</div>
                                        <Input type="number" placeholder="e.g. 897123456" {...field} />
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                        )}/>
                        <FormField
                            control={form.control}
                            name="attendedEvent"
                            render={({ field }) => (
                                <FormItem className="my-4 space-y-3">
                                <FormLabel>Attended Event</FormLabel>
                                <FormControl>
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                        className="flex flex-col space-y-1">
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                            <RadioGroupItem value={ AttendedEventForm.SYMPOSIUM_WORKSHOP_PICU } />
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                            { AttendedEventForm.SYMPOSIUM_WORKSHOP_PICU }
                                            </FormLabel>
                                        </FormItem>
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                            <RadioGroupItem value={ AttendedEventForm.SYMPOSIUM_WORKSHOP_NICU } />
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                            { AttendedEventForm.SYMPOSIUM_WORKSHOP_NICU }
                                            </FormLabel>
                                        </FormItem>
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                            <RadioGroupItem value={ AttendedEventForm.WORKSHOP_NICU } />
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                            { AttendedEventForm.WORKSHOP_NICU }
                                            </FormLabel>
                                        </FormItem>
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                            <RadioGroupItem value={ AttendedEventForm.WORKSHOP_PICU } />
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                            { AttendedEventForm.WORKSHOP_PICU }
                                            </FormLabel>
                                        </FormItem>
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                        )}/>
                    </div>
                    <div className="basis-1/2">
                        <div>
                            <p className="font-semibold text-sm my-2">Please transfer the funds to the following account number</p>
                            <TransferCard />
                        </div>
                        <Drawer>
                            <DrawerTrigger className="cursor-pointer text-sm font-semibold bg-indigo-900 hover:bg-indigo-700 text-white px-4 py-2 rounded">
                                Click to show the pricelist
                            </DrawerTrigger>
                            <DrawerContent>
                                <DrawerHeader>
                                    <DrawerTitle className="text-xl">Pricelist</DrawerTitle>
                                </DrawerHeader>
                                <div className="md:flex justify-center gap-4">
                                    <div className="px-4 mb-8">
                                        <h2 className="text-md font-semibold mb-4 text-center">Symposium &amp; Workshop</h2>
                                        <div className="grid grid-cols-3 gap-y-4 text-sm text-gray-800">
                                            <div></div>
                                            <div className="font-semibold text-center">Early Bird</div>
                                            <div className="font-semibold text-center">Late Bird</div>

                                            <div className="text-left font-semibold">Student/Public</div>
                                            <div className="text-center">550K</div>
                                            <div className="text-center">600K</div>

                                            <div className="text-left font-semibold">GP/Resident</div>
                                            <div className="text-center">600K</div>
                                            <div className="text-center">650K</div>

                                            <div className="text-left font-semibold">Specialist</div>
                                            <div className="text-center">650K</div>
                                            <div className="text-center">700K</div>
                                        </div>
                                        <div className="text-xs text-blue-700 mt-4">Each participant may only choose one workshop session</div>
                                    </div>
                                    <div className="px-4 mb-8 w-fit">
                                        <h2 className="text-md font-semibold mb-4 text-center">Workshop</h2>
                                        <div className="grid grid-cols-2 gap-y-4 text-sm">
                                            <div></div>
                                            <div className="font-semibold text-center"></div>

                                            <div className="text-right font-semibold">Student/Public</div>
                                            <div className="text-center">400K</div>

                                            <div className="text-right font-semibold">GP/Resident</div>
                                            <div className="text-center">450K</div>

                                            <div className="text-right font-semibold">Specialist</div>
                                            <div className="text-center">500K</div>
                                        </div>
                                        <div className="text-xs text-blue-700 mt-4"><div className="mx-auto text-center lg:w-3/4">Workshop tickets are available until the day of the event and can be purchased at the venue.</div></div>
                                    </div>
                                </div>
                            </DrawerContent>
                        </Drawer>
                        <FormField
                            control={form.control}
                            name="paymentMethod"
                            render={({ field }) => (
                                <FormItem className="my-4">
                                    <FormLabel>Payment Method</FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g. Transfer Bank Mandiri" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                        )}/>
                        <FormField
                            control={form.control}
                            name="transferAmount"
                            render={({ field }) => (
                                <FormItem className="my-4">
                                    <FormLabel>Transfer Amount</FormLabel>
                                    <FormControl>
                                        <div className="flex">
                                        <div className="p-2 font-bold text-sm">Rp.</div>
                                        <Input type="number" placeholder="" {...field} />
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                        )}/>
                        <FormField
                            control={form.control}
                            name="committeeCode"
                            render={({ field }) => (
                                <FormItem className="my-4">
                                    <FormLabel>Committee Code (can be left blank)</FormLabel>
                                    <FormControl>
                                        <Input placeholder="" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                        )}/>
                        <FormField
                            control={form.control}
                            name="transferProof"
                            render={({ field }) => (
                                <FormItem className="my-4">
                                    <FormLabel>Proof of Payment</FormLabel>
                                    <FormControl>
                                        <Input type="file" 
                                            accept="image/jpg, image/jpeg, image/png" 
                                            {...fileRef}
                                            onChange={(e) => { field.onChange(e.target?.files?.[0]) }} />
                                    </FormControl>
                                    <FormDescription className="text-slate-800">
                                        in .jpg, .jpeg, or .png format. Maximum image size is 5 MB.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                        )}/>
                    </div>
                </div>
                <div className="mt-8 grid justify-items-center">
                    <Button 
                        disabled={ isLoading }
                        type="submit" 
                        className="w-5/6 bg-theme-purple shadow-lg hover:shadow-purple-400 hover:bg-theme-purple cursor-pointer">
                            Submit</Button>
                </div>
            </form>
        </Form>
    )
}