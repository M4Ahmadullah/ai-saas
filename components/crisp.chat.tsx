'use client'

import { useEffect } from "react"
import { Crisp } from "crisp-sdk-web"


export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("c1232613-b4a2-4e45-a099-79f5346acc61");
    }, []);

    return null;
}