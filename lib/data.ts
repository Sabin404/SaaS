import {
  GrowingSmallBusiness,
  MultiChannel,
  OnlineStoreIcon,
  POSIcon,
  clockIcon,
  protectionIcon,
  bellIcon,
  powerIcon,
  clipBoard,
  truck,solarTag,channel, creditCard,chartLine,gridLine,box,
} from "@/app/_components/icons/Icons";
import Mark from "./../app/assets/mark.png";
import Sarah from "./../app/assets/sarah.png";
import RetailStore from "./../app/assets/retailstore.png";
import Anwar from "./../app/assets/anwar.jpg";
import Speed from "./../app/assets/speed.png";
import Purnima from "./../app/assets/purnima.jpg";
import Shipping from "./../app/assets/shipping.png";
import Bimal from "./../app/assets/bimal.jpg";
import allproduct from "./../app/assets/allproduct.png";
import realtime from "./../app/assets/realtime.png";
import sync from './../app/assets/sync.png';
import mission from './../app/assets/mission.jpg'
import vision from './../app/assets/vision.jpg'


export const sellerData = [
  {
    title: "Online Stores",
    subtitle:
      "Sell physical or digital products and need a simple way to manage products, orders, shipping, discounts, and customers from one dashboard.",
    icon: OnlineStoreIcon,
  },
  {
    title: "Retail Shops with POS",
    subtitle:
      "Run a physical store and want your POS sales, inventory, and online orders to stay in sync — no more manual updates or stock mistakes.",
    icon: POSIcon,
  },
  {
    title: "Multi-Channel Sellers",
    subtitle:
      "Sell across multiple platforms (website, POS, Instagram, marketplaces) and want one place to track sales, customers, payments, and delivery status.",
    icon: MultiChannel,
  },
  {
    title: "Growing Small Businesses",
    subtitle:
      "Need an easy, affordable way to manage sales, stock, customers, and deliveries without switching between multiple apps or doing manual work.",
    icon: GrowingSmallBusiness,
  },
];
export const testimonialData = [
  {
    title: "Managing our online and retail store\n is now effortless.",
    subtitle:
      "We used to update inventory manually across two systems, and it caused so many mistakes. Now everything syncs automatically — orders, stock, customers — and we save hours every day.",
    image: Sarah,
    name: "Sarah L.",
    role: "Owner, Trend Boutique",
  },
  {
    title: "The dashboard gives us a clear view of our business.",
    subtitle:
      "Real-time revenue, order tracking, and customer activity help us make quick decisions. It feels like having a full management team inside one simple dashboard.",
    image: Mark,
    name: "Mark T.",
    role: "Co-Founder, CoffeeCloud",
  },
  {
    title: "Inventory management has never been this easy.",
    subtitle:
      "We can track stock levels, manage suppliers, and avoid over-selling without any manual work. It saves our team hours every week and keeps operations running smoothly.",
    image: Mark,
    name: "Mark T.",
    role: "Co-Founder, CoffeeCloud",
  },
  {
    title: "Our sales and operations are finally in sync.",
    subtitle:
      "From orders to payments and shipping, everything updates in real time. The platform helps us stay organized, reduce errors, and scale confidently as we grow.",
    image: Sarah,
    name: "Mark T.",
    role: "Co-Founder, CoffeeCloud",
  },
];
export const blogs = [
  {
    title: "Managing our online and retail store is now \neffortless.",
    subtitle:
      "Learn simple techniques to keep your stock accurate, avoid overselling, and maintain real-time inventory updates across all your sales channels.",
    image: RetailStore,
    ownerImage: Anwar,
    ownerName: "Anwar Pandaan",
    date: "March 16,2022",
    readDuration: "6 min read",
  },
  {
    title: "7 Ways to Improve Your Order Processing \nSpeed",
    subtitle:
      "Discover easy workflow improvements that help you fulfill orders faster, reduce delays, and deliver a better customer experience.",
    image: Speed,
    ownerImage: Purnima,
    ownerName: "Purnima Sai",
    date: "March 16,2022",
    readDuration: "5 min read",
  },
  {
    title: "The Complete Guide to Setting Up Shipping for Your Store",
    subtitle:
      "Understand how shipping integrations work, how to choose the right couriers, and how to automate label printing and delivery tracking.",
    image: Shipping,
    ownerImage: Bimal,
    ownerName: "Bimal Khatri",
    date: "March 16,2022",
    readDuration: "7 min read",
  },
];
export const FAQData = [
  {
    title: "Do I need technical skills to use this platform?",
    subtitle:
      "No. Our system is built for everyone, even beginners. You can manage products, orders, and shipping with an easy, user-friendly dashboard.",
  },
  {
    title: "Can I cancel my subscription anytime?",
    subtitle:
      "Yes. You can cancel your subscription whenever you want without penalties, hidden charges, or complicated steps through your account settings.",
  },
  {
    title: "Which POS systems can I connect?",
    subtitle:
      "We support popular POS systems that integrate seamlessly, allowing real-time sync of sales, inventory, and customer data across platforms.",
  },
  {
    title: "What shipping partners do you support?",
    subtitle:
      "We work with trusted shipping partners to ensure fast deliveries, real-time tracking, flexible options, and reliable service for customers.",
  },
  {
    title: "How secure is my data?",
    subtitle:
      "Your data is protected using advanced security measures, encryption protocols, regular monitoring, and industry-standard practices to ensure safety.",
  },
];

