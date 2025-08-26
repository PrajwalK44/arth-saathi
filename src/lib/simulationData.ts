export type PersonaType = 'default' | 'freelancer' | 'gigworker' | 'smallbusiness';

export interface PersonaData {
  id: PersonaType;
  name: string;
  startingNetWorth: number;
  monthlyIncome: number;
  monthlyExpenses: number;
  description: string;
}

export interface ChoiceData {
  id: string;
  text: string;
  effect: number;
  description?: string;
}

export interface EventData {
  id: string;
  title: string;
  description: string;
  choices: ChoiceData[];
  month: number;
}

export const simulationData = {
  personas: {
    default: {
      id: 'default' as PersonaType,
      name: 'Alex - Freelance Designer',
      startingNetWorth: 25000,
      monthlyIncome: 4500,
      monthlyExpenses: 3200,
      description: 'A talented freelance graphic designer with irregular income and growing client base.',
    },
    freelancer: {
      id: 'freelancer' as PersonaType,
      name: 'Maya - Content Creator',
      startingNetWorth: 15000,
      monthlyIncome: 3800,
      monthlyExpenses: 2800,
      description: 'A creative freelancer managing multiple income streams with variable monthly earnings.',
    },
    gigworker: {
      id: 'gigworker' as PersonaType,
      name: 'Raj - Delivery Driver',
      startingNetWorth: 8000,
      monthlyIncome: 3200,
      monthlyExpenses: 2600,
      description: 'A dedicated gig worker balancing multiple platforms to maximize earnings.',
    },
    smallbusiness: {
      id: 'smallbusiness' as PersonaType,
      name: 'Sarah - Cafe Owner',
      startingNetWorth: 45000,
      monthlyIncome: 6500,
      monthlyExpenses: 5200,
      description: 'A small business owner managing cash flow and growth investments.',
    },
  } as Record<PersonaType, PersonaData>,

  events: {
    default: [
      {
        id: 'month-1-client-payment',
        title: 'Late Client Payment',
        description: 'Your biggest client is 30 days late on a ₹15,000 payment. Your rent is due in a week.',
        month: 1,
        choices: [
          { id: 'emergency-fund', text: 'Use emergency fund', effect: -8000, description: 'Dip into savings to cover expenses' },
          { id: 'credit-card', text: 'Use credit card', effect: -500, description: 'Pay minimum, accrue interest' },
          { id: 'family-loan', text: 'Borrow from family', effect: 0, description: 'Ask family for temporary help' },
          { id: 'negotiate-landlord', text: 'Negotiate with landlord', effect: -200, description: 'Ask for payment extension' },
        ],
      },
      {
        id: 'month-2-equipment',
        title: 'Equipment Investment',
        description: 'Your laptop is slowing down projects. A new one costs ₹80,000 but could increase your productivity by 40%.',
        month: 2,
        choices: [
          { id: 'buy-new', text: 'Buy new laptop', effect: -80000, description: 'Major investment in productivity' },
          { id: 'buy-refurbished', text: 'Buy refurbished', effect: -35000, description: 'Compromise on performance and cost' },
          { id: 'repair-current', text: 'Repair current laptop', effect: -8000, description: 'Temporary fix, limited improvement' },
          { id: 'wait-save', text: 'Wait and save more', effect: 0, description: 'Continue with current setup' },
        ],
      },
      {
        id: 'month-3-health',
        title: 'Health Emergency',
        description: 'You need an emergency dental procedure. It will cost ₹25,000 and you need it done immediately.',
        month: 3,
        choices: [
          { id: 'private-clinic', text: 'Private clinic', effect: -25000, description: 'Immediate treatment, high cost' },
          { id: 'insurance-claim', text: 'Use health insurance', effect: -5000, description: 'Lower cost but some paperwork delay' },
          { id: 'payment-plan', text: 'Request payment plan', effect: -8000, description: 'Spread cost over time' },
          { id: 'postpone-treatment', text: 'Postpone treatment', effect: 0, description: 'Risk worsening condition' },
        ],
      },
      {
        id: 'month-4-opportunity',
        title: 'Big Project Opportunity',
        description: 'A startup offers you a ₹1,20,000 project, but you need to hire 2 freelancers to complete it on time.',
        month: 4,
        choices: [
          { id: 'hire-team', text: 'Hire team and take project', effect: 75000, description: 'High revenue but upfront costs' },
          { id: 'solo-attempt', text: 'Attempt solo', effect: 40000, description: 'Lower revenue but all profit' },
          { id: 'negotiate-timeline', text: 'Negotiate longer timeline', effect: 60000, description: 'Moderate revenue, manageable workload' },
          { id: 'decline-project', text: 'Decline project', effect: 0, description: 'Focus on current clients' },
        ],
      },
      {
        id: 'month-5-investment',
        title: 'Investment Opportunity',
        description: 'Your friend offers you a chance to invest ₹30,000 in their tech startup. They promise 300% returns in 2 years.',
        month: 5,
        choices: [
          { id: 'invest-full', text: 'Invest ₹30,000', effect: -30000, description: 'High risk, high potential reward' },
          { id: 'invest-partial', text: 'Invest ₹15,000', effect: -15000, description: 'Moderate risk investment' },
          { id: 'research-more', text: 'Research more first', effect: -1000, description: 'Due diligence costs but safer' },
          { id: 'decline-investment', text: 'Decline politely', effect: 0, description: 'Avoid risk entirely' },
        ],
      },
      {
        id: 'month-6-tax',
        title: 'Tax Season Reality',
        description: 'Tax filing reveals you owe ₹45,000 more than expected due to increased freelance income.',
        month: 6,
        choices: [
          { id: 'pay-immediately', text: 'Pay immediately', effect: -45000, description: 'Avoid penalties and interest' },
          { id: 'payment-installments', text: 'Set up installments', effect: -15000, description: 'Spread payments, small penalty' },
          { id: 'hire-ca', text: 'Hire CA for review', effect: -8000, description: 'Professional help, potential savings' },
          { id: 'delay-payment', text: 'Delay payment', effect: -5000, description: 'Risk penalties and interest' },
        ],
      },
      {
        id: 'month-7-course',
        title: 'Skill Development',
        description: 'An advanced design course could increase your rates by 50%, but costs ₹25,000 and takes 3 months.',
        month: 7,
        choices: [
          { id: 'take-course', text: 'Invest in course', effect: -25000, description: 'Long-term earning potential' },
          { id: 'online-alternative', text: 'Find cheaper online option', effect: -8000, description: 'Compromise on quality and networking' },
          { id: 'learn-youtube', text: 'Self-teach via YouTube', effect: -500, description: 'Free learning but less structured' },
          { id: 'focus-current-skills', text: 'Focus on current skills', effect: 0, description: 'No investment, no growth' },
        ],
      },
      {
        id: 'month-8-insurance',
        title: 'Insurance Decision',
        description: 'Your health insurance premium increased to ₹15,000/year. A colleague suggests switching to a cheaper plan.',
        month: 8,
        choices: [
          { id: 'keep-current', text: 'Keep current plan', effect: -15000, description: 'Comprehensive coverage maintained' },
          { id: 'switch-cheaper', text: 'Switch to cheaper plan', effect: -8000, description: 'Save money but lower coverage' },
          { id: 'increase-deductible', text: 'Increase deductible', effect: -10000, description: 'Balanced approach' },
          { id: 'skip-insurance', text: 'Skip insurance this year', effect: 0, description: 'High risk but immediate savings' },
        ],
      },
      {
        id: 'month-9-client-expansion',
        title: 'Client Wants Expansion',
        description: 'Your best client wants to put you on retainer for ₹20,000/month, but you must commit to 20 hours/week.',
        month: 9,
        choices: [
          { id: 'accept-retainer', text: 'Accept retainer', effect: 20000, description: 'Steady income but less flexibility' },
          { id: 'negotiate-terms', text: 'Negotiate better terms', effect: 15000, description: 'Compromise on hours and pay' },
          { id: 'project-basis', text: 'Stick to project basis', effect: 8000, description: 'Maintain flexibility' },
          { id: 'decline-politely', text: 'Decline respectfully', effect: 0, description: 'Risk losing client entirely' },
        ],
      },
      {
        id: 'month-10-emergency',
        title: 'Family Emergency',
        description: 'Your parent needs financial help for medical treatment. They need ₹50,000 urgently.',
        month: 10,
        choices: [
          { id: 'family-full-support', text: 'Provide full amount', effect: -50000, description: 'Support family completely' },
          { id: 'family-partial-support', text: 'Provide ₹25,000', effect: -25000, description: 'Help within your means' },
          { id: 'family-loan-arrange', text: 'Help arrange loan', effect: -5000, description: 'Assist with loan process' },
          { id: 'family-explain-situation', text: 'Explain your situation', effect: 0, description: 'Honest about your limitations' },
        ],
      },
      {
        id: 'month-11-office-space',
        title: 'Office Space Decision',
        description: 'Working from home is limiting client meetings. A co-working space costs ₹8,000/month but could bring new clients.',
        month: 11,
        choices: [
          { id: 'coworking-premium', text: 'Premium co-working space', effect: -12000, description: 'Best networking opportunities' },
          { id: 'coworking-basic', text: 'Basic co-working space', effect: -8000, description: 'Decent space and networking' },
          { id: 'home-office-upgrade', text: 'Upgrade home office', effect: -15000, description: 'One-time investment' },
          { id: 'continue-home', text: 'Continue working from home', effect: 0, description: 'Save money but limit growth' },
        ],
      },
      {
        id: 'month-12-year-end',
        title: 'Year-End Planning',
        description: 'It\'s time to plan for next year. You can invest in marketing, save for taxes, or take a much-needed vacation.',
        month: 12,
        choices: [
          { id: 'marketing-investment', text: 'Invest in marketing', effect: -20000, description: 'Build client base for next year' },
          { id: 'emergency-fund-boost', text: 'Boost emergency fund', effect: -10000, description: 'Financial security for next year' },
          { id: 'vacation-recharge', text: 'Take well-deserved vacation', effect: -15000, description: 'Mental health and recharge' },
          { id: 'conservative-save', text: 'Save conservatively', effect: 0, description: 'Play it safe for the year ahead' },
        ],
      },
    ],
    freelancer: [
      // Similar structure but different scenarios for freelancer persona
      {
        id: 'month-1-platform-fees',
        title: 'Platform Fee Changes',
        description: 'Your main freelancing platform increased fees to 20%. This affects your monthly income significantly.',
        month: 1,
        choices: [
          { id: 'find-alternatives', text: 'Find alternative platforms', effect: -2000, description: 'Time investment but lower fees' },
          { id: 'direct-clients', text: 'Move clients off-platform', effect: 0, description: 'Risk but no platform fees' },
          { id: 'accept-increase', text: 'Accept fee increase', effect: -3000, description: 'Easy but expensive' },
          { id: 'negotiate-rates', text: 'Increase your rates', effect: 1000, description: 'Pass cost to clients' },
        ],
      },
      // ... More freelancer-specific events would go here
    ],
    gigworker: [
      // Similar structure for gig worker
      {
        id: 'month-1-vehicle-maintenance',
        title: 'Vehicle Breakdown',
        description: 'Your delivery vehicle needs major repairs costing ₹25,000. Without it, you can\'t work.',
        month: 1,
        choices: [
          { id: 'full-repair', text: 'Complete repair', effect: -25000, description: 'Back to full earning capacity' },
          { id: 'temporary-fix', text: 'Temporary repair', effect: -8000, description: 'Risk future breakdowns' },
          { id: 'rent-vehicle', text: 'Rent vehicle short-term', effect: -5000, description: 'Continue working while deciding' },
          { id: 'public-transport-gigs', text: 'Switch to walking/cycling gigs', effect: -2000, description: 'Lower income but keep working' },
        ],
      },
      // ... More gig worker events
    ],
    smallbusiness: [
      // Similar structure for small business
      {
        id: 'month-1-inventory-decision',
        title: 'Inventory Investment',
        description: 'Supplier offers 30% bulk discount on inventory, but requires ₹1,00,000 upfront payment.',
        month: 1,
        choices: [
          { id: 'bulk-purchase', text: 'Make bulk purchase', effect: -100000, description: 'Significant savings but cash flow impact' },
          { id: 'partial-bulk', text: 'Partial bulk order', effect: -50000, description: 'Some savings, manageable cash flow' },
          { id: 'regular-orders', text: 'Continue regular orders', effect: -15000, description: 'Higher costs but predictable cash flow' },
          { id: 'negotiate-terms', text: 'Negotiate payment terms', effect: -75000, description: 'Try for better deal structure' },
        ],
      },
      // ... More small business events
    ],
  } as Record<PersonaType, EventData[]>,
};