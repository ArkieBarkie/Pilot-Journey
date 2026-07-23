# Pilot Journey app content inventory

Extracted from the installed Pilot Journey desktop app on 23 July 2026.

## Scope

- 32 distinct screens and subsections were read.
- All primary navigation areas were covered.
- Settings, Debug and all seven Pilot Manual chapters were covered.
- No pilot data, settings, contracts, money, miles or logbook entries were changed.
- Destructive and transactional controls were deliberately not activated.
- Large directories are documented by structure, counts and representative records rather than duplicating every airport, airline, aircraft or generated charter row.

## Product definition

Pilot Journey is a career-progression layer for Microsoft Flight Simulator. The core promise in the app is:

> Accept contracts, fly them in MSFS, and earn miles and money based on how cleanly you fly, landing rate, on-time arrival, and route adherence. Progress unlocks better aircraft, ratings, and airlines.

The product connects separate simulator sessions into one persistent career through:

- contracts and airline rotations;
- live briefings and flight tracking;
- a permanent logbook;
- performance scoring and reputation;
- ranks, licences and type ratings;
- airline employment and training bonds;
- finances, aircraft ownership and a used market;
- a persistent world of airports, airlines and aircraft.

## Main product loop

The app describes the flight loop as:

1. Open the operations board and choose a charter contract or the next airline-schedule leg.
2. Accept the operation; it becomes the active Live Flight with route map, METAR and aircraft details.
3. Dispatch through SimBrief and fetch the OFP to import schedule, fuel and the filed route.
4. Start the flight, fly it in MSFS and complete it to post the score, payout, miles and reputation change.

Two career paths are supported:

- **From zero:** begin as a student/private pilot, fly GA charter work and build qualifications.
- **Airline:** begin type-rated at level 12 with a negative training balance.

## Navigation and screen content

### Dashboard

An operations overview containing:

- personalised greeting, date and current airline;
- balance, hours and reputation standing;
- live-flight banner with route, aircraft and call to action;
- next scheduled leg and rotation progress;
- wallet and recent cash-flow graph;
- current departure weather and raw METAR;
- career level, title, XP and rank ladder;
- upcoming rotation legs;
- recent logbook legs;
- total-hours, average-landing, contract and milestone cards.

### Inbox

Personal operational mail with decisions and consequences. Message types include:

- dispatch briefings and filed flight plans;
- onboarding;
- airline schedules;
- recognition for smooth landings and on-time streaks;
- safety and stabilised-approach reminders;
- employment contracts, notices and job offers;
- type-rating notifications;
- finance warnings;
- fleet-registration messages;
- SimBrief setup prompts.

A selected dispatch message includes the route, cruise level, block/trip fuel, alternate and complete filed route, with a direct link to Live Flight.

### News

The in-app newspaper is titled **The World Dispatch** and contains:

- markets;
- industry;
- fleet;
- people;
- weather;
- network;
- crew-wanted classifieds matched to the pilot's ratings.

Example editorial themes include fuel prices, crew demand, aircraft deliveries, notable pilots, regional weather and network expansion.

### Airline schedule

A sequential airline rotation in which every leg must be flown in order. Each leg includes:

- leg number and status;
- airline and flight number;
- origin and destination;
- assigned aircraft and registration;
- distance;
- payout;
- miles reward;
- estimated block time;
- boarding pass and route map.

The current sample rotation contains 20 A320 legs for Vueling Airlines.

### Charter

A global contract board with:

- operator-supplied contracts;
- optional own-aircraft contracts;
- filters for origin, aircraft, distance and region;
- deadlines and automatic six-hour refresh;
- ferry distance to the starting airport;
- payout and miles;
- aircraft assignment and passenger load;
- detail view, map and boarding pass.

The current database generated 688 available charter contracts.

### Live Flight

The operational centre for an accepted flight:

- airline, flight number, route, aircraft and registration;
- briefing and full-briefing controls;
- departure/arrival airports and schedule;
- payout, miles, distance and bearing;
- cruise altitude and block time;
- block and alternate fuel;
- filed route;
- SimBrief dispatch and OFP refresh;
- MSFS connection state;
- route map;
- flight phases: departure, climb, cruise, descent, approach and arrival;
- live fuel, distance, altitude, wind, temperature and ETA values;
- release-flight option.

### Logbook

A permanent record containing:

- total flights and block hours;
- on-time rate;
- average and best landing;
- map with flown routes;
- all/month/top-rated filters;
- date, flight number, route, aircraft, block time, landing rate and score;
- full report and planned track playback.

### Career profile

A flight-crew-licence presentation with:

