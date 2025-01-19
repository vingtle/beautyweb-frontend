import {assets} from "../../assets/assets";
import Waxing from "./Treatment Categorys/Waxing";


const treatmentCategories = [
    {
        id: 1,
        name: "Advanced Skin Care",
        path: "/treatments/advanced-skin-care",
        image: assets.Skincare,
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
            path: "/treatments/hair-scalp-care",
            image: assets.Haircare,
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
            path: "/treatments/eyeslash",
            image: assets.Haircare,
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
            path: "/treatments/massages",
            image: assets.BGColorful,
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
            path: "/treatments/manicurespedicures",
            image: assets.Haircare,
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
            path: "/treatments/waxing",
            image: assets.Waxpage,
            treatments: <Waxing />,
        },
];

export default treatmentCategories;