export const featureData=[
  {
    title:"All Your Products in One Dashboard",
    subtitle:"Manage every item, variant, and category without switching between tools.",
    image:allproduct,
  },
  {
    title:"Real-time inventory accuracy",
    subtitle:"Your stock updates instantly whenever orders are placed or updated.",
    image:realtime,
  },
  {
    title:"Sync across all channels",
    subtitle:"Your website, POS, Instagram, and marketplaces stay perfectly aligned.",
    image:sync,
  }
]

export const inventoryData=[
  {
    title:'Real-time stock updates',
    subtitle:'Your inventory updates instantly with every order, edit, return, or restock.',
    icon: clockIcon,
  },
   {
    title:'Oversell protection',
    subtitle:'Automatically stop sales when stock hits zero to prevent overselling.',
    icon: protectionIcon,
  },
   {
    title:'Low stock alerts',
    subtitle:'Get notified when items get low so you can restock on time.',
    icon: bellIcon,
  },
   {
    title:'Stock history timeline',
    subtitle:'See a clear timeline of all stock changes in one organized view.',
    icon: powerIcon,
  },
]

export const monthlyData=[
  {
    title:'Free plan',
    price:'0',
    subtitle:'Perfect for beginners who want to explore the platform..',
    description:'What includes',
    buttonText:'Start for free',
    isPopular: false,
    features:[
      "Up to 50 products",
      "Basic inventory tracking",
      "1 sales channel",
      "Email support",
      "Basic Analytics",
      "Standard Shipping Standard"
    ]
  },
  {
    title:'Starter plan',
    price:'19',
    subtitle:'Great for small online stores needing essential tools.',
    description:'Includes everything in the Free, plus',
    buttonText:'Get Started',
    isPopular: false,
    features:[
      "Up to 200 products",
      "Basic inventory tracking",
      "1 sales channel",
      "Email support",
      "Basic Analytics",
      "Standard Shipping Standard"
    ]
  },
  {
    title:'Growth Plan',
    price:'49',
    subtitle:'Ideal for growing businesses selling across multiple channels.',
    description:'Includes everything in Starter, plus',
    buttonText:'Upgrade to growth',
    isPopular: true,
    features:[
      "Unlimited products",
      "Multi-channel selling (Instagram, Amazon, Facebook, etc.)",
      "Advanced analytics & reports",
      "Delivery tracking with notifications",
      "POS Pro sync",
      "Automated stock updates",
      "Chat + Email support"
    ]
  },
  {
    title:'Pro plan',
    price:'99',
    subtitle:'Best for scaling brands needing automation and team features.',
    description:'Includes everything in Growth, plus',
    buttonText:'Go Pro',
    isPopular: false,
    features:[
      "Unlimited Orders",
      "Team access (up to 10 members)",
      "Advanced revenue dashboards",
      "Payout & settlement reports",
      "API access",
      "Dedicated account support",
      "Early access to new features"
    ]
  },
]

export const yearlyData=[
  {
    title:'Free plan',
    price:'0',
    subtitle:'Perfect for beginners who want to explore the platform..',
    description:'What includes',
    buttonText:'Start for free',
    isPopular: false,
    features:[
      "Up to 50 products",
      "Basic inventory tracking",
      "1 sales channel",
      "Email support",
      "Basic Analytics",
      "Standard Shipping Standard"
    ]
  },
  {
    title:'Starter plan',
    price:'10',
    subtitle:'Great for small online stores needing essential tools.',
    description:'Includes everything in the Free, plus',
    buttonText:'Get Started',
    isPopular: false,
    features:[
      "Up to 200 products",
      "Basic inventory tracking",
      "1 sales channel",
      "Email support",
      "Basic Analytics",
      "Standard Shipping Standard"
    ]
  },
  {
    title:'Growth Plan',
    price:'39',
    subtitle:'Ideal for growing businesses selling across multiple channels.',
    description:'Includes everything in Starter, plus',
    buttonText:'Upgrade to growth',
    isPopular: true,
    features:[
      "Unlimited products",
      "Multi-channel selling (Instagram, Amazon, Facebook, etc.)",
      "Advanced analytics & reports",
      "Delivery tracking with notifications",
      "POS Pro sync",
      "Automated stock updates",
      "Chat + Email support"
    ]
  },
  {
    title:'Pro plan',
    price:'79',
    subtitle:'Best for scaling brands needing automation and team features.',
    description:'Includes everything in Growth, plus',
    buttonText:'Go Pro',
    isPopular: false,
    features:[
      "Unlimited Orders",
      "Team access (up to 10 members)",
      "Advanced revenue dashboards",
      "Payout & settlement reports",
      "API access",
      "Dedicated account support",
      "Early access to new features"
    ]
  },
]

