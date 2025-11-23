"use client";
import { useState, useRef, useEffect } from "react";
import { useAuth } from "../plan/PlanContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import MessageBubble from "../components/MessageBubble";
import MessageInput from "../components/MessageInput";

interface Message {
  id: string;
  from: "user" | "assistant";
  text: string;
  timestamp: Date;
}

const API_URL = "http://localhost:8000/api/chat";

export default function ChatPage() {
  const { isLoggedIn, user } = useAuth(); 
  const router = useRouter();

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      from: "assistant",
      text: "Hi! I'm your AI travel assistant. I can help you plan trips, answer questions about destinations, and provide travel recommendations. What would you like to know?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const didMountRef = useRef(false);

  useEffect(() => {
    if (!isLoggedIn) router.push("/login-signup");
  }, [isLoggedIn, router]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    }
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      from: "user",
      text: input.trim(),
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-user-name": user?.name || "Traveler",
        },
        body: JSON.stringify({
          message: userMessage.text,
          max_tokens: 512,
          temperature: 0.7,
        }),
      });

      if (!res.ok) throw new Error(`Error ${res.status}`);
      const data = await res.json();
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        from: "assistant",
        text: data.reply,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (err: unknown) {
      const messageText =
        err instanceof Error ? err.message : String(err) || "I couldn't respond. Please try again.";
      const errorBubble: Message = {
        id: (Date.now() + 1).toString(),
        from: "assistant",
        text: messageText,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorBubble]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSuggestion = (text: string) => setInput(text);

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center max-w-md w-full animate-slide-up">
          <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Authentication Required</h2>
          <p className="text-gray-600 mb-6">Please log in to chat with our AI travel assistant.</p>
          <Link href="/login-signup">
            <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Log In to Chat
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-8 px-4">
      <div className="max-w-4xl mx-auto h-screen flex flex-col">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in-up">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">AI Travel Assistant</h1>
          <p className="text-base md:text-lg text-gray-600">Ask me anything about your travel plans, destinations, or get personalized recommendations</p>
        </div>

        {/* Chat container */}
        <div className="bg-white rounded-3xl shadow-2xl flex-1 flex flex-col overflow-hidden animate-slide-up">
          <div ref={messagesContainerRef} className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map(msg => (
              <MessageBubble key={msg.id} from={msg.from} text={msg.text} timestamp={msg.timestamp} />
            ))}

            {isTyping && (
              <div className="flex justify-start animate-fade-in-up">
                <div className="flex max-w-xs lg:max-w-md">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-2xl px-4 py-3 shadow-md flex flex-col items-start">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce animation-delay-100"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce animation-delay-200"></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Thinking...</p>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <MessageInput
            input={input}
            setInput={setInput}
            onSend={sendMessage}
            isTyping={isTyping}
            suggestions={["Best time to visit Paris?", "Budget hotels in Tokyo", "Family activities in Bali", "Flight deals to London"]}
            onSuggestionClick={handleSuggestion}
          />
        </div>
      </div>
    </div>
  );
}
