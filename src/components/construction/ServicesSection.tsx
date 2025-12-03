import React from "react";
import * as Accordion from "@radix-ui/react-accordion";

interface Service {
  title: string;
  description: string;
  image: string;
  icon: string;
}

interface ServicesHeader {
  badge: string;
  heading: string;
  paragraph: string;
}

interface Props {
  header: ServicesHeader;
  services: Service[];
}

const ServicesSection: React.FC<Props> = ({ header, services }) => {
  const [active, setActive] = React.useState<string>("0");
  const [lastActive, setLastActive] = React.useState<string>("0");
  const { badge, heading, paragraph } = header;

  const handleChange = (val: string) => {
    if (val !== "") {
      setActive(val);
      setLastActive(val); // remember last open panel
    } else {
      setActive(""); // allow collapse
    }
  };

  const activeIndex =
    lastActive && !isNaN(parseInt(lastActive)) ? parseInt(lastActive) : 0;

  return (
    <section className="bg-white py-16" id="services">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="badgeBlack">
            {badge}
          </h2>
          <h3>{heading}</h3>
          <p className="paragraph">{paragraph}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <div className="rounded-xl overflow-hidden relative aspect-[1/1]">
            {services.map((service, i) => (
                <img
                  key={i}
                  src={service.image}
                  alt={`Example of our ${service.title.toLowerCase()}`}
                  loading={i === activeIndex ? "eager" : "lazy"}
                  decoding="async"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    i === activeIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
            ))}
          </div>

          {/* Accordion */}
          <Accordion.Root
            type="single"
            collapsible
            value={active}
            onValueChange={handleChange}
            className="w-full border border-gray-200 rounded-lg divide-y divide-gray-200"
          >
            {services.map((service, i) => (
              <Accordion.Item key={i} value={i.toString()}>
                <Accordion.Header>
                  <Accordion.Trigger className="flex justify-between items-center w-full text-left px-4 py-3 hover:bg-gray-50 focus:outline-none">
                    <div className="flex items-center gap-3">
                      <img src={service.icon} alt="" className="w-6 h-6" />
                      <span className="text-xl">
                        {service.title}
                      </span>
                    </div>
                    <span className="text-xl">
                      {active === i.toString() ? "−" : "+"}
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Content
                    className="px-4 pb-4 text-gray-600 overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp"
                >
                    {service.description}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
