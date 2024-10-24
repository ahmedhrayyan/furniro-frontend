import { useMemo } from "react";
import { Separator } from "@radix-ui/react-separator";
export default function Footer() {
  const year = useMemo(() => {
    return new Date().getFullYear();
  }, []);

  return (
    <footer className="bottom-0 w-full">
      <Separator className=" " orientation="horizontal" />

      <div className="flex justify-center border-t">
        <div className="grid grid-cols-4 justify-around gap-12 m-1/">

          <div className="pt-8">
            <img src="/images/logo.svg" alt="logo" className="" />
            <p className="text-gray-400 mt-8">400 University Drive Suite 200 Coral
              <br /> Gables,
              <br /> FL 33134 USA
            </p>
          </div>

          <div className="pt-8">
            <h4 className="text-gray-400 font-semibold">Links</h4>
            <ul className="mt-8 flex-col space-y-2 font-medium pb-8">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="pt-8">
            <h4 className="text-gray-400 font-semibold">Help</h4>
            <ul className="mt-8 flex-col space-y-2 font-semibold pb-8">
              <li>Payment Options</li>
              <li>Returns</li>
              <li>Privacy Policies</li>
            </ul>
          </div>

          <div className="pt-8">
            <h4 className="text-gray-400 font-semibold">Newsletter</h4>

            <div className="flex w-full max-w-sm items-center pt-8">
              <input type="email" placeholder="Email" className="border-b-2 border-black w-2/3 mr-2" />
              <button type="submit" className="border-b-2 border-black">Subscribe</button>
            </div>
          </div>

        
        </div>
      
      </div>
      <div className="border-t flex-auto">
            <p className="m-auto pt-4 pb-4">{year} furino. All rights reserved</p>
        </div>

    </footer>
  );
}
