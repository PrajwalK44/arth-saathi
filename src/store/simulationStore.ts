import { create } from 'zustand';
import { simulationData } from '../lib/simulationData';
import type { PersonaType } from '../lib/simulationData';

export interface Choice {
  id: string;
  text: string;
  effect: number;
  description?: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  choices: Choice[];
  month: number;
}

export interface Persona {
  id: PersonaType;
  name: string;
  startingNetWorth: number;
  monthlyIncome: number;
  monthlyExpenses: number;
  description: string;
}

export interface SimulationState {
  persona: Persona | null;
  currentMonth: number;
  totalMonths: number;
  events: Event[];
  ledger: Array<{
    month: number;
    eventId: string;
    choiceId: string;
    effect: number;
    netWorth: number;
  }>;
  netWorthHistory: number[];
  currentNetWorth: number;
  isComplete: boolean;
}

export interface SimulationStore extends SimulationState {
  startSimulation: (personaType: PersonaType) => void;
  makeChoice: (eventId: string, choice: Choice) => void;
  advanceMonth: () => void;
  resetSimulation: () => void;
  getCurrentEvent: () => Event | null;
}

const initialState: SimulationState = {
  persona: null,
  currentMonth: 0,
  totalMonths: 12,
  events: [],
  ledger: [],
  netWorthHistory: [],
  currentNetWorth: 0,
  isComplete: false,
};

export const useSimulationStore = create<SimulationStore>((set, get) => ({
  ...initialState,

  startSimulation: (personaType: PersonaType) => {
    const persona = simulationData.personas[personaType];
    const events = simulationData.events[personaType];
    
    set({
      persona,
      currentMonth: 1,
      totalMonths: 12,
      events,
      ledger: [],
      netWorthHistory: [persona.startingNetWorth],
      currentNetWorth: persona.startingNetWorth,
      isComplete: false,
    });
  },

  makeChoice: (eventId: string, choice: Choice) => {
    const state = get();
    const newNetWorth = state.currentNetWorth + choice.effect + (state.persona?.monthlyIncome || 0) - (state.persona?.monthlyExpenses || 0);
    
    const newLedgerEntry = {
      month: state.currentMonth,
      eventId,
      choiceId: choice.id,
      effect: choice.effect,
      netWorth: newNetWorth,
    };

    set({
      ledger: [...state.ledger, newLedgerEntry],
      currentNetWorth: newNetWorth,
      netWorthHistory: [...state.netWorthHistory, newNetWorth],
    });
  },

  advanceMonth: () => {
    const state = get();
    const nextMonth = state.currentMonth + 1;
    
    if (nextMonth > state.totalMonths) {
      set({ isComplete: true });
    } else {
      set({ currentMonth: nextMonth });
    }
  },

  resetSimulation: () => {
    set(initialState);
  },

  getCurrentEvent: () => {
    const state = get();
    return state.events.find(event => event.month === state.currentMonth) || null;
  },
}));