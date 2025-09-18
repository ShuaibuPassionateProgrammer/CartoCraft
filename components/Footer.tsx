import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Tagline */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              CartoCraft
            </h3>
            <p className="text-muted-foreground max-w-sm">
              Empowering creativity through advanced AI generation tools. Build, create, and innovate with cutting-edge technology.
            </p>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Resources</h4>
            <div className="space-y-2">
              <a
                href="#documentation"
                className="block text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Documentation
              </a>
              <a
                href="#pricing"
                className="block text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Pricing
              </a>
              <a
                href="#support"
                className="block text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Support
              </a>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Legal</h4>
            <div className="space-y-2">
              <a
                href="#terms"
                className="block text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#privacy"
                className="block text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Copyright */}
        <div className="text-center text-muted-foreground">
          <p>&copy; 2025 CartoCraft Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}