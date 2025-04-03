"use client";

import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

type FormValues = {
  hsl: string;
  rgb: string;
};

export function HSLtoRGB() {
  // const form = useForm<FormValues>();

  // function onSubmit(values: FormValues) {
  //   const [h, s, l] = values.hsl.replaceAll("%", "").split(" ");
  //   const rgb = hslToRgb(
  //     parseFloat(h ?? "0"),
  //     parseFloat(s ?? "0"),
  //     parseFloat(l ?? "0")
  //   );

  //   form.setValue("rgb", `rgb(${rgb.r},${rgb.g},${rgb.b})`);
  // }

  return (
    <Card>
      <CardHeader>
        <CardTitle>HSL to RGB</CardTitle>
      </CardHeader>
      <CardContent>
        {/* <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex items-center space-x-2">
              <Label>HSL</Label>
              <FormInput
                name="hsl"
                inputProps={{ placeholder: "360 100% 98.8%" }}
              />
              <Button type="submit">Convert</Button>
            </div>
            <div>RGB: {form.getValues().rgb}</div>
          </form>
        </Form> */}
      </CardContent>
    </Card>
  );
}

/**
 * Converts HSL color values to RGB.
 *
 * @param h - Hue (0-360)
 * @param s - Saturation (0-100)
 * @param l - Lightness (0-100)
 * @returns An object containing r, g, b values in the range of 0-255
 */
function hslToRgb(
  h: number,
  s: number,
  l: number
): { r: number; g: number; b: number } {
  // Normalize saturation and lightness
  const S = s / 100;
  const L = l / 100;

  // Calculate chroma
  const C = (1 - Math.abs(2 * L - 1)) * S;

  // Calculate X and m
  const X = C * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = L - C / 2;

  let r: number, g: number, b: number;

  if (h >= 0 && h < 60) {
    r = C;
    g = X;
    b = 0;
  } else if (h >= 60 && h < 120) {
    r = X;
    g = C;
    b = 0;
  } else if (h >= 120 && h < 180) {
    r = 0;
    g = C;
    b = X;
  } else if (h >= 180 && h < 240) {
    r = 0;
    g = X;
    b = C;
  } else if (h >= 240 && h < 300) {
    r = X;
    g = 0;
    b = C;
  } else {
    r = C;
    g = 0;
    b = X;
  }

  // Convert to RGB and adjust with m
  const red = Math.round((r + m) * 255);
  const green = Math.round((g + m) * 255);
  const blue = Math.round((b + m) * 255);

  return { r: red, g: green, b: blue };
}

// // Example usage:
// const hslColor = { h: 360, s: 100, l: 50 }; // Bright Red
// const rgbColor = hslToRgb(hslColor.h, hslColor.s, hslColor.l);
// console.log(`RGB(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})`); // Output: RGB(255, 0, 0)
