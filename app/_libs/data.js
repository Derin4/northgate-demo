// Fictitious data for the Northgate Analysis demo.

export const services = [
  {
    slug: "discovery",
    name: "Discovery & Requirements",
    text: "Interviews, workshops and documentation that turn a vague idea into a clear, testable set of requirements.",
    points: [
      "Stakeholder mapping",
      "User stories and acceptance criteria",
      "Scope and priority workshops",
    ],
  },
  {
    slug: "process",
    name: "Process Mapping & Improvement",
    text: "See how work really flows today, find the waits and hand-offs, and design a simpler way.",
    points: [
      "Current-state and future-state maps",
      "Bottleneck and rework analysis",
      "A change plan your team can follow",
    ],
  },
  {
    slug: "product",
    name: "Product Ownership Support",
    text: "Backlog shaping and decision support for teams without a full-time product owner.",
    points: [
      "Backlog refinement",
      "Roadmap and release planning",
      "Sprint review facilitation",
    ],
  },
  {
    slug: "agile",
    name: "Agile Delivery Coaching",
    text: "Practical Scrum and Kanban coaching that fits your team, not a template.",
    points: [
      "Team and leadership coaching",
      "Ceremony reset",
      "Metrics that matter",
    ],
  },
  {
    slug: "selection",
    name: "Vendor & Solution Selection",
    text: "A fair, documented way to compare software options against what you actually need.",
    points: [
      "Requirements scoring matrix",
      "Vendor demo scripts",
      "Recommendation report",
    ],
  },
  {
    slug: "workshops",
    name: "Stakeholder Workshops",
    text: "Facilitated sessions that get decisions made and written down.",
    points: [
      "Half-day and full-day formats",
      "Remote or on site",
      "Decision log and follow-up",
    ],
  },
];

export const process = [
  {
    n: "01",
    title: "Listen",
    text: "A short call and a stakeholder round to understand the problem in the words of the people who live with it.",
  },
  {
    n: "02",
    title: "Map",
    text: "We document what is happening today, with the evidence, so everyone starts from the same picture.",
  },
  {
    n: "03",
    title: "Recommend",
    text: "Clear options with trade-offs, costs and a recommendation, not a pile of slides.",
  },
  {
    n: "04",
    title: "Hand over",
    text: "Requirements, maps and a plan your team owns, with support through the first delivery cycle.",
  },
];

export const caseStudies = [
  {
    slug: "credit-union",
    client: "A regional credit union",
    sector: "Financial services",
    title: "Cutting digital onboarding from six steps to three",
    problem:
      "New members abandoned the online application, and staff re-keyed half of what they submitted.",
    approach: [
      "Mapped the application from the member's side and the back office's side",
      "Ran two workshops to agree which data was truly required",
      "Wrote stories and acceptance criteria for the new flow",
    ],
    result:
      "Illustrative result: abandoned applications fell by about a third, and manual re-keying was removed from the process.",
  },
  {
    slug: "logistics",
    client: "A mid-sized logistics firm",
    sector: "Transport",
    title: "Finding the hand-offs that were delaying every shipment",
    problem:
      "Dispatch, billing and customer service each kept their own version of a shipment's status.",
    approach: [
      "Process-mapped 14 steps across three teams",
      "Ran a waste and rework analysis",
      "Designed a single shared status record",
    ],
    result:
      "Illustrative result: invoice disputes dropped and billing close moved from nine days to five.",
  },
  {
    slug: "nonprofit",
    client: "A national nonprofit",
    sector: "Non-profit",
    title: "Choosing a donor system without the sales pitch",
    problem: "Four vendors, three opinions, and no shared way to compare them.",
    approach: [
      "Built a weighted requirements matrix with staff and board",
      "Scripted identical vendor demos",
      "Wrote the recommendation and risk report",
    ],
    result:
      "Illustrative result: a unanimous board decision in six weeks, and a contract negotiated against clear requirements.",
  },
];

export const insights = [
  {
    title: "What a good requirement actually looks like",
    date: "Oct 2026",
    read: "6 min read",
    tag: "Requirements",
    text: "Most requirements fail in the same three ways. Here is how to spot them before the build starts.",
  },
  {
    title: "Before you buy software, map the process",
    date: "Sep 2026",
    read: "5 min read",
    tag: "Process",
    text: "A tool will not fix a process nobody has written down. Start with the map.",
  },
  {
    title: "Scrum without the theatre",
    date: "Aug 2026",
    read: "7 min read",
    tag: "Agile",
    text: "If your ceremonies feel like a performance, the fix is usually smaller than you think.",
  },
  {
    title: "How to run a workshop that ends in decisions",
    date: "Jul 2026",
    read: "4 min read",
    tag: "Workshops",
    text: "A simple agenda, one facilitator rule and a decision log you will actually use.",
  },
];

export const testimonials = [
  {
    quote:
      "She asked the questions nobody else in the room wanted to ask, and our project was better for it.",
    name: "Programme director, credit union",
  },
  {
    quote:
      "The requirements document was the first one our developers did not send back with questions.",
    name: "Head of IT, logistics firm",
  },
];

export const SLOTS = {
  days: ["Mon", "Tue", "Wed", "Thu", "Fri"],
  times: ["9:30 AM", "11:00 AM", "1:00 PM", "2:30 PM", "4:00 PM"],
  taken: [
    "Mon-11:00 AM",
    "Tue-1:00 PM",
    "Wed-9:30 AM",
    "Wed-4:00 PM",
    "Thu-2:30 PM",
    "Fri-11:00 AM",
  ],
};

// ---- Added for the redesign (fictitious, illustrative) ----

export const stats = [
  { n: 12, suffix: "+", label: "Years in business analysis" },
  { n: 40, suffix: "+", label: "Engagements delivered" },
  { n: 3, suffix: "", label: "Sectors served" },
  { n: 5, suffix: " days", label: "Typical time to a first current-state map" },
];

export const TOPICS = [
  "Requirements",
  "Process improvement",
  "Product ownership",
  "Agile coaching",
  "Software selection",
  "Not sure yet",
];

// Headline figure shown on each case card (illustrative).
export const caseMetrics = {
  "credit-union": { big: "6 → 3", label: "steps in digital onboarding" },
  logistics: { big: "9 → 5", label: "days to close billing" },
  nonprofit: { big: "6 wks", label: "to a unanimous board decision" },
};

export const compare = [
  {
    id: "inhouse",
    tab: "vs. hiring in-house",
    rows: [
      [
        "Time to start",
        "Days, with a short call",
        "Weeks to months of recruiting",
      ],
      [
        "Commitment",
        "Fixed-scope package or day rate",
        "Salary, benefits and overhead",
      ],
      ["Perspective", "Independent, fresh eyes", "Shaped by internal politics"],
      [
        "After the work",
        "Hand-over to your team",
        "Knowledge stays with one person",
      ],
    ],
  },
  {
    id: "big",
    tab: "vs. a large consultancy",
    rows: [
      [
        "Who does the work",
        "The principal consultant",
        "A rotating junior team",
      ],
      [
        "Deliverables",
        "Plain documents your team owns",
        "Long decks and frameworks",
      ],
      ["Pace", "Starts within days", "Proposal cycle before kickoff"],
      ["Cost", "Fixed-scope or day rate", "Premium blended rates"],
    ],
  },
];

export const sectors = [
  "Financial services",
  "Transport & logistics",
  "Non-profit",
  "Public sector",
  "Health & social care",
  "Software & SaaS",
];

export const INSIGHT_TAGS = [
  "All",
  "Requirements",
  "Process",
  "Agile",
  "Workshops",
];