- pilot identity and nationality;
- rank and level;
- airline, home base and current location;
- contract and reputation;
- balance, net worth and hours;
- career statistics;
- hours by type;
- favourite routes;
- held aircraft licences;
- career timeline.

### Contracts

Airline employment includes:

- one active contract at a time;
- home base, fleet, payout multiplier and rank;
- days in service;
- employment pass and termination penalty;
- airline eligibility based on level and training;
- filters for airline type, alliance, region and aircraft;
- sign-contract actions for eligible airlines.

The app database currently contains 231 airlines; the visible European sample lists 66 carriers.

### Training

Training is organised into nine career tiers:

1. Single piston
2. Twin piston
3. Turboprop
4. Business jet
5. Regional jet
6. Narrow-body
7. Wide-body
8. Heavy / jumbo
9. Supersonic

The screen shows:

- unlocked tiers and held ratings;
- current balance;
- prerequisite ladder;
- representative aircraft;
- required levels;
- ratings held versus available;
- rating and tier-unlock cost;
- locked and in-progress states.

### Fleet and hangar

The fleet area contains:

- owned aircraft;
- fleet value;
- new-aircraft showroom;
- used market;
- manufacturer and family grouping;
- aircraft code and full name;
- category and required level;
- passenger capacity and range;
- purchase price;
- licence and affordability state.

The current aircraft catalogue contains 158 variants.

### Finance

The finance screen includes:

- current balance;
- 30-day net;
- income and expenses;
- eight-month cash-flow chart;
- full transaction ledger;
- filters for all, income and expenses;
- transaction categories such as payout, bonus, rating, cancellation, severance and manual adjustment;
- expense and income category summaries.

### Airports

The airport directory contains:

- airport search;
- airport-size and region filters;
- ICAO, IATA, municipality and country;
- aerodrome information sheet;
- fly-here action;
- location map;
- elevation, longest runway and coordinates;
- distance and bearing from the pilot;
- runway designators, size, headings and status;
- COM frequencies.

The diagnostics report 9,685 airports, 11,387 runways and 17,994 frequencies.

### Airlines

The airline reference contains:

- airline search and type/alliance filtering;
- carrier code, business model and minimum level;
- country, callsign and branding;
- route-network map;
- fleet composition;
- hubs;
- founding year, alliance, destination count and payout multiplier.

The diagnostics report 231 airlines, 430 hubs, 1,062 fleet rows and 4,766 destinations.

### Aircraft

The aircraft encyclopaedia contains:

- 60 aircraft families;
- 158 aircraft variants;
- manufacturer grouping;
- family and variant selection;
- required level;
- category and wake class;
- range, seats and cruise speed;
- production history;
- dimensions;
- performance;
- engines and fuel;
- capacity;
- manufacturer information;
- in-game purchase price.

### Settings

Five settings areas are present:

1. **Pilot profile:** pilot name, nationality, avatar, home base and SimBrief identity.
2. **Sim & telemetry:** SimConnect/Bridge provider, remote host and port, reconnect, automatic start and automatic completion.
3. **MSFS hangar:** mark installed simulator aircraft, use presets, select all or clear.
4. **Units & display:** distance, altitude, temperature, weight, time, currency, date format, light/dark theme and keep-awake during flight.
5. **Danger zone:** reset the career while preserving world reference data.

### Help centre

The help centre contains:

- search;
- getting-started guide;
- feature-request and bug-report routes;
- seven Pilot Manual chapters;
- popular questions;
- a product roadmap;
- debug/support entry points.

Roadmap items shown in the app:

- route-adherence scoring — in progress;
- VATSIM/IVAO integration — planned;
- real-weather METAR integration — planned;
- custom livery uploads — exploring.

### Debug

Developer tooling includes:

- pilot money and miles adjustments;
- synthetic logbook flights and completion modal;
- inbox/news test messages;
- Live Flight ETA comparison;
- onboarding reset;
- diagnostics and row counts;
- runtime economy tuning;
- aircraft map-icon previews.

These tools are development-only and should not be marketed as customer-facing features.

## Scoring model

### Composite score

- Landing: **65%**
- On-time arrival: **35%**
- Weights renormalise when a component is unavailable.
- Payout is not multiplied by the score; score affects reputation.

### Landing-rate curve

| Touchdown vertical speed | Label | Score |
| --- | --- | ---: |
| −100 to 0 fpm | Greaser | 85 |
| −200 to −100 fpm | Perfect | 100 |
| −300 to −200 fpm | Firm | 90 |
| −450 to −300 fpm | Firm | 70 |
| −600 to −450 fpm | Hard | 45 |
| −800 to −600 fpm | Heavy | 20 |
| Below −800 fpm | Crash | 0 |
| Above +50 fpm | Floating | 60 |

