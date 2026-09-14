import type { Dispatch, SetStateAction } from "react";
import type { StackType } from "../Types/StackType";

export interface StackCardProps {
    stackData: StackType[]
    stackButton: string[]
    setStackButton: Dispatch<SetStateAction<string[]>>
}



const StackCard = ({ stackData, stackButton, setStackButton }: StackCardProps) => {

    const handleStackButton = (id: string) => {
        if (stackButton.includes(id)) {
            setStackButton(
                stackButton.filter(stackId => stackId !== id)
            )
        } else {
            setStackButton([...stackButton, id])
        }
    }


    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {stackData.map((stack) => (
                <div
                    key={stack.id}
                    className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >

                    {/* Top section */}
                    <div className="flex items-start justify-between">
                        <img
                            src={stack.icon}
                            alt={`${stack.name} icon`}
                            className="h-10 w-10 object-contain"
                        />

                        {stack.badge && (
                            <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-500">
                                {stack.badge}
                            </span>
                        )}
                    </div>

                    
                    <div className="mt-6">
                        <h2 className="text-2xl font-bold text-slate-900">
                            {stack.name}
                        </h2>

                        <p className="mt-3 min-h-18 text-sm leading-6 text-slate-500">
                            {stack.description}
                        </p>
                    </div>

                    
                    <div className="mt-5 flex items-center justify-between gap-2 text-sm">
                        <span className="rounded-md bg-slate-100 px-3 py-1.5 font-medium text-slate-600">
                            {stack.category}
                        </span>

                        <span className="text-slate-500">
                            {stack.difficulty}
                        </span>

                        <span className="flex items-center gap-1 font-medium text-slate-700">
                            <span className="text-yellow-500">★</span>
                            {stack.rating}
                        </span>
                    </div>

                    
                    <button
                        onClick={() => handleStackButton(stack.id)}
                        type="button"
                        className="mt-5 w-full rounded-xl bg-slate-950 px-4 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-slate-800"
                    >
                        {stackButton.includes(stack.id)
                            ? "Added to Stack"
                            : "Add to Stack"}
                    </button>

                </div>
            ))}
        </div>
    )
}

export default StackCard;