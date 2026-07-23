export const productStats = [
  { label: "Airports", value: "9,685" },
  { label: "Airline profiles", value: "231" },
  { label: "Aircraft variants", value: "158" },
] as const;

export const missionFiles = [
  {
    number: "01",
    title: "A persistent career",
    copy: "Contracts, ratings, money, reputation and every completed leg remain connected in one permanent career record.",
    register: "CAREER RECORD",
  },
  {
    number: "02",
    title: "An operation to fly",
    copy: "Choose a charter contract or fly your airline rotation in sequence, with a real route, aircraft, briefing and reward.",
    register: "ASSIGNED OPS",
  },
  {
    number: "03",
    title: "Performance with consequences",
    copy: "Landing quality, punctuality and FOQA events shape your score, reputation and the opportunities that open next.",
    register: "FLIGHT QUALITY",
  },
] as const;

export const careerLoop = [
  {
    number: "01",
    title: "Choose",
    copy: "Pick a global charter contract or report for the next leg in your airline rotation.",
    status: "BOARD OPEN",
  },
  {
    number: "02",
    title: "Brief",
    copy: "Review the route, METAR, aircraft, schedule, payout, distance and operational details.",
    status: "ASSIGNED",
  },
  {
    number: "03",
    title: "Dispatch",
    copy: "Open SimBrief and fetch the OFP for fuel, times, cruise level and the filed route.",
    status: "OFP FILED",
  },
  {
    number: "04",
    title: "Fly",
    copy: "Fly in MSFS while Pilot Journey records live telemetry, progress and operational events.",
    status: "AIRBORNE",
  },
  {
    number: "05",
    title: "Debrief",
    copy: "Receive a score for landing quality, punctuality and FOQA discipline.",
    status: "SCORED",
  },
  {
    number: "06",
    title: "Progress",
    copy: "Bank the payout and miles, move your reputation and work toward the next rating or airline.",
    status: "RECORDED",
  },
] as const;

export const operationFeatures = [
  {
    id: "career-dashboard",
    register: "CONSOLE / 01",
    title: "Start with the operation in front of you.",
    copy: "See the active flight, next rotation leg, balance, weather, progression, recent legs and current contract from one dashboard.",
    visual: "dashboard",
  },
  {
    id: "airline-schedule",
    register: "SCHEDULE / 02",
    title: "Fly a real rotation in sequence.",
    copy: "Airline contracts generate rostered blocks with flight numbers, assigned aircraft, payouts, miles and ordered legs you must work through.",
    visual: "assignment",
  },
  {
    id: "charter-board",
    register: "CHARTER / 03",
    title: "Find work anywhere in the world.",
    copy: "Filter generated charter contracts by origin, aircraft, distance and region, then weigh the ferry, deadline, passengers and reward.",
    visual: "market",
  },
  {
    id: "live-flight",
    register: "LIVE FLIGHT / 04",
    title: "Carry the briefing into the cockpit.",
    copy: "Follow the filed route, fuel, weather, flight phase and live progress while SimConnect turns the simulator session into an operation.",
    visual: "live-flight",
  },
  {
    id: "mailbox",
    register: "MAILBOX / 05",
    title: "Your career communicates with you.",
    copy: "Receive dispatch briefings, airline offers, schedule changes, safety notices, type ratings, recognition and financial warnings.",
    visual: "mailbox",
  },
  {
    id: "logbook",
    register: "LOGBOOK / 06",
    title: "Keep the record of the career you flew.",
    copy: "Every completed leg stores its route, aircraft, block time, touchdown, score and payout in one permanent flight history.",
    visual: "logbook",
  },
] as const;

export const careerEvents = [
  { code: "DSP-01", title: "Dispatch briefings and filed flight plans", type: "message" },
  { code: "OPS-02", title: "Airline schedules, contracts and job offers", type: "notice" },
  { code: "TRN-03", title: "Type ratings and qualification updates", type: "transfer" },
  { code: "FOQA-04", title: "Safety notices and performance recognition", type: "review" },
  { code: "FLT-05", title: "Fleet registrations and aircraft changes", type: "notice" },
  { code: "FIN-06", title: "Finance warnings and career milestones", type: "alert" },
] as const;

export const careerPath = [
  { title: "Cadet", gate: "Levels 1–9", code: "CDT" },
  { title: "First Officer", gate: "Levels 10–13", code: "FO" },
  { title: "Senior First Officer", gate: "Levels 14–16", code: "SFO" },
  { title: "Captain", gate: "Levels 17–20", code: "CPT" },
  { title: "Senior Captain", gate: "Levels 21–25", code: "SCPT" },
  { title: "Training Captain", gate: "Levels 26–29", code: "TRG" },
  { title: "Chief Pilot", gate: "Level 30+", code: "CHF" },
] as const;

