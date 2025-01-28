
const treatmentDurations = [
  {
      id: 1,
      name: "Advanced Skin Care",
      path: "/booking/advanced-skin-care",
      treatments: [
          {
               id: 1,
               name: "Skin Cleansing Care",
              duration: "15 min",
              price: "15 €",
              description: "A deep cleansing treatment to rejuvenate your skin.",
          },
          {
              id: 2,
              name: "Eyes Contour Care",
              duration: "20 min",
              price: "25 €",
              description:
        "A targeted treatment for reducing puffiness and dark circles.",
          },
          {
              id: 3,
              name: "Express Facial",
              duration: "30 min",
              price: "35 €",
              description: "Quick and refreshing facial for a glowing complexion.",
            },
            {
              id: 4,
              name: "Regenerating Treatment",
              duration: "60 min",
              price: "60 €",
              description: "A luxurious treatment for cell regeneration and hydration.",
            },
            {
              id: 5,
              name: "Peeling Treatment",
              duration: "60 min",
              price: "65 €",
              description: "Exfoliation treatment for smoother, radiant skin.",
            },
            {
              id: 6,
              name: "Anti-aging Treatment",
              duration: "1h 15 min",
              price: "75 €",
              description: "Reduces wrinkles and improves skin elasticity.",
            },
            {
              id: 7,
              name: "Personalised Facial Treatment",
              duration: "1h 30 min",
              price: "110 €",
              description: "Customised treatment tailored to your skin needs.",
            },
            {
              id: 8,
              name: "Ultra Essence Serum",
              duration: "5 min",
              price: "10 €",
              description: "Intense hydration with concentrated active ingredients.",
            },
          ],
      },
      {
          id: 2,
          name: "Hair and Scalp Care",
          path: "/booking/hair-scalp-care",
          treatments: [
              {
              id: 1,
              name: "Wellness Shampoo (short hair)",
              duration: "20 min",
              price: "25 €",
              description: "Smooth and strengthen your hair.",
              },
              {
              id: 2,
              name: "Wellness Shampoo (mid-lenght hair)",
              duration: "30 min",
              price: "35 €",
              description: "Restore moisture and shine to dry hair.",
              },
              {
              id: 3,
              name: "Wellness Shampoo (long hair)",
              duration: "45 min",
              price: "50 €",
              description: "Deep cleanse and detox for your scalp.",
              },
              {
              id: 4,
              name: "Wellness Shampoo & Facial Express",
              duration: "45 min",
              price: "60 €",
              description: "Deep cleanse and Restore moisture and shine to dry hair.",
              },
              {
              id: 5,
              name: "Wellness Shampoo & Relax Head Massage",
              duration: "60 min",
              price: "75 €",
              description:
              "a relaxing treatment that focuses on the scalp, and can include a massage, deep conditioning, and aromatherapy.",
              },    
          ]
      }, 
      {
          id: 3,
          name: "Eye Lash Extension Nature Look",
          path: "/booking/eyeslash",
          treatments: [
              {
                  id: 1,
                  name: "Eye Lash Extension Nature Look",
                  duration: "1h 30 min",
                  price: "99 €",
                  description:
                    "Natural-looking eyelash extensions are soft, subtle, and comfortable, and they enhance your natural lashes.",
                },
                {
                  id: 2,
                  name: "Eye Lash Extension Russian Volume",
                  duration: "1h 30 min",
                  price: "120 €",
                  description: "Volume Lashes: Appear fluffier and more voluminous.",
                },
                {
                  id: 3,
                  name: "Refill (2weeks made)",
                  duration: "45 min",
                  price: "45 €",
                  description:
                    "Refills are a way to keep your lashes looking fresh and prevent the shedding effect that occurs naturally.",
                },
                {
                  id: 4,
                  name: "Refill (3weeks made)",
                  duration: "60 min",
                  price: "60 €",
                  description:
                    "Refills are a way to keep your lashes looking fresh and prevent the shedding effect that occurs naturally.",
                },
                {
                  id: 5,
                  name: "DyBrow",
                  duration: "30 min",
                  price: "30 €",
                  description: "Fill in the gaps for a fuller looking brow.",
                },
          ]
      }, 
      {
          id: 4,
          name: "Massages",
          path: "/booking/massages",
          treatments: [
              {
                  id: 1,
                  name: "Hand & Arm Massage",
                  duration: "30 min",
                  price: "35 €",
                  description:
                    "increase range of movement by decreasing muscle tightness and reducing restriction.",
                },
                {
                  id: 2,
                  name: "Leg Massage",
                  duration: "30 min",
                  price: "35 €",
                  description: "This treatment help relieve stress and reduce tension.",
                },
                {
                  id: 3,
                  name: "Oriental Head Massage",
                  duration: "35 min",
                  price: "40 €",
                  description:
                    "A head massage helps soothe muscle tension across the hairline, behind the ears, and in the neck.",
                },
                {
                  id: 4,
                  name: "Body Massage (with Essential oils)",
                  duration: "60 min",
                  price: "60 €",
                  description:
                    "This treatment to ensure that muscles are lengthened and tension is removed.",
                },
                {
                  id: 5,
                  name: "Aromatouch Technique",
                  duration: "60 min",
                  price: "75 €",
                  description:
                    "A relaxing treatment that focuses on the scalp, and can include a massage, deep conditioning, and aromatherapy.",
                },
                {
                  id: 6,
                  name: "Body Scrub",
                  duration: "45 min",
                  price: "45 €",
                  description:
                    "Improve circulation, help prevent ingrown hairs, reduce the appearance of cellulite, unclog pores.",
                },
          ]
      }, 
      {
          id: 5,
          name: "ManicuresPedicures",
          path: "/booking/manicurespedicures",
          treatments: [
              {
                  id: 1,
                  name: "Express Manicure",
                  duration: "45 min",
                  price: "45 €",
                  description: "A quick nail treatment that's designed to be efficient and high-quality and apply gel polish color of your choice."
              },
              {
                  id: 2,
                  name: "Apply Gel Polish only",
                  duration: "25 min",
                  price: "30 €",
              },
              {
                  id: 3,
                  name: "Powder resin-complete installation with Gel polish",
                  duration: "80 min",
                  price: "80 €",
              },
              {
                  id: 4,
                  name: "Refill powder resin with gel polish renew",
                  duration: "70 min",
                  price: "70 €",
              },
              {
                  id: 5,
                  name: "Gel polish Removal",
                  duration: "15 min",
                  price: "15 €",
              },
              {
                  id: 6,
                  name: "Removal false nails",
                  duration: "30 min",
                  price: "30 €",
              },
              {
                  id: 7,
                  name: "Feet Spa with Gel polish application",
                  duration: "70 min",
                  price: "75 €",
              },
          ]
      }, 
      {
        id: 6,
        name: "Waxing",
        path: "/booking/waxing",
        treatments: [
            { id: 1, 
              subcategory: "facewax", 
              name: "Face Wax Options", 
              description: "EyeBrows; ForeHead; UpperLip; Chin", 
              price: "from 10€" },
            { id: 2, 
              subcategory: "armwax", 
              name: "Arm Wax Options", 
              description: "Half Arm; Full Arm", 
              price: "from 15€" },
            { id: 3, 
              subcategory: "legwax", 
              name: "Leg Wax Options", 
              description: "Half Legs; Thighs; Tree/Four Legs; Full Legs", 
              price: "from 20€" },
            { id: 4, 
              subcategory: "upperbodywax", 
              name: "Upper Body Wax Options", 
              description: "Underarms; Stomach; Back", 
              price: "from 15€" },
            { id: 5, 
              subcategory: "bikiniwax", 
              name: "Bikini Wax Options", 
              description: "Classic; Extended; Full", 
              price: "from 15€" },
            { id: 6, 
              subcategory: "ladiespackages", 
              name: "Ladies Wax Packages", 
              description: "Combo: Half Legs + Underarms + Extended Bikini; Combo: Half Legs + Underarms + Full Bikini; Combo: Full Legs + Underarms + Full Bikini; Full Body", 
              price: "from 50€" },
        ],
    },
];

