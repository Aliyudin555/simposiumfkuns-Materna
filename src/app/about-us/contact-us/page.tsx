interface ContactCardType { 
  name: string, 
  contactDesc: string 
};

const symposiumContactCards: ContactCardType[] = [
  {
    name: "Qonita",
    contactDesc: "+62 8954 0208 1919 (WhatsApp)"
  },
  {
    name: "Afifah",
    contactDesc: "+62 852 2563 7414 (WhatsApp)"
  },
  {
    name: "Email",
    contactDesc: "simposium219.fkuns@gmail.com"
  }
];

const abstractSubmissionContactCards: ContactCardType[] = [
  {
    name: "Nurul",
    contactDesc: " +62 855 7533 233 (WhatsApp)"
  },
  {
    name: "Wafa",
    contactDesc: "+62 812 1776 6424 (WhatsApp)"
  },
  {
    name: "Email",
    contactDesc: "lombasimposium219@gmail.com"
  },
];

function ContactCard({ name, contactDesc } : ContactCardType) {
  return (
    <div className="bg-white p-4 rounded">
      <div className="text-theme-purple font-bold">{ name }</div>
      <div className="text-theme-navy">{ contactDesc }</div>
    </div>
  );
}

export default function ContactUs() {
    return (
      <div className="flex contact-us min-h-screen">
        <div className="md:py-24 py-12 theme-gradient-v4 min-h-screen w-screen flex flex-col md:items-stretch items-center justify-center md:gap-24 gap-12">
          <div className="font-bold text-theme-pink lg:text-4xl text-2xl text-center">
            CONTACT US
            <hr className="lg:w-44 md:w-36 w-28 border-2 border-theme-pink mx-auto mt-8"></hr>
          </div>
          <div className="flex md:flex-row flex-col justify-evenly md:gap-0 gap-4">
            <div className="text-white font-medium text-lg my-auto">Got a Question for Us?</div>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <div className="font-medium text-white">Symposium Registration</div>
                <div className="flex flex-col gap-4">
                  {
                    symposiumContactCards.map((item, i) => (
                      <ContactCard
                        key={ i }
                        name={ item.name }
                        contactDesc={ item.contactDesc } />
                    ))
                  }
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="font-medium text-white">Abstract Submission</div>
                <div className="flex flex-col gap-4">
                  {
                    abstractSubmissionContactCards.map((item, i) => (
                      <ContactCard
                        key={ i }
                        name={ item.name }
                        contactDesc={ item.contactDesc } />
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  