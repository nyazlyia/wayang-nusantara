import Image from "next/image";
import { Inknut_Antiqua, Inika } from "next/font/google";

const inknut = Inknut_Antiqua({
  subsets: ["latin"],
  weight: ["700"],
});

const inika = Inika({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  return (
    <>
      <div className='flex justify-items-center min-h-screen gap-16 bg-[#536036]'>
        <div className=''>
          <div className='flex items-center'>
            <Image
              src={"/assets/logo.png"}
              alt='logo'
              width={170}
              height={100}
            />
            <div className='justify-items-center'>
              <div className={inknut.className}>
                <h1 className='inknut text-[#F7EDDB] text-5xl'>
                  Wayang Nusantara
                </h1>
              </div>
              <div className={inika.className}>
                <p className='text-[#f7eddb] text-xl'>
                  Kearifan Budaya Oleh Kelompok PadaWARAS
                </p>
              </div>
            </div>
          </div>
          <div className={inika.className}>
            <p className='text-[#f7eddb] text-4xl max-w-200 text-justify place-items-center ml-17'>
              Wayang merupakan salah satu kebudayaan Indonesia yang berasal dan
              berkembang pesat di pulau Jawa dan Bali. Wayang meliputi seni
              peran, seni suara, seni musik, seni tutur, seni sastra, seni
              lukis, seni pahat, dan seni perlambang.
            </p>
          </div>
          <div>
            <Image
              src={"/assets/bungawr1.png"}
              alt='hiasan'
              width={294}
              height={100}
            />
          </div>
        </div>
        <div className='inset-y-0 right-0 absolute'>
          <Image
            src={"/assets/background.jpg"}
            alt='background'
            width={425}
            height={100}
          />
        </div>
      </div>

      <div className='justify-items-center min-h-screen bg-[url(/assets/bg2.png)] bg-no-repeat bg-cover'>
        <div className={inknut.className}>
          <h1 className='inknut text-[#F7EDDB] text-5xl pt-10'>
            Manfaat Wayang
          </h1>
        </div>
        <div className='mt-10 flex gap-5'>
          <div className='bg-[#C05C35] w-2xs h-125 rounded-2xl'>
            <div className={inknut.className}>
              <h1 className='inknut text-[#F7EDDB] text-2xl pt-5 text-center'>
                Wayang Sebagai Media Pendidikan
              </h1>
            </div>
            <div className={inika.className}>
              <p className='text-[#f7eddb] text-xl text-left p-5'>
                Wayang memiliki salah satu manfaat keberagaman budaya di
                Indonesia dalam dunia pendidikan, yaitu dapat difungsikan untuk
                pembelajaran budaya sekaligus pendidikan mental yang sangat
                bermanfaat bagi manusia sebagai makhluk sosial.
              </p>
            </div>
          </div>

          <div className='bg-[#EDA24E] w-2xs h-125 rounded-2xl'>
            <div className={inknut.className}>
              <h1 className='inknut text-[#F7EDDB] text-2xl pt-5 text-center'>
                Wayang Sebagai Media Informasi
              </h1>
            </div>
            <div className={inika.className}>
              <p className='text-[#f7eddb] text-xl text-left p-5'>
                Dari aspek penampilannya, wayang dapat digunakan sebagai media
                untuk menghubungkan dan mendekatkan antara tradisi dengan
                masyarakat.
              </p>
            </div>
          </div>

          <div className='bg-[#A1B076] w-2xs h-125 rounded-2xl'>
            <div className={inknut.className}>
              <h1 className='inknut text-[#F7EDDB] text-2xl pt-5 text-center'>
                Wayang Sebagai Media Hiburan
              </h1>
            </div>
            <div className={inika.className}>
              <p className='text-[#f7eddb] text-xl text-left p-5'>
                Hiburan tidak hanya dapat diperoleh daari manfaat televisi bagi
                masyarakat. Manfaat wayang bagi pengembangan warisan budaya juga
                dapat menjadi media hiburan untuk masyarakat.
              </p>
            </div>
          </div>

          <div className='bg-[#536036] w-2xs h-125 rounded-2xl'>
            <div className={inknut.className}>
              <h1 className='inknut text-[#F7EDDB] text-2xl pt-5 text-center'>
                Wayang Untuk Kehidupan Sosial Manusia
              </h1>
            </div>
            <div className={inika.className}>
              <p className='text-[#f7eddb] text-xl text-left p-5'>
                Sejalan dengan fungsi wayang sebagai media pembelajaran atau
                pendidikan, cerita wayang banyak mengandung ajaran dan nilai
                dalam kehidupan manusia.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='min-h-screen gap-16 bg-[#EDA24E]'>
        <div className={inknut.className}>
          <h1 className='inknut text-[#F7EDDB] text-5xl pt-10 text-center'>
            Jenis Wayang
          </h1>
        </div>
        <div className='flex justify-center gap-50'>
          <Image
            src={"/assets/kiri.png"}
            alt='model'
            width={300}
            height={100}
            className='inset-y-350 left-0 absolute'
          />
          <Image
            src={"/assets/golek_purwa.png"}
            alt='wayang1'
            width={300}
            height={100}
          />
          <Image
            src={"/assets/golek_menak.png"}
            alt='wayang2'
            width={300}
            height={100}
          />
          <Image
            src={"/assets/kanan.png"}
            alt='model'
            width={300}
            height={100}
            className='inset-y-350 right-0 absolute'
          />
        </div>
        <div className='justify-center flex gap-70 mt-5'>
          <button className='bg-[#536036] p-3 rounded-lg'>
            <a href=''>
              <div className={inknut.className}>
                <h1 className='inknut text-[#F7EDDB] text-center'>
                  Wayang Golek Purwa
                </h1>
              </div>
            </a>
          </button>

          <button className='bg-[#536036] p-3 rounded-lg'>
            <a href=''>
              <div className={inknut.className}>
                <h1 className='inknut text-[#F7EDDB] text-center'>
                  Wayang Golek Purwa
                </h1>
              </div>
            </a>
          </button>
        </div>
      </div>

      <div className='min-h-screen gap-16 bg-[#EDA24E]'>
        <div className='flex justify-center'>
          <Image
            src={"/assets/kiri.png"}
            alt='model'
            width={300}
            height={100}
            className='inset-y-520 left-0 absolute'
          />
          <Image
            src={"/assets/kulit_kancil.png"}
            alt='wayang3'
            width={500}
            height={100}
            className='mt-20'
          />
          <Image
            src={"/assets/wayang_kulit_purwa.png"}
            alt='wayang2'
            width={500}
            height={100}
            className='mt-20'
          />
          <Image
            src={"/assets/kanan.png"}
            alt='model'
            width={300}
            height={100}
            className='inset-y-520 right-0 absolute'
          />
        </div>
        <div className='justify-center flex gap-70 mt-5'>
          <button className='bg-[#536036] p-3 rounded-lg'>
            <a href=''>
              <div className={inknut.className}>
                <h1 className='inknut text-[#F7EDDB] text-center'>
                  Wayang Golek Purwa
                </h1>
              </div>
            </a>
          </button>

          <button className='bg-[#536036] p-3 rounded-lg'>
            <a href=''>
              <div className={inknut.className}>
                <h1 className='inknut text-[#F7EDDB] text-center'>
                  Wayang Golek Purwa
                </h1>
              </div>
            </a>
          </button>
        </div>
      </div>

      <div className='min-h-screen gap-16 bg-[#C05C35]'>
        <div className={inknut.className}>
          <h1 className='inknut text-[#F7EDDB] text-5xl pt-10 text-center'>
            Pertunjukan Wayang
          </h1>
        </div>
        <div className="bg-black w-200 h-100 mx-auto my-20">

        </div>
      </div>
    </>
  );
}
