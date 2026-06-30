/* GlobalLinker Growth Partner Success Center — structured content.
   All copy sourced from the official Growth Partner Training Module.
   Exposed as window.GLContent (read by the Design Component logic class). */
(function () {
  // ---- block helpers (compact authoring) ----
  const p = (text) => ({ t: "p", text });
  const lead = (text) => ({ t: "lead", text });
  const ul = (...items) => ({ t: "ul", items });
  const ok = (...items) => ({ t: "ok", items });
  const no = (...items) => ({ t: "no", items });
  const flow = (...items) => ({ t: "flow", items });
  const steps = (...items) => ({ t: "steps", items });
  const callout = (tone, title, text) => ({ t: "callout", tone, title, text });
  const table = (cols, rows) => ({ t: "table", cols, rows });
  const video = (url, title, desc) => ({ t: "video", url, title, desc });
  const qa = (...items) => ({ t: "qa", items });
  const swap = (...items) => ({ t: "swap", items }); // {plain, say}

  const PRICE = "₹24,999 + GST";

  const modules = [
    {
      id: "m1", n: 1, icon: "Handshake", accent: "blue", read: "6 min",
      title: "Welcome to the Growth Partner Program",
      tagline: "Help businesses get discovered. Earn every time they grow.",
      sections: [
        { id: "m1-intro", title: "Your role in one line", blocks: [
          lead("As a GlobalLinker Growth Partner, your role is simple."),
          p("You introduce businesses to our Done-for-Me Business Visibility Setup, help them understand why digital discoverability matters, and guide them through the purchase."),
          p("Once the payment is complete, the GlobalLinker team takes over everything else."),
          callout("blue", "You don't have to", "You do not need to build websites, write content, provide technical support, or manage projects. Your role is to identify opportunities, educate businesses, and successfully complete the sale."),
        ]},
        { id: "m1-learn", title: "What you will learn", blocks: [
          ul("What GlobalLinker is", "What the Growth Partner Program is", "Your role as a Growth Partner", "What GlobalLinker does after every sale", "How commissions work", "Where to find the resources you need to close more sales"),
        ]},
        { id: "m1-what", title: "What is GlobalLinker?", blocks: [
          p("GlobalLinker is an AI-powered business growth platform that helps Indian businesses become easier to discover, easier to trust, and easier to do business with."),
          p("We don't just build websites. We help businesses build a complete digital presence that enables buyers to:"),
          ok("Find the business", "Understand its products", "Trust the company", "Send enquiries directly"),
          p("Businesses become discoverable across:"),
          ul("Google Search", "AI Search (ChatGPT, Gemini and other AI assistants)", "GlobalLinker Marketplace", "Indian Business Portal (where eligible)", "WhatsApp", "Their own professional website"),
          callout("orange", "Remember", "Businesses don't need another website. They need to be discovered."),
        ]},
        { id: "m1-program", title: "What is the Growth Partner Program?", blocks: [
          p("The Growth Partner Program allows individuals to earn commissions by introducing businesses to GlobalLinker's Done-for-Me Business Visibility Setup."),
          p("You do not need experience in:"),
          no("Website Development", "SEO", "AI", "Digital Marketing", "Coding"),
          p("Your role is simply to identify businesses that need better online discoverability, educate them, and help them purchase the Done-for-Me Setup. Everything after the sale is handled by GlobalLinker."),
        ]},
        { id: "m1-role", title: "Your role as a Growth Partner", blocks: [
          steps(
            { n: 1, title: "Find businesses", text: "Identify manufacturers, exporters, wholesalers and businesses that can benefit from improving their digital discoverability." },
            { n: 2, title: "Start conversations", text: "Help business owners understand why buyers may not be finding them today." },
            { n: 3, title: "Demonstrate the opportunity", text: "Use the AI Discoverability Demonstration to show how buyers search today and why discoverability matters." },
            { n: 4, title: "Share your personal landing page", text: "Every partner gets a personalised Done-for-Me Landing Page and Checkout Link. Always use your own links." },
            { n: 5, title: "Help complete payment", text: "Guide the customer through checkout and answer questions. Once payment is complete, your sales responsibility is done." },
          ),
        ]},
        { id: "m1-after", title: "What happens after the sale?", blocks: [
          p("Once the customer completes payment through your unique checkout link, the GlobalLinker team takes over the complete project."),
          steps(
            { n: 1, title: "Payment Verification", text: "The GlobalLinker team verifies the successful payment." },
            { n: 2, title: "Welcome Email", text: "The customer receives a welcome email introducing the onboarding process." },
            { n: 3, title: "Welcome Call", text: "Our onboarding team contacts the customer to explain the next steps." },
            { n: 4, title: "Business Information Collection", text: "We collect company info, product info, images, logo, branding, certifications and domain info (if applicable)." },
            { n: 5, title: "Research & Content Creation", text: "Our experts prepare AI-optimised website content, product descriptions, SEO content and the digital catalogue structure." },
            { n: 6, title: "Website & Catalogue Development", text: "Our design and technical team builds the complete Done-for-Me Setup." },
            { n: 7, title: "Customer Review", text: "The customer reviews the website and shares any feedback." },
            { n: 8, title: "Go Live", text: "The completed website and digital catalogue are published." },
            { n: 9, title: "Support", text: "The customer continues to receive support directly from the GlobalLinker team." },
          ),
          callout("navy", "Important", "After payment, all implementation, support, design changes and communication are handled by GlobalLinker. Growth Partners are not expected to manage customer projects after the sale."),
        ]},
        { id: "m1-earn", title: "How you earn", blocks: [
          p("Every Growth Partner receives a unique Landing Page and Checkout Link. Whenever a customer purchases through your personal checkout link:"),
          flow({ title: "Payment is received" }, { title: "Payment is verified" }, { title: "Sale is recorded against your account" }, { title: "Commission becomes eligible" }),
          callout("blue", "Commission processing", "Commissions are processed on the 7th of every month for all verified sales received during the previous calendar month."),
          table(["Customer payment date", "Commission processing date"], [
            ["1 June 2026", "7 July 2026"], ["12 June 2026", "7 July 2026"], ["28 June 2026", "7 July 2026"], ["30 June 2026", "7 July 2026"], ["5 July 2026", "7 August 2026"],
          ]),
          p("Important notes:"),
          ul("Payments must be successfully received.", "Payments must be verified by GlobalLinker.", "The purchase must be made through your unique checkout link.", "Commission processing dates are fixed and cannot be expedited."),
        ]},
        { id: "m1-take", title: "Key takeaways", blocks: [
          ok("You sell the opportunity.", "GlobalLinker delivers the service.", "Always use your unique landing page and checkout link.", "Never promise custom features outside the Done-for-Me package.", "After payment, the GlobalLinker team takes complete ownership of the customer journey."),
        ]},
      ],
    },
    {
      id: "m2", n: 2, icon: "EyeOff", accent: "orange", read: "8 min",
      title: "The AI Visibility Problem",
      tagline: "Why businesses are becoming invisible.",
      sections: [
        { id: "m2-intro", title: "Most businesses aren't found", blocks: [
          lead("Most businesses don't have a website problem. They have a discoverability problem."),
          p("For years, businesses believed that simply having a website was enough. Today, that is no longer true."),
          p("Buyers no longer rely only on Google Search. They now use ChatGPT, Gemini, Google AI, Perplexity and other AI-powered search tools to discover suppliers, compare businesses and shortlist vendors."),
          callout("orange", "The hard truth", "If AI cannot understand your business, it cannot recommend your business. That means many excellent businesses are becoming invisible to today's buyers."),
        ]},
        { id: "m2-video", title: "Start here — watch this", blocks: [
          video("https://www.youtube.com/watch?v=aYg5tfQ29xY", "Why Global Buyers May Not Find Your Business Today", "A short 60-second video explaining why thousands of businesses are becoming invisible online and how buyer behaviour has changed forever."),
        ]},
        { id: "m2-behaviour", title: "Buyer behaviour has changed", blocks: [
          p("Yesterday, businesses relied on:"),
          ul("Visiting cards", "Word of mouth", "Trade shows", "Newspaper advertising", "Brochure websites"),
          p("Today, buyers simply ask AI. For example:"),
          ul("\"Recommend Organic Spice Manufacturers in India.\"", "\"Who are the best Textile Exporters in India?\"", "\"Find manufacturers of Stainless Steel Valves.\"", "\"Recommend suppliers for Biodegradable Packaging.\""),
          p("Instead of searching through hundreds of websites, AI recommends businesses it understands and trusts."),
        ]},
        { id: "m2-journey", title: "The new buyer journey", blocks: [
          callout("blue", "Traditional journey", "Buyer → Google Search → Website → Phone Call → Purchase"),
          flow({ title: "Buyer" }, { title: "ChatGPT / Gemini / Google AI / Perplexity" }, { title: "AI recommends suppliers" }, { title: "Buyer visits website" }, { title: "Buyer sends enquiry" }, { title: "Business opportunity" }),
          callout("orange", "The reality", "If AI never recommends your business, the buyer may never discover you."),
        ]},
        { id: "m2-misconception", title: "\"I already have a website\"", blocks: [
          p("This is one of the most common responses you'll hear. Having a website does not automatically mean buyers can find it."),
          p("Many business websites:"),
          ul("Have only a few pages", "Have incomplete product information", "Are difficult for AI to understand", "Lack structured data", "Have poor search visibility", "Rarely get updated"),
          p("As a result, buyers never discover them."),
        ]},
        { id: "m2-understand", title: "Why AI can't understand many websites", blocks: [
          p("AI looks for complete, structured and trustworthy information. Unfortunately, many websites only contain a Home Page, About Us, Contact Us and one PDF catalogue. That's not enough."),
          p("Modern buyers — and AI systems — want answers such as:"),
          ul("What products do you manufacture?", "What industries do you serve?", "What applications do your products have?", "What certifications do you hold?", "What is your production capacity?", "Do you export?", "Can you manufacture under private label?"),
          p("If this information is missing, AI has very little confidence in recommending that business."),
        ]},
        { id: "m2-reads", title: "AI doesn't read websites like humans", blocks: [
          p("People look at: design, images, colours, layout, branding."),
          p("AI looks for: structured content, clear page hierarchy, product information, metadata, internal linking, business information, trust signals, and Schema.org structured data."),
          callout("blue", "The principle", "The easier it is for AI to understand a website, the more likely it is to recommend that business."),
        ]},
        { id: "m2-pages", title: "Why product pages matter", blocks: [
          p("Every product page is another opportunity to be discovered. A traditional brochure website might only have Home, About and Contact."),
          p("A professionally built business website may include 50–100 product pages, industry pages, category pages, applications, certifications and company information. Each page creates another opportunity for buyers to find the business."),
        ]},
        { id: "m2-pdf", title: "Why PDF catalogues aren't enough", blocks: [
          p("Many businesses simply upload a PDF catalogue and assume buyers will find it. Unfortunately:"),
          no("PDFs are difficult for AI to understand.", "Product specifications are often embedded inside images.", "Buyers cannot easily search products.", "Search engines cannot organise the information effectively."),
          p("Instead, AI prefers structured product pages containing product name, description, technical specifications, applications, images, categories and product metadata."),
        ]},
        { id: "m2-discover", title: "What makes a business easy to discover?", blocks: [
          p("Modern search engines and AI assistants don't just look for a website. They look for a website they can understand. Businesses that are easier to discover typically have:"),
          ok("A professionally structured website", "Dedicated product pages", "AI-friendly, buyer-focused content", "Complete business information", "Certifications and trust signals", "Clear contact information", "Industry-specific keywords", "Fast, mobile-friendly pages", "Schema.org structured data"),
        ]},
        { id: "m2-schema", title: "Why Schema matters", blocks: [
          p("Think of Schema as a language that helps search engines and AI understand exactly what your website contains. Instead of guessing, Schema tells AI:"),
          ul("Who your company is", "What products you manufacture", "What services you offer", "Where you're located", "How buyers can contact you", "Your certifications", "Product specifications", "Business categories", "FAQs and reviews (where applicable)"),
          callout("blue", "In short", "Schema helps AI understand your business with much greater accuracy."),
        ]},
        { id: "m2-avsb", title: "Why this matters — A vs B", blocks: [
          callout("navy", "Business A", "Three-page brochure website · PDF catalogue · No structured data · Limited product information"),
          callout("blue", "Business B", "Professional website · Individual product pages · Detailed product info · AI-friendly content · Structured Schema · Marketplace presence · Trust signals"),
          p("Which business is more likely to be recommended by AI? The answer is obvious. AI recommends businesses it can understand."),
        ]},
        { id: "m2-ready", title: "How GlobalLinker makes businesses AI-ready", blocks: [
          p("When we build a Done-for-Me Business Visibility Setup, we don't simply create a beautiful website. We build a website that is easier for search engines and AI systems to understand."),
          ok("Professional website architecture", "AI-friendly content", "SEO optimisation", "Individual product pages", "Structured product metadata", "Schema.org structured data", "Internal page linking", "Mobile optimisation", "Buyer-focused navigation", "Marketplace visibility"),
        ]},
        { id: "m2-ask", title: "Before you meet any business", blocks: [
          p("Ask yourself: if someone searched for this business today…"),
          ul("Would Google find them?", "Would ChatGPT recommend them?", "Would AI understand what they manufacture?", "Would buyers trust the business?", "Would buyers know how to contact them?"),
          callout("orange", "The opportunity", "If the answer to any of these is No or I'm not sure, there is an opportunity to help."),
        ]},
        { id: "m2-take", title: "Key takeaways", blocks: [
          ok("Buyer behaviour has changed.", "AI is becoming the first place buyers search.", "A website alone is no longer enough.", "Businesses need structured, AI-friendly information.", "Schema helps AI understand a business more accurately.", "Better discoverability creates more business opportunities."),
        ]},
      ],
    },
    {
      id: "m3", n: 3, icon: "Package", accent: "blue", read: "8 min",
      title: "The Done-for-Me Business Visibility Setup",
      tagline: "What we build, and why businesses choose it.",
      sections: [
        { id: "m3-intro", title: "Build a business buyers can find", blocks: [
          lead("Most businesses don't struggle because they make poor products. They struggle because buyers never discover them."),
          p("Instead of asking businesses to learn website design, SEO, AI optimisation and digital marketing, GlobalLinker does everything for them. The business simply provides the information. Our team takes care of the rest."),
        ]},
        { id: "m3-what", title: "What is the Done-for-Me Setup?", blocks: [
          p("A fully managed service where GlobalLinker builds a complete digital presence for a business. This includes everything required to help buyers:"),
          ok("Discover the business", "Understand the products", "Trust the company", "Contact the business directly"),
          callout("blue", "Ownership", "Unlike marketplaces, every enquiry generated through the business website belongs only to that business. The business owns its website, domain and customer enquiries."),
        ]},
        { id: "m3-diff", title: "The biggest difference", blocks: [
          callout("navy", "Traditional website", "\"We build you a website.\" → Project complete."),
          p("GlobalLinker Done-for-Me Setup builds your complete digital business infrastructure:"),
          flow({ title: "Professional Website" }, { title: "Digital Product Catalogue" }, { title: "AI Optimisation" }, { title: "SEO Optimisation" }, { title: "Schema Markup" }, { title: "Marketplace Visibility" }, { title: "WhatsApp Catalogue" }, { title: "Buyer Enquiries" }),
          lead("We don't just build websites. We build businesses that are easier to discover."),
        ]},
        { id: "m3-receive", title: "What the business receives", blocks: [
          callout("blue", "Professional Business Website", "Modern, mobile-friendly, B2B-focused. Professional design, mobile responsive, secure SSL, custom domain, fast loading, buyer-focused navigation."),
          callout("blue", "AI-Optimised Product Pages", "Every important product gets its own page: description, applications, features, specifications, images, industry keywords and buyer-focused content."),
          callout("blue", "Digital Product Catalogue", "Up to 100 products, categories, images, descriptions, metadata and specifications — easier to browse and discover."),
          callout("blue", "SEO Optimisation", "SEO-friendly URLs, meta titles, meta descriptions, internal linking and search-friendly content."),
          callout("blue", "AI Optimisation", "AI-friendly content, structured information, product metadata, semantic page structure and AI-readable content."),
          callout("blue", "Schema.org Structured Data", "Markup that helps search engines and AI understand business info, products, organisation details, contact info, website structure and product categories."),
          callout("orange", "Premium Membership (1 Year)", "Priority visibility, premium seller profile, additional marketplace features and a premium business presence."),
          callout("orange", "Marketplace + IBP + WhatsApp", "Visibility on the GlobalLinker Marketplace, eligible listing on the Indian Business Portal (powered by FIEO), and a WhatsApp catalogue to share products instantly."),
        ]},
        { id: "m3-split", title: "Who does what", blocks: [
          p("What the business does:"),
          ok("Makes the purchase", "Shares business information", "Shares product information", "Reviews the completed website"),
          p("What GlobalLinker does:"),
          ok("Researches the business", "Writes AI-friendly content", "Builds the website", "Creates product pages", "Uploads products", "Optimises SEO", "Adds Schema", "Creates marketplace listings", "Sets up WhatsApp catalogue", "Publishes the website"),
          p("The business never needs to hire:"),
          no("Website Developers", "Designers", "SEO Agencies", "Content Writers", "AI Experts"),
        ]},
        { id: "m3-own", title: "A website they own", blocks: [
          p("One of the biggest advantages is ownership. The website belongs to the business. The domain belongs to the business. The enquiries belong to the business."),
          p("Unlike some marketplaces, enquiries generated through the website are not shared with competing businesses. This allows the business to build its own long-term digital asset."),
        ]},
        { id: "m3-vs", title: "GlobalLinker vs a traditional agency", blocks: [
          table(["Traditional Website Agency", "GlobalLinker Done-for-Me"], [
            ["Builds a website", "Builds business discoverability"],
            ["Focus on design", "Focus on buyer visibility"],
            ["Client writes content", "GlobalLinker creates AI-friendly content"],
            ["SEO often optional", "SEO included"],
            ["AI optimisation rarely included", "AI optimisation included"],
            ["Schema often missing", "Schema included"],
            ["Marketplace visibility not included", "Marketplace visibility included"],
            ["Usually no product catalogue", "Professional digital catalogue included"],
            ["Limited post-launch support", "Managed onboarding and support"],
          ]),
        ]},
        { id: "m3-process", title: "How the process works", blocks: [
          steps(
            { n: 1, title: "Payment", text: "Business completes payment." },
            { n: 2, title: "Verification", text: "GlobalLinker verifies payment." },
            { n: 3, title: "Welcome Email", text: "" },
            { n: 4, title: "Welcome Call", text: "" },
            { n: 5, title: "Information Collection", text: "Business information is gathered." },
            { n: 6, title: "Research & Content", text: "Content creation begins." },
            { n: 7, title: "Development", text: "Website & catalogue development." },
            { n: 8, title: "Client Review", text: "" },
            { n: 9, title: "Revisions", text: "If required." },
            { n: 10, title: "Go Live", text: "Website is published." },
          ),
        ]},
        { id: "m3-timeline", title: "Timeline", blocks: [
          callout("orange", "≈ 15 Working Days", "Typical delivery time. The project begins after all required business information, images and details have been received. Delays in sharing information may extend the timeline."),
        ]},
        { id: "m3-common", title: "Common questions from businesses", blocks: [
          qa(
            { q: "Will I own my website?", a: "Yes. The website belongs to your business." },
            { q: "Will enquiries be shared with other businesses?", a: "No. Enquiries received through your website go directly to your business." },
            { q: "Can I use my own domain?", a: "Yes. If you already own a domain, we can connect it. If you don't have one, our team will guide you." },
            { q: "Do I need technical knowledge?", a: "No. Everything is handled by GlobalLinker." },
            { q: "Who writes the content?", a: "Our team researches your business and prepares AI-friendly and SEO-friendly content for your review." },
            { q: "Can I request changes before go-live?", a: "Yes. You'll review the website and provide feedback before it is published." },
          ),
        ]},
        { id: "m3-msg", title: "Key messages — sell outcomes", blocks: [
          p("When explaining the Done-for-Me Setup, don't sell features. Sell outcomes."),
          swap(
            { plain: "We build websites.", say: "We help buyers discover your business." },
            { plain: "We optimise for SEO.", say: "We make it easier for buyers and AI to understand your business." },
            { plain: "We create product pages.", say: "We give every important product an opportunity to be discovered online." },
          ),
          callout("blue", "Remember", "You're not selling a website. You're helping businesses become visible where modern buyers are searching."),
        ]},
        { id: "m3-take", title: "Key takeaways", blocks: [
          ok("Businesses own their website and enquiries.", "GlobalLinker builds everything.", "AI, SEO and Schema are included.", "Product pages increase discoverability.", "The project starts after business information is received.", "Typical delivery time is approximately 15 working days.", "The partner's responsibility ends once the sale is complete and payment is received."),
        ]},
      ],
    },
    {
      id: "m4", n: 4, icon: "UserCheck", accent: "blue", read: "7 min",
      title: "Your Role as a Growth Partner",
      tagline: "Where your job begins — and where it ends.",
      sections: [
        { id: "m4-intro", title: "You're not selling websites", blocks: [
          lead("You are helping businesses become discoverable."),
          p("One of the biggest misconceptions is that you're expected to manage website projects. You're not."),
          p("Your role is to help businesses understand why they need to improve discoverability, introduce the Done-for-Me Setup, and help them complete the purchase. Once payment is received and verified, the GlobalLinker team takes over."),
          callout("blue", "Mindset", "Think of yourself as a Business Visibility Advisor, not a website salesperson."),
        ]},
        { id: "m4-mission", title: "Your mission", blocks: [
          p("Help more Indian businesses become easier to discover, easier to trust and easier to do business with. Every business you onboard gets a professionally built digital presence that helps them compete in today's AI-powered buying environment."),
        ]},
        { id: "m4-resp", title: "Your responsibilities", blocks: [
          ok("Finding potential businesses", "Starting conversations", "Understanding their current digital presence", "Demonstrating the AI Visibility Problem", "Explaining the Done-for-Me Solution", "Sharing your personalised Landing Page", "Helping the customer complete payment"),
          p("Once payment is complete, your work for that customer is finished."),
        ]},
        { id: "m4-not", title: "What you do NOT do", blocks: [
          no("Build websites", "Design pages", "Upload products", "Write content", "Handle technical support", "Make website changes", "Answer implementation questions", "Collect product information", "Manage the project", "Train customers on the platform"),
          p("GlobalLinker handles all of these activities."),
        ]},
        { id: "m4-journey", title: "The customer journey", blocks: [
          steps(
            { n: 1, title: "You identify a business", text: "" },
            { n: 2, title: "You introduce the AI Visibility Problem", text: "" },
            { n: 3, title: "You demonstrate the opportunity", text: "" },
            { n: 4, title: "You explain the Done-for-Me Solution", text: "" },
            { n: 5, title: "You share your personalised Landing Page", text: "" },
            { n: 6, title: "Customer completes payment", text: "" },
          ),
          callout("orange", "Your role ends here", "Steps 7–17 — verification, welcome email & call, information collection, research, content, development, catalogue, review, go-live and support — are handled entirely by the GlobalLinker team."),
        ]},
        { id: "m4-tools", title: "Your personal sales tools", blocks: [
          callout("blue", "Your Personal Landing Page", "Always share your own personalised Done-for-Me Landing Page so every enquiry and sale is correctly attributed to you."),
          callout("blue", "Your Personal Checkout Link", "Customers must complete payment using your personal checkout link so GlobalLinker can accurately track your sales and commissions. Never ask customers to pay using someone else's link."),
        ]},
        { id: "m4-track", title: "How sales are tracked", blocks: [
          flow({ title: "Customer visits your Landing Page" }, { title: "Customer clicks your Checkout Link" }, { title: "Payment received" }, { title: "Payment verified" }, { title: "Sale assigned to you" }, { title: "Commission becomes eligible" }, { title: "Commission processed" }),
        ]},
        { id: "m4-comm", title: "Commission processing", blocks: [
          p("Once payment is received and verified, your commission becomes eligible. Payments are processed on the 7th of every month for all verified sales received during the previous calendar month."),
          table(["Customer pays", "Commission processed"], [
            ["2 June 2026", "7 July 2026"], ["14 June 2026", "7 July 2026"], ["29 June 2026", "7 July 2026"], ["30 June 2026", "7 July 2026"], ["1 July 2026", "7 August 2026"],
          ]),
        ]},
        { id: "m4-great", title: "What makes a great Growth Partner?", blocks: [
          p("The most successful partners don't focus on selling. They focus on helping."),
          ok("Listen before they present.", "Ask questions.", "Demonstrate problems instead of making claims.", "Educate business owners.", "Build trust.", "Follow up consistently.", "Let GlobalLinker handle delivery."),
        ]},
        { id: "m4-never", title: "Things you should never promise", blocks: [
          no("Guaranteed Google rankings.", "Guaranteed ChatGPT rankings.", "Guaranteed sales.", "Guaranteed export orders.", "Guaranteed enquiry volumes.", "Custom features outside the package.", "Faster delivery than the published timeline."),
          p("Instead, explain what the service is designed to achieve:"),
          ok("Better discoverability", "Better digital credibility", "Better buyer experience", "Better opportunities to generate enquiries"),
        ]},
        { id: "m4-tech", title: "If the customer asks technical questions", blocks: [
          p("If a customer asks: Can you add this feature? Can you redesign my homepage? Can you upload my products? Can you build additional pages? — your response should be:"),
          callout("blue", "Say this", "\"That's a great question. Once your payment is completed, our onboarding team will discuss your business requirements in detail and guide you through everything included in the Done-for-Me Setup.\""),
          p("Don't guess. Don't make commitments. Let the implementation team handle project-specific discussions."),
        ]},
        { id: "m4-take", title: "Key takeaways", blocks: [
          ok("Your responsibility ends after the sale.", "GlobalLinker manages the complete implementation.", "Always use your personalised Landing Page and Checkout Link.", "Never make promises outside the approved package.", "Focus on educating businesses — not selling websites.", "Every sale through your checkout link becomes eligible for commission after verification."),
        ]},
      ],
    },
    {
      id: "m5", n: 5, icon: "Route", accent: "orange", read: "8 min",
      title: "Your Sales Process",
      tagline: "From first hello to completed sale.",
      sections: [
        { id: "m5-intro", title: "Helping, not convincing", blocks: [
          lead("The best Growth Partners don't \"sell.\" They educate."),
          p("Every conversation should help a business owner understand why buyers may not be finding their business, what opportunities they may be missing, and how GlobalLinker can solve that problem. If you focus on helping instead of selling, the conversation becomes natural."),
        ]},
        { id: "m5-process", title: "The GlobalLinker sales process", blocks: [
          steps(
            { n: 1, title: "Find the right business", text: "" },
            { n: 2, title: "Start the conversation", text: "" },
            { n: 3, title: "Understand their business", text: "" },
            { n: 4, title: "Demonstrate the AI Visibility Problem", text: "" },
            { n: 5, title: "Present the Done-for-Me Solution", text: "" },
            { n: 6, title: "Handle questions & objections", text: "" },
            { n: 7, title: "Share your personal Landing Page", text: "" },
            { n: 8, title: "Complete payment", text: "" },
            { n: 9, title: "GlobalLinker takes over", text: "" },
          ),
        ]},
        { id: "m5-find", title: "Step 1 — Find the right businesses", blocks: [
          p("Not every business is the right fit. Focus on businesses that manufacture, export or supply products."),
          ok("Manufacturers", "Exporters", "Wholesalers", "OEM Manufacturers", "Private Label Manufacturers", "Industrial Suppliers", "Food & Beverage Companies", "Textile Manufacturers", "Chemical Companies", "Engineering Companies", "Agriculture Businesses", "Packaging Companies", "Furniture Manufacturers"),
          p("May not be suitable: restaurants, local retail shops, salons, individual consultants, freelancers, doctors, lawyers. The Setup is designed primarily for businesses that want to generate enquiries for products or services."),
        ]},
        { id: "m5-where", title: "Where to find customers", blocks: [
          ul("Industrial Areas", "Trade Associations", "Business Networking Events", "Exhibitions", "LinkedIn", "Google Maps", "IndiaMART", "TradeIndia", "Existing Business Contacts", "Referrals"),
          p("Every conversation is a potential opportunity."),
        ]},
        { id: "m5-start", title: "Step 2 — Start the conversation", blocks: [
          p("Don't begin by talking about websites. Start by talking about buyers."),
          swap({ plain: "We build websites.", say: "Can I ask you one question? If someone searched for your products today using ChatGPT or Google, do you think your business would be recommended?" }),
          p("That question creates curiosity. The goal is to start a conversation — not deliver a sales pitch."),
        ]},
        { id: "m5-understand", title: "Step 3 — Understand their business", blocks: [
          p("Before presenting anything, understand the business. Ask:"),
          ul("What products do you manufacture?", "Who are your ideal customers?", "Do you sell only in India or internationally?", "Do you currently have a website?", "How do customers usually find you?", "Which marketplaces are you listed on?", "Do you receive enquiries through your website?"),
          callout("blue", "Golden rule", "Listen more than you speak."),
        ]},
        { id: "m5-demo", title: "Step 4 — Demonstrate the problem", blocks: [
          p("This is where you help the customer see the opportunity. Show them how buyers search today, whether their business appears, and whether competitors appear."),
          p("Don't criticise their current website. Instead, explain how buyer behaviour has changed. Use the AI Discoverability Demonstration."),
          callout("orange", "Remember", "People believe what they see, not what they're told."),
        ]},
        { id: "m5-present", title: "Step 5 — Present the solution", blocks: [
          p("Explain how GlobalLinker helps. Don't overwhelm them with features — focus on outcomes."),
          swap(
            { plain: "We'll create Schema.", say: "We'll make it easier for AI to understand and recommend your business." },
            { plain: "We'll build product pages.", say: "We'll help buyers discover each of your products individually." },
          ),
        ]},
        { id: "m5-handle", title: "Step 6 — Handle questions", blocks: [
          p("Questions are a sign of interest. Answer confidently. If you don't know the answer, never guess. Instead say:"),
          callout("blue", "Say this", "\"That's a great question. I'll confirm this with our GlobalLinker team and get back to you.\""),
          p("Customers appreciate honesty."),
        ]},
        { id: "m5-share", title: "Step 7 — Share your landing page", blocks: [
          p("Once the customer understands the value, send your personalised Done-for-Me Landing Page. It explains the problem, the solution, what's included, pricing, FAQs and customer examples. Encourage the customer to explore it before deciding."),
        ]},
        { id: "m5-pay", title: "Step 8 — Complete payment", blocks: [
          p("When the customer is ready, share your personalised Checkout Link and guide them through payment if needed. Once payment is completed:"),
          ok("Thank the customer.", "Let them know the GlobalLinker team will contact them shortly."),
          p("Do not ask them to send product information to you. Everything after payment is handled by GlobalLinker."),
        ]},
        { id: "m5-best", title: "Sales best practices", blocks: [
          ok("Ask questions.", "Listen carefully.", "Focus on the customer's business.", "Demonstrate the problem.", "Explain the outcome.", "Build trust.", "Follow up politely."),
          no("Talking too much.", "Using technical jargon.", "Criticising the customer's existing website.", "Making unrealistic promises.", "Pressuring the customer."),
        ]},
        { id: "m5-follow", title: "When should you follow up?", blocks: [
          p("Very few customers purchase during the first conversation. Follow up after your first meeting, after sharing the landing page, after answering questions, and after sending additional information."),
          callout("blue", "Stay helpful", "Most sales happen after multiple follow-ups. Stay helpful, not persistent."),
        ]},
        { id: "m5-take", title: "Key takeaways", blocks: [
          ok("Follow the same sales process every time.", "Ask questions before presenting.", "Demonstrate the AI Visibility Problem.", "Sell business outcomes — not website features.", "Always use your personalised Landing Page and Checkout Link.", "Once payment is complete, GlobalLinker takes over."),
        ]},
      ],
    },
    {
      id: "m6", n: 6, icon: "Search", accent: "blue", read: "8 min",
      title: "Finding Customers",
      tagline: "Build a steady pipeline every day.",
      sections: [
        { id: "m6-intro", title: "Every conversation is a potential sale", blocks: [
          p("\"Where do I find customers?\" The answer is simple. Businesses that manufacture, export or supply products are everywhere."),
          p("Your success depends on consistently speaking to the right businesses. The more quality conversations you have, the more opportunities you create."),
        ]},
        { id: "m6-ideal", title: "Ideal industries", blocks: [
          callout("blue", "Agriculture & Food", "Food manufacturers, spice manufacturers, organic food producers, grain exporters, beverage companies, agricultural products."),
          callout("blue", "Textile & Fashion", "Garment manufacturers, textile mills, fabric suppliers, fashion exporters, uniform manufacturers."),
          callout("blue", "Industrial & Engineering", "Engineering companies, machinery manufacturers, industrial equipment, valve manufacturers, pump manufacturers, electrical equipment."),
          callout("blue", "Chemicals & Pharma", "Chemical manufacturers, pharmaceutical companies, laboratory equipment, industrial chemicals."),
          callout("blue", "Furniture & Home", "Furniture manufacturers, home décor, kitchen products, packaging manufacturers."),
          callout("blue", "Other great opportunities", "OEM manufacturers, private label manufacturers, export houses, wholesalers, import-export companies, B2B suppliers."),
        ]},
        { id: "m6-notfit", title: "Usually NOT a good fit", blocks: [
          no("Restaurants & cafes", "Salons", "Local grocery stores", "Doctors & lawyers", "Individual consultants & freelancers", "Small local service providers"),
          p("These businesses may have different digital marketing needs."),
        ]},
        { id: "m6-where", title: "Where to find businesses", blocks: [
          callout("blue", "Google Maps", "Search \"Food Manufacturer\", \"Textile Manufacturer\", \"Exporter\", \"Chemical Company\", \"Furniture Manufacturer\". One of the easiest ways to build a prospect list."),
          callout("orange", "IndiaMART", "Businesses already listed understand the importance of digital business. Many still have poor websites. Excellent opportunity."),
          callout("blue", "TradeIndia", "Many businesses rely only on marketplace visibility. Ideal prospects."),
          callout("blue", "LinkedIn", "Search for Managing Director, Founder, CEO, Export Manager, Business Owner, Operations Head."),
          callout("blue", "Industrial Areas", "Visit industrial estates, MIDC areas, industrial parks, manufacturing clusters. Still one of the most effective ways to generate conversations."),
          callout("blue", "Exhibitions & Associations", "Exhibitions bring hundreds of qualified businesses together — collect cards, scan QR codes, follow up. Trade associations maintain member directories."),
          callout("orange", "Existing Customers", "Always ask: \"Do you know another business that could benefit from improving their online discoverability?\" Referrals convert much faster."),
        ]},
        { id: "m6-pipeline", title: "Build your daily prospect list", blocks: [
          callout("orange", "10 new businesses per day", "Successful partners never wait until they finish one sale. Build your pipeline every day. Within a month, you'll have hundreds of prospects."),
        ]},
        { id: "m6-research", title: "Before contacting any business", blocks: [
          p("Spend two minutes researching. Find out:"),
          ok("What products they manufacture.", "Whether they have a website.", "Whether they're listed on marketplaces.", "Whether they export.", "Whether they have certifications.", "Whether they have product pages."),
        ]},
        { id: "m6-qualify", title: "Qualify every prospect", blocks: [
          qa(
            { q: "Does this business manufacture products?", a: "YES / NO" },
            { q: "Would additional enquiries help them grow?", a: "YES / NO" },
            { q: "Do they already invest in digital marketing?", a: "YES / NO" },
            { q: "Would they benefit from becoming more discoverable?", a: "YES / NO" },
          ),
          p("If most answers are YES, it's a qualified prospect."),
        ]},
        { id: "m6-signs", title: "Signs of a great opportunity", blocks: [
          ok("Old websites", "PDF catalogues", "No product pages", "Limited Google visibility", "Poor branding", "No marketplace presence", "No export visibility", "No AI discoverability"),
          callout("blue", "Don't judge too quickly", "Some businesses have a nice logo, a professional office or a modern website. Don't assume they don't need help. Ask: can buyers actually find them? Many professional-looking businesses still receive very few online enquiries."),
        ]},
        { id: "m6-curiosity", title: "Start with curiosity", blocks: [
          swap({ plain: "We build websites.", say: "Can I ask you one question? If someone searched for your products on ChatGPT today, do you think your business would appear?" }),
          p("This question naturally leads into the AI Visibility conversation."),
        ]},
        { id: "m6-goals", title: "Your weekly activity goals", blocks: [
          callout("blue", "Every day", "Identify 10 new businesses · Contact 5 businesses · Speak to at least 3 decision makers · Conduct 1 AI Visibility Demonstration."),
          callout("orange", "Every week", "50 new prospects · 20 meaningful conversations · 10 AI demonstrations · 5 qualified opportunities · 2–3 closed sales."),
          p("Consistency creates predictable results."),
        ]},
        { id: "m6-take", title: "Key takeaways", blocks: [
          ok("Manufacturers, exporters and suppliers are your ideal customers.", "Google Maps, LinkedIn, IndiaMART and TradeIndia are excellent prospecting sources.", "Research before every conversation.", "Ask questions before presenting solutions.", "Focus on building relationships, not chasing sales.", "A consistent pipeline is the key to long-term success."),
        ]},
      ],
    },
    {
      id: "m7", n: 7, icon: "Bot", accent: "orange", read: "9 min",
      title: "AI Discoverability Demonstration",
      tagline: "Seeing is believing. The full live walkthrough.",
      sections: [
        { id: "m7-intro", title: "Why the demonstration works", blocks: [
          lead("Instead of telling a business they are difficult to find — show them."),
          p("A live demonstration is far more convincing than a sales presentation. It usually takes less than 5 minutes, but it creates one of the strongest moments in the sales conversation."),
          callout("blue", "By the end, the owner should understand", "How buyers search today · whether their business can be found · whether competitors are easier to discover · why AI-friendly websites matter · how GlobalLinker can help."),
        ]},
        { id: "m7-prep", title: "Before you meet the customer", blocks: [
          p("Spend 5–10 minutes preparing. Collect:"),
          ul("Business Name", "Website URL", "Main Products", "Industry", "City", "Competitor names (if known)"),
          p("Preparation makes the demonstration smooth and professional."),
        ]},
        { id: "m7-guard", title: "Important guidelines", blocks: [
          p("Never tell a customer their website is bad, their SEO is terrible, or their developer made mistakes. Instead say:"),
          ok("Buyer behaviour has changed.", "AI needs structured information.", "There are opportunities to improve discoverability.", "Our team specialises in helping businesses make those improvements."),
          callout("orange", "Never promise", "Google rankings, ChatGPT rankings, a number 1 position, or instant results. Explain that GlobalLinker builds the digital infrastructure that improves discoverability."),
        ]},
        { id: "m7-protips", title: "Pro tips", blocks: [
          ok("Let the customer discover the gaps themselves.", "Ask more questions than you answer.", "Don't rush.", "Keep the demonstration under 10 minutes.", "Focus on helping — not selling."),
          callout("blue", "The turning point", "The demonstration should leave the customer thinking: \"I hadn't realised buyers were searching this way.\""),
        ]},
      ],
    },
    {
      id: "m8", n: 8, icon: "MessagesSquare", accent: "blue", read: "Reference",
      title: "Sales Conversation Library",
      tagline: "Ready-to-use scripts for every stage.",
      sections: [
        { id: "m8-intro", title: "The right conversation changes everything", blocks: [
          p("The biggest mistake most salespeople make is talking too much. The best partners ask questions, educate the customer and guide the conversation."),
          callout("blue", "Remember", "These are conversation starters, not speeches. Use your own personality and adapt them naturally."),
          p("Full scripts live in the Scripts tab — open it for one-tap copy and share."),
        ]},
        { id: "m8-golden", title: "Golden rules", blocks: [
          ok("Ask questions before presenting.", "Listen more than you speak.", "Never criticise the customer's existing website.", "Keep conversations simple.", "Focus on helping.", "Build trust first.", "Let the customer arrive at the conclusion."),
          callout("orange", "The truth about selling", "People don't like being sold. They love discovering opportunities."),
        ]},
      ],
    },
    {
      id: "m9", n: 9, icon: "LayoutTemplate", accent: "blue", read: "Reference",
      title: "Example Websites & Success Stories",
      tagline: "Show. Don't tell.",
      sections: [
        { id: "m9-intro", title: "Show, don't tell", blocks: [
          lead("People buy with confidence when they can see the outcome."),
          p("The first question every business owner asks is: \"What will my website look like?\" Don't describe it. Open a real example and walk them through it. Browse the full gallery in the Website Examples tab."),
        ]},
        { id: "m9-how", title: "How to use example websites", blocks: [
          ok("Choose a business from the same industry.", "Open the website on your mobile phone.", "Show the homepage, product pages and enquiry flow.", "Show how professional the business looks.", "Explain that every website is customised."),
          swap({ plain: "Your website will look exactly like this.", say: "This is an example of what our team has built for another business. Your website will be designed around your products, branding and business requirements." }),
        ]},
        { id: "m9-show", title: "What to show", blocks: [
          callout("blue", "Homepage", "Professional branding, hero banner, product categories, call-to-action, contact info. \"A professional homepage creates trust within the first few seconds.\""),
          callout("blue", "Product Pages", "Images, description, applications, specifications, enquiry button. \"Every product page is another opportunity for buyers to discover your business.\""),
          callout("blue", "About Us", "Company story, capabilities, infrastructure, experience, vision. \"Buyers buy from businesses they trust.\""),
          callout("blue", "Certifications", "ISO, organic, export, industry certifications. \"Trust signals reduce buyer hesitation.\""),
          callout("blue", "Contact Page", "Phone, email, address, enquiry form. \"We make it easy for buyers to contact your business directly.\""),
        ]},
        { id: "m9-questions", title: "Questions to ask during the demo", blocks: [
          ul("\"Can you imagine your products being presented like this?\"", "\"Would this create more confidence with buyers?\"", "\"Would this better represent your business?\"", "\"Would it be easier for buyers to understand what you manufacture?\""),
        ]},
        { id: "m9-cust", title: "Common customer questions", blocks: [
          qa(
            { q: "Will my website look exactly like these?", a: "No. Every website is customised based on your products, branding and business." },
            { q: "Can I choose my colours and branding?", a: "Yes. Your website reflects your company's brand identity." },
            { q: "Can I add more products later?", a: "Yes. The website is designed so your catalogue can continue to grow." },
            { q: "Will you use my company logo?", a: "Absolutely. Your website is built specifically for your business." },
          ),
        ]},
        { id: "m9-take", title: "Key takeaways", blocks: [
          ok("Real examples build trust faster than presentations.", "Show websites instead of describing them.", "Use industry-specific examples whenever possible.", "Focus on discoverability, credibility and business outcomes.", "Encourage customers to imagine their own future digital presence."),
        ]},
      ],
    },
    {
      id: "m10", n: 10, icon: "ShieldCheck", accent: "orange", read: "Reference",
      title: "Objection Handling Library",
      tagline: "Every objection is a buying signal.",
      sections: [
        { id: "m10-intro", title: "Every objection is a buying signal", blocks: [
          p("One of the biggest mistakes salespeople make is becoming defensive when they hear an objection. Don't. Most objections simply mean the customer needs more clarity before making a decision."),
          callout("blue", "Always", "Listen completely · acknowledge their concern · respond calmly · ask a question · guide the conversation forward."),
          p("Open the Objections tab for all 15 objections with ready-to-copy responses."),
        ]},
        { id: "m10-framework", title: "The 5-step framework", blocks: [
          steps(
            { n: 1, title: "Listen", text: "Don't interrupt." },
            { n: 2, title: "Acknowledge", text: "\"I completely understand why you'd ask that.\"" },
            { n: 3, title: "Clarify", text: "\"May I ask you a quick question?\"" },
            { n: 4, title: "Educate", text: "Explain the difference." },
            { n: 5, title: "Move forward", text: "\"Would you like me to show you how GlobalLinker solves that?\"" },
          ),
        ]},
        { id: "m10-rules", title: "Golden rules", blocks: [
          ok("Listen completely.", "Stay calm.", "Ask questions.", "Educate.", "Focus on outcomes.", "Build trust."),
          no("Criticise competitors.", "Criticise the customer's current website.", "Promise guaranteed rankings.", "Promise guaranteed enquiries.", "Offer unauthorised discounts.", "Guess technical answers."),
          callout("orange", "Remember", "An objection is not rejection. Most customers ask questions because they're interested."),
        ]},
      ],
    },
    {
      id: "m11", n: 11, icon: "Send", accent: "blue", read: "Reference",
      title: "WhatsApp, Email & Follow-up Scripts",
      tagline: "Great salespeople follow up.",
      sections: [
        { id: "m11-intro", title: "Great salespeople follow up", blocks: [
          p("Most sales are not closed during the first conversation. Business owners are busy. Some need to discuss the investment, review examples, or simply need a reminder. Following up professionally is one of the easiest ways to improve your conversion rate."),
          p("All WhatsApp and email templates are in the Scripts tab — copy and share in one tap."),
        ]},
        { id: "m11-golden", title: "Golden rules for follow-ups", blocks: [
          ok("Always provide value.", "Keep messages short.", "Don't pressure the customer.", "Don't send multiple messages in one day.", "End every message with a simple question."),
        ]},
        { id: "m11-cadence", title: "When should you follow up?", blocks: [
          steps(
            { n: 0, title: "Day 0 — Meeting", text: "" },
            { n: 1, title: "Day 1 — Share landing page", text: "" },
            { n: 3, title: "Day 3 — Follow-up", text: "" },
            { n: 7, title: "Day 7 — Check-in", text: "" },
            { n: 14, title: "Day 14 — Final follow-up", text: "After that, move the prospect into your long-term nurture list." },
          ),
        ]},
        { id: "m11-avoid", title: "Things to avoid", blocks: [
          no("Sending messages every day.", "Asking \"Have you decided?\" repeatedly.", "Pressuring customers.", "Offering unauthorised discounts.", "Sending large blocks of text."),
        ]},
        { id: "m11-take", title: "Key takeaways", blocks: [
          ok("Most sales happen after multiple follow-ups.", "Keep messages short and helpful.", "Always include your personalised Landing Page or Checkout Link where relevant.", "Let GlobalLinker handle onboarding after payment.", "Build trust through consistency, not pressure."),
        ]},
      ],
    },
    {
      id: "m12", n: 12, icon: "HelpCircle", accent: "blue", read: "Reference",
      title: "Frequently Asked Questions",
      tagline: "Confident answers to common questions.",
      sections: [
        { id: "m12-intro", title: "Answer with confidence", blocks: [
          p("Almost every business owner asks similar questions before making a purchase. The FAQ tab gives you clear, consistent answers grouped by topic."),
          callout("blue", "Golden rule", "If you don't know the answer, say: \"That's a great question. I'd like to confirm that with the GlobalLinker team so I can give you the correct information.\" Customers appreciate accurate answers more than quick answers."),
        ]},
        { id: "m12-never", title: "Questions you should never answer yourself", blocks: [
          p("If you're unsure about any of the following, always involve the GlobalLinker team:"),
          no("Custom website features", "Technical integrations", "Special pricing requests", "Custom development", "Legal questions", "Payment disputes", "Refund requests", "Timeline exceptions"),
          p("Never guess. Always confirm."),
        ]},
      ],
    },
  ];

  // ---- AI Demonstration (interactive stepper) ----
  const aiDemo = {
    intro: "A live, 5-minute walkthrough that helps a business owner see — not just hear — why buyers may not be finding them. Work through each step together, on your phone, inside the customer's office.",
    steps: [
      { n: 1, title: "Search Like a Buyer", icon: "Bot", sub: "Open ChatGPT and search for products — not the company name.",
        detail: "Imagine you are a buyer looking for suppliers. Search for the customer's products, not their company name.",
        examples: ["Recommend Organic Spice Manufacturers in India.", "Recommend Textile Exporters in Varanasi.", "Best Stainless Steel Valve Manufacturers.", "Top Packaging Manufacturers in India.", "Recommend Private Label Cosmetic Manufacturers."],
        ask: "Do you expect your business to appear in these results? Allow them to answer before moving forward.",
        tools: [{ label: "Open ChatGPT", url: "https://chat.openai.com/", icon: "ExternalLink" }] },
      { n: 2, title: "Search for the Business", icon: "Building2", sub: "Ask AI directly about the business.",
        detail: "Now ask ChatGPT: \"Tell me about [Business Name]\" or \"What products does [Business Name] manufacture?\" Observe the response together.",
        examples: ["✅ AI understands the business.", "⚠ AI has limited information.", "❌ AI cannot identify the business."],
        ask: "Don't criticise. Simply ask: \"If AI doesn't understand your business today, how will it confidently recommend you to buyers?\"",
        tools: [{ label: "Open ChatGPT", url: "https://chat.openai.com/", icon: "ExternalLink" }] },
      { n: 3, title: "Search on Google", icon: "Search", sub: "Search the business, the products and the city.",
        detail: "Search the business name, then Business Name + Product, then Product + City — e.g. \"Organic Millet Manufacturer Jaipur\".",
        examples: ["Does the website appear?", "Are product pages visible?", "Does Google understand what the business manufactures?", "Are competitors appearing above them?"],
        ask: "Don't compare. Simply observe together.",
        tools: [{ label: "Open Google", url: "https://www.google.com/", icon: "ExternalLink" }] },
      { n: 4, title: "Review the Website", icon: "Globe", sub: "Walk through the customer's site together.",
        detail: "Open the customer's website and walk through it together. Look for the building blocks buyers need.",
        examples: ["Product Pages", "About Us", "Contact Information", "Certifications", "Industries Served", "Export Information", "Product Specifications", "Buyer-focused content"],
        ask: "Ask: Can buyers clearly understand what you manufacture? Can buyers find every important product? Would a buyer trust this website?",
        tools: [] },
      { n: 5, title: "Run Schema Validator", icon: "Code2", sub: "Show machine readability with the Schema Validator.",
        detail: "Introduce machine readability: \"People look at the design of a website. Search engines and AI look at how the website is structured.\" Open the validator, enter the customer's URL and click Run Test. Observe the results together.",
        examples: ["Rich structured data — a positive foundation.", "Limited structured data — opportunities to improve.", "No structured data — \"This doesn't mean the website is bad. It simply means AI has less information available to understand your business.\""],
        ask: "Never criticise. Always educate. Schema is a language that tells AI exactly who the business is, what it makes, where it is and how to contact it.",
        tools: [{ label: "Open Schema Validator", url: "https://validator.schema.org/", icon: "ExternalLink" }] },
      { n: 6, title: "Explain the Opportunity", icon: "Lightbulb", sub: "Connect everything and introduce the solution.",
        detail: "Connect everything. Say something like: \"Today's buyers are increasingly using AI and search engines to discover suppliers. The easier your website is for AI to understand, the easier it becomes for buyers to discover your business. That's exactly what GlobalLinker's Done-for-Me Business Visibility Setup has been designed to improve.\"",
        examples: ["Simple.", "Professional.", "Educational."],
        ask: "End by introducing the Done-for-Me Setup and sharing your personalised Landing Page.",
        tools: [] },
    ],
    checklist: ["Searched like a buyer", "Searched for the business", "Reviewed Google results", "Reviewed the website", "Explained Schema", "Demonstrated Schema Validator", "Explained the opportunity", "Introduced the Done-for-Me Setup", "Shared your Landing Page"],
  };

  // ---- Sales scripts ----
  const scripts = [
    { id: "s1", title: "Cold Introduction (Face-to-Face)", channel: "In person", stage: "Introduction",
      body: "Hi, my name is [Your Name], and I work with GlobalLinker.\n\nWe help manufacturers and exporters become easier for buyers to discover on Google, ChatGPT and other AI-powered search platforms.\n\nCan I ask you one quick question? If someone searched for your products today, do you think your business would appear?\n\n(Pause. Listen carefully before continuing.)" },
    { id: "s2", title: "Cold Call", channel: "Phone", stage: "Introduction",
      body: "Hello, may I speak with the owner or the person who looks after business development?\n\nHi, my name is [Your Name] from GlobalLinker. The reason I'm calling is because we've been helping manufacturers improve how buyers find them online — not just through Google, but also through AI platforms like ChatGPT.\n\nCan I ask you one quick question? If someone searched for your products today, would your business be recommended?\n\nI'd love to show you something that takes less than five minutes. Would now be a good time?" },
    { id: "s3", title: "Networking Event", channel: "In person", stage: "Introduction",
      body: "Hi, I'm [Your Name]. I work with GlobalLinker. We help businesses become easier to discover online, especially as more buyers are using AI to find suppliers.\n\nWhat does your company manufacture?\n\n(Listen.) That's interesting. Can I ask you something? If someone searched for those products using ChatGPT today, do you think your company would appear?" },
    { id: "s4", title: "Referral Introduction", channel: "Phone", stage: "Introduction",
      body: "Hi [Customer Name], [Referral Name] suggested I get in touch with you.\n\nI work with GlobalLinker, helping manufacturers improve how buyers discover their businesses online.\n\nI'd love to spend just five minutes showing you something that could help your business become more visible to buyers. When would be a convenient time?" },
    { id: "s5", title: "LinkedIn Connection Message", channel: "LinkedIn", stage: "Introduction",
      body: "Hi [Name], I came across your company while researching businesses in the [Industry] sector.\n\nI help manufacturers improve how buyers discover them through Google, AI search and B2B marketplaces.\n\nWould love to connect." },
    { id: "s6", title: "WhatsApp First Message", channel: "WhatsApp", stage: "Introduction",
      body: "Hello [Name], this is [Your Name] from GlobalLinker. We help manufacturers and exporters become easier to discover by buyers online.\n\nCan I ask you one quick question? If someone searched for your products using ChatGPT today, do you think your business would appear?\n\nI'd be happy to show you a quick 5-minute demonstration." },
    { id: "s7", title: "Opening Questions", channel: "Discovery", stage: "Understand",
      body: "Before talking about GlobalLinker, understand the business. Ask:\n\n• What products do you manufacture?\n• Who are your main customers?\n• Do you export?\n• How do customers usually find you?\n• Do you currently have a website?\n• Are you listed on IndiaMART or TradeIndia?\n• How many enquiries do you receive through your website every month?\n• Have you ever checked if AI can find your business?\n\nThe answers will guide the rest of the conversation." },
    { id: "s8", title: "Transition to the AI Demonstration", channel: "In person", stage: "Demonstrate",
      body: "Thank you for sharing that. May I show you something?\n\nLet's search the way a buyer would search today. Instead of searching your company name, let's search for the products you manufacture.\n\nThis usually takes less than five minutes." },
    { id: "s9", title: "Explaining the AI Visibility Problem", channel: "In person", stage: "Demonstrate",
      body: "Today, buyers don't always begin with Google. Many of them ask ChatGPT, Gemini or Google AI to recommend suppliers.\n\nIf AI doesn't understand your business, it can't confidently recommend you. That's becoming one of the biggest reasons why businesses miss valuable enquiries." },
    { id: "s10", title: "Presenting the Solution", channel: "In person", stage: "Present",
      body: "The good news is that this is exactly what GlobalLinker's Done-for-Me Business Visibility Setup is designed to solve.\n\nInstead of asking you to hire designers, developers, SEO agencies and content writers, our team manages the complete process for you.\n\nYou simply provide the business information. We do the rest." },
    { id: "s11", title: "Explaining the Investment", channel: "Present", stage: "Present",
      body: "The investment for the complete Done-for-Me Business Visibility Setup is ₹24,999 + GST.\n\nThis includes:\n✔ Professional Website\n✔ AI-Optimised Product Pages\n✔ Digital Catalogue\n✔ Premium Membership\n✔ Marketplace Visibility\n✔ WhatsApp Catalogue\n✔ SEO Optimisation\n✔ Schema Implementation\n\nEverything is handled by the GlobalLinker team." },
    { id: "s12", title: "Asking for the Sale", channel: "Close", stage: "Close",
      body: "Rather than saying \"Would you like to buy?\", try:\n\n\"Would you like our team to help you build a business presence that's easier for buyers and AI to discover?\"\n\nIf they say yes, share your Landing Page, walk them through the information, then share your Checkout Link." },
    { id: "s13", title: "After Payment", channel: "Close", stage: "Close",
      body: "Congratulations, and thank you for choosing GlobalLinker. Your payment has been received successfully.\n\nThe next step is very simple. Our onboarding team will verify your payment and contact you directly. You'll receive a welcome email and a call from the GlobalLinker team, who will collect all the information required to build your website and digital catalogue.\n\nFrom this point onwards, our team will manage the complete implementation for you." },
    { id: "s14", title: "Follow-Up 1 (Next Day)", channel: "Follow-up", stage: "Follow-up",
      body: "Hello [Name], thank you for taking the time to speak with me yesterday.\n\nAs discussed, I'm sharing your personalised GlobalLinker Done-for-Me page again. Take a few minutes to go through it, and if you have any questions, I'd be happy to help." },
    { id: "s15", title: "Follow-Up 2 (3–4 Days Later)", channel: "Follow-up", stage: "Follow-up",
      body: "Hi [Name], just checking in to see if you had a chance to review the Done-for-Me Business Visibility Setup.\n\nHappy to answer any questions or walk you through the process if you'd like." },
    { id: "s16", title: "Follow-Up 3 (One Week Later)", channel: "Follow-up", stage: "Follow-up",
      body: "Hello [Name], I wanted to follow up regarding our conversation.\n\nMany businesses don't realise how quickly buyer behaviour is changing with AI search. Whenever you're ready, I'd be happy to help you get started." },
    { id: "s17", title: "If the Customer Needs Time", channel: "Objection", stage: "Follow-up",
      body: "Absolutely. This is an important business decision. Take your time reviewing the information.\n\nIf any questions come up, feel free to reach out. I'm here to help." },
    { id: "s18", title: "If the Customer Stops Responding", channel: "Follow-up", stage: "Follow-up",
      body: "Hi [Name], just wanted to check in. Have you had a chance to review the information I shared?\n\nIf now isn't the right time, that's perfectly fine. Whenever you're ready, I'd be happy to continue the conversation." },
    { id: "s19", title: "Thank You Message", channel: "Close", stage: "Close",
      body: "Thank you once again for choosing GlobalLinker. We're excited to help your business become easier to discover by buyers.\n\nOur onboarding team will contact you shortly and guide you through the next steps. Welcome to GlobalLinker!" },
  ];

  // ---- WhatsApp & Email messages ----
  const messages = [
    { id: "w1", type: "WhatsApp", title: "After the First Meeting", stage: "Day 1",
      body: "Hi {{Name}}, thank you for taking the time to meet with me today.\n\nAs discussed, I'm sharing the GlobalLinker Done-for-Me Business Visibility page. It explains how we help businesses become easier to discover on Google, ChatGPT and other AI platforms.\n\nTake a look when you have a few minutes. If you have any questions, I'd be happy to help.\n👉 {{Your Landing Page}}" },
    { id: "w2", type: "WhatsApp", title: "After the AI Demonstration", stage: "Day 1",
      body: "Hi {{Name}}, thank you for taking the time to go through the AI Discoverability Demonstration today.\n\nIt's surprising how much buyer behaviour has changed. I've shared the page again below so you can review everything included in the Done-for-Me Setup.\n👉 {{Your Landing Page}}\n\nHappy to answer any questions." },
    { id: "w3", type: "WhatsApp", title: "Customer Is Interested", stage: "Close",
      body: "Hi {{Name}}, I'm glad you found today's discussion useful.\n\nWhen you're ready, you can complete your Done-for-Me Business Visibility Setup using the secure link below.\n👉 {{Your Checkout Link}}\n\nOnce payment is completed, the GlobalLinker onboarding team will contact you directly and manage the complete setup." },
    { id: "w4", type: "WhatsApp", title: "Gentle Follow-up", stage: "Day 3",
      body: "Hi {{Name}}, just checking in to see if you had a chance to review the information I shared.\n\nIf you have any questions about the Done-for-Me Setup, I'm happy to help." },
    { id: "w5", type: "WhatsApp", title: "One Week Later", stage: "Day 7",
      body: "Hi {{Name}}, just wanted to follow up.\n\nMany businesses are now reviewing how visible they are on Google and AI platforms. Whenever you're ready, I'd be happy to help your business take the next step." },
    { id: "w6", type: "WhatsApp", title: "Customer Requested Time", stage: "Follow-up",
      body: "Hi {{Name}}, as requested, I'm checking in again.\n\nHave you had an opportunity to review the GlobalLinker Done-for-Me solution? If there's anything you'd like me to clarify, just let me know." },
    { id: "w7", type: "WhatsApp", title: "Payment Reminder", stage: "Close",
      body: "Hi {{Name}}, just a quick reminder.\n\nWhenever you're ready, you can complete your registration using the secure checkout link below.\n👉 {{Checkout Link}}\n\nOnce your payment is received and verified, the GlobalLinker team will begin the onboarding process." },
    { id: "w8", type: "WhatsApp", title: "Thank You", stage: "Close",
      body: "Hi {{Name}}, thank you for choosing GlobalLinker.\n\nWe're excited to help your business become easier to discover online. The GlobalLinker onboarding team will contact you shortly to begin collecting your business information.\n\nWelcome aboard!" },
    { id: "e1", type: "Email", title: "After the First Meeting", stage: "Day 1", subject: "Thank You for Meeting Today",
      body: "Hi {{Name}},\n\nThank you for taking the time to meet with me today. It was great learning about your business.\n\nAs discussed, I'm sharing information about the GlobalLinker Done-for-Me Business Visibility Setup. You can review everything here:\n👉 {{Landing Page}}\n\nIf you have any questions, please feel free to reach out.\n\nKind regards,\n{{Partner Name}}" },
    { id: "e2", type: "Email", title: "Customer Is Interested", stage: "Close", subject: "Your GlobalLinker Done-for-Me Setup",
      body: "Hi {{Name}},\n\nThank you for your interest. You can complete your registration using the secure checkout link below.\n👉 {{Checkout Link}}\n\nOnce your payment has been received and verified, the GlobalLinker onboarding team will contact you directly and begin your project.\n\nKind regards,\n{{Partner Name}}" },
    { id: "e3", type: "Email", title: "Follow-up", stage: "Day 3", subject: "Just Following Up",
      body: "Hi {{Name}},\n\nI hope you're doing well. I just wanted to follow up regarding our recent discussion about improving your business's online discoverability.\n\nIf you have any questions, I'd be happy to help. You can review the information again here:\n👉 {{Landing Page}}\n\nLooking forward to hearing from you." },
    { id: "e4", type: "Email", title: "Thank You", stage: "Close", subject: "Welcome to GlobalLinker",
      body: "Hi {{Name}},\n\nThank you for choosing GlobalLinker. Your payment has been received successfully.\n\nOur onboarding team will contact you shortly to begin your Done-for-Me Business Visibility Setup.\n\nWe're looking forward to working with you." },
  ];

  // ---- Objections ----
  const objections = [
    { id: "o1", q: "I already have a website.", never: "Your website isn't good.",
      response: "That's great. Having a website is definitely a good start. Can I ask you one question? If someone searched for your products on ChatGPT today, do you think your business would be recommended?\n\n(Pause.)\n\nToday, simply having a website isn't enough. The real question is whether buyers can discover it. GlobalLinker helps businesses become easier to discover by improving AI readability, structured product information, SEO and Schema.",
      why: "It validates their decision, then shifts the conversation from \"having a website\" to \"being discovered\" — a problem they haven't considered." },
    { id: "o2", q: "We're already listed on IndiaMART.",
      response: "That's excellent. IndiaMART is a great marketplace. Can I ask you something? Who owns the customer relationship there?\n\nUsually, the enquiry starts on the marketplace. With GlobalLinker, your business also gets its own professional website that you own completely. Your enquiries come directly to you and are not shared with competing businesses through your website.\n\nThink of marketplaces as one source of enquiries. Your own website becomes another long-term business asset.",
      why: "It positions GlobalLinker as complementary, not competing — and highlights ownership of enquiries, which marketplaces can't offer." },
    { id: "o3", q: "We're already on TradeIndia.",
      response: "That's good. TradeIndia can certainly help generate visibility. What GlobalLinker does is different.\n\nWe help businesses build their own discoverable digital presence. Instead of depending only on a marketplace, buyers can also discover your own website through Google and AI search. That gives you more control over your brand and your enquiries.",
      why: "Reframes marketplace dependence as a limitation and shows the upside of owning your own discoverable presence." },
    { id: "o4", q: "We already have an SEO agency.",
      response: "That's good to hear. SEO remains important. May I ask, are they also optimising your business for AI search and machine readability?\n\nToday's buyers increasingly use ChatGPT, Gemini and Google AI. GlobalLinker focuses on helping businesses become easier for both search engines and AI systems to understand. The two approaches can complement each other.",
      why: "It respects their existing investment while introducing AI readability — a gap most SEO agencies don't yet cover." },
    { id: "o5", q: "We already get enough business.",
      response: "That's fantastic. Every business wants consistent enquiries. May I ask, if your business became easier to discover online, would additional qualified enquiries still be valuable?\n\nOur goal isn't to replace your existing sales channels. It's to create another source of opportunities.",
      why: "It avoids confrontation and reframes the offer as additional upside rather than a fix for a problem." },
    { id: "o6", q: "It's too expensive.",
      response: "I completely understand. Every business owner wants to make the right investment. May I ask, if your business received just one additional high-value customer because buyers could discover you more easily, would that investment make sense?\n\nRemember, this isn't simply a website. It's a complete business visibility setup that includes your website, digital catalogue, AI optimisation, SEO, Schema, marketplace visibility and Premium Membership. Most businesses spend significantly more when hiring separate agencies for each of these services.",
      why: "It anchors price against the value of a single new customer and reframes the cost against the many bundled services." },
    { id: "o7", q: "Can you give me a discount?",
      response: "I completely understand. Everyone likes getting the best value. The current pricing has been designed to offer exceptional value considering everything that's included.\n\nYou're receiving a professionally managed business visibility solution — not just a website. If there are any official promotional offers available, I'd be happy to check with the GlobalLinker team.",
      why: "It holds the price with confidence, reinforces value, and never promises an unauthorised discount.",
      warn: "Never promise or offer a discount unless it has been officially approved by GlobalLinker." },
    { id: "o8", q: "We'll think about it.",
      response: "Absolutely. This is an important business decision. May I ask, is there anything specific you're still unsure about?\n\nSometimes it's the price. Sometimes it's the timing. Sometimes it's simply understanding the process. I'd be happy to answer any questions before you decide.",
      why: "It surfaces the real, hidden objection so you can address it instead of letting the conversation stall." },
    { id: "o9", q: "We don't have time right now.",
      response: "I completely understand. That's actually one of the reasons businesses choose the Done-for-Me Setup.\n\nYour team doesn't need to build anything. GlobalLinker handles the complete implementation. Your involvement is mainly sharing the business information and reviewing the final website before it goes live.",
      why: "It turns the objection into the strongest selling point — the service exists precisely because owners have no time." },
    { id: "o10", q: "My son / employee built our website.",
      response: "That's great. The quality of the website isn't really the question. The question is: can buyers easily discover it?\n\nBuyer behaviour has changed dramatically over the last few years. Our goal isn't to replace anyone's work. It's to improve how buyers and AI discover your business today.",
      why: "It avoids insulting a family member or staff and keeps the focus on discoverability, not website quality." },
    { id: "o11", q: "Another agency is cheaper.",
      response: "That's possible. Different agencies provide different services. Many agencies build websites. GlobalLinker builds business discoverability.\n\nAlong with the website, you're also receiving AI optimisation, SEO, Schema, a digital catalogue, marketplace visibility, Premium Membership and a WhatsApp Catalogue. It's important to compare the complete solution — not just the website price.",
      why: "It moves the comparison from price to scope, exposing how much more is included in the bundle." },
    { id: "o12", q: "We don't export.",
      response: "That's perfectly fine. Many of our customers currently sell only within India.\n\nThe goal is simply to help buyers discover your business more easily. Whether your next enquiry comes from your own city, another state or another country, stronger discoverability benefits every business.",
      why: "It removes the false assumption that discoverability only matters for exporters." },
    { id: "o13", q: "I don't use AI.",
      response: "That's okay. The important question is: do your buyers use AI?\n\nMore and more procurement teams and business buyers are using AI to shortlist suppliers. This isn't about whether you use AI. It's about whether your customers do.",
      why: "It shifts the lens from the owner's habits to the buyer's behaviour — which is what actually drives enquiries." },
    { id: "o14", q: "We'll build it ourselves.",
      response: "That's certainly an option. May I ask, who will research the content? Who will create the product pages? Who will optimise the website for AI? Who will implement Schema? Who will organise the catalogue? Who will ensure the website is buyer-ready?\n\nMany businesses realise that managing all of this internally takes far more time than expected. That's exactly why the Done-for-Me service exists.",
      why: "A series of questions reveals the true scope of the work and the hidden cost of doing it in-house." },
    { id: "o15", q: "Can you guarantee more business?",
      response: "No. And no one should. What we do guarantee is that we'll build a stronger digital presence designed to help buyers discover and understand your business more easily.\n\nBetter discoverability creates more opportunities. The quality of enquiries and business outcomes depends on many factors, including your products, pricing, responsiveness and market demand.",
      why: "Honesty builds trust. It sets realistic expectations while still affirming the real value of the service." },
  ];

  // ---- FAQ (grouped) ----
  const faqs = [
    { group: "Package & Pricing", items: [
      { q: "What is included in the Done-for-Me Business Visibility Setup?", a: "Everything needed to create a professional digital presence: Professional Business Website, AI-Friendly Product Pages, Digital Product Catalogue, SEO Optimisation, AI Optimisation, Schema.org Structured Data, Premium Membership (1 Year), Marketplace Visibility, WhatsApp Catalogue and Business Profile Setup. Everything is managed by the GlobalLinker team." },
      { q: "How much does it cost?", a: "₹24,999 + GST. This is a one-time setup investment. From the second year onwards, the customer only pays the applicable annual Premium Membership renewal fee." },
      { q: "Are there any hidden charges?", a: "No. The customer pays only for the package selected. Additional services outside the standard package would be discussed separately in the future." },
    ]},
    { group: "Ownership", items: [
      { q: "Will I own my website?", a: "Yes. The website belongs to your business." },
      { q: "Will I own my domain?", a: "Yes. If you already own a domain, we'll connect it. If you don't have one, we'll help you register one in your business name." },
      { q: "Who owns the enquiries?", a: "All enquiries received through your website belong only to your business. They are not shared with competitors." },
    ]},
    { group: "Website & Design", items: [
      { q: "Will my website look exactly like the examples?", a: "No. Every website is customised around the customer's products, branding and business." },
      { q: "Can I choose my colours and branding?", a: "Yes. The website reflects the customer's business identity." },
      { q: "Can I request changes?", a: "Yes. The customer reviews the website before it goes live and can request reasonable revisions within the project scope." },
      { q: "Can I add more products later?", a: "Yes. The website is designed so additional products can be added in the future." },
    ]},
    { group: "Timeline", items: [
      { q: "How long does the setup take?", a: "The typical delivery timeline is approximately 15 working days. This begins after the customer has submitted all the required business information." },
      { q: "What if the customer delays sending information?", a: "The project timeline will begin once all the required information has been received." },
    ]},
    { group: "AI & SEO", items: [
      { q: "What is AI Optimisation?", a: "Organising the website so AI systems like ChatGPT, Gemini and Google AI can better understand the business and its products. This includes structured content, product information, business details and Schema.org markup." },
      { q: "What is Schema?", a: "Structured information added to a website that helps search engines and AI understand exactly what the business does. Think of it as a language that makes your website easier for machines to understand." },
      { q: "Will GlobalLinker guarantee Google rankings?", a: "No. No company can honestly guarantee search rankings. GlobalLinker builds a strong digital foundation designed to improve discoverability." },
      { q: "Will GlobalLinker guarantee ChatGPT recommendations?", a: "No. AI platforms decide what information to recommend. Our role is to make the business easier for AI systems to understand." },
    ]},
    { group: "Marketplace", items: [
      { q: "I'm already on IndiaMART. Why do I need this?", a: "IndiaMART is a marketplace. GlobalLinker helps businesses build their own professional website and digital presence in addition to marketplace visibility. The business owns its website and receives enquiries directly." },
      { q: "I'm already on TradeIndia.", a: "That's great. The Done-for-Me Setup complements existing marketplace listings by helping buyers discover the customer's own business online." },
    ]},
    { group: "Support", items: [
      { q: "Who do I contact after payment?", a: "Once payment is completed and verified, the GlobalLinker onboarding team becomes the customer's primary point of contact and guides them through every step of the project." },
      { q: "Will the Growth Partner manage my project?", a: "No. The Growth Partner's role ends after the successful sale. GlobalLinker manages onboarding, content creation, website development, revisions and support." },
    ]},
    { group: "Payments", items: [
      { q: "How do I make payment?", a: "Payment is made through the secure GlobalLinker Checkout Page shared by the Growth Partner." },
      { q: "Is my payment secure?", a: "Yes. Payments are processed through GlobalLinker's official payment system powered by Razorpay." },
      { q: "Can I pay later?", a: "Customers can complete payment whenever they are ready. Project work begins only after payment has been successfully received and verified." },
    ]},
    { group: "Commission (Growth Partners)", items: [
      { q: "How do Growth Partners earn?", a: "Growth Partners earn commission when a customer successfully purchases through their unique checkout link and the payment has been verified." },
      { q: "When is commission paid?", a: "Commission payments are processed on the 7th of every month for all verified sales received during the previous calendar month. Example: customer pays on 10 June → payment verified → commission processed on 7 July." },
      { q: "What if the customer uses another partner's checkout link?", a: "The commission is credited to the Growth Partner whose checkout link was used. Always ensure customers complete payment using your personalised checkout link." },
    ]},
  ];

  // ---- Website examples ----
  const websites = [
    { name: "Vijay Exports & Imports", url: "https://rndsunbrand.linker.store/", industry: "Food & Beverage" },
    { name: "Vistar Global", url: "https://vistarglobalexports.linker.store/", industry: "Food & Beverage" },
    { name: "Human Need Design Global Export", url: "https://www.hndglobalexport.com/", industry: "Food & Beverage" },
    { name: "Wazia Group", url: "https://waziagroup.com/", industry: "Food & Beverage" },
    { name: "Varal Trading", url: "https://varaltrading.linker.store/", industry: "Food & Beverage" },
    { name: "Lakshita Organics", url: "https://lakshitaorganic.linker.store/", industry: "Food & Beverage" },
    { name: "PAN International", url: "https://paninternational.in/", industry: "Food & Beverage" },
    { name: "JFS Global", url: "https://www.jfsglobaltrade.com/", industry: "Food & Beverage" },
    { name: "Vertexus Global LLP", url: "https://vertexusglobal.linker.store/", industry: "Food & Beverage" },
    { name: "Katke's Spices & Beverages", url: "https://katkesspicesandbeverages.linker.store/", industry: "Food & Beverage" },
    { name: "Majji Export Import", url: "https://majjiexportimport.linker.store/", industry: "Food & Beverage" },
    { name: "PTC Global Exports", url: "https://www.ptcglobalexports.com/", industry: "Food & Beverage" },
    { name: "TR Export", url: "https://www.rtexim.com/", industry: "Textile & Fashion" },
    { name: "Yoshima Enterprises", url: "https://yoshimaenterprises.linker.store/", industry: "Textile & Fashion" },
    { name: "Fashion Mart", url: "https://fashionmart.linker.store/", industry: "Textile & Fashion" },
    { name: "Brazeal Studio", url: "https://brazealstudio.com/", industry: "Textile & Fashion" },
    { name: "Zivba Global", url: "https://www.zivbaglobal.com/", industry: "Textile & Fashion" },
    { name: "Raw Craft", url: "https://www.therawcraft.in/", industry: "Textile & Fashion" },
    { name: "K Designs", url: "https://www.thekdesigns.in/", industry: "Textile & Fashion" },
    { name: "Bhagat Brothers", url: "https://bhagatbrothers.com/", industry: "Textile & Fashion" },
    { name: "Hindo Corp", url: "https://www.hindocorp.com/", industry: "Textile & Fashion" },
    { name: "Hisako International", url: "https://www.hisako.in/", industry: "Agriculture" },
    { name: "AL SHAYE EXIM LLP", url: "https://alshayefoodproducts.com/", industry: "Agriculture" },
    { name: "Green Blossom Agritech Ventures", url: "https://www.greenblossom.in/", industry: "Agriculture" },
    { name: "Shakti International", url: "https://shaktiinternational.linker.store/", industry: "Industrial & Engineering" },
    { name: "Meco Instruments Pvt. Ltd.", url: "https://mecoinst.linker.store/", industry: "Industrial & Engineering" },
    { name: "RTS Power", url: "https://rtspower.linker.store/", industry: "Industrial & Engineering" },
    { name: "HA-KO Industries Pvt. Ltd.", url: "https://www.hkonline.in/", industry: "Industrial & Engineering" },
    { name: "C-Way Engineering Exports", url: "https://www.cwayengineering.com/", industry: "Industrial & Engineering" },
    { name: "Angel Bizlink", url: "https://angelbizlink.linker.store/", industry: "Industrial & Engineering" },
    { name: "Duke Pumping Solutions", url: "https://dukepumps.linker.store/", industry: "Industrial & Engineering" },
    { name: "Awash Global Ventures", url: "https://awashglobal.linker.store/", industry: "Industrial & Engineering" },
    { name: "The Pioneer Chemical Company", url: "https://www.pioneerchemicals.co.in/", industry: "Chemicals" },
    { name: "Ancalima Lifesciences Ltd.", url: "https://www.ancalima.co.in/", industry: "Pharma & Healthcare" },
    { name: "Parshva Agency", url: "https://parshvaagency.com/", industry: "Pharma & Healthcare" },
    { name: "Dolphin Instruments", url: "https://www.surgicalsshop.com/", industry: "Pharma & Healthcare" },
    { name: "Shakti Sandal Wood Oil Distillers", url: "https://www.shaktisandal.com/", industry: "Fragrances & Oils" },
    { name: "MrilQ", url: "https://www.mrilq.com/", industry: "B2C / D2C" },
    { name: "Jaipan", url: "https://jaipanonline.com/", industry: "B2C / D2C" },
    { name: "Bajaj World", url: "https://www.bajajworld.in/", industry: "B2C / D2C" },
    { name: "Zalani Collection NX", url: "https://www.digitalzalani.com/", industry: "B2C / D2C" },
    { name: "Total Sports & Fitness", url: "https://www.totalsf.in/", industry: "B2C / D2C" },
    { name: "Mahavir Home Store", url: "https://www.mahavirhomestore.com/", industry: "B2C / D2C" },
    { name: "Shiv Textiles", url: "https://www.shivtextiles.store/", industry: "B2C / D2C" },
    { name: "MNB Jewels", url: "https://mnbjewels.com/", industry: "B2C / D2C" },
    { name: "Village Weavers", url: "https://www.villageweaversrugs.com/", industry: "B2C / D2C" },
  ];

  const quickActions = [
    { id: "qa-conv", icon: "MessageCircle", emoji: "🎯", title: "Start a Sales Conversation", sub: "Openers & discovery questions", view: "scripts", accent: "blue" },
    { id: "qa-ai", icon: "Bot", emoji: "🤖", title: "Conduct an AI Demonstration", sub: "The live 6-step walkthrough", view: "aidemo", accent: "orange" },
    { id: "qa-obj", icon: "ShieldCheck", emoji: "💬", title: "Handle Objections", sub: "15 ready responses", view: "objections", accent: "blue" },
    { id: "qa-web", icon: "LayoutTemplate", emoji: "🌐", title: "Show Example Websites", sub: "46 real businesses", view: "websites", accent: "blue" },
    { id: "qa-wa", icon: "Send", emoji: "📱", title: "WhatsApp & Email Scripts", sub: "Copy-and-send templates", view: "messages", accent: "orange" },
    { id: "qa-faq", icon: "HelpCircle", emoji: "❓", title: "Frequently Asked Questions", sub: "Answers by topic", view: "faq", accent: "blue" },
  ];

  // ---- Case studies (from "Real Case Studies" deck) ----
  const caseStudies = [
    {
      id: "cs1", n: "01", company: "Shakti Sandal", industry: "Fragrances & Essential Oils",
      url: "https://www.shaktisandal.com/", metric: "3X", metricLabel: "Visibility impact",
      tagline: "From invisible to a global-intent competitor.",
      summary: "A deep dive into how a traditional organic supplier achieved global search visibility through the Done-for-Me Setup.",
      challengeTitle: "The challenge: online but invisible",
      challengeNote: "Insight: having a URL is not a digital strategy.",
      challenge: [
        "Minimalist website — a brochure-style single page with zero SEO structure.",
        "Invisible to search — not readable by AI tools or high-intent B2B searches.",
        "Passive presence — unoptimised profiles led to missed opportunities.",
      ],
      strategy: [
        { title: "B2B Authority Hub", text: "Expanded from 1 page to 9 pages of SEO-optimised authority content with built-in inquiry capture." },
        { title: "AI Readability", text: "Engineered product descriptions and long-form content specifically for search & AI discovery tools." },
        { title: "Multi-Channel Scale", text: "Synchronised visibility across the GlobalLinker Marketplace and the Indian Business Portal." },
      ],
      results: [
        "Received a high-intent international lead from Italy directly through optimised marketplace discovery.",
        "The system now works as an engineered \"Digital Store\" — visibility through intelligence, not just design.",
      ],
      impact: [
        ["Digital Infrastructure", "1 basic page", "9-page authority hub"],
        ["Search Discoverability", "Passive / invisible", "Active AI & SEO mapping"],
        ["Market Reach", "Localised", "Global leads from Europe / Italy"],
      ],
    },
    {
      id: "cs2", n: "02", company: "Lakshita Organics", industry: "Agriculture & Organic Exports",
      url: "https://lakshitaorganic.linker.store/", metric: "3X", metricLabel: "Visibility impact",
      tagline: "Building a high-trust export ecosystem for global discovery.",
      summary: "Building an export-ready architecture for global scale — turning the \"invisible exporter\" into a discoverable international supplier.",
      challengeTitle: "The \"invisible exporter\"",
      challengeNote: "Challenge: quality doesn't convert without discovery.",
      challenge: [
        "No search visibility — high-quality products remained hidden from global buyers.",
        "Trust-signal deficit — no digital verification for certifications or process transparency.",
        "Capture failure — no centralised system for RFQ or inquiry management.",
      ],
      strategy: [
        { title: "Compliance First", text: "Built-in certification hubs and sustainability-sourcing transparency to build instant buyer trust." },
        { title: "Process Clarity", text: "Detailed step-by-step export roadmaps designed to reduce buyer friction and establish reliability." },
        { title: "Keyword Mapping", text: "Strategic alignment for high-intent searches in USA, Europe and Middle East buyer markets." },
      ],
      results: [
        "USA market inquiry received via the marketplace.",
        "Increased frequency of sample requests through inquiry capture.",
        "Brand authority — a professional presence that mirrors export capability.",
      ],
      impact: [
        ["Search Visibility", "None", "Indexed on Google & AI"],
        ["Buyer Trust", "Low", "High-credibility export brand"],
        ["Lead Flow", "Passive", "Active inquiries + RFQs"],
        ["Market Reach", "Offline", "Global targeting"],
      ],
    },
  ];
  const caseInsights = [
    { q: "\"We already have a website. Isn't that enough?\"", a: "A website is a destination, but without an ecosystem — SEO, AI-readability and marketplace integration — it remains a \"brochure in a drawer.\" Visibility requires intelligence to reach high-intent global buyers." },
    { q: "\"How does AI impact our B2B discovery?\"", a: "Modern buyers use AI discovery tools. DFM content is engineered with structured metadata and industry application mapping, so your business is readable by the tools buyers use to source suppliers." },
    { q: "\"What is the core principle of the DFM package?\"", a: "Build trust first, visibility second. Conversions naturally follow. We focus on trust signals like compliance and export roadmaps to eliminate buyer friction before the first inquiry is even sent." },
    { q: "\"Is this a marketing package?\"", a: "No — it is an infrastructure package. We build the \"Digital Store\" (website, content, discoverability and trust mechanisms) so that when marketing happens, it lands on a professional foundation." },
  ];

  // ---- Official GlobalLinker links (shared by all Growth Partners) ----
  const officialLinks = [
    { id: "ol-dfm", title: "Done-for-Me Setup Page", sub: "The product & checkout page", url: "https://seller.globallinker.com/products/done-for-me-b2b-website-and-digital-catalog-set-up", icon: "Package" },
    { id: "ol-mkt", title: "GlobalLinker Marketplace", sub: "Where buyers discover suppliers", url: "https://www.globallinker.com/", icon: "Store" },
    { id: "ol-ibp", title: "Indian Business Portal", sub: "Powered by FIEO", url: "https://www.indianbusinessportal.in/", icon: "Globe" },
    { id: "ol-panel", title: "GlobalLinker Seller Panel", sub: "Seller dashboard & login", url: "https://seller.globallinker.com/", icon: "LayoutDashboard" },
  ];

  window.GLContent = { PRICE, modules, aiDemo, scripts, messages, objections, faqs, websites, quickActions, caseStudies, caseInsights, officialLinks };
})();
