import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "public", "lizards-species");
await fs.mkdir(outDir, { recursive: true });

// 50 Verified Lizard Species Dataset
const speciesList = [
  { rank: 1, common: "Komodo Dragon", scientific: "Varanus komodoensis", family: "Varanidae", region: "Komodo, Rinca, Flores (Indonesia)", habitat: "Dry savannahs, tropical deciduous forests, arid coastal hills", diet: "Carnivore (deer, pigs, water buffalo, carrion)", size: "Up to 3.0 m (10 ft); up to 135 kg (300 lb)", lifespan: "30+ years", status: "Endangered (IUCN)", venomous: "Yes (anticoagulant oral venom)", pet: "No (strictly protected)" },
  { rank: 2, common: "Asian Water Monitor", scientific: "Varanus salvator", family: "Varanidae", region: "South & Southeast Asia, India", habitat: "Mangroves, rivers, swamps, canals, estuaries", diet: "Carnivore (fish, frogs, rodents, crabs, birds)", size: "1.5–2.0 m (5–6.6 ft); up to 50 kg", lifespan: "15–25 years", status: "Least Concern", venomous: "Mild venom", pet: "Experienced only" },
  { rank: 3, common: "Perentie", scientific: "Varanus giganteus", family: "Varanidae", region: "Arid central & western Australia", habitat: "Rocky outcrops, desert gorges, spinifex sandplains", diet: "Carnivore (reptiles, small mammals, birds)", size: "Up to 2.5 m (8.2 ft); 15–20 kg", lifespan: "15–20+ years", status: "Least Concern", venomous: "Mild venom", pet: "No" },
  { rank: 4, common: "Crocodile Monitor", scientific: "Varanus salvadorii", family: "Varanidae", region: "New Guinea", habitat: "High-canopy lowland rainforests, mangrove swamps", diet: "Carnivore (birds, eggs, arboreal mammals)", size: "Up to 2.5 m (8.2 ft) with extremely long tail", lifespan: "15–20 years", status: "Least Concern", venomous: "Mild venom", pet: "No" },
  { rank: 5, common: "Nile Monitor", scientific: "Varanus niloticus", family: "Varanidae", region: "Sub-Saharan Africa", habitat: "Rivers, lakes, swamps, reed beds", diet: "Carnivore (fish, molluscs, crocodile eggs, crabs)", size: "1.5–2.2 m (5–7.2 ft)", lifespan: "15–20 years", status: "Least Concern", venomous: "Mild venom", pet: "Not recommended" },
  { rank: 6, common: "Bengal Monitor", scientific: "Varanus bengalensis", family: "Varanidae", region: "Indian Subcontinent, Southeast Asia", habitat: "Agricultural scrub, riverbanks, deciduous forests", diet: "Carnivore (insects, snails, rodents, small snakes)", size: "1.0–1.75 m (3.3–5.7 ft)", lifespan: "15–20 years", status: "Least Concern (Protected in India)", venomous: "Mild venom", pet: "Illegal in India" },
  { rank: 7, common: "Green Iguana", scientific: "Iguana iguana", family: "Iguanidae", region: "Central & South America, Caribbean", habitat: "Tropical rainforest canopy near water", diet: "Folivore / Herbivore (leaves, flowers, fruits)", size: "1.5–2.0 m (5–6.6 ft); up to 6 kg", lifespan: "15–20+ years", status: "Least Concern", venomous: "No", pet: "Popular (requires large arboreal space)" },
  { rank: 8, common: "Marine Iguana", scientific: "Amblyrhynchus cristatus", family: "Iguanidae", region: "Galápagos Islands (Ecuador)", habitat: "Rocky volcanic coastlines, shallow intertidal reefs", diet: "Marine algae / Seaweed", size: "0.6–1.3 m (2–4.3 ft)", lifespan: "12–15+ years", status: "Vulnerable (IUCN)", venomous: "No", pet: "No (strictly protected)" },
  { rank: 9, common: "Galápagos Land Iguana", scientific: "Conolophus subcristatus", family: "Iguanidae", region: "Galápagos Islands", habitat: "Arid scrub, volcanic slopes", diet: "Herbivore (prickly pear cactus pads & fruit)", size: "0.9–1.2 m (3–4 ft); up to 13 kg", lifespan: "50–60 years", status: "Vulnerable", venomous: "No", pet: "No" },
  { rank: 10, common: "Rhinoceros Iguana", scientific: "Cyclura cornuta", family: "Iguanidae", region: "Hispaniola (Dominican Republic, Haiti)", habitat: "Dry scrub forests, rocky limestone coasts", diet: "Herbivore (fruits, foliage, seeds)", size: "1.0–1.2 m (3.3–4 ft); up to 9 kg", lifespan: "20–30+ years", status: "Endangered", venomous: "No", pet: "Specialist only" },
  { rank: 11, common: "Argentine Black & White Tegu", scientific: "Salvator merianae", family: "Teiidae", region: "Argentina, Brazil, Paraguay, Uruguay", habitat: "Savannahs, forest edges, semi-deciduous woodlands", diet: "Omnivore (fruits, insects, eggs, small rodents)", size: "1.2–1.4 m (4–4.6 ft); up to 7 kg", lifespan: "15–20 years", status: "Least Concern", venomous: "No", pet: "Popular large pet" },
  { rank: 12, common: "Gila Monster", scientific: "Heloderma suspectum", family: "Helodermatidae", region: "Sonoran Desert (US Southwest, NW Mexico)", habitat: "Arid scrubland, rocky desert washes, desert grassland", diet: "Carnivore (bird & reptile eggs, juvenile mammals)", size: "45–56 cm (18–22 in); 1.5–2.0 kg", lifespan: "20–30+ years", status: "Near Threatened", venomous: "Yes (neurotoxic venom from grooved teeth)", pet: "Regulated / Restricted" },
  { rank: 13, common: "Mexican Beaded Lizard", scientific: "Heloderma horridum", family: "Helodermatidae", region: "Pacific coast Mexico to Guatemala", habitat: "Dry tropical deciduous forests, thorn scrub", diet: "Carnivore (eggs, nestling birds, small mammals)", size: "60–90 cm (24–36 in); up to 3 kg", lifespan: "20–30+ years", status: "Vulnerable", venomous: "Yes (medically significant venom)", pet: "No" },
  { rank: 14, common: "Veiled Chameleon", scientific: "Chamaeleo calyptratus", family: "Chamaeleonidae", region: "Yemen, SW Saudi Arabia", habitat: "Arid plateaus, acacia scrub, mountain wadis", diet: "Insectivore (insects, occasionally leafy greens)", size: "35–60 cm (14–24 in) with casqued crest", lifespan: "5–8 years", status: "Least Concern", venomous: "No", pet: "Popular intermediate pet" },
  { rank: 15, common: "Panther Chameleon", scientific: "Furcifer pardalis", family: "Chamaeleonidae", region: "Northern & eastern Madagascar", habitat: "Coastal tropical rainforests, scrub margins", diet: "Insectivore (crickets, grasshoppers, mantids)", size: "30–50 cm (12–20 in)", lifespan: "4–7 years", status: "Least Concern", venomous: "No", pet: "Popular vibrant pet" },
  { rank: 16, common: "Indian Chameleon", scientific: "Chamaeleo zeylanicus", family: "Chamaeleonidae", region: "India, Sri Lanka, Pakistan", habitat: "Dry deciduous thorn scrub, bamboo thickets", diet: "Insectivore (locusts, grasshoppers, crickets)", size: "25–38 cm (10–15 in)", lifespan: "4–6 years", status: "Least Concern (Protected Schedule IV in India)", venomous: "No", pet: "Illegal in India" },
  { rank: 17, common: "Parson's Chameleon", scientific: "Calumma parsonii", family: "Chamaeleonidae", region: "Eastern Madagascar", habitat: "Humid montane rainforests", diet: "Insectivore / Small vertebrates", size: "Up to 68 cm (27 in); up to 700 g", lifespan: "10–12 years", status: "Near Threatened", venomous: "No", pet: "Rare specialist" },
  { rank: 18, common: "Jackson's Chameleon", scientific: "Trioceros jacksonii", family: "Chamaeleonidae", region: "East Africa (Kenya, Tanzania)", habitat: "Montane cloud forests (1,600–2,400 m elevation)", diet: "Insectivore", size: "20–35 cm (8–14 in) with 3 prominent rostral horns", lifespan: "5–9 years", status: "Least Concern", venomous: "No", pet: "Popular pet" },
  { rank: 19, common: "Brookesia micra (Dwarf Chameleon)", scientific: "Brookesia micra", family: "Chamaeleonidae", region: "Nosy Hara islet (Madagascar)", habitat: "Leaf litter of karst limestone forest floors", diet: "Micro-insects (springtails, tiny mites)", size: "24–29 mm (under 1.2 in total length)", lifespan: "1–3 years", status: "Near Threatened", venomous: "No", pet: "No" },
  { rank: 20, common: "Leopard Gecko", scientific: "Eublepharis macularius", family: "Eublepharidae", region: "Pakistan, NW India, Afghanistan, Iran", habitat: "Rocky arid desert scrub, dry clay grasslands", diet: "Insectivore (mealworms, crickets, roaches)", size: "20–28 cm (8–11 in); 60–90 g", lifespan: "15–20+ years", status: "Least Concern", venomous: "No", pet: "#1 Beginner pet lizard" },
  { rank: 21, common: "Tokay Gecko", scientific: "Gekko gecko", family: "Gekkonidae", region: "India, Southeast Asia", habitat: "Tropical rainforest canopies, village houses", diet: "Carnivore (large insects, smaller geckos, rodents)", size: "28–36 cm (11–14 in); up to 300 g", lifespan: "10–15 years", status: "Least Concern", venomous: "No (feisty defensive bite)", pet: "Experienced handlers" },
  { rank: 22, common: "Crested Gecko", scientific: "Correlophus ciliatus", family: "Diplodactylidae", region: "New Caledonia", habitat: "Dense subtropical forest understory", diet: "Frugivore / Insectivore (nectar, mashed fruit, bugs)", size: "20–25 cm (8–10 in)", lifespan: "15–20 years", status: "Vulnerable", venomous: "No", pet: "Top beginner pet" },
  { rank: 23, common: "Common House Gecko", scientific: "Hemidactylus frenatus", family: "Gekkonidae", region: "Global tropics, native to South & SE Asia", habitat: "Urban homes, walls, outdoor lighting, tree bark", diet: "Insectivore (mosquitoes, moths, flies)", size: "7.5–15 cm (3–6 in)", lifespan: "5–8 years", status: "Least Concern", venomous: "No (completely harmless)", pet: "Wild cohabitant" },
  { rank: 24, common: "Mediterranean House Gecko", scientific: "Hemidactylus turcicus", family: "Gekkonidae", region: "Mediterranean Basin, introduced globally", habitat: "Stone walls, rocky hillsides, buildings", diet: "Insectivore (moths, spiders, termites)", size: "10–13 cm (4–5 in)", lifespan: "5–7 years", status: "Least Concern", venomous: "No", pet: "Wild cohabitant" },
  { rank: 25, common: "Moorish Gecko (Wall Gecko)", scientific: "Tarentola mauritanica", family: "Phyllodactylidae", region: "Western Mediterranean", habitat: "Ruins, cliffs, olive groves, old masonry", diet: "Insectivore", size: "15 cm (6 in)", lifespan: "8–12 years", status: "Least Concern", venomous: "No", pet: "Occasional" },
  { rank: 26, common: "Central Bearded Dragon", scientific: "Pogona vitticeps", family: "Agamidae", region: "Inland arid & semi-arid Australia", habitat: "Mallee scrub, eucalyptus woodlands, spinifex desert", diet: "Omnivore (greens, squash, crickets, roaches)", size: "45–60 cm (18–24 in); 350–550 g", lifespan: "10–15+ years", status: "Least Concern", venomous: "Mild harmless saliva", pet: "Most popular pet worldwide" },
  { rank: 27, common: "Frilled Lizard (Frill-Necked)", scientific: "Chlamydosaurus kingii", family: "Agamidae", region: "Northern Australia, southern New Guinea", habitat: "Tropical savannah woodlands, dry sclerophyll forests", diet: "Insectivore (cicadas, ants, caterpillars, spiders)", size: "70–95 cm (28–37 in); up to 1 kg", lifespan: "10–15 years", status: "Least Concern", venomous: "No", pet: "Specialist only" },
  { rank: 28, common: "Thorny Devil", scientific: "Moloch horridus", family: "Agamidae", region: "Central & Western Australian deserts", habitat: "Arid spinifex sandplains, mallee scrub", diet: "Myrmecophage (eats up to 2,500 ants daily)", size: "15–20 cm (6–8 in); 50–90 g", lifespan: "15–20 years", status: "Least Concern", venomous: "No", pet: "No (diet impossible in captivity)" },
  { rank: 29, common: "Indian Garden Lizard (Calotes)", scientific: "Calotes versicolor", family: "Agamidae", region: "India, South Asia, SE Asia", habitat: "Gardens, hedges, agricultural fields, roadside scrub", diet: "Insectivore (grasshoppers, beetles, ants, spiders)", size: "30–38 cm (12–15 in)", lifespan: "4–6 years", status: "Least Concern", venomous: "No", pet: "Wild garden resident" },
  { rank: 30, common: "Red-Headed Rock Agama", scientific: "Agama agama", family: "Agamidae", region: "Sub-Saharan Africa", habitat: "Savannahs, granite kopjes, village walls", diet: "Insectivore (ants, beetles, termites, grasshoppers)", size: "20–30 cm (8–12 in)", lifespan: "10–15 years", status: "Least Concern", venomous: "No", pet: "Occasional" },
  { rank: 31, common: "Uromastyx (Spiny-Tailed Lizard)", scientific: "Uromastyx aegyptia", family: "Agamidae", region: "North Africa, Middle East", habitat: "Extreme gravel desert, rocky hamadas", diet: "Herbivore (desert grasses, leaves, seeds)", size: "40–76 cm (16–30 in)", lifespan: "15–25+ years", status: "Vulnerable", venomous: "No", pet: "Dedicated keepers" },
  { rank: 32, common: "Sailfin Dragon", scientific: "Hydrosaurus amboinensis", family: "Agamidae", region: "Indonesia, Philippines, New Guinea", habitat: "Riverside tropical rainforests, mangroves", diet: "Omnivore (aquatic insects, crustaceans, fruits, leaves)", size: "90–110 cm (35–43 in)", lifespan: "12–18 years", status: "Vulnerable", venomous: "No", pet: "Experienced only" },
  { rank: 33, common: "Blue-Tongued Skink", scientific: "Tiliqua scincoides", family: "Scincidae", region: "Australia, Indonesia", habitat: "Coastal plains, sclerophyll forests, suburban gardens", diet: "Omnivore (snails, berries, dandelions, insects)", size: "45–55 cm (18–22 in); 400–600 g", lifespan: "15–25+ years", status: "Least Concern", venomous: "No", pet: "Excellent calm pet" },
  { rank: 34, common: "Common Sun Skink", scientific: "Eutropis carinata", family: "Scincidae", region: "India, Sri Lanka, Bangladesh", habitat: "Forest leaf litter, home gardens, sunny stone piles", diet: "Insectivore (crickets, termites, earthworms)", size: "20–25 cm (8–10 in)", lifespan: "6–10 years", status: "Least Concern", venomous: "No", pet: "Wild resident" },
  { rank: 35, common: "Red-Eyed Crocodile Skink", scientific: "Tribolonotus gracilis", family: "Scincidae", region: "New Guinea, Solomon Islands", habitat: "Moist tropical forest floors under rotting logs", diet: "Insectivore (grubs, worms, small crickets)", size: "18–20 cm (7–8 in)", lifespan: "8–12 years", status: "Least Concern", venomous: "No", pet: "Display-only pet" },
  { rank: 36, common: "Solomon Islands Monkey-Tailed Skink", scientific: "Corucia zebrata", family: "Scincidae", region: "Solomon Islands", habitat: "Primary tropical rainforest canopy", diet: "Herbivore (epiphytes, pothos foliage, fruits)", size: "65–80 cm (26–32 in); up to 1 kg", lifespan: "25–30+ years", status: "Endangered", venomous: "No", pet: "Rare specialist" },
  { rank: 37, common: "Broad-Headed Skink", scientific: "Plestiodon laticeps", family: "Scincidae", region: "Southeastern United States", habitat: "Oak-hickory deciduous forests, hollow trees", diet: "Insectivore (beetles, spiders, roaches)", size: "20–32 cm (8–13 in)", lifespan: "8–12 years", status: "Least Concern", venomous: "No", pet: "Native wildlife" },
  { rank: 38, common: "Green Anole", scientific: "Anolis carolinensis", family: "Dactyloidae", region: "Southeastern United States, Caribbean", habitat: "Shrubs, garden fences, forest edges, tree trunks", diet: "Insectivore (spiders, flies, crickets, moths)", size: "13–20 cm (5–8 in)", lifespan: "4–7 years", status: "Least Concern", venomous: "No", pet: "Popular community pet" },
  { rank: 39, common: "Brown Anole", scientific: "Anolis sagrei", family: "Dactyloidae", region: "Cuba, Bahamas, widely invasive in Florida", habitat: "Urban gardens, ground litter, low tree trunks", diet: "Insectivore", size: "12–18 cm (5–7 in)", lifespan: "3–5 years", status: "Least Concern", venomous: "No", pet: "Wild invasive" },
  { rank: 40, common: "Plumed Basilisk (Jesus Christ Lizard)", scientific: "Basiliscus plumifrons", family: "Corytophanidae", region: "Central America (Honduras to Panama)", habitat: "Tropical rainforest riversides, streams, lowland swamps", diet: "Omnivore (insects, small fish, frogs, berries)", size: "60–80 cm (24–32 in)", lifespan: "8–12 years", status: "Least Concern", venomous: "No", pet: "Intermediate" },
  { rank: 41, common: "Texas Horned Lizard", scientific: "Phrynosoma cornutum", family: "Phrynosomatidae", region: "South-central US, northern Mexico", habitat: "Arid grassland, desert scrub with loose sandy soil", diet: "Specialist (harvester ants make up 70% of diet)", size: "7–12 cm (3–5 in)", lifespan: "5–8 years", status: "Near Threatened", venomous: "No (squirts blood from eyes)", pet: "Protected / Do not keep" },
  { rank: 42, common: "Eastern Collared Lizard", scientific: "Crotaphytus collaris", family: "Crotaphytidae", region: "Central & southwestern United States, Mexico", habitat: "Rocky desert canyons, limestone ledges, arid slopes", diet: "Carnivore (grasshoppers, smaller lizards, beetles)", size: "20–35 cm (8–14 in)", lifespan: "8–12 years", status: "Least Concern", venomous: "No", pet: "Enthusiast pet" },
  { rank: 43, common: "Armadillo Girdled Lizard", scientific: "Ouroborus cataphractus", family: "Cordylidae", region: "Western coast of South Africa (Succulent Karoo)", habitat: "Rocky scrub outcrops, sandstone crevices", diet: "Insectivore (termites, beetles, millipedes)", size: "16–21 cm (6–8 in)", lifespan: "20–25+ years", status: "Near Threatened", venomous: "No", pet: "Protected" },
  { rank: 44, common: "Sand Lizard", scientific: "Lacerta agilis", family: "Lacertidae", region: "Europe, Central Asia", habitat: "Coastal sand dunes, lowland heathland, dry banks", diet: "Insectivore (spiders, beetles, caterpillars)", size: "18–22 cm (7–9 in)", lifespan: "10–12 years", status: "Least Concern (Protected in UK)", venomous: "No", pet: "Protected" },
  { rank: 45, common: "Common Wall Lizard", scientific: "Podarcis muralis", family: "Lacertidae", region: "Central & Southern Europe", habitat: "Dry stone walls, railway embankments, rocky scree", diet: "Insectivore", size: "16–20 cm (6–8 in)", lifespan: "7–10 years", status: "Least Concern", venomous: "No", pet: "Native wildlife" },
  { rank: 46, common: "Eastern Glass Lizard (Legless Lizard)", scientific: "Ophisaurus ventralis", family: "Anguidae", region: "Southeastern United States", habitat: "Coastal dunes, pine flatwoods, damp grasslands", diet: "Carnivore (grasshoppers, snails, spiders, small frogs)", size: "45–100 cm (18–40 in)", lifespan: "15–20+ years", status: "Least Concern", venomous: "No", pet: "Occasional" },
  { rank: 47, common: "Slow Worm", scientific: "Anguis fragilis", family: "Anguidae", region: "Great Britain, continental Europe", habitat: "Damp grassy pastures, hedgerows, allotment gardens", diet: "Molluscivore (slugs, earthworms, snails)", size: "35–45 cm (14–18 in)", lifespan: "20–30+ years (up to 54 in captivity)", status: "Least Concern (Protected in UK)", venomous: "No", pet: "Protected wild species" },
  { rank: 48, common: "Mexican Mole Lizard", scientific: "Bipes biporus", family: "Bipedidae", region: "Baja California Peninsula (Mexico)", habitat: "Subterranean burrows in loose sandy desert soil", diet: "Subterranean carnivore (termites, ants, grubs)", size: "18–24 cm (7–9 in) with 2 tiny mole-like front legs", lifespan: "5–8 years", status: "Least Concern", venomous: "No", pet: "No (burrowing subterranean)" },
  { rank: 49, common: "Shingleback Skink (Bobtail / Tiliqua rugosa)", scientific: "Tiliqua rugosa", family: "Scincidae", region: "Southern & Western Australia", habitat: "Arid shrublands, mallee dunes, agricultural borders", diet: "Omnivore (native flowers, snails, carrion, berries)", size: "30–38 cm (12–15 in)", lifespan: "20–30+ years", status: "Least Concern", venomous: "No", pet: "Protected in Australia" },
  { rank: 50, common: "Satanic Leaf-Tailed Gecko", scientific: "Uroplatus phantasticus", family: "Gekkonidae", region: "Montane rainforests of Madagascar", habitat: "Mossy tropical forest shrubs 1–2m above ground", diet: "Insectivore (moths, flies, crickets)", size: "6–9 cm (2.5–3.5 in)", lifespan: "7–10 years", status: "Least Concern", venomous: "No", pet: "Sensitive specialist" }
];

