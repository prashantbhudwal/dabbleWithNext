"use server"
import { Session } from "next-auth";
import { mp } from "."
const trackSignOut = (session: Session | null) => {
    mp.track("Sign In", {
        distinct_id: session?.user?.email,
        email: session?.user?.email,
        name: session?.user?.name,
        image: session?.user?.image,
    });
}

export { trackSignOut };