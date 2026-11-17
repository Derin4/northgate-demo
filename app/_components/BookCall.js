"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { SLOTS } from "../_libs/data";
import DemoForm from "./DemoForm";

export default function BookCall() {
  const params = useSearchParams();
  const topic = params.get("topic") || "";
  const [slot, setSlot] = useState(null);
  return (
    <div className='grid gap-12 lg:grid-cols-[1fr_1fr]'>
      <div className='min-w-0'>
        <h2 className='mb-1 text-2xl'>1. Choose a time</h2>
        <p className='mb-5 font-body text-sm text-muted'>
          30-minute discovery call, Central Time. Illustrative availability.
        </p>
        <div className='overflow-x-auto'>
          <div className='grid min-w-[420px] grid-cols-5 gap-2'>
            {SLOTS.days.map((d) => (
              <div key={d}>
                <p className='mb-2 text-center font-body text-xs font-semibold uppercase tracking-widest text-muted'>
                  {d}
                </p>
                <div className='space-y-2'>
                  {SLOTS.times.map((t) => {
                    const key = `${d}-${t}`;
                    const taken = SLOTS.taken.includes(key);
                    const on = slot === key;
                    return (
                      <button
                        key={key}
                        type='button'
                        disabled={taken}
                        onClick={() => setSlot(key)}
                        className={`w-full border px-1 py-2 font-body text-xs transition-colors ${on ? "pop border-deep bg-deep text-paper" : taken ? "border-line text-muted/40 line-through" : "border-line bg-white hover:border-accent"}`}
                      >
                        {t}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className='mt-4 font-body text-sm text-muted'>
          {slot
            ? `Selected: ${slot.replace("-", " at ")}`
            : "No time selected yet."}
        </p>
      </div>
      <div>
        <h2 className='mb-5 text-2xl'>2. Tell us a little</h2>
        <DemoForm
          initial={{ topic }}
          blocked={!slot}
          blockedNote='Choose a time on the left first.'
          prefix='NG'
          submitLabel='Request this call (demo)'
          successTitle='Call requested'
          successText='You will get a calendar invitation within one business day.'
          fields={[
            { name: "name", label: "Your name", required: true },
            { name: "email", label: "Email", type: "email", required: true },
            { name: "org", label: "Organisation", wide: true },
            {
              name: "topic",
              label: "What would you like help with?",
              type: "select",
              options: [
                "Requirements",
                "Process improvement",
                "Product ownership",
                "Agile coaching",
                "Software selection",
                "Not sure yet",
              ],
              wide: true,
            },
            {
              name: "notes",
              label: "Anything we should know?",
              type: "textarea",
            },
          ]}
        />
      </div>
    </div>
  );
}
