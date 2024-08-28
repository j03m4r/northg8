export const opacity = {
	initial: {
		opacity: 0
	},
	inView: (i: number) => ({
		opacity: 1,
		transition: { duration: .25, delay: 0.05 * i }
	}),
	outView: {
		opacity: 0
	}
}