Landing quality blends sink rate (60% of the landing component) with peak g-force (40%). A hard-landing badge appears above 1.4 g; 2.0 g and above is treated as gear-damage territory.

### On-time scoring

- Early: 100
- On time or within 15 minutes late: 100
- Later than the window: minus 2.5 points per excess minute
- Minimum: 0

### FOQA penalties

- Overspeed: −0.5 points per second
- Stall warning: −1 point per second
- Combined maximum penalty: 30 points
- Counters persist across restarts.

### Reputation

| Flight score | Reputation change |
| --- | ---: |
| 100 | +3 |
| 90–99 | +2 |
| 80–89 | +1 |
| 70 | 0 |
| 60–69 | −1 |
| 50–59 | −2 |
| 40 or below | −3 |

Reputation is clamped between 0 and 100.

## Rank ladders

### Charter ladder

| Level | Rank |
| --- | --- |
| 1–2 | Student Pilot |
| 3–5 | Private Pilot |
| 6–8 | Commercial Pilot |
| 9–12 | Charter Pilot |
| 13–16 | Charter Captain |
| 17–21 | Senior Charter Captain |
| 22+ | Veteran Charter Captain |

### Airline ladder

| Level | Rank |
| --- | --- |
| 1–9 | Cadet |
| 10–13 | First Officer |
| 14–16 | Senior First Officer |
| 17–20 | Captain |
| 21–25 | Senior Captain |
| 26–29 | Training Captain |
| 30+ | Chief Pilot |

## Ratings and employment rules

- Single- and twin-piston tiers use class ratings.
- Turboprop and higher use aircraft-specific type ratings.
- Airline eligibility has both a level gate and a type-rating gate.
- An airline grants its starter-fleet rating when the pilot signs.
- Airline-funded training creates a bond equal to 80% of the tier-unlock cost.
- The bond amortises linearly over the first 30 block hours flown for that airline.
- Leaving an airline also incurs a flat $10,000 severance charge.
- The in-app Training page applies a sponsored rate of 10% when the current airline operates that aircraft.

## Economy and balancing values

- From-zero starting cash: $25,000
- Airline-path starting balance: −$50,000
- Starting reputation: 60/100
- Contract cancellation: 50% of payout
- Charter cancellation reputation: −3
- Airline cancellation reputation: −8
- Skipped airline leg: $2,500 and −5 reputation
- Airline hourly base: $75/hour
- Airline landing bonus base: $200
- Airline-level compensation multiplier: +18% per level
- Pilot-level hourly multiplier: +8% per level
- Charter-board refresh: every six hours
- Generated charter batch: 10–20 contracts per rating group
- Career miles formula: `250 × (level − 1) × (level + 4)`

## Integrations

### SimBrief

Optional but recommended. It provides:

- scheduled departure and arrival;
- cruise altitude;
- block, alternate, taxi and trip fuel;
- filed route and airways;
- alternate airport;
- embedded OFP PDF.

### SimConnect and Bridge

- Local Windows/MSFS setup uses the SimConnect named pipe.
- Remote-PC or macOS use is supported through a separate Pilot Journey Bridge running on the Windows MSFS machine.
- Live telemetry supplies position, altitude, speed, fuel, touchdown, overspeed and stall state.
- Auto-start triggers after engines are running and groundspeed exceeds 5 knots.
- Auto-complete triggers after parking, engines off and roughly 30 seconds stationary.

## Verified database scale

| Dataset | Count |
| --- | ---: |
| Airports | 9,685 |
| Aircraft variants | 158 |
| Airlines | 231 |
| Airline hubs | 430 |
| Airline fleet records | 1,062 |
| Airline destinations | 4,766 |
| Runways | 11,387 |
| Frequencies | 17,994 |
| Aircraft families | 60 |

## Website-ready messages grounded in the app

- **Every flight becomes part of a persistent career.**
- **Choose charter freedom or an airline career.**
- **Fly real rotations in sequence, not disconnected random missions.**
- **Dispatch with SimBrief and follow the operation from briefing to post-flight score.**
- **Build reputation through clean, safe and on-time flying.**
- **Unlock nine training tiers from single piston to supersonic.**
- **Qualify for 231 airlines and explore 158 aircraft across 60 families.**
- **Track every route, landing, payout, rating and career milestone.**
- **Your aircraft, your world and your career continue after every simulator session.**

## Important marketing boundaries

Do not present the following as finished public features:

- route-adherence scoring;
- VATSIM/IVAO integration;
- live real-weather integration;
- custom livery uploads;
- fuel and maintenance economy marked as V2;
- developer/debug controls.

