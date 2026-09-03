import { ClinicInfo, ServiceItem, TestimonialItem, BeforeAfterItem } from '../types';

export const CLINIC_INFO: ClinicInfo = {
  name: "Dr. Misha’s Crystal Skin",
  tagline: "Skin | Hair | Laser Clinic",
  address: "Ganga Complex, First Floor, Opposite Poona Business Bay, Yerawada, Pune, Maharashtra 411006",
  fullAddress: {
    line1: "Ganga Complex, First Floor",
    line2: "Opposite Poona Business Bay",
    locality: "Yerawada",
    city: "Pune",
    state: "Maharashtra",
    pincode: "411006"
  },
  landmark: "Opposite Poona Business Bay, Yerawada",
  googleRating: 4.9,
  reviewCount: 133,
  phone: "+91 93098 93465",
  whatsappNumber: "919309893465",
  whatsappUrl: "https://wa.me/919309893465",
  openingHours: {
    days: "Monday – Saturday",
    hours: "10:00 AM – 8:00 PM",
    statusText: "Open Today until 8:00 PM"
  }
};

export const WHATSAPP_URL = "https://wa.me/919309893465";

export const SERVICES: ServiceItem[] = [
  // Skin Treatments
  {
    id: 'deep-peelings',
    name: 'Deep Peelings',
    category: 'skin',
    shortDesc: 'Clinical chemical peel protocols formulated to address hyperpigmentation, uneven skin tone, and textural blemishes.',
    detailedDesc: 'Administered under clinical guidance to exfoliate outer layers and assist cellular turnover, helping to improve skin clarity and smooth texture.',
    idealFor: ['Hyperpigmentation & Blemishes', 'Uneven Skin Tone', 'Sun-Induced Dullness'],
    duration: '45 - 60 mins',
    iconName: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'anti-aging-solutions',
    name: 'Anti-Aging Solutions',
    category: 'skin',
    shortDesc: 'Customized clinical protocols to address fine lines, skin laxity, and early textural changes.',
    detailedDesc: 'A holistic clinical approach tailored to your skin needs, supporting elasticity, deep hydration, and overall skin wellness.',
    idealFor: ['Fine Lines & Wrinkles', 'Loss of Firmness', 'Dull Complexion'],
    duration: '60 mins',
    iconName: 'Hourglass',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pigmentation-solutions',
    name: 'Pigmentation Solutions',
    category: 'skin',
    shortDesc: 'Targeted dermatological approaches to manage dark patches, sun spots, and melasma.',
    detailedDesc: 'Individualized treatment plans combining gentle clinical topicals, peelings, and laser protocols tailored to Indian skin types.',
    idealFor: ['Melasma & Sun Spots', 'Post-Acne Marks', 'Uneven Complexion'],
    duration: '45 mins',
    iconName: 'SunMedium',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'skin-tightening',
    name: 'Skin Tightening',
    category: 'skin',
    shortDesc: 'Non-invasive energy-based procedures to support skin firmness and facial contour definition.',
    detailedDesc: 'Utilizes targeted clinical energy modalities to stimulate natural dermal collagen pathways and improve mild to moderate laxity.',
    idealFor: ['Mild Skin Laxity', 'Jawline & Cheek Contour', 'Neck & Facial Firmness'],
    duration: '60 mins',
    iconName: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'microdermabrasion',
    name: 'Microdermabrasion',
    category: 'skin',
    shortDesc: 'Gentle clinical exfoliation to buff away dead skin buildup and refine pore texture.',
    detailedDesc: 'Diamond-tip mechanical exfoliation designed to gently clear congested surface layers, refreshing dull skin and enhancing topical absorption.',
    idealFor: ['Pore Congestion', 'Rough Surface Texture', 'Dull Skin'],
    duration: '40 mins',
    iconName: 'Layers',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'facials',
    name: 'Facials',
    category: 'skin',
    shortDesc: 'Clinical medi-facials offering deep cleansing, active hydration, and skin rejuvenation.',
    detailedDesc: 'Customized clinical facials formulated with medical-grade serums, gentle extraction, and barrier-soothing protocols for a refreshed appearance.',
    idealFor: ['Dehydrated Skin', 'Congested Pores', 'General Skin Maintenance'],
    duration: '60 mins',
    iconName: 'Smile',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'laser-skin-therapy',
    name: 'Laser Skin Therapy',
    category: 'skin',
    shortDesc: 'Precision laser treatments for tone refinement, texture smoothing, and post-acne mark care.',
    detailedDesc: 'Advanced laser wavelengths focused on target skin layers to promote collagen remodeling and tone uniformity with minimal downtime.',
    idealFor: ['Post-Acne Texture', 'Pigmented Lesions', 'Tone Irregularities'],
    duration: '45 mins',
    iconName: 'Zap',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80',
    popular: true
  },

  // Hair Treatments
  {
    id: 'hair-transplants',
    name: 'Hair Transplants',
    category: 'hair',
    shortDesc: 'Follicular hair restoration procedures designed to rebuild hairline and improve density.',
    detailedDesc: 'Micro-follicular extraction and placement performed under strict surgical standards to encourage natural direction and graft viability.',
    idealFor: ['Male & Female Pattern Thinning', 'Receding Hairlines', 'Crown Density Loss'],
    duration: 'Consultation Required',
    iconName: 'UserCheck',
    image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'mesotherapy',
    name: 'Mesotherapy',
    category: 'hair',
    shortDesc: 'Targeted scalp micro-infusions of vital nutrients, peptides, and vitamins to support hair strength.',
    detailedDesc: 'Delivers active hair-nourishing compounds directly to the scalp to help reduce excess shedding and nourish thinning hair roots.',
    idealFor: ['Excessive Hair Fall', 'Scalp Thinning', 'Seasonal Shedding'],
    duration: '30 - 45 mins',
    iconName: 'Activity',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'laser-hair-removal',
    name: 'Laser Hair Removal',
    category: 'hair',
    shortDesc: 'Clinical laser technology for safe, long-term unwanted hair reduction on face and body.',
    detailedDesc: 'Cooling-assisted laser protocols targeting melanin in hair follicles across customized sessions for smooth skin maintenance.',
    idealFor: ['Unwanted Facial & Body Hair', 'Ingrown Hairs', 'Long-term Hair Reduction'],
    duration: '20 - 60 mins',
    iconName: 'Flame',
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=800&q=80',
    popular: true
  },

  // Aesthetic Treatments
  {
    id: 'dermal-fillers',
    name: 'Dermal Fillers',
    category: 'aesthetic',
    shortDesc: 'Hyaluronic acid-based aesthetic volumizers to restore facial symmetry and soften deeper lines.',
    detailedDesc: 'Administered with precise anatomical care to subtly enhance cheek volume, smooth smile lines, and support youthful facial contours.',
    idealFor: ['Cheek & Mid-Face Volume Loss', 'Nasolabial Folds', 'Under-Eye Hollows'],
    duration: '45 mins',
    iconName: 'Droplet',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'coolsculpting-treatments',
    name: 'CoolSculpting Treatments',
    category: 'aesthetic',
    shortDesc: 'Non-invasive targeted cryolipolysis cooling to address localized stubborn fat deposits.',
    detailedDesc: 'Controlled cooling technology that targets subcutaneous fat cells in areas like the abdomen, flanks, and submental region without incisions.',
    idealFor: ['Diet-Resistant Fat Pockets', 'Abdominal & Flank Contouring', 'Submental Area'],
    duration: '45 - 75 mins',
    iconName: 'Disc',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80'
  },

  // Dermatology
  {
    id: 'dermatologic-surgery',
    name: 'Dermatologic Surgery',
    category: 'dermatology',
    shortDesc: 'Minor clinical excisions, skin tag and mole removals performed under sterile conditions.',
    detailedDesc: 'Safe, minimal-scarring clinical procedures for benign skin lesions, tags, and cysts utilizing precise electrosurgery or minor excision.',
    idealFor: ['Skin Tags & Warts', 'Benign Moles', 'Epidermoid Cysts'],
    duration: '30 - 60 mins',
    iconName: 'Scissors',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'rev-1',
    author: 'Pooja K.',
    rating: 5,
    date: '3 weeks ago',
    text: 'My skin had small spots, open pores, and looked dull and dehydrated earlier. After the treatment, my skin looks clear, refreshed, and much healthier. I’ve barely needed any foundation since my sessions at Crystal Skin Clinic.',
    treatment: 'Pigmentation & Deep Peeling',
    verified: true,
    avatarText: 'PK'
  },
  {
    id: 'rev-2',
    author: 'Anjali Sharma',
    rating: 5,
    date: '1 month ago',
    text: 'The clinic staff members are very humble and helpful. And the treatment given by Dr. Misha has been highly effective. Thank you, Dr. Misha, for helping me get healthier and clearer skin.',
    treatment: 'Skin Rejuvenation Protocol',
    verified: true,
    avatarText: 'AS'
  },
  {
    id: 'rev-3',
    author: 'Sagar M.',
    rating: 5,
    date: '2 months ago',
    text: 'Very good quick results for skin. The diagnosis was spot on and the doctor explained the routine in detail without pushing unnecessary products. Highly recommend for anyone around Yerawada.',
    treatment: 'Acne & Skin Texture Therapy',
    verified: true,
    avatarText: 'SM'
  },
  {
    id: 'rev-4',
    author: 'Rohan Deshmukh',
    rating: 5,
    date: '2 months ago',
    text: 'Came for hair loss and scalp treatment after seeing their rating near Poona Business Bay. Noticed significant reduction in hair fall within 4 mesotherapy sessions. Very clean and hygienic clinic setup.',
    treatment: 'Hair Mesotherapy',
    verified: true,
    avatarText: 'RD'
  },
  {
    id: 'rev-5',
    author: 'Snehal Patil',
    rating: 5,
    date: '3 months ago',
    text: 'Best laser hair removal experience in Pune! Virtually painless cooling laser and great care taken during each session. Visible thinning after just 2 sittings.',
    treatment: 'Laser Hair Removal',
    verified: true,
    avatarText: 'SP'
  },
  {
    id: 'rev-6',
    author: 'Kavita M.',
    rating: 5,
    date: '3 months ago',
    text: 'Dr. Misha is extremely patient and listens carefully to all skin concerns. The customized peel package completely removed stubborn tan and blemishes from my hands and face.',
    treatment: 'Deep Peelings',
    verified: true,
    avatarText: 'KM'
  }
];

