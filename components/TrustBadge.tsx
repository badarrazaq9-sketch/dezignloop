import { Star } from "lucide-react";

type TrustBadgeProps = {
  text?: string;
  stars?: number;
  avatarCount?: number;
  avatarSize?: string;
};

export default function TrustBadge({
  text = "Trusted by 250+ Business Owners",
  stars = 5,
  avatarCount = 4,
  avatarSize = "w-12 h-12",
}: TrustBadgeProps) {
  // Sample avatar images - you can replace with your own
  const avatars = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    "https://img.freepik.com/free-photo/fascinating-girl-knitted-red-sweater-playfully-smiling-bridge-sunny-day_197531-6799.jpg",
  ];

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Avatars */}
      <div className="flex items-center">
        <div className="flex -space-x-3">
          {avatars.slice(0, avatarCount - 1).map((avatar, i) => (
            <div
              key={i}
              className={`${avatarSize} rounded-full border-2 border-white dark:border-slate-950 overflow-hidden bg-slate-200`}
            >
              <img
                src={avatar}
                alt={`Founder ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          {/* +200 Badge */}
          <div className={`${avatarSize} rounded-full bg-slate-900 dark:bg-slate-800 border-2 border-white dark:border-slate-950 flex items-center justify-center text-white font-bold text-sm`}>
            +247
          </div>
        </div>
      </div>

      {/* Stars */}
      <div className="flex gap-1">
        {[...Array(stars)].map((_, i) => (
          <Star
            key={i}
            size={20}
            className="fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      {/* Text */}
      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center">
        {text}
      </p>
    </div>
  );
}
