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
   const [properties, setProperties] = useState<PropertyType[]>([]);

   const getproperties = async () => {
     const tmpProperties = await apiService.get('/api/properties/')

     setProperties(tmpProperties.data);
    };
  useEffect(() => {
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