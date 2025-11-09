import Image from "next/image";
import { ContactDrawer } from "@/components/contact-drawer";
import { Button } from "@/components/ui/button";

// Image asset constants - now using local assets
// these were imported from the figma design to the public/portfolio-assets folder
// all done via MCP server
const imgClientImage = "/portfolio-assets/client-image.png";
const img = "/portfolio-assets/gallery-1.png";
const img1 = "/portfolio-assets/gallery-2.png";
const img2 = "/portfolio-assets/gallery-3.png";
const img3 = "/portfolio-assets/gallery-4.png";
const img4 = "/portfolio-assets/gallery-5.png";
const img5 = "/portfolio-assets/gallery-6.png";
const imgHeaderImage1 = "/portfolio-assets/header-image.png";
const imgStar = "/portfolio-assets/star.svg";
const img8 = "/portfolio-assets/logo-1-google.svg";
const img9 = "/portfolio-assets/logo-2-nike.svg";
const img10 = "/portfolio-assets/logo-3-samsung.svg";
const img11 = "/portfolio-assets/logo-4-apple.svg";
const img12 = "/portfolio-assets/logo-5-adidas.svg";
const img15 = "/portfolio-assets/social-discord.svg";
const img16 = "/portfolio-assets/social-facebook.svg";
const img17 = "/portfolio-assets/social-dribbble.svg";
const imgInstagram = "/portfolio-assets/social-instagram.svg";
const imgBehance = "/portfolio-assets/social-behance.svg";
const imgRectangle19 = "/portfolio-assets/skills-rectangle.svg";
const imgArrow3 = "/portfolio-assets/skills-arrow.svg";
const imgRectangle21 = "/portfolio-assets/skills-rectangle-orange.svg";
const imgArrow5 = "/portfolio-assets/skills-arrow-orange.svg";
const imgRectangle25 = "/portfolio-assets/skills-rectangle-blue.svg";
const imgArrow7 = "/portfolio-assets/skills-arrow-blue.svg";

// Navigation Component
const Navigation = () => (
  <nav className="bg-white flex flex-wrap items-center justify-between px-[42px] py-[24px] w-full box-border">
    <div className="text-[#2d2d2d] text-[20px] font-semibold leading-[30px] font-['Epilogue'] whitespace-pre">
      Logo
    </div>
    <div className="flex gap-[24px] items-start text-[#2d2d2d] text-[17px] font-normal font-['Epilogue'] leading-[27px]">
      <a href="#about" className="cursor-pointer hover:opacity-70">
        About
      </a>
      <a href="#work" className="cursor-pointer hover:opacity-70">
        Work
      </a>
      <a href="#contact" className="cursor-pointer hover:opacity-70">
        Contact
      </a>
    </div>
  </nav>
);

// Header Section Component
const HeaderSection = () => (
  <section className="bg-white flex flex-wrap items-center justify-center gap-[68px] px-[24px] py-[42px] w-full box-border">
    <div className="flex flex-col gap-[48px] items-start max-w-[620px] min-w-[320px] grow basis-0">
      <div className="flex flex-col gap-[24px] items-start w-full text-[#2d2d2d]">
        <p className="text-[20px] font-semibold font-['Epilogue'] leading-[30px]">
          Branding | Image making
        </p>
        <h1 className="text-[68px] font-semibold font-['Epilogue'] leading-[normal]">
          Visual Designer
        </h1>
        <p className="text-[17px] font-normal font-['Epilogue'] leading-[27px]">
          This is a template Figma file, turned into code using Anima. <br />
          Learn more at AnimaApp.com
        </p>
      </div>
      <ContactDrawer />
    </div>
    <div className="grow basis-0 h-[360px] max-w-[480px] min-w-[320px] relative">
      <Image
        src={imgHeaderImage1}
        alt="Visual Designer"
        fill
        className="object-contain pointer-events-none"
      />
    </div>
  </section>
);

// Logo Bar Component
const LogoBar = () => (
  <section className="bg-white flex flex-wrap items-center justify-between gap-[68px] px-[68px] py-[42px] w-full box-border">
    <Image src={img8} alt="Google" width={116} height={38} />
    <Image src={img9} alt="Nike" width={86} height={31} />
    <Image src={img10} alt="Samsung" width={113} height={17} />
    <Image src={img11} alt="Apple" width={38} height={47} />
    <Image src={img12} alt="Adidas" width={65} height={44} />
  </section>
);

