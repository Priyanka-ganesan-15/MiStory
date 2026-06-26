"use client";

import { AppShell } from "@/components/layout/app-shell";
import { useJournal } from "@/features/journal/hooks/useJournal";
import { JournalEntryForm } from "@/features/journal/components/journal-entry-form";
import { JournalList } from "@/features/journal/components/journal-list";

export default function JournalPage() {
  const { entries, loading, addEntry } = useJournal();


  return (
    <AppShell>
      <div className="max-w-2xl space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Health Journal
          </h1>
          <p className="text-sm text-gray-500">
            Capture how you&apos;re feeling in your own words.
          </p>
        </div>

        {/* Input */}
        <JournalEntryForm onAdd={addEntry} />
        
        {loading ? (
            <p>Loading...</p>
        ) : (
            <JournalList entries={entries} />
        )}
      </div>
    </AppShell>
  );
}