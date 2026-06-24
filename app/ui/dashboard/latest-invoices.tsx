import { lusitana } from '@/app/ui/fonts';
import { LatestInvoice } from '@/app/lib/definitions';

export default async function LatestInvoices({
  latestInvoices,
}: {
  latestInvoices: LatestInvoice[];
}) {
  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Latest Invoices
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        {latestInvoices.map((invoice) => (
          <div
            key={invoice.id}
            className="flex items-center justify-between border-b py-4 last:border-none"
          >
            <div className="flex items-center">
              <div className="mr-4">
                <div className="h-8 w-8 rounded-full bg-gray-200" />
              </div>
              <div>
                <p className="text-sm font-medium">{invoice.name}</p>
                <p className="text-xs text-gray-500">{invoice.email}</p>
              </div>
            </div>
            <p className={`${lusitana.className} text-sm font-medium`}>
              {invoice.amount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}