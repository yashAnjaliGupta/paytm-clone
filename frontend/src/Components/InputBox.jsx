import { memo } from "react"

export const InputBox=memo(({label, placeholder, onChange}) =>{
  console.log("rendered for", label)
    return <div>
      <div className="text-sm font-medium text-left py-2">
        {label}
      </div>
      <input onChange={onChange} placeholder={placeholder} className="w-full px-2 py-1 border rounded border-slate-200" />
    </div>
})