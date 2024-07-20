"use client";

import React from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import Loader from "@/components/Loader";

const Provider = ({ children }: { children: React.ReactNode }) => (
  <LiveblocksProvider authEndpoint="/api/liveblocks-auth">
    <ClientSideSuspense fallback={<Loader />}>{children}</ClientSideSuspense>
  </LiveblocksProvider>
);

export default Provider;
