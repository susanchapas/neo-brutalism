import cardStyles from '../styles/card.module.css';
import timelineStyles from '../styles/timeline.module.css';

const timelineItems = [
	{
		date: '1950s-1960s',
		title: 'Brutalist Architecture Origins',
		description: 'Concrete structures emphasizing raw materials and functionality.',
	},
	{
		date: '1980s-1990s',
		title: 'Swiss Typography Influence',
		description: 'Grid-based, sans-serif typography principles.',
	},
	{
		date: '1990s-2000s',
		title: 'Early Web and Browser Defaults',
		description: 'Times New Roman and basic HTML layouts.',
	},
	{
		date: '2010s',
		title: 'Skeuomorphism to Flat Design',
		description: 'Transition from realistic to abstract UI elements.',
	},
	{
		date: '2020s',
		title: 'Rise of Figma and Gumroad',
		description: 'Tools enabling raw, unpolished design expressions.',
	},
];

export default function TimelineScroller() {
	return (
		<div className={timelineStyles.timeline_container}>
			<div className={timelineStyles.timeline_wrapper}>
				{timelineItems.map((item, index) => (
					<div
						key={index}
						className={`${timelineStyles.timeline_item} ${
							index % 2 === 0 ? timelineStyles.left : timelineStyles.right
						}`}
					>
						<div className={timelineStyles.timeline_dot}></div>
						<div className={timelineStyles.timeline_item_content}>
							<article
								className={cardStyles.neo_brutalist_card}
								style={{
									backgroundColor: 'var(--paper-white)',
									color: 'var(--foundation-black)',
								}}
							>
								<time
									style={{
										fontFamily: 'var(--mono-font)',
										fontSize: '0.9rem',
									}}
								>
									{item.date}
								</time>
								<h3>{item.title}</h3>
								<p>{item.description}</p>
							</article>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}