export const productStats = [
  { label: "Aircraft profiles", value: "150+" },
  { label: "Airline network", value: "230+" },
  { label: "Simulator support", value: "MSFS 2020 / 2024" },
] as const;

export const missionFiles = [
  {
    number: "01",
    title: "A persistent career",
    copy: "Every application, contract and completed flight becomes part of your permanent career record.",
    register: "CAREER RECORD",
  },
  {
    number: "02",
    title: "Flights with a purpose",
    copy: "Operate assigned routes for real-world-inspired airlines instead of choosing another disconnected free flight.",
    register: "ASSIGNED OPS",
  },
  {
    number: "03",
    title: "Progress that matters",
    copy: "Build experience, protect your reputation and qualify for new aircraft, airlines and command opportunities.",
    register: "QUALIFICATION",
  },
] as const;

export const careerLoop = [
  {
    number: "01",
    title: "Search",
    copy: "Explore airline vacancies and available career opportunities.",
    status: "MARKET OPEN",
  },
  {
    number: "02",
    title: "Apply",
    copy: "Meet the requirements and submit an application.",
    status: "FILED",
  },
  {
    number: "03",
    title: "Sign",
    copy: "Review the offer, aircraft assignment, base and contract conditions.",
    status: "CONTRACT",
  },
  {
    number: "04",
    title: "Operate",
    copy: "Fly the assigned route in Microsoft Flight Simulator.",
    status: "AIRBORNE",
  },
  {
    number: "05",
    title: "Report",
    copy: "Your flight time, performance and operational result are recorded.",
    status: "LOGGED",
  },
  {
    number: "06",
    title: "Progress",
    copy: "Build seniority, unlock opportunities and move closer to the left seat.",
    status: "ADVANCE",
  },
] as const;

export const operationFeatures = [
  {
    id: "career-dashboard",
    register: "CONSOLE / 01",
    title: "Start every session with a clear assignment.",
    copy: "Review your current contract, next operation, career status, recent performance and the opportunities waiting for you.",
    visual: "dashboard",
  },
  {
    id: "airline-market",
    register: "MARKET / 02",
    title: "Find the airline that fits your next move.",
    copy: "Explore available airlines, bases, fleet types and entry requirements. Your experience determines which doors are open.",
    visual: "market",
  },
  {
    id: "contracts",
    register: "CONTRACTS / 03",
    title: "Read the terms before you take the seat.",
    copy: "Compare positions, aircraft assignments, expected schedules and contract conditions before accepting an offer.",
    visual: "contract",
  },
  {
    id: "mailbox",
    register: "MAILBOX / 04",
    title: "Your career communicates with you.",
    copy: "Receive offers, dispatch updates, training notices, performance reviews, operational disruptions and messages from your airline.",
    visual: "screenshot",
  },
  {
    id: "flight-assignment",
    register: "DISPATCH / 05",
    title: "No random route. A real assignment.",
    copy: "Every operation includes an airline, aircraft, route, flight number and operational context connected to your career.",
    visual: "assignment",
  },
  {
    id: "logbook",
    register: "HISTORY / 06",
    title: "A record of the career you actually flew.",
    copy: "Flights, aircraft, airlines, promotions and major career events remain available as one continuous history.",
    visual: "logbook",
  },
] as const;

export const careerEvents = [
  { code: "OPS-21", title: "Job offers and contract renewals", type: "message" },
  { code: "FLT-08", title: "Fleet changes and aircraft transitions", type: "notice" },
  { code: "BASE-14", title: "Base assignments and transfers", type: "transfer" },
  { code: "TRN-31", title: "Training and qualification requirements", type: "notice" },
  { code: "REV-06", title: "Performance reviews and reputation", type: "review" },
  { code: "IRROPS", title: "Delays, disruptions and operational changes", type: "alert" },
] as const;

// Product labels live here so the career ladder can be revised without touching page markup.
export const careerPath = [
  { title: "Student Pilot", gate: "Training record", code: "STU" },
  { title: "Newly Qualified Pilot", gate: "License + hours", code: "NQP" },
  { title: "First Officer", gate: "Type qualification", code: "FO" },
  { title: "Senior First Officer", gate: "Performance + seniority", code: "SFO" },
  { title: "Captain", gate: "Command requirements", code: "CPT" },
  { title: "Training Captain or long-term airline career", gate: "Experience + airline need", code: "TRG" },
] as const;

export const progressionRequirements = [
  "Flight hours",
  "Aircraft qualifications",
  "Performance",
  "Reputation",
  "Airline requirements",
  "Previous experience",
] as const;

export const integrationSteps = [
  {
    number: "01",
    title: "Before the flight",
    copy: "Review the assignment, aircraft, route and operational context.",
  },
  {
    number: "02",
    title: "During the flight",
    copy: "Fly the operation in your preferred simulator environment.",
  },
  {
    number: "03",
    title: "After the flight",
    copy: "Record the result and continue your career from where you left off.",
  },
] as const;

export const audiences = [
  "Flight simmers who struggle to decide what to fly next",
  "Pilots who enjoy airline operations and progression",
  "Users who want a long-term career rather than isolated flights",
  "Players who appreciate realistic structure without excessive micromanagement",
] as const;

export const productPrinciples = [
  {
    title: "Persistent",
    copy: "Your history remains connected across airlines and aircraft.",
  },
  {
    title: "Structured",
    copy: "Assignments, requirements and career opportunities provide direction.",
  },
  {
    title: "Dynamic",
    copy: "Messages, events and operational changes keep the career moving.",
  },
  {
    title: "Personal",
    copy: "No two career histories need to follow the same route.",
  },
] as const;

export const faqItems = [
  {
    question: "What is Pilot Journey?",
    answer:
      "Pilot Journey is a career operations platform for Microsoft Flight Simulator. It connects applications, contracts, assigned flights, performance and progression into one persistent career.",
  },
  {
    question: "Is Pilot Journey a flight simulator?",
    answer:
      "No. The flying still happens in Microsoft Flight Simulator. Pilot Journey provides the career, operational context and continuity around each flight.",
  },
  {
    question: "Which simulators are supported?",
    answer:
      "Pilot Journey is being built for Microsoft Flight Simulator 2020 and Microsoft Flight Simulator 2024.",
  },
  {
    question: "Do I choose my own flights?",
    answer:
      "You choose which opportunities to pursue, then operate routes assigned through your airline, contract and current career position.",
  },
  {
    question: "Can I change airlines during my career?",
    answer:
      "Airline applications and career moves are part of the product direction. Availability depends on your experience, qualifications and the opportunities open to you.",
  },
  {
    question: "Does my career continue between sessions?",
    answer:
      "Yes. Your applications, contracts, completed operations and major career events remain part of one continuous record.",
  },
  {
    question: "Are real-world airlines and aircraft included?",
    answer:
      "Pilot Journey uses real-world-inspired airline operations and currently supports more than 150 aircraft profiles and a network of more than 230 airlines. Names and availability may change before release.",
  },
  {
    question: "When will Pilot Journey be available?",
    answer:
      "A release date has not been announced. Join the launch list to receive meaningful development and availability updates.",
  },
  {
    question: "How can I join the launch list?",
    answer:
      "Enter your email address in the launch access section. The signup service will become active once the mailing backend is connected.",
  },
] as const;
