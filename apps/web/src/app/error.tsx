"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { LogLevel, useLogger } from "next-axiom";

export default function ErrorPage({
  error,
}: {
  error: Error & { digest?: string };
}) {
  const pathname = usePathname();
  const log = useLogger({ source: "error.tsx" });

  log.logHttpRequest(
    LogLevel.error,
    error.message,
    {
      host: window.location.href,
      path: pathname,
      // statusCode: status,
    },
    {
      // cause: error.cause,
      error: error.name,
      stack: error.stack,
      digest: error.digest,
    },
  );

  // log.logHttpRequest(
  //   LogLevel.error,
  //   error.message,
  //   {
  //     host: window.location.href,
  //     path: pathname,
  //     statusCode: status,
  //   },
  //   {
  //     error: error.name,
  //     cause: error.cause,
  //     stack: error.stack,
  //     digest: error.digest,
  //   },
  // );

  return (
    <div className="p-8">
      Ops! An Error has occurred:{" "}
      <p className="px-8 py-2 text-lg text-red-400">`{error.message}`</p>
      <div className="mt-8 w-1/3"></div>
    </div>
  );
}
