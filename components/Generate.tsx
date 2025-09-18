import { Image, Video, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: Image,
    title: "Image",
    description: "Generate stunning images with advanced AI models. Create artwork, photos, and illustrations with unprecedented quality.",
    badge: "Stable",
    badgeVariant: "default" as const
  },
  {
    icon: Video,
    title: "Video",
    description: "Create dynamic video content with AI-powered generation. Transform ideas into moving visuals with cutting-edge technology.",
    badge: "Beta",
    badgeVariant: "secondary" as const
  },
  {
    icon: Zap,
    title: "Realtime",
    description: "Experience instant AI generation with real-time processing. See your ideas come to life as you type and adjust parameters.",
    badge: "New",
    badgeVariant: "destructive" as const
  }
];

export default function Generate() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Generate</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our powerful AI generation tools designed for creators, developers, and innovators.
          </p>
        </div>

        <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="min-w-[300px] md:min-w-[350px] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant={feature.badgeVariant}>{feature.badge}</Badge>
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}