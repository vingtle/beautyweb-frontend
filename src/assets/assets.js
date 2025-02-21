import BGColorful from "../assets/Colorful.jpg";
import logo from "../assets/mymiconseil_logoweb.png";
import logo1 from "../assets/logo1.png";
import Skincare from "../assets/Skincare.jpg";
import Smallplant from "../assets/Smallplant.jpg";
import Waxpage from "../assets/waxpage.jpg";
import dropdown_icon from "../assets/dropdown.png";
import profile_pic from "../assets/Avatar.jpg";
import treatmentpage from "../assets/treatmentpage.jpg";
import user_icon from './icon_user.png';


export const assets = {
     BGColorful,
     logo,
     logo1,
     Skincare,
     Smallplant,
     Waxpage,
     dropdown_icon,
     profile_pic,treatmentpage, user_icon,
}


// export const treatmentName = [
//      {
//           name: "Advanced Skin Care",
//           path: "/booking/advanced-skin-care",
//           available: true,
//           subcategories: []
//         },
//         {
//           name: "Hair & Scalp Care", 
//           path: "/booking/hair-scalp-care",
//           available: true,
//           subcategories: [] 
//         },
//         {  
//           name: "Waxing", 
//           path: "/booking/waxing",
//           available: true,
//           subcategories: [
//             {
//               subcategory: "facewax",
//                 name: "Face Wax Options",
//                 description: "EyeBrows; ForeHead; UpperLip; Chin",
//                 price: "from 10€",
//                 category: [
//                     { name: "EyeBrows", duration: "15 min", price: "15 €" },
//                     { name: "ForeHead", duration: "10 min", price: "10 €" },
//                     { name: "UpperLip", duration: "10 min", price: "10 €" },
//                     { name: "Chin", duration: "10 min", price: "10 €" }
//                 ]
//               },
//               {
//                 subcategory: "armwax",
//                 name: "Arm Wax Options",
//                 description: "Half Arm; Full Arm",
//                 price: "from 15€",
//                 category: [
//                     { name: "Half Arm", duration: "15 min", price: "15 €" },
//                     { name: "Full Arm", duration: "20 min", price: "20 €" }
//                 ]
//               },
//               {
//                 subcategory: "legwax",
//                 name: "Leg Wax Options",
//                 description: "Half Legs; Thighs; Tree/Four Legs; Full Legs",
//                 price: "from 20€",
//                 category: [
//                   { name: 'Half Legs', duration: ''}
//                 ]
//               }
//             { name: "Leg Wax Options", description: "Half Legs; Thighs; Tree/Four Legs; Full Legs", price: "from 20€" },
//             { name: "Upper Body Wax Options", description: "Underarms; Stomach; Back", price: "from 15€" },
//             { name: "Bikini Wax Options", description: "Classic; Extended; Full", price: "from 15€" },
//             { name: "Ladies Wax Packages", description: "Combo: Half Legs + Underarms + Extended Bikini; Combo: Half Legs + Underarms + Full Bikini; Combo: Full Legs + Underarms + Full Bikini; Full Body", price: "from 50€" },
//             }
//           ] 
//         },
//         { 
//           name: "Massages", 
//           path: "/booking/massages",
//           available: true,
//           subcategories: []
//         },
//         {
          
//           name: "Manicures & Pedicures",
//           path: "/booking/manicures-pedicures",
//           available: true,
//           subcategories: []
//         },
//         {
          
//           name: "Eyelash Extensions & Lifts",
//           path: "/booking/eyelash-extensions",
//           available: true,
//           subcategories: []
//         },
// ]

