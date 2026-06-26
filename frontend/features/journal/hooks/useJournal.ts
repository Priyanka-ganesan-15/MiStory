"use client";

import { useState } from "react";
import { addJournalEntry, getJournalEntries } from "../api";
import { JournalEntry } from "../types";

export function useJournal() {
  const [entries, setEntries] = useState<JournalEntry[]>(
    getJournalEntries()
  );

  function addEntry(text: string) {
    addJournalEntry(text);
    setEntries([...getJournalEntries()]);
  }

  return {
    entries,
    addEntry,
  };
}