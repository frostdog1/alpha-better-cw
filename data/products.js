// this file will contain the data that will be used in the Products schema model
// it uses Unsplash as a means to use images that do not require copyright permissions

const products = [
{
    name: "Walleon Smart Wallet",
    imageUrl:
    "https://images.unsplash.com/photo-1611099024089-7f57ca9aca7f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3900&q=80",
    description:
    "Walleon is a new generation of Smart Wallet with GPS tracking, a built-in power bank, anti-theft camera, SOS call button, stylish LED lights, battery charging capabilities and even built-in cryptocurrency support. Does it work? idk, maybe.",
    price: 121,
    countInStock: 15,
},
{
    name: "Oxfordshire Monoplane Pro",
    imageUrl:
    "https://images.unsplash.com/photo-1543048374-b89378ed9133?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80",
    description:
    "Due to the fixed-wing configuration of Monoplanes they inherently provide the highest efficiency and lowest drag any other design whilst being the simplest to build. Stocks are low but so are prices, get them while you can. ",
    price: 8499,
    countInStock: 4,
},
{
    name: "Maillardet's Teleoperated Automaton",
    imageUrl:
    "https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1276&q=80",
    description:
    "France's most coveted robotics institution Maillardet has finally released their most advanced automaton to date with an operational distance of over 7 miles. It's soothing voice and nurturing presence is surely a welcome addition to any household. Robotic controls are suitable for children under 3 years.  ",
    price: 3299,
    countInStock: 7,
},
{
    name: "Generic Cheese Grater",
    imageUrl:
    "https://images.unsplash.com/photo-1574175679306-4c5f33146b6f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80",
    description:
    "Employing a network of sharp holes of various styles, the possibilities are endless for this inexpensive grater. The idea here is to slide the cheese downwords across the grating such that the pressure breaks it's structure leaving you with perfectly sliced cheese. Futher instructions provided upon purchase.",
    price: 4.99,
    countInStock: 26,
},
{
    name: "Audio Technica Headphones",
    imageUrl:
    "https://images.unsplash.com/photo-1558756520-22cfe5d382ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
    "Outfitted with 45mm large-aperture dynamic drivers and an over-ear, closed-back design, the ATH-M50x headphones deliver clarity, deep bass, and extended bandwidth (15 Hz to 28 kHz) while isolating you from outside sounds.",
    price: 233,
    countInStock: 4,
},
{
    name: "JBL FLIP 4",
    imageUrl:
    "https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
    description:
    "JBL Flip 4 is the next generation in the award-winning Flip series; it is a portable Bluetooth speaker that delivers surprisingly powerful stereo sound. This compact speaker is powered by a 3000mAh rechargeable Li-ion battery that offers up to 12 hours of continuous, high-quality audio playtime.",
    price: 140,
    countInStock: 10,
},
];

module.exports = products;
