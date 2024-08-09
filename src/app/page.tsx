import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card className="w-[420px]">
      <CardHeader>
        <CardTitle>Edit Profile</CardTitle>
        <CardDescription>Make changes to your profile here. Click save when you're done.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex items-center justify-between space-y-1.5">
              <Label htmlFor="name"  className="ml-8 mr-5" >Name</Label>
              <Input id="name" placeholder="Email" />
            </div>
            <div className="flex items-center justify-between space-y-1.5">
              <Label htmlFor="name" className="mr-5">Username</Label>
              <Input id="name" placeholder="@peduart" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" className="ml-60 bg-green-500 text-white">Save Changes</Button>
      </CardFooter>
    </Card>
    </main>
  );
}
