import { Heading } from '@/components/Heading'
import { Settings } from 'lucide-react'
import { checkSubscription } from "@/lib/subscription";
import React from 'react'
import { SubscriptionButton } from '@/components/subscription-button';

const SettingsPage = async () => {

    const isPro = await checkSubscription();
  
    return (
    <div>
        <Heading
        description='Manage account Settings.'
        title='Settings'
        icon={Settings}
        iconColor='text-gray-700'
        bgColor='text-gray-700/10'
        />

        <div className='px-4 lg:px-8 space-y-8 '>
            <div className='text-muted-foreground text-sm'>
                {isPro ? "You are Currently on a Pro Plan Subscription" : "You are Currently using the Free Trial Version"}
            </div>
            <SubscriptionButton isPro={isPro} />
        </div>
    </div>
  )
}

export default SettingsPage