export const featureByPlanData=[{
  "plans": [
    {
      "name": "Free",
      "pricing": {
        "monthly": "$0 / month",
        "yearly": "$0 / year"
      },
      "features": {
        "product_limit": 50,
        "sales_channels": 1,
        "inventory_sync": "Basic",
        "order_management": "Basic",
        "shipping_integration": "Standard",
        "discounts_coupons": false,
        "pos_integration": false,
        "multi_channel_selling": false,
        "analytics": "Basic",
        "delivery_tracking": false,
        "automation": false,
        "team_access": "1 user",
        "api_access": false,
        "support": "Email"
      }
    },
    {
      "name": "Starter",
      "pricing": {
        "monthly": "$19 / month",
        "yearly": "$29 / year"
      },
      "features": {
        "product_limit": 200,
        "sales_channels": 3,
        "inventory_sync": "Real-time",
        "order_management": "Advanced",
        "shipping_integration": "Standard",
        "discounts_coupons": true,
        "pos_integration": "Basic",
        "multi_channel_selling": false,
        "analytics": "Standard",
        "delivery_tracking": false,
        "automation": false,
        "team_access": "1 user",
        "api_access": false,
        "support": "Priority Email"
      }
    },
    {
      "name": "Growth",
      "pricing": {
        "monthly": "$49 / month",
        "yearly": "$79 / year"
      },
      "features": {
        "product_limit": "Unlimited",
        "sales_channels": "Unlimited",
        "inventory_sync": "Real-time",
        "order_management": "Advanced",
        "shipping_integration": "Priority",
        "discounts_coupons": true,
        "pos_integration": "Pro",
        "multi_channel_selling": true,
        "analytics": "Advanced",
        "delivery_tracking": true,
        "automation": true,
        "team_access": "3 users",
        "api_access": false,
        "support": "Chat + Email"
      }
    },
    {
      "name": "Pro",
      "pricing": {
        "monthly": "$99 / month",
        "yearly": "$299 / year"
      },
      "features": {
        "product_limit": "Unlimited",
        "sales_channels": "Unlimited",
        "inventory_sync": "Real-time",
        "order_management": "Advanced",
        "shipping_integration": "Priority",
        "discounts_coupons": true,
        "pos_integration": "Pro",
        "multi_channel_selling": true,
        "analytics": "Advanced",
        "delivery_tracking": true,
        "automation": "Full",
        "team_access": "10 users",
        "api_access": true,
        "support": "Dedicated Support"
      }
    }
  ]
}
]

export const companyData=[
  {
    id:1,
    title:"Product and catlogs",
    icon:box,
  },
  {
    id:2,
    title:"Real time Inventory control",
    icon:chartLine,
  },
  {
    id:3,
    title:"Order management",
    icon:clipBoard,
  },
  {
    id:4,
    title:"Shipping & Delivery Integrations",
    icon:truck,
  },
  {
    id:5,
    title:"POS + Online Store Sync",
    icon:channel,
  },
  {
    id:6,
    title:"Discounts & Promotions",
    icon:creditCard,
  },
  {
    id:7,
    title:"Analytics & Reporting",
    icon:gridLine,
  }
  ,{
    id:8,
    title:"Payouts & Settlement Tracking",
    icon:solarTag,
  }
]

export const aimData=[
  {
    id:1,
    title:"To create a connected commerce ecosystem where accuracy, efficiency, and growth come naturally",
    description:"Manage every item, variant, and category without switching between tools.",
    subtitle:'Our mission',
    image:mission
  },
  {
    id:2,
    title:"A world where every retail and eCommerce business—no matter its size—operates with enterprise-level precision.",
    description:"We envision a future where technology removes friction, improves transparency, and enables sellers to focus on innovation and growth.",
    subtitle:'Our vision',
    image:vision
  }
]