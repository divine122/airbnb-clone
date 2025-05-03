import Image from "next/image";
import ReservationSidebar from "@/app/components/properties/ReservationSidebar";
const PropertyDetailPage = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
           <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
               <Image
                fill
                  src='/icn_property_beach.webp'
                  className="object-cover h-full w-full"
                  alt="Beach House"
                />  
           </div>

           <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
               <div className="py-6 pr-6 col-span-3">
                    <h1 className="mb-4 text-4xl">Property name</h1>

                    <span className="mb-6 block text-lg text-gray-600">
                        6 guests - 3 bedrooms - 3 beds - 3 baths
                    </span>

                    <hr />

                    <div className="py-6 flex items-center space-x-4">
                        <Image
                            src='/icn_admin.jpg'
                            width={50}
                            height={50}
                            className="rounded-full"
                            alt="The User"
                        /> 

                        <p><strong>Mia</strong> is Your Host</p>   
                    </div>

                    <hr />

                    <p className="mt-6 text-lg">
                       Wake up to the sound of waves crashing just steps from your door in this stunning beachfront escape. 
                       Featuring floor-to-ceiling windows, sun-drenched interiors, and panoramic ocean views, 
                       this modern retreat blends luxury with nature. Perfect for romantic getaways or peaceful solo stays, 
                       you'll experience ultimate serenity with private beach access, palm-lined surroundings, 
                       and unforgettable sunsets every night
                    </p>
               </div>

               <ReservationSidebar />
           </div>
        </main>   
    )
}


export default PropertyDetailPage;