export const BEFORE_AFTER_CASES: BeforeAfterItem[] = [
  {
    id: 'case-hand-pigmentation',
    title: 'Severe Hand Hyperpigmentation & Textural Clearing',
    category: 'Skin Peeling',
    concern: 'Intense dark hyperpigmentation, rough keratosis and uneven patches on palms and hands',
    treatmentName: 'Custom Clinical Deep Peeling Protocol',
    sessions: '3 Sessions',
    beforeDesc: 'Rough, darkened skin with prominent patchiness and dark pigmentation over palm folds.',
    afterDesc: 'Remarkable skin renewal with balanced tone, smooth texture, and significantly cleared dark spots.',
    beforeImage: 'hand_pigmentation_before',
    afterImage: 'hand_pigmentation_after',
    note: 'Authentic clinic case document from Dr. Misha’s Crystal Skin patient records.'
  },
  {
    id: 'case-hair-density',
    title: 'Hairline Restoration & Scalp Density Rebuilding',
    category: 'Hair Care',
    concern: 'Frontal receding hairline, visible scalp thinning, and follicular weakening',
    treatmentName: 'Follicular Hair Restoration & Scalp Booster Protocol',
    sessions: 'Complete Treatment Plan',
    beforeDesc: 'Receded frontal temporal peaks with pronounced thinning on the central scalp.',
    afterDesc: 'Natural, dense hair coverage with well-defined hairline and restored follicular thickness.',
    beforeImage: 'hair_transplant_before',
    afterImage: 'hair_transplant_after',
    note: 'Individual outcomes vary based on baseline follicular density and adherence to care.'
  },
  {
    id: 'case-facial-clarity',
    title: 'Facial Melasma & Open Pore Refinement',
    category: 'Laser & Pigmentation',
    concern: 'Persistent sun spots, enlarged open pores, and dehydrated skin barrier',
    treatmentName: 'Laser Skin Therapy + Hydration Medi-Facial',
    sessions: '4 Sessions',
    beforeDesc: 'Uneven tone with visible sun damage spots, enlarged T-zone pores, and dull complexion.',
    afterDesc: 'Radiant crystal clarity, refined pore structure, and visibly even tone without heavy makeup.',
    beforeImage: 'facial_glow_before',
    afterImage: 'facial_glow_after',
    note: 'Requires customized sun protection and post-procedure barrier maintenance.'
  }
];

