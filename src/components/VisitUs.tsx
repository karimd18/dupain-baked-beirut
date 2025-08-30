import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";

export const VisitUs = () => {
  const hours = [
    { day: "Monday - Friday", hours: "7:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "8:00 AM - 9:00 PM" },
    { day: "Sunday", hours: "8:00 AM - 7:00 PM" },
  ];

  return (
    <section id="visit" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-playfair font-bold text-foreground mb-4">
            Visit Us
          </h2>
          <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
            Located in the heart of Saifi, Beirut's cultural district
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg border border-accent/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.1234567890123!2d35.50123456789012!3d33.89876543210987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDUzJzU1LjYiTiAzNcKwMzAnMDQuNCJF!5e0!3m2!1sen!2slb!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dupain Bakery Location"
              ></iframe>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-playfair text-xl text-foreground">
                  <MapPin className="h-6 w-6 text-accent" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground font-inter font-medium mb-2">
                  Dupain - Born To Bake
                </p>
                <p className="text-muted-foreground font-inter">
                  Saifi District, Beirut<br />
                  Lebanon
                </p>
              </CardContent>
            </Card>

            <Card className="border border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-playfair text-xl text-foreground">
                  <Clock className="h-6 w-6 text-accent" />
                  Opening Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {hours.map((schedule, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="font-inter font-medium text-foreground">
                        {schedule.day}
                      </span>
                      <span className="font-inter text-muted-foreground">
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-playfair text-xl text-foreground">
                  <Phone className="h-6 w-6 text-accent" />
                  Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-foreground font-inter font-medium mb-1">Phone</p>
                  <a
                    href="tel:+9611234567"
                    className="text-accent hover:text-accent/80 font-inter transition-colors"
                  >
                    +961 1 234 567
                  </a>
                </div>
                
                <div className="flex gap-3">
                  <Button
                    onClick={() => window.open("tel:+9611234567", "_self")}
                    className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground font-inter font-semibold"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </Button>
                  
                  <Button
                    onClick={() => window.open("https://wa.me/9611234567", "_blank")}
                    variant="outline"
                    className="flex-1 border-accent text-accent hover:bg-accent/10 font-inter font-semibold"
                  >
                    <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"/>
                    </svg>
                    WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button
                variant="outline"
                onClick={() => window.open("https://instagram.com/dupain.lb", "_blank")}
                className="border-accent text-accent hover:bg-accent/10 font-inter font-semibold"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Follow @dupain.lb
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};