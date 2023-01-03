import UnderlineLink from "@modules/common/components/underline-link"

const EmptyCartMessage = () => {
  return (
    <div className="bg-amber-100 px-8 py-24 flex flex-col justify-center items-center text-center">
      <h1 className="text-2xl-semi">Your shopping cart is empty</h1>
      <div>
        <UnderlineLink href="/store">Explore products</UnderlineLink>
      </div>
    </div>
  )
}

export default EmptyCartMessage
