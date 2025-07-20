const Footer = () => {
  const footerSections = [
    {
      title: "nit_connect Pro",
      content: "Leading provider of enterprise network solutions, connecting businesses worldwide with reliable, high-performance infrastructure.",
      isDescription: true
    },
    {
      title: "Solutions",
      links: [
        "Internet Services",
        "Cloud Connectivity", 
        "Network Security",
        "Managed Services",
        "VoIP Solutions"
      ]
    },
    {
      title: "Support", 
      links: [
        "Help Center",
        "Technical Support",
        "Network Status", 
        "Documentation",
        "Training"
      ]
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Careers",
        "Partners",
        "News & Media",
        "Contact"
      ]
    }
  ];

  return (
    <footer className="border-t border-white/10 py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-800/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <div key={section.title} className="slide-in-view" style={{ animationDelay: `${0.1 * index}s` }}>
              <h3 className="gradient-text text-lg font-semibold mb-4">
                {section.title}
              </h3>
              
              {section.isDescription ? (
                <p className="text-muted-foreground leading-relaxed">
                  {section.content}
                </p>
              ) : (
                <ul className="space-y-3">
                  {section.links?.map((link) => (
                    <li key={link}>
                      <a 
                        href="#" 
                        className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 inline-block relative group"
                      >
                        <span className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-3" />
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 nit_connect Pro. All rights reserved. | Built with enterprise-grade reliability.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;