// Skills Card Icon Component
const SkillsCardIcon = ({ version = "1" }: { version?: "1" | "2" | "3" }) => {
  if (version === "2") {
    return (
      <div className="relative w-[124px] h-[124px]">
        <div className="absolute inset-0">
          <Image src={imgRectangle21} alt="" fill className="object-fill" />
        </div>
        <div className="absolute bottom-[47.42%] left-[58.26%] right-0 top-[10.84%] flex items-center justify-center">
          <div className="h-px w-[73.201px] rotate-[315deg]">
            <div className="relative w-full h-full">
              <div className="absolute inset-[-4.77px_-6.52%]">
                <Image src={imgArrow5} alt="" fill className="object-fill" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (version === "3") {
    return (
      <div className="relative w-[124px] h-[124px]">
        <div className="absolute inset-0">
          <Image src={imgRectangle25} alt="" fill className="object-fill" />
        </div>
        <div className="absolute bottom-0 left-0 right-[58.26%] top-[58.26%] flex items-center justify-center">
          <div className="h-px w-[73.201px] rotate-[315deg]">
            <div className="relative w-full h-full">
              <div className="absolute bottom-[-4.77px] left-[-6.52%] right-0 top-[-4.77px]">
                <Image src={imgArrow7} alt="" fill className="object-fill" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-[124px] h-[124px]">
      <div className="absolute inset-0">
        <Image src={imgRectangle19} alt="" fill className="object-fill" />
      </div>
      <div className="absolute inset-[33.91%_30.41%_23.68%_28.6%] flex items-center justify-center">
        <div className="h-px w-[73.142px] rotate-[314.019deg] skew-x-[358.04deg]">
          <div className="relative w-full h-full">
            <div className="absolute inset-[-6.06px_-1.12%_-6.06px_-6.49%]">
              <Image src={imgArrow3} alt="" fill className="object-fill" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Skills Card Component
const SkillsCard = ({
  title,
  description,
  iconVersion = "1",
}: {
  title: string;
  description: string;
  iconVersion?: "1" | "2" | "3";
}) => (
  <div className="bg-white flex flex-col gap-[42px] items-center justify-center px-[42px] py-[64px] grow basis-0 min-w-[320px] box-border">
    <SkillsCardIcon version={iconVersion} />
    <div className="flex flex-col gap-[12px] items-start text-[#2d2d2d] text-center w-full">
      <h3 className="text-[27px] font-semibold font-['Epilogue'] leading-[42px] h-[42px] w-full">
        {title}
      </h3>
      <p className="text-[17px] font-normal font-['Epilogue'] leading-[27px] w-full">
        {description}
      </p>
    </div>
  </div>
);

// Skills Section Component
const SkillsSection = () => (
  <section className="bg-white flex flex-col gap-[42px] items-center px-[24px] py-[42px] w-full overflow-clip box-border">
    <div className="flex flex-wrap gap-[24px] items-start w-full">
      <SkillsCard
        title="Product Design"
        description="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"
        iconVersion="1"
      />
      <SkillsCard
        title="Visual Design"
        description="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"
        iconVersion="2"
      />
      <SkillsCard
        title="Art Direction"
        description="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"
        iconVersion="3"
      />
    </div>
  </section>
);

// Gallery Card Component
const GalleryCard = ({
  imgSrc,
  title = "Project title",
  description = "UI, Art drection",
}: {
  imgSrc: string;
  title?: string;
  description?: string;
}) => (
  <div className="flex flex-col gap-[24px] items-start grow basis-0 min-w-[320px]">
    <div className="h-[330px] w-full relative">
      <Image
        src={imgSrc}
        alt={title}
        fill
        className="object-cover pointer-events-none"
      />
    </div>
    <div className="flex flex-col gap-[8px] items-start text-[#2d2d2d] w-full">
      <h3 className="text-[20px] font-semibold font-['Epilogue'] leading-[30px] w-full">
        {title}
      </h3>
      <p className="text-[17px] font-normal font-['Epilogue'] leading-[27px] w-full">
        {description}
      </p>
    </div>
  </div>
);

// Gallery Section Component
const GallerySection = () => (
  <section className="bg-white flex flex-col gap-[42px] items-center px-[24px] py-[42px] w-full overflow-clip box-border">
    <h2 className="text-[32px] font-semibold font-['Epilogue'] leading-[42px] text-[#2d2d2d] text-center">
      Latest work
    </h2>
    <div className="flex flex-wrap gap-[24px] items-start w-full">
      <GalleryCard imgSrc={img} />
      <GalleryCard imgSrc={img1} />
      <GalleryCard imgSrc={img2} />
      <GalleryCard imgSrc={img3} />
      <GalleryCard imgSrc={img4} />
      <GalleryCard imgSrc={img5} />
    </div>
  </section>
);

// Star Component
const Star = () => (
  <div className="w-[20px] h-[20px] relative">
    <Image src={imgStar} alt="star" fill />
  </div>
);

// Testimonial Card Component
const TestimonialCard = ({
  feedback = "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
  clientName = "Gemma Nolen",
  clientCompany = "Google",
}: {
  feedback?: string;
  clientName?: string;
  clientCompany?: string;
}) => (
  <div className="bg-[#f3f3f3] flex flex-col gap-[68px] items-start px-[42px] py-[42px] grow basis-0 min-w-[320px] box-border">
    <p className="text-[20px] font-semibold font-['Epilogue'] leading-[30px] text-[#2d2d2d] w-full">
      {feedback}
    </p>
    <div className="flex gap-[16px] items-start w-full">
      <div className="w-[50px] h-[50px] relative">
        <Image
          src={imgClientImage}
          alt={clientName}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-[11px] items-start grow basis-0">
        <div className="flex gap-[6px] items-start">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
        <div className="flex flex-col items-start text-[#2d2d2d] w-full">
          <p className="text-[20px] font-semibold font-['Epilogue'] leading-[30px] w-full">
            {clientName}
          </p>
          <p className="text-[17px] font-normal font-['Epilogue'] leading-[27px] w-full">
            {clientCompany}
          </p>
        </div>
      </div>
    </div>
  </div>
);

// Testimonial Section Component
const TestimonialSection = () => (
  <section className="bg-white flex flex-col gap-[42px] items-center px-[24px] py-[42px] w-full overflow-clip box-border">
    <h2 className="text-[32px] font-semibold font-['Epilogue'] leading-[42px] text-[#2d2d2d] text-center">
      Testimonial
    </h2>
    <div className="flex flex-wrap gap-[24px] items-start w-full">
      <TestimonialCard />
      <TestimonialCard />
      <TestimonialCard />
      <TestimonialCard />
      <TestimonialCard />
      <TestimonialCard />
    </div>
  </section>
);

// Input Field Component
const InputField = ({ label }: { label: string }) => (
  <div className="bg-[#f3f3f3] flex gap-[10px] items-start px-[24px] py-[16px] max-w-[520px] min-w-[320px] w-full overflow-clip box-border">
    <p className="text-[17px] font-normal font-['Epilogue'] leading-[27px] text-[#2d2d2d] grow basis-0">
      {label}
    </p>
  </div>
);

// Contact Section Component
const ContactSection = () => (
  <section className="bg-white flex flex-col gap-[24px] items-start px-[24px] py-[42px] pb-[86px] w-full box-border">
    <h2 className="text-[32px] font-semibold font-['Epilogue'] leading-[42px] text-[#2d2d2d] max-w-[626px]">
      Lets work together
    </h2>
    <div className="flex flex-wrap gap-[142px] items-start w-full">
      <div className="flex flex-col gap-[42px] items-start grow basis-0 min-w-[320px]">
        <p className="text-[17px] font-normal font-['Epilogue'] leading-[27px] text-[#2d2d2d] w-full">
          This is a template Figma file, turned into code using Anima. Learn
          more at AnimaApp.com This is a template Figma file, turned into code
          using Anima. Learn more at AnimaApp.com
        </p>
        <div className="flex gap-[24px] items-start cursor-pointer">
          <a
            href="https://discord.com/invite/eQxkYTNxSp"
            className="w-[36px] h-[36px] hover:opacity-70 relative block"
          >
            <Image src={img15} alt="Discord" fill />
          </a>
          <a
            href="https://www.facebook.com/animaapp/"
            className="w-[36px] h-[36px] hover:opacity-70 relative block"
          >
            <Image src={img16} alt="Facebook" fill />
          </a>
          <a
            href="https://dribbble.com/animaapp"
            className="w-[36px] h-[36px] hover:opacity-70 relative block"
          >
            <Image src={img17} alt="Dribbble" fill />
          </a>
          <a
            href="https://www.instagram.com/animaapp/?hl=en"
            className="w-[36px] h-[36px] hover:opacity-70 relative block"
          >
            <Image src={imgInstagram} alt="Instagram" fill />
          </a>
          <a
            href="https://www.behance.net/Anima_design"
            className="w-[36px] h-[36px] hover:opacity-70 relative block"
          >
            <Image src={imgBehance} alt="Behance" fill />
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-[24px] items-start grow basis-0 max-w-[520px] min-w-[320px]">
        <div className="flex flex-col gap-[12px] items-start w-full">
          <InputField label="Name" />
          <InputField label="Email" />
        </div>
        <Button className="bg-[#2d2d2d] text-white px-[64px] py-[24px] text-[20px] font-semibold font-['Epilogue'] leading-[30px] hover:bg-[#1a1a1a]">
          Contact
        </Button>
      </div>
    </div>
  </section>
);

// Main Page Component
export default function Home() {
  return (
    <main className="bg-white flex flex-col items-center w-full h-full">
      <Navigation />
      <HeaderSection />
      <LogoBar />
      <SkillsSection />
      <GallerySection />
      <TestimonialSection />
      <ContactSection />
    </main>
  );
}