function buildContent() {
  const sections = [];

  // Hero section
  sections.push(`
<section id="introduction">
  <p class="scope"><strong>Complete Herpetological Field Guide:</strong> Exploring over 7,000 lizard species across 40+ families—from the 3-meter Komodo dragon to micro-geckos, with comprehensive identification keys, global and Indian habitats, behavior, and conservation data.</p>
  <p>Lizards are among the most extraordinarily diverse, ecologically vital, and biologically successful vertebrate groups on Earth. Inhabiting nearly every continent outside of Antarctica, these remarkable squamate reptiles encompass more than 7,100 formally recognized species ranging from micro-chameleons that can balance comfortably upon the head of a matchstick to island-dwelling apex predators weighing over 130 kilograms.</p>
  <p>Whether navigating dense tropical rainforest canopies, scaling vertical urban masonry with microscopic toe setae, sprinting across water with specialized fringes, or thriving within arid desert sand dunes through ingenious moisture-harvesting skin channels, lizards exhibit breathtaking evolutionary adaptations. This definitive guide delivers a comprehensive, scientifically verified natural-history resource covering taxonomy, major taxonomic families, identification matrices, dietary dynamics, geographic distributions (with specialized focus on India's native herpetofauna), and actionable wildlife photography guidelines.</p>
</section>
`);

  // Quick Species Explorer
  sections.push(`
<section id="how-many-lizards">
  <h2>How Many Types of Lizards Are There?</h2>
  <p>The term "lizard" is an informal paraphyletic descriptor rather than a single distinct order. In modern phylogenetic classification, lizards belong to the order <strong>Squamata</strong>, which they share with snakes (Serpentes) and amphisbaenians (worm lizards). Currently, taxonomists recognize over <strong>7,100 living species of lizards</strong> distributed across more than 40 families.</p>
  
  <h3>Quick Species Explorer: Major Groups at a Glance</h3>
  <div class="table-scroll">
    <table class="comparison-table">
      <thead>
        <tr>
          <th>Lizard Group</th>
          <th>Representative Examples</th>
          <th>Typical Habitat</th>
          <th>Key Evolutionary Feature</th>
        </tr>
      </thead>
      <tbody>
        <tr><td><strong>Geckos (Gekkota)</strong></td><td>Leopard gecko, Tokay gecko, House gecko</td><td>Forests, homes, deserts, rocky walls</td><td>Microscopic adhesive toe pads (setae); nocturnal vocalizations</td></tr>
        <tr><td><strong>Skinks (Scincidae)</strong></td><td>Blue-tongued skink, Sun skink, Crocodile skink</td><td>Grassland, forest leaf litter, suburban gardens</td><td>Smooth, glossy, overlapping osteoderm scales; reduced limbs in some</td></tr>
        <tr><td><strong>Agamas (Agamidae)</strong></td><td>Bearded dragon, Indian garden lizard, Thorny devil</td><td>Deserts, rocky kopjes, tropical scrub, trees</td><td>Acrodont dentition; dramatic display colors and crests</td></tr>
        <tr><td><strong>Chameleons (Chamaeleonidae)</strong></td><td>Veiled chameleon, Panther chameleon, Indian chameleon</td><td>Arboreal canopies, montane scrub, shrubs</td><td>Zygodactylous grasping feet; independent stereoscopic eyes; ballistic tongue</td></tr>
        <tr><td><strong>Monitor Lizards (Varanidae)</strong></td><td>Komodo dragon, Asian water monitor, Bengal monitor</td><td>Wetlands, tropical forests, arid gorges</td><td>Deeply forked chemosensory tongue; muscular active predatory build</td></tr>
        <tr><td><strong>Iguanas (Iguanidae)</strong></td><td>Green iguana, Marine iguana, Rhinoceros iguana</td><td>Tropical rainforests, volcanic coastlines, deserts</td><td>Herbivorous hindgut fermentation; prominent dorsal spines and dewlaps</td></tr>
        <tr><td><strong>Anoles (Dactyloidae)</strong></td><td>Green anole, Brown anole, Knight anole</td><td>Trees, ornamental shrubs, fences</td><td>Extensible brightly colored throat fan (dewlap); subdigital pads</td></tr>
        <tr><td><strong>Tegus (Teiidae)</strong></td><td>Argentine black-and-white tegu, Gold tegu</td><td>South American grasslands, semi-deciduous woods</td><td>High intelligence; endothermic seasonal capabilities; large terrestrial build</td></tr>
      </tbody>
    </table>
  </div>
</section>
`);

  // What Is a Lizard?
  sections.push(`
<section id="what-is-a-lizard">
  <h2>What Is a Lizard? Biological Characteristics &amp; Distinctions</h2>
  <p>Lizards are ectothermic ("cold-blooded") amniote vertebrates characterized by keratinized epidermal scales, a kinetic skull, paired copulatory organs (hemipenes) in males, and a reliance on external ambient warmth to regulate their metabolic rates.</p>
  <ul>
    <li><strong>Epidermal Scales &amp; Skin Renewal:</strong> Lizard skin is composed of dry, water-impermeable keratin scales that prevent dehydration in arid environments. Unlike snakes, which shed their skin in a single complete piece, most lizards shed their skin in irregular patches or fragments.</li>
    <li><strong>Locomotion &amp; Limbs:</strong> Most lizards possess four well-developed limbs with clawed digits configured for terrestrial running, burrowing, climbing, or swimming. However, limb reduction and total limblessness have independently evolved dozens of times across different lizard lineages (such as glass lizards and slow worms).</li>
    <li><strong>External Ear Openings:</strong> Unlike snakes, which lack external ear openings and functional eardrums, almost all lizards possess visible tympanic membranes situated on either side of the head behind the eyes.</li>
    <li><strong>Movable Eyelids:</strong> The vast majority of lizards possess movable eyelids that blink and protect the cornea, though most geckos and certain skinks have replaced eyelids with a transparent protective ocular spectacle (brille).</li>
  </ul>
  <p><strong>Important Herpetological Distinction:</strong> Not every reptile that resembles a lizard is technically a squamate lizard. For instance, the <strong>Tuatara</strong> (<em>Sphenodon punctatus</em>) of New Zealand strongly resembles a spiny agamid lizard, yet it represents the sole surviving member of an entirely separate reptilian order, <strong>Rhynchocephalia</strong>, which diverged from lizards over 240 million years ago.</p>
</section>
`);

  // Lizard Classification
  sections.push(`
<section id="lizard-classification">
  <h2>Lizard Taxonomic Classification: The Squamate Hierarchy</h2>
  <p>The evolutionary hierarchy of living lizards is structured within the following biological framework:</p>
  <pre style="background:var(--cream); padding:1.2rem; border-radius:10px; font-size:0.92rem; border:1px solid var(--line);">
Domain: Eukaryota
 └── Kingdom: Animalia (Animals)
      └── Phylum: Chordata (Chordates)
           └── Class: Reptilia (Reptiles)
                └── Clade: Lepidosauria
                     └── Order: Squamata (Scaled Reptiles)
                          ├── Suborder: Iguania (Iguanas, Chameleons, Agamids, Anoles)
                          ├── Suborder: Gekkota (Geckos, Flap-footed Lizards)
                          ├── Suborder: Scincomorpha (Skinks, Wall Lizards, Cordylids)
                          ├── Suborder: Anguimorpha (Monitors, Gila Monsters, Glass Lizards)
                          └── Clade: Serpentes (Snakes - deeply nested squamates)
  </pre>
</section>
`);

  // Major Types of Lizards (20 Groups)
  sections.push(`
<section id="major-types-of-lizards">
  <h2>20 Major Types &amp; Families of Lizards</h2>
  <ol>
    <li><strong>Geckos (Gekkonidae, Eublepharidae):</strong> Small to medium squamates renowned for van der Waals adhesive toe structures, large nocturnal eyes, and diverse vocal chirps.</li>
    <li><strong>Skinks (Scincidae):</strong> The most species-rich lizard family on Earth (over 1,600 species), recognized by cylindrical bodies, shiny overlapping scales, and short limbs.</li>
    <li><strong>Monitor Lizards (Varanidae):</strong> Powerful carnivorous lizards with long necks, acute binocular vision, forked tongues, and high aerobic stamina.</li>
    <li><strong>Chameleons (Chamaeleonidae):</strong> Highly specialized arboreal predators possessing independently mobile eyes, ballistic prehensile tongues, and color-changing chromatophores.</li>
    <li><strong>Agamas &amp; Dragons (Agamidae):</strong> Old World lizards known for rough keeled scales, triangular heads, throat wattles, and active visual courtship displays.</li>
    <li><strong>Iguanas (Iguanidae):</strong> Large New World herbivorous and omnivorous lizards featuring prominent vertebral crests, robust dewlaps, and long whip-like tails.</li>
    <li><strong>Anoles (Dactyloidae):</strong> Slender, highly territorial neotropical arboreal lizards famous for brightly colored inflatable throat fans.</li>
    <li><strong>Tegus (Teiidae):</strong> Intelligent, active foraging ground-dwelling lizards of South and Central America with keen predatory instincts.</li>
    <li><strong>Wall Lizards (Lacertidae):</strong> Slender, diurnal Old World lizards common across Europe and Africa with rapid terrestrial agility.</li>
    <li><strong>Collared Lizards (Crotaphytidae):</strong> North American canyon dwellers capable of powerful bipedal sprinting when pursuing prey.</li>
    <li><strong>Basilisks (Corytophanidae):</strong> Central American riverside lizards equipped with specialized toe fringes that enable them to sprint across water surfaces.</li>
    <li><strong>Frilled Lizards (Agamidae):</strong> Australian woodland lizards that unfurl a vast vascularized skin ruff around their necks when threatened.</li>
    <li><strong>Glass Lizards (Anguidae):</strong> Completely legless lizards often mistaken for snakes, distinguishable by external ear holes, blinking eyelids, and inflexible jaws.</li>
    <li><strong>Girdled Lizards (Cordylidae):</strong> Heavily armored African rupicolous lizards with spiny defensive tail rings.</li>
    <li><strong>Horned Lizards (Phrynosomatidae):</strong> Flat, spiky North American desert lizards capable of auto-hemorrhaging blood from their ocular sinuses to deter predators.</li>
    <li><strong>Alligator Lizards (Anguidae):</strong> Hardy North American lizards with distinct lateral skin folds that expand during feeding and egg production.</li>
    <li><strong>Mole Lizards (Bipedidae):</strong> Subterranean burrowing Mexican reptiles featuring heavily reduced bodies and robust front digging claws.</li>
    <li><strong>Slow Worms (Anguidae):</strong> Harmless subterranean legless lizards widespread across European meadows and gardens.</li>
    <li><strong>Whiptails (Teiidae):</strong> Swift, slender New World runners, including multiple species that reproduce entirely through unisexual parthenogenesis.</li>
    <li><strong>Beaded Lizards &amp; Gila Monsters (Helodermatidae):</strong> Heavily built, venomous desert lizards with pebble-like osteoderm skin.</li>
  </ol>
</section>
`);

  // 50 Species Master Table
  sections.push(`
<section id="species-comparison-table">
  <h2>50 Prominent Lizard Species Comparison Table</h2>
  <p>A comprehensive comparative database of 50 globally significant lizard species, verified for scientific nomenclature, adult size parameters, native biomes, and dietary classifications:</p>
  <div class="table-scroll">
    <table class="comparison-table">
      <thead>
        <tr>
          <th>No.</th>
          <th>Common Name</th>
          <th>Scientific Name</th>
          <th>Family</th>
          <th>Native Region</th>
          <th>Adult Size</th>
          <th>Diet</th>
          <th>Venomous?</th>
          <th>Pet Suitability</th>
        </tr>
      </thead>
      <tbody>
        ${speciesList.map(s => `
        <tr>
          <td>${s.rank}</td>
          <td><strong>${s.common}</strong></td>
          <td><em>${s.scientific}</em></td>
          <td>${s.family}</td>
          <td>${s.region}</td>
          <td>${s.size}</td>
          <td>${s.diet}</td>
          <td>${s.venomous}</td>
          <td>${s.pet}</td>
        </tr>`).join("")}
      </tbody>
    </table>
  </div>
</section>
`);

  // 50 Species In-Depth Section
  sections.push(`
<section id="50-lizard-species-guide">
  <h2>50 Lizard Species You Should Know: Field Profiles</h2>
  <p>Explore detailed biological profiles for key representative lizard species from across the globe:</p>
  ${speciesList.map(s => `
  <div style="border:1px solid var(--line); border-radius:12px; padding:1.4rem; margin:1.5rem 0; background:#fff;">
    <h3 style="margin-top:0;">#${s.rank}. ${s.common} (<em>${s.scientific}</em>)</h3>
    <div class="table-scroll">
      <table class="comparison-table" style="font-size:0.88rem;">
        <tbody>
          <tr><td><strong>Family:</strong></td><td>${s.family}</td><td><strong>Conservation:</strong></td><td>${s.status}</td></tr>
          <tr><td><strong>Native Region:</strong></td><td>${s.region}</td><td><strong>Lifespan:</strong></td><td>${s.lifespan}</td></tr>
          <tr><td><strong>Primary Habitat:</strong></td><td>${s.habitat}</td><td><strong>Dietary Role:</strong></td><td>${s.diet}</td></tr>
          <tr><td><strong>Adult Size:</strong></td><td>${s.size}</td><td><strong>Venomous / Defense:</strong></td><td>${s.venomous}</td></tr>
        </tbody>
      </table>
    </div>
    <p><strong>Morphology &amp; Identification:</strong> ${s.common} exhibits signature biological adaptations characteristic of the ${s.family} family, specifically adapted for survival in ${s.habitat.toLowerCase()}. It plays a crucial ecological role as a ${s.diet.toLowerCase()} within its native ecosystems in ${s.region}.</p>
    <p><strong>Conservation &amp; Human Interaction:</strong> Status is currently assessed as ${s.status}. Regarding captivity and handling: ${s.pet}. Always observe wild individuals from a safe, respectful distance without disturbing natural basking or nesting sites.</p>
  </div>
  `).join("")}
</section>
`);

  // Lizard Species in India
  sections.push(`
<section id="lizard-species-india">
  <h2>Lizard Species in India: Native &amp; Common Herpetofauna</h2>
  <p>The Indian subcontinent hosts an astonishing array of squamate diversity across its Western Ghats biodiversity hotspot, Thar Desert, Deccan Plateau, and northeastern subtropical forests.</p>
  <div class="table-scroll">
    <table class="comparison-table">
      <thead>
        <tr>
          <th>Species Name</th>
          <th>Common Indian Name</th>
          <th>Key Indian Regions</th>
          <th>Typical Habitat</th>
          <th>Identification Features</th>
        </tr>
      </thead>
      <tbody>
        <tr><td><strong>Calotes versicolor</strong></td><td>Indian Garden Lizard / Bloodsucker (गिरगिट)</td><td>Pan-India</td><td>Home gardens, parks, agricultural borders, hedges</td><td>Keeled scales; males develop brilliant crimson head and throat during monsoon breeding season. Non-venomous and completely harmless.</td></tr>
        <tr><td><strong>Hemidactylus frenatus / flaviviridis</strong></td><td>Common Indian House Gecko (छिपकली)</td><td>Pan-India in human settlements</td><td>Interior and exterior walls, ceilings, behind photo frames</td><td>Pale translucent grey/tan skin; sticky toe lamellae; nocturnal predator of mosquitoes and moths. Completely non-venomous.</td></tr>
        <tr><td><strong>Varanus bengalensis</strong></td><td>Bengal Monitor Lizard (गोयरा / घोरपड़)</td><td>Forests and rural scrub across India</td><td>Deciduous forests, river valleys, agricultural fringes</td><td>Large muscular body, speckled dark skin, forked tongue. Strictly protected under Schedule I of India's Wildlife Protection Act.</td></tr>
        <tr><td><strong>Chamaeleo zeylanicus</strong></td><td>Indian Chameleon</td><td>Southern &amp; Central India, Gujarat, Odisha</td><td>Thorn scrub, dry deciduous forests, casuarina groves</td><td>Pincer-like zygodactylous feet, prehensile tail, independent rotating eyes. Slow-moving arboreal insect hunter.</td></tr>
        <tr><td><strong>Eutropis carinata</strong></td><td>Common Keeled Grass Skink (बामिनी)</td><td>Peninsular India, West Bengal, Assam</td><td>Leaf litter, compost heaps, sunny stone piles</td><td>Bronzed metallic dorsal sheen, smooth osteoderm scales, lightning-fast ground scurrying when disturbed.</td></tr>
        <tr><td><strong>Sitana ponticeriana</strong></td><td>Fan-Throated Lizard</td><td>Scrublands of peninsular India</td><td>Open dry grasslands, rocky coastal plains</td><td>Males display a spectacular iridescent blue, black, and orange throat fan during territory disputes.</td></tr>
      </tbody>
    </table>
  </div>
  
  <h3>Most Common Lizards Found Around Indian Homes: Myths vs. Facts</h3>
  <p>In Indian households, the common wall gecko (<em>Hemidactylus</em>) and garden calotes are ubiquitous. A widespread rural myth claims that house geckos are fatally poisonous if they fall into milk or cooked food. <strong>This is scientifically false.</strong> Indian house geckos possess no venom glands, no toxic skin secretions, and no oral poison. While any small animal falling into warm food can introduce general foodborne bacteria (such as <em>Salmonella</em>), the lizard itself is non-toxic and serves as a highly beneficial predator of pest insects, mosquitoes, and termites.</p>
</section>
`);

  // Are Lizards Dangerous? Venomous vs Poisonous
  sections.push(`
<section id="are-lizards-dangerous">
  <h2>Are Lizards Dangerous to Humans? Venomous vs. Poisonous Clarified</h2>
  <p>To evaluate safety, it is essential to distinguish between scientific terms:</p>
  <ul>
    <li><strong>Venomous:</strong> Animals that actively inject toxins via specialized apparatus (such as modified teeth or fangs). Examples include Gila monsters and Mexican beaded lizards.</li>
    <li><strong>Poisonous:</strong> Organisms that store toxins in their skin or tissues that cause illness when ingested or touched. True lizards are virtually never poisonous to consume.</li>
  </ul>
  <p><strong>Medically Significant Species:</strong> Only a tiny fraction of the world's 7,100 lizard species pose any medical hazard to humans:</p>
  <ol>
    <li><strong>Helodermatid Lizards:</strong> The Gila monster (<em>Heloderma suspectum</em>) and Mexican beaded lizard (<em>Heloderma horridum</em>) produce neurotoxins secreted through grooved teeth in the lower jaw. Bites are intensely painful but rarely fatal to healthy human adults.</li>
    <li><strong>Monitor Lizards &amp; Komodo Dragons:</strong> Research has revealed that monitor lizards possess mandibular glands secreting mild anticoagulant toxins. In large species like the Komodo dragon, this venom prevents blood clotting and induces rapid hypovolemic shock in prey.</li>
    <li><strong>General Rule:</strong> Over 99% of all lizard species encountered in daily life (geckos, skinks, anoles, garden lizards) are completely non-venomous and entirely harmless to humans and domestic pets.</li>
  </ol>
</section>
`);

  // Extremes: Largest, Smallest, Fastest
  sections.push(`
<section id="extremes-of-the-lizard-world">
  <h2>Extremes of the Lizard World: Size, Speed &amp; Power</h2>
  <div class="table-scroll">
    <table class="comparison-table">
      <thead>
        <tr>
          <th>Category</th>
          <th>Top Species</th>
          <th>Record Dimension</th>
          <th>Key Evolutionary Advantage</th>
        </tr>
      </thead>
      <tbody>
        <tr><td><strong>World's Largest Lizard</strong></td><td>Komodo Dragon (<em>Varanus komodoensis</em>)</td><td>3.04 meters (10.0 ft); up to 135 kg</td><td>Apex insular gigantism; capable of taking down adult deer and water buffalo.</td></tr>
        <tr><td><strong>World's Smallest Lizard</strong></td><td>Nano-Chameleon (<em>Brookesia nana</em>) &amp; Jaragua Sphaero (<em>Sphaerodactylus ariasae</em>)</td><td>16–21 mm (0.6–0.8 in) total length</td><td>Miniaturization for hunting microscopic leaf-litter invertebrates without competition.</td></tr>
        <tr><td><strong>Fastest Running Lizard</strong></td><td>Black Spiny-Tailed Iguana (<em>Ctenosaura similis</em>)</td><td>Documented sprint speeds up to 34.6 km/h (21.5 mph)</td><td>High-speed bipedal sprint bursts to escape avian and mammalian predators.</td></tr>
        <tr><td><strong>Water-Running Specialist</strong></td><td>Plumed Basilisk (<em>Basiliscus plumifrons</em>)</td><td>Runs up to 5–15 meters across open water at 1.5 m/s</td><td>Broad toe fringes and rapid slapping strides prevent surface sinking.</td></tr>
      </tbody>
    </table>
  </div>
</section>
`);

  // Ecology: Diet, Hunting, Defense, Tail Autotomy
  sections.push(`
<section id="ecology-diet-defense">
  <h2>Lizard Ecology: Diet, Hunting &amp; Tail Autotomy</h2>
  <h3>What Do Lizards Eat?</h3>
  <ul>
    <li><strong>Insectivores (Over 70% of species):</strong> Consume crickets, moths, beetles, termites, and flies (e.g., geckos, anoles, chameleons).</li>
    <li><strong>Carnivores:</strong> Active hunters that take rodents, birds, eggs, fish, and smaller reptiles (e.g., monitor lizards, tegus).</li>
    <li><strong>Strict Herbivores:</strong> Specialized plant-eaters with complex gut symbionts to digest fibrous cellulose and marine algae (e.g., green iguanas, marine iguanas, chuckwallas).</li>
    <li><strong>Omnivores:</strong> Flexible feeders consuming fruit, flowers, insects, and snails (e.g., blue-tongued skinks, bearded dragons).</li>
  </ul>

  <h3>Tail Autotomy: How and Why Lizards Drop Their Tails</h3>
  <p>Many lizards employ <strong>caudal autotomy</strong> (voluntary tail shedding) as a life-saving escape mechanism. When seized by a predator, the lizard contracts specialized muscular rings around natural fracture planes across the caudal vertebrae. The severed tail thrashes violently for several minutes due to stored neuromuscular reflex energy, distracting the predator while the lizard dashes to safety.</p>
  <p>Over several months, many species can regenerate a replacement tail. However, the regenerated tail is supported by an unsegmented rod of flexible cartilage rather than bony vertebrae, often has altered scale patterns and pigmentation, and requires significant metabolic resources that temporarily impair growth and reproductive output.</p>
</section>
`);

  // Comparisons: Lizard vs Gecko, Snake, Salamander
  sections.push(`
<section id="comparisons-gecko-snake-salamander">
  <h2>Key Comparisons: Lizard vs. Gecko vs. Snake vs. Salamander</h2>
  <div class="table-scroll">
    <table class="comparison-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>Lizard (General)</th>
          <th>Gecko (Specific Subgroup)</th>
          <th>Snake (Serpentes)</th>
          <th>Salamander (Amphibia)</th>
        </tr>
      </thead>
      <tbody>
        <tr><td><strong>Taxonomic Class</strong></td><td>Reptilia (Squamata)</td><td>Reptilia (Squamata: Gekkota)</td><td>Reptilia (Squamata: Serpentes)</td><td>Amphibia (Caudata)</td></tr>
        <tr><td><strong>Skin Surface</strong></td><td>Dry keratinized scales</td><td>Soft, granular tuberculate scales</td><td>Overlapping dry scales</td><td>Moist, smooth, permeable skin without scales</td></tr>
        <tr><td><strong>Eyelids</strong></td><td>Movable in most species</td><td>Fused transparent spectacle (brille) in most</td><td>Fused transparent spectacle (never blink)</td><td>Movable eyelids present in most adults</td></tr>
        <tr><td><strong>External Ear Opening</strong></td><td>Present in almost all</td><td>Distinct visible ear canals</td><td>Completely absent</td><td>Absent (internal hearing mechanisms)</td></tr>
        <tr><td><strong>Reproduction &amp; Eggs</strong></td><td>Amniotic eggs with leathery/hard shells</td><td>Amniotic calcified hard or parchment shells</td><td>Amniotic eggs or live viviparous birth</td><td>Gelatinous anamniotic eggs laid in water/moisture</td></tr>
      </tbody>
    </table>
  </div>
</section>
`);

  // 15 Species-Specific FAQs
  sections.push(`
<section id="frequently-asked-questions" class="content-section faq">
  <h2>Frequently Asked Questions About Lizards</h2>
  
  <details>
    <summary>1. What are the main types of lizards in the world?</summary>
    <p>The primary living lizard groups comprise geckos (Gekkota), skinks (Scincidae), monitor lizards (Varanidae), chameleons (Chamaeleonidae), agamas and dragons (Agamidae), iguanas (Iguanidae), anoles (Dactyloidae), tegus (Teiidae), and wall lizards (Lacertidae).</p>
  </details>

  <details>
    <summary>2. How many lizard species currently exist?</summary>
    <p>Herpetologists currently recognize over 7,100 described living species of lizards across more than 40 families, making squamates the second-most diverse order of land vertebrates after birds.</p>
  </details>

  <details>
    <summary>3. What is the largest lizard species on Earth?</summary>
    <p>The Komodo dragon (<em>Varanus komodoensis</em>) of Indonesia is the largest living lizard, reaching lengths up to 3 meters (10 feet) and weights exceeding 135 kilograms (300 pounds).</p>
  </details>

  <details>
    <summary>4. What is the smallest lizard species known?</summary>
    <p>The nano-chameleon (<em>Brookesia nana</em>) of northern Madagascar and the Jaragua sphaero gecko (<em>Sphaerodactylus ariasae</em>) are the smallest, measuring less than 20–29 millimeters (under 1.2 inches) in total adult length.</p>
  </details>

  <details>
    <summary>5. Which lizard species are commonly found in Indian homes and gardens?</summary>
    <p>The most common are the common house gecko (<em>Hemidactylus frenatus / flaviviridis</em>), the Indian garden lizard or oriental garden calotes (<em>Calotes versicolor</em>), and the common keeled grass skink (<em>Eutropis carinata</em>). All are harmless to humans.</p>
  </details>

  <details>
    <summary>6. Are common house lizards poisonous if they touch food?</summary>
    <p>No. Common house geckos possess no venom and no natural skin toxins. While general food hygiene requires discarding food contaminated by any animal due to surface bacterial risk (such as Salmonella), the common belief that lizards are fatally venomous is entirely a folk myth.</p>
  </details>

  <details>
    <summary>7. Are any lizards truly venomous?</summary>
    <p>Yes. The Gila monster and Mexican beaded lizard (family Helodermatidae) have medically significant neurotoxic venom. Monitor lizards and Komodo dragons also possess oral glands secreting anticoagulant venom that induces prey shock.</p>
  </details>

  <details>
    <summary>8. Do all lizards regrow their tails if they lose them?</summary>
    <p>No. While many geckos, skinks, anoles, and lacertids regrow their tails, several lizard groups—including monitor lizards, horned lizards, and chameleons—cannot regrow a lost tail. The replacement tail is cartilage, not bone.</p>
  </details>

  <details>
    <summary>9. Why do chameleons change color?</summary>
    <p>Chameleons change color primarily for social communication (courtship, territorial dominance, aggression) and thermoregulation (darkening to absorb morning sun, lightening to reflect heat), rather than attempting to camouflage against random background patterns.</p>
  </details>

  <details>
    <summary>10. Do all lizards have four legs?</summary>
    <p>No. Limb reduction and complete limblessness have evolved repeatedly across multiple lizard families. Legless lizards (such as glass lizards and slow worms) retain eyelids, external ear openings, and non-expandable jaws that distinguish them from true snakes.</p>
  </details>

  <details>
    <summary>11. Are geckos considered lizards?</summary>
    <p>Yes. Geckos constitute the infraorder Gekkota, an ancient and diverse lineage of squamate lizards with over 1,500 species recognized worldwide.</p>
  </details>

  <details>
    <summary>12. What is the fundamental difference between a lizard and a salamander?</summary>
    <p>Lizards are dry-scaled reptiles that lay amniotic eggs on land. Salamanders are amphibians with moist, scale-less, water-permeable skin that must reproduce in moist environments and pass through aquatic larval stages.</p>
  </details>

  <details>
    <summary>13. Which lizard species make beginner-friendly pets?</summary>
    <p>The leopard gecko (<em>Eublepharis macularius</em>), central bearded dragon (<em>Pogona vitticeps</em>), and crested gecko (<em>Correlophus ciliatus</em>) are the most popular, calm, and manageable pet lizards for responsible owners with proper enclosure heating and lighting.</p>
  </details>

  <details>
    <summary>14. What should you do if you encounter a wild lizard?</summary>
    <p>Never capture or handle an unknown wild lizard. Observe from a distance of several feet, photograph using optical zoom without flash, and allow the animal to continue its vital natural role of consuming pest insects.</p>
  </details>

  <details>
    <summary>15. What are the primary threats to wild lizard populations?</summary>
    <p>Major global threats include habitat fragmentation from agriculture and urbanization, climate-driven temperature stress during nesting, invasive predators (feral cats, mongooses), and the unsustainable illegal pet trade.</p>
  </details>
</section>
`);

  // Final Actionable Takeaway
  sections.push(`
<section id="conservation-and-ethics">
  <h2>Wildlife Ethics &amp; Photography Guide</h2>
  <p>Lizards are vital bioindicators of healthy terrestrial and forest ecosystems. When photographing or documenting wild reptiles:</p>
  <ul>
    <li>Maintain a minimum observation distance of 1–2 meters and utilize telephoto zoom lenses.</li>
    <li>Never grasp, trap, or corner wild lizards, as defensive stress can induce tail autotomy or injury.</li>
    <li>Avoid close-proximity flash photography in low-light environments, which can temporarily disorient nocturnal geckos.</li>
    <li>In India, all native monitor lizards are strictly protected under Schedule I of the Wildlife Protection Act; disturbing or capturing them carries severe legal penalties.</li>
  </ul>
  <div class="button-row" style="margin:1.5rem 0;">
    <a class="button button-primary" href="/category/entertainment/">Explore More Guides</a>
    <a class="button button-quiet" href="/search/?q=Lizard">Search Wildlife Guides</a>
  </div>
</section>
`);

  return sections.join("\n");
}

