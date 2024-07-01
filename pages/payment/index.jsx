import Layout from "@/Layout/Layout";
import { useRouter } from "next/router";
import { useState } from "react";

const payment = () => {
  const router = useRouter();
  const { sub } = router.query;

  const [paymentType, setPaymentType] = useState("bkash");

  return (
    <Layout title="Payment">
      <div className="py-12">
        <div className="flex justify-around">
          <div>
            <h1>Payment For</h1>
            <div class="w-1/2 sm:w-56 md:w-72 lg:w-72 md:px-4">
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
                {/* <a
                  href="javascript:void(0)"
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
                </a> */}
                <div>
                  <span class="absolute right-0 top-7 z-[-1]">
                    <img src="/images/pricing2.svg" />
                  </span>
                  <span class="absolute right-4 top-4 z-[-1]">
                    <img src="/images/pricing.svg" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* payment type */}
          <div>
            <div role="tablist" className="tabs tabs-boxed">
              <a
                onClick={() => setPaymentType("bkash")}
                role="tab"
                className={`${
                  paymentType === "bkash" ? "tab-active bg-gradient" : ""
                } tab h-12`}
              >
                <img
                  className="w-full h-full"
                  src="https://www.logo.wine/a/logo/BKash/BKash-Icon-Logo.wine.svg"
                  alt=""
                />
              </a>
              <a
                onClick={() => setPaymentType("nagad")}
                role="tab"
                className={`${
                  paymentType === "nagad" ? "tab-active bg-gradient" : ""
                } tab h-12`}
              >
                <img
                  className="w-full h-full object-cover"
                  src="https://www.logo.wine/a/logo/Nagad/Nagad-Vertical-Logo.wine.svg"
                  alt=""
                />
              </a>
              <a
                onClick={() => setPaymentType("sslcommerz")}
                role="tab"
                className={`${
                  paymentType === "sslcommerz" ? "tab-active bg-gradient" : ""
                } tab h-12 flex items-center`}
              >
                <img
                  className="w-full h-full p-2"
                  src="https://sslcommerz.com/wp-content/uploads/2019/11/footer_logo.png"
                  alt=""
                />
              </a>
            </div>
            {/* Bkash */}
            {paymentType === "bkash" && (
              <div>
                <h1 className="py-4 text-xl font-bold">Instruction Bkash </h1>
                <div>
                  <ul className="space-y-2">
                    <li className="list-item list-decimal list-inside">
                      Lorem ipsum dolor sit amet consectetur adipisicing.
                    </li>
                    <li className="list-item list-decimal list-inside">
                      Lorem ipsum dolor sit amet consectetur adipisicing.
                    </li>
                    <li className="list-item list-decimal list-inside">
                      Lorem ipsum dolor sit amet consectetur adipisicing.
                    </li>
                    <li className="list-item list-decimal list-inside">
                      Lorem ipsum dolor sit amet consectetur adipisicing.
                    </li>
                    <li className="list-item list-decimal list-inside">
                      Lorem ipsum dolor sit amet consectetur adipisicing.
                    </li>
                    <li className="list-item list-decimal list-inside">
                      Lorem ipsum dolor sit amet consectetur adipisicing.
                    </li>
                    <li className="list-item list-decimal list-inside">
                      Lorem ipsum dolor sit amet consectetur adipisicing.{" "}
                    </li>
                  </ul>
                </div>
                <div className="py-4 flex justify-center gap-2 w-full">
                  <input
                    type="text"
                    placeholder="Transaction ID"
                    className="px-4 py-2 w-full rounded-full border"
                  />
                  <button className="px-4 py-2 rounded-full bg-gradient text-white">
                    Submit
                  </button>
                </div>{" "}
                <div className="flex justify-center gap-2 w-full">
                  <button className="px-4 py-2 rounded-full bg-gradient text-white">
                    Complate
                  </button>
                </div>
              </div>
            )}
            {/* nagad */}
            {paymentType === "nagad" && (
              <div>
                <h1 className="py-4 text-xl font-bold">Instruction Nagad</h1>
                <div>
                  <ul className="space-y-2">
                    <li className="list-item list-decimal list-inside">
                      Lorem ipsum dolor sit amet consectetur adipisicing.
                    </li>
                    <li className="list-item list-decimal list-inside">
                      Lorem ipsum dolor sit amet consectetur adipisicing.
                    </li>
                    <li className="list-item list-decimal list-inside">
                      Lorem ipsum dolor sit amet consectetur adipisicing.
                    </li>
                    <li className="list-item list-decimal list-inside">
                      Lorem ipsum dolor sit amet consectetur adipisicing.
                    </li>
                    <li className="list-item list-decimal list-inside">
                      Lorem ipsum dolor sit amet consectetur adipisicing.
                    </li>
                    <li className="list-item list-decimal list-inside">
                      Lorem ipsum dolor sit amet consectetur adipisicing.
                    </li>
                    <li className="list-item list-decimal list-inside">
                      Lorem ipsum dolor sit amet consectetur adipisicing.{" "}
                    </li>
                  </ul>
                </div>
                <div className="py-4 flex justify-center gap-2 w-full">
                  <input
                    type="text"
                    placeholder="Transaction ID"
                    className="px-4 py-2 w-full rounded-full border"
                  />
                  <button className="px-4 py-2 rounded-full bg-gradient text-white">
                    Submit
                  </button>
                </div>
                <div className="flex justify-center gap-2 w-full">
                  <button className="px-4 py-2 rounded-full bg-gradient text-white">
                    Complate
                  </button>
                </div>
              </div>
            )}
            {/* sslcommerz */}
            {paymentType === "sslcommerz" && (
              <div>
                <h1 className="py-4 text-xl font-bold">
                  Instruction SSLCommerz
                </h1>
                <div>
                  <ul className="space-y-2">
                    <li className="list-item list-decimal list-inside">
                      Lorem ipsum dolor sit amet consectetur adipisicing.
                    </li>
                    <li className="list-item list-decimal list-inside">
                      Lorem ipsum dolor sit amet consectetur adipisicing.
                    </li>
                    <li className="list-item list-decimal list-inside">
                      Lorem ipsum dolor sit amet consectetur adipisicing.
                    </li>
                    <li className="list-item list-decimal list-inside">
                      Lorem ipsum dolor sit amet consectetur adipisicing.
                    </li>
                    <li className="list-item list-decimal list-inside">
                      Lorem ipsum dolor sit amet consectetur adipisicing.
                    </li>
                    <li className="list-item list-decimal list-inside">
                      Lorem ipsum dolor sit amet consectetur adipisicing.
                    </li>
                    <li className="list-item list-decimal list-inside">
                      Lorem ipsum dolor sit amet consectetur adipisicing.{" "}
                    </li>
                  </ul>
                </div>
                <div className="py-4 flex justify-center gap-2 w-full">
                  <button className="px-4 py-2 rounded-full bg-gradient text-white">
                    Continue with SSLCommerz
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default payment;
