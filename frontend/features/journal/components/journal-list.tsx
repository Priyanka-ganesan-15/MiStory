import { JournalEntry } from "../types";

export function JournalList({
  entries,
}: {
  entries: JournalEntry[];
}) {
  return (
    <div className="space-y-3">
      {entries.length === 0 && (
        <div className="text-sm text-gray-500">
          No journal entries yet. Start by writing how you&apos;re feeling.
        </div>
      )}

      {entries.map((entry) => (
        <div
          key={entry.id}
          className="bg-white border rounded-xl p-4 shadow-sm"
        >
          <p className="text-sm text-gray-800 whitespace-pre-wrap">
            {entry.text}
          </p>

          <p className="text-xs text-gray-400 mt-2">
            {new Date(entry.created_at).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
}