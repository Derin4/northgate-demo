import InsightList from "../_components/InsightList";
import SectionHead from "../_components/SectionHead";

export const metadata = { title: "Insights" };

export default function InsightsPage() {
  return (
    <div className='mx-auto max-w-4xl px-6 py-16'>
      <SectionHead eyebrow='Insights' title='Short, practical writing' />
      <InsightList />
    </div>
  );
}
