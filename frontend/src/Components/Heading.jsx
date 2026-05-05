import { memo } from "react"
export const Heading=memo(({label})=>{
    console.log("heading")
    return <div className="font-bold text-4xl pt-6">
            {label}
        </div>
})