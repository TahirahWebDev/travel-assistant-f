interface MessageProps {
  from: "user" | "assistant";
  text: string;
  timestamp: Date;
}

export default function MessageBubble({ from, text, timestamp }: MessageProps) {
  const isUser = from === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-2`}>
      <div className={`flex max-w-[85%] lg:max-w-md ${isUser ? "flex-row-reverse" : "flex-row"} items-end`}>
        
        {/* Avatar Area */}
        <div className={`flex-shrink-0 ${isUser ? "ml-3" : "mr-3"}`}>
          <div className={`w-8 h-8 rounded-xl flex items-center justify-center shadow-sm ${
            isUser ? "bg-emerald-100 text-emerald-800" : "bg-emerald-800 text-emerald-50"
          }`}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} 
                d={isUser ? "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" : "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"} 
              />
            </svg>
          </div>
        </div>

        {/* Bubble Area */}
        <div className={`relative px-5 py-3 rounded-[24px] shadow-sm border ${
          isUser 
            ? "bg-emerald-800 text-white border-emerald-900 rounded-br-none" 
            : "bg-white text-slate-900 border-emerald-50 rounded-bl-none"
        }`}>
          <p className="text-[15px] leading-relaxed whitespace-pre-wrap font-medium">
            {text}
          </p>
          <div className={`flex items-center gap-1 mt-1.5 opacity-60 ${isUser ? "justify-end" : "justify-start"}`}>
            <span className="text-[10px] font-bold uppercase tracking-tighter">
              {timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}