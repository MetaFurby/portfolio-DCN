import { Transition } from "@headlessui/react"

export type SimpleTransitionProps = {
	show: boolean,
	children: React.ReactNode,
}

const SimpleTransition = ({show, children} : SimpleTransitionProps) => {
  return (
	<Transition 
		show={show}
		enter="transition-opacity duration-200"
		enterFrom="opacity-0"
		enterTo="opacity-100"
	>
		{children}	
	</Transition>
  )
}

export default SimpleTransition