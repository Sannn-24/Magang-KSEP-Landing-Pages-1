import React from "react";
import Image from 'next/image';

const HeroSection = () => {
    return (
        <main className="min-h-screen overflow-y-auto bg-gray-100">
        
        <section className="relative max-w-[1200px] mx-auto p-6">
          <div className="flex justify-between gap-4 mx-auto">
            
            <div className="bg-white w-[420px] h-[440px] p-4 rounded-lg shadow-md relative">
              <p className="text-black text-[25px] pr-40 font-semibold">
                Ambil Kendali atas 
              </p>
              <p className="text-black text-[25px] pr-20 font-semibold">
                Masa Depan Finansial 
                Anda!
              </p>
              <p className="text-gray-500 text-base mt-4 pr-40">
                Platform All-in-One untuk Berita
              </p>
              <p className="text-gray-500 text-base pr-20">
                Keuangan, Pembelian Saham, Edukasi, 
                dan Komunitas
              </p>
              <div className="bg-[#030312] w-[200px] h-[20px] p-4 rounded-lg absolute bottom-[175px] left-[16px]">
                <Image
                  src="/images/Button.png"
                  alt="Konten 1.3 Image"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="bg-[#21c684] w-[187px] h-[122px] p-4 rounded-lg absolute bottom-[20px] left-[16px]">
                <Image
                  src="/images/Left.png"
                  alt="Konten 1.1 Image"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="bg-[#21c684] w-[187px] h-[122px] p-4 rounded-lg absolute bottom-[20px] right-[16px]">
                <Image
                    src="/images/Right.png"
                    alt="Konten 1.2 Image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
              </div>
            </div>
            <div className="bg-white w-[440px] h-[440px] p-4 rounded-lg shadow-md relative">
              <Image
                src="/images/Investasi.jpg"
                alt="Konten 2 Image"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              <div className="absolute bottom-[120px] right-[15px] w-48 h-16 py-1 px-2 bg-white bg-opacity-100 flex flex-col items-start justify-center rounded-lg">
                <p className="text-center text-[12px] text-gray-500 pl-1">
                  Keuntungan Hari Ini
                </p>
                <p className="text-gray-600 pl-1 font-extrabold">
                  1.000.000 IDR
                </p>
                <p className="absolute bottom-[13px] right-[12px] text-[#21c684] text-[12px] font-bold">
                  12%
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto flex justify-between gap-4 mt-4">
            
            <div className="bg-[#047857] w-[520px] h-[200px] p-4 rounded-lg shadow-md flex flex-col items-start justify-center">
                <p className="text-white font-semibold pl-4">
                  Berita Finansial Terkini <br />
                </p>
                <p className ="mt-2 text-base text-[14px] text-gray-300 pl-4 pr-12">
                  Dapatkan akses ke berita terkini dan analisis mendalam dari dunia keuangan untuk membantu Anda membuat keputusan investasi yang lebih cerdas
                </p>
            </div>
            <div className="bg-white w-[340px] h-[200px] p-4 rounded-lg shadow-md relative">
              <Image
                src="/images/BREXIT.jpg"
                alt="Box 3 Image"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>

          </div>
        </section>
      </main>
      
    );
};
export default HeroSection;