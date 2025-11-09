
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";

const imgHeaderImage1 = "http://localhost:3845/assets/a2d1b3a41cc9761b3e8b3609af7fffb76a2461f9.png";
const imgClientImage = "http://localhost:3845/assets/2721f8d3745f653a9aeda337a68168d11d0d1ae3.png";
const imgProject1 = "http://localhost:3845/assets/46acf5070c2b1eabe533e70cdfd6db0920cb88be.png";
const imgProject2 = "http://localhost:3845/assets/ae5d91180b98e9e0920120c3b24ffbfe143d83cd.png";
const imgProject3 = "http://localhost:3845/assets/3879de03212eab7e4fafca5165c55a151eca4a48.png";
const imgProject4 = "http://localhost:3845/assets/7f90acac1fbd66440efa4e3870e0cd0b032f803b.png";
const imgProject5 = "http://localhost:3845/assets/b15b0bea6c6f30cc354e8fe19b0d226e83daf314.png";
const imgProject6 = "http://localhost:3845/assets/69fd8f8e8891be0346bd7faea3a5ad6130b18107.png";

const logo1 = "http://localhost:3845/assets/28a2477e1585c922a7202ec64b0a965e63b21f0b.svg";
const logo2 = "http://localhost:3845/assets/9d3655c703fb97fed127ead9ecb44416cb874297.svg";
const logo3 = "http://localhost:3845/assets/9441d3b82fda05c0e066b44f016c35d394a4252f.svg";
const logo4 = "http://localhost:3845/assets/313b1f36abcc8eec9bd5151e966fb372c9345080.svg";
const logo5 = "http://localhost:3845/assets/4b749db2233b8bcce249269c3dc52be3961eb525.svg";

const discordIcon = "http://localhost:3845/assets/f9db8a8952b6da6d563523be8b334b2199bb14bd.svg";
const facebookIcon = "http://localhost:3845/assets/3169c3f6549bdb2c8056576f9d73bb6437cec883.svg";
const dribbbleIcon = "http://localhost:3845/assets/3735c58afe2c5f3380ab638c357ae21f5d3ccb64.svg";
const instagramIcon = "http://localhost:3845/assets/1a24e3bbfa46c508317f65eb9797c29a05b23e3e.svg";
const behanceIcon = "http://localhost:3845/assets/a2370c743085873e3327f01759cec04c5b7b0653.svg";
const starIcon = "http://localhost:3845/assets/2be3682a937c0508181ae6fa4e43bb3b3debd2d7.svg";


const Navigation = () => (
  <header className="bg-white box-border content-center flex flex-wrap gap-[24px] items-center justify-between px-[42px] py-[24px] relative shrink-0 w-full">
    <div className="flex flex-col font-['Epilogue:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2d2d2d] text-[20px] text-nowrap">
      <p className="leading-[30px] whitespace-pre">Logo</p>
    </div>
    <nav className="content-stretch flex font-['Epilogue:Regular',sans-serif] font-normal gap-[24px] items-start justify-end leading-[0] relative shrink-0 text-[#2d2d2d] text-[17px] text-nowrap">
      <Link href="#" className="leading-[27px] text-nowrap whitespace-pre">About</Link>
      <Link href="#" className="leading-[27px] text-nowrap whitespace-pre">Work</Link>
      <Link href="#" className="leading-[27px] text-nowrap whitespace-pre">Contact</Link>
    </nav>
  </header>
);

const HeaderSection = () => (
  <section className="bg-white box-border content-center flex flex-wrap gap-[68px] items-center justify-center px-[24px] py-[42px] relative shrink-0 w-full">
    <div className="basis-0 content-stretch flex flex-col gap-[48px] grow items-start max-w-[620px] min-h-px min-w-[320px] relative shrink-0">
      <div className="content-stretch flex flex-col gap-[24px] items-start leading-[0] relative shrink-0 text-[#2d2d2d] w-full">
        <div className="flex flex-col font-['Epilogue:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[20px] w-full">
          <p className="leading-[30px]">Branding | Image making </p>
        </div>
        <h1 className="flex flex-col font-['Epilogue:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[68px] w-full leading-[1]">
          Visual Designer
        </h1>
        <p className="font-['Epilogue:Regular',sans-serif] font-normal leading-[27px] relative shrink-0 text-[17px] w-full">
          This is a template Figma file, turned into code using Anima. <br />
          Learn more at AnimaApp.com
        </p>
      </div>
      <Button className="bg-[#2d2d2d] text-white px-16 py-6 text-xl">Contact</Button>
    </div>
    <div className="basis-0 grow h-[360px] max-w-[480px] min-h-px min-w-[320px] relative shrink-0">
      <Image src={imgHeaderImage1} alt="Header Image" width={200} height={200} />
    </div>
  </section>
);

const LogoBar = () => (
  <section className="bg-white box-border content-center flex flex-wrap gap-[68px] items-center justify-between px-[68px] py-[42px] relative shrink-0 w-full">
    <Image src={logo1} alt="Logo 1" width={116} height={38} />
    <Image src={logo2} alt="Logo 2" width={86} height={31} />
    <Image src={logo3} alt="Logo 3" width={113} height={17} />
    <Image src={logo4} alt="Logo 4" width={38} height={47} />
    <Image src={logo5} alt="Logo 5" width={65} height={44} />
  </section>
);

