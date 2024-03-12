import { DatePickerDemo } from "@/components/DatePicker";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

export default function Home() {
  return (
    <main className="hero-bg pb-40">
      <nav className="flex justify-between items-center max-w-7xl mx-auto h-20">
        <div>
          <img
            className="w-[180px]"
            src="https://i.ibb.co/m98t63g/Frame-17-1.png"
            alt=""
          />
        </div>
        <div className="text-[#20415A] flex gap-4 text-[14px] font-semibold">
          <Link href="/support">Support</Link>
          <Link href="/auth/login">Sign in</Link>
        </div>
      </nav>
      <div className="text-[#20415A] my-20">
        <h1 className="text-[42px] text-center font-semibold mb-2 ">
          Your One-Stop Destination for Bus Travel in Bangladesh
        </h1>
        <p className="text-center">Enjoy Exclusive Savings on Select Routes</p>
      </div>
      <div className="flex max-w-7xl mx-auto items-center justify-center h-10">
        <div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Origin" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ctg">Chittagong</SelectItem>
              <SelectItem value="dhaka">Dhaka</SelectItem>
              <SelectItem value="cumilla">Cumilla</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Destination" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ctg">Chittagong</SelectItem>
              <SelectItem value="dhaka">Dhaka</SelectItem>
              <SelectItem value="cumilla">Cumilla</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <DatePickerDemo />
        </div>
        <div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Passengers" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4">4</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button>Search</Button>
      </div>
    </main>
  );
}
