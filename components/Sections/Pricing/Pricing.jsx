import Link from "next/link";
import { useRouter } from "next/router";

const Pricing = () => {
  const router= useRouter()
  // get story id
  const id = router.asPath
  console.log(id,'asPatch');
  return (
    <section
        class="
       pt-4
       pb-4
       relative
       z-20
       overflow-hidden
       "
      >
        <div class="w-full">
          <div class="flex flex-wrap -mx-4">
            <div class="w-full px-4">
              <div class="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                <h2
                  class="
                      font-bold
                      text-base
                      sm:text-xl
                      md:text-2xl
                      text-dark
                      mb-4
                      "
                >
                  Our Pricing Plan
                </h2>
                <p class="text-sm sm:text-base text-body-color">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
          <div class="grid mx-auto w-full grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center sm:-mx-4">
            {/* Personal */}
            <div class="w-full md:px-4">
              <div
                class="
                   bg-base-100
                   rounded-xl
                   relative
                   z-10
                   overflow-hidden
                   border border-primary border-opacity-20
                   shadow-pricing
                   py-2
                   px-8
                   sm:p-2
                   lg:py-3 lg:px-2
                   xl:p-3
                   "
              >
                <span class="text-primary font-semibold text-base block mb-4">
                  Personal
                </span>
                <h2 class="font-bold text-dark mb-5 text-lg">
                  200TK
                  <span class="text-base text-body-color font-medium">
                    / month
                  </span>
                </h2>
                <p
                  class="
                      text-sm text-body-color
                      pb-2
                      border-b border-[#F2F2F2]
                      "
                >
                  Perfect for reding in a personal mobile/tab/pc.
                </p>
                <div class="mb-7 text-xs sm:text-sm">
                  <p class="text-body-color leading-loose list-item list-inside mb-1">
                    1 Device login
                  </p>
                  <p class="text-body-color leading-loose list-item list-inside mb-1">
                    1 Month premium story access
                  </p>
                  <p class="text-body-color leading-loose list-item list-inside mb-1">
                    100 Super Stickers
                  </p>
                  <p class="text-body-color leading-loose list-item list-inside mb-1">
                    Premium Badge
                  </p>
                  <p class="text-body-color leading-loose list-item list-inside mb-1">
                    Chat access with author's
                  </p>
                  <p class="text-body-color leading-loose list-item list-inside mb-1">
                    Access premium eBooks
                  </p>
                  <p class="text-body-color leading-loose list-item list-inside mb-1">
                    Access premium Audio Books
                  </p>
                  <p class="text-body-color leading-loose list-item list-inside mb-1">
                    Instant customar support
                  </p>
                </div>
                <Link
                  href={`/payment?sub=personal?next=${id}`}
                  class="
                      w-full
                      block font-semibold
                      text-primary
                      bg-transparent
                      border border-[#D4DEFF]
                      rounded-md
                      text-center
                      px-4 py-2
                      text-xs sm:text-sm
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
            <div class="w-full sm:px-4">
              <div
                class="
                   bg-base-100
                   rounded-xl
                   relative
                   z-10
                   overflow-hidden
                   border border-primary border-opacity-20
                   shadow-pricing
                   py-2
                   px-8
                   sm:p-2
                   lg:py-3 lg:px-2
                   xl:p-3
                   "
              >
                <span class="text-primary font-semibold text-base block mb-4">
                  Personal
                </span>
                <h2 class="font-bold text-dark mb-5 text-lg">
                  200TK
                  <span class="text-base text-body-color font-medium">
                    / month
                  </span>
                </h2>
                <p
                  class="
                      text-sm text-body-color
                      pb-2
                      border-b border-[#F2F2F2]
                      "
                >
                  Perfect for reding in a personal mobile/tab/pc.
                </p>
                <div class="mb-7 text-xs sm:text-sm">
                  <p class="text-body-color leading-loose list-item list-inside mb-1">
                    1 Device login
                  </p>
                  <p class="text-body-color leading-loose list-item list-inside mb-1">
                    1 Month premium story access
                  </p>
                  <p class="text-body-color leading-loose list-item list-inside mb-1">
                    100 Super Stickers
                  </p>
                  <p class="text-body-color leading-loose list-item list-inside mb-1">
                    Premium Badge
                  </p>
                  <p class="text-body-color leading-loose list-item list-inside mb-1">
                    Chat access with author's
                  </p>
                  <p class="text-body-color leading-loose list-item list-inside mb-1">
                    Access premium eBooks
                  </p>
                  <p class="text-body-color leading-loose list-item list-inside mb-1">
                    Access premium Audio Books
                  </p>
                  <p class="text-body-color leading-loose list-item list-inside mb-1">
                    Instant customar support
                  </p>
                </div>
                <Link
                  href={`/payment?sub=personal?next=${id}`}
                  class="
                      w-full
                      block font-semibold
                      text-primary
                      bg-transparent
                      border border-[#D4DEFF]
                      rounded-md
                      text-center
                      px-4 py-2
                      text-xs sm:text-sm
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
            {/* enterprise */}
            <div class="w-full sm:px-4">
              <div
                class="
                   bg-base-100
                   rounded-xl
                   relative
                   z-10
                   overflow-hidden
                   border border-primary border-opacity-20
                   shadow-pricing
                   py-2
                   px-8
                   sm:p-2
                   lg:py-3 lg:px-2
                   xl:p-3
                   "
              >
                <span class="text-primary font-semibold text-base block mb-4">
                  Personal
                </span>
                <h2 class="font-bold text-dark mb-5 text-lg">
                  200TK
                  <span class="text-base text-body-color font-medium">
                    / month
                  </span>
                </h2>
                <p
                  class="
                      text-sm text-body-color
                      pb-2
                      border-b border-[#F2F2F2]
                      "
                >
                  Perfect for reding in a personal mobile/tab/pc.
                </p>
                <div class="mb-7 text-xs sm:text-sm">
                  <p class="text-body-color leading-loose list-item list-inside mb-1">
                    1 Device login
                  </p>
                  <p class="text-body-color leading-loose list-item list-inside mb-1">
                    1 Month premium story access
                  </p>
                  <p class="text-body-color leading-loose list-item list-inside mb-1">
                    100 Super Stickers
                  </p>
                  <p class="text-body-color leading-loose list-item list-inside mb-1">
                    Premium Badge
                  </p>
                  <p class="text-body-color leading-loose list-item list-inside mb-1">
                    Chat access with author's
                  </p>
                  <p class="text-body-color leading-loose list-item list-inside mb-1">
                    Access premium eBooks
                  </p>
                  <p class="text-body-color leading-loose list-item list-inside mb-1">
                    Access premium Audio Books
                  </p>
                  <p class="text-body-color leading-loose list-item list-inside mb-1">
                    Instant customar support
                  </p>
                </div>
                <Link
                  href={`/payment?sub=personal?next=${id}`}
                  class="
                      w-full
                      block font-semibold
                      text-primary
                      bg-transparent
                      border border-[#D4DEFF]
                      rounded-md
                      text-center
                      px-4 py-2
                      text-xs sm:text-sm
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
          </div>
        </div>
      </section>
  );
};

export default Pricing;
