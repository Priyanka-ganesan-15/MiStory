import { JournalEntry } from "./types";

const journalEntries: JournalEntry[] = [];

export function addJournalEntry(text: string): JournalEntry {
  const entry: JournalEntry = {
    id: crypto.randomUUID(),
    text,
    createdAt: new Date().toISOString(),
  };

  journalEntries.unshift(entry);
  return entry;
}

export function getJournalEntries(): JournalEntry[] {
  return journalEntries;
}