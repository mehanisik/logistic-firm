import { BentoCard } from '@/components/ui/bento-card';
import { SectionLayout } from '@/components/ui/section-layout';
import {
  IconBuildingWarehouse,
  IconClock,
  IconMap,
  IconShip,
  IconTruck,
} from '@tabler/icons-react';
import Image from 'next/image';

const features = [
  {
    Icon: <IconTruck className="h-8 w-8 text-teal-600" />,
    name: 'Freight Transportation',
    description:
      'Comprehensive freight solutions across road, rail, air, and sea. Our fleet of 500+ vehicles ensures timely delivery with 99.8% on-time performance.',
    href: '/services/freight-shipping',
    cta: 'Explore Freight',
    badge: 'Most Popular',
    background: (
      <Image
        src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        width={1000}
        height={1000}
        alt="Modern freight truck on highway"
        className="absolute inset-0 w-full h-full opacity-70 rounded-xl object-cover"
      />
    ),
    className: 'lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3',
  },
  {
    Icon: <IconBuildingWarehouse className="h-8 w-8 text-blue-600" />,
    name: 'Smart Warehousing',
    description:
      '2M+ sq ft of automated warehouse space with AI-powered inventory management, climate control, and 24/7 security monitoring.',
    href: '/services/warehousing',
    cta: 'Tour Facilities',
    badge: 'AI-Powered',
    background: (
      <Image
        src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        width={1000}
        height={1000}
        alt="Modern automated warehouse"
        className="absolute inset-0 w-full h-full opacity-70 rounded-xl object-cover"
      />
    ),
    className: 'lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3',
  },
  {
    Icon: <IconMap className="h-8 w-8 text-green-600" />,
    name: 'Real-Time Tracking',
    description:
      'Advanced GPS and IoT tracking with live updates, predictive analytics, and automated notifications for complete shipment visibility.',
    href: '/services/tracking',
    cta: 'Track Shipment',
    badge: 'Live Updates',
    background: (
      <Image
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        width={1000}
        height={1000}
        alt="Digital tracking dashboard"
        className="absolute inset-0 w-full h-full opacity-70 rounded-xl object-cover"
      />
    ),
    className: 'lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4',
  },
  {
    Icon: <IconShip className="h-8 w-8 text-purple-600" />,
    name: 'Customs & Trade',
    description:
      'Expert customs brokerage, trade compliance, and documentation services. Licensed customs brokers handle all regulatory requirements.',
    href: '/services/customs-clearance',
    cta: 'Get Clearance',
    badge: 'Expert Service',
    background: (
      <Image
        src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        width={1000}
        height={1000}
        alt="Container ship at port"
        className="absolute inset-0 w-full h-full opacity-70 rounded-xl object-cover"
      />
    ),
    className: 'lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2',
  },
  {
    Icon: <IconClock className="h-8 w-8 text-orange-600" />,
    name: 'Express Delivery',
    description:
      'Same-day and next-day delivery services with flexible scheduling, proof of delivery, and customer notifications for urgent shipments.',
    href: '/services/express-delivery',
    cta: 'Ship Express',
    badge: 'Same Day',
    background: (
      <Image
        src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        width={1000}
        height={1000}
        alt="Express delivery van"
        className="absolute inset-0 w-full h-full opacity-70 rounded-xl object-cover"
      />
    ),
    className: 'lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4',
  },
];

const stats = [
  { label: 'Countries Served', value: '150+' },
  { label: 'Daily Shipments', value: '25K+' },
  { label: 'On-Time Delivery', value: '99.8%' },
  { label: 'Customer Satisfaction', value: '4.9/5' },
];

export default function ServicesSection() {
  return (
    <SectionLayout>
      <div className="relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <IconTruck className="h-4 w-4" />
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Logistics Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            From freight transportation to last-mile delivery, we provide
            end-to-end logistics services that keep your business moving forward
            with reliability and efficiency.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-teal-700 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid w-full auto-rows-[18rem] sm:auto-rows-[22rem] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:grid-rows-3 h-auto md:h-[60vh]">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </div>
      </div>
    </SectionLayout>
  );
}
