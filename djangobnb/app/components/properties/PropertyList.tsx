'use client';

import { useEffect,useState } from "react";
import PropertyListItem from "./propertyListItem";
import apiService from "@/app/services/apiService";
import { error } from "console";

export type PropertyType = {
   id:string;
   title:string;
   image_url:string;
   price_per_night:number;
}

const PropertyList = () => {
   const [properties, setproperties] = useState<PropertyType[]>([]);

   const getproperties = async () => {
      const url = 'http://localhost:8000/api/properties/';

      await fetch(url, {
        method :"GET"
      })
        .then(response => response.json())
        .then((json) => {
          console.log('json',json);

          setproperties(json.data)
        })
        .catch((error) => {
          console.log('error',error);
        })
    };
  useEffect(() => {

    apiService.get('hello');
    getproperties();
  }, []);
    return (
        <>
          {properties.map((property) => {
            return (
              <PropertyListItem 
                key={property.id}
                property={property}
              />
            )
          })}
        </>
    )
}

export default PropertyList;