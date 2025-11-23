export default function Animations() {
  return (
    <style dangerouslySetInnerHTML={{
      __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
        body { font-family: 'Inter', sans-serif; }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slide-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in-up { animation: fade-in-up .8s forwards; opacity: 0; }
        .animate-slide-up { animation: slide-up .8s forwards; opacity: 0; }
        .animate-fade-in { animation: fade-in-up .8s forwards; opacity: 0; }

        .animation-delay-200 { animation-delay: .2s; }
        .animation-delay-400 { animation-delay: .4s; }
      `
    }} />
  );
}
