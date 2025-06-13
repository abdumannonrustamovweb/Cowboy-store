import React from "react";
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <div className="lead text-center">
          🐎<span> Tulpor Osiyo</span> – Chavandozlik anjomlarining ishonchli
          manbai Tulpor Osiyo – ot anjomlari, juganlar, egarlari hamda zamonaviy
          chavandozlik mahsulotlarini ishlab chiqarish va yetkazib berish bilan
          shug‘ullanuvchi ishonchli va tajribali korxona. Bizning asosiy
          maqsadimiz — o‘zbek ot sporti va chavandozlik madaniyatini
          rivojlantirish, otlar uchun eng sifatli, bardoshli hamda estetik
          mahsulotlarni taqdim etishdir.
          <div>
            Nega aynan Tulpor Osiyo?
            <p>
              ✅ Buyurtma asosida ishlov berish – har bir otga individual
              yondashuv
            </p>
            <p>
              ✅ Qo‘lda tikilgan egarlari – qulaylik va mustahkamlikni
              ta'minlaydi
            </p>
           
            <p>
              ✅ Mahalliy ishlab chiqarish – milliy hunarmandchilik an’analari
              asosida
            </p>
            <p>✅ Tez yetkazib berish va mijoz bilan doimiy aloqa</p>
            <p>
              ✅ Har bir mijozga e’tiborli xizmat va moslashtirilgan yechimlar
            </p>
            Har bir mahsulotimiz o‘zida sifat, milliylik va amaliylikni mujassam
            etgan bo‘lib, nafaqat chavandozlar, balki har bir ot egasi uchun ham
            ideal tanlov bo‘ladi.
          </div>
        </div>

       
        </div>
      <Footer />
    </>
  );
};

export default AboutPage;
