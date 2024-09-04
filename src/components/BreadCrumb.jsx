import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
  

function BreadCrumb({location , location_url , destination , hotel}) {
  return (
    <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage href={`/${location_url}`}>{location}</BreadcrumbPage>
      </BreadcrumbItem>
     {hotel && (
         <>
         <BreadcrumbSeparator />
         <BreadcrumbItem>
           <BreadcrumbPage href={`/${destination}`}>{hotel}</BreadcrumbPage>
         </BreadcrumbItem>
         </>
     )}
    </BreadcrumbList>
  </Breadcrumb>
  )
}

export default BreadCrumb