import { Suspense } from "react";
import BookCall from "../_components/BookCall";
import SectionHead from "../_components/SectionHead";

export const metadata = { title: "Book a call" };

export default function BookPage() {
  return (
    <div className='mx-auto max-w-6xl px-6 py-16'>
      <SectionHead
        eyebrow='Book a call'
        title='Thirty minutes, no obligation'
        text='Tell us what you are trying to solve and we will tell you honestly whether we can help.'
      />
      <Suspense fallback={<p className='font-body text-muted'>Loading…</p>}>
        <BookCall />
      </Suspense>
    </div>
  );
}
