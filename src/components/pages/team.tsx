import Image from 'next/image';
import { SectionLayout } from '../ui/section-layout';

const TEAM = [
  {
    name: 'Zaid Schwartz',
    role: 'Founder & CEO',
    description:
      'Former co-founder of Opendoor. Early staff at Spotify and Clearbit.',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
  },
  {
    name: 'Lily-Rose Chedjou',
    role: 'Engineering Manager',
    description: 'Lead engineering teams at Netflix, Pitch, and Protocol Labs.',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
  },
  {
    name: 'Amélie Laurent',
    role: 'Product Designer',
    description:
      'Founding design team at Figma. Former Pleo, Stripe, and Tile.',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
  },
];

export default function Team() {
  return (
    <SectionLayout>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 md:mb-10 gap-4 md:gap-6">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-foreground">
            Meet the talented team
            <br />
            who make all this happen
          </h2>
        </div>
        <div className="max-w-md text-muted-foreground text-sm sm:text-base md:text-right">
          Our philosophy is simple: hire great people and give them the
          resources and support to do their best work.
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {TEAM.map((member) => (
          <div key={member.name} className="max-w-full flex flex-col gap-2">
            <div className="max-w-full">
              <div className="group rounded-xl">
                <div className="group relative h-56 sm:h-72 md:min-h-[25rem] max-w-full overflow-hidden rounded-xl md:aspect-[5/4] lg:aspect-[16/9] bg-muted">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    width={1000}
                    height={1000}
                    className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-base sm:text-lg font-semibold text-foreground">
                {member.name}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {member.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}
