import { StoreGetProductsParams } from "@medusajs/medusa"
import InfiniteProducts from "@modules/products/components/infinite-products"
import RefinementList from "@modules/store/components/refinement-list"
import { useState } from "react"
import Head from "@modules/common/components/head"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import Layout from "@modules/layout/templates"
import { ReactElement } from "react"
import { NextPageWithLayout } from "types/global"

const Home: NextPageWithLayout = () => {
  const [params, setParams] = useState<StoreGetProductsParams>({})

  return (
    <>
      <Head
        title="Home"
        description="Shop all available models only at the KBDSHOP. Duty-free Canadian Shipping. Secure Payment."
      />
      {/* <Hero />
      <FeaturedProducts /> */}
      <div className="flex flex-col small:flex-row small:items-start py-6">
        <InfiniteProducts params={params} />
      </div>
    </>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Home
