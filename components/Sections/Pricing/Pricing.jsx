import { useState } from "react";

const Pricing = () =>{
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [billPlan, setBillPlan] = useState('monthly');
  
    const plans = [
      {
        name: 'Easy',
        discretion: 'All the basics for businesses that are just getting started.',
        price: {
          monthly: 29,
          annually: 29 * 12 - 199,
        },
        features: ['One project', 'Your dashboard'],
      },
      {
        name: 'Basic',
        discretion: 'Better for growing businesses that want more customers.',
        price: {
          monthly: 59,
          annually: 59 * 12 - 100,
        },
        features: ['Two projects', 'Your dashboard', 'Components included', 'Advanced charts'],
      },
      {
        name: 'Custom',
        discretion: 'Advanced features for pros who need more customization.',
        price: {
          monthly: 139,
          annually: 139 * 12 - 100,
        },
        features: ['Unlimited projects', 'Your dashboard', '+300 Components', 'Chat support'],
      },
    ];
  
    return (
        <main className="mx-4 my-16">
            <div className="text-center">
              <h1 className="mb-4 text-2xl font-normal md:text-3xl lg:text-4xl">
                Our <span className="font-semibold">plans</span> for your <span className="font-semibold">strategies</span>
              </h1>
              <p className="text-sm font-normal ">
                See below our main three plans for your business, for your startup and agency.
              </p>
              <p className="text-sm font-normal ">
                It start from here! You can teach yourself what you really like.
              </p>
            </div>
    
            {/* Plan switch */}
            <div className="flex items-center justify-center mt-10 space-x-4">
              <span className="text-base font-medium">Bill Monthly</span>
              <button
                className="relative rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => setBillPlan(billPlan === 'monthly' ? 'annually' : 'monthly')}
              >
                <div className="w-16 h-8 transition bg-indigo-500 rounded-full shadow-md outline-none"></div>
                <div
                  className={`absolute inline-flex items-center justify-center w-6 h-6 transition-all duration-200 ease-in-out transform border rounded-full shadow-sm top-1 left-1 ${billPlan === 'monthly' ? 'translate-x-0' : 'translate-x-8'}`}
                ></div>
              </button>
              <span className="text-base font-medium">Bill Annually</span>
            </div>
    
            {/* Plans */}
            <div className="flex flex-col items-center justify-center mt-16 space-y-8 lg:flex-row lg:items-stretch lg:space-x-8 lg:space-y-0">
              {plans.map((plan, i) => (
                <section key={i} className="flex flex-col w-full max-w-sm p-12 space-y-6 border rounded-lg shadow-md">
                  {/* Price */}
                  <div className="flex-shrink-0">
                    <span className={`text-4xl font-medium tracking-tight ${plan.name === 'Basic' ? 'text-green-500' : ''}`}>
                      ${billPlan === 'monthly' ? plan.price.monthly : plan.price.annually}
                    </span>
                    <span className="">{billPlan === 'monthly' ? '/month' : '/year'}</span>
                  </div>
    
                  {/* Plan details */}
                  <div className="flex-shrink-0 pb-6 space-y-2 border-b">
                    <h2 className="text-2xl font-normal">{plan.name}</h2>
                    <p className="text-sm font-normal ">{plan.discretion}</p>
                  </div>
    
                  {/* Plan features */}
                  <ul className="flex-1 space-y-4">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start">
                        <svg className="flex-shrink-0 w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <p className="ml-3 text-base font-medium text-gray-500">{feature}</p>
                      </li>
                    ))}
                  </ul>
    
                  {/* Plan button */}
                  <div className="flex-shrink-0 pt-4">
                    <button className="w-full px-6 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Get started
                    </button>
                  </div>
                </section>
              ))}
            </div>
          </main>
      );

}

export default Pricing