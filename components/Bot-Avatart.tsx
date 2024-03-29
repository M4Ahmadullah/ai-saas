import { Avatar, AvatarImage } from "./ui/avatar"

export const BotAvatar = () => {
    return (
        <Avatar className="h-16 w-12">
            <AvatarImage
            className="p-1"
            src="/logo.png"
            alt="logo"
            />
        </Avatar>
    )
}