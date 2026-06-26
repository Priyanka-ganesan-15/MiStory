import { JournalEntry } from "./types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getJournalEntries(): Promise<JournalEntry[]> {
  const response = await fetch(`${API_URL}/api/conversations`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch journal entries");
  }

  return response.json();
}

export async function createJournalEntry(
  text: string
): Promise<JournalEntry> {
  const response = await fetch(`${API_URL}/api/conversations`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text,
      source: "text",
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to create journal entry");
  }

  return response.json();
}