"use client";

import { useEffect, useState } from "react";

import {
  createJournalEntry,
  getJournalEntries,
} from "../api";

import { JournalEntry } from "../types";

export function useJournal() {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadEntries() {
    try {
      const data = await getJournalEntries();
      setEntries(data);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadEntries();
  }, []);

  async function addEntry(text: string) {
    await createJournalEntry(text);
    await loadEntries();
  }

  return {
    entries,
    loading,
    addEntry,
  };
}