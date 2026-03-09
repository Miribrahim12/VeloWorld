const products = [

/* ============================
   MOUNTAIN BIKE X1
============================ */
{
    id: "mountain1",
    category: "mountain",
    name: "Mountain Bike X1",
    price: "850 AZN",

    desc: "The Mountain Bike X1 is a premium high-performance MTB engineered for riders seeking maximum control, stability, and durability on demanding terrains. Built with a lightweight yet rugged aluminum alloy frame, it delivers exceptional performance on steep climbs, rocky trails, and forest routes. The Shimano 21-speed drivetrain ensures smooth and precise shifting, making it suitable for both beginners and experienced riders.",

    specs: {
        frame: "Aluminum Alloy 6061",
        wheelSize: "29 inches",
        tire: "All-Terrain MTB Tires 29×2.25\"",
        brakes: "Mechanical Disc Brakes (Front & Rear)",
        speeds: "Shimano 21-Speed Drivetrain",
        fork: "Front Suspension with Shock Absorption",
        weight: "14.8 kg (approx.)",
        maxLoad: "120 kg",
        rims: "Double-Wall Aluminum Rims",
        crankset: "3-plate MTB Crankset",
        handlebar: "720mm MTB Handlebar",
        saddle: "Ergonomic Comfort MTB Saddle",
        recommendedHeight: "165–195 cm",
        idealUse: "Off-road, mountain, gravel, forest rides"
    },

    images: ["mountain1.png", "mountain11.jpg", "mountain12.jpg"],
    userType: "admin",
    postedBy: "VeloWorld"
},

/* ============================
   MOUNTAIN PRO 300
============================ */
{
    id: "mountain2",
    category: "mountain",
    name: "Mountain Pro 300",
    price: "1150 AZN",

    desc: "High-performance MTB designed for adventure and stability.",

    specs: {
        frame: "Aluminum Alloy 6061 (Reinforced)",
        wheelSize: "29 inches",
        speeds: "24-Speed Shimano",
        brakes: "Mechanical Disc Brakes",
        fork: "Suspension Fork with Lockout",
        weight: "15.2 kg",
        tire: "29×2.30\"",
        recommendedHeight: "165–200 cm"
    },

    images: ["mountain2.png", "mountain21.jpg", "mountain22.jpg"],
    userType: "admin",
    postedBy: "VeloWorld"
},

/* ============================
   MOUNTAIN TRAIL MASTER
============================ */
{
    id: "mountain3",
    category: "mountain",
    name: "Mountain Trail Master",
    price: "990 AZN",

    desc: "Full suspension mountain bike for serious trail riders.",

    specs: {
        frame: "Aluminum Alloy (Full Suspension)",
        wheelSize: "29 inches",
        speeds: "27-Speed Shimano",
        brakes: "Hydraulic Disc Brakes",
        frontSuspension: "120mm",
        rearShock: "Adjustable",
        weight: "15.9 kg"
    },

    images: ["mountain3.jpg", "mountain31.jpg", "mountain32.jpg"],
    userType: "admin",
    postedBy: "VeloWorld"
},

/* ============================
   ROAD BIKE AERO
============================ */
{
    id: "road1",
    category: "road",
    name: "Road Bike Aero",
    price: "1350 AZN",

    desc: "Ultra-light carbon road bike for high-speed performance.",

    specs: {
        frame: "Carbon Fiber",
        wheelSize: "700c",
        speeds: "16",
        weight: "8.9 kg"
    },

    images: ["road1.png", "road11.jpg", "road12.jpg"],
    userType: "admin",
    postedBy: "VeloWorld"
},

/* ============================
   ROAD SPEEDSTER
============================ */
{
    id: "road2",
    category: "road",
    name: "Road Speedster",
    price: "1250 AZN",

    desc: "Aero aluminum frame + carbon fork for fast road cycling.",

    specs: {
        frame: "Aero Aluminum",
        wheelSize: "700c",
        speeds: "16-Speed",
        weight: "9.6 kg"
    },

    images: ["road2.png", "road21.jpg", "road22.jpg"],
    userType: "admin",
    postedBy: "VeloWorld"
},

/* ============================
   HYBRID URBAN 200
============================ */
{
    id: "hybrid1",
    category: "hybrid",
    name: "Hybrid Urban 200",
    price: "750 AZN",

    desc: "City + road hybrid for commuting and fitness.",

    specs: {
        frame: "Aluminum Hybrid",
        wheelSize: "700C",
        speeds: "21",
        weight: "13.9 kg"
    },

    images: ["hybrid1.png", "hybrid11.jpg", "hybrid12.jpg"],
    userType: "admin",
    postedBy: "VeloWorld"
},

/* ============================
   CITY COMFORT BIKE
============================ */
{
    id: "city1",
    category: "city",
    name: "City Comfort Bike",
    price: "560 AZN",

    desc: "Comfortable city bike with basket.",

    specs: {
        frame: "Step-Through Frame",
        wheelSize: "26 inches",
        speeds: "7",
        weight: "15.2 kg"
    },

    images: ["city1.jpg", "city11.jpg", "city12.jpg"],
    userType: "admin",
    postedBy: "VeloWorld"
},

/* ============================
   ELECTRIC JET PRO
============================ */
{
    id: "electric1",
    category: "electric",
    name: "Electric Jet Pro",
    price: "1850 AZN",

    desc: "36V battery, 45 km range urban e-bike.",

    specs: { 
        motor: "250W", 
        battery: "36V", 
        range: "45 km" 
    },

    images: ["electric1.jpg", "electric11.jpg", "electric12.jpg"],
    userType: "admin",
    postedBy: "VeloWorld"
},

/* ============================
   ELECTRIC POWER S
============================ */
{
    id: "electric2",
    category: "electric",
    name: "Electric Power S",
    price: "1650 AZN",

    desc: "Powerful 48V fat-tire electric MTB.",

    specs: { 
        motor: "500W", 
        battery: "48V", 
        wheelSize: "26×4.0" 
    },

    images: ["electric2.jpg", "electric21.jpg", "electric22.jpg"],
    userType: "admin",
    postedBy: "VeloWorld"
},

/* ============================
   KIDS TIGER
============================ */
{
    id: "kids1",
    category: "kids",
    name: "Kids Tiger 12\"",
    price: "320 AZN",

    desc: "Safe and lightweight kid’s bicycle.",

    specs: { 
        wheelSize: "12 inch", 
        ageRange: "6–10" 
    },

    images: ["kids1.png", "kids11.jpg", "kids12.jpg"],
    userType: "admin",
    postedBy: "VeloWorld"
},

/* ============================
   RETRO CLASSIC 80
============================ */
{
    id: "retro1",
    category: "retro",
    name: "Retro Classic 80",
    price: "620 AZN",

    desc: "Vintage-style elegant urban bicycle.",

    specs: { 
        frame: "Steel", 
        wheelSize: "700C", 
        speeds: "7" 
    },

    images: ["vintage1.jpg", "vintage11.jpg", "vintage12.jpg"],
    userType: "admin",
    postedBy: "VeloWorld"
},

/* ============================
   BMX STREET 100
============================ */
{
    id: "bmx1",
    category: "bmx",
    name: "BMX Street 100",
    price: "580 AZN",

    desc: "Freestyle BMX for tricks and skateparks.",

    specs: { 
        wheelSize: "20 inch", 
        weight: "11.8 kg" 
    },

    images: ["bmx1.jpg", "bmx11.jpg", "bmx12.jpg"],
    userType: "admin",
    postedBy: "VeloWorld"
}

];

console.log("product-data loaded:", products.length);