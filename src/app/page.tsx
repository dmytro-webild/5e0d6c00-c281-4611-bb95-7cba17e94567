"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentyEight from '@/components/sections/feature/FeatureCardTwentyEight';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import { ArrowRight, CheckCircle, Package, Truck, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="medium"
        sizing="medium"
        background="noise"
        cardStyle="glass-elevated"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
            <NavbarStyleApple
              navItems={[
                { name: "Home", id: "hero" },
                { name: "About", id: "about" },
                { name: "Features", id: "features" },
                { name: "Metrics", id: "metrics" },
                { name: "Contact", id: "contact" },
              ]}
              brandName="Fast Track Move"
            />
        </div>

        <div id="hero" data-section="hero">
          <HeroBillboardScroll
            title="Fast Track Move"
            description="Relocation services designed for the modern world. Efficient, secure, and stress-free movement for your life's transitions."
            background={{ variant: "sparkles-gradient" }}
            buttons={[{ text: "Get Started", href: "#contact" }]}
            imageSrc="http://img.b2bpic.net/free-photo/young-woman-moving-new-home_23-2149242155.jpg"
          />
        </div>

        <div id="about" data-section="about">
          <TestimonialAboutCard
            tag="About Us"
            title="Moving Made Simple"
            description="We bridge the gap between where you are and where you want to be."
            subdescription="Fast Track Move combines a decade of experience with high-tech logistics to ensure every transition is seamless, safe, and surprisingly fast."
            icon={Truck}
            imageSrc="http://img.b2bpic.net/free-photo/young-man-moving-new-home_23-2149242113.jpg"
            mediaAnimation="slide-up"
            useInvertedBackground={true}
          />
        </div>

        <div id="features" data-section="features">
          <FeatureCardTwentyEight
            title="Our Service Pillars"
            description="The core principles that drive our relocation operations."
            animationType="slide-up"
            textboxLayout="split"
            useInvertedBackground={false}
            features={[
              { id: "1", title: "Secure Transport", subtitle: "Safety first", category: "Logistics", value: "Guaranteed" },
              { id: "2", title: "Expert Packing", subtitle: "Zero damage", category: "Services", value: "Precision" },
              { id: "3", title: "Real-time Booking", subtitle: "Transparency", category: "Software", value: "Instant" }
            ]}
          />
        </div>

        <div id="metrics" data-section="metrics">
          <MetricCardThree
            title="Proven Results"
            description="Our performance in numbers."
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
            metrics={[
              { id: "m1", icon: Users, title: "Happy Clients", value: "5,000+" },
              { id: "m2", icon: Package, title: "Moves Completed", value: "12,000" },
              { id: "m3", icon: CheckCircle, title: "Satisfaction", value: "99%" }
            ]}
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialCardFive
            title="Client Stories"
            description="Real experiences from real people."
            textboxLayout="split"
            useInvertedBackground={false}
            testimonials={[
              { id: "t1", name: "Alex P.", date: "2024", title: "Smooth Move", quote: "Professional, fast, and incredibly reliable.", tag: "Customer", avatarSrc: "https://i.pravatar.cc/150?u=1" }
            ]}
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqSplitText
            sideTitle="Frequently Asked Questions"
            sideDescription="Need more information? We are here to help."
            faqsAnimation="slide-up"
            useInvertedBackground={false}
            faqs={[
              { id: "q1", title: "What makes us different?", content: "Our technology-driven approach ensures precision at every step." },
              { id: "q2", title: "Is insurance included?", content: "Yes, all our moves are fully insured for your protection." }
            ]}
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactSplit
            tag="Get In Touch"
            title="Schedule Your Move"
            description="Fill in your details and we'll reach out with a custom quote."
            background={{ variant: "sparkles-gradient" }}
            useInvertedBackground={false}
            imageSrc="http://img.b2bpic.net/free-photo/young-couple-moving-new-home-together-african-american-couple-with-cardboard-boxes_1157-40330.jpg"
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterMedia
            logoText="Fast Track Move"
            imageSrc="http://img.b2bpic.net/free-photo/boxes-packaged-moving-new-home_23-2149162242.jpg"
            columns={[
              { title: "Quick Links", items: [{ label: "Home", href: "#hero" }, { label: "Features", href: "#features" }] }
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}