import { 
  NextRequest, 
  NextResponse 
} from "next/server";

type RequestBodySchema = {
  [ key: string ]: string
};

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  
  try {
    // Cloudinary upload
    const cldName = process.env.CLD_NAME as string;
    const cldUploadPreset = process.env.CLD_UPLOAD_PRESET as string;

    const cldFormData = new FormData();
    const imgUpload = formData.get("transfer_proof") as File;    
    cldFormData.append("file", imgUpload);
    cldFormData.append("cloud_name", cldName);
    cldFormData.append("upload_preset", cldUploadPreset);

    const secureUrl = await fetch(`https://api.cloudinary.com/v1_1/${cldName}/upload`, 
      { method: 'POST',
        body: cldFormData
      }).then((res) => res.json())
        .then((data) => (data.secure_url));
    if (secureUrl === undefined || secureUrl.length < 1) {
      return NextResponse.json({ error: 'Failed to upload image' }, { status: 500 });
    }
    
    // Gform submit
    const gFormID = process.env.GFORM_ID;
    const gFormEntryEmail = process.env.GFORM_ENTRY_EMAIL as string;
    const gFormEntryName = process.env.GFORM_ENTRY_NAME as string;
    const gFormEntryOrganization = process.env.GFORM_ENTRY_ORGANIZATION as string;
    const gFormEntryProfession = process.env.GFORM_ENTRY_PROFESSION as string;
    const gFormEntryPhone = process.env.GFORM_ENTRY_PHONE as string;
    const gFormEntryEvent = process.env.GFORM_ENTRY_EVENT as string;
    const gFormEntryPaymentMethod = process.env.GFORM_ENTRY_PAYMENT_METHOD as string;
    const gFormEntryPaymentAmount = process.env.GFORM_ENTRY_PAYMENT_AMOUNT as string;
    const gFormEntryCommitteeCode = process.env.GFORM_ENTRY_COMMITTEE_CODE as string;
    const gFormEntryPaymentProof = process.env.GFORM_ENTRY_PAYMENT_PROOF as string;
    const gFormEntryNIK = process.env.GFORM_ENTRY_NIK as string;

    const qParams: RequestBodySchema = {};
    qParams[`entry.${gFormEntryEmail}`] = formData.get("active_email") as string;
    qParams[`entry.${gFormEntryName}`] = formData.get("full_name") as string;
    qParams[`entry.${gFormEntryNIK}`] = formData.get("nik") as string;
    qParams[`entry.${gFormEntryOrganization}`] = formData.get("organization") as string;
    qParams[`entry.${gFormEntryProfession}`] = formData.get("profession") as string;
    qParams[`entry.${gFormEntryPhone}`] = formData.get("phone_number") as string;
    qParams[`entry.${gFormEntryEvent}`] = formData.get("attended_event") as string;
    qParams[`entry.${gFormEntryPaymentMethod}`] = formData.get("payment_method") as string;
    qParams[`entry.${gFormEntryPaymentAmount}`] = formData.get("transfer_amount") as string;
    qParams[`entry.${gFormEntryCommitteeCode}`] = formData.get("committee_code") as string;
    qParams[`entry.${gFormEntryPaymentProof}`] = secureUrl;

    const gFormSubmitSuccess = await fetch(`https://docs.google.com/forms/d/e/${gFormID}/formResponse?`
       + new URLSearchParams(qParams), { mode: "no-cors" }) 
       .then((res) => (res.ok));
    if (!gFormSubmitSuccess) {
      return NextResponse.json({ error: 'Failed to submit form' }, { status: 500 });
    } 

    return NextResponse.json({ message: 'Registration success' }, { status: 200 });
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}