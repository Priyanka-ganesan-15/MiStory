"use client";

import { useState } from "react";

export function JournalEntryForm({
  onAdd,
}: {
  onAdd: (text: string) => void;
}) {
  const [text, setText] = useState("");

  return (
    <div className="bg-white border rounded-xl p-4 space-y-3 shadow-sm">
      <textarea
        className="w-full min-h-30 text-sm border rounded-md p-3 outline-none focus:ring-2 focus:ring-blue-200"
        placeholder="I've been feeling..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={() => {
          if (!text.trim()) return;
          onAdd(text);
          setText("");
        }}
        className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition"
      >
        Save Entry
      </button>
    </div>
  );
}