export const mymi = [
     {
          name: "Advanced Skin Care",
          path: "/booking/advanced-skin-care",
          available: true,
          subcategories: [
              {
                  subcategory: "Skin Cleansing Care",
                  duration: "15 min",
                  price: "15 €",
                  description: "A deep cleansing treatment to rejuvenate your skin.",
              },
              {
                  subcategory: "Eyes Contour Care",
                  duration: "20 min",
                  price: "25 €",
                  description:
            "A targeted treatment for reducing puffiness and dark circles.",
              },
              {
                  subcategory: "Express Facial",
                  duration: "30 min",
                  price: "35 €",
                  description: "Quick and refreshing facial for a glowing complexion.",
                },
                {
                  subcategory: "Regenerating Treatment",
                  duration: "60 min",
                  price: "60 €",
                  description: "A luxurious treatment for cell regeneration and hydration.",
                },
                {
                  subcategory: "Peeling Treatment",
                  duration: "60 min",
                  price: "65 €",
                  description: "Exfoliation treatment for smoother, radiant skin.",
                },
                {
                  subcategory: "Anti-aging Treatment",
                  duration: "1h 15 min",
                  price: "75 €",
                  description: "Reduces wrinkles and improves skin elasticity.",
                },
                {
                  subcategory: "Personalised Facial Treatment",
                  duration: "1h 30 min",
                  price: "110 €",
                  description: "Customised treatment tailored to your skin needs.",
                },
                {
                  subcategory: "Ultra Essence Serum",
                  duration: "5 min",
                  price: "10 €",
                  description: "Intense hydration with concentrated active ingredients.",
                },
              ],
          },
          {
               name: "Hair & Scalp Care",  // Fixed name
               path: "/booking/hair-scalp-care",
               available: true,
               subcategories: [
                   {
                       subcategory: "Wellness Shampoo (short hair)",
                       duration: "20 min",
                       price: "25 €",
                       description: "Smooth and strengthen your hair.",
                   },
                   {
                       subcategory: "Wellness Shampoo (mid-length hair)", // Fixed typo
                       duration: "30 min",
                       price: "35 €",
                       description: "Restore moisture and shine to dry hair.",
                   },
                   {
                       subcategory: "Wellness Shampoo (long hair)",
                       duration: "45 min",
                       price: "50 €",
                       description: "Deep cleanse and detox for your scalp.",
                   },
                   {
                       subcategory: "Wellness Shampoo & Facial Express",
                       duration: "45 min",
                       price: "60 €",
                       description: "Deep cleanse and Restore moisture and shine to dry hair.",
                   },
                   {
                       subcategory: "Wellness Shampoo & Relax Head Massage",
                       duration: "60 min",
                       price: "75 €",
                       description: "A relaxing scalp treatment with massage.",
                   }
               ]
          }, 
          {
               name: "Eyelash Extensions & Lifts",  // Fixed name
               path: "/booking/eyelash-extensions",
               available: true,
               subcategories: [
                   {
                       subcategory: "Eyelash Extension Nature Look",  // Updated category name
                       duration: "1h 30 min",
                       price: "99 €",
                       description: "Natural-looking eyelash extensions.",
                   },
                   {
                       subcategory: "Eyelash Extension Russian Volume",
                       duration: "1h 30 min",
                       price: "120 €",
                       description: "Fluffy and voluminous extensions.",
                   },
                   {
                      subcategory: "Refill (2 weeks made)",
                       duration: "45 min",
                       price: "45 €",
                       description: "Keep your lashes fresh.",
                   },
                   {
                       subcategory: "Refill (3 weeks made)",
                       duration: "60 min",
                       price: "60 €",
                       description: "Longer-lasting lash maintenance.",
                   },
                   {
                       subcategory: "DyBrow",
                       duration: "30 min",
                       price: "30 €",
                       description: "Fuller brows with natural shading.",
                   },
               ]
          },
          {
              name: "Massages",
              path: "/booking/massages",
              available: true,
              subcategories: [
                  {
                      subcategory: "Hand & Arm Massage",
                      duration: "30 min",
                      price: "35 €",
                      description:
                        "increase range of movement by decreasing muscle tightness and reducing restriction.",
                    },
                    {
                      subcategory: "Leg Massage",
                      duration: "30 min",
                      price: "35 €",
                      description: "This treatment help relieve stress and reduce tension.",
                    },
                    {
                      subcategory: "Oriental Head Massage",
                      duration: "35 min",
                      price: "40 €",
                      description:
                        "A head massage helps soothe muscle tension across the hairline, behind the ears, and in the neck.",
                    },
                    {
                      subcategory: "Body Massage (with Essential oils)",
                      duration: "60 min",
                      price: "60 €",
                      description:
                        "This treatment to ensure that muscles are lengthened and tension is removed.",
                    },
                    {
                      subcategory: "Aromatouch Technique",
                      duration: "60 min",
                      price: "75 €",
                      description:
                        "A relaxing treatment that focuses on the scalp, and can include a massage, deep conditioning, and aromatherapy.",
                    },
                    {
                      subcategory: "Body Scrub",
                      duration: "45 min",
                      price: "45 €",
                      description:
                        "Improve circulation, help prevent ingrown hairs, reduce the appearance of cellulite, unclog pores.",
                    },
              ]
          }, 
          {
               name: "Manicures & Pedicures",  // Fixed name
               path: "/booking/manicures-pedicures",
               available: true,
               subcategories: [
                   {
                       subcategory: "Express Manicure",
                       duration: "45 min",
                       price: "45 €",
                       description: "A quick nail treatment with gel polish.",
                   },
                   {
                    subcategory: "Apply Gel Polish only",
                       duration: "25 min",
                       price: "30 €",
                   },
                   {
                    subcategory: "Powder resin-complete installation with Gel polish",
                       duration: "80 min",
                       price: "80 €",
                   },
                   {
                    subcategory: "Refill powder resin with gel polish renew",
                       duration: "70 min",
                       price: "70 €",
                   },
                   {
                    subcategory: "Gel polish Removal",
                       duration: "15 min",
                       price: "15 €",
                   },
                   {
                    subcategory: "Removal false nails",
                       duration: "30 min",
                       price: "30 €",
                   },
                   {
                    subcategory: "Feet Spa with Gel polish application",
                       duration: "70 min",
                       price: "75 €",
                   },
               ]
           },
          {
            name: "Waxing",
            path: "/booking/waxing",
            subcategories: [
                {
                  subcategory: "facewax", 
                  name: "Face Wax Options", 
                  description: "EyeBrows; ForeHead; UpperLip; Chin", 
                  price: "from 10€",
                  category: [
                    { name: "EyeBrows", duration: "15 min", price: "15 €" },
                    { name: "ForeHead", duration: "10 min", price: "10 €" },
                    { name: "UpperLip", duration: "10 min", price: "10 €" },
                    { name: "Chin", duration: "10 min", price: "10 €" },
                  ] 
               },
                { 
                  subcategory: "armwax", 
                  name: "Arm Wax Options", 
                  description: "Half Arm; Full Arm", 
                  price: "from 15€",
                  category: [
                         { name: "Half Arm", duration: "15 min", price: "15 €" },
                         { name: "Full Arm", duration: "20 min", price: "20 €" },
                       ],
                },
                {
                  subcategory: "legwax", 
                  name: "Leg Wax Options", 
                  description: "Half Legs; Thighs; Tree/Four Legs; Full Legs", 
                  price: "from 20€",
                  category: [
                    { name: "Half Legs", duration: "20 min", price: "20 €" },
                    { name: "Thighs", duration: "20 min", price: "22 €" },
                    { name: "Three/Four Legs", duration: "25 min", price: "30 €" },
                    { name: "Full Legs", duration: "30 min", price: "40 €" },
                  ]
                },
                { 
                  subcategory: "upperbodywax", 
                  name: "Upper Body Wax Options", 
                  description: "Underarms; Stomach; Back", 
                  price: "from 15€",
                  category: [
                    { name: "Underarms", duration: "15 min", price: "10 €" },
                    { name: "Stomach", duration: "15 min", price: "10 €" },
                    { name: "Back", duration: "15 min", price: "15 €" },
                  ]
               },
                { 
                  subcategory: "bikiniwax", 
                  name: "Bikini Wax Options", 
                  description: "Classic; Extended; Full", 
                  price: "from 15€",
                  category: [
                    { name: "Classic Bikini", duration: "20 min", price: "15 €" },
                    { name: "Extended Bikini", duration: "25 min", price: "22 €" },
                    { name: "Full Bikini", duration: "30 min", price: "30 €" },
                  ]
                },
                {
                  subcategory: "ladiespackages", 
                  name: "Ladies Wax Packages", 
                  description: "Combo: Half Legs + Underarms + Extended Bikini; Combo: Half Legs + Underarms + Full Bikini; Combo: Full Legs + Underarms + Full Bikini; Full Body", 
                  price: "from 50€",
                  category: [
                    { name: "Combo: Half Legs + Underarms + Extended Bikini", duration: "50 min", price: "50 €" },
                    { name: "Combo: Half Legs + Underarms + Full Bikini", duration: "55 min", price: "55 €" },
                    { name: "Combo: Full Legs + Underarms + Full Bikini", duration: "60 min", price: "60 €" },
                    { name: "Full Body", duration: "N/A", price: "120 €" },
                  ]
                },
            ],
        },
]