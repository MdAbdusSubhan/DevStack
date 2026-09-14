import type { Dispatch, SetStateAction } from "react"
import type { StackType } from "../Types/StackType"
import { FiX } from "react-icons/fi"

export interface SelectedProps {
    stackData: StackType[]
    stackButton: string[]
    setStackButton: Dispatch<SetStateAction<string[]>>
}

const Selected = ({ stackData, stackButton, setStackButton }: SelectedProps) => {

    const selectedStacks = stackData.filter((stack) => stackButton.includes(stack.id));

    const handleRemoveStack = (id: string) => { setStackButton((previousStack) => previousStack.filter((stackId) => stackId !== id)); };

    return (
        <div className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

            <h2 className="text-base font-semibold text-gray-900"> Your Stack </h2>


            <p className="mt-1 text-sm text-gray-400"> {selectedStacks.length === 0 ? "No technologies selected yet." : `${selectedStacks.length} technologies selected`} </p>


            <div className="mt-4 flex flex-col gap-3">

                {
                    selectedStacks.length === 0 ? (<div className="flex min-h-24 items-center justify-center rounded-xl border border-dashed border-gray-200"> <p className="text-sm text-gray-400"> Your stack is empty. </p> </div>) : selectedStacks.map((stack) => (<div key={stack.id} className="flex w-full max-w-sm items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm" >

                        <div className="flex items-center gap-3">

                            <img src={stack.icon} alt={stack.name} className="h-9 w-9 rounded-lg object-contain" />

                            <div> <p className="text-sm font-semibold text-gray-900"> {stack.name} </p>

                                <p className="text-xs text-gray-400"> {stack.category} </p> </div>

                        </div>

                        <button type="button" aria-label={`Remove ${stack.name}`} onClick={() => handleRemoveStack(stack.id)} className="text-gray-400 hover:text-gray-600" > <FiX size={18} /> </button>


                    </div>


                    ))}
                {selectedStacks.length > 0 && (
                    <button
                        type="button"
                        onClick={() => setStackButton([])}
                        className="mt-4 w-full rounded-xl bg-red-500 px-4 py-3 text-sm font-medium text-white transition hover:bg-red-600"
                    >
                        Remove All
                    </button>
                )}
            </div>

        </div>
    )


}
export default Selected