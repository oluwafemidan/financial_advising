import React from "react";
import Container from "../shared/Container";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebookF,
  FaDiscord,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const d = new Date();
  return (
    <div>
      <section className="footer-bg">
        <Container>
          <div className="mt-10 flex flex-col md:flex-row lg:flex-row gap-8  lg:gap-12 items-center">
            <div className="md:1/4 lg:w-1/4 flex flex-col mb-5">
              <p className="font-semibold">Services</p>
              <a href="/RetirementPlanning" className="hover:underline">
                Retirement Planning
              </a>
              <a href="/InvestmentStrategies" className="hover:underline">
                Investment Strategies
              </a>
              <a href="/TaxOptimization" className="hover:underline">
                Tax Optimization
              </a>
              <a href="/WealthManagement" className="hover:underline">
                Wealth Management
              </a>
              <a href="/EstatePlanning" className="hover:underline">
                Estate Planning
              </a>
            </div>
            <div className="md:1/4 lg:w-1/4 flex flex-col mb-5">
              <p className="font-semibold">Resources</p>
              <a href="/FinancialCalculators" className="hover:underline">
                Financial Calculators
              </a>
              <a href="/Blog&Insights" className="hover:underline">
                Blog / Insights
              </a>
              <a href="/FAQs" className="hover:underline">
                FAQs
              </a>
              <a href="/GlossaryOfTerms" className="hover:underline">
                Glossary of Terms
              </a>
              <a href="/MarketUpdates" className="hover:underline">
                Market Updates
              </a>
            </div>

            <div className="md:1/4 lg:w-1/4 flex flex-col mb-5">
              <p className="font-semibold">Company</p>
              <a id="about" href="/about" className="hover:underline">
                About Us
              </a>
              <a href="/MeetTheAdvisors" className="hover:underline">
                Meet the Advisors
              </a>
              <a href="/Careers" className="hover:underline">
                Careers
              </a>
              <a
                id="testimonial"
                href="/testimonial"
                className="hover:underline"
              >
                Testimonials
              </a>
              <a href="/Press&Media" className="hover:underline">
                Press / Media
              </a>
            </div>
            <div className="md:1/4 lg:w-1/4 flex flex-col mb-5">
              <p className="font-semibold">Support & Contact</p>
              <a href="/ClientLogin" className="hover:underline">
                Client Login
              </a>
              <a id="contact" href="/ContactUs" className="hover:underline">
                Contact Us
              </a>
              <a href="/ScheduleAConsultation" className="hover:underline">
                Schedule a Consultation
              </a>
              <a href="/Office Locations" className="hover:underline">
                Office Locations
              </a>
              <a href="/LiveChat" className="hover:underline">
                Live Chat
              </a>
            </div>
          </div>
          <div className="flex flex-row gap-6 justify-end">
            <a href="/https://www.linkedin.com/">
              <FaLinkedin size={22} />
            </a>
            <a href="/https://www.twitter.com/">
              <FaXTwitter size={22} />
            </a>
            <a href="/https://www.instagram.com/">
              <FaInstagram size={22} />
            </a>
            <a href="/https://www.facebook.com/">
              <FaFacebookF size={22} />
            </a>
            <a href="/https://www.discord.com/">
              <FaDiscord size={22} />
            </a>
          </div>
          <hr className="my-9" />
          <p className="font-semibold mb-5">Legal & Compliance</p>
          <div className="flex gap-6">
            <a href="/PrivacyPolicy" className="hover:underline">
              Privacy Policy
            </a>
            <a href="/TermsOfService" className="hover:underline">
              Terms of Service
            </a>
            <a href="/Disclosures" className="hover:underline">
              Disclosures
            </a>
            <a href="/Compliance" className="hover:underline">
              FINRA/SEC Compliance
            </a>
            <a href="/CookiePreferences" className="hover:underline">
              Cookie Preferences
            </a>
          </div>
          <div className="flex justify-center my-5 font-medium">
            <p>&copy;{d.getFullYear()} EFA. All Rights Reserved</p>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Footer;
