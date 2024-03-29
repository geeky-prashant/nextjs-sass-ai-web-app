import { Avatar, AvatarImage } from "@/components/ui/avatar";

export const BotAvatar = () => {
  return (
    <Avatar className="h-8 w-8 rounded-full bg-yellow-100">
      <AvatarImage className="p-1" src="/chatbot.svg" />
    </Avatar>
  );
};
