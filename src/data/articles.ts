import { Article, Comment } from '../types';

export const ARTICLES: Article[] = [
  {
    id: 'art-01',
    slug: 'neural-loom-ai-future-wearable-fashion',
    title: 'The Neural Loom: How Generative Intelligence is Rewriting British Sartorial Design',
    subtitle: 'From algorithmic pattern cutting to ambient biometric threads, artificial intelligence is transitioning from tech laboratories directly into modern wardrobe staples.',
    excerpt: 'Inside the London ateliers where neural networks collaborate with Master Cutters to engineer garments that adapt in real time to the wearer’s posture, climate, and circadian rhythms.',
    content: [
      'In a quiet studio overlooking the Regent’s Canal in East London, the rhythmic clack of a traditional handloom blends with the hum of a liquid-cooled neural computing cluster. Here, British tailoring is undergoing its most radical transformation since the industrial revolution.',
      'Rather than relying on static standard sizing blocks, the design team uses parametric generative models to calculate drape, seam tension, and thermal permeability down to individual micron fibres. The garment is no longer a static piece of cloth cut from a roll; it is an intelligent substrate.',
      '“We spent two centuries treating clothing as passive insulation or decorative display,” explains Dr. Helena Vance, Head of Material Computing at the London Royal College of Fashion. “Today, with low-power micro-controllers and conductive silk threads woven directly into the weave, your coat understands whether you are briskly walking past Oxford Circus in an autumn gale or sitting in an overheated underground carriage.”',
      'The implications for sustainability are profound. Traditional fast fashion operates on a 40% overproduction margin. Algorithmic generative tailoring eliminates inventory waste by generating one-off zero-waste cutting patterns that assemble in under fifteen minutes with laser-guided ultrasonic stitchers.',
      'Yet for all the technology, the aesthetic remains grounded in timeless British restraint. There are no garish screens or flashing LEDs. Intelligence in modern dress is tactile, silent, and felt entirely in the flawless drape and effortless temperature regulation of the cloth.'
    ],
    takeaways: [
      'Zero-waste generative pattern calculation reduces textile waste by up to 38% compared to traditional grade-block cutting.',
      'Sub-millimetre biometric threads monitor posture, skin conductance, and micro-climate without external battery packs.',
      'British luxury houses are marrying centuries-old Savile Row wools with conductive graphene yarn for all-weather durability.',
      'The shift moves fashion away from seasonal disposable drops toward evolving, bespoke modular wardrobe investments.'
    ],
    pullQuote: {
      quote: 'The highest achievement of technology in wardrobe design is its complete disappearance into natural beauty and uncompromised comfort.',
      attribution: 'Aidas K., Editor-in-Chief'
    },
    category: 'ACCESSORIES',
    tags: ['AI & Wearables', 'Material Science', 'Smart Fashion', 'Future Craft'],
    author: {
      name: 'Aidas K.',
      role: 'Founder & Editor-in-Chief',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80',
      bio: 'Fashion critic and technologist based in Marylebone, London. Chronicling the convergence of computational design and artisanal tailoring.'
    },
    publishedAt: '20 Oct 2026',
    readTime: '6 min read',
    coverImage: '/assets/aistudio/Ekranui-image_a65d9c67.png',
    imageCaption: 'Neural generative modeling interfaces visualizing ambient sensory feedback loops in textile engineering.',
    featured: true,
    trending: true,
    likes: 342,
    commentsCount: 18
  },
  {
    id: 'art-02',
    slug: 'architectural-fluidity-womens-autumn-tailoring',
    title: 'Architectural Fluidity: The Autumn/Winter 2026 Shift Toward Responsive Tailoring',
    subtitle: 'Relaxed structure, sculptural lapels, and double-faced merino wools dominate the latest women’s collections from Mayfair to Milan.',
    excerpt: 'The rigid power suit has dissolved into soft, kinetic tailoring designed for unrestricted movement and effortless command in modern working life.',
    content: [
      'The dominant silhouette for this season is neither restrictive nor slouchy. It occupies a sophisticated middle ground that designers are terming "architectural fluidity" — sharp shoulders anchored by unlined, cascading bodies of double-faced merino wool and fluid silk crepe.',
      'Women’s tailoring in London has discarded stiff canvas interfacings in favour of floating horsehair chest pieces and laser-perforated breathable linings. The result is a jacket that retains its razor-sharp outline when walking into a boardroom, yet feels as weightless as a dressing gown when seated.',
      'Colour palettes this season eschew predictable charcoal for rich mineral tones: wet slate, oxidized copper, deep peat brown, and chalky bone white. When layered tone-on-tone, these hues evoke the rugged landscapes of the Scottish Highlands translated into metropolitan refinement.',
      'Pairing these sculptural blazers with wide-leg pleated trousers cut with high-rise waistbands creates a clean vertical line that flatters every frame without requiring constrictive underpinnings.'
    ],
    takeaways: [
      'Unstructured double-faced wools provide natural thermal insulation without synthetic bulk.',
      'Tonal layering in mineral earth tones creates an elongated, understated visual silhouette.',
      'High-rise fluid trousers with deep forward pleats allow seamless transition from morning meetings to evening gallery openings.'
    ],
    pullQuote: {
      quote: 'True luxury today is the absence of friction between what you wear and how you move.',
      attribution: 'Clara Sterling, Senior Fashion Editor'
    },
    category: 'WOMEN',
    tags: ['Women', 'Tailoring', 'Minimalism', 'London Style'],
    author: {
      name: 'Clara Sterling',
      role: 'Senior Fashion Editor',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80',
      bio: 'Former Vogue contributor covering European fashion weeks, sustainable luxury houses, and British textile heritage.'
    },
    publishedAt: '18 Oct 2026',
    readTime: '5 min read',
    coverImage: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&h=800&q=80',
    imageCaption: 'Sculptural trench and relaxed double-breasted blazer captured on St. James’s Street, London.',
    featured: false,
    trending: true,
    likes: 189,
    commentsCount: 9
  },
  {
    id: 'art-03',
    slug: 'technical-savile-row-waterproof-flannel',
    title: 'Technical Savile Row: How Waterproof Membranes Met Bespoke British Flannel',
    subtitle: 'The historic Mayfair street embraces nanofiber lamination to create suits that withstand relentless downpours without losing their natural drape.',
    excerpt: 'Traditionalists were skeptical, but the marriage of Fox Brothers heavy flannel with microporous breathable membranes has created the ultimate UK transit suit.',
    content: [
      'For over two centuries, walking down Savile Row meant choosing between two absolutes: the unmatched elegance of heritage British wools, or the synthetic weather resistance of modern technical sportswear.',
      'Now, a quiet revolution has reconciled the two. Working with textile scientists in Yorkshire, several historic houses have introduced an invisible, bio-based membrane laminated to the underside of 370-gram wool flannel.',
      'Rain beads off the cloth’s surface exactly as it would on high-altitude alpine Gore-Tex, yet the face fabric retains the rich, fuzzy handle, matte finish, and deep drape of traditional bespoke tailoring.',
      '“A client can cycle from South Kensington to the City in a torrential October squall, walk straight into a partner meeting, and shake off water droplets with a simple flick of the sleeve,” notes Master Tailor Edward Finch.'
    ],
    takeaways: [
      'Hydrophobic nanocoatings are applied at yarn stage, preserving 100% of the wool’s natural breathability.',
      'Under-collar hidden storm tabs allow lapels to be buttoned to the throat during sudden cloudbursts.',
      'Internal zippered device pockets lined with Faraday-mesh shield electronic keycards from demagnetization.'
    ],
    pullQuote: {
      quote: 'Heritage is not worshipping the ashes; it is preserving the fire while upgrading the tools.',
      attribution: 'Edward Finch, Bespoke Master Tailor'
    },
    category: 'MEN',
    tags: ['Men', 'Savile Row', 'Technical Suiting', 'British Heritage'],
    author: {
      name: 'Oliver Thorne',
      role: 'Menswear & Horology Lead',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80',
      bio: 'Investigating menswear craftsmanship, British heritage mills, and the evolution of modern functional suiting.'
    },
    publishedAt: '16 Oct 2026',
    readTime: '7 min read',
    coverImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&h=800&q=80',
    imageCaption: 'A hand-finished charcoal flannel suit featuring internal storm-shield lamination in London.',
    featured: false,
    trending: false,
    likes: 215,
    commentsCount: 12
  },
  {
    id: 'art-04',
    slug: 'sub-millimetre-intelligence-smart-jewellery-rings',
    title: 'Quiet Intelligence: The Sub-Millimetre Sensor Era in Fine Jewellery',
    subtitle: 'Ceramic signet rings, titanium bands, and sapphire crystal wearables that track vital signs without distracting screens or buzzing haptics.',
    excerpt: 'The backlash against glowing wrist-mounted notifications has birthed a new aesthetic: fine jewellery that conceals advanced medical-grade sensors.',
    content: [
      'The modern professional is suffering from notification fatigue. The early era of smartwatches — characterized by buzzing wrists, illuminated rectangular screens, and constant digital interruptions — is giving way to what designers call "ambient jewellery".',
      'Crafted from hypoallergenic zirconia ceramics, brushed Grade 5 titanium, and hand-cut smoky quartz, the latest generation of smart rings and cufflinks contains optical PPG sensors, skin temperature thermistors, and triple-axis accelerometers that monitor recovery without ever demanding your active attention.',
      'Data is synced silently in the background when placed on an inductive marble charging tray at bedtime. During the day, the object simply appears as a tasteful, timeless piece of artisanal jewellery.',
      'In London’s Hatton Garden, traditional gem setters are now partnering with micro-electronics engineers to embed sensor clusters beneath bezel-set cabochons, proving that discreet elegance and cutting-edge biometrics can coexist harmoniously.'
    ],
    takeaways: [
      'Zirconia ceramic offers superior scratch resistance and RF permeability compared to traditional precious metals.',
      'Screenless designs foster deeper cognitive focus and reduce habitual screen checking.',
      'Continuous overnight biometric monitoring provides accurate autonomic nervous system recovery insights.'
    ],
    pullQuote: {
      quote: 'When an object is truly intelligent, it does not scream for your attention. It quietly serves your wellbeing in silence.',
      attribution: 'Maya Lin, Industrial Design Director'
    },
    category: 'ACCESSORIES',
    tags: ['Accessories', 'Smart Rings', 'Jewellery', 'Wearable Tech'],
    author: {
      name: 'Maya Lin',
      role: 'Design & Accessories Critic',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80',
      bio: 'Industrial designer and critic focused on the intersection of personal accessories, ergonomics, and micro-engineering.'
    },
    publishedAt: '15 Oct 2026',
    readTime: '4 min read',
    coverImage: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&h=800&q=80',
    imageCaption: 'Matte black zirconia ceramic and brushed titanium rings concealing optical sensor arrays.',
    featured: false,
    trending: true,
    likes: 298,
    commentsCount: 14
  },
  {
    id: 'art-05',
    slug: 'the-minimalist-capsule-wardrobe-2026',
    title: 'The Intentional Capsule: 9 Pieces for an Uncluttered Modern Wardrobe',
    subtitle: 'How a disciplined curation of high-gauge knitwear, tailored trousers, and modular outerwear simplifies daily decision fatigue.',
    excerpt: 'A comprehensive guide to building a seasonal capsule wardrobe that pairs every item effortlessly with everything else.',
    content: [
      'The modern paradox of choice is nowhere more pronounced than in the overflowing morning wardrobe. Despite owning dozens of garments, the average urban professional rotates through fewer than ten core staples on a weekly basis.',
      'The intentional capsule is not about ascetic deprivation; it is an exercise in rigorous curation. By investing in nine foundational pieces crafted from exceptional natural fibres — Sea Island cotton, Scottish cashmere, heavy Japanese denim, and double-twist wool — getting dressed becomes an act of calm clarity.',
      'Key to the philosophy is the principle of modular interoperability. Every trouser must pair with every knit; every coat must accommodate both an unbuttoned shirt and a heavy roll-neck sweater.',
      'We break down the nine essential silhouettes, provide fabric care protocols that extend garment lifespan to decades, and examine why buying less, but substantially better, transforms your daily psychological equilibrium.'
    ],
    takeaways: [
      'A neutral palette of charcoal, navy, oatmeal, and deep espresso maximizes cross-garment compatibility.',
      'High-gauge 12-ply knitwear holds its shape across years of wear with proper cedar block storage.',
      'Modular layering pieces eliminate the need for bulky winter-only coats in temperate city climates.'
    ],
    pullQuote: {
      quote: 'Simplicity is not about having less. It is about making room for what matters.',
      attribution: 'Aidas.uk Editorial Manifesto'
    },
    category: 'WOMEN',
    tags: ['Women', 'Capsule Wardrobe', 'Sustainable Style', 'Everyday Luxury'],
    author: {
      name: 'Clara Sterling',
      role: 'Senior Fashion Editor',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80',
      bio: 'Former Vogue contributor covering European fashion weeks, sustainable luxury houses, and British textile heritage.'
    },
    publishedAt: '12 Oct 2026',
    readTime: '6 min read',
    coverImage: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1200&h=800&q=80',
    imageCaption: 'Oatmeal cashmere knit paired with high-waisted tailored wool trousers in morning light.',
    featured: false,
    trending: false,
    likes: 167,
    commentsCount: 7
  },
  {
    id: 'art-06',
    slug: 'the-urban-transit-uniform-modular-menswear',
    title: 'The Urban Transit Uniform: Modular Outerwear for the Shifting UK Climate',
    subtitle: 'Technical shell jackets, magnetic storm plackets, and temperature-regulating merino linings built for British rain and commuter train platforms.',
    excerpt: 'Navigating London across October and November requires gear that handles rapid shifts from 4°C winds on Westminster Bridge to 22°C carriage heat.',
    content: [
      'Anyone who has commuted through London in late autumn understands the thermal dilemma: freezing on an exposed train platform, drenched by sudden rain squalls on Waterloo Bridge, and then suffocating in the humid warmth of a packed Tube carriage.',
      'The response from modern technical menswear designers is the modular transit system. Using high-density 3-layer weatherproof laminate shells combined with magnetic Fidlock closures, these coats can be vented with a single flick of one hand.',
      'Interior carry-straps allow the coat to be slung over the shoulder like a messenger bag when entering indoor stations, freeing both hands for a briefcase or umbrella.',
      'Hidden waterproof device compartments are lined with microfiber fleece to prevent screen scratching, while bonded seams guarantee zero water ingress through years of daily metropolitan commuting.'
    ],
    takeaways: [
      '3-layer waterproof membranes with 20,000mm hydrostatic head ratings resist persistent UK rainfall.',
      'Magnetic mechanical buckles allow effortless opening even while wearing heavy winter gloves.',
      'Internal sling webbing transforms outer coats into hands-free transit carriers indoors.'
    ],
    pullQuote: {
      quote: 'Good design anticipates the friction of city life and quietly dissolves it before you notice.',
      attribution: 'Oliver Thorne, Menswear & Horology Lead'
    },
    category: 'MEN',
    tags: ['Men', 'Outerwear', 'Commuter Style', 'Performance Wear'],
    author: {
      name: 'Oliver Thorne',
      role: 'Menswear & Horology Lead',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80',
      bio: 'Investigating menswear craftsmanship, British heritage mills, and the evolution of modern functional suiting.'
    },
    publishedAt: '10 Oct 2026',
    readTime: '5 min read',
    coverImage: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1200&h=800&q=80',
    imageCaption: 'Waterproof storm shell jacket designed for modular London commuting.',
    featured: false,
    trending: false,
    likes: 194,
    commentsCount: 11
  },
  {
    id: 'art-07',
    slug: 'vegetable-tanned-leather-modular-tech-carryall',
    title: 'The Anatomy of the Indestructible Carryall: Vegetable-Tanned Leather and Carbon Weaves',
    subtitle: 'London artisanal ateliers are fusing centuries-old oak bark tanning with lightweight structural carbon-fiber frames.',
    excerpt: 'A bag built to last forty years while securely isolating laptops, cables, and travel documents in bespoke shock-absorbing compartments.',
    content: [
      'In an industrial brick warehouse in Bermondsey, leather artisan Marcus Croft runs his thumb across a hide that has spent fourteen months soaking in oak bark tanning pits in Devon. The leather smells of forest earth, beeswax, and wood smoke.',
      'Yet inside the bag he is crafting sits a structural spine engineered from ultra-lightweight carbon-fiber weave, identical to components found in aerospace cockpits. The combination produces a briefcase that weighs under 900 grams while protecting sensitive electronics from drops of over two metres.',
      '“Modern bags often fail in two ways,” Croft observes. “They are either heavy, delicate luxury leather that scratches if you look at it, or utilitarian nylon that looks like you are hiking Mount Everest on your way to a client pitch. We wanted something that gains a rich, golden patina with age while performing with modern precision.”',
      'Solid brass hardware turned on vintage English lathes, hand-burnished beeswax edges, and modular magnetized pouches complete a piece of travel luggage designed to be passed down through generations.'
    ],
    takeaways: [
      'Devon oak bark tanning is the slowest and most durable leather preservation method known.',
      'Integrated carbon-fiber frame prevents bag sagging when carrying heavy laptops and chargers.',
      'Modular interior organization sleeves detach instantly for airport security checks.'
    ],
    pullQuote: {
      quote: 'When you buy something made with this degree of intention, you stop thinking about shopping for replacements.',
      attribution: 'Marcus Croft, Bermondsey Atelier'
    },
    category: 'ACCESSORIES',
    tags: ['Accessories', 'Leather Goods', 'Craftsmanship', 'London Made'],
    author: {
      name: 'Maya Lin',
      role: 'Design & Accessories Critic',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80',
      bio: 'Industrial designer and critic focused on the intersection of personal accessories, ergonomics, and micro-engineering.'
    },
    publishedAt: '08 Oct 2026',
    readTime: '6 min read',
    coverImage: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&h=800&q=80',
    imageCaption: 'Full-grain vegetable-tanned leather carryall with solid brass fittings in Bermondsey studio.',
    featured: false,
    trending: false,
    likes: 276,
    commentsCount: 15
  },
  {
    id: 'art-08',
    slug: 'the-mechanical-future-independent-british-horology',
    title: 'Precision & Permanence: The Rebirth of Independent British Watchmaking',
    subtitle: 'From Clerkenwell to the Isle of Man, a new cohort of watchmakers is machining calibres that challenge the Swiss monopoly.',
    excerpt: 'Britain was once the world capital of horology. Today, independent watchmakers are reclaiming the craft with in-house escapements and hand-guilloché dials.',
    content: [
      'For decades, British horology was viewed as a romantic footnote of the 18th century — the era of John Harrison and Thomas Mudge. If you wanted a serious mechanical wristwatch, you inevitably looked toward Geneva, Le Locle, or Glashütte.',
      'Over the past five years, that narrative has shifted decisively. In Clerkenwell workshops and purpose-built Isle of Man studios, independent watchmakers are hand-turning solid silver dials on rose-engine lathes and hardening blued-steel hands over open flames.',
      'What sets this British renaissance apart is a distinct design ethos: restrained typography, English-finished frosted movement bridges, and an uncompromising dedication to repairability that guarantees these timepieces can be serviced a century from now.',
      'We go inside three independent workshops to witness the 400 hours of painstaking hand labour required to complete a single wristwatch.'
    ],
    takeaways: [
      'English frosted gilt movement plates provide a warm, historic aesthetic distinct from Swiss Geneva stripes.',
      'Hand-guilloché silver dials reflect light with three-dimensional depth unattainable through automated stamping.',
      'Strictly limited production runs of fewer than 50 pieces annually ensure collector provenance.'
    ],
    pullQuote: {
      quote: 'A mechanical watch is one of the few physical objects you can wear every day that will outlive your grandchildren.',
      attribution: 'Oliver Thorne, Menswear & Horology Lead'
    },
    category: 'ACCESSORIES',
    tags: ['Accessories', 'Horology', 'British Watches', 'Timepieces'],
    author: {
      name: 'Oliver Thorne',
      role: 'Menswear & Horology Lead',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80',
      bio: 'Investigating menswear craftsmanship, British heritage mills, and the evolution of modern functional suiting.'
    },
    publishedAt: '05 Oct 2026',
    readTime: '8 min read',
    coverImage: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&h=800&q=80',
    imageCaption: 'Hand-finished manual wind movement undergoing final regulation in Clerkenwell.',
    featured: false,
    trending: false,
    likes: 310,
    commentsCount: 22
  }
];

