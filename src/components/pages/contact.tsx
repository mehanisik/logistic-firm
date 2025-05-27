import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  IconContract,
  IconMail,
  IconMapPin,
  IconMessageCircle,
  IconSend,
  IconUser,
} from '@tabler/icons-react';
import { Cobe } from '../ui/cobe';
import { SectionLayout } from '../ui/section-layout';

export default function Contact() {
  return (
    <SectionLayout>
      <div className="flex flex-col gap-4 items-center">
        <div className="max-w-xl w-full text-center mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold flex items-center justify-center gap-2 mb-2 text-foreground">
            <IconContract />
            Contact
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-lg mx-auto">
            Get in touch with us for logistics solutions, business inquiries, or
            just to say hello. We&apos;re here to help you connect globally.
          </p>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-start">
          <div className="bg-transparent border shadow-xl rounded-xl flex items-center justify-center h-full min-h-[200px] sm:min-h-[280px] p-2">
            <div className="w-full max-w-[520px] mx-auto">
              <Cobe />
            </div>
          </div>
          <div className="flex flex-col gap-3 h-full">
            <Card className="flex-1 p-4 rounded-xl">
              <div className="mb-4">
                <h3 className="text-base sm:text-lg font-semibold mb-1 flex items-center gap-2 text-foreground">
                  <IconMail className="w-4 h-4 text-primary" /> Email
                </h3>
                <div className="space-y-0.5 text-xs sm:text-sm">
                  help@example.com
                  <br />
                  support@example.com
                </div>
              </div>
              <div className="border-t pt-4 mt-4">
                <h3 className="text-base sm:text-lg font-semibold mb-1 flex items-center gap-2 text-foreground">
                  <IconMapPin className="w-4 h-4 text-primary" /> Offices
                </h3>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <div className="flex-1">
                    <div className="text-muted-foreground font-medium mb-0.5 text-xs sm:text-sm">
                      New York
                    </div>
                    <div className="text-xs">
                      123 6th St. Melbourne, FL 32904, USA
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-muted-foreground font-medium mb-0.5 text-xs sm:text-sm">
                      London
                    </div>
                    <div className="text-xs">
                      123 3rd St. London, TL 32904, UK
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            <Card className="flex-1 p-4 rounded-xl">
              <h3 className="text-base sm:text-lg font-semibold mb-3 flex items-center gap-2 text-foreground">
                <IconMessageCircle className="w-4 h-4 text-primary" /> Send us a
                message
              </h3>
              <form className="space-y-3">
                <div className="relative">
                  <IconUser className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="w-full rounded-md border border-input bg-background px-9 py-1.5 text-xs sm:text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
                    required
                  />
                </div>
                <div className="relative">
                  <IconMail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <input
                    type="email"
                    name="email"
                    placeholder="you@email.com"
                    className="w-full rounded-md border border-input bg-background px-9 py-1.5 text-xs sm:text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
                    required
                  />
                </div>
                <div className="relative">
                  <IconMessageCircle className="absolute left-3 top-3 text-muted-foreground w-4 h-4" />
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="How can we help you?"
                    className="w-full rounded-md border border-input bg-background px-9 py-1.5 text-xs sm:text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 resize-none"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full mt-1 flex items-center gap-2 text-xs sm:text-sm h-9"
                >
                  <IconSend className="w-4 h-4" /> Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