export const WHY_CHOOSE_US = [
  {
    id: 'personalized-care',
    title: 'Personalized Care',
    description: 'Treatments selected according to individual concerns, skin type, and lifestyle goals rather than one-size-fits-all packages.',
    icon: 'HeartHandshake'
  },
  {
    id: 'modern-options',
    title: 'Modern Treatment Options',
    description: 'A wide range of evidence-based skin, hair, laser, and aesthetic treatments utilizing clinically proven technology.',
    icon: 'Sparkles'
  },
  {
    id: 'patient-experience',
    title: 'Patient-Centered Experience',
    description: 'A comfortable, private, and strictly hygienic clinical environment where your safety and comfort come first.',
    icon: 'ShieldCheck'
  },
  {
    id: 'convenient-location',
    title: 'Convenient Pune Location',
    description: 'Centrally located at Ganga Complex in Yerawada, right opposite Poona Business Bay with easy accessibility.',
    icon: 'MapPin'
  }
];

export const TRUST_METRICS = [
  {
    metric: '4.9 ★',
    subtext: 'Google Rating',
    detail: 'Based on 133 verified patient reviews',
    icon: 'Star'
  },
  {
    metric: 'Personalized',
    subtext: 'Tailored Treatments',
    detail: 'Care customized to your skin & hair goals',
    icon: 'UserCheck'
  },
  {
    metric: 'Advanced',
    subtext: 'Modern Technology',
    detail: 'Evidence-based aesthetic & clinical procedures',
    icon: 'Sparkles'
  },
  {
    metric: 'Yerawada',
    subtext: 'Convenient Location',
    detail: 'Opp. Poona Business Bay, Pune 411006',
    icon: 'MapPin'
  }
];