export const INITIAL_COMMENTS: Comment[] = [
  {
    id: 'c-1',
    articleId: 'art-01',
    author: 'James H. Thornton',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&h=100&q=80',
    date: '20 Oct 2026',
    text: 'A brilliant exploration of computational tailoring. Seeing traditional mills in the UK adapt to algorithmic patterns rather than fighting them is exactly how British craft survives into the next century.',
    likes: 14
  },
  {
    id: 'c-2',
    articleId: 'art-01',
    author: 'Eleanor Sterling-Ward',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80',
    date: '20 Oct 2026',
    text: 'The zero-waste cutting algorithms mentioned here are already saving so much yardage in sample development. Essential reading for every contemporary design studio.',
    likes: 8
  },
  {
    id: 'c-3',
    articleId: 'art-02',
    author: 'Sophia Chen',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&h=100&q=80',
    date: '19 Oct 2026',
    text: 'The double-faced wool coats in earthy slate tones have been my staple for two seasons now. Unlined tailoring completely changes how a woman carries herself throughout a twelve-hour workday.',
    likes: 12
  },
  {
    id: 'c-4',
    articleId: 'art-04',
    author: 'Dr. Aris Thorne',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80',
    date: '16 Oct 2026',
    text: 'Screen fatigue is a very real clinical phenomenon. The shift toward silent, tactile ambient jewellery that gathers biometrics without dinging notifications is the healthiest tech trend we have seen in years.',
    likes: 21
  }
];
