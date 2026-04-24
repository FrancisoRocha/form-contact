import type { ReactNode } from "react"

type ErrorProps = {
    children: ReactNode
}

export default function Error({ children }: ErrorProps) {

    return (
        <p className="text-left text-sm label-base text-error mt-2">
            { children }
        </p>
    )

}
