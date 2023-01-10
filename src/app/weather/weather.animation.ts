import { trigger, animate, transition, style, group, query } from '@angular/animations';

export const slideAnimation = trigger('slideAnimation', [
	transition('* <-> *', [
		query(':enter, :leave', style({position: 'fixed', width: '100%', zIndex:2}), {optional: true }),
		group([
			query(':enter', [
				style({ transform: 'translateY(1vh)', opacity: '0%' }),
				animate('0.15s ease-out', style({ transform: 'translateY(0)', opacity: '100%'}))
			], {optional: true}),
			query(':leave', [
				style({ opacity: '0%' }),
				animate('0s ease-out', style({ opacity: '0%'}))
			], {optional: true})
		])
	])
])