export const progressionRequirements = [
  "Pilot level",
  "Prerequisite ratings",
  "Airline entry tier",
  "Reputation",
  "Miles flown",
  "Training bond",
] as const;

export const integrationSteps = [
  {
    number: "01",
    title: "Dispatch with SimBrief",
    copy: "Import the real OFP, scheduled times, cruise level, fuel, alternate and filed route when you want the complete briefing.",
  },
  {
    number: "02",
    title: "Connect live telemetry",
    copy: "Use local SimConnect or the remote Bridge while Pilot Journey reads position, speed, fuel, touchdown, overspeed and stall state.",
  },
  {
    number: "03",
    title: "Close the operation",
    copy: "Auto-complete after parking or finish manually, then post the score, payout, miles, reputation change and logbook entry.",
  },
] as const;

export const audiences = [
  "Flight simmers who want a reason to choose the next route",
  "Airline pilots who enjoy schedules, dispatch and operational structure",
  "GA pilots who want charter work to build toward larger aircraft",
  "Career players who value persistent records, finances and progression",
] as const;

export const productPrinciples = [
  {
    title: "Operational",
    copy: "Every flight starts with an assignment, briefing, aircraft and outcome.",
  },
  {
    title: "Persistent",
    copy: "Routes, landings, ratings, money and reputation survive every session.",
  },
  {
    title: "Consequential",
    copy: "Performance and career decisions change what becomes available next.",
  },
  {
    title: "Flexible",
    copy: "Build from GA charter work, start airline-ready or move between both paths.",
  },
] as const;

export const scoringComponents = [
  {
    value: "65%",
    title: "Landing",
    copy: "Touchdown vertical speed and peak g-force form the landing component.",
  },
  {
    value: "35%",
    title: "On-time",
    copy: "Arrival against the SimBrief schedule, with a standard 15-minute late window.",
  },
  {
    value: "−30",
    title: "FOQA cap",
    copy: "Overspeed and stall-warning time can deduct up to 30 points per flight.",
  },
] as const;

export const ratingTiers = [
  "Single piston",
  "Twin piston",
  "Turboprop",
  "Business jet",
  "Regional jet",
  "Narrow-body",
  "Wide-body",
  "Heavy / jumbo",
  "Supersonic",
] as const;

export const faqItems = [
  {
    question: "What is Pilot Journey?",
    answer:
      "Pilot Journey is a career-progression layer for Microsoft Flight Simulator. Contracts, live flights, performance, money, ratings and airline employment become one persistent career.",
  },
  {
    question: "What does the flight score include?",
    answer:
      "The composite score uses landing quality and on-time arrival when those measurements are available. Overspeed and stall-warning time can apply FOQA deductions. The result moves your reputation, while the agreed payout is paid in full.",
  },
  {
    question: "Is SimBrief required?",
    answer:
      "No. The career loop works without it. SimBrief is recommended because it adds the real OFP, scheduled times, cruise altitude, fuel figures, alternate and filed route.",
  },
  {
    question: "Does Pilot Journey connect directly to MSFS?",
    answer:
      "Yes. On the same Windows PC it uses local SimConnect. A separate Pilot Journey Bridge supports a second Windows PC or a macOS career console on the same network.",
  },
  {
    question: "Can I start with general aviation or an airline?",
    answer:
      "Yes. Start from zero with GA charter work, or choose the airline-ready path at level 12 with a training-debt balance.",
  },
  {
    question: "How do aircraft and airlines unlock?",
    answer:
      "Nine training tiers take you from single piston to supersonic. Airline eligibility checks both your level and your prerequisite ratings; signing can grant the operator's starter-fleet rating with a training bond.",
  },
  {
    question: "How large is the operating world?",
    answer:
      "The current app database contains 9,685 airports, 231 airline profiles, 158 aircraft variants, 60 aircraft families, 11,387 runways and 17,994 radio frequencies.",
  },
  {
    question: "Which simulator versions are supported?",
    answer:
      "Pilot Journey is built around Microsoft Flight Simulator 2020 and Microsoft Flight Simulator 2024.",
  },
  {
    question: "When will Pilot Journey be available?",
    answer:
      "A public release date has not been announced. Join the launch list for meaningful development and availability updates.",
  },
] as const;
