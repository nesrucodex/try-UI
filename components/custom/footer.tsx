import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  AlarmClock,
} from "lucide-react";

function Footer() {
  return (
    <footer className="mt-10 py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="mb-8 rounded-full p-8">
            <AlarmClock className="h-20 w-20" />
          </div>
          <nav className="mb-8 flex flex-wrap justify-center gap-6">
            <a href="#" className="transition hover:text-orange-500">
              Home
            </a>
            <a href="#" className="transition hover:text-orange-500">
              About
            </a>
            <a href="#" className="transition hover:text-orange-500">
              Services
            </a>
            <a href="#" className="transition hover:text-orange-500">
              Products
            </a>
            <a href="#" className="transition hover:text-orange-500">
              Contact
            </a>
          </nav>
          <div className="mb-8 flex space-x-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-black"
            >
              <Facebook className="h-4 w-4" />
              <span className="sr-only">Facebook</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-black"
            >
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-black"
            >
              <Instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-black"
            >
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </div>
          <div className="mb-8 w-full max-w-md">
            <form className="flex space-x-2">
              <div className="flex-grow">
                <Label htmlFor="email" className="sr-only">
                  Email
                </Label>
                <Input
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                  className="rounded-full"
                />
              </div>
              <Button
                type="submit"
                className="rounded-full bg-orange-500 text-white"
              >
                Subscribe
              </Button>
            </form>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 necodex. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
