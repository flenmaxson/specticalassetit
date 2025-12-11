/* eslint-disable react/no-unescaped-entities */
import MainLayout from '@/components/MainLayout';
import Link from 'next/link';

export default function CookiePolicyPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-white">
        <div className="w-full md:w-[90%] mx-auto px-4 py-30 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Cookie Policy</h1>
            <p className="text-sm text-gray-600">Last updated November 21, 2023</p>
          </div>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-gray-700 leading-relaxed">
              This Cookie Policy explains how Spectical Asset IT ("Company", "we", "us", and "our") uses cookies and similar technologies to recognize you when you visit our websites at{' '}
              <a href="https://nhitservices.net" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                https://nhitservices.net
              </a>
              , ("Websites"). It explains what these technologies are and why we use them, as well as your rights to control our use of them.
            </p>

            <p className="text-gray-700 leading-relaxed mt-4">
              In some cases we may use cookies to collect personal information, or that becomes personal information if we combine it with other information.
            </p>
          </div>

          {/* What are cookies? */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What are cookies?</h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Cookies set by the website owner (in this case, Spectical Asset IT) are called "first party cookies". Cookies set by parties other than the website owner are called "third party cookies". Third party cookies enable third party features or functionality to be provided on or through the website (e.g. like advertising, interactive content and analytics). The parties that set these third party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.
            </p>
          </section>

          {/* Why do we use cookies? */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why do we use cookies?</h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              We use first and third party cookies for several reasons. Some cookies are required for technical reasons in order for our Websites to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties. Third parties serve cookies through our Websites for advertising, analytics and other purposes. This is described in more detail below.
            </p>

            <p className="text-gray-700 leading-relaxed">
              The specific types of first and third party cookies served through our Websites and the purposes they perform are described below (please note that the specific cookies served may vary depending on the specific Online Properties you visit):
            </p>
          </section>

          {/* How can I control cookies? */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How can I control cookies?</h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly necessary to provide you with services.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              The Cookie Consent Manager can be found in the notification banner and on our website. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted. You may also set or amend your web browser controls to accept or refuse cookies. As the means by which you can refuse cookies through your web browser controls vary from browser-to-browser, you should visit your browser's help menu for more information.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
                The specific types of first and third party cookies served through our Websites and the purposes they perform are described in the table below (please note that the specific cookies served may vary depending on the specific Online Properties you visit):


            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
                The specific types of first and third party cookies served through our Websites and the purposes they perform are described in the table below (please note that the specific cookies served may vary depending on the specific Online Properties you visit):


            </p>
          </section>
        </div>
      </div>
    </MainLayout>
  );
}