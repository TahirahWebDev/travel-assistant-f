interface MessageProps {
  from: "user" | "assistant";
  text: string;
  timestamp: Date;
}

export default function MessageBubble({ from, text, timestamp }: MessageProps) {
  const isUser = from === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} animate-fade-in-up`}>
      <div className={`flex max-w-xs lg:max-w-md ${isUser ? "flex-row-reverse" : "flex-row"}`}>
        <div className={`flex-shrink-0 ${isUser ? "ml-3" : "mr-3"}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
            isUser ? "bg-gradient-to-r from-blue-500 to-purple-600" : "bg-gradient-to-r from-green-500 to-blue-500"
          }`}>
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isUser ? "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" : "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"} />
            </svg>
          </div>
        </div>
        <div className={`rounded-2xl px-4 py-3 shadow-md ${isUser ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white" : "bg-gray-100 text-gray-900"}`}>
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{text}</p>
          <p className={`text-xs mt-1 ${isUser ? "text-blue-100" : "text-gray-500"}`}>
            {timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          </p>
        </div>
      </div>
    </div>
  );
}
