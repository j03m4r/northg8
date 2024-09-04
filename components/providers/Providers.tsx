"use client";

import React from "react";
import { SessionProvider as Provider } from "next-auth/react";
import { Session } from "next-auth";

type props = {
    children?: React.ReactNode
    session?: Session|null
};

export const Providers = ({ children, session }: props) => {
    return <Provider session={session}>{children}</Provider>;
};
