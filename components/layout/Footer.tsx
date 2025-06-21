import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="py-16">
      <div className="container max-w-6xl mx-auto px-4 grid gap-10 md:grid-cols-4">
        {/* Logo + Mission */}
        <div className="space-y-4">
          <Link href="/" className="text-2xl font-bold tracking-tight">
           Ravamo
          </Link>
          <p className="text-sm text-muted-foreground">
            We build AI-powered strategies and products that launch in days, not months.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-base font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/services/ai-strategy" className="hover:underline">AI Strategy</Link></li>
            <li><Link href="/services/mvp" className="hover:underline">48-Hour MVPs</Link></li>
            <li><Link href="/services/design" className="hover:underline">Product Design</Link></li>
            <li><Link href="/services/dev" className="hover:underline">Web Development</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-base font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/work" className="hover:underline">Work</Link></li>
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            <li><Link href="/terms" className="hover:underline">Terms</Link></li>
          </ul>
        </div>

        {/* CTA */}
        <div className="space-y-4">
          <h4 className="text-base font-semibold">Let’s Build Together</h4>
          <p className="text-sm text-muted-foreground">
            Start with a 15-min discovery call. No strings attached.
          </p>
          <Button asChild className="bg-white text-black hover:bg-gray-100">
            <Link href="/book">Book a Call</Link>
          </Button>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} AgencyWebsite. All rights reserved.
      </div>
    </footer>
  );
}
