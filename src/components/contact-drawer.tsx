"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function ContactDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="bg-[#2d2d2d] text-white px-[64px] py-[24px] text-[20px] font-semibold font-['Epilogue'] leading-[30px] hover:bg-[#1a1a1a]">
          Contact
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerTitle className="sr-only">About This App</DrawerTitle>
        <div className="flex flex-col items-center justify-center px-8 py-12 max-w-2xl mx-auto gap-6">
          <p className="text-[20px] font-normal font-['Epilogue'] leading-[30px] text-[#2d2d2d] text-center">
            This is a Next.js app generated solely by following the instructions
            for usage of the Figma MCP server. The Figma design is from{" "}
            <a
              href="https://www.figma.com/community/file/1095695980466714349"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2d2d2d] font-semibold underline hover:opacity-70"
            >
              Anima
            </a>
            .
          </p>
          <p className="text-[17px] font-normal font-['Epilogue'] leading-[27px] text-[#2d2d2d] text-center">
            Want to try it yourself? Check out the{" "}
            <a
              href="https://developers.figma.com/docs/figma-mcp-server/local-server-installation/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2d2d2d] font-semibold underline hover:opacity-70"
            >
              Figma Learn docs
            </a>{" "}
            for setting up the Figma desktop MCP server — it's easier than you
            might think!
          </p>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button
              variant="outline"
              className="text-[17px] font-normal font-['Epilogue']"
            >
              Close
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