const headings = [
  { id: "introduction", text: "Introduction & Scope" },
  { id: "how-many-lizards", text: "How Many Types of Lizards?" },
  { id: "what-is-a-lizard", text: "What Is a Lizard?" },
  { id: "lizard-classification", text: "Lizard Classification" },
  { id: "major-types-of-lizards", text: "20 Major Types of Lizards" },
  { id: "species-comparison-table", text: "50 Species Master Table" },
  { id: "50-lizard-species-guide", text: "50 Species Field Profiles" },
  { id: "lizard-species-india", text: "Lizard Species in India" },
  { id: "are-lizards-dangerous", text: "Are Lizards Dangerous?" },
  { id: "extremes-of-the-lizard-world", text: "Extremes: Size, Speed, Power" },
  { id: "ecology-diet-defense", text: "Diet, Hunting & Tail Autotomy" },
  { id: "comparisons-gecko-snake-salamander", text: "Lizard vs Gecko, Snake, Salamander" },
  { id: "frequently-asked-questions", text: "Frequently Asked Questions (FAQ)" },
  { id: "conservation-and-ethics", text: "Wildlife Ethics & Photography" }
];

const tocHtml = `
<aside class="toc-card">
  <h2>In this guide</h2>
  <nav aria-label="Table of contents">
    ${headings.map(h => `<a href="#${h.id}">${h.text}</a>`).join("")}
  </nav>
</aside>
`;

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://visitbest.in/lizards-species/#article",
      "url": "https://visitbest.in/lizards-species/",
      "name": "Lizard Species: Complete Guide to Types, Names, Pictures, Habitats & Identification",
      "inLanguage": "en",
      "publisher": {
        "@type": "Organization",
        "name": "VisitBest",
        "url": "https://visitbest.in/"
      },
      "headline": "Lizard Species: Complete Guide to Types, Names, Pictures, Habitats & Identification",
      "author": {
        "@type": "Organization",
        "name": "VisitBest Nature Editorial Team",
        "url": "https://visitbest.in/about/"
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://visitbest.in/lizards-species/"
      },
      "image": ["https://visitbest.in/assets/lizards-species/hero.png"],
      "datePublished": "2026-09-09",
      "dateModified": "2026-10-06",
      "description": "Explore the complete guide to lizard species: types, names, habitats, Indian lizards, venom facts, anatomy, and how to identify common and rare lizards."
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://visitbest.in/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Nature",
          "item": "https://visitbest.in/category/nature/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Lizard Species",
          "item": "https://visitbest.in/lizards-species/"
        }
      ]
    }
  ]
};

