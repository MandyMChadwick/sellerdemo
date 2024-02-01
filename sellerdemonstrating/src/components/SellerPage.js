import React from 'react';
import './SellerPage.css';

const sellersData = [
  {
    "sellersId": 1,
    "name": "Carlose Woodward",
    "productsId": "(unknown)",
    "sellerThumbnail": "https://drive.google.com/file/d/1P3QEUKt7Y9dcy9ycuXg5eHBYJjEsvqow/view?usp=drive_link",
    "sellerImage": "https://drive.google.com/file/d/1oGjWqlFTelUV_ea77cG7zodP-WOdQ30r/view?usp=drive_link",
    "sellerBio": "Hey there, I'm Carlose, a dedicated woodworker showcasing my craft at Handcrafted Haven. Crafting bespoke furniture and decor, each piece I create exudes timeless sophistication, leaving a lasting impression in the world of handcrafted woodwork."
  },
  {
    "sellersId": 2,
    "name": "Darla Thread",
    "productsId": "(unknown)",
    "sellerThumbnail": "https://drive.google.com/file/d/1nzYDfTWbJZrjdXQWa7P1CVzJrgwjB3Zf/view?usp=drive_link",
    "sellerImage": "https://drive.google.com/file/d/1-0HRNXLGv_IzQSFABNabmI617UeiMXzT/view?usp=drive_link",
    "sellerBio": "Greetings, I'm Darla, the artisan behind Textile Enchantment, now available at Handcrafted Haven. Elevating fabric to an art form, my handmade textiles blend tradition with contemporary design. Each creation tells stories through patterns and colors, embodying the seamless fusion of craftsmanship and artistic expression."
  },
  // ... (repeat the structure for other sellers)
];

const SellersPage = () => {
  return (
    <div>
      <h1>Handcrafted Haven Sellers</h1>
      <div className="sellers-container">
        {sellersData.map((seller) => (
          <div key={seller.sellersId} className="seller-card">
            <img src={seller.sellerThumbnail} alt={seller.name} />
            <h2>{seller.name}</h2>
            <p>{seller.sellerBio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellersPage;
