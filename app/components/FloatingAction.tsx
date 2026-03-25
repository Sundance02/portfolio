export default function FloatingAction() {
  return (
    <div className="fixed bottom-8 right-8 z-50 lg:bottom-12 lg:right-12">
      <button className="w-16 h-16 bg-secondary text-on-secondary rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group">
        <span className="material-symbols-outlined text-3xl font-bold" data-icon="chat_bubble">chat_bubble</span>
      </button>
    </div>
  );
}