const treatments = {
  "Arm Wax Options": [
      { 
        id: 1, 
        name: "Half Arm", 
        duration: "15 min", 
        price: "15 €" },
      { 
        id: 2, 
        name: "Full Arm", 
        duration: "20 min", 
        price: "20 €" },
    ],
    "Bikini Wax Options": [
      { 
        id: 1, 
        name: "Classic Bikini", 
        duration: "20 min", 
        price: "15 €" },
      { 
        id: 2, 
        name: "Extended Bikini", 
        duration: "25 min", 
        price: "22 €" },
      { 
        id: 3, 
        name: "Full Bikini", 
        duration: "30 min", 
        price: "30 €" },
    ],
    "Face Wax Options": [
      { 
        id: 1, 
        name: "Eyebrows", 
        duration: "15 min", 
        price: "15 €" },
      { 
        id: 2, 
        name: "Forehead", 
        duration: "10 min", 
        price: "10 €" },
      { 
        id: 3, 
        name: "Upper Lip", 
        duration: "10 min", 
        price: "10 €" },
      { 
        id: 4, 
        name: "Chin", 
        duration: "10 min", 
        price: "10 €" },
    ],
    "Leg Wax Options": [
      { 
        id: 1, 
        name: "Half Legs", 
        duration: "20 min", 
        price: "20 €" },
      { 
        id: 2, 
        name: "Thighs", 
        duration: "20 min", 
        price: "22 €" },
      { 
        id: 3, 
        name: "Three/Four Legs", 
        duration: "25 min", 
        price: "30 €" },
      { 
        id: 4, 
        name: "Full Legs", 
        duration: "30 min", 
        price: "40 €" },
    ],
    "Upper Body Wax Options": [
      { 
        id: 1, 
        name: "Underarms", 
        duration: "15 min", 
        price: "10 €" },
      { 
        id: 2, 
        name: "Stomach", 
        duration: "15 min", 
        price: "10 €" },
      { 
        id: 3, 
        name: "Back", 
        duration: "15 min", 
        price: "15 €" },
    ],
    "Ladies Wax Packages": [
      { 
        id: 1, 
        name: "Combo: Half Legs + Underarms + Extended Bikini", 
        duration: "50 min", 
        price: "50 €" },
      { 
        id: 2, 
        name: "Combo: Half Legs + Underarms + Full Bikini", 
        duration: "55 min", 
        price: "55 €" },
      { 
        id: 3, 
        name: "Combo: Full Legs + Underarms + Full Bikini", 
        duration: "60 min", 
        price: "60 €" },
      { 
        id: 4, 
        name: "Full Body", 
        duration: "N/A", 
        price: "120 €" },
    ],
  };


export { treatmentDurations, treatments };

  