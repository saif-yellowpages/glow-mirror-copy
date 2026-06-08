export type Subcategory = { slug: string; name: string; desc: string };
export type Category = {
  slug: string;
  name: string;
  tagline: string;
  desc: string;
  color: string; // tailwind class e.g. "bg-c-coral"
  subcategories: Subcategory[];
};

export const categories: Category[] = [
  {
    slug: "dtf-printing",
    name: "DTF Printing",
    tagline: "Direct-to-film, vivid on anything.",
    desc: "DTF prints for apparel, fabric and accessories — soft-hand finish, durable wash and brilliant colour.",
    color: "bg-c-coral",
    subcategories: [
      { slug: "t-shirt-printing", name: "T-Shirt Printing", desc: "Custom DTF t-shirts in any colour or quantity." },
      { slug: "dtf-stickers-printing", name: "DTF Stickers Printing", desc: "Heat-transfer stickers for fabrics and apparel." },
      { slug: "hoodie-sweatshirt-printing", name: "Hoodie & Sweatshirt Printing", desc: "Premium DTF prints on hoodies and sweatshirts." },
      { slug: "polo-shirt-printing", name: "Polo Shirt Printing", desc: "Corporate polo shirts, fully customised." },
      { slug: "cap-printing", name: "Cap Printing", desc: "Branded caps and headwear in bulk." },
      { slug: "bag-printing", name: "Bag Printing", desc: "Tote, drawstring and shopping bags printed to order." },
      { slug: "fabric-printing", name: "Fabric Printing", desc: "Custom fabric prints by the meter or piece." },
      { slug: "footwear-printing", name: "Footwear Printing", desc: "Branded shoes and footwear customisation." },
      { slug: "promotional-apparel-printing", name: "Promotional Apparel Printing", desc: "Event giveaway apparel printed at scale." },
      { slug: "event-t-shirt-printing", name: "Event T-Shirt Printing", desc: "Bulk event tees with fast turnaround." },
      { slug: "uv-dtf-printing", name: "UV DTF Printing", desc: "UV DTF for hard surfaces — bottles, mugs, cases." },
      { slug: "uniform-dtf-printing", name: "Uniform DTF Printing", desc: "Staff uniforms branded with your logo." },
    ],
  },
  {
    slug: "offset-printing",
    name: "Offset Printing",
    tagline: "High-volume, high-fidelity colour.",
    desc: "Sharp, consistent offset printing for brochures, stationery and corporate collateral.",
    color: "bg-c-cobalt text-c-cream",
    subcategories: [
      { slug: "paper-bag-printing", name: "Paper Bag Printing", desc: "Custom branded paper bags in any size." },
      { slug: "flyer-brochure-printing", name: "Flyer & Brochure Printing", desc: "High-volume folded brochures and flyers." },
      { slug: "booklet-printing", name: "Booklet Printing", desc: "Saddle-stitched and perfect-bound booklets." },
      { slug: "letterhead-printing", name: "Letterhead Printing", desc: "Corporate letterheads on premium stock." },
      { slug: "business-card-printing", name: "Business Card Printing", desc: "Crisp, consistent business cards in bulk." },
      { slug: "envelope-printing", name: "Envelope Printing", desc: "Branded envelopes in any size or colour." },
    ],
  },
  {
    slug: "digital-printing",
    name: "Digital Printing",
    tagline: "Short runs, same-day turnaround.",
    desc: "On-demand digital printing — perfect for events, prototypes and quick-turn corporate jobs.",
    color: "bg-c-marigold",
    subcategories: [
      { slug: "flyer-printing", name: "Flyer Printing", desc: "Single and double-sided flyers, any quantity." },
      { slug: "booklet-printing", name: "Booklet Printing", desc: "Short-run booklets and manuals." },
      { slug: "magazine-printing", name: "Magazine Printing", desc: "Magazines and journals in small quantities." },
      { slug: "business-card-printing", name: "Business Card Printing", desc: "Same-day digital business cards." },
      { slug: "folder-printing", name: "Folder Printing", desc: "Presentation folders with custom die-cut pockets." },
      { slug: "banner-printing", name: "Banner Printing", desc: "Indoor banners on vinyl or fabric." },
      { slug: "sticker-printing", name: "Sticker Printing", desc: "Cut-to-shape stickers and labels." },
      { slug: "note-pad-printing", name: "Note Pad Printing", desc: "Branded notepads and writing pads." },
      { slug: "id-card-printing", name: "ID Card Printing", desc: "Plastic ID cards with photo and barcode." },
    ],
  },
  {
    slug: "promotional-items",
    name: "Promotional Items",
    tagline: "Gifts your clients actually keep.",
    desc: "Branded corporate gifts, giveaways and event items — sourced and customised in-house.",
    color: "bg-c-mint",
    subcategories: [
      { slug: "mug-printing", name: "Mug Printing", desc: "Ceramic and travel mugs with custom branding." },
      { slug: "medal-printing", name: "Medal Printing", desc: "Sports and recognition medals." },
      { slug: "pen-printing", name: "Pen Printing", desc: "Branded pens for events and corporate gifts." },
      { slug: "bottle-printing", name: "Bottle Printing", desc: "Reusable water bottles and tumblers." },
      { slug: "momento-printing", name: "Momento Printing", desc: "Acrylic and crystal mementos." },
      { slug: "badge-printing", name: "Badge Printing", desc: "Pin badges, button badges and name badges." },
      { slug: "epoxy-printing", name: "Epoxy Printing", desc: "Resin-coated keychains and giveaways." },
      { slug: "vehicle-sun-shade-printing", name: "Vehicle Sun Shade Printing", desc: "Branded sun shades for promotions." },
      { slug: "corporate-gifts", name: "Corporate Gifts", desc: "Curated gift sets for clients and staff." },
      { slug: "exhibition-display-stands", name: "Exhibition Display Stands", desc: "Branded promotional stands for events." },
    ],
  },
  {
    slug: "sign-boards",
    name: "Sign Boards",
    tagline: "Signs that get you noticed.",
    desc: "Indoor, outdoor and illuminated sign boards — fabricated and installed across the UAE.",
    color: "bg-c-plum text-c-cream",
    subcategories: [
      { slug: "3d-signage", name: "3D Signage", desc: "Dimensional letters and built-up sign boards." },
      { slug: "wooden-signage", name: "Wooden Signage", desc: "Crafted wooden signs with engraved branding." },
      { slug: "office-signage", name: "Office Signage", desc: "Reception walls, door signs and wayfinding." },
      { slug: "shop-signage", name: "Shop Signage", desc: "Storefront and retail shop signs." },
      { slug: "name-plate-printing", name: "Name Plate Printing", desc: "Door and desk name plates." },
      { slug: "direction-signage", name: "Direction Signage", desc: "Wayfinding and directional signs." },
      { slug: "acp-signage", name: "ACP Signage", desc: "Aluminium composite panel sign boards." },
      { slug: "acrylic-signage", name: "Acrylic Signage", desc: "Routed and laser-cut acrylic signs." },
      { slug: "construction-site-signage", name: "Construction Site Signage", desc: "Project boards, hoardings and site signage." },
      { slug: "joinery-work", name: "Joinery Work", desc: "Custom carpentry and fit-out joinery." },
    ],
  },
  {
    slug: "large-format-digital-printing",
    name: "Large Format Digital Printing",
    tagline: "Big formats, sharp finish.",
    desc: "Hoardings, banners, vehicle graphics and event displays — large-format printing up to 5m wide.",
    color: "bg-c-coral",
    subcategories: [
      { slug: "hoarding", name: "Hoarding", desc: "Large construction and event hoardings." },
      { slug: "small-hoarding", name: "Small Hoarding", desc: "Compact hoarding panels for small sites." },
      { slug: "flag-stitching", name: "Flag Stitching", desc: "Custom stitched flags and banners." },
      { slug: "banner-printing", name: "Banner Printing", desc: "Outdoor weatherproof vinyl banners." },
      { slug: "flex-printing", name: "Flex Printing", desc: "High-resolution flex banner printing." },
      { slug: "flags-and-flag-pole-printing", name: "Flags & Flag Pole Printing", desc: "Printed flags with poles and bases." },
      { slug: "vehicle-stickers-printing", name: "Vehicle Stickers Printing", desc: "Cut and printed vehicle decals." },
      { slug: "event-graphics", name: "Event Graphics", desc: "Backdrops, step-and-repeats and stage graphics." },
      { slug: "display-stands", name: "Display Stands", desc: "Roll-ups, pop-ups and modular display stands." },
      { slug: "wooden-stands", name: "Wooden Stands", desc: "Custom-fabricated wooden display stands." },
      { slug: "metal-stands", name: "Metal Stands", desc: "Heavy-duty metal display stands." },
    ],
  },
];

export const socialLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/company/colours-advertising-agency", handle: "Colours Advertising Agency" },
  { name: "Instagram", url: "https://www.instagram.com/colours_adv_agency/", handle: "@colours_adv_agency" },
  { name: "Facebook", url: "https://www.facebook.com/colorsadvertisingagency/", handle: "Colours Advertising Agency" },
  { name: "YouTube", url: "https://www.youtube.com/@colours_advertising", handle: "@colours_advertising" },
  { name: "Pinterest", url: "https://www.pinterest.com/coloursdigitalmarketing1/", handle: "coloursdigitalmarketing1" },
  { name: "TikTok", url: "https://www.tiktok.com/@colors.advertisin", handle: "@colors.advertisin" },
];

export const contactInfo = {
  address: "Shop - 3, D Block, 7th Street, MW5, Musaffah, Abu Dhabi",
  phone: "+971 50 000 0000",
  whatsapp: "+971500000000",
  email: "info@coloursadvertising.ae",
  mapsQuery: "MW5+Musaffah+Abu+Dhabi",
};
