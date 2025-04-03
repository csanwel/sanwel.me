"use client";

import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

import { toast } from "sonner";
import { v4 } from "uuid";
import { copyToClipboard } from "~/lib/copy";

export function UUIDGenerator() {
  function onClick() {
    const uuid = v4();

    void copyToClipboard(uuid, {
      onSuccess: () => {
        toast(`UUID (${uuid}) copied`);
      },
    });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>UUID Generator</CardTitle>
      </CardHeader>
      <CardContent>
        <Button onClick={onClick}>Generate New UUID And Copy</Button>
      </CardContent>
    </Card>
  );
}
