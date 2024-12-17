import { redirect } from "next/navigation";
import { getPaginatedProductsWithImages } from "../actions";
import { Pagination, ProductGrid, Title } from "@/components";

interface Props {
  searchParams: {
    page?: string ;
  }
}

export default async function Home({ searchParams }: Props) {

  const { page } = await searchParams; // Espera a que searchParams se resuelva

  const currentPage = page ? parseInt(page) : 1;
  
  const {products, currenPage, totalPages } = await getPaginatedProductsWithImages( page ? { page: currentPage } : {} );

  console.log( currenPage, totalPages )

  if ( products.length === 0 ) {
    redirect('/');
  }

  return (
      <>
       <Title 
        title="Tienda"
        subtitle="Todos los productos"
        className="mb-2" 
       />

       <ProductGrid 
          products={ products } 
        />

        <Pagination totalPages={ totalPages } />
      </>
 
  );
}