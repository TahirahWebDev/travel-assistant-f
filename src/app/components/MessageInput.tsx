interface MessageInputProps {
  input: string;
  setInput: (value: string) => void;
  onSend: (e: React.FormEvent) => void;
  isTyping: boolean;
  suggestions: string[];
  onSuggestionClick: (text: string) => void;
}

export default function MessageInput({ input, setInput, onSend, isTyping, suggestions, onSuggestionClick }: MessageInputProps) {
  return (
    <div className="p-6 bg-white border-t border-emerald-50">
      {/* Suggestions Bar */}
      <div className="flex flex-wrap gap-2 mb-6">
        {suggestions.map((s, i) => (
          <button
            key={i}
            type="button"
            onClick={() => onSuggestionClick(s)}
            disabled={isTyping}
            className="px-4 py-1.5 bg-emerald-50/50 border border-emerald-100 rounded-full text-xs font-bold text-emerald-800 hover:bg-emerald-100 transition-all disabled:opacity-50"
          >
            {s}
          </button>
        ))}
      </div>

      <form onSubmit={onSend} className="flex items-center gap-3">
        <div className="flex-1 relative group">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Describe your next expedition..."
            /* FIXED: Forced high-contrast text and bold weight */
            className="w-full px-6 py-4 bg-emerald-50/30 border border-emerald-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-emerald-500/5 focus:border-emerald-500 outline-none transition-all text-slate-900 placeholder:text-slate-400 font-bold shadow-inner"
            disabled={isTyping}
          />
        </div>

        <button
          type="submit"
          disabled={!input.trim() || isTyping}
          className="bg-emerald-800 text-white p-4 rounded-2xl font-bold shadow-lg shadow-emerald-100 hover:bg-emerald-900 hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:grayscale"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </form>
    </div>
  );
}