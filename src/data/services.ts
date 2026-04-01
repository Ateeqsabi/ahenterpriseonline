export interface Service {
  id: string;
  name: string;
  icon: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  documents: string[];
}

export const services: Service[] = [
  {
    id: 'pan-card',
    name: 'PAN Card',
    icon: 'CreditCard',
    shortDescription: 'New PAN Card & Correction Services',
    fullDescription: 'Get your new PAN card or update existing details quickly and easily. We handle the entire application process for you.',
    features: [
      'New PAN Card Application',
      'PAN Card Correction',
      'Duplicate PAN Card',
      'Quick Processing',
      'Expert Assistance'
    ],
    documents: [
      'Identity Proof (Aadhaar/Voter ID)',
      'Address Proof',
      'Date of Birth Proof',
      'Passport Size Photos'
    ]
  },
  {
    id: 'aadhaar',
    name: 'Aadhaar Services',
    icon: 'Fingerprint',
    shortDescription: 'Aadhaar Update & Print',
    fullDescription: 'Update your Aadhaar details including address, mobile number, photo, and get instant Aadhaar printouts.',
    features: [
      'Address Update',
      'Mobile Number Update',
      'Photo Update',
      'Aadhaar Print',
      'Aadhaar Download'
    ],
    documents: [
      'Existing Aadhaar Card',
      'Supporting Documents for Update',
      'Recent Photograph'
    ]
  },
  {
    id: 'passport',
    name: 'Passport Assistance',
    icon: 'Plane',
    shortDescription: 'Complete Passport Support',
    fullDescription: 'We provide complete assistance for new passport applications, renewals, and related services.',
    features: [
      'New Passport Application',
      'Passport Renewal',
      'Form Filling Assistance',
      'Document Verification',
      'Appointment Booking Support'
    ],
    documents: [
      'Birth Certificate',
      'Address Proof',
      'Identity Proof',
      'Passport Size Photos'
    ]
  },
  {
    id: 'ticket-booking',
    name: 'Ticket Booking',
    icon: 'Ticket',
    shortDescription: 'Train, Bus & Air Tickets',
    fullDescription: 'Book train, bus, and flight tickets with ease. We handle all your travel booking needs.',
    features: [
      'Train Ticket Booking',
      'Bus Ticket Booking',
      'Flight Ticket Booking',
      'Best Price Guarantee',
      'Instant Confirmation'
    ],
    documents: [
      'Valid ID Proof',
      'Passenger Details'
    ]
  },
  {
    id: 'money-transfer',
    name: 'Money Transfer & AEPS',
    icon: 'Wallet',
    shortDescription: 'Quick Money Transfer & Banking',
    fullDescription: 'Fast and secure money transfer services with AEPS (Aadhaar Enabled Payment System) for easy banking.',
    features: [
      'Instant Money Transfer',
      'AEPS Cash Withdrawal',
      'Balance Inquiry',
      'Mini Statement',
      'Aadhaar Pay'
    ],
    documents: [
      'Aadhaar Card',
      'Bank Account Details',
      'Registered Mobile Number'
    ]
  },
  {
    id: 'driving-licence',
    name: 'Driving Licence',
    icon: 'Car',
    shortDescription: 'DL Application & Renewal',
    fullDescription: 'Complete assistance for driving licence applications, renewals, and related services.',
    features: [
      'New Driving Licence',
      'Licence Renewal',
      'Learning Licence',
      'Address Change',
      'Duplicate Licence'
    ],
    documents: [
      'Age Proof',
      'Address Proof',
      'Medical Certificate',
      'Passport Size Photos'
    ]
  },
  {
    id: 'vehicle-insurance',
    name: 'Vehicle Insurance',
    icon: 'Shield',
    shortDescription: 'Comprehensive Vehicle Coverage',
    fullDescription: 'Get the best vehicle insurance plans for your car or bike with competitive rates and comprehensive coverage.',
    features: [
      'New Insurance Policy',
      'Policy Renewal',
      'Third Party Insurance',
      'Comprehensive Coverage',
      'Claim Assistance'
    ],
    documents: [
      'Vehicle Registration Certificate',
      'Previous Insurance Copy',
      'Valid Driving Licence',
      'Address Proof'
    ]
  },
  {
    id: 'ration-card',
    name: 'Ration Card',
    icon: 'FileText',
    shortDescription: 'Ration Card Application',
    fullDescription: 'Apply for new ration card or update existing details with our expert assistance.',
    features: [
      'New Ration Card Application',
      'Name Addition/Deletion',
      'Address Change',
      'Duplicate Ration Card',
      'Ration Card Correction'
    ],
    documents: [
      'Address Proof',
      'Identity Proof',
      'Income Certificate',
      'Family Photographs'
    ]
  },
  {
    id: 'pf-services',
    name: 'PF Services',
    icon: 'Briefcase',
    shortDescription: 'Provident Fund Assistance',
    fullDescription: 'Complete assistance for PF withdrawal, transfer, and other related services.',
    features: [
      'PF Withdrawal',
      'PF Transfer',
      'UAN Activation',
      'PF Balance Check',
      'Pension Withdrawal'
    ],
    documents: [
      'UAN Number',
      'Aadhaar Card',
      'Bank Account Details',
      'Cancelled Cheque'
    ]
  },
  {
    id: 'print-services',
    name: 'Print, Scan & Lamination',
    icon: 'Printer',
    shortDescription: 'Document Services',
    fullDescription: 'High-quality printing, scanning, and lamination services for all your document needs.',
    features: [
      'Color & B/W Printing',
      'Document Scanning',
      'Lamination Services',
      'Photocopying',
      'Binding Services'
    ],
    documents: [
      'Documents to be Printed/Scanned'
    ]
  }
];
