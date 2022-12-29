import clsx from "clsx"
import { useCollections } from "medusa-react"
import Link from "next/link"
import CountrySelect from "../country-select"
import Input from "@modules/common/components/input"
import Button from "@modules/common/components/button"
import { useForm } from "react-hook-form"
import { emailRegex } from "@lib/util/regex"
import { useState } from "react"

const FooterNav = () => {
  // const { collections } = useCollections()
  const currentYear = new Date().getFullYear()

  const [isLoading, setIsLoading] = useState(false)

  type EmailFormValues = {
    email: string
  }

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, touchedFields },
  } = useForm<EmailFormValues>({
    mode: "onSubmit",
  })

  function onApply() {
    setIsLoading(true)
    console.log("submitted!")
  }

  return (
    <div className="content-container flex flex-col gap-y-8 pt-16 pb-8">
      <div className="flex flex-col gap-y-6 gap-x-36 xsmall:flex-row items-start justify-between">
        <div className="w-full xsmall:w-2/6">
          <Link href="/">
            <a className="text-xl-semi uppercase">KBDSHOP</a>
          </Link>
          <div className="mt-2 text-sm">
            <span>To provide the finest selection of mechanical keyboards and accessories, with a dedication to delivering unparalleled quality and value.</span>
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <div className="text-base-semi">KEEP IN TOUCH</div>
          <div className="text-sm">Sign up to our newsletter and receive a 10% discount on your next order.</div>
          <div className="mt-2">
            <form onSubmit={handleSubmit(onApply)} className="w-full">
              <div className="grid grid-cols-[1fr_120px] gap-x-2">
                <Input
                  label="Enter your email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: emailRegex,
                  })}
                  autoComplete="email"
                  errors={errors}
                  touched={touchedFields}
                />
                <div>
                  <Button
                    className="!min-h-[0] h-[46px] w-[120px]"
                    disabled={isLoading}
                    isLoading={isLoading}
                  >
                    Sign up
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-2 xsmall:mt-0 text-small-regular grid grid-cols-2 gap-x-16">
          <div className="flex flex-col gap-y-2">
            <span className="text-base-semi">ABOUT</span>
            <ul className="grid grid-cols-1 gap-y-2">
              <li>
                <a
                  href="https://github.com/medusajs"
                  target="_blank"
                  rel="noreferrer"
                >
                  About KBDSHOP
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/medusajs/nextjs-starter-medusa"
                  target="_blank"
                  rel="noreferrer"
                >
                  Contact Us
                </a>
              </li>
            </ul>
            {/* <ul
              className={clsx("grid grid-cols-1 gap-y-2", {
                "grid-cols-2": (collections?.length || 0) > 4,
              })}
            >
              {collections?.map((c) => (
                <li key={c.id}>
                  <Link href={`/collections/${c.id}`}>
                    <a>{c.title}</a>
                  </Link>
                </li>
              ))}
            </ul> */}
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="text-base-semi">COMPANY</span>
            <ul className="grid grid-cols-1 gap-y-2">
              <li>
                <a
                  href="https://github.com/medusajs"
                  target="_blank"
                  rel="noreferrer"
                >
                  Shipping and Returns
                </a>
              </li>
              <li>
                <a
                  href="https://docs.medusajs.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse gap-y-4 justify-center xsmall:items-center xsmall:flex-row xsmall:items-end xsmall:justify-between">
        <span className="text-xsmall-regular text-gray-500">
          © COPYRIGHT {currentYear} KBDSHOP
        </span>
        <div className="min-w-[316px] flex xsmall:justify-end">
          <CountrySelect />
        </div>
      </div>
    </div>
  )
}

export default FooterNav
