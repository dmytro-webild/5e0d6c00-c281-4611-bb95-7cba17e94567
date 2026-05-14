"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="small"
        sizing="mediumLarge"
        background="floatingGradient"
        cardStyle="solid"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="layered"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "features",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Fast Track Move"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlay
      title="Your Move, Fast and Stress-Free"
      description="Fast Track Move delivers reliable, professional relocation services tailored to your schedule. We move your life with care."
      buttons={[
        {
          text: "Get a Free Quote",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/young-woman-moving-new-home_23-2149242155.jpg"
      avatarText="Trusted by 5,000+ happy customers"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/young-man-moving-new-home_23-2149242113.jpg",
          alt: "Customer profile 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/woman-handling-belongings-cardboard-boxes-moving-new-house_23-2149086799.jpg",
          alt: "Customer profile 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-couple-moving-new-home-together-african-american-couple-with-cardboard-boxes_1157-40330.jpg",
          alt: "Customer profile 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/boxes-packaged-moving-new-home_23-2149162242.jpg",
          alt: "Customer profile 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/couple-handling-cardboard-boxes-with-belongings-after-moving-together-new-home_23-2149086811.jpg",
          alt: "Customer profile 5",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="Why Fast Track Move?"
      description={[
        "With over 10 years of experience, we specialize in seamless residential and commercial relocations.",
        "Our team is committed to safety, efficiency, and making your move as smooth as possible from start to finish.",
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardMedia
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        {
          id: "f1",
          title: "Secure Transport",
          description: "We treat your belongings with the utmost care, using modern vehicles and professional packing gear.",
          tag: "Security",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-volunteer-holding-box_23-2149196117.jpg",
        },
        {
          id: "f2",
          title: "Expert Packing",
          description: "Don't lift a finger! Our team packs and unpacks so you can focus on settling in.",
          tag: "Packing",
          imageSrc: "http://img.b2bpic.net/free-photo/sticky-tape-box_23-2147758664.jpg",
        },
        {
          id: "f3",
          title: "Easy Booking",
          description: "Our online platform makes scheduling your move fast and transparent.",
          tag: "Technology",
          imageSrc: "http://img.b2bpic.net/free-photo/calendar-planner-agenda-schedule-concept_53876-132201.jpg",
        },
      ]}
      title="Our Moving Services"
      description="We offer comprehensive solutions to handle every aspect of your relocation needs."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "5,000+",
          title: "Successful Moves",
          description: "Happy clients across the country.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-delivery-man-with-packages_23-2148447826.jpg",
        },
        {
          id: "m2",
          value: "98%",
          title: "Customer Satisfaction",
          description: "High praise from our service.",
          imageSrc: "http://img.b2bpic.net/free-photo/cardboard-boxes-with-copy-space_23-2148569402.jpg",
        },
        {
          id: "m3",
          value: "10+",
          title: "Years Experience",
          description: "Decade of moving expertise.",
          imageSrc: "http://img.b2bpic.net/free-photo/dating-tips-find-love-e-dating_53876-120952.jpg",
        },
      ]}
      title="Our Track Record"
      description="We take pride in our success stories."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Sarah J.",
          role: "Homeowner",
          testimonial: "The best move of my life! Fast and careful.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-couple-with-cardboard-boxes-new-home-moving-house-concept_1157-47974.jpg",
        },
        {
          id: "2",
          name: "Michael R.",
          role: "Business Owner",
          testimonial: "Fast Track Move handled our office relocation perfectly.",
          imageSrc: "http://img.b2bpic.net/free-photo/multiethnic-couple-finding-home-decor-inspiration-laptop-doing-online-shopping-move-new-rented-apartment-flat-unpacking-house-furniture-belongings-new-beginnings_482257-43698.jpg",
        },
        {
          id: "3",
          name: "Emily D.",
          role: "Tenant",
          testimonial: "Very professional and friendly staff. Highly recommend.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-pretty-woman-holding-gift-wrapped-box-feeling-pleasure-receive-present-new-year-eve_171337-216.jpg",
        },
        {
          id: "4",
          name: "David L.",
          role: "Homeowner",
          testimonial: "Super efficient! Everything arrived in perfect condition.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-delivery-woman-with-pack_23-2149103397.jpg",
        },
        {
          id: "5",
          name: "Linda K.",
          role: "Homeowner",
          testimonial: "Truly exceeded my expectations. Smooth operation.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-couple-sitting-floor_23-2148252082.jpg",
        },
      ]}
      title="Loved By Our Clients"
      description="See why homeowners and businesses choose us."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "How far in advance should I book?",
          content: "We recommend booking at least 2 weeks in advance.",
        },
        {
          id: "q2",
          title: "Are my belongings insured?",
          content: "Yes, we provide full insurance for your peace of mind.",
        },
        {
          id: "q3",
          title: "Do you provide packing supplies?",
          content: "Absolutely, we have all necessary materials to pack safely.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/portrait-married-people-moving-rented-apartment-flat-starting-new-beginnings-future-feeling-positive-about-relocation-household-carrying-carton-containers-packages_482257-42552.jpg"
      mediaAnimation="slide-up"
      title="Common Questions"
      description="Everything you need to know about our process."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{
        variant: "canvas-reveal",
      }}
      text="Ready to get moving? Contact us for a free, no-obligation quote today."
      buttons={[
        {
          text: "Contact Us",
          href: "#contact",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Services",
          items: [
            {
              label: "Residential Moving",
              href: "#",
            },
            {
              label: "Commercial Moving",
              href: "#",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 Fast Track Move"
      bottomRightText="All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
