/* eslint-disable react/no-unescaped-entities */
import MainLayout from "@/components/MainLayout";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-white">
        <div className="w-full md:w-[90%] mx-auto px-4 py-20 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Privacy Policy
            </h1>
            <p className="text-sm text-gray-600">
              Last updated November 21, 2023
            </p>
          </div>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-gray-700 leading-relaxed">
              Thank you for choosing to be part of our community at Spectical Asset IT ("Company", "we", "us", "our"). We are committed to
              protecting your personal information and your right to privacy. If
              you have any questions or concerns about this privacy notice, or
              our practices with regards to your personal information, please
              contact us at{" "}
              <a
                href="mailto:support@specticalassetit.com"
                className="text-blue-600 hover:text-blue-800"
              >
                support@specticalassetit.com
              </a>
              .
            </p>

            <p className="text-gray-700 leading-relaxed mt-4">
              When you visit our website{" "}
              <a
                href="https://specticalassetit.com"
                className="text-blue-600 hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://specticalassetit.com
              </a>{" "}
              (the "Website"), use our mobile application, as the case may be
              (the "App") and more generally, use any of our services (the
              "Services", which include the Website and App), we appreciate that
              you are trusting us with your personal information. We take your
              privacy very seriously. In this privacy notice, we seek to explain
              to you in the clearest way possible what information we collect,
              how we use it and what rights you have in relation to it. We hope
              you take some time to read through it carefully, as it is
              important. If there are any terms in this privacy notice that you
              do not agree with, please discontinue use of our Services
              immediately.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              This privacy notice applies to all information collected through
              our Services (which, as described above, includes our Website and
              App), as well as, any related services, sales, marketing or
              events.
            </p>

            <p className="text-black font-semibold leading-relaxed mt-4">
              Please read this privacy notice carefully as it will help you
              understand what we do with the information that we collect.
            </p>
          </div>

          {/* Section 1 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. WHAT INFORMATION DO WE COLLECT?
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Personal information you disclose to us
            </h3>
            <p className="text-sm font-medium text-gray-600 mb-2 italic">
              In Short: We collect personal information that you provide to us.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              We collect personal information that you voluntarily provide to us
              when you register on the Services, express an interest in
              obtaining information about us or our products and Services, when
              you participate in activities on the Services (such as by posting
              messages in our online forums or entering competitions, contests
              or giveaways) or otherwise when you contact us.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              The personal information that we collect depends on the context of
              your interactions with us and the Services, the choices you make
              and the products and features you use. The personal information we
              collect may include the following:
            </p>

            <div className=" mb-4">
              <p className="text-gray-700 leading-relaxed">
                Personal Information Provided by You. We collect names; phone
                numbers; email addresses; mailing addresses; usernames;
                passwords; contact preferences; contact or authentication data;
                and other similar information.
              </p>
            </div>

            <div className="mb-4">
              <p className="text-gray-900 font-semibold mb-2">Payment Data.</p>
              <p className="text-gray-700 leading-relaxed">
                We may collect data necessary to process your payment if you
                make purchases, such as your payment instrument number (such as
                a credit card number), and the security code associated with
                your payment instrument. All payment data is stored by Stripe.
                You may find their privacy notice link(s) here:{" "}
                <a
                  href="https://stripe.com/gb/privacy"
                  className="text-blue-600 hover:text-blue-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://stripe.com/gb/privacy
                </a>
                .
              </p>
            </div>

            <div className="mb-4">
              <p className="text-gray-900 font-semibold mb-2">
                Social Media Login Data.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We may provide you with the option to register with us using
                your existing social media account details, like your Facebook,
                Twitter or other social media account. If you choose to register
                in this way, we will collect the information described in the
                section called "HOW DO WE HANDLE YOUR SOCIAL LOGINS?" below.
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              All personal information that you provide to us must be true,
              complete and accurate, and you must notify us of any changes to
              such personal information.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Information automatically collected
            </h3>
            <p className="text-sm font-medium text-gray-600 mb-2 italic">
              In Short: Some information — such as your Internet Protocol (IP)
              address and/or browser and device characteristics — is collected
              automatically when you visit our Services.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              We automatically collect certain information when you visit, use
              or navigate the Services. This information does not reveal your
              specific identity (like your name or contact information) but may
              include device and usage information, such as your IP address,
              browser and device characteristics, operating system, language
              preferences, referring URLs, device name, country, location,
              information about how and when you use our Services and other
              technical information.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              The information we collect includes:
            </p>

            <div className=" mb-4">
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold text-black">
                  Log and Usage Data.
                </span>{" "}
                Log and usage data is service-related, diagnostic, usage and
                performance information our servers automatically collect when
                you access or use our Services and which we record in log files.
                Depending on how you interact with us, this log data may include
                your IP address, device information, browser type and settings
                and information about your activity in the Services (such as the
                date/time stamps associated with your usage, pages and files
                viewed, searches and other actions you take such as which
                features you use), device event information (such as system
                activity, error reports (sometimes called 'crash dumps') and
                hardware settings).
              </p>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold text-black">Device Data</span> We
                collect device data such as information about your computer,
                phone, tablet or other device you use to access the Services.
                Depending on the device used, this device data may include
                information such as your IP address (or proxy server), device
                and application identification numbers, location, browser type,
                hardware model Internet service provider and/or mobile carrier,
                operating system and system configuration information. Location
                Data. We collect location data such as information about your
                device's location, which can be either precise or imprecise. How
                much information we collect depends on the type and settings of
                the device you use to access the Services. For example, we may
                use GPS and other technologies to collect geolocation data that
                tells us your current location (based on your IP address). You
                can opt out of allowing us to collect this information either by
                refusing access to the information or by disabling your Location
                setting on your device. Note however, if you choose to opt out,
                you may not be able to use certain aspects of the Services.
                Information collected through our App
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed">
                <span className="font-bold text-black">In Short:</span> We collect information regarding your geolocation, mobile device, push notifications, when you use our App.

            </p>
            <p className="text-gray-700 leading-relaxed">
                If you use our App, we also collect the following information:


            </p>
            <p className="text-gray-700 leading-relaxed">
                Geolocation Information. We may request access or permission to and track location-based information from your mobile device, either continuously or while you are using our App, to provide certain location-based services. If you wish to change our access or permissions, you may do so in your device's settings. Mobile Device Access. We may request access or permission to certain features from your mobile device, including your mobile device's camera, storage, social media accounts, calendar, microphone, and other features. If you wish to change our access or permissions, you may do so in your device's settings. Mobile Device Data. We automatically collect device information (such as your mobile device ID, model and manufacturer), operating system, version information and system configuration information, device and application identification numbers, browser type and version, hardware model Internet service provider and/or mobile carrier, and Internet Protocol (IP) address (or proxy server). If you are using our App, we may also collect information about the phone network associated with your mobile device, your mobile device’s operating system or platform, the type of mobile device you use, your mobile device’s unique device ID and information about the features of our App you accessed.


            </p>
            <p className="text-gray-700 leading-relaxed">
Push Notifications. We may request to send you push notifications regarding your account or certain features of the App. If you wish to opt-out from receiving these types of communications, you may turn them off in your device's settings.


            </p>
            <p className="text-gray-700 leading-relaxed">
This information is primarily needed to maintain the security and operation of our App, for troubleshooting and for our internal analytics and reporting purposes.


            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. HOW DO WE USE YOUR INFORMATION?
            </h2>
            <p className="text-sm font-medium text-gray-600 mb-2 italic">
              In Short: We process your information for purposes based on
              legitimate business interests, the fulfillment of our contract
              with you, compliance with our legal obligations, and/or your
              consent.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              We use personal information collected via our Services for a
              variety of business purposes described below. We process your
              personal information for these purposes in reliance on our
              legitimate business interests, in order to enter into or perform a
              contract with you, with your consent, and/or for compliance with
              our legal obligations. We indicate the specific processing grounds we rely on next to each purpose listed below.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              We use the information we collect or receive:
            </p>

            <ul className="list-disc list-inside text-gray-700 space-y-2 flex gap-2 flex-col">
                <li>
                    <b>To facilitate</b> account creation and logon process. If you choose to link your account with us to a third-party account (such as your Google or Facebook account), we use the information you allowed us to collect from those third parties to facilitate account creation and logon process for the performance of the contract. See the section below headed "HOW DO WE HANDLE YOUR SOCIAL LOGINS?" for further information.

                </li>
                <li>
                    <b>To post testimonials.</b> We post testimonials on our Services that may contain personal information. Prior to posting a testimonial, we will obtain your consent to use your name and the content of the testimonial. If you wish to update, or delete your testimonial, please contact us at support@specticalassetit.com and be sure to include your name, testimonial location, and contact information.

                </li>
                <li>
                    <b>Request feedback.</b> We may use your information to request feedback and to contact you about your use of our Services.

                </li>
                <li>
                    <b>To enable user-to-user communications.</b> We may use your information in order to enable user-to-user communications with each user's consent.

                </li>
                <li>
                    <b>To manage user accounts.</b> We may use your information for the purposes of managing our account and keeping it in working order.

                </li>
                <li>
                    <b>To send administrative information to you.</b> We may use your personal information to send you product, service and new feature information and/or information about changes to our terms, conditions, and policies.

                </li>
                <li>
                    <b>To protect our Services.</b> We may use your information as part of our efforts to keep our Services safe and secure (for example, for fraud monitoring and prevention).

                </li>
                <li>
                    <b>To enforce our terms.</b> conditions and policies for business purposes, to comply with legal and regulatory requirements or in connection with our contract.

                </li>
                <li>
                    <b>To respond to legal requests and prevent harm.</b> If we receive a subpoena or other legal request, we may need to inspect the data we hold to determine how to respond.

                </li>
                <li>
                    <b>Fulfill and manage your orders.</b> We may use your information to fulfill and manage your orders, payments, returns, and exchanges made through the Services.

                </li>
                <li>
                    <b>Administer prize draws and competitions.</b> We may use your information to administer prize draws and competitions when you elect to participate in our competitions.

                </li>
                <li>
                    <b>To deliver and facilitate delivery of services to the user.</b> We may use your information to provide you with the requested service.

                </li>
                <li>
                    <b>To respond to user inquiries/offer support to users.</b> We may use your information to respond to your inquiries and solve any potential issues you might have with the use of our Services.

                </li>
                <li>
                    <b>To send you marketing and promotional communications.</b> We and/or our third-party marketing partners may use the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. For example, when expressing an interest in obtaining information about us or our Services, subscribing to marketing or otherwise contacting us, we will collect personal information from you. You can opt-out of our marketing emails at any time (see the "WHAT ARE YOUR PRIVACY RIGHTS?" below).

                </li>
                <li>
                    <b>Deliver targeted advertising to you.</b> We may use your information to develop and display personalized content and advertising (and work with third parties who do so) tailored to your interests and/or location and to measure its effectiveness.

                </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?
            </h2>
            <p className="text-sm font-medium text-gray-600 mb-2 italic">
              In Short: We only share information with your consent, to comply
              with laws, to provide you with services, to protect your rights,
              or to fulfill business obligations.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              We may process or share your data that we hold based on the
              following legal basis: Consent, Legitimate Interests, Performance
              of a Contract, Legal Obligations, and Vital Interests.
            </p>

            <ul className="list-disc list-inside text-gray-700 space-y-2 flex gap-2 flex-col">
                <li>
<b>Consent:</b> We may process your data if you have given us specific consent to use your personal information for a specific purpose.

                </li>
                <li>
                    <b>Legitimate Interests:</b> We may process your data when it is reasonably necessary to achieve our legitimate business interests.

                    
                </li>
                <li>
                    <b>Performance of a Contract:</b> Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract.

                    
                </li>
                <li>
                    <b>Legal Obligations:</b> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process, such as in response to a court order or a subpoena (including in response to public authorities to meet national security or law enforcement requirements).

                    
                </li>
                <li>
                    <b>Vital Interests:</b> We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person and illegal activities, or as evidence in litigation in which we are involved.

                    
                </li>

                <li>
                    <b>More specifically.</b> we may need to process your data or share your personal information in the following situations:


                    
                </li>
                <li>
                    <b>Business Transfers.</b> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.

                    
                </li>
                <li>
                    <b>Google Maps Platform APIs.</b> We may share your information with certain Google Maps Platform APIs (e.g., Google Maps API, Place API). To find out more about Google’s Privacy Policy, please refer to this link. We obtain and store on your device ('cache') your location. You may revoke your consent anytime by contacting us at the contact details provided at the end of this document.

                    
                </li>
                <li>
                    <b>Vendors, Consultants and Other Third-Party Service Providers.</b> We may share your data with third-party vendors, service providers, contractors or agents who perform services for us or on our behalf and require access to such information to do that work. Examples include: payment processing, data analysis, email delivery, hosting services, customer service and marketing efforts. We may allow selected third parties to use tracking technology on the Services, which will enable them to collect data on our behalf about how you interact with our Services over time. This information may be used to, among other things, analyze and track data, determine the popularity of certain content, pages or features, and better understand online activity. Unless described in this notice, we do not share, sell, rent or trade any of your information with third parties for their promotional purposes. We have contracts in place with our data processors, which are designed to help safeguard your personal information. This means that they cannot do anything with your personal information unless we have instructed them to do it. They will also not share your personal information with any organization apart from us. They also commit to protect the data they hold on our behalf and to retain it for the period we instruct.

                </li>
                <li>
                    <b>Business Partners.</b> We may share your information with our business partners to offer you certain products, services or promotions.

                </li>
                <li>
                    <b>Other Users.</b> When you share personal information (for example, by posting comments, contributions or other content to the Services) or otherwise interact with public areas of the Services, such personal information may be viewed by all users and may be publicly made available outside the Services in perpetuity. If you interact with other users of our Services and register for our Services through a social network (such as Facebook), your contacts on the social network will see your name, profile photo, and descriptions of your activity. Similarly, other users will be able to view descriptions of your activity, communicate with you within our Services, and view your profile.

                </li>
                <li>
                    <b>Third Party Processors.</b> Our carefully selected partners and service providers may process personal information about you on our behalf as described below:

                </li>
                <li>
                    <b>Digital Marketing Service Providers.</b> We periodically appoint digital marketing agents to conduct marketing activity on our behalf, such activity may result in the compliant processing of personal information. Our appointed data processors include: (i)Prospect Global Ltd (trading as Sopro) Reg. UK Co. 09648733. You can contact Sopro and view their privacy policy here: http://sopro.io. Sopro are registered with the ICO Reg: ZA346877 their Data Protection Officer can be emailed at: dpo@sopro.io.

                </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. WHO WILL YOUR INFORMATION BE SHARED WITH?
            </h2>
            <p className="text-sm font-medium text-gray-600 mb-2 italic">
              In Short: We only share information with the following third
              parties.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              We only share and disclose your information with the following third parties. If we have processed your data based on your consent and you wish to revoke your consent, please contact us using the contact details provided in the section below titled "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?".


            </p>

            <ul className="list-disc list-inside text-gray-700 space-y-2 flex gap-2 flex-col">
                <li>
                    <b>Advertising, Direct Marketing, and Lead Generation</b>
                    <br /><span className="ml-5">Google AdSense</span>
                </li>
                <li>
                    <b>Allow Users to Connect to Their Third-Party Accounts</b>
                    <br /><span className="ml-5">
                        Facebook account and Google account
                    </span>
                </li>
                <li>
                    <b>Cloud Computing Services
</b>
                    <br /><span className="ml-5">Microsoft Azure
</span>
                </li>
                <li>
                    <b>Content Optimization
</b>
                    <br /><span className="ml-5">YouTube video embed and Google Fonts
</span>
                </li>
                <li>
                    <b>Functionality and Infrastructure Optimization
</b>
                    <br /><span className="ml-5">Microsoft Azure and Termly.io
</span>
                </li>
                <li>
                    <b>Invoice and Billing
</b>
                    <br /><span className="ml-5">Stripe</span>
                </li>
                <li>
                    <b>Retargeting Platforms
</b>
                    <br /><span className="ml-5">Google Analytics Remarketing, Google Ads Remarketing , Facebook Remarketing, Facebook Custom Audience, LinkedIn Website Retargeting, Twitter Remarketing and Twitter Tailored Audiences
</span>
                </li>
                <li>
                    <b>Social Media Sharing and Advertising
</b>
                    <br /><span className="ml-5">Facebook advertising, Instagram advertising, LinkedIn advertising and Twitter advertising
</span>
                </li>
                <li>
                    <b>User Account Registration and Authentication
</b>
                    <br /><span className="ml-5">Facebook Login, Google Sign-In, Google OAuth 2.0, Firebase Authentication and Stripe OAuth
</span>
                </li>
                <li>
                    <b>Web and Mobile Analytics
</b>
                    <br /><span className="ml-5">Facebook Analytics, Facebook Ads conversion tracking, Google Ads, Google Analytics, Google Tag Manager and TestFlight
</span>
                </li>
                <li>
                    <b>Website Performance Monitoring
</b>
                    <br /><span className="ml-5">
Firebase Crash Reporting, Firebase Performance Monitoring and Sentry

                    </span>
                </li>
                <li>
                    <b>Website Testing
</b>
                    <br /><span className="ml-5">
                        Google Play Console, TestFlight and Cloudflare

                    </span>
                </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
            </h2>
            <p className="text-sm font-medium text-gray-600 mb-2 italic">
              In Short: We may use cookies and other tracking technologies to
              collect and store your information.
            </p>

            <p className="text-gray-700 leading-relaxed">
              We may use cookies and similar tracking technologies (like web
              beacons and pixels) to access or store information. Specific
              information about how we use such technologies and how you can
              refuse certain cookies is set out in our Cookie Notice.
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
            </h2>
            <p className="text-sm font-medium text-gray-600 mb-2 italic">
              In Short: If you choose to register or log in to our services
              using a social media account, we may have access to certain
              information about you.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
             Our Services offers you the ability to register and login using your third-party social media account details (like your Facebook or Twitter logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, friends list, profile picture as well as other information you choose to make public on such social media platform.


            </p>

            <p className="text-gray-700 leading-relaxed">
             We will use the information we receive only for the purposes that are described in this privacy notice or that are otherwise made clear to you on the relevant Services. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend that you review their privacy notice to understand how they collect, use and share your personal information, and how you can set your privacy preferences on their sites and apps.


            </p>
          </section>

          {/* Section 7 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?
            </h2>
            <p className="text-sm font-medium text-gray-600 mb-2 italic">
              In Short: We may transfer, store, and process your information in
              countries other than your own.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Our servers are located in the United Kingdom. If you are accessing our Services from outside the United Kingdom, please be aware that your information may be transferred to, stored, and processed by us in our facilities and by those third parties with whom we may share your personal information (see "WILL YOUR INFORMATION BE SHARED WITH ANYONE?" above), in and other countries.


            </p>

            <p className="text-gray-700 leading-relaxed">
              If you are a resident in the European Economic Area (EEA) or
              United Kingdom (UK), then these countries may not necessarily have
              data protection laws or other similar laws as comprehensive as
              those in your country. We will however take all necessary measures
              to protect your personal information in accordance with this
              privacy notice and applicable law.
            </p>
          </section>

          {/* Section 8 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. HOW LONG DO WE KEEP YOUR INFORMATION?
            </h2>
            <p className="text-sm font-medium text-gray-600 mb-2 italic">
              In Short: We keep your information for as long as necessary to
              fulfill the purposes outlined in this privacy notice unless
              otherwise required by law.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.


            </p>

            <p className="text-gray-700 leading-relaxed">
              When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.


            </p>
          </section>

          {/* Section 9 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. HOW DO WE KEEP YOUR INFORMATION SAFE?
            </h2>
            <p className="text-sm font-medium text-gray-600 mb-2 italic">
              In Short: We aim to protect your personal information through a
              system of organizational and technical security measures.
            </p>

            <p className="text-gray-700 leading-relaxed">
              We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security, and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.


            </p>
          </section>

          {/* Section 10 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10. DO WE COLLECT INFORMATION FROM MINORS?
            </h2>
            <p className="text-sm font-medium text-gray-600 mb-2 italic">
              In Short: We do not knowingly collect data from or market to
              children under 18 years of age.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              We do not knowingly solicit data from or market to children under
              18 years of age. By using the Services, you represent that you are
              at least 18 or that you are the parent or guardian of such a minor
              and consent to such minor dependent's use of the Services.
              If we learn that personal information from users less than 18
              years of age has been collected, we will deactivate the account
              and take reasonable measures to promptly delete such data from our
              records. If you become aware of any data we may have collected from children under age 18, please contact us at support@specticalassetit.com.
            </p>
          </section>

          {/* Section 11 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              11. WHAT ARE YOUR PRIVACY RIGHTS?
            </h2>
            <p className="text-sm font-medium text-gray-600 mb-2 italic">
              In Short: In some regions, such as the European Economic Area
              (EEA) and United Kingdom (UK), you have rights that allow you
              greater access to and control over your personal information. You may review, change, or terminate your account at any time.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              In some regions (like the EEA and UK), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information. To make such a request, please use the contact details provided below. We will consider and act upon any request in accordance with applicable data protection laws.


            </p>

            <p className="text-gray-700 leading-relaxed">
              If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time. Please note however that this will not affect the lawfulness of the processing before its withdrawal, nor will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.


            </p>
          </section>

          {/* Section 12 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              12. CONTROLS FOR DO-NOT-TRACK FEATURES
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.


            </p>
          </section>

          {/* Section 13 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              13. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
            </h2>
            <p className="text-sm font-medium text-gray-600 mb-2 italic">
              In Short: Yes, if you are a resident of California, you are
              granted specific rights regarding access to your personal
              information.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.


            </p>

            <p className="text-gray-700 leading-relaxed">
              If you are under 18 years of age, reside in California, and have a registered account with a Service, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below, and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g. backups, etc.).


            </p>
          </section>
        </div>
      </div>
    </MainLayout>
  );
}
