import Layout from "@/Layout/Layout";
import Link from "next/link";

const pricing = () => {
  return (
    <Layout>
      <section
        class="
       pt-20
       lg:pt-[120px]
       pb-12
       lg:pb-[90px]
       relative
       z-20
       overflow-hidden
       "
      >
        <div class="container">
          <div class="flex flex-wrap -mx-4">
            <div class="w-full px-4">
              <div class="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                <span class="font-semibold text-lg text-primary mb-2 block">
                  Pricing Table
                </span>
                <h2
                  class="
                      font-bold
                      text-3xl
                      sm:text-4xl
                      md:text-[40px]
                      text-dark
                      mb-4
                      "
                >
                  Our Pricing Plan
                </h2>
                <p class="text-base text-body-color">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap justify-center -mx-4">
            {/* Personal */}
            <div class="w-full md:w-1/2 lg:w-1/3 px-4">
              <div
                class="
                   bg-base-100
                   rounded-xl
                   relative
                   z-10
                   overflow-hidden
                   border border-primary border-opacity-20
                   shadow-pricing
                   py-10
                   px-8
                   sm:p-12
                   lg:py-10 lg:px-6
                   xl:p-12
                   "
              >
                <span class="text-primary font-semibold text-lg block mb-4">
                  Personal
                </span>
                <h2 class="font-bold text-dark mb-5 text-[42px]">
                  200TK
                  <span class="text-base text-body-color font-medium">
                    / month
                  </span>
                </h2>
                <p
                  class="
                      text-base text-body-color
                      pb-8
                      mb-8
                      border-b border-[#F2F2F2]
                      "
                >
                  Perfect for reding in a personal mobile/tab/pc.
                </p>
                <div class="mb-7">
                  <p class="text-base text-body-color leading-loose mb-1">
                    1 Device login
                  </p>
                  <p class="text-base text-body-color leading-loose mb-1">
                    1 Month premium story access
                  </p>
                  <p class="text-base text-body-color leading-loose mb-1">
                    100 Super Stickers
                  </p>
                  <p class="text-base text-body-color leading-loose mb-1">
                    Premium Badge
                  </p>
                  <p class="text-base text-body-color leading-loose mb-1">
                    Chat access with author's
                  </p>
                  <p class="text-base text-body-color leading-loose mb-1">
                    Access premium eBooks
                  </p>
                  <p class="text-base text-body-color leading-loose mb-1">
                    Access premium Audio Books
                  </p>
                  <p class="text-base text-body-color leading-loose mb-1">
                    Instant customar support
                  </p>
                </div>
                <Link
                  href="/payment?sub=personal"
                  class="
                      w-full
                      block
                      text-base
                      font-semibold
                      text-primary
                      bg-transparent
                      border border-[#D4DEFF]
                      rounded-md
                      text-center
                      p-4
                      hover:text-white hover:bg-primary hover:border-primary
                      transition
                      "
                >
                  Choose Personal
                </Link>
                <div>
                  <span class="absolute right-0 top-7 z-[-1]">
                  <img src='/images/pricing2.svg' />
                  </span>
                  <span class="absolute right-4 top-4 z-[-1]">
                   <img src='/images/pricing.svg' />
                  </span>
                </div>
              </div>
            </div>
            {/* family */}
            <div class="w-full bg-gradient p-1 md:w-1/2 lg:w-1/3 rounded-xl">
              <div
                class="
                   bg-base-100
                   rounded-lg
                   relative
                   z-10
                   overflow-hidden
                   border border-primary border-opacity-20
                   shadow-pricing
                   py-10
                   px-8
                   sm:p-12
                   lg:py-10 lg:px-6
                   xl:p-12
                   "
              >
                <span class="text-primary font-semibold text-lg flex items-center gap-4 mb-4">
                  Family
                  <span className="rounded-full px-2 flex justify-center bg-gradient text-xs">
                    <span className="rounded-full text-white py-1 w-full text-xs px-2 inline-block">Popular</span>
                  </span>
                </span>
                <h2 class="font-bold text-dark mb-5 text-[42px]">
                  500TK
                  <span class="text-base text-body-color font-medium">
                    / 1/2 year
                  </span>
                </h2>
                <p
                  class="
                      text-base text-body-color
                      pb-8
                      mb-8
                      border-b border-[#F2F2F2]
                      "
                >
                  Perfect for using in a Business website or a client project.
                </p>
                <div class="mb-7">
                  <p class="text-base text-body-color leading-loose mb-1">
                    10 Device login
                  </p>
                  <p class="text-base text-body-color leading-loose mb-1">
                    6 Month premium story access
                  </p>
                  <p class="text-base text-body-color leading-loose mb-1">
                    600 Super Stickers
                  </p>
                  <p class="text-base text-body-color leading-loose mb-1">
                    Premium Badge
                  </p>
                  <p class="text-base text-body-color leading-loose mb-1">
                    Chat access with author's
                  </p>
                  <p class="text-base text-body-color leading-loose mb-1">
                    Access premium eBooks
                  </p>
                  <p class="text-base text-body-color leading-loose mb-1">
                    Access premium Audio Books
                  </p>
                  <p class="text-base text-body-color leading-loose mb-1">
                    Instant customar support
                  </p>
                </div>
                <Link
                  href="/payment?sub=personal"
                  class="
                      w-full
                      block
                      text-base
                      font-semibold
                      text-white
                      bg-primary
                      border border-primary
                      rounded-md
                      text-center
                      p-4
                      hover:bg-opacity-90
                      transition
                      "
                >
                  Choose Family
                </Link>
                <div>
                  <span class="absolute right-0 top-7 z-[-1]">
                  
                  <img src='/images/pricing2.svg' />
                  </span>
                  <span class="absolute right-4 top-4 z-[-1]">
                  <img src='/images/pricing.svg' />
                  </span>
                </div>
              </div>
            </div>
            {/* enterprise */}
            <div class="w-full md:w-1/2 lg:w-1/3 px-4">
              <div
                class="
                   bg-base-100
                   rounded-xl
                   relative
                   z-10
                   overflow-hidden
                   border border-primary border-opacity-20
                   shadow-pricing
                   py-10
                   px-8
                   sm:p-12
                   lg:py-10 lg:px-6
                   xl:p-12
                   "
              >
                <span class="text-primary font-semibold text-lg block mb-4">
                  Enterprise
                </span>
                <h2 class="font-bold text-dark mb-5 text-[42px]">
                  1200TK
                  <span class="text-base text-body-color font-medium">
                    / year
                  </span>
                </h2>
                <p
                  class="
                      text-base text-body-color
                      pb-8
                      mb-8
                      border-b border-[#F2F2F2]
                      "
                >
                  Perfect for using in a Professional website or a client
                  project.
                </p>
                <div class="mb-7">
                  <p class="text-base text-body-color leading-loose mb-1">
                    Unlimited Device login
                  </p>
                  <p class="text-base text-body-color leading-loose mb-1">
                    1 Year premium story access
                  </p>
                  <p class="text-base text-body-color leading-loose mb-1">
                    Unlimited Super Stickers
                  </p>
                  <p class="text-base text-body-color leading-loose mb-1">
                    Premium Badge
                  </p>
                  <p class="text-base text-body-color leading-loose mb-1">
                    Chat access with author's
                  </p>
                  <p class="text-base text-body-color leading-loose mb-1">
                    Access premium eBooks
                  </p>
                  <p class="text-base text-body-color leading-loose mb-1">
                    Access premium Audio Books
                  </p>
                  <p class="text-base text-body-color leading-loose mb-1">
                    Instant customar support
                  </p>
                </div>
                <Link
                  href="/payment?sub=personal"
                  class="
                      w-full
                      block
                      text-base
                      font-semibold
                      text-primary
                      bg-transparent
                      border border-[#D4DEFF]
                      rounded-md
                      text-center
                      p-4
                      hover:text-white hover:bg-primary hover:border-primary
                      transition
                      "
                >
                  Choose Enterprise
                </Link>
                <div>
                  <span class="absolute right-0 top-7 z-[-1]">
                  <img src='/images/pricing2.svg' />
                  </span>
                  <span class="absolute right-4 top-4 z-[-1]">
                  <img src='/images/pricing.svg' />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default pricing;
