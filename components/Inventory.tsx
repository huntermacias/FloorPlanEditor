import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

type Props = {}

const products = [
    {
        product: "Mac Chair",
        itemNum: 1760047,
        department: "Centers",
        onHand: 129,
        available: 250,
        inRoute: "$250.00",
        location: 'Warehouse 1',
        price: "$250.00",
    },
    // Add more products as needed
];
   
export const Inventory = (props: Props) => {
    return (
      <div className="overflow-hidden shadow-lg rounded-lg">
        <Table className="min-w-full leading-normal">
          <TableCaption className="text-lg p-5 text-gray-300 bg-gray-950 border-b rounded-t-lg">
            Product Inventory for Warehouse
          </TableCaption>
          <TableHeader className="bg-gray-800">
            <TableRow className="">
              <TableHead className="px-5 py-3 border-b-2 border-gray-200 bg-gray-950 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                Item No.
              </TableHead>
              <TableHead className="px-5 py-3 border-b-2 border-gray-200 bg-gray-950 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                Product
              </TableHead>
              <TableHead className="px-5 py-3 border-b-2 border-gray-200 bg-gray-950 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                On Hand
              </TableHead>
              <TableHead className="px-5 py-3 border-b-2 border-gray-200 bg-gray-950 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                Available
              </TableHead>
              <TableHead className="px-5 py-3 border-b-2 border-gray-200 bg-gray-950 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                Department
              </TableHead>
              <TableHead className="px-5 py-3 border-b-2 border-gray-200 bg-gray-950 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                Location
              </TableHead>
              <TableHead className="px-5 py-3 border-b-2 border-gray-200 bg-gray-950 text-xs font-semibold text-gray-300 uppercase tracking-wider text-right">
                Price
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((prod, index) => (
              <TableRow key={index} className="hover:bg-gray-600">
                  <TableCell className="px-5 py-5 border-b border-gray-400 bg-gray-950/80 backdrop-blur-sm filter bg-opacity-10 text-sm">
                    {prod.itemNum}
                  </TableCell>
                  <TableCell className="px-5 py-5 border-b border-gray-400 bg-gray-950/80 backdrop-blur-sm filter bg-opacity-10 text-sm font-medium">
                    {prod.product}
                  </TableCell>
                  <TableCell className="px-5 py-5 border-b border-gray-400 bg-gray-950/80 backdrop-blur-sm filter bg-opacity-10 text-sm">
                    {prod.onHand}
                  </TableCell>
                  <TableCell className="px-5 py-5 border-b border-gray-400 bg-gray-950/80 backdrop-blur-sm filter bg-opacity-10 text-sm">
                    {prod.available}
                  </TableCell>
                  <TableCell className="px-5 py-5 border-b border-gray-400 bg-gray-950/80 backdrop-blur-sm filter bg-opacity-10 text-sm">
                    {prod.department}
                  </TableCell>
                  <TableCell className="px-5 py-5 border-b border-gray-400 bg-gray-950/80 backdrop-blur-sm filter bg-opacity-10 text-sm">
                    {prod.location}
                  </TableCell>
                  <TableCell className="px-5 py-5 border-b border-gray-400 bg-gray-950/80 backdrop-blur-sm filter bg-opacity-10 text-sm text-right">
                    {prod.price}
                  </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
}
