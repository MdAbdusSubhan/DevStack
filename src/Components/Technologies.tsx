import type { Dispatch, SetStateAction } from "react";
import type { StackType } from "../Types/StackType";
import StackCard from "./StackCard";

export interface TechnologiesProps {
    stackData: StackType[]
    stackButton: string[]
    setStackButton: Dispatch<SetStateAction<string[]>>
}

const Technologies = ({ stackData, stackButton, setStackButton}: TechnologiesProps) => {

    return (
        <div className="mx-auto max-w-7xl pb-4 text-center sm: md:text-center lg: lg:text-left">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Explore the <span className="text-pink-600">Technologies</span>
            </h2>
            <p className="mt-2 text-sm text-gray-500 sm:text-base">
                Pick one technology per category to build your ideal stack.
            </p>
            <div className="mt-8">
                <StackCard stackButton={stackButton} setStackButton={setStackButton} stackData={stackData}></StackCard>
            </div>
        </div>
        
    )
}

export default Technologies;