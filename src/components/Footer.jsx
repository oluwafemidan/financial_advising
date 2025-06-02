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
              <a href="#" className="hover:underline">
                Retirement Planning
              </a>
              <a href="#" className="hover:underline">
                Investment Strategies
              </a>
              <a href="#" className="hover:underline">
                Tax Optimization
              </a>
              <a href="#" className="hover:underline">
                Wealth Management
              </a>
              <a href="#" className="hover:underline">
                Estate Planning
              </a>
            </div>
            <div className="md:1/4 lg:w-1/4 flex flex-col mb-5">
              <p className="font-semibold">Resources</p>
              <a href="#" className="hover:underline">
                Financial Calculators
              </a>
              <a href="#" className="hover:underline">
                Blog / Insights
              </a>
              <a href="#" className="hover:underline">
                FAQs
              </a>
              <a href="#" className="hover:underline">
                Glossary of Terms
              </a>
              <a href="#" className="hover:underline">
                Market Updates
              </a>
            </div>

            <div className="md:1/4 lg:w-1/4 flex flex-col mb-5">
              <p className="font-semibold">Company</p>
              <a id="about" href="#" className="hover:underline">
                About Us
              </a>
              <a href="#" className="hover:underline">
                Meet the Advisors
              </a>
              <a href="#" className="hover:underline">
                Careers
              </a>
              <a id="testimonial" href="#" className="hover:underline">
                Testimonials
              </a>
              <a href="#" className="hover:underline">
                Press / Media
              </a>
            </div>
            <div className="md:1/4 lg:w-1/4 flex flex-col mb-5">
              <p className="font-semibold">Support & Contact</p>
              <a href="#" className="hover:underline">
                Client Login
              </a>
              <a id="contact" href="#" className="hover:underline">
                Contact Us
              </a>
              <a href="#" className="hover:underline">
                Schedule a Consultation
              </a>
              <a href="#" className="hover:underline">
                Office Locations
              </a>
              <a href="#" className="hover:underline">
                Live Chat
              </a>
            </div>
          </div>
          <div className="flex flex-row gap-6 justify-end">
            <a href="#">
              <FaLinkedin size={22} />
            </a>
            <a href="#">
              <FaXTwitter size={22} />
            </a>
            <a href="#">
              <FaInstagram size={22} />
            </a>
            <a href="#">
              <FaFacebookF size={22} />
            </a>
            <a href="#">
              <FaDiscord size={22} />
            </a>
          </div>
          <hr className="my-9" />
          <p className="font-semibold mb-5">Legal & Compliance</p>
          <div className="flex gap-6">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
            <a href="#" className="hover:underline">
              Disclosures
            </a>
            <a href="#" className="hover:underline">
              FINRA/SEC Compliance
            </a>
            <a href="#" className="hover:underline">
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
