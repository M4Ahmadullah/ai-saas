'use client'

import { useState } from "react";
import { Zap } from "lucide-react";
import { Button } from "./ui/button";
import axios from "axios";
import toast from "react-hot-toast";

interface SubscriptionButtonProps {
    isPro: boolean;
}

export const SubscriptionButton = ({
    isPro = false
}: SubscriptionButtonProps ) => {

    const [loading, setLoading] = useState(false);
    const onClick = async () => {
        try {
            setLoading(true);
            const respone = await axios.get("api/stripe")
            window.location.href = respone.data.url;
        } catch (error) {
            toast.error("[BILLING_ERROR]");
        } finally {
            setLoading(false);
        }
    }

    return (
      <Button variant={isPro ? "default" : "premium"} onClick={onClick}>
        {isPro ? "Manage Subscription" : "Upgrade"}
        {!isPro && <Zap className="w-4 h-4 ml-2 fill-white" />}
      </Button>
    );
}