const fullHtml = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-SZXR1R5PP7"></script>
  <script>window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-SZXR1R5PP7');</script>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6008816938247526" crossorigin="anonymous"></script>
  <title>Lizard Species: Complete Guide to Types, Names, Habitats &amp; Identification</title>
  <meta name="description" content="Explore the complete guide to lizard species: types, names, habitats, Indian lizards, venom facts, anatomy, and how to identify common and rare lizards.">
  <link rel="canonical" href="https://visitbest.in/lizards-species/">
  <meta name="robots" content="index,follow">
  <meta property="og:type" content="article">
  <meta property="og:title" content="Lizard Species: Complete Guide to Types, Names, Habitats &amp; Identification">
  <meta property="og:description" content="Explore the complete guide to lizard species: types, names, habitats, Indian lizards, venom facts, anatomy, and how to identify common and rare lizards.">
  <meta property="og:url" content="https://visitbest.in/lizards-species/">
  <meta name="twitter:card" content="summary">
  <meta property="og:image" content="https://visitbest.in/assets/lizards-species/hero.png">
  <meta name="twitter:image" content="https://visitbest.in/assets/lizards-species/hero.png">
  <link rel="stylesheet" href="/site.css">
  <script type="application/ld+json">${JSON.stringify(schema)}</script>
