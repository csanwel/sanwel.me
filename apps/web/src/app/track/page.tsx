"use client";

import { useEffect } from "react";

import { defaultProperties, track } from "~/services/amplitude";

function TrackPage(params: { searchParams: { page: string } }) {
  const { page } = params.searchParams;

  useEffect(() => {
    track("page_load", { ...defaultProperties, page });
  }, []);

  return <main className="container h-screen py-16"></main>;
}

export default TrackPage;
