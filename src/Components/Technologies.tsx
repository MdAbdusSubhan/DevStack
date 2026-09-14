import type { StackType } from "../Types/StackType";

export interface TechnologiesProps {
    stackPromise: Promise<StackType[]>
}

const Technologies = ({ prop }: TechnologiesProps) => {

    return (
        <div className="mx-auto max-w-7xl pb-4 text-center sm: md:text-center lg: lg:text-left">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Explore the <span className="text-pink-600">Technologies</span>
            </h2>
            <p className="mt-2 text-sm text-gray-500 sm:text-base">
                Pick one technology per category to build your ideal stack.
            </p>
        </div>
        
    )
}

export default Technologies;