</head>
<body>
  <a class="skip-link" href="#content">Skip to content</a>
  <header class="site-header"><div class="header-inner container">
    <a class="brand" href="/"><strong>Visit-Best</strong><span>Explore best in India</span></a>
    <button class="menu-toggle" type="button" data-menu-toggle aria-expanded="false" aria-controls="primary-nav">Menu</button>
    <nav class="primary-nav" id="primary-nav" data-primary-nav aria-label="Primary navigation"><a href="/">Home</a><a href="/bigg-boss-20-guide/">Bigg Boss 20</a><a href="/bigg-boss-20-voting/">BB20 Voting</a><a href="/bigg-boss-20-web-stories/">Web Stories</a><a href="/education/">Education</a><a href="/category/technology/">Technology</a><a href="/category/entertainment/">Entertainment</a><a href="/business/">All Businesses</a></nav>
    <form class="header-search" action="/search/" method="get"><input name="q" type="search" placeholder="Search guides…" aria-label="Search guides"><button class="button button-primary" type="submit">Search</button></form>
  </div></header>

  <main id="content" class="container">
    <nav class="breadcrumbs" aria-label="Breadcrumbs"><a href="/">Home</a><span class="sep">/</span><a href="/category/nature/">Nature</a><span class="sep">/</span><span>Lizard Species</span></nav>
    <div class="article-layout">
      <article class="article-card">
        <p class="eyebrow">VisitBest Wildlife &amp; Herpetology Guide • Updated October 2026</p>
        <h1 class="article-title">Lizard Species: Complete Guide to Types, Names, Pictures, Habitats &amp; Identification</h1>
        <p class="article-dek">Explore the world's most fascinating lizards, from tiny geckos and colorful chameleons to powerful monitor lizards and unusual skinks. Learn their names, appearance, size, habitat, diet, behavior and how to identify them.</p>
        <div class="article-meta">
          <span><a class="pill" href="/category/nature/">Nature</a></span>
          <span>Updated <strong>6 October 2026</strong></span>
          <span><strong>16 min read</strong></span>
        </div>
        <figure class="article-figure">
          <img src="/assets/lizards-species/hero.png" alt="Natural history guide to lizard species" loading="eager" decoding="async">
          <figcaption>VisitBest natural-history editorial illustration • Reptiles of the World</figcaption>
        </figure>

        <div class="ad-placement ad-intro" style="margin:2rem auto;text-align:center;min-height:90px;clear:both;">
          <span class="ad-label" style="display:block;font-size:10px;letter-spacing:1px;color:#8c9ba5;text-transform:uppercase;margin-bottom:6px;">Advertisement</span>
          <ins class="adsbygoogle"
               style="display:block"
               data-ad-client="ca-pub-6008816938247526"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        </div>

        <div class="prose">
          ${buildContent()}
        </div>

        <div class="ad-placement ad-outro" style="margin:2rem auto;text-align:center;min-height:90px;clear:both;">
          <span class="ad-label" style="display:block;font-size:10px;letter-spacing:1px;color:#8c9ba5;text-transform:uppercase;margin-bottom:6px;">Advertisement</span>
          <ins class="adsbygoogle"
               style="display:block"
               data-ad-client="ca-pub-6008816938247526"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        </div>

        <div class="author-box">
          <div class="author-mark" aria-hidden="true">VB</div>
          <div>
            <strong>VisitBest Wildlife Research Team</strong>
            <p>Our natural science researchers synthesize peer-reviewed herpetological records, IUCN Red List assessments, and regional field guides to create reliable, non-sensationalized wildlife education.</p>
          </div>
        </div>

        <section class="related">
          <h2>Keep exploring</h2>
          <div class="card-grid">
            <article class="card">
              <a href="/hottest-chinese-actors/">
                <div class="card-media"><img src="/assets/hottest-chinese-actors/hero.jpg" alt="Chinese actors guide" loading="lazy" decoding="async"></div>
                <div class="card-body">
                  <div class="card-meta"><span class="tag">Entertainment</span><span>6 October 2026</span></div>
                  <h3>Hottest Chinese Actors in 2026: Top 25 Ranked</h3>
                  <p>Discover the top Chinese actors of 2026, ranked by charisma, style, screen presence, and hit C-dramas.</p>
                </div>
              </a>
            </article>
            <article class="card">
              <a href="/best-sites-to-watch-anime/">
                <div class="card-media"><img src="/assets/lizards-species/hero.png" alt="Anime streaming guide" loading="lazy" decoding="async"></div>
                <div class="card-body">
                  <div class="card-meta"><span class="tag">Entertainment</span><span>9 September 2026</span></div>
                  <h3>Best Legal Sites to Watch Anime in India</h3>
                  <p>Compare legal anime streaming options by catalogue, subtitles, dubbing, simulcast timing, and regional availability.</p>
                </div>
              </a>
            </article>
            <article class="card">
              <a href="/search/?q=Wildlife">
                <div class="card-media"><img src="/assets/lizards-species/hero.png" alt="Search wildlife" loading="lazy" decoding="async"></div>
                <div class="card-body">
                  <div class="card-meta"><span class="tag">Nature</span><span>Search</span></div>
                  <h3>Search All Nature &amp; Wildlife Guides</h3>
                  <p>Explore VisitBest guides on flora, fauna, and environmental science.</p>
                </div>
              </a>
            </article>
          </div>
        </section>
      </article>

      ${tocHtml}
    </div>
  </main>

  <footer class="site-footer"><div class="container footer-grid">
    <div>
      <h2>Visit-Best</h2>
      <p>Clear, practical guides on brands, products, companies, entertainment, culture, and everyday decisions across India and beyond.</p>
      <p style="margin-top:.85rem;font-size:.84rem;"><a href="/about/">About VisitBest</a> · <a href="/contact-us/">Contact Us</a> · <a href="/privacy-policy/">Privacy Policy</a></p>
    </div>
    <div>
      <h2>Bigg Boss 20</h2>
      <ul class="footer-links">
        <li><a href="/bigg-boss-20-guide/">Season 20 Guide</a></li>
        <li><a href="/bigg-boss-20-voting/">Live Fan Polls &amp; Voting</a></li>
        <li><a href="/bigg-boss-20-contestants/">Contestants Directory</a></li>
        <li><a href="/bigg-boss-20-web-stories/">Visual Web Stories</a></li>
        <li><a href="/bigg-boss-20-where-to-watch/">Where to Watch</a></li>
        <li><a href="/bigg-boss-20-episode-guide/">Episode Guide</a></li>
        <li><a href="/bigg-boss-20-nominations-explained/">Nominations Explained</a></li>
      </ul>
    </div>
    <div>
      <h2>Categories</h2>
      <ul class="footer-links">
        <li><a href="/category/technology/">Technology</a></li>
        <li><a href="/category/entertainment/">Entertainment</a></li>
        <li><a href="/category/brands/">Brands</a></li>
        <li><a href="/category/business/">Business</a></li>
        <li><a href="/category/actress/">Celebrity &amp; Cinema</a></li>
        <li><a href="/category/corporates/">Corporates</a></li>
        <li><a href="/category/travel/">Travel &amp; Lifestyle</a></li>
      </ul>
    </div>
    <div>
      <h2>Explore &amp; Contact</h2>
      <ul class="footer-links">
        <li><a href="/education/">Education Guides Hub</a></li>
        <li><a href="/education/schools/">Top Schools Worldwide</a></li>
        <li><a href="/education/universities/">Top Universities</a></li>
        <li><a href="/education/medical-colleges/">Medical Colleges (NIRF)</a></li>
        <li><a href="/business/">Business Directory (700+)</a></li>
        <li><a href="/wam-to-gpa-calculator/">WAM to GPA Calculator</a></li>
        <li><a href="/search/">Search All Guides</a></li>
        <li><a href="/assets/bb20-new/image-credits.html">Image Credits</a></li>
        <li><a href="mailto:visitbest10@gmail.com">visitbest10@gmail.com</a></li>
      </ul>
    </div>
  </div><div class="container footer-bottom"><span>© 2026 Visit-Best. All rights reserved.</span><span>Independent editorial guides &amp; fan opinions. Not affiliated with Bigg Boss broadcasters or voting platforms.</span></div></footer>
  <button class="back-top" type="button" data-back-top aria-label="Back to top">↑</button>
  <script src="/site.js" defer></script>
</body>
</html>
`;

await fs.writeFile(path.join(outDir, "index.html"), fullHtml.trim());
console.log(`Generated public/lizards-species/index.html successfully (${Buffer.byteLength(fullHtml)} bytes).`);
