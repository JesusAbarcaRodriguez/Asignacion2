
import Dashboard from "@/root/components/dashboard/Dashboard";
import Head from "next/head";

export interface NewItemPropsInfo{
  title:string,
  description:string,
}
const fakeNewsData: NewItemPropsInfo[] = 
  [
    {title:"First new", description:"First long description with details"},
    {title:"Second new", description:"Second long description with details"},
    {title:"Third new", description:"Third long description with details"},
    {title:"Fourth new", description:"Fourth long description with details"},
    {title:"Fifth new", description:"Fifth long description with details"},
    {title:"Sixth new", description:"Sixth long description with details"}
  ]

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-300">
       <Dashboard items={fakeNewsData}/>
       
      </main>
    </div>
  );
}