const SkillsSection = () => (
  <section className="bg-white box-border content-stretch flex flex-col gap-[42px] items-center overflow-clip px-[24px] py-[42px] relative shrink-0 w-full">
    <div className="content-start flex flex-wrap gap-[24px] items-start relative shrink-0 w-full">
      <Card className="flex-1 min-w-[320px] bg-white p-10">
        <CardContent className="flex flex-col items-center text-center gap-4">
          <h3 className="text-2xl font-semibold">Product Design</h3>
          <p>This is a template Figma file, turned into code using Anima.</p>
        </CardContent>
      </Card>
      <Card className="flex-1 min-w-[320px] bg-white p-10">
        <CardContent className="flex flex-col items-center text-center gap-4">
          <h3 className="text-2xl font-semibold">Visual Design</h3>
          <p>This is a template Figma file, turned into code using Anima.</p>
        </CardContent>
      </Card>
      <Card className="flex-1 min-w-[320px] bg-white p-10">
        <CardContent className="flex flex-col items-center text-center gap-4">
          <h3 className="text-2xl font-semibold">Art Direction</h3>
          <p>This is a template Figma file, turned into code using Anima.</p>
        </CardContent>
      </Card>
    </div>
  </section>
);

const GallerySection = () => (
  <section className="bg-white box-border content-stretch flex flex-col gap-[42px] items-center overflow-clip px-[24px] py-[42px] relative shrink-0 w-full">
    <h2 className="text-3xl font-semibold">Latest work</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card>
        <Image src={imgProject1} alt="Project 1" width={400} height={330} className="w-full" />
        <CardContent className="p-4">
          <h3 className="text-xl font-semibold">Project title</h3>
          <p>UI, Art direction</p>
        </CardContent>
      </Card>
      <Card>
        <Image src={imgProject2} alt="Project 2" width={400} height={330} className="w-full" />
        <CardContent className="p-4">
          <h3 className="text-xl font-semibold">Project title</h3>
          <p>UI, Art direction</p>
        </CardContent>
      </Card>
      <Card>
        <Image src={imgProject3} alt="Project 3" width={400} height={330} className="w-full" />
        <CardContent className="p-4">
          <h3 className="text-xl font-semibold">Project title</h3>
          <p>UI, Art direction</p>
        </CardContent>
      </Card>
      <Card>
        <Image src={imgProject4} alt="Project 4" width={400} height={330} className="w-full" />
        <CardContent className="p-4">
          <h3 className="text-xl font-semibold">Project title</h3>
          <p>UI, Art direction</p>
        </CardContent>
      </Card>
      <Card>
        <Image src={imgProject5} alt="Project 5" width={400} height={330} className="w-full" />
        <CardContent className="p-4">
          <h3 className="text-xl font-semibold">Project title</h3>
          <p>UI, Art direction</p>
        </CardContent>
      </Card>
      <Card>
        <Image src={imgProject6} alt="Project 6" width={400} height={330} className="w-full" />
        <CardContent className="p-4">
          <h3 className="text-xl font-semibold">Project title</h3>
          <p>UI, Art direction</p>
        </CardContent>
      </Card>
    </div>
  </section>
);

const TestimonialSection = () => (
  <section className="bg-white box-border content-stretch flex flex-col gap-[42px] items-center overflow-clip px-[24px] py-[42px] relative shrink-0 w-full">
    <h2 className="text-3xl font-semibold">Testimonial</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card className="bg-[#f3f3f3] p-8">
        <CardContent className="flex flex-col gap-4">
          <div className="flex gap-1">
            <Image src={starIcon} alt="Star" width={20} height={20} />
            <Image src={starIcon} alt="Star" width={20} height={20} />
            <Image src={starIcon} alt="Star" width={20} height={20} />
            <Image src={starIcon} alt="Star" width={20} height={20} />
            <Image src={starIcon} alt="Star" width={20} height={20} />
          </div>
          <p className="text-lg font-semibold">This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src={imgClientImage} alt="Gemma Nolen" />
              <AvatarFallback>GN</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">Gemma Nolen</p>
              <p>Google</p>
            </div>
          </div>
        </CardContent>
      </Card>
      {/* Repeat for other testimonials */}
    </div>
  </section>
);

const ContactSection = () => (
  <section className="bg-white box-border content-stretch flex flex-col gap-[24px] items-start pb-[86px] pt-[42px] px-[24px] relative shrink-0 w-full">
    <h2 className="text-3xl font-semibold">Lets work together</h2>
    <div className="content-start flex flex-wrap gap-[142px] items-start relative shrink-0 w-full">
      <div className="basis-0 content-stretch flex flex-col gap-[42px] grow items-start min-h-px min-w-[320px] relative shrink-0">
        <p className="font-['Epilogue:Regular',sans-serif] font-normal leading-[27px] relative shrink-0 text-[17px] w-full">
          This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com
        </p>
        <div className="flex gap-6">
          <Link href="#"><Image src={discordIcon} alt="Discord" width={36} height={36} /></Link>
          <Link href="#"><Image src={facebookIcon} alt="Facebook" width={36} height={36} /></Link>
          <Link href="#"><Image src={dribbbleIcon} alt="Dribbble" width={36} height={36} /></Link>
          <Link href="#"><Image src={instagramIcon} alt="Instagram" width={36} height={36} /></Link>
          <Link href="#"><Image src={behanceIcon} alt="Behance" width={36} height={36} /></Link>
        </div>
      </div>
      <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start max-w-[520px] min-h-px min-w-[320px] relative shrink-0">
        <Input type="text" placeholder="Name" className="bg-[#f3f3f3] p-4" />
        <Input type="email" placeholder="Email" className="bg-[#f3f3f3] p-4" />
        <Button className="bg-[#2d2d2d] text-white px-16 py-6 text-xl">Contact</Button>
      </div>
    </div>
  </section>
);


export default function Home() {
  return (
    <div className="bg-white text-[#2d2d2d]">
      <Navigation />
      <main>
        <HeaderSection />
        <LogoBar />
        <SkillsSection />
        <GallerySection />
        <TestimonialSection />
        <ContactSection />
      </main>
    </div>
  );
}
