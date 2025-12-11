/* eslint-disable react/no-unescaped-entities */
import MainLayout from "@/components/MainLayout";
import Link from "next/link";

export default function DisclaimerPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-white">
        <div className="w-full md:w-[90%] mx-auto px-4 py-30 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Disclaimer
            </h1>
            <p className="text-sm text-gray-600">
              Last updated November 21, 2023
            </p>
          </div>

          {/* General Disclaimer */}
          <section className="mb-10">
            <p className="text-gray-700 leading-relaxed mb-4">
              The information provided by Spectical Asset IT ("we," "us" or "our") on{" "}
              <a
                href="https://nhitservices.net"
                className="text-blue-600 hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://nhitservices.net
              </a>{" "}
              (the "Site") and our mobile application is for general
              informational purposes only. All information on the Site and our
              mobile application is provided in good faith, however we make no
              representation or warranty of any kind, express or implied,
              regarding the accuracy, adequacy, validity, reliability,
              availability or completeness of any information on the Site or our
              mobile application.
              UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR OUR MOBILE APPLICATION OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE AND OUR MOBILE APPLICATION. YOUR USE OF THE SITE AND OUR MOBILE APPLICATION AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE AND OUR MOBILE APPLICATION IS SOLELY AT YOUR OWN RISK.
            </p>

          </section>

          {/* External Links Disclaimer */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              EXTERNAL LINKS DISCLAIMER
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
             The Site and our mobile application may contain (or you may be sent through the Site or our mobile application) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability or completeness by us. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR THE ACCURACY OR RELIABILITY OF ANY INFORMATION OFFERED BY THIRD-PARTY WEBSITES LINKED THROUGH THE SITE OR ANY WEBSITE OR FEATURE LINKED IN ANY BANNER OR OTHER ADVERTISING. WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.


            </p>
          </section>

          {/* Professional Disclaimer */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              PROFESSIONAL DISCLAIMER
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              The Site cannot and does not contain it advice. The it information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of it advice. THE USE OR RELIANCE OF ANY INFORMATION CONTAINED ON THIS SITE OR OUR MOBILE APPLICATION IS SOLELY AT YOUR OWN RISK.


            </p>
          </section>

          {/* Affiliates Disclaimer */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              AFFILIATES DISCLAIMER
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              The Site and our mobile application may contain links to affiliate websites, and we receive an affiliate commission for any purchases made by you on the affiliate website using such links. Our affiliates include the following:


            </p>
          </section>

          {/* Testimonials Disclaimer */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              TESTIMONIALS DISCLAIMER
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              The Site may contain testimonials by users of our products and/or services. These testimonials reflect the real-life experiences and opinions of such users. However, the experiences are personal to those particular users, and may not necessarily be representative of all users of our products and/or services. We do not claim, and you should not assume, that all users will have the same experiences. YOUR INDIVIDUAL RESULTS MAY VARY.


            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
                The testimonials on the Site are submitted in various forms such as text, audio and/or video, and are reviewed by us before being posted. They appear on the Site verbatim as given by the users, except for the correction of grammar or typing errors. Some testimonials may have been shortened for the sake of brevity where the full testimonial contained extraneous information not relevant to the general public.


            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
The views and opinions contained in the testimonials belong solely to the individual user and do not reflect our views and opinions. We are not affiliated with users who provide testimonials, and users are not paid or otherwise compensated for their testimonials.


            </p>
          </section>
        </div>
      </div>
    </MainLayout>
  );
}
